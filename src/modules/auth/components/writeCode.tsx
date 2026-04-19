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
            <Text>email confirmation</Text>
            <Text>We've sent a 6-digit code to your email (you@example.com). Enter it below to verify your account.</Text>
            <View>
                <Text>Confirmation code</Text>
            </View>
            <CodeInput code={code} setCode={setCode}></CodeInput>
            <View>
                <RegButton title="Підтвердити" onPress={() => submitButton(Number(code))}></RegButton>
                <RegButton title="Назад" onPress={router.back}></RegButton>

            </View>
        </View>
    );
};
