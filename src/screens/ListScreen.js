import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 30 },
    { name: "Friend 3", age: 36 },
    { name: "Friend 4", age: 26 },
    { name: "Friend 5", age: 20 },
    { name: "Friend 6", age: 28 },
    { name: "Friend 7", age: 58 },
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
  },
});

export default ListScreen;
