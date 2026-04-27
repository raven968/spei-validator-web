export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  subscription_status: 'active' | 'cancelled' | null;
}

export interface Plan {
  id: number;
  name: string;
  slug: string;
  price: number;
  currency: string;
  interval: string;
  validation_limit: number;
  features: string[];
  formatted_price: string;
  active: boolean;
  sort_order: number;
}

export interface SubscriptionStatus {
  subscribed: boolean;
  plan: string | null;
  plan_slug: string | null;
  status: string;
  ends_at: string | null;
  trial_ends_at: string | null;
  on_trial?: boolean;
  cancelled?: boolean;
  validations_used?: number;
  validation_limit?: number | null;
}

export interface AuthResponse {
  access_token: string;
  token_type: 'Bearer';
  expires_in?: number;
  user: User;
  return_to?: string;
}
