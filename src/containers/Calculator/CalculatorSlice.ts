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
        },
        deleteValue: (state) => {
            let newState: string = ''
            if(state.value.length > 0) {
                newState = state.value.slice(0, -1);
                state.value = newState;
            }
        },
    }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {press, deleteValue} = CalculatorSlice.actions;
