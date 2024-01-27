import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="mineDetail"
        options={{
          headerBackTitle: "Geri",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerBackTitle: "Geri",
        }}
      />
    </Stack>
  );
}
