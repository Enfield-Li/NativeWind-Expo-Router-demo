import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={(props) => ({
          headerShown: props.route.name !== "home" ? true : false,
        })}
      />
    </>
  );
}
