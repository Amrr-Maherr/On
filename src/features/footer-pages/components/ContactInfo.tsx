import { memo } from "react";
import { motion } from "framer-motion";

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ContactInfo = memo(function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-3"
    >
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </motion.div>
  );
});

export default ContactInfo;
