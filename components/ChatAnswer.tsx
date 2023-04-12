import { StyleSheet, View, Text } from "react-native";
import { ChatMessage } from "../types";

type Props = { answer: ChatMessage };

function ChatAnswer({ answer }: Props) {
  return (
    <View className="flex-1 ml-3 my-2">
      <View className="w-2/3 bg-slate-600 p-2 px-4 rounded-3xl rounded-bl-none">
        <Text className="text-white">{answer.content}</Text>
      </View>
    </View>
  );
}

export default ChatAnswer;

const styles = StyleSheet.create({});
