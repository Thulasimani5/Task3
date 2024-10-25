import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <View style={{width:22,height:22,borderWidth:1,borderColor:'red',borderRadius:15,alignItems:'center',justifyContent:'center'}}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#F53D3D"
      {...props}
    >
      <Path d="M434.5-434.5H191.87v-91H434.5v-242.63h91v242.63h242.63v91H525.5v242.63h-91V-434.5z" />
    </Svg>
    </View>
  )
}

export default SvgComponent
