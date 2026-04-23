import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {styles} from "./imageInput.styles"
import { IProps } from "./imageInputs.types";
export function ImageInput(props:IProps ) {
    const {
        onChange, 
        filled,
        icon,
        text,
        style
    } = props
    async function pickImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if (!result.canceled) {
            onChange(result.assets[0].uri);
        }
    }
    return (
        <Pressable style={[styles.basic,filled && styles.filled, style]} onPress={pickImage}>
            ...{icon}
            <Text>{text}</Text>
        </Pressable>
    )
}