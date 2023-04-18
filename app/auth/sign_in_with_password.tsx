import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type Props = {};

function sign_in_with_password(props: Props) {
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 items-center">
      <Stack.Screen
        options={{
          headerTitle: "Sign in",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackButtonMenuEnabled: true,
        }}
      />

      <View>
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          //   href="my_test"
          className="w-11/12 bg-purple-500 py-3 rounded-lg mx-auto mb-6 text-center"
        >
          <Text className="text-white">Get started</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-11/12 bg-purple-500 py-3 rounded-lg mx-auto mb-6 text-center">
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default sign_in_with_password;

const styles = StyleSheet.create({});
