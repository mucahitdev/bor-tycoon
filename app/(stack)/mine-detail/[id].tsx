import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { mines } from "@/data/mines";
import useAppStore from "@/store";

const getMineData = (id: string) => mines.find((mine) => mine.id === id);

export default function MineDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const mineData = useAppStore((state) => state.mineData);

  const data = getMineData(id);
  if (!data) {
    return null;
  }
  const { name } = data;
  const title = name + " Madeni";

  const idNumber = parseInt(id, 10);
  const { level, rawCount, capacity } = mineData[idNumber];

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: title,
        }}
      />
      <Text>{title}</Text>
      <Text>Seviye: {level}</Text>
      <Text>
        Maden deposundaki {name} madeni: {rawCount}
      </Text>
      <Text>Maden deposunun kapasitesi: {capacity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
