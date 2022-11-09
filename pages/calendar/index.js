import { useState } from "react";
import YearPicker from "../../components/YearPicker";
import FullCalendar from "../../components/FullCalendar";

const currentYear = new Date().getFullYear();
export const getStaticProps = async () => {
  const res = await fetch(`https://ergast.com/api/f1/${currentYear}.json`);
  const schedule = await res.json();

  const res1 = await fetch(
    `https://ergast.com/api/f1/${currentYear}/results.json?limit=400`
  );
  const results = await res1.json();

  return {
    props: {
      schedule: schedule,
      yearlyResults: results,
    },
  };
};

function Calendar({ schedule, yearlyResults }) {
  const [year, setYear] = useState(currentYear);
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

export default Calendar;
