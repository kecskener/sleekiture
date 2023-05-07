import React from "react";
import {motion} from "framer-motion";
import Blob from "../blobs/Blob";
import "./contact.scss";
import InitialTransition from "../transitions/InitialTransition";

const Contact = () => {

    const content = {
        animate: {
            transition: { staggerChildren: 0.5, delayChildren: 1 }
        },
    };

    const contact = {
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
        <motion.section exit={{InitialTransition}} initial="initial" animate="animate">
            <Blob></Blob>
            <motion.div variants={content} className="contact">
                <motion.h1 variants={title} className="contact__heading">Contact <span id="big">us!</span></motion.h1>
                <motion.div variants={contact} className="contact__form">
                    <form className="contact__form--left">
                        <input type="text" placeholder={"enter your name"} className="contact__form--left-input" />
                        <input type="text" placeholder={"enter your email"} className="contact__form--left-input" />
                        <input type="text" placeholder={"type your message here..."} className="contact__form--left-input2" />
                        <button className="contact__form--left-button">Send!</button>
                    </form>
                    <div className="contact__form--right">
                        <div className="contact__form--right-card">
                            <div className="contact__form--right-card_picture office"></div>
                            <h1 className="contact__form--right-card_text">London, Delaware Street. 9</h1>
                        </div>
                        <div className="contact__form--right-card">
                            <div className="contact__form--right-card_picture envelope"></div>
                            <h1 className="contact__form--right-card_text">sleekiture@info.com</h1>
                        </div>
                        <div className="contact__form--right-card2">
                            <div className="contact__form--right-card2_picture phone"></div>
                            <h1 className="contact__form--right-card2_text">+020-324-5547-899-1044-1023</h1>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <InitialTransition />
        </motion.section>
    );
}

export default Contact;