import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Entypo";
import { TopTabs } from "../../../utils/TopTabs";

type Props = {};

function _layout(props: Props) {
  return (
    <TopTabs
      tabBarPosition="bottom"
      className=""
      screenOptions={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="dot-single" color={focused ? "black" : "gray"} />
        ),
        tabBarShowLabel: false,
        animationEnabled: true,
        tabBarIndicatorStyle: { width: 0 },
        tabBarStyle: {
          width: 60,
          shadowColor: "white",
          alignSelf: "center",
        },

        // tabBarIndicatorStyle: {
        //   borderColor: "white",
        //   borderBottomColor: "white",
        //   borderWidth: 0,
        // },
        // tabBarItemStyle: {
        //   //   width: 30,
        //   //   height: 30,
        // },
        // tabBarIconStyle: { borderColor: "white" },
        // tabBarLabelStyle: { borderColor: "white" },
        // tabBarIndicatorContainerStyle: { borderColor: "white" },
        // tabBarContentContainerStyle: { borderColor: "white" },
        // style
      }}
    />
  );
}

export default _layout;

const styles = StyleSheet.create({});
