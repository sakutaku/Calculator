import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CalculatorState {
    value: string;
    firstValue: number;
    secondValue: number;
    mathematics: string;
    checked: boolean;
}

const initialState: CalculatorState = {
    value: '',
    firstValue: 0,
    secondValue: 0,
    mathematics: '',
    checked: false,
};

export const CalculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        press: (state, action: PayloadAction<string>) => {
            state.value += action.payload;

            if(state.checked) {
                state.secondValue = Number(state.value);
            }
            // if(state.value.length > 4) {
            //     alert('Stop entering, only 4 numbers!');
            //     state.value = '';
            //     return;
            // }
        },
        deleteValue: (state) => {
            let newState: string = ''
            if(state.value.length > 0) {
                newState = state.value.slice(0, -1);
                state.value = newState;
            }

            // state.value = '';
            // state.firstValue = 0;
            // state.secondValue = 0;
            // state.checked = false;
            // state.mathematics = '';
        },
        checkValue: (state) => {
            if(state.mathematics === '%') {
                const result = state.firstValue / state.secondValue;
                state.value = result.toString();
            } else if(state.mathematics === '*') {
                const result = state.firstValue * state.secondValue;
                state.value = result.toString();
            } else if(state.mathematics === '-') {
                const result = state.firstValue - state.secondValue;
                state.value = result.toString();
            } else if(state.mathematics === '+') {
                const result = state.firstValue + state.secondValue;
                state.value = result.toString();
            }
        },
        calcValue: (state, action: PayloadAction<string>) => {
            state.checked = true;
            state.firstValue = Number(state.value);
            state.value = ''
            state.mathematics = action.payload;
        },
        resetValue: (state) => {
            state.value = '';
            state.firstValue = 0;
            state.secondValue = 0;
            state.checked = false;
            state.mathematics = '';
        }
    }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {
    press,
    deleteValue,
    checkValue,
    calcValue,
    resetValue
} = CalculatorSlice.actions;
