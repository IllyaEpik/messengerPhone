import { RegButton } from "@/shared/components/RegButton/RegBut";
import SignatureCanvas, {SignatureViewRef} from 'react-native-signature-canvas';
import { Pressable, View, Image } from "react-native";
import { styles } from "../styles/bottom";
import React, { useEffect, useRef, useState } from "react";
import { IProps } from "../types/signature";


export function Signature(props:IProps) {
    const {
        setScrollEnabled,
        setSignature,
        user,
        edit,
        signature
    } = props
    const ref = useRef<SignatureViewRef | null>(null);
    const [color, setColor] = useState<string>("#543C52")

    useEffect(() => {
        ref.current?.changePenColor(color)
    },[color])
    return <>{edit ? <>
                <View style={{height:200, width:"100%"}}>

                <SignatureCanvas
                    ref={ref}
                    onBegin={() => setScrollEnabled(false)}
                    onEnd={() => setScrollEnabled(true)}
                    onOK={setSignature}
                    penColor="#000"
                    backgroundColor="#fff"
                    style={{ flex: 1, width: "100%", height: "100%" }}
                    webviewProps={{
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
            </>
            : <>
                { (signature || user?.profile?.electronicSignature) && (
                    <Image
                        style={{ width: '100%', height: 100 }}
                        source={{ uri: signature || `http://10.0.2.2:8000/media/crackedAvatars/${user?.profile?.electronicSignature}.jpg` }}
                        resizeMode="contain"
                    />
                )}
            </>
        }
        </>
}