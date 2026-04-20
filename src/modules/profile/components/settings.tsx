import { useAuthContext } from "@/modules/auth/context/authContext";
import { Input } from "@/shared/components/Input/Input";
import { ICONS } from "@/shared/static/icons";
import { Text, View, Pressable } from "react-native";
import { styles } from "../styles/profileSettings";
import { useEffect, useState } from "react";
import { useUpdateProfileMutation } from "../api/profileApi";

interface FormState {
  firstName?: string;
  lastName?: string;
  email?: string;
  birthday?: string;
}

export function ProfileSettings() {
    const [edit, setEdit] = useState<boolean>(false);
    const rawUser = useAuthContext();
    if (!rawUser || !rawUser.user) return <Text>No user</Text>;
    const [updateProfile, { isLoading, isError }] = useUpdateProfileMutation();
    
    const { user, token } = rawUser;
    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
    });
    
    useEffect(() => {
        if (!user) return;

        setForm({
            firstName: user.profile?.firstName || "",
            lastName: user.profile?.lastName || "",
            email: user.email,
            birthday: user.dateOfBirth
                ? `${user.dateOfBirth.getDate()}.${user.dateOfBirth.getMonth() + 1}.${user.dateOfBirth.getFullYear()}`
                : ""
        });
    }, [user]);

    const handleChange = (key: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };


    const submit = async () => {
        if (!edit) {
        setEdit(true);
        return;
        }


        try {
        updateProfile({
            firstName: form.firstName?.trim() || "",
            lastName: form.lastName?.trim() || "",
            token,
        })
        setEdit(false);
        } catch (error) {
        console.error("Update profile failed", error);
        }
    };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Особиста інформація</Text>
        <Pressable
          style={[styles.editButton, edit && styles.activatedEditButton]}
          onPress={submit}
          disabled={isLoading}
        >
          <ICONS.Edit />
          {edit && <Text>Зберегти</Text> }
        </Pressable>
      </View>
    
      <Input
        value={form.firstName || ""}
        placeholder="Ім'я"
        label="Ім'я"
        onChangeText={(value) => handleChange("firstName", value)}
        error={undefined}
        editable={edit}
        containerInputStyles={styles.input}
      />

      <Input
        value={form.lastName || ""}
        placeholder="Прізвище"
        label="Прізвище"
        onChangeText={(value) => handleChange("lastName", value)}
        error={undefined}
        editable={edit}
        containerInputStyles={styles.input}
      />

      <Input
        value={form.birthday || ""}
        placeholder="15.04.2001"
        label="Дата народження"
        onChangeText={(value) => handleChange("birthday", value)}
        error={undefined}
        editable={false}
        containerInputStyles={styles.input}
      />

      <Input
        value={form.email || ""}
        placeholder="you@example.com"
        label="Електронна адреса"
        onChangeText={(value) => handleChange("email", value)}
        error={undefined}
        editable={false}
        containerInputStyles={styles.input}
      />

      <View style={styles.header}>
        <Text style={styles.boldText}>Пароль</Text>
        <View style={styles.editButton}>
          <ICONS.Edit />
        </View>
      </View>
      <Input
        value="********"
        placeholder="********"
        label="Пароль"
        onChangeText={() => {}}
        error={""}
        editable={false}
      />

      {isError && <Text style={styles.errorText}>Could not save profile. Please try again.</Text>}
    </View>
  );
}

