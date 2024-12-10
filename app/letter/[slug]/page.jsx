import { notFound } from "next/navigation";
import { SITE_BASE_URL } from "@/config/setting";
import { getDataLetter, getDataTemplateByIdLetter } from "@/lib/fetch";
import Form from "@/components/letter/form";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dataLetter = getDataLetter(slug);

  if (!dataLetter) {
    notFound();
  }

  const pageUrl = `/letter/${dataLetter?.slug}`;
  const pageTitle = `Buat ${dataLetter?.title}`;
  const pageDesc = `Buat ${dataLetter?.title}`;

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

export default async function Home({ params }) {
  const { slug } = await params;

  const dataLetter = getDataLetter(slug);

  const dataTemplate = getDataTemplateByIdLetter(dataLetter?.id);

  return (
    <>
      <h1 className="mb-5 mt-3 text-lg font-semibold">
        Buat {dataLetter?.title}
      </h1>
      <Form content={dataTemplate?.content} />
    </>
  );
}
