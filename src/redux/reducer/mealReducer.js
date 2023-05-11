const initialState = {
    meals: [],
    ingredients: []
}

export default function MealsReducer( state = initialState, action ) {
    switch (action.type) {
        case 'GET_MEALS':
            return {...state, meals: action.payload}

        default:
            return state
    }
}