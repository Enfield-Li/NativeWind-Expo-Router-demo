import { usePathname } from "expo-router";
import { Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import ExclamationIcon from "react-native-vector-icons/AntDesign";
import HomeIcon from "react-native-vector-icons/SimpleLineIcons";
import useNavigate from "../../hooks/useNavigate";
import useShowToast from "../../hooks/useShowToast";
import TeamAndSettings from "./teamAndSetting/TeamAndSettings";
import { useState } from "react";
import { produce } from "immer";
import Favorites from "./subMenus/Favorites";
import Spaces from "./subMenus/Spaces";
import Dashboards from "./subMenus/Dashboards";
import Docs from "./subMenus/Docs";

type Props = {};
type MenuItem = { name: string; isOpen: boolean };

const DrawerContent = (props: Props) => {
  const pathname = usePathname();
  const navigate = useNavigate();
  const showToast = useShowToast();

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { name: "Favorites", isOpen: true },
    { name: "Spaces", isOpen: false },
    { name: "Dashboards", isOpen: false },
    { name: "Docs", isOpen: false },
  ]);

  function onSelectMenuItem(name: string) {
    setMenuItems(
      produce(menuItems, (draftState) => {
        draftState.forEach(
          (menuItem) =>
            menuItem.name === name && (menuItem.isOpen = !menuItem.isOpen)
        );
      })
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <TeamAndSettings />

      <ScrollView>
        <TouchableOpacity
          onPress={() => showToast("Not implemented")}
          className="bg-gray-300 rounded-md mx-2 h-9 flex-row items-center px-3 mt-2"
        >
          <Icon size={18} name="search" color="gray" />
          <Text className="ml-2 text-gray-500">Search</Text>
        </TouchableOpacity>

        <View className="mt-1" />

        {/* Home */}
        <TouchableOpacity
          onPress={() => {
            if (!pathname.includes("home")) {
              navigate("home");
            }
          }}
          className={`${
            pathname.includes("home") &&
            "border-l-4 border-blue-600 bg-blue-200"
          } h-12 flex-row items-center px-5 mt-3`}
        >
          <HomeIcon size={18} name="home" color="black" />
          <Text className="ml-2 text-black font-semibold">Home</Text>
        </TouchableOpacity>

        {/* Notifications */}
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
          <Icon size={18} name="bell" color="black" />
          <Text className="ml-2 text-black font-semibold">Notifications</Text>
        </TouchableOpacity>

        <View className="mt-1" />

        {menuItems.map((menuItem) => (
          <>
            <TouchableOpacity
              onPress={() => onSelectMenuItem(menuItem.name)}
              className={`${
                menuItem.isOpen && "bg-gray-300"
              } p-3 flex-row justify-between items-center px-4 border-t border-slate-300`}
            >
              <Text className="text-gray-600">{menuItem.name}</Text>

              {menuItem.isOpen ? (
                <Icon size={15} name="chevron-down" color="gray" />
              ) : (
                <Icon size={15} name="chevron-right" color="gray" />
              )}
            </TouchableOpacity>

            {menuItem.isOpen && (
              <View className="px-5 py-2">
                {menuItem.name === "Favorites" ? (
                  <Favorites />
                ) : menuItem.name === "Spaces" ? (
                  <Spaces />
                ) : menuItem.name === "Dashboards" ? (
                  <Dashboards />
                ) : (
                  <Docs />
                )}
              </View>
            )}
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;
