import Head from "next/head";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Thanks() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Candace Nycz | Colorist</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex"></meta>
      </Head>

      <main>
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 lg:px-0 text-center">
          <Header />  
          <div className="py-12">
          <h1>Thank you!</h1>
          <p>I will be in touch shortly.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
