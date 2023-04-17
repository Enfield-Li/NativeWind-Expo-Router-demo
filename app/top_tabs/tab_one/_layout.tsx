import { StyleSheet, Text } from "react-native";
import { TopTabs } from "../../../utils/TopTabs";

function TabOne() {
  return (
    <TopTabs
    screenOptions={{
      tabBarStyle: { backgroundColor: "yellow" },
    }}
  />
  );
}

export default TabOne;
