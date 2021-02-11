import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../features/reducers/statusSlice";
import gameReducer from "../features/reducers/gameSlice";
import scoresReducer from "../features/reducers/scoresSlice";

export default configureStore({
  reducer: {
    status: statusReducer,
    game: gameReducer,
    scores: scoresReducer,
  },
});
