import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import type {
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import type {
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

import Colors from "@/constants/Colors";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const TabLayout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: Colors.secondary,
        },
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="mines"
        options={{
          title: "Madenler",
        }}
      />
      <MaterialTopTabs.Screen
        name="factories"
        options={{
          title: "Fabrikalar",
        }}
      />
    </MaterialTopTabs>
  );
};

export default TabLayout;
