import { createSlice } from "@reduxjs/toolkit"

const IndicatorSlice = createSlice({
    name: "Indicator",
    initialState: {indicatorState: 1},
    reducers: {
        setIndicatorState: (state, { payload }) => {
            state.indicatorState = payload
        }
    }
});

export const IndicatorReducer = IndicatorSlice.reducer;
export const {setIndicatorState } = IndicatorSlice.actions;
