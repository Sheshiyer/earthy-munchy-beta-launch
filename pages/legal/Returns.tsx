import React from 'react';
import SEO from '../../components/SEO';

const Returns: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-6">
      <SEO 
        title="Shipping & Returns Policy | Earthy Munchy" 
        description="Information on shipping zones, delivery timelines, and our returns policy for damaged or incorrect items."
      />
      <h1 className="text-4xl font-serif font-bold text-brand-dark mb-8">Shipping & Returns</h1>
      <p className="text-sm text-neutral-500 mb-8">Last Updated: January 20, 2026</p>

      <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600">
        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Shipping Policy</h2>
          <h3 className="text-xl font-bold text-brand-dark mt-4 mb-2">Processing Time</h3>
          <p>
            All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
          </p>
          
          <h3 className="text-xl font-bold text-brand-dark mt-4 mb-2">Shipping Rates & Delivery Estimates</h3>
          <p>
            Shipping charges for your order will be calculated and displayed at checkout. Standard shipping typically takes 3-5 business days within metro cities and 5-7 days for other locations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Returns Policy</h2>
          <h3 className="text-xl font-bold text-brand-dark mt-4 mb-2">Eligibility</h3>
          <p>
            Due to the perishable nature of our food products (spices and honey), we generally do not accept returns. However, your satisfaction is our priority.
          </p>
          
          <h3 className="text-xl font-bold text-brand-dark mt-4 mb-2">Damaged or Incorrect Items</h3>
          <p>
            If you received a damaged product or the wrong item, please contact us at <strong>hello@earthymunchy.com</strong> within 48 hours of delivery with photos of the product and packaging. 
            We will gladly offer a replacement or a full refund for the affected items.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Cancellations</h2>
          <p>
            You may cancel your order within 4 hours of placing it. Once the order has been processed and shipped, it cannot be cancelled.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Returns;
