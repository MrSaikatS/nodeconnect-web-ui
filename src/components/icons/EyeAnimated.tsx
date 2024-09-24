import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const EyeAnimated = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Eye size={24} />
    </motion.div>
  );
};

export default EyeAnimated;
