import { configureStore } from '@reduxjs/toolkit';

import mailsReducer from './slices/mails';
import uiReducer from './slices/ui';

export const store = configureStore({
	reducer: {
		mails: mailsReducer,
		ui: uiReducer,
	},
	devTools: true,
});
