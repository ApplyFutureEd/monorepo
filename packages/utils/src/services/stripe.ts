import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = (publishableKey: string): Promise<Stripe | null> => {
    if (!stripePromise) {
        stripePromise = loadStripe(publishableKey);
    }
    return stripePromise;
};
