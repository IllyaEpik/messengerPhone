import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex:1,
        zIndex:3,
        position:"absolute",
        left:0,
        right:0,
        top:0,
        bottom:0,
        
    },
    modal:{
        gap: 10,
        borderRadius:20,
        backgroundColor:"white",
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        margin:30,
        padding:20
    },
    background:{
        backgroundColor: "rgba(0, 0, 0, 0.272)",
        position:"absolute",
        flex:1,
        zIndex:2,
        left:0,
        right:0,
        top:0,
        bottom:0,
    },
    greenText:{
        color:"#22C55E"
    },
    buttonContainer: {
        alignItems:"flex-end",
        justifyContent:"flex-end",
        flexDirection:"row",
        width:"100%"
    }
});