const initialState = {
    meals: [],
    ingredients: [],
    latestMeals: [],
    isChosen: 'meals'
}

export default function MealsReducer( state = initialState, action ) {
    switch (action.type) {
        case 'GET_MEALS':
            return {...state, meals: action.payload.slice(0,9)}
        case 'GET_INGREDIENTS':
            return {...state, ingredients: action.payload}
        case 'GET_LATEST_MEALS':
            return {...state, latestMeals: action.payload.slice(0,6)}
        case 'INGREDIENT':
            return {...state, isChosen: 'ingredient'}
        case 'MEALS':
            return {...state, isChosen: 'meals'}

        default:
            return state
    }
}