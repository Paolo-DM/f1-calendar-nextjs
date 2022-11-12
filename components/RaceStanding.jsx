import { Table } from "@nextui-org/react";
import useSWR from "swr";
import { Loading } from "@nextui-org/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function RaceStanding({ year, raceRound }) {
  const { data, error } = useSWR(
    `https://ergast.com/api/f1/${year}/${raceRound}/results.json`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <Loading size="lg">Loading</Loading>;

  const raceName = data.MRData.RaceTable.Races[0]?.raceName;

  return (
    <div>
      <h1 className="text-center pb-1 font-mono text-2xl tracking-wide">
        {raceName ? raceName + " " + year : ""}
      </h1>
      <Table
        sticked
        borderWeight={"light"}
        shadow={false}
        css={{
          height: "auto",
          minWidth: "100%",
          p: "$0",
        }}
        aria-label="Race results table"
      >
        <Table.Header>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
              paddingRight: "$8",
            }}
          >
            Pos
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
            }}
          >
            Driver
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
            }}
          >
            Car
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
            }}
          >
            Time/Retired
          </Table.Column>
          <Table.Column
            css={{
              backgroundColor: "#0b2834",
              color: "white",
            }}
          >
            Points
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {data.MRData.RaceTable.Races[0]?.Results.map((race) => {
            console.log("race", race);
            return (
              <Table.Row
                key={race.position}
                css={{
                  "&:nth-child(even)": { backgroundColor: "#f1f3f5" },
                }}
              >
                <Table.Cell
                  css={{
                    fontWeight: "600",
                  }}
                >
                  {race.position}
                </Table.Cell>
                <Table.Cell>{race.Driver.familyName}</Table.Cell>
                <Table.Cell>{race.Constructor.name}</Table.Cell>
                <Table.Cell>
                  {race.Time ? race.Time.time : race.status}
                </Table.Cell>
                <Table.Cell css={{ color: "$blue900", fontWeight: "600" }}>
                  {race.points}
                </Table.Cell>
              </Table.Row>
            );
          })}
          ;
        </Table.Body>
      </Table>
    </div>
  );
}

export default RaceStanding;
