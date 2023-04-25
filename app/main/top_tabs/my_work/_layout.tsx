import { StyleSheet, Text } from "react-native";
import { TopTabs } from "../../../../utils/TopTabs";
import { Stack } from "expo-router";

function TabOne() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "My Work",
        }}
      />

      <TopTabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "yellow" },
        }}
      />
    </>
  );
}

export default TabOne;
