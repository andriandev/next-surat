import { SITE_BASE_URL } from "@/config/setting";
import { getDataTemplate } from "@/lib/fetch";
import CardList from "@/components/template/card-list";

export function generateMetadata() {
  const pageUrl = `/template`;
  const pageTitle = `Daftar Template`;
  const pageDesc = `Daftar Template`;

  return {
    title: pageTitle,
    description: pageDesc,
    metadataBase: SITE_BASE_URL,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function Template() {
  const data = getDataTemplate();

  return (
    <>
      <h1 className="mb-5 mt-3 text-lg font-semibold">Daftar Template</h1>
      <CardList data={data} />
    </>
  );
}
