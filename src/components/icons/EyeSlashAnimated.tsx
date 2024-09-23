import { motion } from "framer-motion";
import { EyeOff } from "lucide-react";

const EyeSlashAnimated = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <EyeOff size={24} />
    </motion.div>
  );
};

export default EyeSlashAnimated;
