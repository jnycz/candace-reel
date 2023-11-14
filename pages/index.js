import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "@components/ReactPlayer";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Candace Nycz | Colorist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
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
                <a target="_blank" className="underline">IMDB</a>
              </Link>
            </p>
            <p>
              <Link href="https://commonwealthandcouncil.com/exhibitions/does-your-house-have-lions">
                <a target="_blank" className="underline">Does your house have lions</a>
              </Link>
            </p>
            <p>
              <Link href="https://kerrytribe.com/work/aphasia-poetry-club/">
                <a target="_blank" className="underline">Aphasia Poetry Club, 2015</a>
              </Link>
            </p>
            </div>
            <div className="py-4">
            <h2 className="text-xl pb-4" id="contact">contact</h2>
            <Link href="/contact">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get in touch</button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
