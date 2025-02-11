import Link from "next/link";

import { ROUTES } from "@/const";

export const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={ROUTES.ROOT}>NextNews</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href={ROUTES.NEWS}>News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
