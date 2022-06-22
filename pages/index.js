import Head from "next/head";
import Link from "next/link";
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
          <div className="player-wrapper" id="reel">
            <ReactPlayer />
          </div>
        </div>
        <div className="py-4">
          <h2 className="text-xl pb-4" id="about">about</h2>
          <p>
            Candace has been a colorist for over 12 years and has focused
            primarily on commercials and documentaries. She believes that color
            is magical and necessary in every application, and particularly
            lends itself to the movement of a narrative. She is also a
            practicing painter that emphasizes color theory and color's ability
            to unite and disrupt.
          </p>
          <p>
            <Link href="https://www.imdb.com/name/nm4101601/?ref_=fn_al_nm_1">
              <a className="underline">IMDB</a>
            </Link>
          </p>
          <p>
            <Link href="https://commonwealthandcouncil.com/exhibitions/does-your-house-have-lions">
              <a className="underline">Does your house have lions</a>
            </Link>
          </p>
          </div>
          <div className="py-4">
          <h2 className="text-xl pb-4" id="contact">contact</h2>
          <p>Contact goes here</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
