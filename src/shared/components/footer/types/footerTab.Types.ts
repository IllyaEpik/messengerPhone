import { ReactNode } from "react"
import { SvgProps } from "react-native-svg"

export interface ITabProps extends SvgProps{
    icon: ReactNode
    selected: boolean
}