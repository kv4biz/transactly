import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) {
      toast.success("Logged out successfully!");
      router.push("/sign-in");
    } else {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-lg font-bold text-gray-700 uppercase p-4">
          {user.firstName[0]}
          {user.lastName[0]}
        </p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-[14px] truncate font-normal text-gray-500 capitalize">
          {`${user.firstName} ${user.lastName}`}
        </h1>
        <p className="text-[12px] truncate font-semibold text-gray-700">
          {user.email}
        </p>
      </div>
      <div className="footer-image" onClick={handleLogout}>
        <Image src="icons/logout.svg" alt="logout" width={20} height={20} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </footer>
  );
};

export default Footer;
