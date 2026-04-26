import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        gap: 10,
        flexDirection: "column",
        marginTop: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width:"100%"
    },
    textWithCheckBox: {
        flexDirection: "row",
        gap:20,
        // marginTop: 50,
        color:"#070A1C"

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
    },
    variant: {
        fontFamily: "GTMedium",
        fontSize: 16,
        color:"#070A1C"
        
    },
    psev : {
        fontFamily: "GTMedium",
        fontSize: 16,
        color:"#070A1C"
        
    },
    name: {
        fontFamily: "GTRegular",
        fontSize: 16,
        color:"#070A1C"
    },
    elec: {
        fontFamily: "GTMedium",
        fontSize: 16,
        color:"#070A1C"
    },
    element: {
        gap:24
    },
    activatedEditButton: {
        backgroundColor:"#E9E5EE"
    },
    button:{
        borderColor:"#543C52",
        borderWidth:1,
        height:40,
        padding:10
    },
    saveButton:{
        backgroundColor:"#E9E5EE"
    },
    buttons:{
        width:200,
        flexDirection: "row",
        gap:10
    },
    buttonText:{
        fontSize:14,
        fontFamily:"GTMedium"
    },
    color:{
        borderRadius:999,
        height:44,
        width:44,
        backgroundColor:"#070A1C"
    },
    selectedColor:{
        borderColor:"#81818D",
        borderWidth:3
    },
    brown:{
        backgroundColor:"#543C52"
    }
})