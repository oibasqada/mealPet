import axios from 'axios'

export const getMeals = () => {
    return (dispatch) => {
        axios('https://themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => {
                dispatch({type: 'GET_MEALS', payload: data})
            })
    }
}