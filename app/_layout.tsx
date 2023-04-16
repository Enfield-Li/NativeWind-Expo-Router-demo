import { Drawer } from "../Drawer";
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
