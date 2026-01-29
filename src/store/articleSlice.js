// features/article/articleSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryName: '',
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
   
    resetArticle: (state) => {
      state.categoryName = '';
    }
  },
});

export const { setCategoryName, resetArticle } = articleSlice.actions;

export default articleSlice.reducer;
