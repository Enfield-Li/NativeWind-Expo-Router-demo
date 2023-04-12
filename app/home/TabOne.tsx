import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatTemplateCard from "../../components/ChatTemplateCard";
import { TemplateQuestion } from "../../types";

function TabOne() {
  const templateQuestions: TemplateQuestion[] = [
    { id: 1, title: "语言翻译", content: "【有志者，事竟成】用英文怎么说" },
    { id: 2, title: "难题破解", content: "请帮我列出双色球的预测方法？" },
    { id: 3, title: "宇宙奥义", content: "外星人真实存在吗？" },
    { id: 4, title: "历史谜题", content: "三星堆文化来自何方？" },
    {
      id: 5,
      title: "学习工作",
      content: "若xy-x+y=0且xy>0，则1/x-1/y的值是多少？",
    },
    { id: 6, title: "美食烹饪", content: "怎么做辣椒炒肉" },
    {
      id: 7,
      title: "养生健康",
      content: "身高180cm，体重180斤，那么BMI值是多少？",
    },
  ];

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerRight: () => (
            <Ionicons
              color="white"
              style={{ fontSize: 20 }}
              name="settings-outline"
            />
          ),
          headerLeft: () => (
            <View className="flex-row justify-center items-center bg-yellow-200 rounded-full p-1 px-2">
              <Text className="bg-black w-5 h-5 rounded-full mr-1 text-white text-center font-semibold text-5">
                +
              </Text>
              <Text className="font-bold">订阅</Text>
            </View>
          ),
          headerTitleAlign: "center",
          headerTitle: "AI聊天",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "rgb(19, 22, 32)",
          },
          headerShadowVisible: false,
        }}
      />

      <View className="flex-1 bg-main justify-between">
        <ScrollView>
          {templateQuestions.map((question) => (
            <View key={question.id}>
              <ChatTemplateCard question={question} />
            </View>
          ))}
        </ScrollView>

        <View className="h-20 bg-main"></View>
      </View>
    </View>
  );
}

export default TabOne;

const styles = StyleSheet.create({});
