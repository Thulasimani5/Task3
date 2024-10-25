import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="15px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#0C356A"
      {...props}
    >
      <Path d="M321-72.35L242.35-151l329-329-329-329L321-887.65 728.65-480 321-72.35z" />
    </Svg>
  )
}

export default SvgComponent
