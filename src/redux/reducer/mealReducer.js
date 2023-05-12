const initialState = {
    meals: [],
    oneMeal: []
}

export default function MealsReducer( state = initialState, action) {
    switch (action.type) {
        case 'GET_MEALS':
            return {...state, meals: action.payload}
        // case 'GET_ONE_MEAL':
        //     return {...state, oneMeal: action.payload}
        default:
            return state

    }
}