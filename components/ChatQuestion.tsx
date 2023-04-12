import { Text, StyleSheet, View } from "react-native";
import { ChatMessage } from "../types";

type Props = { question: ChatMessage };

function ChatQuestion({ question }: Props) {
  return (
    <View className="items-end mr-3 my-2">
      <View className="w-2/3 bg-green-600 p-2 px-4 rounded-3xl rounded-br-none">
        <Text className="text-white">{question.content}</Text>
      </View>
    </View>
  );
}

export default ChatQuestion;

const styles = StyleSheet.create({});
