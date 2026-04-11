import { Text } from "react-native";
import { useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { RegButton } from "@/shared/components/RegButton/RegBut";
import { styles } from "../styles/auth";
import { AuthProps } from "../types/props";
import { useLoginMutation,useRegistrationMutation } from "../api/userApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationForm, LoginForm } from "../models/types/auth";
import { registrationValidator,loginValidator } from "../models/lib/auth";
import { Controller, useForm, FormProvider, Form } from "react-hook-form";
import { ICONS } from "@/shared/static/icons";
import { useLocalSearchParams } from "expo-router";

export function AuthOption(props: AuthProps) {
	const { authType } = props

	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [confirm, setConfirm] = useState("");
	const [ login ]    = useLoginMutation();
	const [ register ] = useRegistrationMutation();
	type formType = RegistrationForm | LoginForm;
	const methods = useForm<formType>({ 
		resolver: yupResolver(authType === "register" ? registrationValidator : loginValidator) 
	})
	
	const { control, handleSubmit } = methods;
register
    async function onSubmit(data: formType){
		console.log(312123322323);
		if (authType === "login") {

			console.log("login");
			const result = await login({...data});
			console.log(result);
			return;
		}else{
			const result = await register({...data});
			console.log(result);

		}
    }
	return (
		<FormProvider {...methods}>
		{/* <Form> */}
			<Text style={styles.subtitle}>
				Приєднуйся до World IT
			</Text>
			{/* <Input
				placeholder="you@example.com"
				value={email}
				label="Електронна пошта"
				onChangeText={setEmail}
			/> */}
			<Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => {
                        return (
                            <Input
                                // inputContainerStyle={styles.inputContainer}
                                label="Електронна пошта"
                                placeholder="you@example.com"
                                onChangeText={field.onChange}
                                value={field.value}
                                error={fieldState.error?.message}
                            />
                        )
                    }}
                />
	
            <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                    <Input
                        label="Пароль"
                        placeholder="Введи пароль"
                        onChangeText={field.onChange}
                        value={field.value}
                        secure
                        error={fieldState.error?.message}
                    />
                )}
            />

            {/* Confirm Password (Registration Only) */}
            {authType === "register" && (
                <Controller
                    name="confirm"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Input
                            label="Підтверди пароль"
                            placeholder="Повтори пароль"
                            onChangeText={field.onChange}
                            value={field.value}
                            secure
                            error={fieldState.error?.message}
                        />
                    )}
                />
            )}
			{/* <Input
				placeholder="Введи пароль"
				value={password}
				label="Пароль"
				onChangeText={setPassword}
				secure
			/>
			{
			authType === "register" && (
				<Input
					placeholder="Повтори пароль"
					value={confirm}
					label="Підтверди пароль"
					onChangeText={setConfirm}
					secure
				/>
			)} */}
			
    
			<RegButton 
				title={authType === "register" ? "Створити акаунт" : "Увійти"} 
				onPress={handleSubmit(onSubmit)}  
				Buttonstyle={styles.button}
			/>
		{/* </Form> */}
		</FormProvider>
	);
}