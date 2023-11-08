import React, { useEffect } from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "./AboutUs.css";
import backgroundimage from '../assets/images/cta-bg.jpg'

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
 
} from "swiper/modules";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <section id="testimonials" class="testimonials">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
              <h3>About Us</h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>

            <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">
              <div className="swiper-container">
                <div class="swiper-wrapper">
                  <Swiper
                    modules={[
                      Autoplay,
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                    ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                  >
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div class="testimonial-item">
                          <div class="d-flex">
                            <img
                              src="assets/img/testimonials/testimonials-1.jpg"
                              class="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Saul Goodman</h3>
                              <h4>Ceo & Founder</h4>
                              <div class="stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                              </div>
                            </div>
                          </div>
                          <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>
                              Proin iaculis purus consequat sem cure digni ssim
                              donec porttitora entum suscipit rhoncus.
                              Accusantium quam, ultricies eget id, aliquam eget
                              nibh et. Maecen aliquam, risus at semper.
                            </span>
                            <i class="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div class="testimonial-item">
                          <div class="d-flex">
                            <img
                              src="assets/img/testimonials/testimonials-2.jpg"
                              class="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Sara Wilsson</h3>
                              <h4>Designer</h4>
                              <div class="stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                              </div>
                            </div>
                          </div>
                          <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>
                              Export tempor illum tamen malis malis eram quae
                              irure esse labore quem cillum quid cillum eram
                              malis quorum velit fore eram velit sunt aliqua
                              noster fugiat irure amet legam anim culpa.
                            </span>
                            <i class="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div class="testimonial-item">
                          <div class="d-flex">
                            <img
                              src="assets/img/testimonials/testimonials-3.jpg"
                              class="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Jena Karlis</h3>
                              <h4>Store Owner</h4>
                              <div class="stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                              </div>
                            </div>
                          </div>
                          <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>
                              Enim nisi quem export duis labore cillum quae
                              magna enim sint quorum nulla quem veniam duis
                              minim tempor labore quem eram duis noster aute
                              amet eram fore quis sint minim.
                            </span>
                            <i class="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div class="testimonial-item">
                          <div class="d-flex">
                            <img
                              src="assets/img/testimonials/testimonials-4.jpg"
                              class="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>Matt Brandon</h3>
                              <h4>Freelancer</h4>
                              <div class="stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                              </div>
                            </div>
                          </div>
                          <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>
                              Fugiat enim eram quae cillum dolore dolor amet
                              nulla culpa multos export minim fugiat minim velit
                              minim dolor enim duis veniam ipsum anim magna sunt
                              elit fore quem dolore labore illum veniam.
                            </span>
                            <i class="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="swiper-slide">
                        <div class="testimonial-item">
                          <div class="d-flex">
                            <img
                              src="assets/img/testimonials/testimonials-5.jpg"
                              class="testimonial-img flex-shrink-0"
                              alt=""
                            />
                            <div>
                              <h3>John Larson</h3>
                              <h4>Entrepreneur</h4>
                              <div class="stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                              </div>
                            </div>
                          </div>
                          <p>
                            <i class="bi bi-quote quote-icon-left"></i>
                            <span>
                              Quis quorum aliqua sint quem legam fore sunt eram
                              irure aliqua veniam tempor noster veniam enim
                              culpa labore duis sunt culpa nulla illum cillum
                              fugiat legam esse veniam culpa fore nisi cillum
                              quid.
                            </span>
                            <i class="bi bi-quote quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="call-to-action" class="call-to-action">

<img src={backgroundimage} alt="" />

<div class="container">
  <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
    <div class="col-xl-10">
      <div class="text-center">
        <h3>Call To Action</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a class="cta-btn" href="#">Call To Action</a>
      </div>
    </div>
  </div>
</div>

</section>

<section id="team" class="team">


<div class="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div class="container">

  <div class="row gy-5">

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
      <div class="member-img">
        <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Walter White</h4>
        <span>Chief Executive Officer</span>
        <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
      <div class="member-img">
        <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" />
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Sarah Jhonson</h4>
        <span>Product Manager</span>
        <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
      <div class="member-img">
        <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" />
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>William Anderson</h4>
        <span>CTO</span>
        <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
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
