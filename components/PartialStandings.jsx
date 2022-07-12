import { Table, User } from "@nextui-org/react";
import React from "react";

function PartialStandings({ driverStandings }) {
  const driverStanding =
    driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  console.log(driverStanding);

  return (
    <div className="h-[480px] overflow-y-auto">
      <h1 className="text-center text-2xl pt-3">Drivers Standings</h1>
      <Table
        id={`react-aria-3-.0.0`}
        sticked
        striped
        lined
        bordered={false}
        css={{
          height: "50%",
          width: "100%",
          padding: "10px",
        }}
        aria-label="Partial standings table"
      >
        <Table.Header>
          <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
            POSITION
          </Table.Column>
          <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
            DRIVER
          </Table.Column>
          <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
            POINTS
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {driverStanding.map((pos) => {
            return (
              <Table.Row key={pos.position}>
                <Table.Cell
                  css={{
                    fontWeight: "600",
                  }}
                >
                  {pos.position}
                </Table.Cell>
                <Table.Cell>
                  <User
                    squared
                    src={`../img/pilots/${pos.Driver.familyName}.png`}
                    name={pos.Driver.givenName + " " + pos.Driver.familyName}
                    css={{ p: 0 }}
                  >
                    {pos.Constructors[0].name}
                  </User>
                </Table.Cell>
                <Table.Cell>{pos.points}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <Table.Pagination shadow noMargin align="center" rowsPerPage={5} />
      </Table>
    </div>
  );
}

export default PartialStandings;
