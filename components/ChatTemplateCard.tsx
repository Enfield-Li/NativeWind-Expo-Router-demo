import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TemplateQuestion } from "../types";

type Props = { question: TemplateQuestion };

export default function ChatTemplateCard({ question }: Props) {
  return (
    <View className="px-3 py-2 my-1">
      {/* Title */}
      <View className="flex-row mb-3">
        <Ionicons
          name="settings-outline"
          style={{ fontSize: 20 }}
          color="rgb(104, 188, 203)"
        />

        <Text className="text-white ml-2">{question.title}</Text>
      </View>

      {/* Content */}
      <View className="p-3 bg-gray-600 rounded-xl justify-between flex-row">
        <Text className="text-gray-400">{question.content}</Text>
        <Ionicons
          color="white"
          name="arrow-forward"
          style={{ fontSize: 20, color: "rgb(19, 221, 142)" }}
        />
      </View>
    </View>
  );
}
