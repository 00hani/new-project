/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { colors } from "../style/variable";
import EditIcon from "@mui/icons-material/Edit";

// const getbgcolore{

// }
const getBgeColor = (t) => {
  switch (t) {
    default:
      return "white";
  }
};

const getTexeColor = (t) => {
  switch (t) {
    default:
      return colors.gray600;
  }
};
const getTexteColorOnHover = (t) => {
  switch (t) {
    default:
      return colors.gray600;
  }
};

const getBgColoreOnHover = (t) => {
  switch (t) {
    default:
      return colors.black12Opacity;
  }
};

export default function Pen() {
  const [hovered, setHovered] = useState(false);

  const btne = {
    borderRadius: "100% ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 16px 12px 16px",
    gap: "3px",
    border: "none",
    color: hovered ? getTexteColorOnHover() : getTexeColor(),
    fontSize: "24px",
    backgroundColor: hovered ? getBgColoreOnHover() : getBgeColor(),
  };

  return (
    <>
      <EditIcon
        style={btne}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
          
    </>
  );
}
