import { StyleSheet, Text } from "react-native";
import LandingSwipeTab from "../../../components/landing/LandingSwipeTab";

type Props = {};

function a_one_place(props: Props) {
  return (
    <LandingSwipeTab imageSource={require("../../../media/first.png")}>
      <Text>One place for all your work.</Text>
      <Text>Tasks, Docs, Goals, and Chat - customizable</Text>
      <Text>to work for everyone.</Text>
    </LandingSwipeTab>
  );
}

export default a_one_place;

const styles = StyleSheet.create({
  top: {
    position: "absolute",
    top: 2,
  },
});
