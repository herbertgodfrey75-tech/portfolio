import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`back-to-top ${show ? "show" : ""}`}
      onClick={scrollTop}
    >
      ↑
    </button>
  );
}

export default BackToTop;