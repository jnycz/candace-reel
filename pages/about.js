import Head from "next/head";

import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Candace Nycz | Colorist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header title="about" />
        <div className="py-4">
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
      </main>

      <Footer />
    </div>
  );
}
