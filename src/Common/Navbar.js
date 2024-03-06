'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import logo from '../assets/images/logo.png'
function Navbar() {



    useEffect(() => {
        const select = (el, all = false) => {
          el = el.trim();
          if (all) {
            return [...document.querySelectorAll(el)];
          } else {
            return document.querySelector(el);
          }
        };
    
        const on = (type, el, listener, all = false) => {
          let selectEl = select(el, all);
          if (selectEl) {
            if (all) {
              selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
              selectEl.addEventListener(type, listener);
            }
          }
        };
    
        const onscroll = (el, listener) => {
          el.addEventListener('scroll', listener);
        };
    
        const navbarlinks = select('#navbar .scrollto', true);
        const navbarlinksActive = () => {
          let position = window.scrollY + 200;
          navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (
              position >= section.offsetTop &&
              position <= section.offsetTop + section.offsetHeight
            ) {
              navbarlink.classList.add('active');
            } else {
              navbarlink.classList.remove('active');
            }
          });
        };
    
        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);
    
        const scrollto = el => {
          let header = select('#header');
          let offset = header.offsetHeight;
    
          let elementPos = select(el).offsetTop;
          window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth',
          });
        };
    
        let selectHeader = select('#header');
        if (selectHeader) {
          const headerScrolled = () => {
            if (window.scrollY > 100) {
              selectHeader.classList.add('header-scrolled');
            } else {
              selectHeader.classList.remove('header-scrolled');
            }
          };
          window.addEventListener('load', headerScrolled);
          onscroll(document, headerScrolled);
        }
    
        let backtotop = select('.back-to-top');
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add('active');
            } else {
              backtotop.classList.remove('active');
            }
          };
          window.addEventListener('load', toggleBacktotop);
          onscroll(document, toggleBacktotop);
        }
    
        on('click', '.mobile-nav-toggle', function (e) {
          select('#navbar').classList.toggle('navbar-mobile');
          this.classList.toggle('bi-list');
          this.classList.toggle('bi-x');
        });
    
        on('click', '.navbar .dropdown > a', function (e) {
          if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active');
          }
        }, true);
    
        on('click', '.scrollto', function (e) {
          if (select(this.hash)) {
            e.preventDefault();
    
            let navbar = select('#navbar');
            if (navbar.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile');
              let navbarToggle = select('.mobile-nav-toggle');
              navbarToggle.classList.toggle('bi-list');
              navbarToggle.classList.toggle('bi-x');
            }
            scrollto(this.hash);
          }
        }, true);
    
        window.addEventListener('load', () => {
          if (window.location.hash) {
            if (select(window.location.hash)) {
              scrollto(window.location.hash);
            }
          }
        });
    
        let preloader = select('#preloader');
        if (preloader) {
          window.addEventListener('load', () => {
            preloader.remove();
          });
        }
      }, []); // Empty dependency array ensures that this effect runs once on mount
    







  return (
  <>
  
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-lg-between">

      {/* <h1 className="logo me-auto me-lg-0"><a href="index.html"><Image src={logo} width={50} height={50} alt='logo' /></a>AICDF</h1> */}
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      <a href="#" className="logo me-auto me-lg-0"><Image src={logo} alt="" width={50} className="img-fluid" />AICDF
    </a>
    
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#cources">Courses</a></li>

        
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    

    </div>
  </header>
  </>
  )
}

export default Navbar