import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Button from "./componente/Button";
import AddIcon from "@mui/icons-material/Add";
import UnstyledInputIntroduction from "./componente/input";
import Notes from "./componente/notes";
import Page1 from "./componente/page1";

function App() {
  const Footer = { width: "1512px", height: "82px", display: "flex" };
  return (
    <>
      {/* <div style={Footer}>
        <Page1 />
        <Button
          text="add"
          icon={<AddIcon sx={{ fontSize: "18px" }} />}
          type="primary"
        />
      </div> */}
      <Page1 />
    </>
  );
}

export default App;
