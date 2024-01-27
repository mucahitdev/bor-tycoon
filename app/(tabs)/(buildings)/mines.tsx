import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function MinesScreen() {
  return (
    <View style={styles.container}>
      <Text>Madenler</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
