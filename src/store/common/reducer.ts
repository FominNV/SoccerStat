import {
  CommonAction,
  CommonActionTypes,
  ICommonState,
  THEME_MODE,
} from "./types"

const initialState: ICommonState = {
  currentTheme: THEME_MODE.LIGHT,
  loading: false,
}

export function commonReducer(
  state: ICommonState = initialState,
  action: CommonAction
): ICommonState {
  switch (action.type) {
    case CommonActionTypes.SET_CURRENT_THEME:
      return {
        ...state,
        currentTheme: action.payload.currentTheme,
      }

    case CommonActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      }

    default:
      return state
  }
}
