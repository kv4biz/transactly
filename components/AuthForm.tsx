"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        // Sign up with Appwrite $ create plaid token
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        };
        const newUser = await signUp(userData);
        setUser(newUser);
        toast.success("Account created successfully!");
      }
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          router.push("/home");
          toast.success("Signed in successfully!");
        } else {
          toast.error("Invalid credentials. Please try again.");
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image src="/icons/logo.svg" width={40} height={40} alt="logo" />
          <h1 className="text-26 font-ibm-plax-serif font-bold text-black-1">
            Transactly
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-2">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      placeholder="Enter your first name"
                      label="First Name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      placeholder="Enter your last name"
                      label="Last Name"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    placeholder="Enter your address"
                    label="Address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    placeholder="Enter city"
                    label="City"
                  />
                  <div className="flex gap-2">
                    <CustomInput
                      control={form.control}
                      name="state"
                      placeholder="ex: NY"
                      label="State"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      placeholder="ex: 10001"
                      label="Postal Code"
                    />
                  </div>
                  <div className="flex gap-2">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      placeholder="Enter your D.O.B"
                      label="Date of Birth"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      placeholder="ex: 123456789"
                      label="SSN"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                name="email"
                placeholder="Enter your email"
                label="Email"
              />
              <CustomInput
                control={form.control}
                name="password"
                placeholder="Enter your password"
                label="Password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "sign-in"}
              className="form-link hover:underline underline-offset-4"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default AuthForm;
