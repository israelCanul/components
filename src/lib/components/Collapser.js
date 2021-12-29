import React,{ useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import style from "./styles/collapser.module.css";

/**
 * Primary UI component for user interaction
 */
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

Collapser.propTypes = {
  /**
   * Object that will be render?
   */
  children: PropTypes.element,
  /**
   * Class of the collapser
   */
  className: PropTypes.string,
  /**
   * Is active ?
   */
  active: PropTypes.bool,
};

Collapser.defaultProps = {
  children: <p>asds</p>,
  className: 'collapser',
  active: true
};

export default Collapser;