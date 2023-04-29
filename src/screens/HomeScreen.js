import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { navigator } from "../../App.js";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}> Sandara App</Text>
      <Button
        title="go to Components"
        onPress={() => {
          props.navigation.navigate("Components");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("List");
        }}
      >
        <Text>Go to SandaraList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
