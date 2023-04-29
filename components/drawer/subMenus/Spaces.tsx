import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {};

function Spaces(props: Props) {
  return (
    <View>
      <Icon size={18} name="md-grid-outline" color="black" />

      <Text>Spaces</Text>
    </View>
  );
}

export default Spaces;

const styles = StyleSheet.create({});
