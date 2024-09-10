import React, { useState } from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import { DatePicker } from "./DatePicker";
import { format } from "date-fns";
import { Eye, EyeOff } from "lucide-react"; // Make sure to import icons from lucide-react or any icon library

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              {name === "dateOfBirth" ? (
                // Use the DatePicker for date input and handle date selection
                <div className=" flex w-52">
                  <DatePicker
                    selectedDate={
                      field.value ? new Date(field.value) : undefined
                    }
                    onDateChange={(date) =>
                      field.onChange(date ? format(date, "yyyy-MM-dd") : "")
                    }
                  />
                </div>
              ) : (
                // Use the regular Input for other types
                <div className="relative">
                  <Input
                    placeholder={placeholder}
                    className="input-class"
                    type={
                      name === "password"
                        ? showPassword
                          ? "text"
                          : "password"
                        : "text"
                    }
                    {...field}
                    value={field.value}
                  />
                  {name === "password" && (
                    <button
                      type="button"
                      onClick={handlePasswordToggle}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  )}
                </div>
              )}
            </FormControl>
            <FormMessage className="form-message py-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
