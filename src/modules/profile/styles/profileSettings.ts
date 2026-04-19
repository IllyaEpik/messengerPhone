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
    headerWithMargin: {
        flexDirection: "row",
        gap: 200,
        justifyContent: "space-between",
        marginTop: 50
            
    },
    header: {
        flexDirection: "row",
        // gap: 200,
        justifyContent: "space-between",
        flex:1,
        alignItems: "center"
        // height:30
            
    },
    editButton:{
        padding: 7,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        borderColor: "#543C52",
        borderWidth: 1,
        borderStyle: "solid",
        flexDirection: "row"
    },
    activatedEditButton: {
        backgroundColor:"#E9E5EE"
    },
    errorText: {
        color: "#D32F2F",
        marginTop: 10,
        fontSize: 14,
    }
})