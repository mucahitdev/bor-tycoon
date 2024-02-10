import { router } from "expo-router";
import React, { useState } from "react";
import { Text, StyleSheet, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAppStore from "@/store";

export default function Onboarding() {
  const setCompanyName = useAppStore((state) => state.setCompanyName);
  const [companyName, setCompanyNam] = useState("");
  const navigateHome = () => {
    setCompanyName(companyName);
    router.push("/(stack)/(tabs)");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hoş Geldin Patron</Text>
      <Text style={styles.description}>Şimdi şirketin için bir isim seç.</Text>

      <TextInput
        value={companyName}
        onChangeText={setCompanyNam}
        style={styles.input}
      />

      <Button title="Devam Et" onPress={navigateHome} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBE2EF",
    paddingHorizontal: 16,
    gap: 16,
  },
  title: {
    fontSize: 30,
    fontFamily: "SpaceMonoBold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: "SpaceMono",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F9F7F7",
    borderRadius: 10,
    padding: 10,
    height: 40,
    color: "#3F72AF",
  },
});
