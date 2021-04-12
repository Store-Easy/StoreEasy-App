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
      <View style={styles.regform}>
        <Text style={styles.header}>Search Storage</Text>
        <Picker
          style={styles.picker}
          selectedValue={propertyType}
          onValueChange={(itemValue) => setPropertyType(itemValue)}
        >
          <Picker.Item label="Room" value="room" />
          <Picker.Item label="Garage" value="garage" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label="Chandigarh" value="chandigarh" />
          <Picker.Item label="Mohali" value="mohali" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={pricePerMonth}
          onValueChange={(itemValue) => setPricePerMonth(itemValue)}
        >
          <Picker.Item label="20000" value="20000" />
          <Picker.Item label="30000" value="30000" />
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
