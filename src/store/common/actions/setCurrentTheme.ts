import { Dispatch } from "redux"
import { CommonAction, CommonActionTypes, THEME_MODE } from "../types"

export const setCurrentTheme =
  (theme: THEME_MODE) => (dispatch: Dispatch<CommonAction>) => {
    dispatch({
      type: CommonActionTypes.SET_CURRENT_THEME,
      payload: { currentTheme: theme },
    })
  }
