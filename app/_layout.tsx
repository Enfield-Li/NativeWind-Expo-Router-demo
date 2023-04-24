import { Drawer } from "../utils/Drawer";
import DrawerContent from "../components/drawer/DrawerContent";
import { Navigator, Slot, Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

export default function RootLayout() {
  return (
    <>
      <ToastProvider>
        <Stack screenOptions={{}} />

        {/* <Slot /> */}
      </ToastProvider>
    </>
  );
}
