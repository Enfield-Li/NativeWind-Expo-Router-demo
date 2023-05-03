import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../../../stores/useAuth";
import { Stack } from "expo-router";

type Props = {};

const todo = (props: Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Stack.Screen
        options={{
          title: "To Do",
        }}
      />

      <Text>todo</Text>
      <Text>🛠🛠🛠 under construction 🛠🛠🛠</Text>
    </View>
  );
};

export default todo;

const styles = StyleSheet.create({});
