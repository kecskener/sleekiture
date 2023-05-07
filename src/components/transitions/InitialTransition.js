import "./transition.scss"
import { motion } from 'framer-motion';

const greenBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};


const InitialTransition = () => {
  return (
    <motion.div className="transition">
      <motion.div
        className="transition__item"
        initial="initial"
        animate="animate"
        variants={greenBox}
      />
    </motion.div>
  );
};

export default InitialTransition;

