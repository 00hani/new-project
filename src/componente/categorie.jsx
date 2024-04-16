/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { colors } from "../style/variable";

const input = {
  width: "431px",
  height: "48px",
  backgroundColor: `   ${colors.lightGray}`,
  //   top: "2079px",
  // left: "963px",

  gap: "0px",
  borderRadius: "8px ",
  border: "1px ",
  //   opacity: ["0px", "Black - 12%"],
};

export default function Categories() {
  return (
    <Box>
      <FormControl>
        <Select style={input}>
          <MenuItem value={10}>Pesonal</MenuItem>
          <MenuItem value={20}>Home</MenuItem>
          <MenuItem value={30}>Business</MenuItem>
        </Select>
      </FormControl>
         
    </Box>
  );
}
