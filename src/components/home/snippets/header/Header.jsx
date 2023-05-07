import React from "react";
import { useDispatch } from "react-redux";
import { setIndicatorState } from "../../../store/IndicatorSlice";
import {motion} from 'framer-motion';
import "./header.scss";

const Header = () => {

    const dispatch = useDispatch();

    const onClick = (id) => {
        dispatch(setIndicatorState(id));
    }

    const title = {
        initial: { y: -20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <motion.div variants={title} className="header">
            <h1 onClick={() => onClick(1)} className="header__logo">Sleeki<p id="highlight">Ture</p></h1>
            <div className="header__navbar">
                <h1 onClick={() => onClick(2)} className="header__navbar--item">buy</h1>
                <h1 onClick={() => onClick(3)} className="header__navbar--item">contact</h1>
                <h1 onClick={() => onClick(4)} className="header__navbar--item">for resellers</h1>
            </div>
        </motion.div>
    );
}

export default Header;