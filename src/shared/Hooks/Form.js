import { useCallback, useReducer } from 'react';



const fromReducer = (state, action) => {
    switch (action.type) {
        case "Input_Change":
            let fromIsVaild = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    fromIsVaild = fromIsVaild && action.isValid;
                } else {
                    fromIsVaild = fromIsVaild && state.inputs[inputId].isValid
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: fromIsVaild
            };
        case "SetData":
            return {
                inputs: action.inputs,
                isValid: action.isValid
            }
        default:
            return state
    }
}

export const useForm = (initialInput, initialFormValiday) => {
    const [formState, dispatch] = useReducer(fromReducer, {
        inputs: initialInput,
        isValid: initialFormValiday
    });

    const InputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: "Input_Change", inputId: id, value: value, isValid: isValid })
    }, [dispatch]);

    // to set Data after loading from database
    const setFormData = useCallback((inputData, fromValidaty) => {
        dispatch({ type: "SetData", inputs: inputData, isValid: fromValidaty })
    }, []);

    return [formState, InputHandler, setFormData]
};