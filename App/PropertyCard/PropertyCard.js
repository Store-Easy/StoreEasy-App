import React from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";
// import { styles } from "../SearchList/Styles";
import { styles } from "./Styles";

const PropertyCard = ({ route, navigation }) => {
  // const { propertyDetails } = route.params.Owner;
  // console.log(propertyDetails);
  // const [details, setDetails] = useState({
  // const [Owner, PropertyType, Location, Price, id, Phone] = route.params;
  const [sellingId] = route.params;
  console.log(sellingId);
  return (
    <View style={styles.container}>
      <Text style={styles.textinput}>Property Type: {PropertyType}</Text>
      <Text style={styles.textinput}>Location:{Location}</Text>
      <Text style={styles.textinput}>Price:{Price}</Text>
      <Text style={styles.textinput}>Owner:{Owner} </Text>
      <Button title="Book" />
    </View>
  );
};

export default PropertyCard;
