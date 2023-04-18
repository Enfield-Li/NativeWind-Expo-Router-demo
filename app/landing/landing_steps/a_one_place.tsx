import { StyleSheet, Text, Image, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { loginLogoDataUrl } from "../../../media/imgDataUrl";
// import firstImg from "../../../media/first.png";

type Props = {};

function a_one_place(props: Props) {
  return (
    <View className="items-center justify-center flex-1">
      <Image
        resizeMode="contain"
        className="w-max h-60"
        source={require("../../../media/first.png")}
      />

      <Text className="text-2xl font-bold mt-10 tracking-wide">
        One place for all your work.
      </Text>

      <Text className="mt-6 text-xs tracking-wide">
        Tasks, Docs, Goals, and Chat - customizable
      </Text>
      <Text className="mt-1 text-xs tracking-wide">to work for everyone.</Text>
    </View>
  );
}

export default a_one_place;

const styles = StyleSheet.create({
  top: {
    position: "absolute",
    top: 2,
  },
});
