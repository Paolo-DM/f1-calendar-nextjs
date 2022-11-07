import { Table, User } from "@nextui-org/react";

function FullCalendar({ standings, type }) {
  const driverStanding =
    standings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  console.log("DA FULLCALENDAR:", driverStanding);
  return (
    <>
      <Table
        sticked
        borderWeight={0}
        css={{
          height: "auto",
          minWidth: "100%",
          position: "absolute",
          p: "$xs",
          paddingTop: "$0",
          paddingBottom: "$2",
        }}
        aria-label="Partial standings table"
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
            POS
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
            {type.toUpperCase()}
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
            POINTS
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {driverStanding.map((pos) => {
            return (
              <Table.Row
                key={pos.position}
                css={{
                  "&:nth-child(even)": { backgroundColor: "#f1f3f5" },
                }}
              >
                <Table.Cell
                  css={{
                    fontWeight: "600",
                  }}
                >
                  {pos.position}
                </Table.Cell>
                <Table.Cell>
                  <User
                    size="lg"
                    squared
                    src={`../img/pilots/${pos.Driver.driverId}.png`}
                    name={`${pos.Driver.givenName} ${pos.Driver.familyName}`}
                    css={{ p: 0 }}
                  >
                    {pos.Constructors[0].name}
                  </User>
                </Table.Cell>
                <Table.Cell css={{ color: "$blue900", fontWeight: "900" }}>
                  {pos.points}
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
