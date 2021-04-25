import React, { useState } from "react";
import { View, Button, Text, Picker } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./Styles";

const RenteeSearch = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [pricePerMonth, setPricePerMonth] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Search Storage</Text>
        <Picker
          style={styles.picker}
          selectedValue={propertyType}
          onValueChange={(itemValue) => setPropertyType(itemValue)}
        >
          <Picker.Item label="Property Type" value="type" />
          <Picker.Item label="Room" value="room" />
          <Picker.Item label="Garage" value="garage" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label="Location" value="location" />
          <Picker.Item label="Chandigarh" value="chandigarh" />
          <Picker.Item label="Mohali" value="mohali" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={pricePerMonth}
          onValueChange={(itemValue) => setPricePerMonth(itemValue)}
        >
          <Picker.Item label="Price" value="price" />
          <Picker.Item label="2000" value="2000" />
          <Picker.Item label="3000" value="3000" />
        </Picker>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
        {/* <Button title="Submit" color="#841584" /> */}
      </View>
    </View>
  );
};

export default RenteeSearch;
