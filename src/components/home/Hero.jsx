import React from "react";
import Header from "./snippets/header/Header";
import Content from "./snippets/content/Content";
import Blob from "../blobs/Blob";
import { motion } from "framer-motion";
import './hero.scss';
import InitialTransition from "../transitions/InitialTransition";

const Hero = () => {


    const content = {
        animate: {
            transition: { staggerChildren: 0.5, delayChildren: 1 },
        },
    };

    return (
        <motion.div  exit={{InitialTransition}} animate="animate" initial="initial">
            <Blob></Blob>
            <motion.div variants={content} className="hero">
                <Header />
                <Content />
            </motion.div>
            <InitialTransition />
        </motion.div>
    );
}

export default Hero;