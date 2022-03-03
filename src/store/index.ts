import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension"
import { competitionReducer } from "./competition/reducer"
import { teamReducer } from "./team/reducer"
import { matchReducer } from "./match/reducer"
import { commonReducer } from "./common/reducer"

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
  competition: competitionReducer,
  team: teamReducer,
  match: matchReducer,
  common: commonReducer,
})

const composeEnhancers = composeWithDevTools({})

export const store = createStore(
  combinedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
)
