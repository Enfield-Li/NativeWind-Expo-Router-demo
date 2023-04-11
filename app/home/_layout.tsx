import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, Text } from "react-native";

function LogoTitle(props: any) {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function AppLayout() {
  const ROUTES = {
    TAB_ONE: "TabOne",
    TAB_TWO: "TabTwo",
    TAB_THREE: "TabThree",
  } as const;

  function produceTabTitle(name: string) {
    return name === ROUTES.TAB_ONE
      ? "百晓通"
      : name === ROUTES.TAB_TWO
      ? "创作者"
      : "私人助理";
  }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        // headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === ROUTES.TAB_ONE) {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === ROUTES.TAB_TWO) {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else {
            iconName = focused ? "ios-leaf-sharp" : "ios-leaf-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerRight: (props) => <LogoTitle {...props} />,
        headerLeft: (props) => <Text>wat</Text>,
        headerStyle: { backgroundColor: "green" },
        tabBarActiveTintColor: "tomato",
        title: `${produceTabTitle(route.name)}`,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 70,
          paddingTop: 5,
          paddingBottom: 10,
          backgroundColor: "rgb(10, 12, 25)",
        },
      })}
    />
  );
}
