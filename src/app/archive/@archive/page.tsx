import Link from "next/link";

import { getAvailableNewsYears } from "@/lib/utils";

export default function ArchivePage() {
  const years = getAvailableNewsYears();

  const RenderYears = years.map((year) => (
    <li key={year}>
      <Link href={`/archive/${year}`}>{year}</Link>
    </li>
  ));

  return (
    <header id="archive-header">
      <nav>
        <ul>{RenderYears}</ul>
      </nav>
    </header>
  );
}
