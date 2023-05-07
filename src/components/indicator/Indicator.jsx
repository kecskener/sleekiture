import React from "react";
import './indicator.scss';
import { useDispatch, useSelector } from "react-redux";
import { setIndicatorState } from "../store/IndicatorSlice";
import { motion } from "framer-motion";

const Indicator = () => {

    const dispatch = useDispatch();

    const onClick = (id) => {
        dispatch(setIndicatorState(id));
        console.log(id);
    }

    const { indicatorState } = useSelector(state => state.Indicator);

    const content = {
        animate: {
            transition: { staggerChildren: 1, delayChildren: 1 }
        },
    };

    const resell = {
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
        <motion.section exit={{ opacity: 0 }} initial="inital" animate="animate">
            <motion.div variants={content}>
                <motion.div variants={resell} className="indicator">
                    <motion.div onClick={() => onClick(1)} id={indicatorState === 1 ? "embrace" : ""} className={"indicator__button"} />
                    <motion.div onClick={() => onClick(2)} id={indicatorState === 2 ? "embrace" : ""} className={"indicator__button"} />
                    <motion.div onClick={() => onClick(3)} id={indicatorState === 3 ? "embrace" : ""} className={"indicator__button"} />
                    <motion.div onClick={() => onClick(4)} id={indicatorState === 4 ? "embrace" : ""} className={"indicator__button"} />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Indicator;