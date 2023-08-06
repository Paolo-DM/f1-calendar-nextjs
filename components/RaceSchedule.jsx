import { Button } from "@nextui-org/react";
import { formatDateWithHours } from "../utils/formatDate";

function RaceSchedule({ data, raceId }) {
  const raceDate = formatDateWithHours(
    data.RaceTable.Races[raceId].date,
    data.RaceTable.Races[raceId].time
  );
  const qualifyingDate = formatDateWithHours(
    data.RaceTable.Races[raceId].Qualifying.date,
    data.RaceTable.Races[raceId].Qualifying.time
  );

  const firstPracticeDate = formatDateWithHours(
    data.RaceTable.Races[raceId].FirstPractice?.date,
    data.RaceTable.Races[raceId].FirstPractice?.time
  );

  const secondPracticeDate = formatDateWithHours(
    data.RaceTable.Races[raceId].SecondPractice?.date,
    data.RaceTable.Races[raceId].SecondPractice?.time
  );

  const thirdPracticeDate = formatDateWithHours(
    data.RaceTable.Races[raceId].ThirdPractice?.date,
    data.RaceTable.Races[raceId].ThirdPractice?.time
  );

  const sprintDate = data.RaceTable.Races[raceId].Sprint
    ? new Date(
        data.RaceTable.Races[raceId].Sprint?.date +
          " " +
          data.RaceTable.Races[raceId].Sprint?.time
      )
    : null;

  return (
    <div className="h-full flex items-center justify-center py-5 border-gray-400 border-t  md:border-none md:py-0">
      <div className="flex flex-col text-center gap-1 font-mono">
        <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
          {data.RaceTable.Races[raceId].raceName}
        </h1>
        <span className="text-xl md:text-base lg:text-lg xl:text-xl ">
          <strong>Circuit</strong>:{" "}
          <span className="text-gray-600">
            {data.RaceTable.Races[raceId].Circuit.circuitName}
          </span>
        </span>
        <span className="text-xl md:text-base lg:text-lg xl:text-xl ">
          <strong>Free Practice Sessions</strong>:
          <ul className="text-gray-600 flex flex-col items-center">
            <div className="text-justify">
              {firstPracticeDate && (
                <li className="text-xl md:text-base lg:text-lg xl:text-xl">
                  <strong>FP1:</strong> {firstPracticeDate}
                </li>
              )}
              {secondPracticeDate && (
                <li className="text-xl md:text-base lg:text-lg xl:text-xl">
                  <strong>FP2:</strong> {secondPracticeDate}
                </li>
              )}
              {thirdPracticeDate && (
                <li className="text-xl md:text-base lg:text-lg xl:text-xl">
                  <strong>FP3:</strong> {thirdPracticeDate}
                </li>
              )}
            </div>
          </ul>
        </span>

        <span className="text-xl md:text-base lg:text-lg xl:text-xl ">
          <strong>Qualifying</strong>:{" "}
          <span className="text-gray-600">{qualifyingDate}</span>
        </span>
        {sprintDate && (
          <>
            <span className="text-xl md:text-base lg:text-lg xl:text-xl ">
              <strong>Sprint Race</strong>:{" "}
              {sprintDate ? (
                <span className="text-gray-600">
                  {sprintDate.toLocaleString().slice(0, -3)}
                </span>
              ) : (
                <span className="text-gray-600">{"n/a"}</span>
              )}
            </span>
          </>
        )}
        <span className="text-xl md:text-base lg:text-lg xl:text-xl ">
          <strong>Race</strong>:{" "}
          <span className="text-gray-600">{raceDate}</span>
        </span>

        <div className="self-center">
          <Button bordered auto className="text-base lg:text-base xl:text-xl">
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
    </div>
  );
}

export default RaceSchedule;
