import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseIngredients, chooseMeals} from "../../redux/action/mealAction";
import header from "./header.scss"

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isChosen = useSelector(state => state.isChosen)

    const handleClick = () => {
        if (isChosen === 'meals') {
            dispatch(chooseIngredients())
        } else {
            dispatch(chooseMeals())
        }
    }


    return (
        <header>
            <div>
                LOGO
            </div>
            <nav>
                <button onClick={handleClick}>
                    {isChosen === 'meals' ? 'Ingredients' : 'Meals'}
                </button>
            </nav>
        </header>
    );
};

export default Header;