import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const SearchByFirstLetter = () => {
    const [letter, setLetter] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams().letter

    useEffect(() => {
        axios(`https://themealdb.com/api/json/v1/1/search.php?f=${params}`)
            .then(({data}) => {
                setLetter(data.meals)
                // console.log(data.meals, 'letter')
            })
            .finally(() => {
                setLoading(false)
            })
    },[params])
    return (
        <div>
            {
            loading ? <h3>Loading...</h3> :
                <div className={'container'}>
                    <div className={'row'}>
                        {
                            letter?.map(el =>
                                <div key={el.id} className={'col-3'}>
                                    <div className="box">
                                        <Link to={`/meals/${el.idMeal}`}>
                                            <img src={el.strMealThumb} alt=""/>
                                            <div className="home-description">
                                                <h3>{el.strMeal}</h3>
                                                <p>{el.strCategory}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchByFirstLetter;