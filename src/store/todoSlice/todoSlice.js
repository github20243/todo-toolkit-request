import { createSlice } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, patchRequest } from "../request/request";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRequest.fulfilled, (state, { payload }) => {
        state.todos = payload;
      })
      .addCase(postRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postRequest.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteRequest.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(patchRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(patchRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(patchRequest.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export default todoSlice
