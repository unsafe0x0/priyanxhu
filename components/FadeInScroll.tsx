import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInOnScroll({
  children,
  className,
  delay = 0,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
