import { Link, router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { mines, type IMines } from "@/data/mines";

const Mine = ({ name, description, region: { title } }: IMines) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.mineContainer}>
      <Text>{name} Madeni</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Link href="/(stack)/mineDetail">Details</Link>
    </TouchableOpacity>
  );
};

export default function MinesScreen() {
  return (
    <View style={styles.container}>
      {mines.map((mine) => {
        return <Mine key={mine.id} {...mine} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mineContainer: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
