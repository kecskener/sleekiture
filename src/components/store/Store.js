import {configureStore} from '@reduxjs/toolkit';
import { IndicatorReducer } from './IndicatorSlice';

const store = configureStore({
    reducer: {Indicator: IndicatorReducer}
});

export default store;