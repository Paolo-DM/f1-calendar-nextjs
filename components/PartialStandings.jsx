import { Table, User } from "@nextui-org/react";
import React from "react";

function PartialStandings({ standings, type }) {
  const driverStanding =
    standings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  const constructorStanding =
    standings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
  console.log(driverStanding);
  console.log(constructorStanding);

  return (
    <div className=" h-auto flex flex-col justify-center  bg-white ">
      {type === "Driver" ? (
        <Table
          id={`react-aria-3-.0.0`}
          borderWeight={0}
          css={{
            height: "100%",
            width: "100%",
            p: "$md",
            paddingTop: "$0",
          }}
          aria-label="Partial standings table"
        >
          <Table.Header>
            <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
              POSITION
            </Table.Column>
            <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
              {type.toUpperCase()}
            </Table.Column>
            <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
              POINTS
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {driverStanding.map((pos) => {
              return (
                <Table.Row
                  key={pos.position}
                  css={{ "&:nth-child(even)": { backgroundColor: "#f1f3f5" } }}
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
                      src={`../img/pilots/${pos.Driver.familyName}.png`}
                      name={"paolo"}
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
          <Table.Pagination shadow noMargin align="center" rowsPerPage={7} />
        </Table>
      ) : (
        <Table
          id={`react-aria-3-.0.0`}
          borderWeight={0}
          css={{
            height: "100%",
            width: "100%",
            p: "$md",
            paddingTop: "$0",
          }}
          aria-label="Partial standings table"
        >
          <Table.Header>
            <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
              POSITION
            </Table.Column>
            <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
              {type.toUpperCase()}
            </Table.Column>
            <Table.Column css={{ backgroundColor: "#0b2834", color: "white" }}>
              POINTS
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {constructorStanding.map((pos) => {
              return (
                <Table.Row
                  key={pos.position}
                  css={{ "&:nth-child(even)": { backgroundColor: "#f1f3f5" } }}
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
                      src={`../img/pilots/leclerc.png`}
                      name={"paolo"}
                      css={{ p: 0 }}
                    >
                      {pos.Constructor.name}
                    </User>
                  </Table.Cell>
                  <Table.Cell css={{ color: "$blue900", fontWeight: "900" }}>
                    {pos.points}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
          <Table.Pagination shadow noMargin align="center" rowsPerPage={7} />
        </Table>
      )}
    </div>
  );
}

export default PartialStandings;
