import { StyleProp, ViewStyle } from "react-native";

export interface IProps {
    onChange: (uri: string) => void;
    filled?: boolean;
    icon?: React.ReactElement;
    text: string; 
    style?: StyleProp<ViewStyle>;
}