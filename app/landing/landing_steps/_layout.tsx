import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Entypo";
import { TopTabs } from "../../../utils/TopTabs";

type Props = {};

function _layout(props: Props) {
  return (
    <>
      <TopTabs
        className="p-20"
        tabBarPosition="bottom"
        screenOptions={{
          tabBarStyle: {
            marginBottom: 20,
            shadowColor: "white",
          },
          tabBarItemStyle: {
            margin: 0,
            padding: 0,
            width: 30,
            height: 30,
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons name="dot-single" color={focused ? "black" : "gray"} />
          ),
          tabBarShowLabel: false,
          animationEnabled: true,
        }}
      />
    </>
  );
}

export default _layout;

const styles = StyleSheet.create({});
