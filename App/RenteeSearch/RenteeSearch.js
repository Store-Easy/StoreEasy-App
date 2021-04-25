import React, { useState } from "react";
import { View, Button, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./Styles";

const RenteeSearch = ({navigation}) => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () =>{
    navigation.navigate('SearchList', {
      propertyType,
      location,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Search Storage</Text>
        <TextInput
            style={styles.textinput}
            placeholder="Property Type"
            name="PropertyType"
            placeholderTextColor="white"
            defaultValue={propertyType}
            underlineColorAndroid={"transparent"}
            onChangeText={(input) => setPropertyType(input)}
          />
          
          <TextInput
            style={styles.textinput}
            placeholder="Property Location"
            name="Location"
            placeholderTextColor="white"
            defaultValue={location}
            underlineColorAndroid={"transparent"}
            onChangeText={(input) => setLocation(input)}
          />

        

        <TouchableOpacity style={styles.button} onPress = {handleSubmit}>
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
        {/* <Button title="Submit" color="#841584" /> */}
      </View>
    </View>
  );
};

export default RenteeSearch;
