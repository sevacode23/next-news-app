import Link from "next/link";

import { INews } from "@/types/models";
import { ROUTES } from "@/lib/constants";

interface IProps {
  news?: INews[];
}

export const NewsList = (props: IProps) => {
  const { news } = props;

  if (!news?.length) {
    return <p>No news found</p>;
  }

  const RenderNews = news.map((newsItem) => (
    <li key={newsItem.id}>
      <Link href={ROUTES.NEWS + "/" + newsItem.slug}>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <span>{newsItem.title}</span>
      </Link>
    </li>
  ));

  return <ul className="news-list">{RenderNews}</ul>;
};
