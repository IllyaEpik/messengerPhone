import * as React from "react"
import Svg, { Path,SvgProps } from "react-native-svg"

export function TrashIcon(props:SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 15 17"
      fill="none"
      {...props}
    >
    <Path
        d="M.833 4.167h13.334M5.833 7.5v5m3.334-5v5m-7.5-8.333l.833 10a1.667 1.667 0 001.667 1.666h6.666a1.667 1.667 0 001.667-1.666l.833-10M5 4.167v-2.5a.833.833 0 01.833-.834h3.334a.833.833 0 01.833.834v2.5"
        stroke="#070A1C"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
    />
    </Svg>
  )
}