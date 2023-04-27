import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
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
      modalVisible={modalVisible}
      toggleVisiblity={toggleVisiblity}
    >
      <View className="absolute bg-white bottom-8 left-4 right-4 p-4 pb-8 rounded-xl">
        <Text>wat</Text>
      </View>
    </TransparentModal>
  );
}

export default SettingsModal;
