import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useTeam } from "../../../stores/useTeam";
import useShowToast from "../../../hooks/useShowToast";

type Props = {};

function Spaces(props: Props) {
  const showToast = useShowToast();
  const { teamsForRender } = useTeam();
  const selectedTeam = teamsForRender.find((team) => team.isSelected);

  return (
    <View>
      <TouchableOpacity onPress={() => showToast()} className="flex-row px-6">
        <Icon size={18} name="md-grid-outline" color="gray" />
        <Text className="ml-4 text-gray-700">Everything</Text>
      </TouchableOpacity>

      <View className="mt-3"></View>

      {selectedTeam?.spaces.map((space) => (
        <TouchableOpacity className="flex-row items-center my-1" key={space.id}>
          {space.isOpen ? (
            <Icon size={11} name="caret-down" color="rgb(166, 166, 166)" />
          ) : (
            <Icon size={11} name="caret-forward" color="rgb(166, 166, 166)" />
          )}

          <View className="bg-gray-500 h-7 w-7 rounded-md ml-2 mr-3 justify-center">
            <Text className="text-white text-center">{space.name[0]}</Text>
          </View>

          <Text>{space.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Spaces;

const styles = StyleSheet.create({});
