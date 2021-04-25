import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { arr } from "../../API";
import { styles } from "../SearchList/Styles";

const SearchList = () => {
  const [testJson, setTestJson] = useState(arr);

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Search Storage</Text>
    <ScrollView >
      {testJson.map((inp) => {
        console.log(inp);
        return (
          <TouchableOpacity key={inp.id} style={styles.card}>
            <Text style={styles.text}>Property Type: {inp.PropertyType}</Text>
            <Text style={styles.text}>Location:{inp.Location}</Text>
            <Text style={styles.text}>Price:{inp.Price}</Text>
            <Text style={styles.text}>Owner:{inp.Owner} </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
    </View>
  );
};

export default SearchList;
