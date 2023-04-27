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
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import JoinedWorkSpacesModal from "./JoinedWorkSpacesModal";
import { Space } from "../../types";
import { useAuth } from "../../stores/useAuth";
import { useTeam } from "../../stores/useTeam";
import Icon from "react-native-vector-icons/Entypo";
import SettingsIcon from "react-native-vector-icons/Feather";
import SettingsModal from "./SettingsModal";

type Props = {};

const DrawerContent = (props: Props) => {
  const { user } = useAuth();
  const { teamsForRender } = useTeam();
  const [teamModalVisible, setTeamModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const selectedTeam = teamsForRender.find((team) => team.isSelected);

  function toggleTeamModalVisiblity() {
    setTeamModalVisible(!teamModalVisible);
  }

  function toggleSettingsModalVisiblity() {
    setSettingsModalVisible(!settingsModalVisible);
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-between items-center w-full px-3">
        {/* user */}
        <TouchableWithoutFeedback onPress={() => setTeamModalVisible(true)}>
          <View className="flex-1 mr-5 flex-row items-center text-white font-bold rounded-full h-100 w-100">
            {/* avatar */}
            <View
              style={{ backgroundColor: user?.color }}
              className="rounded-full w-10 h-10 items-center justify-center mr-2"
            >
              <Text className="text-white font-semibold">
                {user?.username[0].toUpperCase()}
              </Text>
            </View>

            {/* space name */}
            <View className="flex-1">
              <View className="flex-row">
                <Text className="text-md font-semibold">
                  {selectedTeam?.name}
                </Text>
                <Icon
                  size={16}
                  name="chevron-small-down"
                  color="rgb(38, 38, 38)"
                />
              </View>
              {/* username */}
              <Text className="font-light text-xs">Show Modal</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        {/* Settings */}
        <TouchableOpacity onPress={toggleSettingsModalVisiblity}>
          <SettingsIcon size={20} name="settings" color="black" />
        </TouchableOpacity>
        <SettingsModal
          modalVisible={settingsModalVisible}
          toggleVisiblity={toggleSettingsModalVisiblity}
        />
      </View>

      <JoinedWorkSpacesModal
        modalVisible={teamModalVisible}
        toggleVisiblity={toggleTeamModalVisiblity}
      />

      <Button title="click" onPress={() => console.log("clicked")} />
      <Link href="main">main</Link>
    </SafeAreaView>
  );
};

export default DrawerContent;
