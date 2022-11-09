import { useState } from "react";
import YearPicker from "../../components/YearPicker";
import FullCalendar from "../../components/FullCalendar";

const currentYear = new Date().getFullYear();

export async function getStaticPaths() {
  return {
    paths: [{ params: { year: "1950" } }, { params: { year: "1951" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps = async (context) => {
  console.log("PARAMS:", context.params.year);
  const res = await fetch(
    `https://ergast.com/api/f1/${context.params.year}.json`
  );
  const schedule = await res.json();

  const res1 = await fetch(
    `https://ergast.com/api/f1/${context.params.year}/results.json?limit=400`
  );
  const results = await res1.json();

  return {
    props: {
      schedule: schedule,
      yearlyResults: results,
      selectedYear: context.params.year,
    },
  };
};

function CalendarDetail({ schedule, yearlyResults, selectedYear }) {
  const [year, setYear] = useState(selectedYear);
  return (
    <>
      <YearPicker
        year={year}
        setYear={setYear}
        currentYear={currentYear}
      ></YearPicker>
      <FullCalendar
        schedule={schedule}
        yearlyResults={yearlyResults}
        year={year}
      ></FullCalendar>
    </>
  );
}

export default CalendarDetail;
