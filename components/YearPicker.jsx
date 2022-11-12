import { Collapse } from "@nextui-org/react";
import Link from "next/link";

export const yearList = (currY) => {
  const years = [];
  for (let i = 1950; i <= currY; i++) {
    years.push(i);
  }
  return years;
};

function YearPicker({ year, setYear, currentYear, route }) {
  return (
    <div className="md:w-[50%] md:mx-auto my-3 mx-1">
      <Collapse
        bordered
        title={
          <p className="text-2xl font-['Raleway'] font-semibold">{year}</p>
        }
        subtitle={
          <p className="text-xl font-['Raleway']">
            Choose a year to see its calendar and results
          </p>
        }
      >
        <div className="flex flex-wrap gap-4">
          {yearList(currentYear).map((year) => {
            if (route === "calendar") {
              return (
                <Link key={year} href={`/calendar/${year}`}>
                  <a
                    className="text-[#0072f5] hover:text-blue-400"
                    onClick={() => setYear(year)}
                  >
                    {year}
                  </a>
                </Link>
              );
            } else if (route === "driver-standings") {
              return (
                <Link key={year} href={`/standings/driver-standings/${year}`}>
                  <a
                    className="text-[#0072f5] hover:text-blue-400"
                    onClick={() => setYear(year)}
                  >
                    {year}
                  </a>
                </Link>
              );
            } else {
              return (
                <Link
                  key={year}
                  href={`/standings/constructor-standings/${year}`}
                >
                  <a
                    className="text-[#0072f5] hover:text-blue-400"
                    onClick={() => setYear(year)}
                  >
                    {year}
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </Collapse>
    </div>
  );
}

export default YearPicker;
