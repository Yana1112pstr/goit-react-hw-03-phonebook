import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ children }) => {
  return <div className={s.section}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
