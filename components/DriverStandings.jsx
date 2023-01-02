import { Table, User } from "@nextui-org/react";
import { flags } from "../public/img/flags/flagsCodeObj";

function DriverStandings({ standing }) {
  const driverStanding =
    standing.MRData.StandingsTable.StandingsLists[0]?.DriverStandings;

  if (!driverStanding) {
    return (
      <div className="h-[700px] text-center">
        <h1 className="text-2xl font-['Raleway'] text-[#0b2834] pt-14">
          Standings for selected season not yet available
        </h1>
      </div>
    );
  } else {
    return (
      <div className="w-[99%] md:w-[80%] mx-auto mb-8">
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
              Position
            </Table.Column>
            <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway']">
              Driver
            </Table.Column>

            <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway']">
              Car
            </Table.Column>
            <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway'] pr-4">
              Wins
            </Table.Column>
            <Table.Column className="text-sm md:text-lg bg-[#0b2834] text-white font-['Raleway']">
              Points
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {driverStanding.map((pos) => {
              let nationality = pos.Driver.nationality;
              let found = flags.find((country) => country.adj === nationality);
              let code = found ? found.code : "n/a";

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
                      zoomed
                      size="lg"
                      src={`../../img/flags/${code.toLowerCase()}.svg`}
                      altText="Country flag"
                      name={
                        <p className="font-mono text-xs sm:text-base md:text-lg">
                          {pos.Driver.givenName + " " + pos.Driver.familyName}
                        </p>
                      }
                      css={{ p: 0 }}
                    >
                      <p className="font-mono text-xs md:text-sm">
                        {pos.Driver.permanentNumber}
                      </p>
                    </User>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="font-mono text-xs sm:text-base md:text-lg">
                      {pos.Constructors[0].name}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <p className="font-mono text-xs sm:text-base md:text-lg">
                      {pos.wins}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="font-mono text-xs sm:text-base md:text-lg font-semibold">
                      {pos.points}
                    </p>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default DriverStandings;
