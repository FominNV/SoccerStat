interface IReferee {
  id: number
  name: string
  nationality: null | string
}

export interface IMatch {
  id: number
  season: {
    id: number
    startDate: Date
    endDate: Date
    currentMatchday: number
  }
  utcDate: string
  status: string
  matchday: number
  stage: string
  group: string
  lastUpdated: Date
  odds: {
    msg: string
  }
  score: {
    winner: string
    duration: string
    fullTime: {
      homeTeam: number
      awayTeam: number
    }
    halfTime: {
      homeTeam: number
      awayTeam: number
    }
    extraTime: {
      homeTeam: null | number
      awayTeam: null | number
    }
    penalties: {
      homeTeam: null | number
      awayTeam: null | number
    }
  }
  homeTeam: {
    id: number
    name: string
  }
  awayTeam: {
    id: number
    name: string
  }
  referees: IReferee[]
}

export interface IMatchState {
  matches: {
    showCount: number
    all: IMatch[] | []
    filtered: IMatch[] | []
    showMode: MATCHES_SHOW_MODE
  }
  pages: {
    all: {
      total: number
      current: number
    }
    filtered: {
      total: number
      current: number
    }
  }
  errorTariff: boolean
}

export enum MatchActionTypes {
  GET_MATCHES = "GET_MATCHES",
  SET_MATCH_CURRENT_PAGE = "SET_MATCH_CURRENT_PAGE",
  FILTER_MATCHES = "FILTER_MATCHES",
  SET_MATCHES_SHOW_MODE = "SET_MATCHES_SHOW_MODE",
}

export enum GET_MATCHES_MODE {
  COMPETITION_MODE = "COMPETITION_MODE",
  TEAM_MODE = "TEAM_MODE",
}

export enum MATCHES_SHOW_MODE {
  ALL = "ALL",
  FILTERED = "FILTERED",
}

type GetMatchesAction = {
  type: MatchActionTypes.GET_MATCHES
  payload: {
    matches: IMatch[]
    totalResult: number
    errorTariff: boolean
    showMode: MATCHES_SHOW_MODE
  }
}

type SetMatchCurrentPageAction = {
  type: MatchActionTypes.SET_MATCH_CURRENT_PAGE
  payload: { currentPage: number }
}

type FilterMatchesAction = {
  type: MatchActionTypes.FILTER_MATCHES
  payload: {
    filteredMatches: IMatch[]
    totalResult: number
    showMode: MATCHES_SHOW_MODE
  }
}

type SetMatchesShowModeAction = {
  type: MatchActionTypes.SET_MATCHES_SHOW_MODE
  payload: { showMode: MATCHES_SHOW_MODE }
}

export type MatchAction =
  | GetMatchesAction
  | SetMatchCurrentPageAction
  | SetMatchesShowModeAction
  | FilterMatchesAction
