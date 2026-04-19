import { Text, View, Image, ScrollView } from "react-native";
import { ProfileCard } from "./profileCard";
import { ProfileSettings } from "./settings";
import { ProfileBottom } from "./bottom";


export function Profile(){
  return (
    // <View>
        <ScrollView>
            <ProfileCard></ProfileCard>
            <ProfileSettings/>
            <ProfileBottom/>
        </ScrollView>
    //  </View>
  );
};
