import React from "react";
import YearPicker from "../../components/YearPicker";
import FullCalendar from "../../components/FullCalendar";

const year = 2022;

export const getStaticProps = async () => {
  const res = await fetch(`https://ergast.com/api/f1/${year}.json`);
  const schedule = await res.json();

  const res1 = await fetch(
    `https://ergast.com/api/f1/${year}/results.json?limit=400`
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
  return (
    <>
      <YearPicker></YearPicker>
      <FullCalendar
        schedule={schedule}
        yearlyResults={yearlyResults}
        type="Driver"
      ></FullCalendar>
    </>
  );
}

export default Calendar;
