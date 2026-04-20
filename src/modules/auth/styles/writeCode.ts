import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: "white",
        borderRadius:20,
        width:"80%",
        paddingVertical:44,
        paddingHorizontal:16
    }, 
    title: {
        fontFamily: "GTMedium",
        fontSize: 24
    },
    check: {
        fontFamily: "GTMedium",
        fontSize: 14,
        textAlign:"center"
    },
    code: {
        fontFamily: "GTRegular",
        fontSize: 18,
        textAlign:"left"
    },
    codeContainer:{
        justifyContent:"flex-start",
        alignItems:"flex-start",
        width:"100%"
    },
    button:{
        width:"100%"
    }
});