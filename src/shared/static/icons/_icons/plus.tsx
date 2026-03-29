import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export function PlusIcon(props:SvgProps) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      {...props}
    >
      <Path
        d="M12.367 8.31H8.311v4.057a.811.811 0 01-1.623 0V8.31H2.632a.811.811 0 110-1.623h4.056V2.631a.811.811 0 111.623 0v4.056h4.056a.811.811 0 010 1.623z"
        fill="#000"
        fillOpacity={1}
      />
    </Svg>
  )
}
 