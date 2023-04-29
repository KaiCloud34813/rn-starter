import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { navigator } from "../../App.js";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}> Sandara App</Text>
      <Button
        title="go to Components"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="go to List"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
