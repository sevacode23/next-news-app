import { NewsList } from "@/components";
import { getNewsForYear } from "@/lib/utils";
import { IParamsProps } from "@/types";

export default async function ArchiveYearPage(props: IParamsProps<"year">) {
  const { params } = props;

  const year = (await params).year;

  const news = getNewsForYear(+year);

  return <NewsList news={news} />;
}
