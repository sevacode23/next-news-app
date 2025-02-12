import { NewsList } from "@/components";
import { getLatestNews } from "@/lib/utils";

export default function LatestNewsPage() {
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={getLatestNews()} />
    </>
  );
}
