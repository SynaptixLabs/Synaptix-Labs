import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "./conversationSlice";
import articleReducer from "./articleSlice";

const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    article: articleReducer,
  },
});

export default store;