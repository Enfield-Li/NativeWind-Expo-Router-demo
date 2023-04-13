import { Stack } from "expo-router";
import { Text, View } from "react-native";

type Props = {};

export default function subscribe({}: Props) {
  return (
    <View className="flex-1 justify-center items-center">
      <Stack.Screen
        options={{
          title: "订阅中心",
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "rgb(19, 22, 32)" },
        }}
      />

      <Text>subscribe page</Text>
      <Text>🛠🛠🛠 under construction 🛠🛠🛠</Text>
    </View>
  );
}
