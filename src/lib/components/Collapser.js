import React, { useRef, useEffect } from "react";
import style from "./styles/collapser.module.css";
console.log(style);
const Collapser = ({
  children,
  className = "",
  active = true,
  scroll = true,
}) => {
  const section = useRef();
  useEffect(() => {
    if (active && section.current) {
      setTimeout(() => {
        section.current.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [section, active]);
  return (
    <div
      ref={section}
      style={{
        height:
          active && section.current
            ? section.current.scrollHeight + "px"
            : "0px",
      }}
      className={`${className} ${style.collapser} ${
        active === true ? "active" : ""
      }`}
    >
      <div className={`${style.content}`}>{children}</div>
    </div>
  );
};
export default Collapser;
