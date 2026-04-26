import { View, Text, Pressable} from "react-native";
// import { Checkbox } from 'expo-checkbox';
import { styles } from "../styles/bottom";
import { ICONS } from "@/shared/static/icons";
import React, { useEffect, useRef, useState } from "react";
import { useAuthContext } from "@/modules/auth/context/authContext";
import SignatureCanvas, {SignatureViewRef} from 'react-native-signature-canvas';
import { Checkbox } from "@/shared/components/checkbox/checkbox";
import { IProps } from "../types/bottom";
import { RegButton } from "@/shared/components/RegButton/RegBut";
export function ProfileBottom(props:IProps){
    const {
        setScrollEnabled
    } = props
	const [edit, setEdit] = useState<boolean>(false);
    const [pseudonym, setPseudonym] = useState<boolean>(false)
    const [signature, setSignature] = useState<boolean>(false)
    const [color, setColor] = useState<string>("#543C52")
    const authData = useAuthContext()
    const ref = useRef<SignatureViewRef | null>(null);
    function submit() {
        // ref.current?. 
    }
    useEffect(() => {
        ref.current?.changePenColor(color)
    },[color])
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
                        isChecked={signature}
                        setIsChecked={setSignature}
                        disabled={!edit}
                        />
            </View>
            {/* <SignatureScreen
                // ref={ref}
                // onOK={handleOK}
                // onClear={handleClear}
                descriptionText="Sign here"
                clearText="Clear"
                confirmText="Save"
                // style={{height:100}}
                // webStyle={`.m-signature-pad--footer {display: block; margin: 0px;}`}
                webStyle={`.m-signature-pad--footer {} body,html {height: 100%;}`}
            /> */}
            <View style={{height:200, width:"100%"}}>

            <SignatureCanvas
                ref={ref}
                onBegin={() => setScrollEnabled(false)}
                onEnd={() => setScrollEnabled(true)}
                // autoClear={true}
                descriptionText="Sign here"
                clearText="Clear"
                confirmText="Save"
                penColor="#000"
                backgroundColor="#fff"
                style={{ flex: 1, width: "100%", height: "100%" }}
                webviewProps={{
                    // cacheEnabled: true,
                    androidLayerType: "software",
                }}
            />
            </View>
            <View style={styles.buttons}>

                <Pressable 
                    style={[styles.color,styles.brown, color==="#543C52" && styles.selectedColor]} 
                    onPress={() => setColor("#543C52")}
                />
                <Pressable 
                    style={[styles.color, color==="#070A1C" && styles.selectedColor]} 
                    onPress={() => setColor("#070A1C")}
                />
            </View>
            <View style={styles.buttons}>
                <RegButton 
                title="Отчистити" onPress={() => ref.current?.clearSignature()} 
                invisible={true} Buttonstyle={styles.button} TextStyle={styles.buttonText}/>
                <RegButton 
                title="Зберегти" onPress={() => ref.current?.readSignature()}  TextStyle={styles.buttonText}
                invisible={true} Buttonstyle={[styles.button, styles.saveButton]}
                 />
            </View>
            <View style={styles.empty}></View>
       </View>
    )
}