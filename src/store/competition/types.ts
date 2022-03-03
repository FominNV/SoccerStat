interface ISeason {
  id: number
  startDate: Date
  endDate: Date
  currentMatchday: number
}

export interface ICompetition {
  id: number
  area: {
    id: number
    name: string
  }
  name: string
  code: null | number
  plan: string
  emblemUrl: string
  currentSeason: ISeason
  seasons: ISeason[]
  lastUpdated: Date
}

export interface ICompetitionState {
  competitions: {
    showCount: number
    all: ICompetition[] | []
    filtered: ICompetition[] | null
  }
  pages: {
    total: number
    current: number
  }
}

export enum CompetitionActionTypes {
  GET_COMPETITIONS = "GET_COMPETITIONS",
  SET_FILTERED_COMPETITION = "SET_FILTERED_COMPETITION",
  SET_COMPETITION_CURRENT_PAGE = "SET_COMPETITION_CURRENT_PAGE",
}

export enum COMPETITION_URLS {
  GET_COMPETITION_URL = "https://api.football-data.org/v2/competitions",
}

type GetCompetitionsAction = {
  type: CompetitionActionTypes.GET_COMPETITIONS
  payload: {
    competitions: ICompetition[]
    totalResult: number
  }
}

type SetFilteredCompetitionAction = {
  type: CompetitionActionTypes.SET_FILTERED_COMPETITION
  payload: { filteredCompetition: ICompetition[] | null }
}

type SetCompetitionCurrentPageAction = {
  type: CompetitionActionTypes.SET_COMPETITION_CURRENT_PAGE
  payload: { currentPage: number }
}

export type CompetitionAction =
  | GetCompetitionsAction
  | SetFilteredCompetitionAction
  | SetCompetitionCurrentPageAction
