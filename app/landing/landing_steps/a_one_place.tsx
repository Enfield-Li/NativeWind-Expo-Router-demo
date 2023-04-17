import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ClickUpLogoWords from "../../../assets/Click_up_logo_words";
// import { Svg } from "react-native-svg";
import { SvgXml } from "react-native-svg";
import { loginLogoDataUrl } from "../../../media/imgDataUrl";
type Props = {};

function a_one_place(props: Props) {
  return (
    <View className="justify-self-center items-center">
      <Text>a_one_place</Text>
      {/* <ClickUpLogoWords /> */}
      {/* <Svg> </Svg> */}
      <SvgXml xml={loginLogoDataUrl} width="100%" height="100%" />
    </View>
  );
}

export default a_one_place;

const styles = StyleSheet.create({});
