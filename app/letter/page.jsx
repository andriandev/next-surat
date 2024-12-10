import { SITE_BASE_URL } from "@/config/setting";
import { getDataLetter } from "@/lib/fetch";
import CardList from "@/components/letter/card-list";

export function generateMetadata() {
  const pageUrl = `/letter`;
  const pageTitle = `Daftar Surat`;
  const pageDesc = `Daftar Surat`;

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

export default function Letter() {
  const data = getDataLetter();

  return (
    <>
      <h1 className="mb-5 mt-3 text-lg font-semibold">Daftar Surat</h1>
      <CardList data={data} />
    </>
  );
}
