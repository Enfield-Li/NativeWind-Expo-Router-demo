import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type Props = {
  modalVisible: boolean;
  toggleVisiblity: () => void;
  children: React.ReactNode;
};

function TransparentModal({ children, modalVisible, toggleVisiblity }: Props) {
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

        {children}
      </View>
    </Modal>
  );
}

export default TransparentModal;

const styles = StyleSheet.create({});
