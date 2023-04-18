import { Stack, useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type Props = {};

export default function sign_in({}: Props) {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);

  const isEmailValid = input.includes("@");

  function goToNext() {
    if (isEmailValid) {
      navigation.navigate("auth/confirm_email");
    } else {
      setShowError(true);
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
              <Text
                className={`font-bold ${
                  isEmailValid ? "text-purple-500" : "text-gray-500"
                }`}
              >
                Next
              </Text>
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

        <Text
          className={`text-sm mt-2 ${
            !showError ? "text-gray-600" : "text-red-600"
          }`}
        >
          {!showError
            ? "We'll send you an email to confirm your address"
            : "Whoops! That's not a valid email."}
        </Text>
      </View>
    </View>
  );
}
