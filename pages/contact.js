import Head from "next/head";

import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Candace Nycz | Colorist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header title="contact" />
        <div className="py-4">
          <p>Morbi cursus eros nunc, eu rutrum ipsum scelerisque sed. Phasellus ac nisi eu ex pellentesque suscipit placerat sit amet justo. Donec ante lorem, interdum eget odio non, egestas dignissim libero. Nam semper ex nunc, sit amet suscipit tellus varius sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, dolor at imperdiet dapibus, libero est finibus erat, eget cursus nisl magna rhoncus neque. Cras semper, augue ac blandit laoreet, ligula lacus faucibus nisl, vel consectetur ipsum felis at dui. Donec lectus ex, malesuada eget eleifend non, luctus at ante. Etiam tempus quam in vehicula suscipit. Nam enim ligula, cursus nec tempor sit amet, congue et tortor.</p>
          <p>Cras iaculis libero non sem efficitur finibus. Morbi in tellus dui. Vestibulum tincidunt interdum lacus, sit amet lacinia sem convallis sed. Nullam facilisis arcu non blandit malesuada. Curabitur id lectus sed odio eleifend consectetur. Nulla lacinia lorem vel faucibus tempor. Proin sit amet condimentum velit. Fusce maximus mollis maximus. Integer tellus dui, hendrerit ac suscipit vulputate, bibendum vitae velit. Maecenas non dolor consequat, mattis ante ullamcorper, blandit mi.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}