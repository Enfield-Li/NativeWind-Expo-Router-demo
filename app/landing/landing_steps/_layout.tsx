import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TopTabs } from "../../../utils/TopTabs";

type Props = {};

function _layout(props: Props) {
  return (
    <>
      <TopTabs
        className="mx-2"
        initialRouteName="tab_one"
        screenOptions={{
          tabBarStyle: { backgroundColor: "yellow" },
        }}
      />
    </>
  );
}

export default _layout;

const styles = StyleSheet.create({});
