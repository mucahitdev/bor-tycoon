import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function FactoriesScreen() {
  return (
    <View style={styles.container}>
      <Text>Fabrikalar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
