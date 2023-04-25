import { Stack, Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Icon";
import { Image, Text, View } from "react-native";
import { TopTabs } from "../../../utils/TopTabs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  return (
    <>
      <TopTabs
        initialRouteName="tab_one"
        screenOptions={{
          swipeEnabled: false,
          tabBarStyle: {
            height: 35,
            borderRadius: 10,
            marginHorizontal: 15,
            shadowColor: "white",
            backgroundColor: "rgb(227, 227, 227)",
          },
          tabBarContentContainerStyle: {
            margin: 0,
            padding: 0,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "blue",
          tabBarPressColor: "rgb(227, 227, 227)",
          tabBarIndicatorStyle: {
            height: 25,
            marginBottom: 5,
            borderRadius: 10,
            borderLeftWidth: 5,
            borderRightWidth: 5,
            backgroundColor: "white",
            borderColor: "rgb(227, 227, 227)",
          },
        }}
      />
    </>
  );
}
