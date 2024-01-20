import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HelloWord = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      pathLength: 1,
      pathOffset: 0,
      fill: 'white',
      transition: { duration: 2, ease: 'easeInOut' },
    });
  }, [controls]);

  return (
    <motion.div className="flex flex-col">
      <motion.h1
        className="text-[270px]"
        variants={{
          rest: { pathLength: 0, pathOffset: 1 },
          animate: { pathLength: 1, pathOffset: 0 },
        }}
        animate={controls}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        Hello
      </motion.h1>
      <h5>neighbour</h5>
    </motion.div>
  );
};

export default HelloWord;
