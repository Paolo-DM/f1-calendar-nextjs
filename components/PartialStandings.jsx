import { Table, User } from "@nextui-org/react";
import React from "react";

function PartialStandings({ driverStandings }) {
  const driverStanding =
    driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  console.log(driverStanding);

  return (
    <>
      <Table
        id={`react-aria-3-.0.0`}
        sticked
        striped
        lined
        css={{
          height: "100%",
          minWidth: "100%",
          padding: "10px",
        }}
        aria-label="Partial standings table"
      >
        <Table.Header>
          <Table.Column>POSITION</Table.Column>
          <Table.Column>DRIVER</Table.Column>
          <Table.Column>POINTS</Table.Column>
        </Table.Header>
        <Table.Body>
          {driverStanding.map((pos) => {
            return (
              <Table.Row key={pos.position}>
                <Table.Cell>{pos.position}</Table.Cell>
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
        <Table.Pagination shadow noMargin align="center" rowsPerPage={6} />
      </Table>
    </>
  );
}

export default PartialStandings;
