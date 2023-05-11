import React, {useMemo} from 'react';
import CustomSwiper from "../../components/Swiper/Swiper";
import {useSelector} from "react-redux";
import Header from "../../components/Header/Header";
import {useParams} from "react-router-dom";

const HomePage = () => {
    const meals = useSelector(state => state.meals)
    const isChosen = useSelector(state => state.isChosen)
    const ingredients = useSelector(state => state.ingredients)

const arrayList = useMemo(() => {
    if (isChosen === 'meals'){
        return meals
    } else {
        return ingredients
    }
}, [isChosen, meals, ingredients])
    console.log(meals)

    return (
        <div className={"container"}>
            <CustomSwiper/>

            <div className="row">
                {
                    arrayList?.map((meal, idx) => (
                        <div key={idx} className={'col-4'}>
                            <div className="box">
                                <img src={isChosen === 'meals' ? meal.strMealThumb : `https://themealdb.com/images/ingredients/${meal.strIngredient}.png`} alt="2"/>
                                <div className="home-description">
                                <h3>{isChosen === 'meals' ? meal.strMeal : meal.strIngredient}</h3>
                                    <p>{isChosen === 'meals' ? meals.strCategory : ''}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HomePage;