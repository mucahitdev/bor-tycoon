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
        tabBarLabelStyle: {
          color: Colors.primary,
          textTransform: "none",
        },
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="mines"
        options={{
          title: "MADENLER",
        }}
      />
      <MaterialTopTabs.Screen
        name="factories"
        options={{
          title: "FABRİKALAR",
        }}
      />
    </MaterialTopTabs>
  );
};

export default TabLayout;
