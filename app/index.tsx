import { Redirect } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function App() {
  //   useEffect(() => {
  //     const storeData = async () => {
  //       try {
  //         await AsyncStorage.setItem("@storage_Key", "abc");
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };

  //     const getData = async () => {
  //       try {
  //         const value = await AsyncStorage.getItem("@storage_Key");
  //         if (value !== null) {
  //           console.log(value);
  //         }
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //     storeData();
  //     getData();
  //   }, []);

  return (
    <>
      <Redirect href="main" />
    </>
  );
}

const styles = StyleSheet.create({});
