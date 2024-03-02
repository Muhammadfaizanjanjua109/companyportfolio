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
        <div className="col-xl-6 col-lg-8">
          <h1>Safeguarding Digital Frontiers<span>.</span></h1>
          <h2>Empowering Cyber Resilience Together</h2>
        </div>
      </div>

      <div className="row gy-4 mt-5 justify-content-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4" href="#about">
          <div className="icon-box">
            <i className="ri-store-line"></i>
            <h3><a  className="nav-link scrollto" href="#about">About</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4" href="#services">
          <div className="icon-box">
          <i className="ri-store-line"></i>
            <h3><a  className="nav-link scrollto" href="#services">Services</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4" href="#portfolio">
          <div className="icon-box">
          <i className="ri-store-line"></i>
            <h3><a  className="nav-link scrollto" href="#portfolio">Courses</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4" href="#contact">
          <div className="icon-box">
          <i className="ri-store-line"></i>
            <h3><a  className="nav-link scrollto" href="#contact">Contact</a></h3>
          </div>
        </div>
     
      </div>

    </div>
  </section>




<Main />




<Footer />



</>
  );
}
