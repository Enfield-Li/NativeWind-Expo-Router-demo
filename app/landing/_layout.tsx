import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { loginLogoDataUrl } from "../../media/imgDataUrl";

type Props = {};

function _layout(props: Props) {
  return (
    <>
      <View className="items-center mt-16">
        <SvgXml xml={loginLogoDataUrl} width={"45%"} />
      </View>

      <Slot />

      {/* tailwind button */}
      <TouchableOpacity className="w-11/12 items-center bg-blue-500 py-3 rounded-lg mx-auto mb-6">
        <Text className="text-white ">go</Text>
      </TouchableOpacity>
    </>
  );
}

export default _layout;

const styles = StyleSheet.create({});
