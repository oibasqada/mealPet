import axios from 'axios'
import {type} from "@testing-library/user-event/dist/type";





export const getMeals = () => {
    return (dispatch) => {
        axios('https://themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => {
                dispatch({type: 'GET_MEALS', payload: data.meals})
            })
    }
}

export const getIngredients = () => {
    return (dispatch) => {
        axios('https://themealdb.com/api/json/v1/1/list.php?i=list')
            .then(({data}) => {
                dispatch({type: 'GET_INGREDIENTS', payload: data.meals})
            })
    }
}

export const chooseIngredients = () => {
    return {type: 'INGREDIENT'}
}

export const chooseMeals = () => {
    return {type: 'MEALS'}
}