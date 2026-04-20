import { Input } from "@/shared/components/Input/Input";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "../styles/writeCode";
import { CodeInput } from "./codeInput";
import { useState } from "react";
import { RegButton } from "@/shared/components/RegButton/RegBut";
import { useRegistrationSecondPhaseMutation } from "../api/userApi";
import { router } from "expo-router";


export function WriteCode(){
    const [code, setCode] = useState("")
    const [ reg ] = useRegistrationSecondPhaseMutation()
    function submitButton(code:number) {
        reg(code);
        router.push({pathname: "/(tabs)"});
    }
    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Підтвердження пошти</Text>
            <Text style= {styles.check}>Ми надіслали 6-значний код на вашу пошту (you@example.com). Введіть його нижче, щоб підтвердити акаунт</Text>
            <View style={styles.codeContainer}>
                <Text style={styles.code}>Код підтвердження</Text>
                <CodeInput code={code} setCode={setCode}></CodeInput>
            </View>
            <View style={styles.button}>
                <RegButton 
                    title="Підтвердити" onPress={() => submitButton(Number(code))} Buttonstyle={styles.button}/>

                
                <RegButton 
                    title="Назад" onPress={router.back} invisible={true} Buttonstyle={styles.button}/>
            </View>
        </View>
    );
};
