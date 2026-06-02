
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
// Add to your existing StyleSheet
messageRow: {
  flexDirection: 'row',
  marginBottom: 16,
//   alignItems: 'flex-end',
},
myMessageRow: {
  justifyContent: 'flex-end',
},
theirMessageRow: {
  justifyContent: 'flex-start',
},
messageAvatar: {
  width: 36,
  height: 36,
  borderRadius: 18,
  marginRight: 8,
},
messageBubble: {
    maxWidth: '75%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    flexDirection: 'row',
    gap: 8,
    borderWidth: 1,
    borderColor: '#E9E5EE',
},
myBubble: {
    backgroundColor: '#CDCED2',
    borderBottomRightRadius: 4,
    borderWidth: 0,
    paddingVertical: 15,
},
theirBubble: {
  backgroundColor: '#FFFFFF',
  borderBottomLeftRadius: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1,
},
senderName: {
  fontSize: 12,
  fontWeight: '600',
  color: '#543C52',
  marginBottom: 4,
},
messageText: {
  fontSize: 14,
  color: '#070A1C',
},
messageTime: {
  fontSize: 10,
  color: '#81818D',
  alignSelf: 'flex-end',
  marginTop: 4,
},
chatContainer: {
  flex: 1,
  backgroundColor: '#FAF8FF',
},
chatList: {
  paddingHorizontal: 16,
  paddingTop: 16,
  paddingBottom: 8,
  flexDirection: 'column-reverse', // Invert the list to show newest messages at the bottom
  flex:1
},
inputPanel: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: 30,
//   marginHorizontal: 16,
  marginBottom: 16,
//   paddingVertical: 6,
  paddingHorizontal: 12,
  gap: 8,
},
attachButton: {
  padding: 10,
  borderRadius: 990,
  borderWidth: 1,
  borderColor: '#543C52',
},
sendButton: {
  backgroundColor: '#543C52',
},
chatInput: {
  flex: 1,
  fontSize: 16,
  padding: 16,
  paddingVertical: 12,
//   marginHorizontal: 8,
  borderRadius: 10,
  color: '#543C52',
//   width: "50%",
  borderWidth: 1,
  borderColor: '#CDCED2',
  marginRight: 16,


},
header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FAF8FF",
  },
  iconButton: {
    padding: 6,
  },
  headerCenter: {
    // alignItems: "center",
  },
  groupName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#070A1C",
  },
  memberStatus: {
    fontSize: 12,
    color: "#81818D",
    marginTop: 2,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: "50%",
  },
  deteils: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,

  }
})