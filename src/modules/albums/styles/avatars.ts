import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    icon: {
        width: 96,
        height: 96,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        marginTop:25
    },
    header: {
        flexDirection: "row",
        gap: 180,
        justifyContent: "space-between",
    },

    publicButton:{
        flexDirection: "row",
        borderRadius: 100,
        borderColor: "#543C52",
        borderWidth: 1,
        borderStyle: "solid",
        padding: 10

    },
    avatars:{
        flexDirection: "row",
        justifyContent:"flex-start",
        gap: 25
    }
})