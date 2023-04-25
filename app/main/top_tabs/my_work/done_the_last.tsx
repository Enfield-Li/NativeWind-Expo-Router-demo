import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../../../stores/useAuth";

type Props = {};

function done(props: Props) {
  return (
    <View>
      <Text>inner_tab</Text>
    </View>
  );
}

export default done;

const styles = StyleSheet.create({});
