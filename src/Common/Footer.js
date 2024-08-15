import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* First column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
               <h4>Social Media</h4>
                 <p>
                   
                 </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
            </div>

            {/* Third column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-links">
                <h4>Contact Us</h4>
                <p>
                   Email: info.aicdf.au
                 </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          © Copyright <strong><span>AICDF</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* Add credits section here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
