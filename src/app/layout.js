import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/css/aos.min.css";
import "../assets/css/bootstrap.css";
import "../assets/css/bootstrapIcon.css";
import "../assets/css/boxicon.min.css";
import "../assets/css/glightbox.css";
import "../assets/css/remix.css";
import "../assets/css/swiper.bundle.min.css";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AICDF",
  description: "AICDF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}
    
      </body>

      <Script src="../../public/customjs/main.js"  />
        <Script src='../../public/customjs/aos.js'    />
        <Script src="../../public/customjs/jlightbox.js"   />
        <Script src="../../public/customjs/pure_counter.js"   />
    </html>
  );
}
