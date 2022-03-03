import { Dispatch } from "redux"
import fetchAction from "../common/actions/fetchAction"
import { ITeam, TeamAction, TeamActionTypes, TEAM_URLS } from "./types"

export const getTeams = () => async (dispatch: Dispatch<TeamAction>) => {
  const url = TEAM_URLS.GET_TEAMS_URL

  const { data, error } = await fetchAction(url)

  if (error) {
    throw new Error("Can't get teams: " + error)
  }

  dispatch({
    type: TeamActionTypes.GET_TEAMS,
    payload: {
      teams: data.teams,
      totalResult: data.count,
      loading: false,
    },
  })
}

export const setFilteredTeam =
  (teams: ITeam[] | null) => (dispatch: Dispatch<TeamAction>) => {
    dispatch({
      type: TeamActionTypes.SET_FILTERED_TEAM,
      payload: {
        filteredTeam: teams,
      },
    })
  }

export const setTeamCurrentPage =
  (num: number) => (dispatch: Dispatch<TeamAction>) => {
    dispatch({
      type: TeamActionTypes.SET_TEAM_CURRENT_PAGE,
      payload: {
        currentPage: num,
      },
    })
  }
