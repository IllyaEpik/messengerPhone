import { Text, View, Image } from "react-native";


export function ProfileCard(){
  return (
    <View>
        <View>
            <Text>Картка профілю</Text>
        </View>
        <Image 
            source={require('../../../media/icons/avatar.png')} 
            resizeMode="contain"
        />
        <Text>Lina Li</Text>
        <Text>@thelili</Text>
    </View>
  );
};
