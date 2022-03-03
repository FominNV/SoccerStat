import { ITeamState, TeamAction, TeamActionTypes } from "./types"

const initialState: ITeamState = {
  teams: {
    showCount: 18,
    all: [],
    filtered: null,
  },
  pages: {
    total: 0,
    current: 1,
  },
}

export function teamReducer(
  state: ITeamState = initialState,
  action: TeamAction
): ITeamState {
  switch (action.type) {
    case TeamActionTypes.GET_TEAMS:
      /* count pages */
      const countPages = Math.ceil(
        action.payload.totalResult / state.teams.showCount
      )
      return {
        ...state,
        teams: {
          ...state.teams,
          all: action.payload.teams,
        },
        pages: {
          ...state.pages,
          total: countPages,
        },
      }

    case TeamActionTypes.SET_FILTERED_TEAM:
      return {
        ...state,
        teams: {
          ...state.teams,
          filtered: action.payload.filteredTeam,
        },
      }

    case TeamActionTypes.SET_TEAM_CURRENT_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          current: action.payload.currentPage,
        },
      }

    default:
      return state
  }
}
