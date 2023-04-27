import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  modalVisible: boolean;
  requireFullModal?: boolean;
  title: string | JSX.Element;
  toggleVisiblity: () => void;
  children: React.ReactNode;
};

function TransparentModal({
  title,
  children,
  modalVisible,
  requireFullModal,
  toggleVisiblity,
}: Props) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      visible={modalVisible}
      onRequestClose={toggleVisiblity}
      presentationStyle="overFullScreen"
    >
      <View className="flex-1 bg-[#000000b5]">
        <TouchableWithoutFeedback onPress={toggleVisiblity}>
          <View className="absolute top-0 bottom-0 right-0 left-0 z-[-1]" />
        </TouchableWithoutFeedback>

        <View
          className={`absolute bg-white bottom-8 left-4 right-4 p-4 pb-8 rounded-xl ${
            requireFullModal && "top-8"
          }`}
        >
          <View className="flex-row justify-between items-center mb-2">
            {/* Title */}
            {typeof title === "string" ? (
              <Text className="font-bold mr-1">{title}</Text>
            ) : (
              <View>{title}</View>
            )}

            {/* close button */}
            <TouchableOpacity onPress={toggleVisiblity}>
              <Icon size={25} name="close" />
            </TouchableOpacity>
          </View>

          {children}
        </View>
      </View>
    </Modal>
  );
}

export default TransparentModal;

const styles = StyleSheet.create({});
