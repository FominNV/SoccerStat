export interface ITeam {
  id: number
  area: {
    id: number
    name: string
  }
  name: string
  shortName: string
  tla: string
  crestUrl: string
  address: string
  phone: string
  website: string
  email: string
  founded: number
  clubColors: string
  venue: string
  lastUpdated: string
}

export interface ITeamState {
  teams: {
    showCount: number
    all: ITeam[] | []
    filtered: ITeam[] | null
  }
  pages: {
    total: number
    current: number
  }
}

export enum TeamActionTypes {
  GET_TEAMS = "GET_TEAMS",
  SET_FILTERED_TEAM = "SET_FILTERED_TEAM",
  SET_TEAM_CURRENT_PAGE = "SET_TEAM_CURRENT_PAGE",
}

export enum TEAM_URLS {
  GET_TEAMS_URL = "https://api.football-data.org/v2/teams",
}

type GetTeamsAction = {
  type: TeamActionTypes.GET_TEAMS
  payload: {
    teams: ITeam[]
    totalResult: number
  }
}

type SetFilteredTeamAction = {
  type: TeamActionTypes.SET_FILTERED_TEAM
  payload: { filteredTeam: ITeam[] | null }
}

type SetTeamCurrentPageAction = {
  type: TeamActionTypes.SET_TEAM_CURRENT_PAGE
  payload: { currentPage: number }
}

export type TeamAction =
  | GetTeamsAction
  | SetFilteredTeamAction
  | SetTeamCurrentPageAction
