import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./reducers/statusSlice";
import gameReducer from "./reducers/gameSlice";
import scoresReducer from "./reducers/scoresSlice";

export default configureStore({
  reducer: {
    status: statusReducer,
    game: gameReducer,
    scores: scoresReducer,
  },
});
