import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTeam } from "../../stores/useTeam";
import TransparentModal from "../TransparentModal";

type Props = {
  modalVisible: boolean;
  toggleVisiblity: () => void;
};

function SettingsModal({ modalVisible, toggleVisiblity }: Props) {
  const { teamsForRender, selectTeam } = useTeam();

  return (
    <TransparentModal
      title="Settings"
      requireFullModal
      modalVisible={modalVisible}
      toggleVisiblity={toggleVisiblity}
    >
      <SafeAreaView className="absolute bg-white bottom-10 left-4 right-4 top-10 rounded-xl h-full">
        <Text>underconstruction</Text>
      </SafeAreaView>
    </TransparentModal>
  );
}

export default SettingsModal;
