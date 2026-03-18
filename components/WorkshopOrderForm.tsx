import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Users } from 'lucide-react';
import { WORKSHOP_TIERS } from '../constants';

const N8N_WEBHOOK_URL = 'https://n8n.srv1270696.hstgr.cloud/webhook/594e4a2d-bc43-4f4d-9f5a-02f28afc9754';

const WorkshopOrderForm: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState(WORKSHOP_TIERS[1].id);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', partnerName: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const currentTier = WORKSHOP_TIERS.find(t => t.id === selectedTier)!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          partnerName: formData.partnerName || undefined,
          tier: currentTier.name,
          price: currentTier.price,
          timestamp: new Date().toISOString(),
          source: 'workshop-sales-page',
        }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6 py-10"
      >
        <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center text-gold mx-auto">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-3xl font-black text-white">ההרשמה התקבלה בהצלחה!</h3>
        <p className="text-white/60 text-lg">נציג מצמד ברזל ייצור איתך קשר בהקדם לסיום התשלום.</p>
        <a
          href="https://wa.me/972548654555"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:brightness-110 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{width:'1.5rem',height:'1.5rem'}}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.876L0 24l6.29-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.5-5.19-1.37l-.37-.22-3.73.9.94-3.63-.24-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          דברו איתנו בוואטסאפ
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Tier Selection */}
      <div className="grid md:grid-cols-3 gap-4">
        {WORKSHOP_TIERS.map((tier) => (
          <button
            key={tier.id}
            type="button"
            onClick={() => setSelectedTier(tier.id)}
            className={`relative p-5 rounded-2xl border-2 text-right transition-all ${
              selectedTier === tier.id
                ? 'border-gold bg-gold/10 shadow-lg shadow-gold/10'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            {tier.badge && (
              <span className="absolute -top-3 right-4 bg-gold text-navy text-xs font-black px-3 py-1 rounded-full">
                {tier.badge}
              </span>
            )}
            <p className="font-bold text-white text-lg mb-1">{tier.name}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-gold font-black text-2xl font-inter">{tier.price}&#8362;</span>
              {tier.originalPrice && (
                <span className="text-white/40 line-through text-sm font-inter">{tier.originalPrice}&#8362;</span>
              )}
            </div>
            {tier.id === 'couple' && (
              <div className="flex items-center gap-1 mt-2 text-white/50 text-sm">
                <Users size={14} />
                <span>2 כרטיסים</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-white font-bold text-sm block">שם מלא</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all text-right text-lg"
            placeholder="הכנס שם מלא"
          />
        </div>
        <div className="space-y-3">
          <label className="text-white font-bold text-sm block">טלפון</label>
          <input
            required
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all text-right text-lg"
            placeholder="050-0000000"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-white font-bold text-sm block">אימייל</label>
        <input
          required
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all text-right text-lg"
          placeholder="your@email.com"
          dir="ltr"
        />
      </div>

      {selectedTier === 'couple' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-3"
        >
          <label className="text-white font-bold text-sm block">שם בן/בת הזוג</label>
          <input
            required
            type="text"
            value={formData.partnerName}
            onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all text-right text-lg"
            placeholder="הכנס שם בן/בת הזוג"
          />
        </motion.div>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">שגיאה בשליחה. אנא נסה שוב או צור קשר בטלפון.</p>
      )}

      <button
        disabled={status === 'loading'}
        className="w-full bg-gold text-navy py-5 rounded-2xl font-black text-xl md:text-2xl flex items-center justify-center gap-4 hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-gold/10"
      >
        {status === 'loading' ? 'שולח...' : `שריינו לי מקום — ${currentTier.price}₪`}
        <Send size={24} />
      </button>
    </form>
  );
};

export default WorkshopOrderForm;
