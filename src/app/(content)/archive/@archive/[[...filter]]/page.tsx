import { NewsList } from "@/components";
import {
  getAllNews,
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/utils";
import { IAllParamsProps } from "@/types";

import { ArchiveFilter } from "../components";

export default async function ArchivePage(props: IAllParamsProps<"filter">) {
  const { params } = props;

  const filter = (await params).filter;

  const year = filter?.[0];
  const month = filter?.[1];

  if (
    (year && !getAvailableNewsYears().includes(+year)) ||
    (year && month && !getAvailableNewsMonths(+year).includes(+month))
  ) {
    throw new Error("Invalid filter.");
  }

  let news;

  if (year) {
    if (month) {
      news = getNewsForYearAndMonth(+year, +month);
    } else {
      news = getNewsForYear(+year);
    }
  } else {
    news = getAllNews();
  }

  return (
    <>
      <ArchiveFilter year={year ? +year : undefined} />

      <NewsList news={news} />
    </>
  );
}
