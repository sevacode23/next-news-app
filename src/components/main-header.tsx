import NavLink from "@/components/nav-link";
import { ROUTES } from "@/lib/constants";

export const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href={ROUTES.ROOT}>NextNews</NavLink>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink href={ROUTES.NEWS}>News</NavLink>
          </li>
          <li>
            <NavLink href={ROUTES.ARCHIVE}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
