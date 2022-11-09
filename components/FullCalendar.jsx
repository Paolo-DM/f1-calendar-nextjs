import { Table, User } from "@nextui-org/react";
import { EyeIcon } from "@heroicons/react/outline";
import { flags } from "../public/img/flags/flagsCodeObj";

function FullCalendar({ schedule, yearlyResults }) {
  const yearSchedule = schedule.MRData.RaceTable.Races;
  const yearResults = yearlyResults.MRData.RaceTable.Races;

  return (
    <div className="md:w-[99%] md:mx-auto">
      <Table
        className="z-0"
        sticked
        bordered
        borderWeight={"light"}
        shadow={false}
        css={{
          height: "auto",
          padding: "$xs",
        }}
        aria-label="Calendar table"
      >
        <Table.Header>
          <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway'] pr-1 md:pr-0">
            Round
          </Table.Column>
          <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway']">
            Race & Circuit
          </Table.Column>
          <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway']">
            Date
          </Table.Column>
          <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway']">
            Winner
          </Table.Column>
          <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway']">
            Results
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {yearSchedule.map((race) => {
            const raceDate = new Date(race.date + " " + race.time);
            const raceYear = new Date(race.date).getFullYear();
            let countryName = race.Circuit.Location.country;
            let found = flags.find((country) => country.name === countryName);
            let code = found ? found.code : "n/a";

            return (
              <Table.Row
                key={race.round}
                css={{
                  "&:nth-child(even)": { backgroundColor: "#f1f3f5" },
                }}
              >
                <Table.Cell
                  css={{
                    fontWeight: "600",
                  }}
                >
                  {race.round}
                </Table.Cell>
                <Table.Cell>
                  <User
                    className=""
                    zoomed
                    size="lg"
                    src={`../img/flags/${code.toLowerCase()}.svg`}
                    altText="Country flag"
                    name={race.raceName}
                    css={{ p: 0 }}
                  >
                    {race.Circuit.circuitName}
                  </User>
                </Table.Cell>
                <Table.Cell>
                  <p className="font-mono text-xs sm:text-base md:text-lg">
                    {raceYear < 2005
                      ? new Date(race.date + ", 03:00:00")
                          .toLocaleString()
                          .slice(0, -10)
                      : raceDate.toLocaleString().slice(0, -3)}
                  </p>
                </Table.Cell>
                <Table.Cell>
                  <p className="font-mono font-semibold text-xs sm:text-base md:text-lg">
                    {yearResults[race.round - 1]
                      ? yearResults[race.round - 1]?.Results[0].Driver
                          .familyName
                      : "n.a."}
                  </p>
                </Table.Cell>
                <Table.Cell>
                  <EyeIcon className="w-8 hover:text-[#979797a9] hover:cursor-pointer text-[#979797]" />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default FullCalendar;
