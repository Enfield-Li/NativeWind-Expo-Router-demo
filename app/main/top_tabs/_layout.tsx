import { Stack, Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Icon";
import { Image, Text, View } from "react-native";
import { TopTabs } from "../../../utils/TopTabs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  return (
    <>
      <TopTabs
        className="mx-2"
        initialRouteName="tab_one"
        screenOptions={{
          tabBarStyle: { backgroundColor: "yellow" },
          swipeEnabled: false,
        }}
      />
    </>
  );
}
