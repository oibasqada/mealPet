import axios from 'axios'



export const getMeals = () => {
    return (dispatch) => {
        axios('https://themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => {
                dispatch({type: 'GET_MEALS', payload: data.meals})
            })
    }
}

// export const getOneMeal = () => {
//     return(dispatch) => {
//         axios(`https://themealdb.com/api/json/v1/1/lookup.php?i=52771`)
//             .then(({data}) => {
//                 dispatch({type: 'GET_ONE_MEAL', payload: data})
//             })
//     }
// }
