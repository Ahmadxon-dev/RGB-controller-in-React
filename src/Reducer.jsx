import React from "react";

export default function Reducer(state, action) {
    const limitRgb = num  => num < 0 ? 0 : num > 255 ? 255 : num;
    const step = 50;

    switch (action.type) {
        case "INCREMENT_R":
            return{
                ...state,
                r: limitRgb(state.r + step)
            };
        case "DECREMENT_R":
            return {
                ...state,
                r:limitRgb(state.r -step)
            };
        case "INCREMENT_G":
            return{
                ...state,
                g: limitRgb(state.g + step)
            };
        case "DECREMENT_G":
            return {
                ...state,
                g:limitRgb(state.g -step)
            };
        case "INCREMENT_B":
            return{
                ...state,
                b: limitRgb(state.b + step)
            };
        case "DECREMENT_B":
            return {
                ...state,
                b:limitRgb(state.b -step)
            };
        default:
            return state
    }
}
