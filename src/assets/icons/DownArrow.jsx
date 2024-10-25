import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="25px"
      viewBox="0 -950 960 960"
      width="28px"
      fill="#0C356A" // Remove fill to only show stroke
      stroke="#0C356A" // Set stroke color to match your original fill
      strokeWidth="-4" // Adjust strokeWidth to reduce the thickness (lower values for thinner lines)
      {...props}
    >
      <Path d="M480-344L240-584l56-56 184 184 184-184 56 56-240 240z" />
    </Svg>
  );
}

export default SvgComponent;
