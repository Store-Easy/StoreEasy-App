import React, { useState } from "react";
import { TextInput, View, Button } from "react-native";

const HostForm = () => {
  const [name, setName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [pricePerMonth, setPricePerMonth] = useState("");

  const handleChange = (event) => {
    switch (event.name) {
      case "Name":
        setName(event.value);
        break;
      case "PropertyType":
        setPropertyType(event.value);
        break;
      case "Location":
        setLocation(event.value);
        break;
      case "PricePerMonth":
        setPricePerMonth(event.value);
        break;
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Name"
        name="Name"
        defaultValue={name}
        onChangeText={(input) => setName(input)}
      />
      <TextInput
        placeholder="Property Type"
        name="PropertyType"
        defaultValue={propertyType}
        onChangeText={(input) => setPropertyType(input)}
      />
      <TextInput
        placeholder="Property Location"
        name="Location"
        defaultValue={location}
        onChangeText={(input) => setLocation(input)}
      />
      <TextInput
        placeholder="Price per Month"
        name="PricePerMonth"
        defaultValue={pricePerMonth}
        onChangeText={(input) => setPricePerMonth(input)}
      />
      <Button title="Learn More" color="#841584" />
    </View>
  );
};

export default HostForm;
