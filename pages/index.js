import Head from "next/head";
import Link from "next/link";
//import ReactPlayer from "react-player";
import ReactPlayer from "@components/ReactPlayer";
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
        <Header title="color reel" />
        <div className="py-4">
          <div className="player-wrapper">
            <ReactPlayer />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
