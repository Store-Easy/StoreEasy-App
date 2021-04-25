import React from "react";
import { Button, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./Styles";

const UserType = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Register"
        style={styles.button}
        onPress={() => navigation.navigate("StorageRegisteration")}
      >
        <Text style={styles.btntext}>Register Property</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Search"
        style={styles.button}
        onPress={() => navigation.navigate("SearchRentee")}
      >
        <Text style={styles.btntext}>Search Storage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserType;
