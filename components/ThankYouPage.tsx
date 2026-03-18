import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  return (
    <div
      className="min-h-screen font-heebo text-white flex items-center justify-center px-6 py-16"
      style={{ background: 'linear-gradient(180deg, #0a1929 0%, #0d2137 50%, #0d2137 100%)' }}
    >
      <div className="max-w-2xl mx-auto text-center space-y-10">
        {/* Success icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="w-28 h-28 bg-gold/20 rounded-full flex items-center justify-center mx-auto"
        >
          <CheckCircle size={56} className="text-gold" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-black">
            תודה שנרשמת! 🎉
          </h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
            המקום שלך בסדנה <span className="text-gold font-bold">סודות הנדל״ן</span> שמור.
          </p>
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-right space-y-6"
        >
          <h2 className="text-xl font-bold text-center mb-6">מה קורה עכשיו?</h2>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <MessageCircle size={20} className="text-gold" />
            </div>
            <div>
              <p className="font-bold text-lg">נציג ייצור איתך קשר</p>
              <p className="text-white/50">תוך מספר שעות נשלח לך את כל הפרטים בוואטסאפ.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Calendar size={20} className="text-gold" />
            </div>
            <div>
              <p className="font-bold text-lg">שימו בלוח השנה</p>
              <p className="text-white/50">נשלח לכם תזכורת עם כל הפרטים לפני הסדנה.</p>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <a
            href="https://wa.me/972548654555"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#25D366]/20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.876L0 24l6.29-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.5-5.19-1.37l-.37-.22-3.73.9.94-3.63-.24-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            שלחו לנו הודעה בוואטסאפ
          </a>

          <p className="text-white/30 text-sm">
            שאלות? אנחנו כאן בשבילכם.
          </p>
        </motion.div>

        {/* Footer */}
        <p className="text-white/20 text-sm pt-6">
          &copy; {new Date().getFullYear()} צמד ברזל — כל הזכויות שמורות
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
