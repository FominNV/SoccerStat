import { ICompetition } from "../competition/types"
import { IMatch } from "../match/types"
import { ITeam } from "../team/types"

export interface IData {
  data: ICompetition[] | ITeam[] | IMatch
  error: Error
  error403: boolean
}

export enum FETCH_METHOD {
  GET = "GET",
}

export interface IFetchOptions {
  method: FETCH_METHOD
  headers: {
    "X-Auth-Token": string
  }
}

export interface ICommonState {
  loading: boolean
  currentTheme: THEME_MODE
}

export enum CommonActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_CURRENT_THEME = "SET_CURRENT_THEME",
}

export enum THEME_MODE {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

type SetLoadingAction = {
  type: CommonActionTypes.SET_LOADING
  payload: { loading: boolean }
}

type SetCurrentThemeAction = {
  type: CommonActionTypes.SET_CURRENT_THEME
  payload: { currentTheme: THEME_MODE }
}

export type CommonAction = SetLoadingAction | SetCurrentThemeAction
