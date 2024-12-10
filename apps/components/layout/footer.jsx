import { SITE_TITLE } from "@/config/setting";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-3.5 text-center">
      {`Copyright ©${currentYear} ${SITE_TITLE}`}
    </footer>
  );
}
