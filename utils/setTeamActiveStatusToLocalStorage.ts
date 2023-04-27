import AsyncStorage from "@react-native-async-storage/async-storage";
import { TeamActiveStatus } from "../types";
import { TEAM_ACTIVITY } from "./constant";

export function storeTeamActiveStatusToLocalStorage(
  teamId: number | undefined,
  teamActiveStatus: TeamActiveStatus
) {
  AsyncStorage.setItem(
    `${TEAM_ACTIVITY}_${teamId}`,
    JSON.stringify(teamActiveStatus)
  );
}

export function storeAccessTokenToLocalStorage(
  key: string,
  accessToken: string
) {
  AsyncStorage.setItem(key, accessToken);
}
