import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseIngredients, chooseMeals} from "../../redux/action/mealAction";
import header from "./header.scss"

const Header = () => {
    const [value, setValue] = useState('')

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
            <div className={'container'}>
                <div className="header-wrapper">
                    <h2>
                        <Link to={'/'}>Vkusno&Tochka</Link>
                    </h2>
                    <div className="search">
                        <input id={'search'}
                               type="text"
                               onChange={(e) => {setValue(e.target.value)}}
                        />
                        <button>
                            <Link to={`search/${value}`}>search</Link>
                        </button>
                        <div>
                            <Link to={`firstLetter/a`}>a</Link>
                            <Link to={`firstLetter/b`}>b</Link>
                            <Link to={`firstLetter/c`}>c</Link>
                            <Link to={`firstLetter/d`}>d</Link>
                            <Link to={`firstLetter/e`}>e</Link>
                            <Link to={`firstLetter/f`}>f</Link>
                            <Link to={`firstLetter/g`}>g</Link>
                            <Link to={`firstLetter/l`}>h</Link>
                            <Link to={`firstLetter/m`}>i</Link>
                            <Link to={`firstLetter/m`}>j</Link>
                            <Link to={`firstLetter/m`}>k</Link>
                            <Link to={`firstLetter/m`}>l</Link>
                            <Link to={`firstLetter/m`}>m</Link>
                            <Link to={`firstLetter/m`}>n</Link>
                            <Link to={`firstLetter/m`}>o</Link>
                            <Link to={`firstLetter/m`}>p</Link>
                            <Link to={`firstLetter/m`}>q</Link>
                            <Link to={`firstLetter/m`}>r</Link>
                            <Link to={`firstLetter/m`}>s</Link>
                            <Link to={`firstLetter/m`}>t</Link>
                            <Link to={`firstLetter/m`}>u</Link>
                            <Link to={`firstLetter/m`}>w</Link>
                            <Link to={`firstLetter/m`}>x</Link>
                            <Link to={`firstLetter/m`}>y</Link>
                            <Link to={`firstLetter/m`}>z</Link>
                        </div>
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