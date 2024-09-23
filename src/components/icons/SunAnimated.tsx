import { motion } from "framer-motion";
import { Sun } from "lucide-react";

const SunAnimated = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sun size={38} />
    </motion.div>
  );
};

export default SunAnimated;
