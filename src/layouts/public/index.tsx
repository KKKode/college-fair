import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyNav from "./StickyNav";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};

export default function PublicLayout({
  children = <></>,
  title = "College Fair",
  description = "College Fair Description",
  ogImage,
}: Props) {
  return (
    <section>
      <Head>
        <meta property="og:url" content="https://college-fair.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <main className="w-full">
        <StickyNav />
        <Navbar />
        {children}
        <Footer />
      </main>
    </section>
  );
}
