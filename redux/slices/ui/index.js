import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchValue: '',
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		updateSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		resetUi: () => initialState,
	},
	extraReducers: {},
});

export const getSearchValue = (state) => state.ui.searchValue; // * need optimization

export const { updateSearchValue } = uiSlice.actions;

export default uiSlice.reducer;
