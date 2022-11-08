import React from "react";
import YearPicker from "../../components/YearPicker";
import FullCalendar from "../../components/FullCalendar";

const year = 2022;

export const getStaticProps = async () => {
  const res = await fetch(`https://ergast.com/api/f1/${year}.json`);
  const schedule = await res.json();

  return {
    props: {
      schedule: schedule,
    },
  };
};

function Calendar({ schedule }) {
  return (
    <>
      <YearPicker></YearPicker>
      <FullCalendar schedule={schedule} type="Driver"></FullCalendar>
    </>
  );
}

export default Calendar;
