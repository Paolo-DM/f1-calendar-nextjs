import { Button } from "@nextui-org/react";
import Link from "next/link";

function RaceSchedule({ data, raceId }) {
  return (
    <div className=" h-full flex items-center justify-center py-5 border-gray-400 border-t  md:border-none md:py-0">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-3xl">{data.RaceTable.Races[raceId].raceName}</h1>
        <p className="text-xl">
          <strong>Circuit</strong>:{" "}
          {data.RaceTable.Races[raceId].Circuit.circuitName}
        </p>
        <p className="text-xl">
          <strong>Date</strong>: {data.RaceTable.Races[raceId].date}
        </p>
        <p className="text-xl">
          <strong>Time</strong>: {data.RaceTable.Races[raceId].time}
        </p>

        <Button bordered auto className="w-1/2">
          <a
            href={`${data.RaceTable.Races[raceId].Circuit.url}`}
            target="_blank"
            rel="noreferrer"
          >
            Wiki Report
          </a>
        </Button>
      </div>
    </div>
  );
}

export default RaceSchedule;
