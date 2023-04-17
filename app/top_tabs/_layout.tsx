import { Stack, Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, Text, View } from "react-native";
import { TopTabs } from "../../utils/TopTabs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  return (
    <>
      <TopTabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "yellow" },
        }}
      />
    </>
  );
}
