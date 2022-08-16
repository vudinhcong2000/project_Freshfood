import React from "react";
import "./styles.css";
import SectionAboutImg from "../../assets/img/section_about_img.jpg";
import "aos/dist/aos.css";
const SectionAbout = () => {
    return (
        <section className="about fullheight align-items-center" id="about">
        <div className="container">
            <div className="row">
                <div className="col-7 h-xs" >
                    <img src={SectionAboutImg} alt=""
                        className="fullwidth play-on-scroll" data-aos="fade-right"/>
                </div>
                <div className="col-5 col-xs-12 align-items-center">
                    <div className="about-slogan play-on-scroll" data-aos="fade-left">
                        <h3>
                            <span className="primary-color">We</span> create <span className="primary-color">delicious </span>memories for <span className="primary-color">you</span>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio natus placeat et eos,
                            dignissimos voluptatem tempora necessitatibus doloribus! Eum qui doloribus odio dolor
                            tenetur nihil impedit vero magni, distinctio soluta!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
        
    
}
export default SectionAbout;