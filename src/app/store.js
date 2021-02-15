import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./reducers/statusSlice";
import playersReducer from "./reducers/playersSlice";
import scoresReducer from "./reducers/scoresSlice";

export default configureStore({
  reducer: {
    status: statusReducer,
    players: playersReducer,
    scores: scoresReducer,
  },
});
