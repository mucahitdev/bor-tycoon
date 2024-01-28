import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="mine-detail/[id]"
        options={{
          headerBackTitle: "Geri",
          headerShown: true,
          headerTitleAlign: "center",
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
