import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {getOneMeal} from "../../redux/action/mealAction";
import './index.css'
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const MealPage = () => {
    const [showMore, setShowMore] = useState(false)
    const params = useParams()
    const [meal, setMeal] = useState([])
    // const dispatch = useDispatch()
    // const meal = useSelector(state => state.oneMeal.meals)
    // useEffect(() => {
    //     dispatch(getOneMeal())
    // }, [dispatch])
    useEffect(() => {
        axios(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.strMeal}`)
            .then(({data}) => {
                console.log(data.meals, 'data')
                setMeal(data.meals)
            })
    }, [params.strMeal])
    // console.log(params.strMeal, 'params91')
    // console.log(setMeal(meal), 'meal')
    return (
        <div className={'container'}>
            <div>
                {
                    meal.map((el, idx) =>
                        <div key={idx}>
                            <div className={'row'}>
                                <div className={'col-6'}>
                                    <div className={'box'}>
                                        <h1>{el.strMeal}</h1>
                                        <h2>Category: {el.strCategory}</h2>
                                        <h2>{el.strArea}</h2>
                                    </div>
                                </div>
                                <div className={'col-6'}>
                                    <div className={'box'}>
                                        <img src={el.strMealThumb} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className={'description'}>
                                <h3>Instructions:</h3>
                                <p>{el.strInstructions}</p>
                            </div>
                            <div className={'all-ingredients'}>
                                <h2>Ingredients:</h2>
                                <div className={'ingredients'}>
                                    <div>
                                        <img src={`https://themealdb.com/images/ingredients/${el.strIngredient1}-Small.png`} alt=""/>
                                        <h3>
                                            <Link to={`/ingredient/${el.strIngredient1}`}>{el.strIngredient1}</Link>
                                        </h3>
                                    </div>
                                    <div>
                                        <img src={`https://themealdb.com/images/ingredients/${el.strIngredient2}-Small.png`} alt=""/>
                                        <h3>
                                            <Link to={`/ingredient/${el.strIngredient2}`}>{el.strIngredient2}</Link>
                                        </h3>
                                    </div>
                                    <div>
                                        <img src={`https://themealdb.com/images/ingredients/${el.strIngredient3}-Small.png`} alt=""/>
                                        <h3>
                                            <Link to={`/ingredient/${el.strIngredient3}`}>{el.strIngredient3}</Link>
                                        </h3>
                                    </div>
                                    <div>
                                        <img src={`https://themealdb.com/images/ingredients/${el.strIngredient4}-Small.png`} alt=""/>
                                        <h3>
                                            <Link to={`/ingredient/${el.strIngredient4}`}>{el.strIngredient4}</Link>
                                        </h3>
                                    </div>
                                    <div>
                                        <img src={`https://themealdb.com/images/ingredients/${el.strIngredient5}-Small.png`} alt=""/>
                                        <h3>
                                            <Link to={`/ingredient/${el.strIngredient5}`}>{el.strIngredient5}</Link>
                                        </h3>
                                    </div>
                                </div>
                                {showMore &&
                                    <div className={'ingredients'}>
                                        {
                                            el.strIngredient6 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${el.strIngredient6}-Small.png`} alt=""/>
                                                <h3>
                                                    <Link to={`/ingredient/${el.strIngredient6}`}>{el.strIngredient6}</Link>
                                                </h3>
                                            </div>
                                        }
                                        {
                                            el.strIngredient7 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${el.strIngredient7}-Small.png`} alt=""/>
                                                <h3>
                                                    <Link to={`/ingredient/${el.strIngredient7}`}>{el.strIngredient7}</Link>
                                                </h3>
                                            </div>
                                        }
                                        {
                                            el.strIngredient8 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${el.strIngredient8}-Small.png`} alt=""/>
                                                <h3>
                                                    <Link to={`/ingredient/${el.strIngredient8}`}>{el.strIngredient8}</Link>
                                                </h3>
                                            </div>
                                        }
                                        {
                                            el.strIngredient9 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${el.strIngredient9}-Small.png`} alt=""/>
                                                <h3>
                                                    <Link to={`/ingredient/${el.strIngredient9}`}>{el.strIngredient9}</Link>
                                                </h3>
                                            </div>
                                        }
                                        {
                                            el.strIngredient10 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${el.strIngredient10}-Small.png`} alt=""/>
                                                <h3>
                                                    <Link to={`/ingredient/${el.strIngredient10}`}>{el.strIngredient10}</Link>
                                                </h3>
                                            </div>
                                        }
                                    </div>
                                }
                                <button onClick={() => setShowMore(!showMore)}>
                                    {showMore ? "Show less" : "Show more"}
                                </button>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MealPage;