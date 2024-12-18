import { JoinButton } from "@/app/events/ethcon-korea/components";
import Button from "@/components/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EthconSectionHeader() {
  const pathname = usePathname();

  return (
    <div className="flex h-[32rem] items-stretch justify-center bg-[#FFF0DD]">
      <div className="mx-auto flex max-w-[1536px] flex-auto items-center justify-between px-[10.4rem] pt-[6.5rem] max-md:px-[1.6rem]">
        <div className="flex h-full flex-col justify-between">
          <Link href="/events" className="flex items-center text-md">
            <ArrowBackIosIcon
              className="text-sm"
              sx={{
                fontSize: "medium",
              }}
            />
            <p className="text-3xl">Back to Event</p>
          </Link>

          <div className="mt-10 h-full flex-col items-center justify-center">
            <p className="text-[56px] font-semibold">Ethcon Challenges</p>
            <div className="flex items-stretch gap-2">
              <JoinButton />

              {pathname === "/events/ethcon-korea/scoreboard" ? (
                <Button
                  sx={{ width: "50% !important" }}
                  href="/events/ethcon-korea"
                >
                  Challenges
                </Button>
              ) : (
                <Button
                  sx={{ width: "50% !important" }}
                  href="/events/ethcon-korea/scoreboard"
                >
                  Scoreboard
                </Button>
              )}
            </div>
          </div>
        </div>
        <Image
          src="/images/events/ethcon.svg"
          alt="ethcon"
          className={`max-h-full object-contain max-md:max-h-[90%]`}
        />
      </div>
    </div>
  );
}
