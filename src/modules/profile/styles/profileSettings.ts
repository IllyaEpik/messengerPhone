import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 15,
        gap: 10,
        flexDirection: "column",
        marginTop: 10
    },
    header: {

        flexDirection: "row",
        justifyContent: "space-between",
        width:"100%",
        alignItems:"center"
            
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
        fontFamily: "GTRegular",
        color: "#D32F2F",
        marginTop: 10,
        fontSize: 14,
    },
    boldText: {
        fontFamily:"GTMedium",
        fontWeight:500,
        color:"#070A1C"
    },
    input:{
        width:"80%"
    }
})