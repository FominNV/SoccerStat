import {
  IMatchState,
  MatchAction,
  MatchActionTypes,
  MATCHES_SHOW_MODE,
} from "./types"

const initialState: IMatchState = {
  matches: {
    showCount: 8,
    all: [],
    filtered: [],
    showMode: MATCHES_SHOW_MODE.ALL,
  },
  pages: {
    all: {
      total: 0,
      current: 1,
    },
    filtered: {
      total: 0,
      current: 1,
    },
  },
  errorTariff: false,
}

export function matchReducer(
  state: IMatchState = initialState,
  action: MatchAction
): IMatchState {
  switch (action.type) {
    case MatchActionTypes.GET_MATCHES: {
      /* count pages */
      const countPages = Math.ceil(
        action.payload.totalResult / state.matches.showCount
      )

      return {
        ...state,
        matches: {
          ...state.matches,
          all: action.payload.matches,
          showMode: action.payload.showMode,
        },
        pages: {
          ...state.pages,
          all: {
            ...state.pages.all,
            total: countPages,
          },
        },
        errorTariff: action.payload.errorTariff,
      }
    }

    case MatchActionTypes.SET_MATCH_CURRENT_PAGE:
      if (state.matches.showMode === MATCHES_SHOW_MODE.FILTERED) {
        return {
          ...state,
          pages: {
            ...state.pages,
            filtered: {
              ...state.pages.filtered,
              current: action.payload.currentPage,
            },
          },
        }
      } else {
        return {
          ...state,
          pages: {
            ...state.pages,
            all: {
              ...state.pages.all,
              current: action.payload.currentPage,
            },
          },
        }
      }

    case MatchActionTypes.FILTER_MATCHES: {
      /* count pages */
      const countPages = Math.ceil(
        action.payload.totalResult / state.matches.showCount
      )

      return {
        ...state,
        matches: {
          ...state.matches,
          filtered: action.payload.filteredMatches,
          showMode: action.payload.showMode,
        },
        pages: {
          ...state.pages,
          filtered: { total: countPages, current: 1 },
        },
      }
    }

    case MatchActionTypes.SET_MATCHES_SHOW_MODE: {
      return {
        ...state,
        matches: { ...state.matches, showMode: action.payload.showMode },
      }
    }

    default:
      return state
  }
}
