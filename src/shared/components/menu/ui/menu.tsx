import { useState } from "react";
import { Pressable, View,Text } from "react-native";
import { MenuProps } from "../types/menu.types";
import { styles } from "../styles/menu.styles";

export function Menu(props:MenuProps) {
    const [IschosenFirst, setChosen] = useState<boolean>(true)
    const {firstOption,
        secondOption,
        firstText,
        secondText,
        menuStyles,
        containerStyles,
        textStyles
    } = props
    return (
        <View style={containerStyles || { flex: 1 }}>
            <View style={{...styles.menu, ...menuStyles}}>
                <Pressable 
                    onPress={() => setChosen(true)}
                >
                    <Text 
                    style={[styles.text,IschosenFirst ? styles.active : styles.deactive, textStyles]}>{firstText}</Text>
                </Pressable>
                <Pressable 
                    onPress={() => setChosen(false)}
                >
                    <Text 
                    style={[styles.text,IschosenFirst ? styles.deactive : styles.active, textStyles]}>{secondText}</Text></Pressable>

            </View>
            {IschosenFirst ? firstOption : secondOption}
        </View>
    )
} 