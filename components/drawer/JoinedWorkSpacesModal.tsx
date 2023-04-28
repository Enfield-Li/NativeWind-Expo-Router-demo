import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTeam } from "../../stores/useTeam";
import TransparentModal from "../TransparentModal";

type Props = {
  modalVisible: boolean;
  toggleVisiblity: () => void;
};

function JoinedWorkSpacesModal({ modalVisible, toggleVisiblity }: Props) {
  const { teamsForRender, selectTeam } = useTeam();

  function onSelectTeam(teamId: number) {
    toggleVisiblity();
    selectTeam(teamId);
  }

  return (
    <TransparentModal
      title={
        <View className="flex-row items-center">
          <Text className="font-bold mr-1">Workspaces</Text>
          <Text className="text-slate-500 text-sm">(5)</Text>
        </View>
      }
      modalVisible={modalVisible}
      toggleVisiblity={toggleVisiblity}
    >
      {teamsForRender.map((team) => (
        <TouchableOpacity
          key={team.id}
          onPress={() => onSelectTeam(team.id!)}
          className="flex-row mt-3 bg-gray-300 w-full h-12 rounded-md items-center justify-between px-3"
        >
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
            <View className="rounded-full w-7 h-7 border-purple-500 border items-center justify-center">
              <View className="rounded-full w-4 h-4 bg-purple-500" />
            </View>
          ) : (
            <View className="rounded-full w-7 h-7 border-gray-400 border" />
          )}
        </TouchableOpacity>
      ))}
    </TransparentModal>
  );
}

export default JoinedWorkSpacesModal;
