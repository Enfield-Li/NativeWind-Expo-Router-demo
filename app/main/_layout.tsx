import { Stack } from "expo-router";
import DrawerContent from "../../components/drawer/DrawerContent";
import { Drawer } from "../../utils/Drawer";

export default function RootLayout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Drawer
        drawerContent={({ descriptors, navigation, state }) => (
          <DrawerContent />
        )}
      />
    </>
  );
}
