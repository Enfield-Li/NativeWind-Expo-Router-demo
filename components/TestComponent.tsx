import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

function TabThree(props: Props) {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <LinearGradient
        // Button Linear Gradient
        style={styles.button}
        colors={["rgba(41,68,136,1)", "rgba(19,22,31,1)"]}
      ></LinearGradient>
    </View>
  );
}

export default TabThree;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
});
