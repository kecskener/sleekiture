import "./transition.scss"
import { motion } from 'framer-motion';

const greenBox = {
  initial: {
    width: "100vw",
    bottom: 0,
  },
  animate: {
    width: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};


const SideTransition = () => {
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

export default SideTransition;

