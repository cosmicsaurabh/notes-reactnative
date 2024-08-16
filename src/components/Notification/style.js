import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  modalView: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#232533",
    borderRadius: 40,
    borderColor:"#CDCDE0",
    padding: 35,
    height: "50%",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    width: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonCancel: {
    backgroundColor: "#c70000",
  },
  buttonSave: {
    backgroundColor: "#2196F3",
  },
  txtStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
  buttonHours: {
    alignSelf: "center",
    alignItems: "center",
    borderBottomColor: "#FF8E01",
    borderBottomWidth: 1,
    width: 150,
    marginBottom: 10,
  },
  txtHours: {
    fontWeight: "bold",
    color: "#CDCDE0",
    fontSize: 25,
  },
});

export default style;
