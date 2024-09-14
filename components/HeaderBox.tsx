import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CircleAlert } from "lucide-react";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
  message,
  description,
}: HeaderBoxProps) => {
  return (
    <section className="header-box">
      <div className="header-box-context">
        <h1 className="header-box-title">
          {title}
          {type === "greeting" && (
            <span className="text-bankGradient px-1">{user}</span>
          )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
      </div>
      {/* <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label="Open dialog"
            className="relative text-blue-500 hover:text-blue-600" // Added relative positioning to the trigger
          >
            <CircleAlert className="h-6 w-6" />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{message}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </section>
  );
};

export default HeaderBox;
