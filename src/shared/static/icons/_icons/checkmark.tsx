import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export function checkmark(props:SvgProps) {
  return (
    // <Svg
    //   width={15}
    //   height={15}
    //   viewBox="0 0 15 15"
    //   fill="none"
    //   {...props}
    // >
    //   <Path
    //     d="M13.125 2.813L5.25 12.187l-3.375-3.75"
    //     stroke= {props.color ?? "#543C52"}
    //     strokeWidth={2}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeOpacity={1}
    //   />
    // </Svg>
    <Svg
      width={10}
      height={9}
      viewBox="0 0 10 9"
      fill="none"
      {...props}
    >
      <Path
        d="M8.5 1L3.25 7.25 1 4.75"
        stroke= {props.color ?? "#543C52"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
    </Svg>

  )
}
