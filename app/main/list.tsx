import { useSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { InitListParam } from "../../types";

type Props = {};

function list(props: Props) {
  const params = useSearchParams<InitListParam>();

  return (
    <View>
      <Text>list</Text>
    </View>
  );
}

export default list;

const styles = StyleSheet.create({});
