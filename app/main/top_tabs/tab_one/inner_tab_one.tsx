import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../../../stores/useAuth";

type Props = {};

const inner_tab = (props: Props) => {
  const authState = useAuth();
  console.log(authState.user);
  
  return (
    <View>
      <Text>inner_tab</Text>
    </View>
  );
};

export default inner_tab;

const styles = StyleSheet.create({});
