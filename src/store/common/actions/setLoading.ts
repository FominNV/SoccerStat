import { Dispatch } from "redux"
import { CommonAction, CommonActionTypes } from "../types"

export const setLoading =
  (mode: boolean) => (dispatch: Dispatch<CommonAction>) => {
    dispatch({
      type: CommonActionTypes.SET_LOADING,
      payload: { loading: mode },
    })
  }
