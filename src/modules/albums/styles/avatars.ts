import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    icon: {
        width: 160,
        height: 160,
        borderRadius:20
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        marginTop:10
        // marginTop:25
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width:"100%",
        alignItems:"center"
    },
    publicButton:{
        borderRadius: 100,
        borderColor: "#543C52",
        borderWidth: 1,
        borderStyle: "solid",
        padding: 10,


    },
    
    avatars:{
        flexDirection: "row",
        justifyContent:"flex-start",
        gap: 25,
        width:"100%"
    },
    photo : {
        fontFamily: "GTMedium",
        fontSize: 16,
        
    },
    add : {
        fontFamily: "GTMedium",
        fontSize: 14,
        
    },
    buttonIcon:{
        padding: 9,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        borderColor: "#543C52",
        borderWidth: 1,
        borderStyle: "solid",
        flexDirection: "row"
    },
    iconContainer: {
        position: "relative"
    },
    iconsOnImg:{
        position: "absolute",
        right: 10,
        bottom: 10,
        flexDirection:"row",
        gap:10
    }
})