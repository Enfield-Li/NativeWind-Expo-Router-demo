import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useAuth } from "../stores/useAuth";
import { ACCESS_TOKEN } from "../utils/constant";
import { refreshUserToken } from "../utils/networkCalls";
import axios from "axios";

export default function App() {
  const authState = useAuth();

  useEffect(() => {
    async function get() {
      // http://10.0.2.2:3000
      const res = await axios.get("http://localhost:8099/test");
      console.log(res.data);
    }

    get();

    let intervalId: NodeJS.Timer;

    async function checkAuthStatus() {
      const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);

      if (accessToken) {
        refreshUserToken(authState);

        intervalId = setInterval(() => {
          refreshUserToken(authState);
        }, 1790000); // 29 min and 50 sec
      } else if (!accessToken) {
      }
    }

    checkAuthStatus();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {!authState.user ? <Redirect href="landing" /> : <Redirect href="main" />}
    </>
  );
}

const styles = StyleSheet.create({});
