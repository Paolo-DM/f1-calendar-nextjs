import { Button } from "@nextui-org/react";

function RaceSchedule({ data, raceId }) {
  const raceDate = new Date(
    data.RaceTable.Races[raceId].date + " " + data.RaceTable.Races[raceId].time
  );
  const qualifyingDate = new Date(
    data.RaceTable.Races[raceId].Qualifying.date +
      " " +
      data.RaceTable.Races[raceId].Qualifying.time
  );
  const sprintDate = data.RaceTable.Races[raceId].Sprint
    ? new Date(
        data.RaceTable.Races[raceId].Sprint?.date +
          " " +
          data.RaceTable.Races[raceId].Sprint?.time
      )
    : null;

  return (
    <div className=" h-full flex items-center justify-center py-5 border-gray-400 border-t  md:border-none md:py-0">
      <div className="flex flex-col gap-4 font-mono">
        <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
          {data.RaceTable.Races[raceId].raceName}
        </h1>
        <p className="text-xl md:text-lg lg:text-xl xl:text-2xl ">
          <strong>Circuit</strong>:{" "}
          <span className="text-gray-600">
            {data.RaceTable.Races[raceId].Circuit.circuitName}
          </span>
        </p>
        <p className="text-xl md:text-lg lg:text-xl xl:text-2xl ">
          <strong>Qualifying</strong>:{" "}
          <span className="text-gray-600">
            {qualifyingDate.toLocaleString().slice(0, -3)}
          </span>
        </p>
        <p className="text-xl md:text-lg lg:text-xl xl:text-2xl ">
          <strong>Sprint Race</strong>:{" "}
          {sprintDate ? (
            <span className="text-gray-600">
              {sprintDate.toLocaleString().slice(0, -3)}
            </span>
          ) : (
            <span className="text-gray-600">{"n/a"}</span>
          )}
        </p>
        <p className="text-xl md:text-lg lg:text-xl xl:text-2xl ">
          <strong>Race</strong>:{" "}
          <span className="text-gray-600">
            {raceDate.toLocaleString().slice(0, -3)}
          </span>
        </p>

        <Button
          bordered
          auto
          className="w-1/2  text-base lg:text-lg xl:text-xl"
        >
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
