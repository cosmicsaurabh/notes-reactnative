import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#161622",
    // margin: 20,
  },
  txtTitleNote: {
    width: "85%",
    padding: 15,
    borderWidth: 1.2,
    borderColor:"#FF8E01",
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 25,
    color: "#FF9001",
    margin:"7.5%",
    backgroundColor:"#1E1E2D",
    padding:20,
    
    
  },
  
  txtInput: {
    fontSize: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor:"#CDCDE0",
    width: "95%",
    height: "40%",
    margin:"2.5%",
    color: "#CDCDE0",
    backgroundColor:"#232533",
    borderRadius:10,
    padding:30,
  },
  actionButton: {
    borderRadius: 40,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

export default style;
