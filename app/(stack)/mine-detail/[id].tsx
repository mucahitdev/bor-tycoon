import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { IMines, mines } from "@/data/mines";

const getMineData = (id: string) => mines.find((mine) => mine.id === id);

export default function MineDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const data = getMineData(id);
  if (!data) {
    return null;
  }
  const { name, description, products } = data;
  const title = name + " Madeni";
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: title,
        }}
      />
      <Text>{description}</Text>
      <Text>Çıkan ürünler</Text>
      {products.map((product) => {
        return <Text key={product.id}>{product.name}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
