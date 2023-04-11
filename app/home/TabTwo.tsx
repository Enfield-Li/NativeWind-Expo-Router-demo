import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

function TabTwo(props: Props) {
  return (
    <SafeAreaView>
      <View>
        {/* <Stack.Screen options={{ headerShown: false }} /> */}

        <View className="flex-1">
          <Text>Open up App.js to start wat on your app!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TabTwo;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
