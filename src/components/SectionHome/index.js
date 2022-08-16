import React from "react";
import "./styles.css";
import SectionHomeImg from "../../assets/img/section_home_img.jpg";
import "aos/dist/aos.css";
function SectionHome() {
  return (
    <section
      id="home"
      className="fullheight align-items-center bg-img bg-img-fixed"
      style={{ backgroundImage: `url(${SectionHomeImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-6 col-xs-12">
            <div className="slogan">
              <h1 data-aos="fade-right">Freshfood</h1>
              <p
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                eveniet ullam perferendis eos, nobis corrupti similique fuga
                ipsa minus at eius ipsam expedita quam aliquam perspiciatis
                voluptate qui dolore soluta.
              </p>
              <div data-aos="fade-right" data-aos-delay="400">
                <button>Order now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHome;
