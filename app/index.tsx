import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <Redirect href="home" />
    </>
  );
}

const styles = StyleSheet.create({});
