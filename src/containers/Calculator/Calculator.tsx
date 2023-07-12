import React from 'react';
import {RootState} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {calcValue, checkValue, deleteValue, press, resetValue} from "./CalculatorSlice";
import './Calculator.css';
const Calculator = () => {
    const dispatch = useDispatch();
    const calculatorValue = useSelector((state: RootState) => state.calculator.value);

    return (
        <div className="calculator">
            <div className="calculator-window">{calculatorValue}</div>
            <div className="calculator-nums-wrap">
                <div className="calculator-nums" onClick={() => dispatch(press('7'))}>7</div>
                <div className="calculator-nums" onClick={() => dispatch(press('8'))}>8</div>
                <div className="calculator-nums" onClick={() => dispatch(press('9'))}>9</div>
                <div className="calculator-nums calculator-math" onClick={() => dispatch(calcValue('%'))}>%</div>
                <div className="calculator-nums" onClick={() => dispatch(press('4'))}>4</div>
                <div className="calculator-nums" onClick={() => dispatch(press('5'))}>5</div>
                <div className="calculator-nums" onClick={() => dispatch(press('6'))}>6</div>
                <div className="calculator-nums calculator-math" onClick={() => dispatch(calcValue('*'))}>*</div>
                <div className="calculator-nums" onClick={() => dispatch(press('1'))}>1</div>
                <div className="calculator-nums" onClick={() => dispatch(press('2'))}>2</div>
                <div className="calculator-nums" onClick={() => dispatch(press('3'))}>3</div>
                <div className="calculator-nums calculator-math" onClick={() => dispatch(calcValue('-'))}>-</div>
                <div className="calculator-nums-empty">
                    <div className="calculator-delete" onClick={() => dispatch(deleteValue())}>{"<"}</div>
                    <div className="calculator-ac" onClick={() => dispatch(resetValue())}>{"AC"}</div>
                </div>
                <div className="calculator-nums" onClick={() => dispatch(press('0'))}>0</div>
                <div className="calculator-nums-empty">
                    <div className="calculator-check" onClick={() => dispatch(checkValue())}>E</div>
                </div>
                <div className="calculator-nums calculator-math" onClick={() => dispatch(calcValue('+'))}>+</div>
            </div>
        </div>
    );
};


export default Calculator;