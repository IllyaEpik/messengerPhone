import { Text, View, Image, ScrollView } from "react-native";
import { ProfileCard } from "./profileCard";
import { ProfileSettings } from "./settings";
import { ProfileBottom } from "./bottom";
import { useState } from "react";


export function Profile(){
	const [scrollEnabled,setScrollEnabled] = useState(true)
	return (
		// <View>
			<ScrollView style={{ paddingHorizontal: 0 }} scrollEnabled={scrollEnabled}>
				<ProfileCard/>
				<ProfileSettings/>
				<ProfileBottom setScrollEnabled={setScrollEnabled}/>
			</ScrollView>
		//  </View>
	);
};
