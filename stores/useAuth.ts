import { create } from "zustand";
import { User, AuthenticationResponse, RegistrationResponse } from "../types";
import { ACCESS_TOKEN } from "../utils/constant";
import { deepCopy } from "../utils/deepCopy";
import { produce } from "immer";
import { immer } from "zustand/middleware/immer";

export type AuthStateType = {
  user: User | null;
  logoutUser: () => void;
  loginUser: (user: AuthenticationResponse) => void;
  updateTeamCount: (isAddTeam: boolean, teamId: number) => void;
  registerUser: (registrationResponse: RegistrationResponse) => void;
};

export const useAuth = create<AuthStateType>()(
  immer((set) => ({
    user: null,
    loginUser: (user) =>
      set((state) => {
        state.user = user;
      }),
    logoutUser: () =>
      set((state) => {
        state.user = null;
      }),
    registerUser: (registrationResponse) =>
      set((state) => {
        state.user = registrationResponse;

        // init team activity
        const teamActiveStatus = deepCopy(registrationResponse.initTeamUIState);
        teamActiveStatus["folderIds"] = [];

        // // store team activity status
        // storeTeamActiveStatusToLocalStorage(
        //   teamActiveStatus.teamId,
        //   teamActiveStatus
        // );

        // // store accessToken
        // storeAccessTokenToLocalStorage(
        //   ACCESS_TOKEN,
        //   registrationResponse.accessToken
        // );
      }),
    updateTeamCount: (isAddTeam, teamId) =>
      set((state) => {
        if (!state.user) {
          throw new Error("User is not initialized");
        }

        state.user.defaultTeamId = teamId;
        state.user.joinedTeamCount += isAddTeam ? 1 : -1;
      }),
  }))
);
