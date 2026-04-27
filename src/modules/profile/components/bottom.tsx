import { View, Text, Pressable} from "react-native";
// import { Checkbox } from 'expo-checkbox';
import { styles } from "../styles/bottom";
import { ICONS } from "@/shared/static/icons";
import React, { useState } from "react";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { Checkbox } from "@/shared/components/checkbox/checkbox";
import { IProps } from "../types/bottom";
import { useUpdateProfileMutation } from "../api/profileApi";
import { Signature } from "./signature";
export function ProfileBottom(props:IProps){
    
    const {token, user}= useAuthContext()
	const [edit, setEdit] = useState<boolean>(false);
    const [pseudonym, setPseudonym] = useState<boolean>(false)
    const [showSignature, setShowSignature] = useState<boolean>(false)
    const [signature, setSignature] = useState<string | null>(null)
    const [updateProfile] = useUpdateProfileMutation()
    const authData = useAuthContext()
    async function submit() {
        setEdit(!edit)
        if (edit) return
        console.log({
            showElectronicSignature:showSignature,
            token:token,
            showNickname:pseudonym,
            ...( signature && {electronicSignature:signature})
        })
        await updateProfile({
            showElectronicSignature:showSignature,
            token:token,
            showNickname:pseudonym,
            ...( signature && {electronicSignature:signature})
        })
    }
    if (!user) return
    return (
       <View style={styles.card}>
            <View style={styles.header}>
                <Text style= {styles.variant}>Варіанти підпису</Text>
                <Pressable
                          style={[styles.editButton, edit && styles.activatedEditButton]}
                          onPress={submit}
                        >
                          <ICONS.Edit />
                          {edit && <Text>Зберегти</Text> }
                        </Pressable>
            </View>
            <View style={styles.element}>
                    <Checkbox 
                        text="Псевдонім автора" 
                        isChecked={pseudonym}
                        setIsChecked={setPseudonym}
                        disabled={!edit}
                    />
                <Text style= {styles.name}>{authData.user?.profile?.nickname}</Text>

                    <Checkbox 
                        text="Мій електронний підпис"
                        isChecked={showSignature}
                        setIsChecked={setShowSignature}
                        disabled={!edit}
                        />
            </View>
            <Signature 
            setScrollEnabled={props.setScrollEnabled} setSignature={setSignature} 
            edit={edit} user={user} signature={signature}/>
            <View style={styles.empty}></View>
       </View>
    )
}