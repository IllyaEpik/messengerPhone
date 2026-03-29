import { View, Text } from "react-native";
import { ITabProps } from "../types/footerTab.Types";
import { styles } from "../styles/footerTab.styles";


export default function FooterTab(props:ITabProps) {
  const {icon,selected} = props
  return (
    <View style={[styles.tab, selected ? styles.selected : {}]}>
        {icon}
    </View>
  );
}
