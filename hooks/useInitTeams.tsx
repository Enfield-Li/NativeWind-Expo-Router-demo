import React, { useEffect } from "react";
import { useTeam } from "../stores/useTeam";
import { shareLinkDataUrl } from "../media/imgDataUrl";

type Props = {};

export default function useInitTeams() {
  const { initTeamState } = useTeam();

  useEffect(() => {
    initTeamState({
      teamActivity: {
        teamId: 1,
        folderIds: [],
        listId: null,
        spaceId: null,
        defaultStatusCategoryId: 1,
      },
      teams: [
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
      ],
    });
  }, []);
}
