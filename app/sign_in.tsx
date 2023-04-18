import { Stack, useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type Props = {};

export default function sign_in({}: Props) {
  const navigation = useNavigation();
  const [input, setInput] = useState("");

  function goToNext() {
    if (input.includes("@")) {
      navigation.navigate("my_test");
    }
  }

  return (
    <View className="flex-1 justify-center">
      <Stack.Screen
        options={{
          title: "Email",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackButtonMenuEnabled: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={goToNext}
              className="py-3 rounded-lg text-center"
            >
              <Text className="text-purple-500 font-bold">Next</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <View className="mx-4">
        <Text className="text-gray-600 text-lg">Your email address</Text>

        <TextInput
          value={input}
          className="text-xl"
          onSubmitEditing={goToNext}
          onChangeText={(text) => setInput(text)}
        />

        <Text className="text-gray-600 text-sm mt-2">
          We'll send you an email to confirm your address
        </Text>
      </View>
    </View>
  );
}
