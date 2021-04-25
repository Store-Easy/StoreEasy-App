import React from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";
// import { styles } from "../SearchList/Styles";
import { styles } from "./Styles";

const PropertyCard = () => {
  const [details, setDetails] = useState({
    Owner: "Utkarsh",
    PropertyType: "Self-Storage",
    Location: "Bareilly",
    Price: "Rs 4000",
    id: 2,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textinput}>Property Type: {details.PropertyType}</Text>
      <Text style={styles.textinput}>Location:{details.Location}</Text>
      <Text style={styles.textinput}>Price:{details.Price}</Text>
      <Text style={styles.textinput}>Owner:{details.Owner} </Text>
      <Button title="Book" />
    </View>
  );
};

export default PropertyCard;
