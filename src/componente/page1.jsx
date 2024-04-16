import React from "react";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";
import { colors } from "../style/variable";
import BasicTabs from "./tab";
import Square from "./square";

function Page1() {
  const input = {
    width: "1146px",
    height: "48px",

    borderRadius: "8px ",
    border: ` 1px solid  ${colors.lightGray}`,
    backgroundColor: colors.lightGray,
  };
  const page1 = {
    boxShadow: `0px 4px 20px 0px ${colors.black12Opacity}`,
    backgroundColor: colors.white,
    width: "1512px",
    height: "82px",
    flexDirection: "column",
    display: "flex",
    gap: "60px",
  };
  const footer = {
    top: "17px",
    left: "128px",
    display: "flex",
    gap: "10px",
    top: "17px",
    left: "128px",
    position: "relative",
  };
  const tab = {
    position: "relative",

    left: "128px",
  };
  const square = { display: "flex" };
  const contenu = { display: "flex", justifyContent: "space-between" };
  return (
    <div style={page1}>
      <div className="serch" style={footer}>
        <input
          type="text"
          className="input"
          style={input}
          onclick={() => {
            const input = { border: ` ${colors.blue400}` };
          }}
        />
        <div className="btn">
          <Button
            text="add"
            icon={<AddIcon sx={{ fontSize: "18px" }} />}
            type="primary"
          />
        </div>
      </div>
      <div className="contenu" style={contenu}>
        <BasicTabs style={tab} />
        <div className="square" style={square}>
          <Square />
          <p>show onley completed notes</p>
        </div>
      </div>
    </div>
  );
}

export default Page1;
