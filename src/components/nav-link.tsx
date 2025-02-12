"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink(props: IProps) {
  const { href, children } = props;

  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Link href={href} className={isActive ? "active" : undefined}>
      {children}
    </Link>
  );
}
