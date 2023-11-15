import Head from "next/head";
import * as React from "react";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Contact() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Candace Nycz | Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex"></meta>
      </Head>

      <main> 
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Header title="contact" />
          <div className="py-4">
            <form 
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              action="/contact/thanks/"
            >
              <input name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name: <input required={true} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Company: <input required={true} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="company" />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email: <input required={true} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Message: <textarea required={true} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message"></textarea>
                </label>
              </div>
              <div className="mb-4">
                <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">send</button>
              </div>
            </form>        
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
