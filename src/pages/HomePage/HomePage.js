import React, {useEffect} from 'react';
import CustomSwiper from "../../components/Swiper/Swiper";
import {useDispatch, useSelector} from "react-redux";
import {getMeals} from "../../redux/action/mealAction";
import {Link} from "react-router-dom";
import SearchByFirstLetter from "../SearchPage/SearchByFirstLetter";
import IngredientPage from "../IngredientPage/IngredientPage";

const HomePage = () => {
    const dispatch = useDispatch()
    const meals = useSelector(state => state.meals)
    useEffect(() => {
        dispatch(getMeals())
    }, [dispatch])
    return (
        <div>
            <CustomSwiper/>
            {
                meals.map((el, idx) =>
                <div key={idx}>
                    <Link to={`meals/${el.idMeal}`}>
                        <h2>{el.strMeal}</h2>
                    </Link>
                </div>
                )
            }
        </div>
    );
};

export default HomePage;