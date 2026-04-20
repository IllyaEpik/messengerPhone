import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface MenuProps{
    firstOption:ReactNode
    secondOption:ReactNode 
    firstText:string
    secondText:string
    menuStyles?:StyleProp<ViewStyle>
    containerStyles?:StyleProp<ViewStyle>
    textStyles?:StyleProp<TextStyle>
}