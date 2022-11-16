import { useState } from "react";
import YearPicker from "../../../components/YearPicker";
import DriverStandings from "../../../components/DriverStandings";
import { yearList } from "../../../components/YearPicker";
import StandingsChooser from "../../../components/StandingsChooser";

const currentYear = new Date().getFullYear();

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on years
  const paths = yearList(1950, currentYear).map((y) => ({
    params: { year: y.toString() },
  }));
  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://ergast.com/api/f1/${params.year}/driverStandings.json`
  );
  const standing = await res.json();

  return {
    props: {
      standing: standing,
      selectedYear: params.year,
    },
  };
};

function CalendarDetail({ standing, selectedYear }) {
  const [year, setYear] = useState(selectedYear);
  return (
    <>
      <StandingsChooser></StandingsChooser>
      <YearPicker
        year={year}
        setYear={setYear}
        currentYear={currentYear}
        route="driver-standings"
        startingY={1950}
        description="Select a year to see its driver standings"
      ></YearPicker>
      <DriverStandings standing={standing} year={year}></DriverStandings>
    </>
  );
}

export default CalendarDetail;
