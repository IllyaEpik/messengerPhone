import { Text, View, Image, ScrollView } from "react-native";
import { Avatars } from "./avatars";
import { Footer } from "./footer";
import { styles } from "../styles/avatars";
import { useAuthContext } from "@/modules/auth/context/authContext";
import { useGetAlbumsQuery } from "../api/albumApi";

export function Albums() {
	const { token, user } = useAuthContext();
	const { data } = useGetAlbumsQuery(token, {
			skip: !token,
			pollingInterval: 5000,
		});
	return (
		<ScrollView style={{ flex: 1 }}>
			{/* <ScrollView style={{flex:1}}> */}
			<Avatars albums={data}/>
			<Footer albums={data}/>
			{/* </ScrollView> */}
			{/* <View style={styles.empty}/> */}
		</ScrollView>
	);
}
