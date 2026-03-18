import { WorkshopTier } from './types';

export const WORKSHOP_MAX_SPOTS = 15;

export const WORKSHOP_TIERS: WorkshopTier[] = [
  {
    id: 'regular',
    name: 'מחיר רגיל',
    price: 970,
    description: 'כניסה מלאה לסדנה',
    features: [
      'גישה מלאה לסדנה',
      'חוברת עבודה דיגיטלית',
      'קבוצת וואטסאפ בוגרים',
    ],
    paymentUrl: '#',
  },
  {
    id: 'community_24h',
    name: 'מחיר קהילה 24 שעות',
    price: 370,
    originalPrice: 970,
    badge: 'הכי משתלם',
    description: 'הנחה בלעדית למי שנרשם תוך 24 שעות',
    features: [
      'גישה מלאה לסדנה',
      'חוברת עבודה דיגיטלית',
      'קבוצת וואטסאפ בוגרים',
      'שיחת ייעוץ אישית 1-על-1',
    ],
    paymentUrl: '#',
    highlighted: true,
  },
  {
    id: 'couple',
    name: '1+1 זוגי',
    price: 590,
    originalPrice: 1940,
    badge: 'לזוגות',
    description: 'שני כרטיסים במחיר מיוחד',
    features: [
      '2 כרטיסי כניסה לסדנה',
      '2 חוברות עבודה דיגיטליות',
      'קבוצת וואטסאפ בוגרים',
      'שיחת ייעוץ אישית 1-על-1',
    ],
    paymentUrl: '#',
  },
];
