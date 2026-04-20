import { useAuthContext } from "@/modules/auth/context/authContext";
import Header from "@/shared/components/header/ui/header";
import { Redirect, router, Stack } from "expo-router";


export default function Layout() {

	// const {user} = useAuthContext()
	// if (user){
	// 	return <Redirect href="/(tabs)" />;
	// }

	return (
	
		<Stack screenOptions={{
			headerShown:true,
			header: () => <Header auth={true}/>,
			}}>
				
			<Stack.Screen name='index'></Stack.Screen>
			<Stack.Screen name='writeCode'></Stack.Screen>
		</Stack>
	);
}