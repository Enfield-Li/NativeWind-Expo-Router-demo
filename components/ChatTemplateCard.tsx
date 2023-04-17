import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { templateAnswers } from "../utils/constants";
import { ChatMessage, TemplateChat } from "../types";

type Props = {
  templateQuestion: TemplateChat;
  submitTemplateChat(chatMessage: ChatMessage): void;
};

export default function ChatTemplateCard({
  templateQuestion,
  submitTemplateChat,
}: Props) {
  function onQuestionClick() {
    submitTemplateChat({ ...templateQuestion, isQuestion: true });

    const templateAnswer = templateAnswers.find(
      (answer) => answer.title === templateQuestion.title
    );
    if (!templateAnswer) {
      throw new Error("Cannot find the template answer!");
    }

    setTimeout(() => {
      submitTemplateChat({ ...templateAnswer, isQuestion: false });
    }, 1300);
  }

  return (
    <View className="px-3 py-2 my-1">
      {/* Title */}
      <View className="flex-row mb-3">
        <Ionicons
          name="settings-outline"
          style={{ fontSize: 20 }}
          color="rgb(104, 188, 203)"
        />

        <Text className="text-white ml-2">{templateQuestion.title}</Text>
      </View>

      {/* Content */}
      <TouchableOpacity
        className="p-3 bg-gray-600 rounded-xl justify-between flex-row"
        onPress={onQuestionClick}
      >
        <Text className="text-gray-400">{templateQuestion.content}</Text>
        <Ionicons
          color="white"
          name="arrow-forward"
          style={{ fontSize: 20, color: "rgb(19, 221, 142)" }}
        />
      </TouchableOpacity>
    </View>
  );
}
function getTemplateAnswerFromQuestion(question: TemplateChat) {}
