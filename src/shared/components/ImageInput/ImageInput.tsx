import React from "react";
import * as ImageManipulator from 'expo-image-manipulator';
import {  Text, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {styles} from "./imageInput.styles"
import { IProps } from "./imageInputs.types";
const processImage = async (uri: string, width: number, height: number) => {
    // 1. Сначала узнаем реальные размеры картинки
    const imageInfo = await ImageManipulator.manipulateAsync(uri, []);

    // 2. Проверяем: если картинка уже меньше целевой ширины, 
    // массив действий (actions) оставляем пустым
    const actions = [];
    if (imageInfo.width > width) {
        actions.push({ resize: { width } });
    }

    const result = await ImageManipulator.manipulateAsync(
        uri,
        actions, 
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
    );

    return result.uri;
};
export function ImageInput(props:IProps ) {
    const {
        onChange, 
        filled,
        icon,
        text,
        style,
        children,
        aspect,
        notAspect,
        maxSize
    } = props
    async function pickImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: notAspect ? undefined : aspect || [1,1],
            quality: 0.5,

        });

        if (!result.canceled) {
            const res = await processImage(result.assets[0].uri, maxSize || 100, maxSize || 100)
            onChange(res);
        }
    }
    
    return (
        <Pressable style={[styles.basic,filled && styles.filled, style]} onPress={pickImage}>
            ...{typeof icon !== "string" && icon}
            {text && <Text>{text}</Text>}
            ...{children}
        </Pressable>
    )
}