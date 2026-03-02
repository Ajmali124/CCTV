import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
