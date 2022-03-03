import { Dispatch } from "redux"
import fetchAction from "../common/actions/fetchAction"
import { COMPETITION_URLS } from "../competition/types"
import { TEAM_URLS } from "../team/types"
import {
  GET_MATCHES_MODE,
  IMatch,
  MatchAction,
  MatchActionTypes,
  MATCHES_SHOW_MODE,
} from "./types"

export const getMatches =
  (id: number, mode: GET_MATCHES_MODE) =>
  async (dispatch: Dispatch<MatchAction>) => {
    let url = ""

    // load competition matches
    if (mode === GET_MATCHES_MODE.COMPETITION_MODE) {
      url = COMPETITION_URLS.GET_COMPETITION_URL + `/${id}/matches`
    }
    // load team mastches
    else if (mode === GET_MATCHES_MODE.TEAM_MODE) {
      url = TEAM_URLS.GET_TEAMS_URL + `/${id}/matches`
    }

    const { data, error, error403 } = await fetchAction(url)

    if (error) {
      console.log("Can't get matches: " + error.message)
    }

    dispatch({
      type: MatchActionTypes.GET_MATCHES,
      payload: {
        matches: data.matches ? data.matches : [],
        totalResult: data.count,
        errorTariff: error403,
        showMode: MATCHES_SHOW_MODE.ALL,
      },
    })
  }

export const setMatchCurrentPage =
  (num: number) => (dispatch: Dispatch<MatchAction>) => {
    dispatch({
      type: MatchActionTypes.SET_MATCH_CURRENT_PAGE,
      payload: {
        currentPage: num,
      },
    })
  }

export const filterMatches =
  (matches: IMatch[], from: Date, to: Date) =>
  async (dispatch: Dispatch<MatchAction>) => {
    const filteredMatches = matches.filter((match: IMatch) => {
      if (new Date(match.utcDate) >= from && new Date(match.utcDate) <= to) {
        return match
      }
    })

    dispatch({
      type: MatchActionTypes.FILTER_MATCHES,
      payload: {
        filteredMatches,
        totalResult: filteredMatches.length,
        showMode: MATCHES_SHOW_MODE.FILTERED,
      },
    })
  }

export const setMatchesShowMode =
  (mode: MATCHES_SHOW_MODE) => async (dispatch: Dispatch<MatchAction>) => {
    dispatch({
      type: MatchActionTypes.SET_MATCHES_SHOW_MODE,
      payload: {
        showMode: mode,
      },
    })
  }
