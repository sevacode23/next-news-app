import { getAllNews } from "@/lib/utils";
import { NewsList } from "@/components";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>

      <NewsList news={getAllNews()} />
    </>
  );
}
