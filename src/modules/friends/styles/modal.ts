
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
    // elevation: 5,
    gap:36,
    paddingVertical: 44,
    paddingHorizontal:16
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "GTMedium",
    color: '#000',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: "flex-end",
    gap: 12,
  },
  flexButton: {
    // flex: 1, // Ensures both buttons take equal width in the row
    marginTop: 0, // Obetweenverriding the 10ms margin from your RegBut.styles
    borderWidth: 1,
    borderColor: '#5B3F4C',
    // paddingVertical:10,
    paddingHorizontal:16
  },
});