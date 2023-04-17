import { Drawer } from "../utils/Drawer";
import DrawerContent from "../components/DrawerContent";

export default function RootLayout() {
  return (
    <>
      <Drawer
        drawerContent={({ descriptors, navigation, state }) => (
          <DrawerContent />
        )}
      />
    </>
  );
}
