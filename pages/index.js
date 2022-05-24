import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player";

import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Candace Nycz | Colorist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header title="Reel" />
        <div className="py-10 flex items-center justify-center">
          <ReactPlayer url="https://vimeo.com/701093918" />  
        </div>
      </main>

      <Footer />
    </div>
  );
}
