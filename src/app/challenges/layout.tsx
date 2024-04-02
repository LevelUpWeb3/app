import { ReactNode } from "react";
import {
  Book,
  Bot,
  Home,
  LifeBuoy,
  Share,
  SquareTerminal,
  SquareUser
} from "lucide-react";

import { Button, buttonVariants } from "../../components/Button";
import { SwitchTheme } from "@/components/DarkMode";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "../../components/Tooltip";
import Link from "next/link";

export default function ChallengesLayout({
  beginner,
  ide
}: {
  beginner: ReactNode;
  ide: ReactNode;
}) {
  return (
    <div className="grid h-screen w-full pl-[53px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "bg-muted"
            })}
            href="/"
          >
            <Home className="size-5" />
          </Link>
        </div>
        <nav className="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg "
                  aria-label="Playground"
                >
                  <SquareTerminal className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
              >
                Playground
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Models"
                >
                  <Bot className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
              >
                Models
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
              >
                Documentation
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Share"
                >
                  <Share className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
              >
                Share
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                    className: "mt-auto rounded-lg"
                  })}
                  href="https://t.me/levelupscroll"
                >
                  <LifeBuoy className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
              >
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
              >
                Account
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col">
        <main className="grid gap-4 grid-cols-2 w-full h-[100vh] p-4 sm:w-full md:w-full lg:w-full ">
          <div className="overflow-y-auto items-start">{beginner}</div>
          <div className=" overflow-y-hidden max-h-[100vh] rounded-xl">
            {ide}
            <div />
          </div>
        </main>
      </div>
    </div>
  );
}
