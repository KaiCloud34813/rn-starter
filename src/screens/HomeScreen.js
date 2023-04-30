import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

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
      <Button
        title="go to Image"
        onPress={() => {
          navigation.navigate("Image");
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
