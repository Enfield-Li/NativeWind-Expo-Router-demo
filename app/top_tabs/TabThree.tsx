import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

function TabThree(props: Props) {
  return (
    <View className="h-full justify-center items-center">
      {/* <Stack.Screen options={{ headerShown: false }} />

      <Text>tabThree page</Text>
      <Text>🛠🛠🛠 under construction 🛠🛠🛠</Text> */}
    </View>
  );
}

export default TabThree;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
