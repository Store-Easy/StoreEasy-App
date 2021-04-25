import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { arr } from "../../Backend-Data-API";
import { styles } from "../SearchList/Styles";

const SearchList = ({ route, navigation }) => {
  const { propertyType, location } = route.params;
  let testArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].PropertyType == propertyType && arr[i].Location == location) {
      testArr.push(arr[i]);
    }
  }

  const [testJson, setTestJson] = useState(testArr);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Storage</Text>
      <ScrollView>
        {testJson.map((inp) => {
          console.log(inp);
          return (
            <TouchableOpacity
              key={inp.id}
              style={styles.card}
              onPress={() => {
                alert(
                  `Please Contact ${inp.Owner}, the Owner of the Property at ${inp.Phone}`
                );
              }}
            >
              <Text style={styles.text}>Property Type: {inp.PropertyType}</Text>
              <Text style={styles.text}>Location:{inp.Location}</Text>
              <Text style={styles.text}>Price:{inp.Price}</Text>
              <Text style={styles.text}>Owner:{inp.Owner} </Text>
              <Text style={styles.text}>Phone:{inp.Phone} </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchList;
