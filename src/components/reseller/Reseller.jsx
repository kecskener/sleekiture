import React from "react";
import Blob from "../blobs/Blob";
import { motion } from "framer-motion";
import "./reseller.scss";
import SideTransition from "../transitions/SideTransition";

const Reseller = () => {

    const content = {
        animate: {
            transition: { staggerChildren: 0.5, delayChildren: 1 }
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
            <Blob></Blob>
            <motion.div variants={content} className="reseller">
                <motion.div variants={resell} className="reseller__left">
                    <motion.h1 variants={title} className="reseller__left--heading">Are you a <span id="big">reseller</span>?</motion.h1>
                    <motion.p className="reseller__left--sub">wE OFFER YOU THE BEST AND MOST SMOOTHEST SALES, WITH US SELLING FURNITURE HAS NEVER BEEN EASIER! yOU CAN JOIN US WITH A SIMPLE CLICK!</motion.p>
                    <motion.button className="reseller__left--button">Join now!</motion.button>
                </motion.div>
                <motion.div variants={resell} className="reseller__right" />
            </motion.div>
            <SideTransition />
        </motion.section>
    );
}

export default Reseller;