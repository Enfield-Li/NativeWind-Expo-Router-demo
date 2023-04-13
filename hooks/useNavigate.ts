import { useNavigation } from "expo-router";
// import { StackNavigationProp } from "@react-navigation";
type Props = {};

export type RootStackParamList = {
  home: undefined;
  subscribe: undefined;
};

// type homeScreenProp = StackNavigationProp<RootStackParamList,>;

export default function useNavigate({}: Props) {
  return useNavigation();
}
