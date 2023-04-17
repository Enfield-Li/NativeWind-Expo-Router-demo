import { Stack, useNavigation } from "expo-router";
import { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatAnswer from "../../components/ChatAnswer";
import ChatQuestion from "../../components/ChatQuestion";
import ChatTemplateCard from "../../components/ChatTemplateCard";
import { templateQuestions } from "../../utils/constants";
import { ChatMessage } from "../../types";

function TabOne() {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleAddItem = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  function onSubmit() {
    if (input) {
      setChatMessages((prev) => [
        ...prev,
        { id: prev.length + 2, isQuestion: true, content: input },
      ]);
      setInput("");
      handleAddItem();

      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: prev.length + 2,
            isQuestion: false,
            content: "您的免费提问次数已用完，可订阅会员获取无限次提问次数",
          },
        ]);
      }, 100);
      Keyboard.dismiss();
    }
  }

  function submitTemplateChat(chatMessage: ChatMessage) {
    const { content, isQuestion } = chatMessage;

    setChatMessages((prev) => [
      ...prev,
      {
        content,
        isQuestion,
        id: prev.length + 2,
      },
    ]);
    handleAddItem();
  }

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerRight: () => (
            <View className="mr-3">
              <Ionicons
                color="white"
                style={{ fontSize: 20 }}
                name="settings-outline"
              />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              className="ml-3 flex-row justify-center items-center bg-yellow-200 rounded-full p-1 px-2"
              // @ts-ignore
              onPress={() => navigation.navigate("subscribe")}
            >
              <Text className="bg-black w-5 h-5 rounded-full mr-1 text-white text-center font-semibold text-5">
                +
              </Text>
              <Text className="font-bold">订阅</Text>
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerTitle: "AI聊天",
          headerTitleStyle: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          },
          headerStyle: { backgroundColor: "rgb(19, 22, 32)" },
          headerShadowVisible: false,
        }}
      />

      <View className="flex-1 bg-main justify-between">
        <ScrollView ref={scrollViewRef}>
          {templateQuestions.map((question, index) => (
            <View key={index}>
              <ChatTemplateCard
                templateQuestion={question}
                submitTemplateChat={submitTemplateChat}
              />
            </View>
          ))}

          {chatMessages.map((chatMessage, index) => (
            <View key={index}>
              {chatMessage.isQuestion ? (
                <ChatQuestion question={chatMessage} />
              ) : (
                <ChatAnswer answer={chatMessage} />
              )}
            </View>
          ))}
        </ScrollView>

        <View className="p-3 h-20 bg-main flex-row items-center justify-center rounded-t-3xl">
          <TextInput
            className="border-2 pl-5 w-72 h-12 text-white border-violet-500 border-solid rounded-full"
            value={input}
            onChangeText={setInput}
            placeholderTextColor="white"
            placeholder="输入你想问的..."
            onSubmitEditing={onSubmit}
          />

          <View className="flex-1 ml-3 bg-emerald-400 h-10 rounded-full items-center justify-center">
            <Ionicons
              color="white"
              name="paper-plane"
              onPress={onSubmit}
              style={{ fontSize: 20 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default TabOne;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    color: "#fff",
  },
});
