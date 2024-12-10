import { notFound } from "next/navigation";
import { SITE_BASE_URL } from "@/config/setting";
import { getDataTemplate } from "@/lib/fetch";
import Form from "@/components/template/form";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dataTemplate = getDataTemplate(id);

  if (!dataTemplate) {
    notFound();
  }

  const pageUrl = `/template/${dataTemplate?.id}`;
  const pageTitle = `Buat ${dataTemplate?.title}`;
  const pageDesc = `Buat ${dataTemplate?.title}`;

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
  const { id } = await params;

  const dataTemplate = getDataTemplate(id);

  return (
    <>
      <h1 className="mb-5 mt-3 text-lg font-semibold">
        Edit Template {dataTemplate?.title}
      </h1>
      <Form data={dataTemplate} />
    </>
  );
}
