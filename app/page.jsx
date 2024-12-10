import {
  SITE_TITLE,
  SITE_SEPARATOR,
  SITE_DESC,
  SITE_INDEX,
  SITE_BASE_URL,
  SITE_TAG,
} from "@/config/setting";
import CardList from "@/components/letter/card-list";
import { getDataLetter } from "@/lib/fetch";

export function generateMetadata() {
  const pageUrl = "/";

  return {
    title: {
      absolute: `${SITE_TITLE} ${SITE_SEPARATOR} ${SITE_TAG}`,
    },
    description: SITE_DESC,
    metadataBase: SITE_BASE_URL,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: SITE_INDEX,
      follow: SITE_INDEX,
    },
    openGraph: {
      title: SITE_TITLE,
      description: SITE_DESC,
      url: pageUrl,
      type: "website",
    },
  };
}

export default function Home() {
  const data = getDataLetter();

  return (
    <>
      <h2 className="mb-5 mt-3 text-center text-xl font-bold">
        Pilih Template Suratmu Di Sini!
      </h2>
      <p className="mb-7 text-center">
        Ada {data.length} template surat yang bisa kamu gunakan.
      </p>
      <CardList data={data} />
    </>
  );
}
