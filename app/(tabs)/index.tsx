import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProgressBar from "@/components/shared/progressBar";
import Colors from "@/constants/Colors";
import { useAppSelector } from "@/store/hooks";

export default function HomeScreen() {
  const { companyName } = useAppSelector((state) => state.settings);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.companyHeader}>
        <Text style={styles.companyName} numberOfLines={1} ellipsizeMode="tail">
          {companyName} Ltd Şti
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <Text>Maden Depo</Text>
        <ProgressBar value={45} />
      </View>
      <View style={styles.progressContainer}>
        <Text>Ürün Depo</Text>
        <ProgressBar value={23} />
      </View>
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
  progressContainer: {
    backgroundColor: Colors.orange,
    padding: 8,
    gap: 8,
    borderRadius: 10,
  },
});
