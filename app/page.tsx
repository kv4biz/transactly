import DotPattern from "@/components/magicui/dot-pattern";
import Marquee from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,white_30%,transparent)] absolute inset-0 z-0"
        )}
      />
      <section className="landing-main relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/icons/logo.svg"
              alt="Transactly"
              width={40}
              height={40}
              className="mr-2 sm:mr-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
              Transactly
            </h1>
          </div>
          <p className="mb-4 sm:mb-6 font-semibold text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl">
            Simplify Your Finances, Track Every Transaction.
          </p>
          <p className="mb-6 sm:mb-8 font-light text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl">
            Transactly is a powerful platform designed to track all your
            transactions across multiple banks. Created by kv4biz, this project
            showcases advanced skills and knowledge in building cutting-edge
            fintech solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
            <Link href="/sign-up">
              <Button className="button-primary w-full sm:w-auto">
                Get Started <MoveUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://kv4biz.vercel.app">
              <Button className="button-primary w-full sm:w-auto">
                My Portfolio <MoveUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white relative z-10 w-full mt-16">
        <div className="max-w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:60s] py-6">
            {[
              { name: "Next.js", icon: "/icons/nextjs.svg" },
              { name: "TypeScript", icon: "/icons/typescript.svg" },
              { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
              { name: "shadcn UI", icon: "/icons/shadcnui.svg" },
              { name: "Appwrite", icon: "/icons/appwrite.svg" },
              { name: "Plaid", icon: "/icons/plaid.svg" },
              { name: "Dwolla", icon: "/icons/dwolla.svg" },
              { name: "Sentry", icon: "/icons/sentry.svg" },
              { name: "Vercel", icon: "/icons/vercel.svg" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center mx-4 sm:mx-6 md:mx-8 lg:mx-12"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <footer className="landing-footer relative z-10 w-full mt-8 sm:mt-12 pb-6">
        <p className="text-xs sm:text-sm tracking-wider px-4 max-w-3xl mx-auto text-center">
          Special thanks to{" "}
          <a
            href="https://www.jsmastery.pro"
            className="underline underline-offset-4 hover:text-blue-600 transition-colors"
          >
            JavaScript Mastery
          </a>{" "}
          for the inspiration and guidance.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
