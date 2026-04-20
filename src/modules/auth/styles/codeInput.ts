import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    boxesContainer: {
        flexDirection:"row",
        // justifyContent:"flex-start",
        width:"100%",
        gap:8,
        marginLeft:-10
    },
    otpBox: {
        borderRadius:10,
        backgroundColor:"white",
        borderWidth:1,
        borderColor: "#CDCED2",
        borderStyle:"solid",
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    otpBoxActive: {
        borderWidth: 3,
        borderColor: "#543C52"
    },
    otpText: {
        fontSize:16,
        color:"#81818D"
    },
    hiddenInput: {
        position: 'absolute',
        width: 1,
        height: 1,
        opacity: 0
        
    },
    withGap:{
        marginLeft:10
    }
});