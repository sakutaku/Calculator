import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
    value: string;
}

const initialState: CalculatorState = {
    value: '',
};

export const CalculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        press: (state, action: PayloadAction<string>) => {
            state.value += action.payload;
            if(state.value.length > 4) {
                alert('stop');
                state.value = '';
                return;
            }
        }
    }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {press} = CalculatorSlice.actions;
