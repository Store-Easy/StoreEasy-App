import React, { useState } from "react";
import { TextInput, Text, View, Button, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { arr } from "../../Backend-Data-API";

const HostForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [pricePerMonth, setPricePerMonth] = useState("");
  const [phone, setPhoneNumber] = useState("");

  const handleHost = () => {
    if (name && propertyType && location && pricePerMonth && phone) {
      arr.push({
        Owner: name,
        PropertyType: propertyType,
        Location: location,
        Price: pricePerMonth,
        Phone: phone,
        id: 101,
      });
      alert(
        `Your property is successfully uploaded.\nInterested rentees will contact you on your number`
      );
      navigation.push("UserType");
    } else {
      alert(`Please enter all the details`);
    }
  };

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
    <View style={styles.container}>
      <View style={styles.regform}>
        <Text style={styles.header}>Storage Registration</Text>
        <View>
          <TextInput
            style={styles.textinput}
            placeholder="Name"
            name="Name"
            defaultValue={name}
            placeholderTextColor="white"
            underlineColorAndroid={"transparent"}
            onChangeText={(input) => setName(input)}
          />
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
          <TextInput
            style={styles.textinput}
            placeholder="Price per Month"
            name="PricePerMonth"
            placeholderTextColor="white"
            defaultValue={pricePerMonth}
            underlineColorAndroid={"transparent"}
            onChangeText={(input) => setPricePerMonth(input)}
          />
          <TextInput
            style={styles.textinput}
            placeholder="PhoneNumber"
            name="PhoneNumber"
            defaultValue={phone}
            placeholderTextColor="white"
            underlineColorAndroid={"transparent"}
            onChangeText={(input) => setPhoneNumber(input)}
          />
          <TouchableOpacity style={styles.button} onPress={handleHost}>
            <Text style={styles.btntext}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HostForm;
