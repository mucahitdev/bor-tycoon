import React from "react";
import { Text, View, StyleSheet } from "react-native";

import ProgressBar from "@/components/shared/progressBar";
import Colors from "@/constants/Colors";
import { mines } from "@/data/mines";
import { useAppSelector } from "@/store/hooks";

export default function MineStorageDashboard() {
  const { mineData } = useAppSelector((state) => state.game);

  const getMineName = (id: number) =>
    mines.find((mine) => mine.id === String(id))?.name;
  const _mines = Object.values(mineData).map((mine, index) => ({
    ...mine,
    name: getMineName(index + 1),
  }));
  return (
    <View style={styles.progressContainer}>
      <Text style={styles.progressHeader}>Maden Depoları</Text>
      {_mines.map((mine) => (
        <View key={mine.name}>
          <Text>{mine.name}</Text>
          <ProgressBar value={(mine.rawCount / mine.capacity) * 100} />
          <Text>{`Depo Doluluğu: ${mine.rawCount} / ${mine.capacity}`}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: Colors.orange,
    padding: 8,
    gap: 8,
    borderRadius: 10,
  },
  progressHeader: {
    fontFamily: "Q_7",
    fontSize: 16,
  },
});
