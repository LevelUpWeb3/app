import React, { ReactNode, useRef } from "react";
import { Button } from "../Button";
import { SquareX } from "lucide-react";
import { useParams } from "next/navigation";
import html2canvas from "html2canvas";

interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
  children?: ReactNode;
  code?: string;
}

const Modal = ({ isOpen, isClose, children, code }: ModalProps) => {
  if (!isOpen) return null;
  const modalRef = useRef(null);

  const handleClose = (e: any) => {
    if (e.target.id === "background") isClose();
  };

  const takeBlob = () => {
    if (modalRef.current) {
      html2canvas(modalRef.current).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) {
            console.log(blob);
            const url = URL.createObjectURL(blob);
            // const text = `I have successfully completed the ${slug} challenge. This is my code: ${blob}`;
            // const warpcastUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}&embeds[]=${encodeURIComponent(url)}`;
            // window.open(warpcastUrl, "_blank");
            window.open(url, "_blank");
          } else {
            console.error("Failed to create blob from canvas");
          }
        }, "image/png");
      });
    }
  };

  const takeScreenshot = () => {
    if (modalRef.current) {
      html2canvas(modalRef.current).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        window.open(img, "_blank");
        console.log(img);
        const a = document.createElement("a");
        a.href = img;
        a.download = "screenshot.png";
        a.click();
        // const text = `I have successfully completed the ${slug} challenge. This is my code: <img src="${img}" />!`;
        // const warpcastUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}&embeds[]=${img}`;
        // const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        // window.open(warpcastUrl, "_blank");
      });
    }
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
        <div
          className="bg-slate-200 p-4 rounded-lg"
          ref={modalRef}
        >
          {children}
        </div>
        <div className="flex justify-center space-x-8">
          <Button
            variant="outline"
            className="rounded-lg mt-2 w-1/3 bg-fuchsia-500"
            onClick={handleShare}
          >
            Publish on Warpcast!
          </Button>
          <Button
            variant="outline"
            className="rounded-lg mt-2 w-1/3 bg-blue-500"
            onClick={takeScreenshot}
          >
            Publish on X!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
