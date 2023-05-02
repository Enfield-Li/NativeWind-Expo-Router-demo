import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListCategory } from "../../../../types";

type Props = { list: ListCategory };

function List({ list }: Props) {
  return (
    <View className="pl-6">
      <Text>List</Text>
    </View>
  );
}

export default List;

const styles = StyleSheet.create({});
