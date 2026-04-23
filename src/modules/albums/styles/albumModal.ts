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
        // width:"100%",
        // height:"100%"
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
        paddingTop:24,
        paddingBottom:44,
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
        // width:"100%",
        // height:"100%"
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
        height:40,
        gap:10
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
    invisibleButton: {
        borderWidth:1,
        borderColor:"#543C52",
        
    },
    text:{
        color:"#070A1C",
        fontFamily:"GTRegular"
    },
    main:{
        paddingVertical:24,
        gap:16
    },
    input:{
        width:300
    },
    dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    },
    label: {
    fontFamily: "GTRegular",
    marginBottom: 6,
    fontSize: 16,
    },
})