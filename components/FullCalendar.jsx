import { Table, User } from "@nextui-org/react";
import { EyeIcon } from "@heroicons/react/outline";

function FullCalendar({ schedule, year }) {
  // const driverStanding =
  //   standings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  // console.log("DA FULLCALENDAR:", driverStanding);
  const yearSchedule = schedule.MRData.RaceTable.Races;

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
              position: "sticky",
              top: "0",
              zIndex: "$max",
            }}
          >
            ROUND
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              position: "sticky",
              top: "0",
              zIndex: "$max",
            }}
          >
            RACE CIRCUIT
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              position: "sticky",
              top: "0",
              zIndex: "$max",
            }}
          >
            DATE
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              position: "sticky",
              top: "0",
              zIndex: "1",
            }}
          >
            WINNER
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              position: "sticky",
              top: "0",
              zIndex: "$max",
            }}
          >
            RESULTS
          </Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row
            css={{
              "&:nth-child(even)": { backgroundColor: "#f1f3f5" },
            }}
          >
            <Table.Cell
              css={{
                fontWeight: "600",
              }}
            >
              {yearSchedule[0].round}
            </Table.Cell>
            <Table.Cell>
              <User
                size="lg"
                squared
                src={`../img/pilots/leclerc.png`}
                name={`Bahrain Grand Prix`}
                css={{ p: 0 }}
              >
                {"Bahrain International Circuit"}
              </User>
            </Table.Cell>
            <Table.Cell css={{ color: "$blue900", fontWeight: "600" }}>
              {"11/09/2022, 15:00"}
            </Table.Cell>
            <Table.Cell css={{ color: "$blue900", fontWeight: "900" }}>
              {"C.Leclerc"}
            </Table.Cell>
            <Table.Cell>
              <EyeIcon className="w-8 hover:text-[#979797a9] hover:cursor-pointer text-[#979797]" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default FullCalendar;
