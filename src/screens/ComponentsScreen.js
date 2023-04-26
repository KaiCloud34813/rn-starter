// show some amount of content to the user (it returns jsx)
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "My name is Anass ";
  return (
    <View>
      <Text style={{ fontSize: 40 }}> Getting started with react native! </Text>
      <Text style={{ fontSize: 20 }}>{greeting}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 40,
//   },
// });

export default ComponentsScreen;
