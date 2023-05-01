import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FolderCategory } from "../../../../types";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTeam } from "../../../../stores/useTeam";
import Icon from "react-native-vector-icons/Feather";

type Props = { folder: FolderCategory };

function Folder({ folder }: Props) {
  const { updateOpenedFolder } = useTeam();

  return (
    <TouchableOpacity
      className="pl-2 py-2"
      key={"folder" + folder.id}
      onPress={() => updateOpenedFolder(folder.id)}
    >
      {folder.isOpen ? (
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons
              size={11}
              name="caret-down"
              color="rgb(166, 166, 166)"
              style={{ marginRight: 15 }}
            />

            <Ionicons
              size={20}
              name="folder-open-outline"
              color="rgb(166, 166, 166)"
              style={{ marginRight: 10 }}
            />
            <Text>{folder.name}</Text>
          </View>
          <TouchableOpacity className="" onPress={() => {}}>
            <Icon size={20} name="plus" color="rgb(125, 103, 240)" />
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-row items-center">
          <Ionicons
            size={11}
            name="caret-forward"
            color="rgb(166, 166, 166)"
            style={{ marginRight: 15 }}
          />
          <Ionicons
            size={20}
            name="folder"
            color="rgb(166, 166, 166)"
            style={{ marginRight: 10 }}
          />
          <Text>{folder.name}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default Folder;

const styles = StyleSheet.create({});
