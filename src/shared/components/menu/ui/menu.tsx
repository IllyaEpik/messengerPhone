import { useState } from "react";
import { Pressable, View,Text } from "react-native";
import { MenuProps } from "../types/menu.types";
import { styles } from "../styles/menu.styles";

export function Menu(props:MenuProps) {
    const [IschosenFirst, setChosen] = useState<boolean>(false)
    const {firstOption,
        secondOption,
        firstText,
        secondText,
        menuStyles,
        containerStyles
    } = props
    return (
        <View style={containerStyles || { flex: 1 }}>
            <View style={{...styles.menu, ...menuStyles}}>
                <Pressable 
                    onPress={() => setChosen(true)}
                >
                    <Text 
                    style={IschosenFirst ? styles.active : styles.deactive}>{firstText}</Text>
                </Pressable>
                <Pressable 
                    onPress={() => setChosen(false)}
                >
                    <Text 
                    style={IschosenFirst ? styles.deactive : styles.active}>{secondText}</Text></Pressable>

            </View>
            {IschosenFirst ? firstOption : secondOption}
        </View>
    )
} 