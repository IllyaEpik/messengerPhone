import { View, Text } from "react-native";
import { styles } from "../styles/albumModal";
import { Input } from "@/shared/components/Input/Input";
import { RegButton } from "@/shared/components/RegButton/RegBut";
import { useEffect, useState } from "react";
import { albumModalProps, albumForm } from "../types/albumModal";
import { Dropdown } from "react-native-element-dropdown";
import { useCreateAlbumMutation, useUpdateAlbumsMutation } from "../api/albumApi";
import { useAuthContext } from "@/modules/auth/context/authContext";

export function AlbumModal(props: albumModalProps){
    const {
        isEdit,
        isOpen,
        close,
        album
    } = props 
    const date = new Date()
    const topics = [
    { label: "Природа", value: "Природа" },
    { label: "Місто", value: "Місто" },
    { label: "Люди", value: "Люди" },
    ];
    const [createAlbum, {isLoading}] = useCreateAlbumMutation()
    const [updateAlbum] = useUpdateAlbumsMutation()
    const userData = useAuthContext()
    const years = Array.from({ length: 100 }, (_, i) => {
            const year = date.getFullYear() - i;
            return { label: String(year), value: String(year) };
        });

    const [form, setForm] = useState<albumForm >({year:date.getFullYear(), topic:"", title:""})
    const handleChange = (key: keyof albumForm, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };
    useEffect(()=>{
        if (album){
            setForm({
                title:album.title,
                topic:album.topic.name,
                year:album.year
            })
        }
    },[])
    function submit() {
        if (isLoading) return
        
        try {
            if (isEdit && album){
                updateAlbum({
                    token:userData.token,
                    ...form,
                    id:album.id
                })
            }else{
                createAlbum({
                    token:userData.token,
                    ...form
                })
                setForm({year:date.getFullYear(), topic:"", title:""})
            }
            close()
        } catch (error) {
        	console.error("Update profile failed", error);
        }
    }
    if (!isOpen) return null
    return (<>
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.title}>
                    {
                        isEdit ? "Редагувати альбом" : "Створити альбом"
                    }
                </Text>
                <View style={styles.main}>
                    <View style={styles.input}>
                    <Input
                        label="Назва альбому "
                        placeholder="Настрій"
                        onChangeText={(value) => handleChange("title", value)}
                        value={form.title}
                        containerInputStyles={styles.input}
                        error=""
                    />
                        </View>
                        <Text style={styles.label}>Оберіть тему</Text>
                            <Dropdown
                            style={styles.dropdown}
                            data={topics}
                            labelField="label"
                            valueField="value"
                            placeholder="Природа"
                            value={form.topic}
                            onChange={(item) => handleChange("topic", item.value)}
                            />
                        <Text style={styles.label}>Рік альбому</Text>
                        <Dropdown
                            style={styles.dropdown}
                            data={years}
                            labelField="label"
                            valueField="value"
                            placeholder="Оберіть рік"
                            value={String(form.year)}
                            onChange={(item) => handleChange("year", item.value)}
                        />

                </View>
                <View style={styles.buttonContainer}>
                    <RegButton title="скасувати" onPress={close} Buttonstyle={[styles.button, styles.invisibleButton]} invisible></RegButton>
                    <RegButton title="Зберегти" onPress={submit} Buttonstyle={styles.button}></RegButton>
                </View>
            </View>
        </View>

        <View style={styles.background}/>
    </>)
}