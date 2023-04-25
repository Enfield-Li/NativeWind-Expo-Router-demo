import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

function comments(props: Props) {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Comments",
        }}
      />

      <Text>inner_tab</Text>
    </View>
  );
}

export default comments;

const styles = StyleSheet.create({});
