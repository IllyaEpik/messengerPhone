import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    icon: {
        width: 96,
        height: 96,
        borderRadius:50
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 15,
        margin: 0,
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        width:"100%"
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
    activatedEditButton:{
        backgroundColor:"#E9E5EE"
    },
    inputs:{
        flexDirection:"row",
        gap:10
    },
    cardProf : {
        fontFamily: "GTMedium",
        fontSize: 16,
        color:"#070A1C"
    },
    nickname: {
        fontFamily: "GTBold",
        fontSize: 24,
        color:"#070A1C"
    },
    username: {
        fontFamily: "GTMedium",
        fontSize: 16,
        color:"#070A1C"
        
    }
})