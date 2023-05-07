import React from "react";
import { motion } from "framer-motion";
import "./content.scss";

const Content = () => {

    const hero = {
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
        <motion.div variants={hero} className="content">
            <div className="content__left">
                <p className="content__left--heading"><span id="emphasize">BUY</span> and sell furniture, quick and easy</p>
                <p className="content__left--sub">we offer good value for great price.</p>
                <button className="content__left--button">Lets buy!</button>
            </div>
            <div className="content__right">
                <div className="content__right--circle">
                    <div className="content__right--circle_furniture"></div>
                </div>
            </div>
        </motion.div>
    );
}

export default Content;