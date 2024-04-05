import React, { FormEventHandler, ReactNode } from "react";
import { Button } from "../Button";
import { SquareX } from "lucide-react";
import { useParams } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
  children?: ReactNode;
  code?: string;
}

const Modal = ({ isOpen, isClose, children, code }: ModalProps) => {
  if (!isOpen) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "background") isClose();
  };

  const slug = useParams().slug;

  const handleShare = () => {
    const text = `I have successfully completed the ${slug} challenge. This is my code: ${code}!`;
    const warpcastUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}`;
    window.open(warpcastUrl, "_blank");
  };

  return (
    <div
      className="inset-0 bg-opacity-25 backdrop-blur-sm z-20 flex justify-center items-center fixed"
      id="background"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        <Button
          variant="ghost"
          size="icon"
          className="relative place-self-end"
          aria-label="Close"
          onClick={isClose}
        >
          <SquareX className="size-5" />
        </Button>
        <div className="bg-slate-700 p-4 rounded-lg">{children}</div>
        <div className="flex justify-center space-x-8">
          <Button
            variant="outline"
            className="rounded-lg mt-2 w-1/3 bg-emerald-500"
            onClick={handleShare}
          >
            Publish on Warpcast!
          </Button>
          <Button
            variant="outline"
            className="rounded-lg mt-2 w-1/3 bg-emerald-500"
          >
            Publish on Warpcast!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
