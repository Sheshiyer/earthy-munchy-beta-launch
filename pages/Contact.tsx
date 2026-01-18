import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream/30 animate-fade-in py-16">
        <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-serif font-medium text-brand-dark mb-4">Start a Conversation</h1>
                <p className="text-neutral-500">Whether you're looking for a bespoke wedding favor, corporate gifting, or just want to say hello.</p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-moss/5">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Name</label>
                            <input type="text" className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-brand-moss transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Email</label>
                            <input type="email" className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-brand-moss transition-colors" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Subject</label>
                        <select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-brand-moss transition-colors text-neutral-600">
                            <option>General Enquiry</option>
                            <option>Corporate Gifting (50+ units)</option>
                            <option>Wholesale Partnership</option>
                            <option>Wedding Favors</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Message</label>
                        <textarea rows={5} className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-brand-moss transition-colors"></textarea>
                    </div>

                    <button className="w-full py-4 bg-brand-dark text-white font-bold rounded-lg hover:bg-brand-moss transition-colors shadow-lg shadow-brand-dark/10">
                        Send Message
                    </button>
                </form>

                <div className="mt-12 pt-8 border-t border-neutral-100 text-center">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide mb-2">Direct Email</p>
                    <a href="mailto:hello@earthymunchy.com" className="text-lg font-serif font-bold text-brand-dark hover:text-brand-moss transition-colors">hello@earthymunchy.com</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;