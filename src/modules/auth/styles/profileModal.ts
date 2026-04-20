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
        paddingHorizontal:16,
        paddingVertical:44
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
        color:"#22C55E",
        fontFamily:"GTRegular",
        letterSpacing:-0.1
    },
    buttonContainer: {
        alignItems:"flex-end",
        justifyContent:"flex-end",
        flexDirection:"row",
        width:"100%",
        height:40
    },
    title:{
        color:"#070A1C",
        fontFamily:"GTMedium",
        fontSize:24
    },
    button:{
        paddingHorizontal:16,
        paddingVertical:10,
        height:45
        // width:120
    },
    text:{
        color:"#070A1C",
        fontFamily:"GTRegular"
    },
    main:{
        paddingVertical:24,
        gap:16
    },
    inputWithText:{
        gap:8
    }
});