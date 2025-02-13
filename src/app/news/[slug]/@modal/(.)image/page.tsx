import { notFound } from "next/navigation";

import { getAllNews } from "@/lib/utils";
import { IParamsProps } from "@/types";

import { ModalBackdrop } from "../../components";

export default async function InterceptedImagePage(
  props: IParamsProps<"slug">
) {
  const { params } = props;

  const slug = (await params).slug;

  const news = getAllNews().find((news) => news.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />

      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
