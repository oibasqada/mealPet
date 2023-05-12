import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import '../../App.css'

const SearchPage = () => {
    const [meals, setMeals] = useState({})
    const params = useParams().name
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios(`https://themealdb.com/api/json/v1/1/search.php?s=${params}`)
            .then(({data}) => {
                setMeals(data.meals)
                console.log(data.meals, 'data.search2')
            })
            .finally(() => {
                setLoading(false)
            })
    },[params])
    return (
        <div className={'container'}>
            {
                meals === null ? <h4>not found</h4> :
                    <div>
                        {loading ? <h2>Wait pls...</h2> :
                        <div className={'row'}>
                            {
                                meals.map((meal, idx) =>
                                <div key={idx} className={'col-4'}>
                                    <div className="box">
                                        <Link to={`/meals/${meal.idMeal}`}>
                                            <img src={meal.strMealThumb} alt=""/>
                                            <div className="home-description">
                                                <h3>{meal.strMeal}</h3>
                                                <p>{meal.strCategory}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                        }
                    </div>
            }
        </div>
    );
};

export default SearchPage;