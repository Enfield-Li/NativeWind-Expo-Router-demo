import { Fragment } from "react";
import {
  Image,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { shareLinkDataUrl } from "../../media/imgDataUrl";
import { Team } from "../../types";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  toggleVisiblity: () => void;
};

function JoinedWorkSpaces({ toggleVisiblity }: Props) {
  const teams: Team[] = [
    {
      avatar: shareLinkDataUrl,
      color: "",
      id: 1,
      isSelected: true,
      isPrivate: true,
      name: "team1",
      members: [],
      spaces: [],
    },
    {
      avatar: "",
      color: "green",
      id: 2,
      isSelected: false,
      isPrivate: true,
      name: "team2",
      members: [],
      spaces: [],
    },
  ];

  return (
    <View className="flex-1 bg-[#000000b5]">
      <TouchableWithoutFeedback onPress={toggleVisiblity}>
        <View className="absolute top-0 bottom-0 right-0 left-0 z-[-1]" />
      </TouchableWithoutFeedback>

      <View className="absolute bg-white bottom-8 left-4 right-4 p-4 pb-6 rounded-xl">
        {/* Title */}
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center">
            <Text className="font-bold mr-1">Workspaces</Text>
            <Text className="text-slate-500 text-sm">(5)</Text>
          </View>

          {/* close button */}
          <Pressable onPress={toggleVisiblity}>
            <Icon size={25} name="close" />
          </Pressable>
        </View>

        {teams.map((team) => (
          <Fragment key={team.id}>
            <View className="flex-row mt-3 bg-gray-300 w-full h-12 rounded-md items-center justify-between px-3">
              <View className="flex-row items-center justify-center rounded-full overflow-hidden mr-2">
                <View className="flex-row items-center justify-center rounded-full overflow-hidden mr-2">
                  {team.avatar ? (
                    // avatar
                    <Image
                      source={{ uri: team.avatar }}
                      className="rounded-full w-8 h-8 border items-center justify-center"
                    />
                  ) : (
                    // no avatar
                    <View
                      style={{
                        backgroundColor: !team.avatar ? team.color : "",
                      }}
                      className="rounded-full w-8 h-8 items-center justify-center text-center"
                    >
                      <Text className="text-white">
                        {team.name[0].toUpperCase()}
                      </Text>
                    </View>
                  )}
                </View>

                {/* team name */}
                <Text className="text-purple-500">{team.name}</Text>
              </View>

              {/* select box */}
              {team.isSelected ? (
                <View className="rounded-full w-7 h-7 border-gray-400 border" />
              ) : (
                <View className="rounded-full w-7 h-7 border-purple-500 border items-center justify-center">
                  <View className="rounded-full w-4 h-4 bg-purple-500" />
                </View>
              )}
            </View>
          </Fragment>
        ))}
      </View>
    </View>
  );
}

export default JoinedWorkSpaces;
