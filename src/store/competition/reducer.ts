import {
  CompetitionAction,
  CompetitionActionTypes,
  ICompetitionState,
} from "./types"

const initialState: ICompetitionState = {
  competitions: {
    showCount: 12,
    all: [],
    filtered: null,
  },
  pages: {
    total: 0,
    current: 1,
  },
}

export function competitionReducer(
  state: ICompetitionState = initialState,
  action: CompetitionAction
): ICompetitionState {
  switch (action.type) {
    case CompetitionActionTypes.GET_COMPETITIONS: {
      /* count pages */
      const countPages = Math.ceil(
        action.payload.totalResult / state.competitions.showCount
      )

      return {
        ...state,
        competitions: {
          ...state.competitions,
          all: action.payload.competitions,
        },
        pages: {
          ...state.pages,
          total: countPages,
        },
      }
    }

    case CompetitionActionTypes.SET_FILTERED_COMPETITION:
      return {
        ...state,
        competitions: {
          ...state.competitions,
          filtered: action.payload.filteredCompetition,
        },
      }

    case CompetitionActionTypes.SET_COMPETITION_CURRENT_PAGE:
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
