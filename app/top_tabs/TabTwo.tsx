import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

function TabTwo(props: Props) {
  return (
    <View className="h-full justify-center items-center">
      <Stack.Screen options={{ headerShown: false }} />

      <Text>tabtwo page</Text>
      <Text>🛠🛠🛠 under construction 🛠🛠🛠</Text>
    </View>
  );
}

export default TabTwo;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
