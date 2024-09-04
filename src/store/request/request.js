import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getRequest = createAsyncThunk(
  "todo/getRequest",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://efc974846ba36c93.mokky.dev/todo"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postRequest = createAsyncThunk(
  "todo/postRequest",
  async (value, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(
        "https://efc974846ba36c93.mokky.dev/todo",
        value
      );
      dispatch(getRequest());
      toast.success("Задача добавлена успешна")
      return data;
    } catch (error) {
        toast.error("Ошибка при добавление")
      return rejectWithValue(error);
    }
  }
);

export const deleteRequest = createAsyncThunk(
  "todo/deleteRequest",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`${"https://efc974846ba36c93.mokky.dev/todo"}/${id}`);
      dispatch(getRequest());
      toast.warning("Успешна удалена")
    } catch (error) {
        toast.error("Ошибка при удалении")
      return rejectWithValue(error);
    }
  }
); 

export const patchRequest = createAsyncThunk(
    "todo/patchRequest",
    async (param, { rejectWithValue, dispatch }) => {
      try {
        const { id, ...rest } = param;
        await axios.patch(`https://efc974846ba36c93.mokky.dev/todo/${id}`, rest);
        dispatch(getRequest());
        toast.success("Данныйе успешно изменены")
      } catch (error) {
          toast.error("Ошибка при изминение данных")
        return rejectWithValue(error);
      }
    }
  );
  
