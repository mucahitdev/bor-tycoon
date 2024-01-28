import { Link } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { mines, type IMines } from "@/data/mines";

const Mine = (props: IMines) => {
  const {
    name,
    description,
    id,
    region: { title },
  } = props;
  return (
    <Link
      href={{
        pathname: "/(stack)/mine-detail/[id]",
        params: { id },
      }}
      asChild
    >
      <TouchableOpacity style={styles.mineContainer}>
        <Text>{name} Madeni</Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </TouchableOpacity>
    </Link>
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
