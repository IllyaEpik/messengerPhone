import { View } from "react-native";
import { Slot } from "expo-router";

import Header from "@/shared/ui/header/header";
import Footer from "@/shared/ui/footer/footer";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>

      <Header />

      <View style={{ flex: 1 }}>
        <Slot />
      </View>

      <Footer />

    </View>
  );
}