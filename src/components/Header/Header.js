import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState('')
    return (
        <div className={'container'}>
            <Link to={'/'}>Logo</Link>
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
    );
};

export default Header;