import { createSlice } from '@reduxjs/toolkit';

const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        isVisible: true,
        contactClickCount: 0,
    },
    reducers: {
        showConversation: (state) => {
            state.isVisible = true;
        },
        hideConversation: (state) => {
            state.isVisible = false;
        },
        incrementContactClick: (state) => {
            state.contactClickCount += 1;
        },
        incrementContactCleaer: (state) => {
            state.contactClickCount = 0;
        },
    },
});

export const { showConversation, hideConversation,incrementContactClick,incrementContactCleaer } = conversationSlice.actions;
export default conversationSlice.reducer;