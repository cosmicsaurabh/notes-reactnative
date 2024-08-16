import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: "#161622",  // Primary color as background
  },
  newNoteButton: {
    zIndex: 9,
    position: "absolute",
    bottom: 20,
    right: 20,
    // backgroundColor: "#FF9C01",  // Secondary color for the button
    borderRadius: 50,
    padding: 15,
    shadowColor: "#FF9C01",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    elevation: 10,
  },
  noteList: {
    margin: 5,
  },
  txtTitle: {
    margin: 20,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF9C01",  // Secondary color for the title text
    letterSpacing: 1.2,
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: 18,
    marginTop: 20,
  },
  addButtonIcon: {
    color: "#FF9C01",  // Primary color for the plus icon
  },
});

export default style;
