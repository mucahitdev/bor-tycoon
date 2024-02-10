import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, StyleSheet, View, Text } from "react-native";

// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { addExperiencePoints } from "@/store/userReducer";

export default function TabTwoScreen() {
  // const dispatch = useAppDispatch();
  const clearData = async () => {
    AsyncStorage.clear();
  };
  // const { level, experiencePoints } = useAppSelector((state) => state.user);

  // const addXp = () => {
  //   dispatch(addExperiencePoints(10000));
  // };
  return (
    <View style={styles.container}>
      <Button title="Clear all data" onPress={clearData} />
      {/* <Text>User Level: {level}</Text>
      <Text>Experience Points: {experiencePoints}</Text> */}
      {/* <Button title="Add 100 XP" onPress={addXp} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
