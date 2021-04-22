import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    paddingLeft: 60,
    paddingRight: 60,
  },
  regform:{
    alignSelf: "stretch",
  },
  header:{
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textinput:{
    alignSelf:"stretch",
    height:40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  button:{
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});
