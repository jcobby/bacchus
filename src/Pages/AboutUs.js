import React from "react";
import Navbar from "../Components/Navvyy";
import Footer from "../Components/Footer";
import "./AboutUs.css";
import backgroundimage from "../assets/images/cta-bg.jpg";



import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function AboutUs() {
  return (
    <div>
      <Navbar />


  <section id="heroAbout" class="heroAbout d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <h2 data-aos="fade-up">About Us</h2>
          <blockquote data-aos="fade-up" data-aos-delay="100">
            <p>At Bacchus, we are committed to delivering cutting-edge IT solutions that empower businesses to thrive in the digital era. With a team of skilled professionals dedicated to excellence, we specialize in designing, implementing, and managing cloud environments at an enterprise scale.  </p>
          </blockquote>
          <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="/about" class="btn-get-started">Contact</a>
            {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
          </div>

        </div>
      </div>
    </div>
  </section>



  <section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Why Choose Us</h2>

        </div>

        <div class="row g-0" data-aos="fade-up" data-aos-delay="200">

          <div class="col-xl-5 img-bg" 
></div>
          <div class="col-xl-7 slides  position-relative">

            <div class="slides-1 swiper">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Empower your success with us</h3>
                    {/* <h4 class="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4> */}
                    <p>At Bacchus, our vision is to be the forefront of technological evolution, driving innovation and setting industry standards. We aspire to create a future where businesses harness the full potential of technology seamlessly. Bacchus envisions a world where our expertise in cloud solutions, networking, cybersecurity, and software engineering becomes the cornerstone for businesses' success.</p>
                  </div>
                </div>

               

              </div>
              {/* <div class="swiper-pagination"></div> */}
            </div>
            {/* <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> */}
          </div>

        </div>

      </div>
    </section>





      <section id="call-to-action" class="call-to-action">
        <img src={backgroundimage} alt="" />

        <div class="container">
          <div
            class="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="row gy-1 ">
              <div class="col-lg-6 col-md-6 text-center">
                <h3>Our Mission</h3>
                <p>
                We are committed to being a catalyst for our clients' success, offering cutting-edge services that seamlessly integrate technology into their business strategies. With a focus on innovation and a deep understanding of our clients' needs, we aim to elevate their operations to new heights.
                </p>
               
              </div>
              <div class="col-lg-6 col-md-6 text-center">
                <h3>Our Vision</h3>
                <p>
                At Bacchus, our vision is to be the forefront of technological evolution, driving innovation and setting industry standards. We aspire to create a future where businesses harness the full potential of technology seamlessly. Bacchus envisions a world where our expertise in cloud solutions, networking, cybersecurity, and software engineering becomes the cornerstone for businesses' success.
                </p>
               
              </div>
              {/* <div class="col-lg-4 col-md-6 text-center">
                <h3>Our Mission</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
               
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="team" class="team">
        <div class="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div class="container">
          <div class="row gy-5">
            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img
                  src="assets/img/team/team-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="/">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Aliquam iure quaerat voluptatem praesentium possimus unde
                  laudantium vel dolorum distinctio dire flow
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member-img">
                <img
                  src="assets/img/team/team-2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="/">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>
                  Labore ipsam sit consequatur exercitationem rerum laboriosam
                  laudantium aut quod dolores exercitationem ut
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="member-img">
                <img
                  src="assets/img/team/team-3.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="/">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="/">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>
                  Illum minima ea autem doloremque ipsum quidem quas aspernatur
                  modi ut praesentium vel tque sed facilis at qui
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
