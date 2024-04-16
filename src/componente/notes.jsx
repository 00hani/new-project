import React from "react";

import { colors } from "../style/variable";
const getBgColor = (t) => {
  switch (t) {
    case "orange":
      return colors.orange200;
    case "green":
      return colors.green200;
    case "purple":
      return colors.purple200;
    default:
      return colors.blue400;
  }
};
const gettextColor = (t) => {
  switch (t) {
    case "orange":
      return colors.orange900;
    case "green":
      return colors.green900;
    case "purple":
      return colors.purple900;
    default:
      return colors.white;
  }
};
const width = (t) => {
  switch (t) {
    case "orange":
      return "82px";
    case "green":
      return "63px";
    case "purple":
      return "83px";
  }
};
const widthz = (t) => {
  switch (t) {
    case "orange":
      return "58px";
    case "green":
      return "39px";
    case "purple":
      return "59px";
  }
};
const fontFamily = (t) => {
  switch (t) {
    case "orange":
      return "Nunito";
    case "green":
      return "Roboto";
    case "purple":
      return "Roboto";
  }
};
const fontWeight = (t) => {
  switch (t) {
    case "orange":
      return "500";
    case "green":
      return "400";
    case "purple":
      return "400";
  }
};

function Notes({ text, type }) {
  const notes = {
    width: width(type),
    height: "36px",

    padding: "6px 12px 6px 12px",

    borderRadius: "28px ",

    color: gettextColor(type),

    backgroundColor: getBgColor(type),
  };
  const par = {
    width: widthz(type),
    height: "36px",
    fontFamily: fontFamily(type),
    fontSize: "14px",
    fontWeight: fontWeight(type),
    letterSpacing: "0.25px",
    alignItem: "center",
    justifyContent: "center",
  };
  return (
    <div style={notes}>
      <p style={par}>
        <span>{text}</span>
      </p>
    </div>
  );
}

export default Notes;
