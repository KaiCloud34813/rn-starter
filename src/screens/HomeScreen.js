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
      <Button
        title="go to Counter"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="go to Color"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="go to Square"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
      <Button
        title="go to Text"
        onPress={() => {
          navigation.navigate("Text");
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
