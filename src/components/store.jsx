import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const emfSlice = createSlice({
  name: "emf",
  initialState: {
    showBubbler: true,
    showVapourizer: false,
    show: false,
  },
  reducers: {
    setShowBubbler: (state, action) => {
      state.showBubbler = action.payload;
    },
    setShowVapourizer: (state, action) => {
      state.showVapourizer = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
  },
});

const appStore = configureStore({
  reducer: {
    emf: emfSlice.reducer,
  },
});

export default appStore;
export const { setShowBubbler, setShowVapourizer, setShow } = emfSlice.actions;
