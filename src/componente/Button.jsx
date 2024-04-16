import React, { useState } from "react";
import { colors } from "../style/variable";

const getBgColor = (t) => {
  switch (t) {
    case "primary":
      return colors.blue400;
    case "ghost":
      return colors.white;
    case "danger":
      return colors.red400;
    default:
      return colors.blue400;
  }
};
const getBgColorOnHover = (t) => {
  switch (t) {
    case "primary":
      return colors.blue500;
    case "ghost":
      return colors.gray600;
    case "danger":
      return colors.red500;
    default:
      return colors.blue400;
  }
};
const gettextColor = (t) => {
  switch (t) {
    case "primary":
      return colors.white;
    case "ghost":
      return colors.gray600;
    case "danger":
      return colors.white;
    default:
      return colors.white;
  }
};
const gettextColoronhover = (t) => {
  switch (t) {
    case "primary":
      return colors.white;
    case "ghost":
      return colors.gray900;
    case "danger":
      return colors.white;
    default:
      return colors.white;
  }
};
function Button({ text, icon, type }) {
  const [ishover, setishover] = useState(false);

  const btn = {
    padding: "12px  16px 12px 16px",
    borderRadius: "56px",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    gap: "1px",
    border: "none",
    color: ishover ? gettextColoronhover(type) : gettextColor(type),
    fontSize: "16px",
    backgroundColor: ishover ? getBgColorOnHover(type) : getBgColor(type),
  };

  return (
    <button
      style={btn}
      onMouseEnter={() => setishover(true)}
      onMouseLeave={() => setishover(false)}
    >
      {icon ? <span>{icon} </span> : ""}
      <span>{text}</span>
    </button>
  );
}

export default Button;
