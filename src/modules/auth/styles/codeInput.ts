import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    boxesContainer: {
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%"
    },
    otpBox: {
        borderRadius:20,
        backgroundColor:"white",
        borderWidth:1,
        borderColor: "#CDCED2",
        borderStyle:"solid",
        width:60,
        height:60,
        justifyContent:"center",
        alignItems:"center"
    },
    otpBoxActive: {
        borderWidth: 3,
        borderColor: "#543C52"
    },
    otpText: {
        fontSize:30
    },
    hiddenInput: {
        position: 'absolute',
        width: 1,
        height: 1,
        opacity: 0
        
    }
});