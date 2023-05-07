import './App.scss';
import Hero from '../home/Hero';
import React from "react";
import Indicator from '../indicator/Indicator';
import Buy from '../buy/Buy';
import Contact from '../contact/Contact';
import Reseller from '../reseller/Reseller';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

const App = () => {

    const { indicatorState } = useSelector(state => state.Indicator);

    return (
        <AnimatePresence>
            {indicatorState === 1 && <Hero key={indicatorState}/>}
            {indicatorState === 2 && <Buy key={indicatorState}/>}
            {indicatorState === 3 && <Contact key={indicatorState}/>}
            {indicatorState === 4 && <Reseller key={indicatorState}/>}
            <Indicator />
        </AnimatePresence>
    );

}

export default App;