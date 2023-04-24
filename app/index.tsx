import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../stores/useAuth";
import { ACCESS_TOKEN } from "../utils/constant";
import { refreshUserToken } from "../utils/networkCalls";
import useNavigate from "../hooks/useNavigate";

export default function App() {
  const authState = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    async function checkAuthStatus() {
      const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);

      if (accessToken) {
        refreshUserToken(authState, navigate);

        intervalId = setInterval(() => {
          refreshUserToken(authState, navigate);
        }, 1790000); // 29 min and 50 sec
      } else if (!accessToken) {
        navigate("landing");
      }
    }

    checkAuthStatus();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen options={{ headerShown: false }} />

      <Text>loading</Text>
    </View>
  );
}
