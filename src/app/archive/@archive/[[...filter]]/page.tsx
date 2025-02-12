import { NewsList } from "@/components";
import {
  getAllNews,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/utils";
import { IAllParamsProps } from "@/types";

import { ArchiveFilter } from "../components";

export default async function ArchiveYearPage(
  props: IAllParamsProps<"filter">
) {
  const { params } = props;

  const filter = (await params).filter;

  const year = filter?.[0] ? +filter[0] : undefined;
  const month = filter?.[1] ? +filter[1] : undefined;

  let news;

  if (year) {
    if (month) {
      news = getNewsForYearAndMonth(year, month);
    } else {
      news = getNewsForYear(year);
    }
  } else {
    news = getAllNews();
  }

  return (
    <>
      <ArchiveFilter year={year} />

      <NewsList news={news} />
    </>
  );
}
