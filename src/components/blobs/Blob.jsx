import React from "react";
import { motion } from "framer-motion";
import "./blob.scss";

const Blob = () => {


    const content = {
        animate: {
            transition: { staggerChildren: 0.1, delayChildren: 1 }
        },
    };

    const blob = {
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
        <motion.section initial="initial" animate="animate">
            <motion.div className="blob" variants={content}>
                <motion.div variants={blob} className="blob__left" />
                <motion.div variants={blob} className="blob__right" />
            </motion.div>
        </motion.section>
    );
}

export default Blob;