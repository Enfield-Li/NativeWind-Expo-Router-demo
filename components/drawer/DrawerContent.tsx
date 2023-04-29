import { Link, useNavigation, usePathname, useRouter } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TeamAndSettings from "./teamAndSetting/TeamAndSettings";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import HomeIcon from "react-native-vector-icons/SimpleLineIcons";
import BellIcon from "react-native-vector-icons/Feather";
import useShowToast from "../../hooks/useShowToast";
import useNavigate from "../../hooks/useNavigate";

type Props = {};

const DrawerContent = (props: Props) => {
  const pathname = usePathname();
  const navigate = useNavigate();
  const showToast = useShowToast();
  console.log(pathname);

  return (
    <SafeAreaView className="flex-1">
      <TeamAndSettings />

      <TouchableOpacity
        onPress={() => showToast("Not implemented")}
        className="bg-gray-300 rounded-md mx-2 h-9 flex-row items-center px-3 mt-2"
      >
        <Icon size={18} name="search" color="gray" />
        <Text className="ml-2 text-gray-500">Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (!pathname.includes("home")) {
            navigate("home");
          }
        }}
        className={`${
          pathname.includes("home") && "border-l-4 border-blue-600 bg-blue-200"
        } h-12 flex-row items-center px-5 mt-3`}
      >
        <HomeIcon size={18} name="home" color="black" />
        <Text className="ml-2 text-black font-semibold">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (!pathname.includes("notifications")) {
            navigate("notifications");
          }
        }}
        className={`${
          pathname.includes("notifications") &&
          "border-l-4 border-blue-600 bg-blue-200"
        } h-12 flex-row items-center px-5`}
      >
        <BellIcon size={18} name="bell" color="black" />
        <Text className="ml-2 text-black font-semibold">Notifications</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DrawerContent;
