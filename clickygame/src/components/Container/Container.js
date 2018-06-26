import React from "react";

const Container = props =>
  <div className={`container${props.fluid ? "" : ""}`} {...props} />;

export default Container;
