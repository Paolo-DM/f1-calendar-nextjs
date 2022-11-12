import { useState } from "react";
import YearPicker from "../../components/YearPicker";
import FullCalendar from "../../components/FullCalendar";
import { yearList } from "../../components/YearPicker";
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
  const res = await fetch(`https://ergast.com/api/f1/${params.year}.json`);
  const schedule = await res.json();

  return {
    props: {
      schedule: schedule,
      selectedYear: params.year,
    },
  };
};

function CalendarDetail({ schedule, selectedYear }) {
  const [year, setYear] = useState(selectedYear);
  return (
    <>
      <YearPicker
        year={year}
        setYear={setYear}
        currentYear={currentYear}
        route="calendar"
        startingY={1950}
      ></YearPicker>
      <FullCalendar schedule={schedule} year={year}></FullCalendar>
    </>
  );
}

export default CalendarDetail;
