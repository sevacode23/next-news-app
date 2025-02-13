import Link from "next/link";
import { notFound } from "next/navigation";

import { DUMMY_NEWS, ROUTES } from "@/lib/constants";
import { IParamsProps } from "@/types";

export default async function NewsDetailPage(props: IParamsProps<"slug">) {
  const { params } = props;

  const slug = (await params).slug;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    return notFound();
  }

  return (
    <article className="news-article">
      <header>
        <h1>{newsItem.title}</h1>

        <Link href={`${ROUTES.NEWS}/${newsItem.slug}${ROUTES.IMAGE}`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>

        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>

      <p>{newsItem.content}</p>
    </article>
  );
}
