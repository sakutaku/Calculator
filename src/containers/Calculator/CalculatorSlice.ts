import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
    value: string;
    checked: boolean;
}

const initialState: CalculatorState = {
    value: '',
    checked: false,
};

const password = '3322';

export const CalculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        press: (state, action: PayloadAction<string>) => {
            state.value += action.payload;

            if(state.value.length > 4) {
                alert('Stop entering, only 4 numbers!');
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
        checkValue: (state) => {
            if(state.value === password) {
                document.body.style.backgroundColor = 'green';
                alert('Access Granted!');

            } else {
                document.body.style.backgroundColor = 'red';
                alert('Access Denied!');
            }
        }
    }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {press, deleteValue, checkValue} = CalculatorSlice.actions;
