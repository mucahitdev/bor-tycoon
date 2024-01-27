import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppSelector } from "@/store/hooks";

export default function HomeScreen() {
  const { companyName } = useAppSelector((state) => state.settings);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.companyHeader}>
        <Text style={styles.companyName} numberOfLines={1} ellipsizeMode="tail">
          {companyName} Ltd Şti
        </Text>
        <Text style={styles.companyName}> </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
