import { createSlice } from '@reduxjs/toolkit';
import mails from '../../../mails.json';

const initialState = {
	mails,
};

export const mailsSlice = createSlice({
	name: 'mails',
	initialState,
	reducers: {
		updateMail: (state, action) => {
			const { id } = action.payload;
			state.mails = state.mails.map((mail) => {
				if (mail.id === id) {
					return { ...mail };
				}
				return mail;
			});
		},

		resetMails: () => initialState,
	},
	extraReducers: {},
});

export const getUnreadMails = (state) =>
	(state.mails.mails || []).filter((mail) => !mail.read);
export const getAllMails = (state) => state.mails.mails || [];
export const getTrashMails = (state) =>
	(state.mails.mails || []).filter((mail) => mail.status === 'trash');
export const getOpenMails = (state) =>
	(state.mails.mails || []).filter((mail) => mail.read);
export const getInterestedMails = (state) =>
	(state.mails.mails || []).filter((mail) => mail.status === 'interested');
export const getNegotiatingMails = (state) =>
	(state.mails.mails || []).filter((mail) => mail.status === 'not-interested');
export const getConvertedMails = (state) =>
	(state.mails.mails || []).filter((mail) => mail.status === 'converted');
export const getFollowupMails = (state) =>
	(state.mails.mails || []).filter((mail) => mail.status === 'followup');
export const getNotInterestedMails = (state) =>
	(state.mails.mails || []).filter((mail) => mail.status === 'not-interested');

export const { updateMail, resetMails } = mailsSlice.actions;

export default mailsSlice.reducer;
