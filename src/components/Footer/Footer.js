import React from 'react';
import {Link} from "react-router-dom";
import "./index.scss"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={"by-letter"}>
                    <Link className={"letter-link"} to={`firstLetter/a`}>a /</Link>
                    <Link className={"letter-link"} to={`firstLetter/b`}>b /</Link>
                    <Link className={"letter-link"} to={`firstLetter/c`}>c /</Link>
                    <Link className={"letter-link"} to={`firstLetter/d`}>d /</Link>
                    <Link className={"letter-link"} to={`firstLetter/e`}>e /</Link>
                    <Link className={"letter-link"} to={`firstLetter/f`}>f /</Link>
                    <Link className={"letter-link"} to={`firstLetter/g`}>g /</Link>
                    <Link className={"letter-link"} to={`firstLetter/h`}>h /</Link>
                    <Link className={"letter-link"} to={`firstLetter/i`}>i /</Link>
                    <Link className={"letter-link"} to={`firstLetter/j`}>j /</Link>
                    <Link className={"letter-link"} to={`firstLetter/k`}>k /</Link>
                    <Link className={"letter-link"} to={`firstLetter/l`}>l /</Link>
                    <Link className={"letter-link"} to={`firstLetter/m`}>m /</Link>
                    <Link className={"letter-link"} to={`firstLetter/n`}>n /</Link>
                    <Link className={"letter-link"} to={`firstLetter/o`}>o /</Link>
                    <Link className={"letter-link"} to={`firstLetter/p`}>p /</Link>
                    <Link className={"letter-link"} to={`firstLetter/q`}>q /</Link>
                    <Link className={"letter-link"} to={`firstLetter/r`}>r /</Link>
                    <Link className={"letter-link"} to={`firstLetter/s`}>s /</Link>
                    <Link className={"letter-link"} to={`firstLetter/t`}>t /</Link>
                    <Link className={"letter-link"} to={`firstLetter/u`}>u /</Link>
                    <Link className={"letter-link"} to={`firstLetter/w`}>w /</Link>
                    <Link className={"letter-link"} to={`firstLetter/x`}>x /</Link>
                    <Link className={"letter-link"} to={`firstLetter/y`}>y /</Link>
                    <Link className={"letter-link"} to={`firstLetter/z`}>z </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;