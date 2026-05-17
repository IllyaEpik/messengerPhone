import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    // optionsBox: {
    //     backgroundColor:"#E9E5EE",
    //     flexDirection:"column",
    //     gap:16,
    //     padding:16
    // },
    // line:{
    //     width:"100%",
    //     height:1,
    //     backgroundColor:"#E9E5EE"
    // },
    // close:{
    //     width:"100%",
    //     justifyContent:"flex-end",
    //     flexDirection:"row"
    // },
    // option:{
    //     width:"100%",
    //     justifyContent:"flex-start",
    //     flexDirection:"row"

    // }
    menuCard: {
        // position: 'absolute',
        // top: 60, // Adjust based on your "three dots" button position
        // right: 16,
        backgroundColor: '#E9E5EE', // The lavender/grey from your image
        borderRadius: 16,
        paddingVertical: 8,
        width: 280,
        elevation: 4, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    iconContainer: {
        marginRight: 12,
        width: 24,
        alignItems: 'center',
    },
    menuText: {
        fontSize: 14,
        color: '#1C1B1F',
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.08)',
        marginVertical: 4,
        marginHorizontal: 16,
    }
})