"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_TITLE } from "@/config/setting";
import Link from "@/components/shared/link";
import NavLinks from "@/config/nav-links";
import { List, CloseX } from "@/components/shared/icons";

export default function Header() {
  const [collapse, setCollapse] = useState(false);
  const pathname = usePathname();

  function handleMenu() {
    setCollapse((prev) => !prev);
  }

  return (
    <header>
      <nav className="main-container fixed z-50 flex min-w-full flex-row flex-wrap items-center bg-slate-950 py-3.5 font-medium">
        <Link
          href="/"
          className="text-xl font-semibold text-slate-200 hover:text-slate-200 md:mr-12"
        >
          {SITE_TITLE}
        </Link>
        <button className="ml-auto md:hidden" onClick={handleMenu}>
          {collapse ? <CloseX /> : <List />}
        </button>
        <div
          className={`${
            collapse ? "translate-x-0" : "translate-x-full"
          } absolute left-0 top-[3.40rem] z-50 flex h-screen w-screen flex-col flex-wrap gap-3 border-t-2 border-slate-950 bg-slate-900 px-3 pt-3 transition-transform duration-300 ease-in-out sm:px-12 md:static md:mr-auto md:h-auto md:w-auto md:translate-x-0 md:flex-row md:gap-3.5 md:border-t-0 md:bg-slate-950 md:px-0 md:pt-0`}
        >
          {NavLinks.map((data) => (
            <Link
              key={data?.link}
              className={`flex flex-row flex-wrap ${
                pathname == data?.link
                  ? "text-slate-200 hover:text-slate-200"
                  : "text-slate-400 hover:text-slate-300"
              }`}
              href={data?.link}
              onClick={handleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                className={`${data?.iconClass} mr-1.5 mt-1`}
                viewBox="0 0 16 16"
                alt={data?.title}
              >
                {data?.iconPath.map((itemPath, i) => (
                  <path key={i} fillRule={data?.iconFillRule} d={itemPath} />
                ))}
              </svg>
              {data?.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
