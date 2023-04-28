import { Stack } from "expo-router";
import DrawerContent from "../../components/drawer/DrawerContent";
import { Drawer } from "../../utils/Drawer";
import useInitTeams from "../../hooks/useInitTeams";

export default function RootLayout() {
  useInitTeams();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Drawer
        drawerContent={({ descriptors, navigation, state }) => (
          <DrawerContent />
        )}
        screenOptions={{
          drawerStyle: { width: "85%" },
        }}
      />
    </>
  );
}
