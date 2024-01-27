import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Colors from "@/constants/Colors";

interface ProgressBarProps {
  value: number;
  style?: ViewStyle;
}

export default function ProgressBar({ value, style }: ProgressBarProps) {
  if (value > 100) value = 100;
  if (value < 0) value = 0;
  return (
    <View style={[styles.progress, style]}>
      <View style={[styles.progressValue, { width: `${value}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progress: {
    borderRadius: 10,
    height: 10,
    width: "100%",
    backgroundColor: Colors.tertiary,
  },
  progressValue: {
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    height: "100%",
  },
});
