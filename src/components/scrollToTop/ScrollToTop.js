import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import "./styles.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-up" onClick={() => scrollToTop()}>
          <RiArrowUpSLine className="scroll-up-icon" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
