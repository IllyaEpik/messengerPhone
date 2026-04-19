import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        gap: 10,
        flexDirection: "column",
        // alignItems: "center",
        marginTop: 50
    },
    header: {
        flexDirection: "row",
        gap: 200,
        justifyContent: "space-between"
    },
    textWithCheckBox: {
        flexDirection: "row",
        gap:10,
        marginTop: 50

    },
    editButton:{
        padding: 7,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        borderColor: "#543C52",
        borderWidth: 1,
        borderStyle: "solid"
    },
    empty:{
        height:100
    }
})