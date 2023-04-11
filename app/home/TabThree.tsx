import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

function TabThree(props: Props) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-400">
      {/* <View className="bg-orange-400">
        <Stack.Screen options={{ headerShown: false }} />

        <Text>TabThree</Text>
      </View> */}

      <View>
        <Text>Open up App.js to start wat on your app!</Text>
      </View>
    </SafeAreaView>
  );
}

export default TabThree;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
