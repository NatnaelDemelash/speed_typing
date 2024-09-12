import { motion } from 'framer-motion';
import { formatPercentage } from '../utils/helpers';

interface ResultsProps {
  errors: number;
  accuracyPercentage: number;
  total: number;
}

const Results = ({ errors, accuracyPercentage, total }: ResultsProps) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  return (
    <motion.ul className="flex flex-col space-y-3 text-primary-400 items-center">
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0 }}
        className="my-2 text-xl font-semibold"
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
        className="text-red-500"
      >
        Errors : {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}
      >
        Accuracy : {formatPercentage(accuracyPercentage)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.5 }}
      >
        Typed : {total}
      </motion.li>
    </motion.ul>
  );
};

export default Results;
