import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    icon: {
        width: 140,
        height: 140,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#81818D",
        borderStyle:"dashed"
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        gap: 10,
        flexDirection: "column",
        marginTop:10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width:"100%",
        alignItems:"center"
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
    publicButton:{
        borderRadius: 100,
        borderColor: "#543C52",
        borderWidth: 1,
        borderStyle: "solid",
        padding: 10,


    },
    noOne: {
        fontFamily: "GTMedium",
        fontSize: 16,
    },
    albumData: {

        flexDirection:"row",
        gap:10,
        alignItems:"center",
        justifyContent: "flex-start",

    },
    imageContainer:{
        width:"100%",
        flexDirection:"row",
        flexWrap: "wrap",
        gap:10
    },
    
    divider: {
        height: 1,
        backgroundColor: "#CDCED2",
        width: "100%",
        marginVertical: 10,
    },
    subtitle: {
        color: "#070A1C",
        fontFamily: "GTMedium",
        textAlign:"left",
        width:"100%"
    },
    grayText:{
        color: "#81818D"
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