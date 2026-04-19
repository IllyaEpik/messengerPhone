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
    // const [deleted, setDeleted] = useState<boolean>(false)
    const [ createProfile ] = useProfileMutation()
    // if (deleted){
    //     return <Redirect href="/(tabs)" />;
    // }
    function submitButton() {
        createProfile({nickname,username, token});
        // setDeleted(true)
        // router.push({pathname: "/(tabs)"});
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text>Add details about yourself</Text>
                    <View>
                        <Input
                            label="Author's pseudonym"
                            placeholder="Write Author's pseudonym"
                            onChangeText={setNickname}
                            value={nickname}
                            error=""
                        />
                        <Input
                            label="User name"
                            placeholder="@"
                            onChangeText={setUsername}
                            value={username}
                            error=""
                        />
                        <Text>Or choose: <Text style={styles.greenText}>(Suggested options according to First and Last Name)</Text></Text>

                    </View>
                    <View style={styles.buttonContainer}>
                        <RegButton title="continue" onPress={() => submitButton()}></RegButton>
                    </View>
                </View>
            </View>

            <View style={styles.background}/>
        </>
    );
};