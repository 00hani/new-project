import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { colors } from "../style/variable";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": ` simple-tabpanel-${index}`,
  };
}
const texte = {
  fontFamily: "Roboto",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "33.6px",
  letterSpacing: "0.25px",
};
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "416px", backgroundColor: "white" }}>
      <h1 style={texte}>Your note</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Personal" {...a11yProps(1)} />
          <Tab label="Home" {...a11yProps(2)} />
          <Tab label="Business" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        dsagfsaxcvxz
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        dsgfgxfzgzfx
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      <style>
        {`
          .MuiTab-root:hover {
            color: ${colors.gray900}; // Set hover color to gray 900
          }
        `}
      </style>
         
    </Box>
  );
}
