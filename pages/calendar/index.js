import React from "react";
import YearPicker from "../../components/YearPicker";
import FullCalendar from "../../components/FullCalendar";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://ergast.com/api/f1/current/driverStandings.json"
  );
  const driverStandings = await res.json();

  return {
    props: {
      driverStandings: driverStandings,
    },
  };
};

function Calendar({ driverStandings }) {
  return (
    <>
      <YearPicker></YearPicker>
      <FullCalendar standings={driverStandings} type="Driver"></FullCalendar>
    </>
  );
}

export default Calendar;
