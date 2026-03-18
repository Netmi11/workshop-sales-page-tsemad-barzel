export interface WorkshopTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  description: string;
  features: string[];
  paymentUrl: string;
  highlighted?: boolean;
}
