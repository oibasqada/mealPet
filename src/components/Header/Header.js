import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseIngredients, chooseMeals} from "../../redux/action/mealAction";
import header from "./header.scss"

const Header = () => {
    const [value, setValue] = useState('')

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
            <div className={'container'}>
                <div className="header-wrapper">
                    <h2>
                        <Link to={'/'}>Vkusno&Tochka</Link>
                    </h2>
                    <div className="search">
                        <input
                            className={"search-input"}
                            id={'search'}
                            type="text"
                            onChange={(e) => {setValue(e.target.value)}}
                        />
                        <button className={"search-btn"}>
                            <Link to={`search/${value}`}>search</Link>
                        </button>
                    </div>
                    <div className="links">
                        <button
                            className={'btn'}
                            onClick={handleClick}
                        >
                            {isChosen === 'meals' ? 'Ingredients' : 'Meals'}
                        </button>
                        <Link className={'nav-link'} to={``}>Categories</Link>
                        <Link className={'nav-link'} to={``}>About</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;