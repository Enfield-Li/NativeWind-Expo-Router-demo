import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-600">
      <Text className="red">
        If this text is centered and the bg is blue, then it's working!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
