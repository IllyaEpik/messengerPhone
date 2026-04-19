import { Text } from "react-native";
import { Input } from "@/shared/components/Input/Input";
import { RegButton } from "@/shared/components/RegButton/RegBut";
import { styles } from "../styles/auth";
import { AuthProps } from "../types/props";
import { useLoginMutation,useRegistrationMutation } from "../api/userApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationForm, LoginForm } from "../models/types/auth";
import { registrationValidator,loginValidator } from "../models/lib/auth";
import { Controller, useForm, FormProvider } from "react-hook-form";
import { router } from "expo-router";

export function AuthOption(props: AuthProps) {
	const { authType } = props

	const [ login ]    = useLoginMutation();
	const [ register ] = useRegistrationMutation();
	type formType = RegistrationForm | LoginForm;
	const methods = useForm<formType>({ 
		resolver: yupResolver(authType === "register" ? registrationValidator : loginValidator) 
	})
	
	const { control, handleSubmit } = methods;
    async function onSubmit(data: formType){
		if (authType === "login") {
			const result = await login({...data});
			router.push({pathname: "/(tabs)"});
			return;
		}else{
			const result = await register({...data});
			router.push({pathname: "/(auth)/writeCode"});

		}
    }
	return (
		<FormProvider {...methods}>
			<Text style={styles.subtitle}>
				Приєднуйся до World IT
			</Text>
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
			
    
			<RegButton 
				title={authType === "register" ? "Створити акаунт" : "Увійти"} 
				onPress={handleSubmit(onSubmit)}  
				Buttonstyle={styles.button}
			/>
		</FormProvider>
	);
}