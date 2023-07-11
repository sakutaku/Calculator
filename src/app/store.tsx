import {configureStore} from "@reduxjs/toolkit";
import {calculatorReducer} from "../containers/Calculator/CalculatorSlice";

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
