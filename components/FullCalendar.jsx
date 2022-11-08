import { Table, User } from "@nextui-org/react";
import { EyeIcon } from "@heroicons/react/outline";

function FullCalendar({ schedule, yearlyResults }) {
  // const driverStanding =
  //   standings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  // console.log("DA FULLCALENDAR:", driverStanding);
  const yearSchedule = schedule.MRData.RaceTable.Races;
  console.log("YEARLY:", yearlyResults);
  const yearResults = yearlyResults.MRData.RaceTable.Races;
  console.log("YEARLY2:", yearResults);

  return (
    <>
      <Table
        sticked
        bordered
        borderWeight={"light"}
        shadow={false}
        css={{
          height: "auto",
        }}
        aria-label="Calendar table"
      >
        <Table.Header>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              paddingRight: "$8",
              fontFamily: "Raleway",
              fontSize: "$lg",
            }}
          >
            Round
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              fontFamily: "Raleway",
              fontSize: "$lg",
            }}
          >
            Race and Circuit
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              fontFamily: "Raleway",
              fontSize: "$lg",
            }}
          >
            Date
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              fontFamily: "Raleway",
              fontSize: "$lg",
            }}
          >
            Winner
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              fontFamily: "Raleway",
              fontSize: "$lg",
            }}
          >
            Results
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {yearSchedule.map((race) => {
            const raceDate = new Date(race.date + " " + race.time);
            let country = race.Circuit.Location.country;

            // Handle country name exceptions
            if (country === "UK") {
              country = "GB";
            } else if (country === "UAE") {
              country = "ae";
            } else if (country === "Russia") {
              country = "ru";
            } else if (country === "Korea") {
              country = "kr";
            }

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
                    zoomed
                    size="lg"
                    src={`https://countryflagsapi.com/png/${country}`}
                    altText="Country flag"
                    name={race.raceName}
                    css={{ p: 0 }}
                  >
                    {race.Circuit.circuitName}
                  </User>
                </Table.Cell>
                <Table.Cell css={{ fontFamily: "$mono", fontSize: "$lg" }}>
                  {raceDate.toLocaleString().slice(0, -3)}
                </Table.Cell>
                <Table.Cell
                  css={{
                    fontFamily: "Raleway",
                    fontWeight: "600",
                  }}
                >
                  {yearResults[race.round - 1]
                    ? yearResults[race.round - 1]?.Results[0].Driver.familyName
                    : "n.a."}
                </Table.Cell>
                <Table.Cell>
                  <EyeIcon className="w-8 hover:text-[#979797a9] hover:cursor-pointer text-[#979797]" />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}

export default FullCalendar;
