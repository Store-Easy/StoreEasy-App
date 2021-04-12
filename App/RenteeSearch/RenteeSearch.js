import React, { useState } from "react";
import { Picker, View, Button } from "react-native";

const RenteeSearch = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [pricePerMonth, setPricePerMonth] = useState("");

  return (
    <View>
     <Picker
        selectedValue={propertyType}
        onValueChange={(itemValue) => setPropertyType(itemValue)}
      >
        <Picker.Item label="Room" value="room" />
        <Picker.Item label="Garage" value="garage" />
      </Picker>
     <Picker
        selectedValue={location}
        onValueChange={(itemValue) => setLocation(itemValue)}
      >
        <Picker.Item label="Chandigarh" value="chandigarh" />
        <Picker.Item label="Mohali" value="mohali" />
      </Picker>
     <Picker
        selectedValue={pricePerMonth}
        onValueChange={(itemValue) => setPricePerMonth(itemValue)}
      >
        <Picker.Item label="20000" value="20000" />
        <Picker.Item label="30000" value="30000" />
      </Picker>
      
      <Button title="Submit" color="#841584" />
    </View>
  );
};

export default RenteeSearch;
