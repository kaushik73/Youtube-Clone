import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  //   ip : {'fdsf' , 'efwf'}
  //   iphone : {'dsfsd' , 'fdfds'}
  initialState: {
    searchSuggestions: {},
    searchText: "",
  },
  reducers: {
    cacheResults: (state, action) => {
      const stateKeys = Object.keys(state.searchSuggestions);
      // If the number of keys in the state exceeds 50, delete the oldest entry : LRU implementation
      if (stateKeys.length >= 50) {
        const oldestKey = stateKeys[0];
        delete state.searchSuggestions[oldestKey];
      }

      Object.assign(state.searchSuggestions, action.payload);
    },

    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearSearchSuggestions: (state, action) => {
      state.searchSuggestions = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults, setSearchText, clearSearchSuggestions } =
  searchSlice.actions;
