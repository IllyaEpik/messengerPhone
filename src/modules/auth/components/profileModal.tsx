import { Input } from "@/shared/components/Input/Input";
import { Text, View, Image, ScrollView, Modal } from "react-native";
import { styles } from "../styles/profileModal";
import { CodeInput } from "./codeInput";
import { useState } from "react";
import { RegButton } from "@/shared/components/RegButton/RegBut";
import { useProfileMutation } from "../api/userApi";
import { Redirect, router } from "expo-router";
import { useAuthContext } from "../context/authContext";
// import { BlurView } from "expo-blur";?


export function CreateProfileModal(){
    const {token} = useAuthContext()
    const [nickname, setNickname] = useState("")
    const [username, setUsername] = useState("")
    const [ createProfile ] = useProfileMutation()
    function submitButton() {
        createProfile({nickname,username, token});
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Додай деталі про себе</Text>
                    <View style={styles.main}>
                        <Input
                            label="Псевдонім автора "
                            placeholder="Введіть Псевдонім автора "
                            onChangeText={setNickname}
                            value={nickname}
                            error=""
                        />

                        <View style={styles.inputWithText}> 
                            <Input
                                label="Ім’я користувача"
                                placeholder="@"
                                onChangeText={setUsername}
                                value={username}
                                error=""
                            />
                        <Text style={styles.text}>Або оберіть: <Text style={styles.greenText}>(Запропоновані варіанти відповідно до Ім’я та Прізвища)</Text></Text>
                        </View>

                    </View>
                    <View style={styles.buttonContainer}>
                        <RegButton title="Продовжити" onPress={() => submitButton()} Buttonstyle={styles.button}></RegButton>
                    </View>
                </View>
            </View>

            <View style={styles.background}/>
        </>
    );
};