import React from "react";
import { motion } from "framer-motion";
import SideTransition from "../transitions/SideTransition";
import "./buy.scss";
const Buy = () => {

    const content = {
        animate: {
            transition: { staggerChildren: 0.5, delayChildren: 1 }
        },
    };

    const cards = {
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
        <motion.section exit={{SideTransition}} animate="animate" initial="initial">
            <motion.div variants={content} className="buy">
                <motion.h1 variants={title} className="buy__heading"><span id="big">Choose</span> from our collection</motion.h1>
                <motion.div variants={cards} className="buy__cards">
                    <div className="buy__cards--card">
                        <div id="first" className="buy__cards--card-picture" />
                    </div>
                    <div className="buy__cards--card">
                        <div id="second" className="buy__cards--card-picture" />
                    </div>
                    <div className="buy__cards--card">
                        <div id="third" className="buy__cards--card-picture" />
                    </div>
                    <div className="buy__cards--card">
                        <div id="fourth" className="buy__cards--card-picture" />
                    </div>
                    <div className="buy__cards--card second">
                        <div id="fourth" className="buy__cards--card-picture" />
                    </div>
                    <div className="buy__cards--card second">
                        <div id="third" className="buy__cards--card-picture" />
                    </div>
                    <div className="buy__cards--card second">
                        <div id="second" className="buy__cards--card-picture" />
                    </div>
                    <div className="buy__cards--card second">
                        <div id="first" className="buy__cards--card-picture" />
                    </div>
                </motion.div>
                <motion.div className="buy__fade" />
            </motion.div>
            <SideTransition />
        </motion.section>
    );
}

export default Buy;