import { Drawer } from "../utils/Drawer";
import DrawerContent from "../components/DrawerContent";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Slot />
    </>
  );
}
