import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../../../stores/useAuth";
import { Stack } from "expo-router";

type Props = {};

const todo = (props: Props) => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "To Do",
        }}
      />

      <Text>inner_tab</Text>
    </View>
  );
};

export default todo;

const styles = StyleSheet.create({});
