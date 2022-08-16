import React from "react";
import "./styles.css";
import FooterImg from "../../assets/img/footer.jpg";
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <section className="footer bg-img" style={{backgroundImage: `url(${FooterImg})`}}>
        <div className="container">
            <div className="row">
                <div className="col-6 col-xs-12">
                    <h1>
                        Freshfood
                    </h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quas harum? Atque eius
                        quaerat fuga sint molestiae illo corrupti vitae voluptatibus. Dicta rerum est delectus
                        perspiciatis nemo nihil autem! Doloremque?</p>
                    <br/>
                    <p>Email: example@mail.com</p>
                    <p>Phone: +00 123 456 789</p>
                    <p>Website: freshfood.com</p>
                </div>
                <div className="col-2 col-xs-12">
                    <h1>
                        About us
                    </h1>
                    <br/>
                    <p>
                        <Link to="#">
                            Chefs
                        </Link>
                    </p>
                    <p>
                        <Link to="#">
                            Menu
                        </Link>
                    </p>
                    <p>
                        <Link to="#">
                            Testimonials
                        </Link>
                    </p>
                    <p>
                        <Link to="#">
                            Lorem ipsum
                        </Link>
                    </p>
                </div>
                <div className="col-4 col-xs-12">
                    <h1>
                        Subscribe & media
                    </h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur doloremque rerum nam
                        ullam obcaecati error asperiores temporibus quo eum eaque sed odio vitae accusantium, dolorem
                        nihil molestiae deserunt maxime!</p>
                    <div className="input-group">
                        <input type="text" placeholder="Enter your email"/>
                        <button>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Footer;