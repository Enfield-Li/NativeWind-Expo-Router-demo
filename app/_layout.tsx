import { Stack } from "expo-router";
import { Drawer } from "../Drawer";

export default function RootLayout() {
  return (
    <>
      {/* <Stack
        screenOptions={(props) => ({
          headerShown: props.route.name !== "home" ? true : false,
        })}
      /> */}
      <Drawer>
        <Drawer.Screen
          name="home" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "home",
          }}
        />
        <Drawer.Screen
          name="subscribe" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "subscribe",
            title: "subscribe",
          }}
        />
      </Drawer>
    </>
  );
}
