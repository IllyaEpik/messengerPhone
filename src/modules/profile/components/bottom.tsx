import { View, Text} from "react-native";
import { Checkbox } from 'expo-checkbox';
import { styles } from "../styles/bottom";
import { ICONS } from "@/shared/static/icons";
import { useState } from "react";
import { useAuthContext } from "@/modules/auth/context/authContext";
export function ProfileBottom(){
	const [edit, setEdit] = useState<boolean>(false);
    const [pseudonym, setPseudonym] = useState<boolean>(false)
    const [signature, setSignature] = useState<boolean>(false)
    const authData = useAuthContext()
    return (
       <View style={styles.card}>
            <View style={styles.header}>
                <Text style= {styles.variant}>Варіанти підпису</Text>
                <View style={styles.editButton}><ICONS.Edit/></View>
            </View>
            <View style={styles.element}>
                <View style={styles.textWithCheckBox}>
                    <Checkbox onValueChange={setPseudonym} value={pseudonym}/>
                    <Text style= {styles.psev}>Псевдонім автора</Text>
                </View>
                <Text style= {styles.name}>{authData.user?.profile?.nickname}</Text>

                <View style={styles.textWithCheckBox}>
                    <Checkbox onValueChange={setSignature} value={signature}/>
                    <Text style= {styles.elec}>Мій електронний підпис</Text>
                </View>
            </View>
            <View style={styles.empty}></View>
       </View>
    )
}