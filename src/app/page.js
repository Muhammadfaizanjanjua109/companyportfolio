import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Common/Navbar";
import Main from "@/Common/Main";
import Footer from "@/Common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container aos-init aos-animate" data-aos="fade-up">

          <div className="row justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
           
          </div>

          

        </div>
      </section>

      <Main />

      <Footer />

    </>
  );
}
