import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";
import {
  SITE_TITLE,
  SITE_SEPARATOR,
  SITE_DESC,
  SITE_INDEX,
  SITE_BASE_URL,
} from "@/config/setting";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export async function generateMetadata() {
  const pageUrl = "/";

  return {
    title: {
      template: `%s ${SITE_SEPARATOR} ${SITE_TITLE}`,
      default: SITE_TITLE,
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <NextTopLoader showSpinner={false} />
        <ToastContainer />
      </body>
    </html>
  );
}
