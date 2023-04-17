import { Link } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const DrawerContent = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  function toggleVisiblity() {
    setModalVisible(!modalVisible);
  }

  return (
    <View className="flex-1">
      <SafeAreaView className="justify-center items-center">
        <Modal
          transparent
          statusBarTranslucent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={toggleVisiblity}
          presentationStyle="overFullScreen"
        >
          <TouchableWithoutFeedback onPress={toggleVisiblity}>
            <View
              className="absolute top-0 bottom-0 right-0 left-0"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            />
          </TouchableWithoutFeedback>

          <View className="bg-white mx-6 items-center h-4/6 mt-56 shadow-2xl shadow-black rounded-xl">
            <Text>Hello World!</Text>
            <Pressable
              className="bg-blue-500 z-10 text-white font-bold py-2 px-4 rounded-full"
              onPress={toggleVisiblity}
            >
              <Text className="font-bold text-white text-center">
                Hide Modal
              </Text>
            </Pressable>
          </View>
        </Modal>

        <TouchableOpacity
          className="text-white font-bold py-2 px-4 rounded-full bg-slate-400"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-center">Show Modal</Text>
        </TouchableOpacity>

        <Button title="click" onPress={() => console.log("clicked")} />
        <Link href="top_tabs">top tabs</Link>
      </SafeAreaView>
    </View>
  );
};

export default DrawerContent;
