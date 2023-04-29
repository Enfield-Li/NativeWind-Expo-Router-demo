import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../../../stores/useAuth";
import { Stack } from "expo-router";

type Props = {};

function done(props: Props) {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Done",
        }}
      />

      <Text>inner_tab</Text>
    </View>
  );
}

export default done;

const styles = StyleSheet.create({});
