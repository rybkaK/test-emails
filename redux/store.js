import { configureStore } from '@reduxjs/toolkit';

import mailsReducer from './slices/mails';

export const store = configureStore({
	reducer: {
		mails: mailsReducer,
	},
	devTools: true,
});
