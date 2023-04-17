import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TopTabs } from "../../utils/TopTabs";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

function _layout(props: Props) {
  return (
    <>
      <Text>clickup</Text>
      <Slot />
      <Button title="go" />
    </>
  );
}

export default _layout;

const styles = StyleSheet.create({});
