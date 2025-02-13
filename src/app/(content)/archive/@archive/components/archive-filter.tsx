import Link from "next/link";

import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/utils";

interface IYearsProps {
  year?: number;
}

interface IMonthsProps {
  year: number;
}

const Months = (props: IMonthsProps) => {
  const { year } = props;

  const months = getAvailableNewsMonths(+year);

  const RenderMonths = months.map((month) => (
    <li key={month}>
      <Link href={`/archive/${year}/${month}`}>{month}</Link>
    </li>
  ));

  return <ul>{RenderMonths}</ul>;
};

export const ArchiveFilter = (props: IYearsProps) => {
  const { year } = props;

  const years = getAvailableNewsYears();

  const RenderYears = years.map((year) => (
    <li key={year}>
      <Link href={`/archive/${year}`}>{year}</Link>
    </li>
  ));

  const RenderMonths = year ? <Months year={year} /> : null;

  return (
    <header id="archive-header">
      <nav>
        <ul>{RenderYears}</ul>
        {RenderMonths}
      </nav>
    </header>
  );
};
