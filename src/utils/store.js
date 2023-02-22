import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

import searchSuggestionSlice from "./searchSuggestionSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    Suggestion: searchSuggestionSlice,
  },
});

export default store;
