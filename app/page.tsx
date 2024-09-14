import FlickeringGrid from "@/components/magicui/flickering-grid";
import Marquee from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <FlickeringGrid
        className="z-0 absolute inset-0  w-full h-full"
        squareSize={2}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <section className="landing-main">
        <div className="mx-auto items-center text-center z-10">
          <h1 className="mb-4 text-5xl text-center font-extrabold leading-none tracking-tighter md:text-5xl xl:text-6xl">
            Transactly
          </h1>
          <p className="mb-8 max-w-3xl font-semibold text-gray-700 text-lg lg:text-xl">
            Simplify Your Finances, Track Every Transaction.
          </p>
          <p className="mb-6 max-w-3xl font-light text-gray-700 text-lg">
            Transactly is a powerful platform designed to track all your
            transactions across multiple banks. Created by kv4biz, this project
            showcases advanced skills and knowledge in building cutting-edge
            fintech solutions.
          </p>
          <div className="flex justify-center space-x-8">
            <Link href="/sign-up">
              <Button className="button-primary">
                Get Started <MoveUpRight className="ml-2" />
              </Button>
            </Link>
            <Link href="https://kv4biz.vercel.app">
              <Button className="button-primary">
                My Portfolio <MoveUpRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white z-10">
        <div className="mx-auto px-4 py-4">
          <Marquee pauseOnHover className="[--duration:100s]">
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
                className="flex items-center mx-4 md:mx-6 lg:mx-12"
              >
                <img src={tech.icon} alt={tech.name} className="w-14 h-14" />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <section className="landing-footer">
        <p className="tracking-wider">
          Special thanks to{" "}
          <a
            href="https://www.jsmastery.pro"
            className="underline underline-offset-8"
          >
            JavaScript Mastery
          </a>{" "}
          for the inspiration and guidance.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
