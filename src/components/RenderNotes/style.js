import { StyleSheet, Dimensions } from "react-native";
import Colors from "./../../styles/colors";

const width = (Dimensions.get("window").width - 60) / 1;
const height = (Dimensions.get("window").height - 400) / 2;
const Style = StyleSheet.create({
  noteArea: {
    backgroundColor: "#1E1E2D",
    // backgroundColor: "#CDCDE0",
    width: "98%",
    height: "auto",
    padding: 10,
    borderRadius: 10,
    borderColor:"#CDCDE0",
    // shadowColor: "#CDCDE0",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    marginTop: 10,
    marginBottom: 10,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    margin:"1%",
    elevation: 4,
  },
  txtNoteTitle: {
    color: "#FF8E01",
    fontSize: 16,
    fontWeight: "bold",
  },
  txtNote: {
    color: "#CDCDE0",
    backgroundColor:"#232533",
    borderRadius:10,
    padding:10,
  },
});

export default Style;
