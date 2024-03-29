import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MineStorageDashboard from "@/components/core/mineStorageDashboard";
import useAppStore from "@/store";

export default function HomeScreen() {
  const companyName = useAppStore((state) => state.companyName);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.companyHeader}>
        <Text style={styles.companyName} numberOfLines={1} ellipsizeMode="tail">
          {companyName} Ltd Şti
        </Text>
      </View>
      <MineStorageDashboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  companyHeader: {
    padding: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#3F72AF",
  },
  companyName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
