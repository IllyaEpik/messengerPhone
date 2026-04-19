import { useAuthContext } from "@/modules/auth/context/authContext";
import { Redirect } from "expo-router";

export default function Home() {
    const {user} = useAuthContext()
    if (!user){    
      return <Redirect href="/(auth)" />;
    }
    return <Redirect href="/(tabs)" />;
}
