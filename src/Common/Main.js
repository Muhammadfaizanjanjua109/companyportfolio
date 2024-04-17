'use client'
import React, { useState } from 'react'
import about from '../assets/images/about.gif'
import scamwatch from '../assets/svg/scamwatch.png'
import GitHub from '../assets/svg/GitHub-logo.png'
import forensic from '../assets/svg/forensic-focus-logo.png'
import commingSoon from '../assets/svg/commingSoon.png'
import Image from 'next/image'

function Main() {

  const [state,setState] = useState('')
  return (
<>

<main id="main">

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <Image src={about} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <h3>About us</h3>
            <p className="fst-italic">
    At AICDF, we are committed to revolutionizing the landscape of cybersecurity and digital forensics. 
    Our mission is to empower individuals and organizations to navigate the digital world securely and confidently.
  </p>
  <ul>
    <li><i className="ri-check-double-line"></i> Experienced professionals with a passion for safeguarding digital assets.</li>
    <li><i className="ri-check-double-line"></i> Dedicated to providing comprehensive training programs tailored to diverse needs.</li>
    <li><i className="ri-check-double-line"></i> Committed to delivering consultancy services that address the unique challenges of each client.</li>
    <li><i className="ri-check-double-line"></i> Leading the way in research and innovation to stay ahead of emerging cyber threats.</li>
  </ul>
  <p>
    With a focus on excellence and a drive for continuous improvement, we strive to create a safer digital environment 
    for all. Our team combines expertise, creativity, and dedication to offer powerful solutions that make a difference. 
    Partner with us on your journey to digital security and resilience.
  </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Clients Section ======= --> */}
    {/* <section id="clients" className="clients">
      <div className="container aos-init aos-animate" data-aos="zoom-in">

        <div className="clients-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events">
          <div className="swiper-wrapper align-items-center" id="swiper-wrapper-104db52282b10b92dc" aria-live="off" style="transform: translate3d(-2266px, 0px, 0px); transition-duration: 0ms;"><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 86px; margin-right: 120px;" role="group" aria-label="3 / 8"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style="width: 86px; margin-right: 120px;" role="group" aria-label="4 / 8"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="4" style="width: 86px; margin-right: 120px;" role="group" aria-label="5 / 8"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="5" style="width: 86px; margin-right: 120px;" role="group" aria-label="6 / 8"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="6" style="width: 86px; margin-right: 120px;" role="group" aria-label="7 / 8"><img src="assets/img/clients/client-7.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" style="width: 86px; margin-right: 120px;" role="group" aria-label="8 / 8"><img src="assets/img/clients/client-8.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="0" style="width: 86px; margin-right: 120px;" role="group" aria-label="1 / 8"><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="1" style="width: 86px; margin-right: 120px;" role="group" aria-label="2 / 8"><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="2" style="width: 86px; margin-right: 120px;" role="group" aria-label="3 / 8"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="3" style="width: 86px; margin-right: 120px;" role="group" aria-label="4 / 8"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="4" style="width: 86px; margin-right: 120px;" role="group" aria-label="5 / 8"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="5" style="width: 86px; margin-right: 120px;" role="group" aria-label="6 / 8"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="6" style="width: 86px; margin-right: 120px;" role="group" aria-label="7 / 8"><img src="assets/img/clients/client-7.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="7" style="width: 86px; margin-right: 120px;" role="group" aria-label="8 / 8"><img src="assets/img/clients/client-8.png" className="img-fluid" alt=""></div>
          <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 86px; margin-right: 120px;" role="group" aria-label="1 / 8"><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style="width: 86px; margin-right: 120px;" role="group" aria-label="2 / 8"><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 86px; margin-right: 120px;" role="group" aria-label="3 / 8"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style="width: 86px; margin-right: 120px;" role="group" aria-label="4 / 8"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="4" style="width: 86px; margin-right: 120px;" role="group" aria-label="5 / 8"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style="width: 86px; margin-right: 120px;"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></div></div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 6" aria-current="true"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 8"></span></div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

      </div>
    </section> */}
    
    {/* <!-- End Clients Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="services" className="features">
    <div className="container aos-init aos-animate" data-aos="fade-up">
  <div className="row">
    <div className="image col-lg-6 aos-init aos-animate bg-customFaizan"   data-aos="fade-right"></div>
    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
    <h3 className='services_heading text-center'>Our Serives</h3>
      <div className="icon-box mt-5 mt-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
        <i className="bx bx-receipt"></i>
        <h4>Consultancy Services</h4>
        <p>Expert guidance and tailored solutions to enhance your cybersecurity posture and mitigate digital risks.</p>
      </div>
      <div className="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
        <i className="bx bx-cube-alt"></i>
        <h4>Research and Innovation</h4>
        <p>Pioneering advancements in cybersecurity through cutting-edge research and innovative methodologies.</p>
      </div>
      <div className="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
        <i className="bx bx-images"></i>
        <h4>Digital Forensics Investigations</h4>
        <p>Uncovering digital evidence crucial for investigations and legal proceedings using state-of-the-art techniques.</p>
      </div>
      <div className="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
        <i className="bx bx-shield"></i>
        <h4>Training Programs</h4>
        <p>Comprehensive courses designed to equip individuals and organizations with essential cybersecurity skills and knowledge.</p>
      </div>
    </div>
  </div>
</div>

    </section>
    
    {/* <!-- End Features Section --> */}

{/* start of resources section */}

<section id="resources" className="services">
  <div className="container">
    <div className="section-title">
      <h2>Resources</h2>
      <p>Explore Our Resources</p>
    </div>

    <div className="d-flex justify-content-center p-2 w-100 mob">
      <div className="w-20  ms-1 me-1 mob-div">
        <a href='https://www.scamwatch.gov.au' target="_blank" className="card p-3 cardHeight  d-flex justify-content-center align-items-center" >
          <div className=" "><Image width={200} src={scamwatch} alt='scamWatch' /></div>
          <h4><p className='font-size-15'>Scamwatch</p></h4>
        </a>
      </div>
 

      <div className="w-20  ms-1 me-1 mob-div">
        <a href='https://www.forensicfocus.com' target="_blank" className="card p-3 cardHeight d-flex justify-content-center align-items-center"  >
          <div className=" "><Image width={200}  src={forensic} alt='scamWatch' /></div>
          <h4><p className='font-size-15 '>Forensic Focus</p></h4>
        </a>
      </div>

      <div className="w-20  ms-1 me-1 mob-div">
        <a href='https://github.com/forensicswiki/wiki' target="_blank" className="card p-3 cardHeight  d-flex justify-content-center align-items-center" >
          <div className=" "><Image width={150}  src={GitHub} alt='scamWatch' /></div>
          <h4><p className='font-size-15'>ForensicsWiki</p></h4>
        </a>
      </div>


      <div className="w-20  ms-1 me-1 mob-div">
        <a href='https://github.com/cugu/awesome-forensics' target="_blank" className="card p-3 cardHeight  d-flex justify-content-center align-items-center" >
          <div className=" "><Image width={150}  src={GitHub} alt='scamWatch' /></div>
          <h4><p className='font-size-15'>Awesome Forensics</p></h4>
        </a>
      </div>
     
      <div className="w-20  ms-1 me-1 mob-div">
        <a href='#' className="card p-3 cardHeight  d-flex justify-content-center align-items-center" >
          <div className=" "><Image width={200} src={commingSoon} alt='scamWatch' /></div>
          <h4><p className='font-size-15'>Learning Management System</p></h4>
        </a>
      </div>
      
     
    </div>

  </div>
</section>

{/* end of resources section */}

         {/* <!-- ======= Courses Section ======= --> */}
         <section id="cources" className="services">
  <div className="container">
    <div className="section-title">
      <h2>Courses</h2>
      <p>Explore Our Courses</p>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="icon-box" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setState('cyberSecurityModal')}>
          <div className="icon"><i className="bx bxl-dribbble"></i></div>
          <h4><a  data-toggle="modal" data-target="#cyberSecurityModal">Cyber Security Awareness</a></h4>
          <p>Equip yourself with essential knowledge and skills to stay safe in the digital world.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="icon-box" onClick={()=>setState('safeCyberChildrenModal')}>
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4><a  data-toggle="modal" data-target="#safeCyberChildrenModal ">Safe Cyber for Children</a></h4>
          <p>Empower children with the tools and knowledge to navigate cyberspace securely.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="icon-box" onClick={()=>setState('safeCyberElderlyModal')}>
          <div className="icon"><i className="bx bx-tachometer"></i></div>
          <h4><a data-toggle="modal" data-target="#safeCyberElderlyModal">Safe Cyber Practices for Elderly</a></h4>
          <p>Provide elderly individuals with practical strategies for staying safe online.</p>
        </div>
      </div>
    </div>

  </div>
</section>

{/* <!-- Modal for Cyber Security Awareness --> */}
<div className={`modal fade ${state === 'cyberSecurityModal' ? 'show ai-styled-modal' : ''}`} id="cyberSecurityModal" tabIndex="-1" role="dialog" aria-labelledby="cyberSecurityModalLabel" style={{ display: state === 'cyberSecurityModal' ? 'block' : 'none' }} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content ai-styled-content">
      <div className="modal-header">
        <h5 className="modal-title" id="cyberSecurityModalLabel">Cyber Security Awareness</h5>
        <button type="button" className="close btn btn-warning" data-dismiss="modal" aria-label="Close" onClick={() => setState('')}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h5>Course Description:</h5>
        <p>Equip yourself with essential knowledge and skills to stay safe in the digital world.</p>
        <h5>Learning Outcomes:</h5>
        <p>- Understand common cyber threats<br />- Learn best practices for online safety<br />- Enhance your awareness of cybersecurity measures</p>
        <h5>Duration:</h5>
        <p>2 hours</p>
        <h5>Availability:</h5>
        <p>Available anytime</p>
        <h5>Cost:</h5>
        <p>Free</p>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={() => setState('')} className="btn btn-warning" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


{/* <!-- Modals for other courses (Safe Cyber for Children and Safe Cyber Practices for Elderly) will follow a similar structure --> */}
<div className={`modal fade ${state === 'safeCyberChildrenModal' ? 'show ai-styled-modal' : ''}`} id="safeCyberChildrenModal" tabIndex="-1" role="dialog" aria-labelledby="safeCyberChildrenModalLabel" style={{ display: state === 'safeCyberChildrenModal' ? 'block' : 'none' }} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content ai-styled-content">
      <div className="modal-header">
        <h5 className="modal-title" id="safeCyberChildrenModalLabel">Safe Cyber for Children</h5>
        <button type="button"  className="btn btn-warning" data-dismiss="modal" aria-label="Close" onClick={() => setState('')}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h5>Course Description:</h5>
        <p>Empower children with the tools and knowledge to navigate cyberspace securely.</p>
        <h5>Learning Outcomes:</h5>
        <p>- Understand online safety rules<br />- Learn how to identify and avoid online risks<br />- Develop digital literacy skills</p>
        <h5>Duration:</h5>
        <p>1.5 hours</p>
        <h5>Availability:</h5>
        <p>Available anytime</p>
        <h5>Cost:</h5>
        <p>Free</p>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={() => setState('')} className="btn btn-warning" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<div className={`modal fade ${state === 'safeCyberElderlyModal' ? 'show ai-styled-modal' : ''}`} id="safeCyberElderlyModal" tabIndex="-1" role="dialog" aria-labelledby="safeCyberElderlyModalLabel" style={{ display: state === 'safeCyberElderlyModal' ? 'block' : 'none' }} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content ai-styled-content">
      <div className="modal-header">
        <h5 className="modal-title" id="safeCyberElderlyModalLabel">Safe Cyber Practices for Elderly</h5>
        <button type="button" className="close btn btn-warning" data-dismiss="modal" aria-label="Close" onClick={() => setState('')}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h5>Course Description:</h5>
        <p>Provide elderly individuals with practical strategies for staying safe online.</p>
        <h5>Learning Outcomes:</h5>
        <p>- Recognize common online scams targeting the elderly<br />- Learn how to create strong passwords and secure online accounts<br />- Understand privacy settings and safe browsing practices</p>
        <h5>Duration:</h5>
        <p>1.5 hours</p>
        <h5>Availability:</h5>
        <p>Available anytime</p>
        <h5>Cost:</h5>
        <p>Free</p>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={() => setState('')} className="btn  btn-warning" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" className="cta">
  <div className="container aos-init aos-animate" data-aos="zoom-in">

    <div className="text-center">
      <h3>Empower Yourself Today</h3>
      <p>Take the first step towards a safer digital future. Join us and equip yourself with the knowledge and skills needed to navigate the digital landscape securely.</p>
      <a className="cta-btn" href="#cources">Explore Our Courses</a>
    </div>

  </div>
</section>
    {/* <!-- End Cta Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
    {/* <section id="portfolio" className="portfolio">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>

        <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative', height: '1097.33px'}}>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: 'absolute', left: '0px', top: '0px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{position: 'absolute', left: '380px', top: '0px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: 'absolute', left: '760px', top: '0px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio3} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{position: 'absolute', left: '760px', top: '230.25px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio4} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio4} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{position: 'absolute', left: '380px', top: '268.688px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio5} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio5} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: 'absolute', left: '0px', top: '390.891px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio6} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio6} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{position: 'absolute', left: '760px', top: '495.641px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio7} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio7} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{position: 'absolute', left: '760px', top: '756.719px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio8} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio8} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{position: 'absolute', left: '380px', top: '830.844px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio9} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio9} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}
    
    {/* <!-- End Portfolio Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    {/* <section id="counts" className="counts">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate" data-aos="fade-right" data-aos-delay="100"></div>
          <div className="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div className="content d-flex flex-column justify-content-center">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="0" className="purecounter">65</span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="0" className="purecounter">85</span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock"></i>
                    <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="0" className="purecounter">35</span>
                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award"></i>
                    <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" className="purecounter">20</span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>
              </div>
            </div>
            
        
          </div>
        </div>

      </div>
    </section> */}
    {/* <!-- End Counts Section --> */}


    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
    {/* <section id="team" className="team">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="">
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="">
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="">
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src={team4} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}
    {/* <!-- End Team Section --> */}

    {/* <!-- ======= Contact Section ======= --> */}
    {/* <section id="contact" className="contact">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div>
          <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section> */}
    




    <section id="contact" className="contact">
  <div className="container aos-init aos-animate" data-aos="fade-up">

    <div className="section-title">
      <h2>Contact Us</h2>
      <p>Get in Touch</p>
    </div>

    <div className="row">

      <div className="col-lg-6">
        <div className="info-box mb-4">
          <i className="bx bx-map"></i>
          <h3>Our Address</h3>
          <p>123 Cybersecurity Street, Digital City, Cyberland</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="info-box  mb-4">
          <i className="bx bx-envelope"></i>
          <h3>Email Us</h3>
          <p>info@aicdf.com</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="info-box  mb-4">
          <i className="bx bx-phone-call"></i>
          <h3>Call Us</h3>
          <p>+123 456 7890</p>
        </div>
      </div>

    </div>

    <div className="row">
      <div className="col-lg-12 mt-4">
        <form action="#" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>

  </div>
</section>

    {/* <!-- End Contact Section --> */}

  </main>
</>
  )
}

export default Main