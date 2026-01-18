import React from 'react';

const Story: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <div className="relative py-24 bg-brand-cream/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-brand-moss uppercase tracking-widest">Our Story</span>
            <h1 className="text-4xl lg:text-6xl font-serif font-medium text-brand-dark mt-4 mb-8 leading-tight">
                Roots. Soil. <br/> And a Promise.
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed font-light">
                "We don't just source ingredients. We preserve a way of life."
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-neutral-600 leading-relaxed">
                <h2 className="text-2xl font-serif font-bold text-brand-dark">One backpack. Fifty farms.</h2>
                <p>
                    It started with a simple question: Where does my food actually come from? I spent six months traveling through the hill country of Sri Lanka and the forests of India. Not staying in hotels, but in the homes of farmers.
                </p>
                <p>
                    I learned that real cinnamon isn't just bark—it's a craft perfected over centuries by families initiated into the art. I saw how wild honey is harvested in the Sundarbans, a dangerous yet sacred tradition.
                </p>
                <p>
                    Earthy Munchy isn't a corporation. It's a bridge. A direct line from the hands that harvest to the hands that cook.
                </p>
                <div className="pt-6 flex items-center gap-4">
                     <div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
                        <img src="https://picsum.photos/seed/founder/100/100" className="w-full h-full object-cover" alt="Founder" />
                     </div>
                     <div>
                        <p className="font-serif font-bold text-brand-dark">Yamuna</p>
                        <p className="text-xs uppercase tracking-wide text-neutral-400">Founder</p>
                     </div>
                </div>
            </div>
            <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                    <img src="/img/newproductshots/story-harvest-hands.png" alt="Farm Visit" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-brand-cream p-8 rounded-xl shadow-lg max-w-xs -rotate-2">
                    <p className="font-serif italic text-brand-dark text-lg">"The soil in Ratnapura smells like nothing else on earth."</p>
                </div>
            </div>
        </div>
      </div>

      <section className="bg-brand-dark text-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-serif mb-16">Two Lands. One Standard.</h2>
             <div className="grid md:grid-cols-2 gap-12">
                 <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                     <h3 className="text-xl font-bold mb-4 text-brand-yellow">Sri Lanka</h3>
                     <p className="text-white/70">The Cinnamon & Clove Highlands. Home to the true Cinnamomum verum. Sourced from small-holder farms in the wet zone.</p>
                 </div>
                 <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                     <h3 className="text-xl font-bold mb-4 text-brand-yellow">India</h3>
                     <p className="text-white/70">The Wild Honey Forests. From the Sundarbans to the lush Western Ghats. We work with tribal foragers who harvest wild honey ethically.</p>
                 </div>
             </div>
          </div>
      </section>
    </div>
  );
};

export default Story;