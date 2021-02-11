import { combineReducers } from "redux";

import statusReducer from "./features/reducers/statusSlice";
import gameReducer from "./features/reducers/gameSlice";
import scoresReducer from "./features/reducers/scoresSlice";

const rootReducer = combineReducers({
  status: statusReducer,
  game: gameReducer,
  scores: scoresReducer,
});

export default rootReducer;
