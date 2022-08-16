import React from "react";
import "./styles.css";
const ScrollTop = () => {
  const [visible, setVisible] = React.useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="back-to-top" onClick={scrollToTop}  style={{display: visible ? 'flex' : 'none'}}>
      <i className="bx bxs-to-top"></i>
    </div>
  );
};
export default ScrollTop;
