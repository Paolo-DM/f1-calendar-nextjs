import { useState } from "react";
import YearPicker from "../../../components/YearPicker";
import ConstructorStandings from "../../../components/ConstructorStandings";
import { yearList } from "../../../components/YearPicker";
import StandingsChooser from "../../../components/StandingsChooser";

const currentYear = new Date().getFullYear();

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on years
  const paths = yearList(1958, currentYear).map((y) => ({
    params: { year: y.toString() },
  }));
  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://ergast.com/api/f1/${params.year}/constructorStandings.json`
  );
  const standing = await res.json();

  return {
    props: {
      standing: standing,
      selectedYear: params.year,
    },
    revalidate: 7200,
  };
};

function ConstStandings({ standing, selectedYear }) {
  const [year, setYear] = useState(selectedYear);
  return (
    <>
      <StandingsChooser></StandingsChooser>
      <YearPicker
        year={year}
        setYear={setYear}
        currentYear={currentYear}
        route="constructor-standings"
        startingY={1958}
        description="Select a year to see its constructor standings"
      ></YearPicker>
      <ConstructorStandings
        standing={standing}
        year={year}
      ></ConstructorStandings>
    </>
  );
}

export default ConstStandings;
