import { Stack } from "expo-router";
import Header from "@/shared/components/header/ui/header";

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				headerShown: true,
				header: () => <Header />,
			}}
		>
			<Stack.Screen name="index"></Stack.Screen>
		</Stack>
	);
}
