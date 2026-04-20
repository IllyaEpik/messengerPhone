import { Input } from "@/shared/components/Input/Input";
import { Text, View, Image, ScrollView, Pressable, TextInput } from "react-native";
import { styles } from "../styles/codeInput";
import { useEffect, useRef, useState } from "react";
import { codeInputProps } from "../types/props";



export function CodeInput(props: codeInputProps){
    const {code, setCode} = props
    const inputRef = useRef<TextInput>(null);    
    const handlePress = () => inputRef.current?.focus();
    const codeArray = [...Array(6)].map((_, i) => (code[i] || ""));
    useEffect(()=>{
        inputRef.current?.focus();
    },[])
    return (
            <View>
                <Pressable style={styles.boxesContainer} onPress={handlePress}>
                    {codeArray.map((char, index) => {
                        const isFocused = index === code.length;

                        return (
                            <View 
                            key={index} 
                            style={[
                                styles.otpBox, 
                                isFocused && styles.otpBoxActive, 
                                index % 2 === 0 && styles.withGap
                            ]}
                            >
                            <Text style={styles.otpText}>{char || "___"}</Text>
                            </View>
                        );
                    })}
                </Pressable>
                <TextInput 
                 value={code} 
                keyboardType="number-pad"
                onChangeText={(text) => {
                    const cleaned = text.replace(/[^0-9]/g, "");
                    if (cleaned.length <= 6) {
                        setCode(cleaned)
                    }
                }}
                style={styles.hiddenInput}
                maxLength={6}
                ref={inputRef}
                />
            </View>


        )
}