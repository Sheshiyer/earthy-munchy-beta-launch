import React from 'react';
import SEO from '../../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-6">
      <SEO 
        title="Terms & Conditions | Earthy Munchy" 
        description="Read our Terms & Conditions regarding the use of our website and purchase of our naturally sourced products."
      />
      <h1 className="text-4xl font-serif font-bold text-brand-dark mb-8">Terms & Conditions</h1>
      <p className="text-sm text-neutral-500 mb-8">Last Updated: January 20, 2026</p>

      <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600">
        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Earthy Munchy ("we," "us" or "our"), 
            concerning your access to and use of the earthymunchy.com website. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">2. Products</h2>
          <p>
            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. 
            However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, 
            and your electronic display may not accurately reflect the actual colors and details of the products.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">3. Purchases and Payment</h2>
          <p>
            We accept various forms of payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. 
            You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">4. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, 
            and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, 
            and are protected by copyright and trademark laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">5. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of India. Earthy Munchy and yourself irrevocably consent that the courts of Bangalore shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
