import DrawerContent from "../../components/DrawerContent";
import { Drawer } from "../../utils/Drawer";

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
