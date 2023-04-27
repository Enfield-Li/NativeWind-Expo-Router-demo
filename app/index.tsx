import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useAuth } from "../stores/useAuth";
import { ACCESS_TOKEN } from "../utils/constant";
import { refreshUserToken } from "../utils/networkCalls";
import useNavigate from "../hooks/useNavigate";
import useShowToast from "../hooks/useShowToast";
import useInterceptError from "../hooks/useInterceptError";
import {
  loadingCircleDataUrlLight,
  loginLogoDataUrl,
  logoDataUrl,
} from "../media/imgDataUrl";
import { SvgXml } from "react-native-svg";
import Loading from "../components/loading/Loading";
import useInitTeams from "../hooks/useInitTeams";

export default function App() {
  useInitTeams();
  const authState = useAuth();
  const navigate = useNavigate();
  useInterceptError();

  //   useEffect(() => {
  //     let intervalId: NodeJS.Timer;

  //     async function checkAuthStatus() {
  //       const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);

  //       if (accessToken) {
  //         refreshUserToken(authState, navigate);

  //         intervalId = setInterval(() => {
  //           refreshUserToken(authState, navigate);
  //         }, 1790000); // 29 min and 50 sec
  //       } else if (!accessToken) {
  //         navigate("landing");
  //       }
  //     }

  //     checkAuthStatus();

  //     return () => clearInterval(intervalId);
  //   }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen options={{ headerShown: false }} />

      {/* <Text>loading</Text> */}
      <Redirect href="main" />

      {/* <Loading /> */}
    </View>
  );
}
