import React from "react";
import { Link } from "react-router-dom";

import "./button.css";

const Button = ({ copy = "Copy missing", url = "/no-button-copy" }) => {
  return (
    <Link className="button" to={url}>
      {" "}
      {copy}{" "}
    </Link>
  );
};

export default Button;