import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Users, Target,
  Compass, Heart, Clock, CheckCircle, Star, ArrowDown
} from 'lucide-react';
import { WORKSHOP_TIERS, WORKSHOP_MAX_SPOTS } from '../constants';
import WorkshopOrderForm from './WorkshopOrderForm';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const VALUE_CARDS = [
  {
    icon: Compass,
    title: 'ביטחון בדרך',
    desc: 'נהפוך את המושגים המורכבים לתוכנית עבודה פשוטה וממוקדת עבורכם.',
  },
  {
    icon: Heart,
    title: 'שקט נפשי',
    desc: 'תלמדו איך לבחור את "נבחרת החלומות" שלכם (עו"ד, שמאי, מתווך) ולעבור את התהליך בלי טעויות יקרות.',
  },
  {
    icon: Target,
    title: 'דיוק מקסימלי',
    desc: 'נלמד אתכם איך לסנן את הרעש ולמצוא את העסקה שתפורה למידות שלכם.',
  },
];

const WorkshopPage: React.FC = () => {
  return (
    <div className="min-h-screen font-heebo text-white" style={{ backgroundColor: '#0d2137' }}>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center text-center px-6 py-10 md:py-14"
        style={{
          background: 'linear-gradient(180deg, #0a1929 0%, #0d2137 50%, #0d2137 100%)',
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-5 py-2 rounded-full text-sm font-bold border border-red-500/30"
          >
            <Clock size={16} className="animate-pulse" />
            <span>נותרו {WORKSHOP_MAX_SPOTS} מקומות בלבד</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            מפסיקים לחלום, מתחילים לקנות:
            <br />
            <span className="text-gold">נדל״ן ב-90 יום</span> 🏠
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            סדנה מעשית וממוקדת של <span className="text-gold font-bold">צמד ברזל</span> — תוכנית עבודה ברורה לרכישת נדל״ן תוך 90 יום.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#order"
              className="bg-gold text-navy px-10 py-5 rounded-2xl font-black text-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-gold/20 flex items-center gap-3"
            >
              שריינו לי מקום
              <ArrowDown size={22} />
            </a>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Shield size={16} />
              <span>100% אחריות — לא נהנית? כסף חזרה</span>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center justify-center gap-8 pt-6 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>100+ בוגרים</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} />
              <span>4.9 דירוג</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>5 שנות ניסיון</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section className="py-10 md:py-14 px-6" style={{ backgroundColor: '#0a1929' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-10"
          >
            <motion.p variants={fadeUp} custom={0} className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
              תוכן הסדנה
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-black">
              מה אתם הולכים ללמוד?
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUE_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
                custom={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                  <card.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-10 md:py-14 px-6" style={{ backgroundColor: '#0d2137' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-10"
          >
            <motion.p variants={fadeUp} custom={0} className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
              מחירים
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-black">
              בחרו את המסלול שלכם
            </motion.h2>
          </motion.div>

          {/* Main pricing card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={fadeUp}
            custom={0}
            className="max-w-2xl mx-auto"
          >
            <div className="relative bg-gradient-to-b from-gold/20 to-gold/5 border-2 border-gold rounded-3xl p-10 md:p-14 text-center shadow-xl shadow-gold/10">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy text-sm font-black px-6 py-1.5 rounded-full">
                במיוחד לעמותת ההולכים בראש
              </span>

              <p className="text-white/50 text-lg mb-2">המחיר הרגיל של הסדנה</p>
              <p className="text-white/30 line-through text-4xl font-black font-inter mb-6">970&#8362;</p>

              <p className="text-gold font-bold text-xl mb-2">עכשיו במיוחד לעמותת ההולכים בראש</p>
              <p className="text-gold font-black text-7xl md:text-8xl font-inter mb-2">370&#8362;</p>
              <p className="text-white/40 text-sm mb-8">חיסכון של 600&#8362;</p>

              <ul className="space-y-3 mb-10 text-right max-w-sm mx-auto">
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  גישה מלאה לסדנה
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  חוברת עבודה דיגיטלית
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  קבוצת וואטסאפ בוגרים
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  שיחת ייעוץ אישית 1-על-1
                </li>
              </ul>

              <a
                href="#order"
                className="inline-block bg-gold text-navy px-12 py-5 rounded-2xl font-black text-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-gold/20"
              >
                אני רוצה להירשם — 370&#8362;
              </a>
            </div>

            {/* Couples option */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeUp}
              custom={1}
              className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={20} className="text-gold" />
                  <h3 className="text-xl font-bold">באים בזוג? 1+1</h3>
                </div>
                <p className="text-white/50">שני כרטיסים במחיר מיוחד — כולל את כל ההטבות</p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-left">
                  <span className="text-white/30 line-through text-sm font-inter">1,940&#8362;</span>
                  <p className="text-gold font-black text-3xl font-inter">590&#8362;</p>
                </div>
                <a
                  href="#order"
                  className="bg-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  בחרו זוגי
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST FOOTER ── */}
      <footer className="py-10 md:py-14 px-6 border-t border-white/10" style={{ backgroundColor: '#0d2137' }}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-gold font-black text-3xl md:text-4xl font-inter">100+</p>
              <p className="text-white/50 text-sm mt-1">עסקאות מוצלחות</p>
            </div>
            <div>
              <p className="text-gold font-black text-3xl md:text-4xl font-inter">75+</p>
              <p className="text-white/50 text-sm mt-1">לקוחות מרוצים</p>
            </div>
            <div>
              <p className="text-gold font-black text-3xl md:text-4xl font-inter">5+</p>
              <p className="text-white/50 text-sm mt-1">שנות ניסיון</p>
            </div>
          </div>

          <a
            href="#order"
            className="inline-flex items-center gap-3 bg-gold text-navy px-10 py-5 rounded-2xl font-black text-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-gold/20"
          >
            שריינו לי מקום עכשיו
            <ArrowDown size={22} />
          </a>

          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} צמד ברזל — כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WorkshopPage;
