import React, {useMemo} from 'react';
import CustomSwiper from "../../components/Swiper/Swiper";
import {useSelector} from "react-redux";
import Header from "../../components/Header/Header";
import {Link, useParams} from "react-router-dom";

const HomePage = () => {
    const meals = useSelector(state => state.meals)
    const latestMeals = useSelector(state => state.latestMeals)
    const isChosen = useSelector(state => state.isChosen)
    const ingredients = useSelector(state => state.ingredients)

const arrayList = useMemo(() => {
    if (isChosen === 'meals'){
        return meals
    } else {
        return ingredients
    }
}, [isChosen, meals, ingredients, latestMeals])
    // console.log(latestMeals)

    return (
        <div className={"container"}>
            <div className="spacing">
                <div className="swiper-wrapper">
                    <h2 className={"section-name"}>Receips</h2>
                    <CustomSwiper/>
                </div>

                <div className="content-wrapper">
                    <h2 className={"section-name"}>Random meals</h2>
                    <div className="row">
                        {
                            arrayList?.map((res, idx) => (
                                <div key={idx} className={'col-4'}>
                                    <div className="box">
                                        <Link to={`/meals/${res.idMeal}`}>
                                            <img src={isChosen === 'meals' ? res.strMealThumb : `https://themealdb.com/images/ingredients/${res.strIngredient}.png`} alt="2"/>
                                            <div className="home-description">
                                                <h3>{isChosen === 'meals' ? res.strMeal : res.strIngredient}</h3>
                                                <p>{isChosen === 'meals' ? res.strCategory : ''}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className="content-wrapper">
                    <h2 className={"section-name"}>Latest meals</h2>
                    <div className="row">
                        {
                            latestMeals?.map((meal, idx) => (
                                <div key={idx} className={'col-4'}>
                                    <div className="box">
                                        <Link to={`/meals/${meal.idMeal}`}>
                                            <img src={isChosen === 'meals' ? meal.strMealThumb : `https://themealdb.com/images/ingredients/${meal.strIngredient}.png`} alt="2"/>
                                            <div className="home-description">
                                                <h3>{isChosen === 'meals' ? meal.strMeal : meal.strIngredient}</h3>
                                                <p>{isChosen === 'meals' ? meal.strCategory : ''}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomePage;