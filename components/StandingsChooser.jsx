import { Button } from "@nextui-org/react";
import { FlagIcon } from "@heroicons/react/outline";
import Link from "next/link";

const currentYear = new Date().getFullYear();

function StandingsChooser() {
  return (
    <div className="bg-[#42636e] flex justify-center text-white">
      <Button.Group ripple className="font-['Raleway'] ">
        <Button className="w-64 md:w-96  bg-[#42636e]  text-lg md:text-xl">
          <Link href={`/standings/driver-standings/${currentYear}`}>
            Driver Standings
          </Link>
        </Button>
        <FlagIcon className="w-8 font-light" />
        <Button className="w-64 md:w-96  bg-[#42636e]  text-lg md:text-xl">
          <Link href={`/standings/constructor-standings/${currentYear}`}>
            Constructor Standings
          </Link>
        </Button>
      </Button.Group>
    </div>
  );
}

export default StandingsChooser;
