import { Link } from "expo-router";
import { Fragment, useState } from "react";
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
import JoinedWorkSpaces from "./JoinedWorkSpaces";
import { Space } from "../../types";

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
          <JoinedWorkSpaces toggleVisiblity={toggleVisiblity} />
        </Modal>

        <TouchableOpacity
          className="text-white font-bold py-2 px-4 rounded-full bg-slate-400"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-center">Show Modal</Text>
        </TouchableOpacity>

        <Button title="click" onPress={() => console.log("clicked")} />
        <Link href="main">main</Link>
      </SafeAreaView>
    </View>
  );
};

export default DrawerContent;
