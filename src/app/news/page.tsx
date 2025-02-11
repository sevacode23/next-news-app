import Link from "next/link";

import { DUMMY_NEWS, ROUTES } from "@/const";

export default function NewsPage() {
  const RenderNews = DUMMY_NEWS.map((newsItem) => (
    <li key={newsItem.id}>
      <Link href={ROUTES.NEWS + "/" + newsItem.slug}>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <span>{newsItem.title}</span>
      </Link>
    </li>
  ));

  return (
    <>
      <header>
        <h1>News Page</h1>
      </header>

      <ul className="news-list">{RenderNews}</ul>
    </>
  );
}
