import React from "react";
import "./styles.css";
import SectionTestimonialImg1 from "../../assets/img/section_testimonial_1.jpg";
import SectionTestimonialImg2 from "../../assets/img/section_testimonial_2.jpg";
import SectionTestimonialImg3 from "../../assets/img/section_testimonial_3.jpg";
import "aos/dist/aos.css";
const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-4 col-xs-12">
            <div className="review-wrap">
              <div data-aos="fade-right" className="review-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, labore nisi non molestias, minus laboriosam nostrum
                  impedit iure facilis odio unde quia ad sunt corrupti dolores
                  ratione voluptatibus quidem explicabo.
                </p>
                <div
                  className="review-img bg-img"
                  style={{backgroundImage: `url(${SectionTestimonialImg1})`}}
                ></div>
              </div>
              <div className="review-info">
                <h3 data-aos="fade-up">Lorem Ipsum Dolor</h3>
                <div data-aos="fade-up" className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-xs-12">
            <div>
              <div  className="review-wrap active">
                <div data-aos="fade-down" data-aos-delay="400" className="review-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, labore nisi non molestias, minus laboriosam nostrum
                    impedit iure facilis odio unde quia ad sunt corrupti dolores
                    ratione voluptatibus quidem explicabo.
                  </p>
                  <div
                    className="review-img bg-img"
                    style={{backgroundImage: `url(${SectionTestimonialImg2})`}}
                  ></div>
                </div>
                <div className="review-info">
                  <h3 data-aos="fade-up">Lorem Ipsum Dolor</h3>
                  <div data-aos="fade-up" className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div   className="col-4 col-xs-12">
            <div className="review-wrap">
              <div data-aos="fade-left" data-aos-delay="200"className="review-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, labore nisi non molestias, minus laboriosam nostrum
                  impedit iure facilis odio unde quia ad sunt corrupti dolores
                  ratione voluptatibus quidem explicabo.
                </p>
                <div
                  className="review-img bg-img"
                  style={{backgroundImage: `url(${SectionTestimonialImg3})`}}
                ></div>
              </div>
              <div className="review-info">
                <h3 data-aos="fade-up">Lorem Ipsum Dolor</h3>
                <div data-aos="fade-up" className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
