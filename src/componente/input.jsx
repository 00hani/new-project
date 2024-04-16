// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";

// import { colors } from "../style/variable";

// export default function TextFieldHiddenLabel() {
//   return (
//     <TextField
//       hiddenLabel
//       id="filled-hidden-label-small"
//       defaultValue="Form ghanou field"
//       size="small"
//     />
//   );
// }
import * as React from "react";
import { Input as BaseInput } from "@mui/base/Input";
import { styled } from "@mui/system";

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default function UnstyledInputIntroduction() {
  return <Input placeholder="Type something…" />;
}

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputElement = styled("input")(
  ({ theme }) => `
  width: 431px;
  height:48px;


  padding: 12px, 0px, 12px, 12px;
  border-radius: 8px;
  
  background: ${grey[50]};
  border: 1px solid  ${grey[300]};


  &:hover {
    border-color: ${blue[400]};
  }

 


`
);
