import { Stack } from "expo-router";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import useNavigate from "../../../hooks/useNavigate";
import useShowToast from "../../../hooks/useShowToast";
import { TopTabs } from "../../../utils/TopTabs";

export default function AppLayout() {
  const navigate = useNavigate();
  const showToast = useShowToast();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerRight: ({}) => (
            <View className="flex-row mr-4">
              <Icon
                size={20}
                name="bell"
                color="rgb(28, 34, 37)"
                onPress={() => navigate("notifications")}
                style={{ marginRight: 20 }}
              />
              <Icon
                size={20}
                name="settings"
                color="rgb(28, 34, 37)"
                onPress={() => showToast("Not Implemented")}
              />
            </View>
          ),
        }}
      />

      <TopTabs
        initialRouteName="tab_one"
        style={{ backgroundColor: "white" }}
        screenOptions={{
          swipeEnabled: false,
          tabBarStyle: {
            height: 35,
            borderRadius: 10,
            marginHorizontal: 15,
            shadowColor: "white",
            backgroundColor: "rgb(245, 249, 252)",
          },
          tabBarContentContainerStyle: {
            margin: 0,
            padding: 0,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "blue",
          tabBarPressColor: "rgb(227, 227, 227)",
          tabBarIndicatorStyle: {
            height: 25,
            marginBottom: 5,
            borderRadius: 10,
            borderLeftWidth: 5,
            borderRightWidth: 5,
            backgroundColor: "rgb(245, 249, 252)",
            borderColor: "rgb(245, 249, 252)",
          },
        }}
      />
    </>
  );
}
