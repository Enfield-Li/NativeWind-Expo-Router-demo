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
  return (
    <View className="flex-1">
        
      <></>
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
