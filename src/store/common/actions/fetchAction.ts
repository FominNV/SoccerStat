import { IData, IFetchOptions } from "../types"
import { FETCH_METHOD } from "../types"

const fetchOptions: IFetchOptions = {
  method: FETCH_METHOD.GET,
  headers: {
    "X-Auth-Token": process.env.API_KEY as string,
  },
}

interface IState {
  data: any
  error: undefined | Error
  error403: boolean
}

const fetchAction = async (url: string) => {
  const state: IState = {
    data: [],
    error: undefined,
    error403: false,
  }

  try {
    const response = await fetch(url, fetchOptions)

    if (response.status === 403) {
      state.error403 = true
    }

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    state.data = (await response.json()) as IData
  } catch (error) {
    state.error = error as Error
  }

  return state
}

export default fetchAction
