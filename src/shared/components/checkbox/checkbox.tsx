import { ICONS } from "@/shared/static/icons";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { IProps } from "./types";


export function Checkbox(props:IProps) {
    const {
        text,
        isChecked,
        setIsChecked,
        disabled
    } = props
    return <Pressable style={styles.textWithCheckBox} onPress={() => setIsChecked(!isChecked)} disabled={disabled}>
            <View style={styles.checkbox}>

                {isChecked && <ICONS.checkmark width={"100%"} height={"100%"}/>}
            </View>
            <Text style= {styles.psev}>{text}</Text>
        </Pressable>
}