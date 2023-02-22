import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "Suggestion",
  initialState: {},

  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSuggestionSlice.actions;
export default searchSuggestionSlice.reducer;
