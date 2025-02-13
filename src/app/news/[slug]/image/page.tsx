import { notFound } from "next/navigation";

import { getAllNews } from "@/lib/utils";
import { IParamsProps } from "@/types";

export default async function ImagePage(props: IParamsProps<"slug">) {
  const { params } = props;

  const slug = (await params).slug;

  const news = getAllNews().find((news) => news.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
