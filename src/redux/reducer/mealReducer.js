const initialState = {
    meals: [],
    ingredients: [],
    isChosen: 'meals'
}

export default function MealsReducer( state = initialState, action ) {
    switch (action.type) {
        case 'GET_MEALS':
            return {...state, meals: action.payload.slice(0,6)}
        case 'GET_INGREDIENTS':
            return {...state, ingredients: action.payload}
        case 'INGREDIENT':
            return {...state, isChosen: 'ingredient'}
        case 'MEALS':
            return {...state, isChosen: 'meals'}

        default:
            return state
    }
}