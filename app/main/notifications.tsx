import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

function notifications(props: Props) {
  return (
    <>
      <Stack.Screen
        options={{ headerTitleAlign: "center", title: "Notifications" }}
      />

      <View className="flex-1 justify-center items-center">
        <Text>notifications</Text>
      </View>
    </>
  );
}

export default notifications;

const styles = StyleSheet.create({});
