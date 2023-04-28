import { Link } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TeamAndSettings from "./teamAndSetting/TeamAndSettings";

type Props = {};

const DrawerContent = (props: Props) => {
  return (
    <SafeAreaView className="flex-1">
      <TeamAndSettings />

      <Button title="click" onPress={() => console.log("clicked")} />
      <Link href="main">main</Link>
    </SafeAreaView>
  );
};

export default DrawerContent;
