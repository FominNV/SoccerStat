import { Dispatch } from "redux"
import fetchAction from "../common/actions/fetchAction"
import {
  CompetitionAction,
  CompetitionActionTypes,
  COMPETITION_URLS,
  ICompetition,
} from "./types"

export const getCompetitions =
  () => async (dispatch: Dispatch<CompetitionAction>) => {
    const url = COMPETITION_URLS.GET_COMPETITION_URL

    const { data, error } = await fetchAction(url)

    if (error) {
      throw new Error("Can't get competitions: " + error)
    }

    dispatch({
      type: CompetitionActionTypes.GET_COMPETITIONS,
      payload: {
        competitions: data.competitions,
        totalResult: data.count,
      },
    })
  }

export const setFilteredCompetition =
  (competitions: ICompetition[] | null) =>
  (dispatch: Dispatch<CompetitionAction>) => {
    dispatch({
      type: CompetitionActionTypes.SET_FILTERED_COMPETITION,
      payload: {
        filteredCompetition: competitions,
      },
    })
  }

export const setCompetitionCurrentPage =
  (num: number) => (dispatch: Dispatch<CompetitionAction>) => {
    dispatch({
      type: CompetitionActionTypes.SET_COMPETITION_CURRENT_PAGE,
      payload: {
        currentPage: num,
      },
    })
  }
