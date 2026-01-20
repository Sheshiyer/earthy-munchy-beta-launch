import { Product, BlogPost } from './types';

export const products: Product[] = [
  {
    id: 'cinnamon-c5',
    name: 'Ceylon Cinnamon',
    subtitle: 'Grade C5 - Premium',
    description: 'Ultra-thin quills peeled from the inner bark of the Cinnamomum verum tree. Features a light golden-brown hue and a delicate sweet aroma. Naturally low in coumarin, it delivers unmatched purity.',
    price: 589,
    weight: '100g',
    category: 'spice',
    grade: 'C5',
    features: ['Ultra-thin quills', 'Low coumarin', 'Sweet aroma', 'Hand-picked'],
    tags: ['Best Seller', 'Premium'],
    image: '/img/newproductshots/cinnamon-c5-ps1.JPG',
    images: [
        '/img/newproductshots/cinnamon-c5-ps1.JPG',
        '/img/newproductshots/cinammon-sticks-c5-ps3.JPG'
    ],
    nutrition: {
        'Calories': '6.4 kcal',
        'Dietary Fiber': '1.4g',
        'Calcium': '2.6% DV',
        'Manganese': '22.7% DV'
    }
  },
  {
    id: 'cinnamon-h2',
    name: 'Ceylon Cinnamon',
    subtitle: 'Grade H2 - Everyday Use',
    description: 'Slightly thicker quills with a robust flavor profile. Perfect for daily cooking—curries, stews, baked goods, and spiced teas. Offers excellent value without compromising on authentic Ceylon quality.',
    price: 389,
    weight: '100g',
    category: 'spice',
    grade: 'H2',
    features: ['Versatile', 'Robust flavor', 'Everyday cooking', 'Value'],
    tags: ['Everyday'],
    image: '/img/newproductshots/cinnamon-h2-ps1.PNG',
    images: [
        '/img/newproductshots/cinnamon-h2-ps1.PNG',
        '/img/newproductshots/cinnamon-h2-ps2.PNG'
    ]
  },
  {
    id: 'cinnamon-powder',
    name: 'Ceylon Cinnamon Powder',
    subtitle: 'Finely Milled C5',
    description: 'Finely milled from the finest hand-selected C5 quills. Rich in antioxidants with a warm, gentle flavor. Ideal for wellness rituals, smoothies, and baking.',
    price: 589,
    weight: '100g',
    category: 'spice',
    grade: 'C5 Powder',
    features: ['High Antioxidants', 'Finely Milled', 'True Cinnamon', 'Wellness'],
    tags: ['Wellness'],
    image: '/img/newproductshots/cinnamon-powder-ps1.PNG',
    images: [
        '/img/newproductshots/cinnamon-powder-ps1.PNG',
        '/img/newproductshots/cinnamon-powder-ps2.png'
    ]
  },
  {
    id: 'cloves-g1',
    name: 'True Ceylon Cloves',
    subtitle: 'Grade 1 - Premium Hand Picked',
    description: 'Hand-selected at peak maturity and delicately cured. These cloves offer a bold aroma, refined flavor, and natural richness. Known as the "true jewel of the Spice Island".',
    price: 239,
    weight: '50g',
    category: 'spice',
    grade: 'Grade 1',
    features: ['Hand-picked', 'Bold aroma', 'High oil content', 'Premium'],
    tags: ['Premium'],
    image: '/img/newproductshots/cloves-cg2-ps2.PNG',
    images: [
        '/img/newproductshots/cloves-cg2-ps2.PNG',
        '/img/newproductshots/cloves-cg2-ps1.PNG',
        '/img/newproductshots/cloves-cg2-ps3.PNG',
        '/img/newproductshots/cloves-cg2-ps4.JPG'
    ],
    nutrition: {
        'Calories': 214,
        'Vitamin C': '45% DV',
        'Dietary Fiber': '17% DV'
    }
  },
  {
    id: 'cloves-cg2',
    name: 'True Ceylon Cloves',
    subtitle: 'Grade CG2 - Excellent Value',
    description: 'Harvested at peak maturity and traditionally cured. Offers a warm aroma and balanced flavor at an excellent value point.',
    price: 189,
    weight: '50g',
    category: 'spice',
    grade: 'CG2',
    features: ['Warm aroma', 'Balanced flavor', 'Value'],
    tags: ['Value'],
    image: '/img/newproductshots/cloves-cg2-ps1.PNG',
    images: [
        '/img/newproductshots/cloves-cg2-ps1.PNG',
        '/img/newproductshots/cloves-cg2-ps2.PNG',
        '/img/newproductshots/cloves-cg2-ps3.PNG'
    ]
  },
  {
    id: 'honey-vault',
    name: 'The Honey Vault',
    subtitle: '6 Rare Indian Honeys',
    description: 'A curated journey through nature\'s sweetest origins. Includes Tulsi, Lychee, Moringa, Red Forest, Black Forest, and Sundarban Wild Flora honeys. Unheated, unblended, and unfiltered.',
    price: 999,
    weight: '300g',
    category: 'set',
    features: ['6 Varieties', 'Single Origin', 'Raw & Unfiltered', 'Gift Box'],
    tags: ['Gift Set', 'Exclusive'],
    image: '/img/newproductshots/honeyvault-ps1.png',
    images: [
        '/img/newproductshots/honeyvault-ps1.png',
        '/img/newproductshots/honeyvault-ps2.png'
    ],
    nutrition: {
        'Calories': '64',
        'Sugars': '16g',
        'Protein': '0g'
    }
  },
  {
    id: 'wildflower-honey',
    name: 'Single Wildflower Honey',
    subtitle: 'Pure Sundarban Wild Flora',
    description: 'Exotic, saline-sweet nectar harvested from the wild mangroves of the Sundarbans. Pure, unheated, and unblended, capturing the essence of the wild.',
    price: 349,
    weight: '250g',
    category: 'honey',
    grade: 'Raw & Unfiltered',
    features: ['Wild Harvested', 'Mangrove Flora', 'Raw', 'Unfiltered'],
    tags: ['New', 'Single Origin'],
    image: '/img/newproductshots/wildflower-honey-ps1.png',
    images: [
        '/img/newproductshots/wildflower-honey-ps1.png',
        '/img/newproductshots/wildflower-honey-ps2.png'
    ],
    nutrition: {
        'Calories': '64',
        'Sugars': '17g',
        'Protein': '0g'
    }
  }
];

export const honeyVarieties = [
    { name: 'Tulsi Honey', desc: 'Calming, herbal nectar from sacred basil blooms.' },
    { name: 'Lychee Honey', desc: 'Fruity and floral sweetness from lush orchards.' },
    { name: 'Moringa Honey', desc: 'Nutty and smooth, drawn from the miracle tree.' },
    { name: 'Red Forest Honey', desc: 'Bold, smoky tones from tropical forests.' },
    { name: 'Black Forest Honey', desc: 'Deep, malty notes from highland evergreens.' },
    { name: 'Sundarban Wild', desc: 'Exotic, saline-sweet nectar from mangroves.' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'benefits-of-naturally-sourced',
    slug: '5-benefits-of-naturally-sourced-ingredients',
    title: '5 Benefits of Naturally Sourced Ingredients',
    excerpt: 'In a world of processed foods, returning to naturally sourced ingredients isn\'t just a trend—it\'s a reclamation of health. Discover why.',
    content: `
      <p class="mb-4">In a world dominated by ultra-processed foods, the term "natural" is often thrown around loosely. But at Earthy Munchy, naturally sourced means something specific: ingredients harvested from their native environments, untouched by industrial processing. Here are 5 reasons why this matters for your health and the planet.</p>

      <h3 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">1. Superior Nutrient Density</h3>
      <p class="mb-4">Unlike mass-produced alternatives, naturally sourced ingredients retain their full nutritional profile. For instance, our wild-harvested honey contains active enzymes, pollen, and propolis—elements often filtered out in commercial honey to prevent crystallization. Similarly, our Ceylon Cinnamon (Cinnamomum verum) is packed with antioxidants like polyphenols, which are diminished in lower-grade Cassia cinnamon.</p>

      <h3 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">2. No Hidden Additives</h3>
      <p class="mb-4">Commercial spice blends often contain anti-caking agents, fillers, and artificial colors. When you choose naturally sourced spices, you get 100% of the botanical. No MSG, no silicon dioxide, just pure, potent flavor.</p>

      <h3 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">3. Richer, More Complex Flavor</h3>
      <p class="mb-4">Terroir—the unique environment including soil, topography, and climate—plays a massive role in flavor. Clove buds harvested from the mineral-rich soils of Sri Lanka's wet zone have a depth of warmth and sweetness that standardized, plantation-grown cloves simply cannot match. Nature creates complexity; labs create uniformity.</p>

      <h3 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">4. Sustainable Ecosystems</h3>
      <p class="mb-4">Our wild honey is harvested from the Sundarbans mangroves. This practice incentivizes the protection of these forests. If the forest goes, the bees go, and the livelihood of the foragers goes. By valuing the wild product, we place economic value on preserving the wild ecosystem itself.</p>

      <h3 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">5. Supporting Traditional Livelihoods</h3>
      <p class="mb-4">Sourcing naturally often means working with small-holder farmers and tribal foragers who have inherited their knowledge over generations. Your purchase supports these communities directly, helping to keep ancient agricultural traditions alive in the face of industrial monoculture.</p>

      <p class="mt-8 font-medium">Ready to taste the difference? Explore our <a href="/#/shop" class="text-brand-moss underline">collection of naturally sourced spices and honey</a>.</p>
    `,
    author: 'Yamuna',
    date: 'October 15, 2025',
    image: '/img/newproductshots/story-sourcing-wild-honey.png',
    tags: ['Sustainability', 'Health', 'Education']
  },
  {
    id: 'ceylon-vs-cassia',
    slug: 'ceylon-cinnamon-vs-cassia-truth',
    title: 'Ceylon Cinnamon vs. Cassia: The Truth About Your Spice Cabinet',
    excerpt: 'Why swapping your supermarket cinnamon for "True Cinnamon" could be the healthiest choice you make this year. Learn the critical differences.',
    content: `
      <p class="mb-4">You might think cinnamon is just cinnamon. It’s the brown powder you sprinkle on your oatmeal or latte. But did you know that 90% of the cinnamon sold in supermarkets isn't "True Cinnamon" at all? It's likely Cassia, a cheaper substitute with a very different chemical profile. Understanding the difference between <strong>Ceylon Cinnamon</strong> (<i>Cinnamomum verum</i>) and Cassia could be one of the most important changes you make for your health.</p>

      <div class="bg-brand-cream/30 p-6 rounded-xl my-8 border-l-4 border-brand-moss">
        <h3 class="text-xl font-serif font-bold text-brand-dark mb-4">People Also Ask</h3>
        <div class="space-y-6">
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">How do I know if my cinnamon is Ceylon or Cassia?</h4>
                <p class="text-sm">The easiest way is to look at the quills (sticks). <strong>Ceylon Cinnamon</strong> is made of many thin, paper-like layers rolled together like a cigar, and it's brittle enough to break by hand. <strong>Cassia</strong> is a single, thick layer of hard bark that curls inward from both sides (like a scroll) and is very difficult to grind. In powder form, Ceylon is lighter in color and has a subtle, sweet aroma, while Cassia is dark reddish-brown and has a harsh, spicy punch.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Is Ceylon cinnamon better for weight loss?</h4>
                <p class="text-sm">Yes, studies suggest that Ceylon Cinnamon can help improve insulin sensitivity and regulate blood sugar levels, which is crucial for weight management. By preventing sharp insulin spikes after meals, it helps the body store less fat. Its anti-inflammatory properties also support a healthy metabolism, making it a valuable addition to a balanced diet.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Can I eat Ceylon cinnamon every day?</h4>
                <p class="text-sm">Absolutely. Ceylon Cinnamon is safe for daily consumption because it has negligible levels of coumarin (approx. 0.004%), a natural compound that can damage the liver in high doses. Cassia cinnamon, on the other hand, contains high levels of coumarin (up to 1%) and should be consumed in moderation. For daily wellness rituals, Ceylon is the only safe choice.</p>
            </div>
        </div>
      </div>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">The Coumarin Danger</h2>
      <p class="mb-4">The most significant difference between the two spices is <strong>Coumarin</strong>. Coumarin is a naturally occurring plant compound that acts as a blood thinner. While harmless in trace amounts, high intake can lead to liver damage. European health agencies have even set strict limits on coumarin intake.</p>
      <p class="mb-4">If you take cinnamon supplements or use it daily for blood sugar control, switching to <a href="/#/product/cinnamon-c5" class="text-brand-moss underline">Ceylon Cinnamon</a> is not just a preference; it's a safety necessity. Our C5 grade cinnamon is sourced directly from Sri Lanka, ensuring you get the purest form with ultra-low coumarin levels.</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">A Tale of Two Flavors</h2>
      <p class="mb-4">Beyond health, there is the matter of taste. Cassia provides that burning, spicy hit often associated with "Red Hots" candy. It’s blunt and overwhelming.</p>
      <p class="mb-4"><strong>True Ceylon Cinnamon</strong> is sophisticated. It has a complex floral bouquet with notes of citrus and clove, and a natural sweetness that allows you to reduce the sugar in your recipes. It enhances desserts, curries, and teas without overpowering them. It’s the choice of pastry chefs and fine dining establishments worldwide.</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">Identifying Authenticity</h2>
      <p class="mb-4">At Earthy Munchy, we provide <strong>Alba and C5 Grade</strong> cinnamon, which are the highest grades available. These quills are hand-peeled by artisans in the wet zones of Sri Lanka. When you buy from us, you aren't just buying a spice; you are buying the result of generations of craft.</p>

      <p class="mt-8 font-medium">Upgrade your pantry today with our <a href="/#/shop" class="text-brand-moss underline">premium Ceylon Cinnamon collection</a>.</p>
    `,
    author: 'Yamuna',
    date: 'January 10, 2026',
    image: '/img/newproductshots/cinammon-sticks-c5-ps3.JPG',
    tags: ['Health', 'Guide', 'Spices']
  },
  {
    id: 'raw-vs-commercial-honey',
    slug: 'raw-vs-commercial-honey-myth-busting',
    title: 'Raw vs. Commercial Honey: Why Clarity Isn\'t Always Quality',
    excerpt: 'Discover why cloudy, crystallized honey is a sign of purity and why clear supermarket honey might just be syrup. A guide to real nectar.',
    content: `
      <p class="mb-4">We've been trained to look for clear, liquid gold in squeeze bottles. But if you walk into a traditional market or a beekeeper's shed, the honey looks different. It might be cloudy, thick, or even solid. This discrepancy points to a major issue in the food industry: the processing of honey. Let's break down why "ugly" honey is often the healthiest choice.</p>

      <div class="bg-brand-cream/30 p-6 rounded-xl my-8 border-l-4 border-brand-moss">
        <h3 class="text-xl font-serif font-bold text-brand-dark mb-4">People Also Ask</h3>
        <div class="space-y-6">
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Why does raw honey crystallize?</h4>
                <p class="text-sm">Crystallization is a natural process and a hallmark of pure, unheated honey. It happens because glucose separates from water and forms crystals. The speed depends on the nectar source (glucose-to-fructose ratio). Commercial brands pasteurize and filter honey to prevent this, but they destroy beneficial enzymes in the process. If your honey turns solid, rejoice—it's real!</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Is it safe to eat raw honey?</h4>
                <p class="text-sm">For most adults and children over one year old, raw honey is perfectly safe and highly beneficial. It contains antibacterial and antifungal properties derived from the plants and the bees themselves. However, infants under 12 months should avoid all honey due to the risk of botulism spores, which their developing digestive systems cannot yet handle.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Does raw honey expire?</h4>
                <p class="text-sm">Ideally, no. Archaeologists have found edible honey in ancient Egyptian tombs! Honey's low moisture content and acidic pH create an environment where bacteria cannot thrive. If kept in a sealed container to prevent moisture absorption, raw honey can last indefinitely.</p>
            </div>
        </div>
      </div>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">The Pasteurization Problem</h2>
      <p class="mb-4">Most supermarket honey is <strong>pasteurized</strong> (heated to high temperatures) and <strong>ultra-filtered</strong>. Manufacturers do this to kill yeast (extending shelf life) and remove any particles that cause crystallization. While this creates a uniform, shelf-stable product, it effectively kills the honey.</p>
      <p class="mb-4">Heat destroys delicate enzymes like <i>diastase</i> and <i>invertase</i>, which are responsible for honey's digestive benefits. It also degrades antioxidants and evaporates the subtle volatile compounds that give honey its unique floral aroma.</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">The Crystal Clear Myth</h2>
      <p class="mb-4">Ultra-filtration removes pollen grains. This is problematic for two reasons. First, bee pollen is a superfood rich in proteins and vitamins. Second, pollen is the honey's "fingerprint"—it traces the honey back to its floral source. Without pollen, it's impossible to verify if the honey is real or if it has been adulterated with corn syrup.</p>
      <p class="mb-4">At Earthy Munchy, our <a href="/#/product/honey-vault" class="text-brand-moss underline">Honey Vault collection</a> is raw and unfiltered. You might find specks of pollen or beeswax, and it might crystallize in winter. We wear these "imperfections" as badges of honor.</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">Enzymes & The Living Food</h2>
      <p class="mb-4">Raw honey is a living food. It contains natural probiotics and prebiotics that support gut health. Our <a href="/#/product/wildflower-honey" class="text-brand-moss underline">Sundarban Wild Honey</a> is harvested by tribal foragers who squeeze the honeycombs by hand, ensuring minimal processing. This preserves the medicinal properties that have been valued in Ayurveda for centuries.</p>

      <p class="mt-8 font-medium">Experience the raw difference. Try our <a href="/#/shop" class="text-brand-moss underline">wild-harvested honey varieties</a> today.</p>
    `,
    author: 'Yamuna',
    date: 'January 18, 2026',
    image: '/img/newproductshots/wildflower-honey-ps1.png',
    tags: ['Honey', 'Wellness', 'Myth Busting']
  },
  {
    id: 'power-of-ceylon-cloves',
    slug: 'secret-power-of-ceylon-cloves',
    title: 'The Secret Power of Ceylon Cloves: More Than Just a Spice',
    excerpt: 'From toothaches to immune support, explore the ancient healing properties of the world\'s finest cloves. A tiny bud with massive benefits.',
    content: `
      <p class="mb-4">Cloves are often relegated to holiday hams or pumpkin spice lattes, but these tiny, nail-shaped flower buds are potent medicinal powerhouses. In Ayurvedic and traditional Chinese medicine, cloves have been used for centuries to treat everything from digestive issues to infections. But not all cloves are created equal. Let's explore why Ceylon Cloves are in a league of their own.</p>

      <div class="bg-brand-cream/30 p-6 rounded-xl my-8 border-l-4 border-brand-moss">
        <h3 class="text-xl font-serif font-bold text-brand-dark mb-4">People Also Ask</h3>
        <div class="space-y-6">
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">What are the benefits of chewing cloves?</h4>
                <p class="text-sm">Chewing a clove releases <strong>Eugenol</strong>, a powerful compound with antiseptic and anesthetic properties. It freshens breath instantly by killing bacteria, soothes sore throats, and can even aid digestion by stimulating enzyme secretion. It's nature's chewing gum, but with actual health benefits.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">How do I use cloves for a toothache?</h4>
                <p class="text-sm">This is the most famous home remedy for a reason. Place a whole clove near the painful tooth and bite down gently to release the oils. The eugenol acts as a local anesthetic, numbing the area and reducing inflammation. While it's not a substitute for a dentist, it's an incredibly effective temporary relief.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Are Ceylon cloves different from regular cloves?</h4>
                <p class="text-sm">Yes. Ceylon Cloves are richer in essential oils due to the unique tropical climate of Sri Lanka. They are typically hand-picked to ensure the "head" of the clove remains intact (which holds the most oil). This results in a warmer, sweeter, and more aromatic spice compared to the mass-harvested varieties from other regions.</p>
            </div>
        </div>
      </div>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">Oral Health Hero</h2>
      <p class="mb-4">The eugenol in cloves is so effective that it's still used in modern dentistry (you might recognize the smell!). But you don't need a cavity to benefit. Adding cloves to your tea or simply chewing one after a meal can improve oral hygiene and fight gum disease.</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">Antioxidant Powerhouse</h2>
      <p class="mb-4">Cloves have one of the highest ORAC (Oxygen Radical Absorbance Capacity) values of any food source. This means they are incredibly effective at fighting free radicals and oxidative stress in the body. Just a small pinch of ground cloves packs more antioxidants than half a cup of blueberries.</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">Digestive Aid</h2>
      <p class="mb-4">Feeling bloated? Cloves stimulate the secretion of digestive enzymes, reducing gas and bloating. They are a key ingredient in many digestive tea blends for this exact reason.</p>

      <p class="mt-8 font-medium">Discover the healing power of our hand-picked <a href="/#/product/cloves-g1" class="text-brand-moss underline">Premium Ceylon Cloves</a>.</p>
    `,
    author: 'Yamuna',
    date: 'January 25, 2026',
    image: '/img/newproductshots/cloves-cg2-ps2.PNG',
    tags: ['Wellness', 'Herbal Remedy', 'Spices']
  },
  {
    id: 'decoding-spice-grades',
    slug: 'decoding-spice-grades-c5-h2-g1',
    title: 'Decoding Spice Grades: What Do C5, H2, and G1 Actually Mean?',
    excerpt: 'A connoisseur\'s guide to understanding spice quality labels. Learn to choose the right grade for your culinary needs like a pro.',
    content: `
      <p class="mb-4">When you buy wine, you check the vintage and region. When you buy coffee, you look for the roast. But when it comes to spices, most of us just grab the jar that says "Cinnamon." At Earthy Munchy, we believe in transparency. We label our products with their specific grades—C5, H2, G1—because these codes tell you exactly what you're eating.</p>

      <div class="bg-brand-cream/30 p-6 rounded-xl my-8 border-l-4 border-brand-moss">
        <h3 class="text-xl font-serif font-bold text-brand-dark mb-4">People Also Ask</h3>
        <div class="space-y-6">
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">What is the highest grade of cinnamon?</h4>
                <p class="text-sm">The highest grade of Ceylon Cinnamon is "Alba," followed closely by <strong>C5 (Continental 5)</strong>. These grades refer to the thinness of the quill. C5 quills are extremely slender (6-10mm diameter), delicate, and packed with the sweetest, most refined flavor. Lower grades are thicker and coarser.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">What does "hand-picked" mean for spices?</h4>
                <p class="text-sm">Mechanical harvesting damages delicate spices. "Hand-picked" means farmers selectively harvest only the mature pods or buds. For cloves, this ensures the bud head (which contains the most oil) isn't snapped off. It's labor-intensive but results in a vastly superior product.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Is powder or whole spice better?</h4>
                <p class="text-sm">Whole spices retain their flavor oils almost indefinitely until ground. Powder loses potency within months. However, our <a href="/#/product/cinnamon-powder" class="text-brand-moss underline">Cinnamon Powder</a> is milled in small batches from high-grade quills to ensure freshness. For convenience, high-quality powder is great; for longevity, go whole.</p>
            </div>
        </div>
      </div>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">The Cinnamon Spectrum</h2>
      <p class="mb-4"><strong>C5 Special:</strong> This is our premium offering. It's like the "Filet Mignon" of cinnamon. Sweet, delicate, and perfect for desserts or eating raw. <br/>
      <strong>H2 (Hamburg 2):</strong> A slightly thicker quill with a more robust, woody flavor. It holds up beautifully in rich curries, stews, and chai where you want the spice to shine through bold ingredients.</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">Clove Grading</h2>
      <p class="mb-4"><strong>Grade 1 (Hand Picked):</strong> Large, perfect buds with reddish-brown stems and lighter heads. No debris, no headless stems. <br/>
      <strong>CG2 (Cloves Grade 2):</strong> Slightly smaller but still rich in oil. Excellent value for grinding into spice mixes (Masalas).</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">Why It Matters</h2>
      <p class="mb-4">Grading isn't just about looks. Thinner cinnamon quills have a better oil-to-bark ratio, meaning more flavor and less woodiness. Whole cloves have more eugenol than stems. Knowing your grades empowers you to cook better food.</p>

      <p class="mt-8 font-medium">Explore our graded collection in the <a href="/#/shop" class="text-brand-moss underline">Earthy Munchy Shop</a>.</p>
    `,
    author: 'Yamuna',
    date: 'February 2, 2026',
    image: '/img/newproductshots/cinnamon-h2-ps1.PNG',
    tags: ['Education', 'Cooking Tips', 'Quality']
  },
  {
    id: 'saving-mangroves-honey',
    slug: 'saving-mangroves-one-jar-at-a-time',
    title: 'Saving the Mangroves, One Jar at a Time',
    excerpt: 'How ethical wild honey harvesting in the Sundarbans protects the Royal Bengal Tiger\'s habitat and supports tribal livelihoods.',
    content: `
      <p class="mb-4">The Sundarbans is the world's largest mangrove forest, a UNESCO World Heritage site, and the home of the majestic Royal Bengal Tiger. It's also the source of one of the world's most unique honeys. But this ecosystem is fragile. At Earthy Munchy, we believe that enjoying nature's bounty shouldn't cost the earth.</p>

      <div class="bg-brand-cream/30 p-6 rounded-xl my-8 border-l-4 border-brand-moss">
        <h3 class="text-xl font-serif font-bold text-brand-dark mb-4">People Also Ask</h3>
        <div class="space-y-6">
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Where does Sundarban honey come from?</h4>
                <p class="text-sm">It comes from the nectar of mangrove flowers like Khalisha, Garan, and Bain. The bees (<i>Apis dorsata</i>) build massive hives high in the trees. The honey has a unique, slightly saline tang due to the brackish waters of the delta, making it unlike any other honey on earth.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">Is wild honey harvesting sustainable?</h4>
                <p class="text-sm">It can be, if done correctly. Our partners follow traditional methods where only a portion of the hive is cut, allowing the colony to regenerate. They use smoke to gently calm the bees rather than chemicals. Most importantly, they do not cut down the trees, preserving the forest structure.</p>
            </div>
            <div>
                <h4 class="font-bold text-brand-moss text-sm uppercase tracking-wide mb-1">How does honey help the environment?</h4>
                <p class="text-sm">By creating an economic value for the standing forest, honey harvesting discourages illegal logging and poaching. When local communities can make a living from the forest without destroying it, they become its fiercest guardians. Your purchase directly funds this conservation model.</p>
            </div>
        </div>
      </div>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">The Tiger's Domain</h2>
      <p class="mb-4">Harvesting this honey is dangerous work. The "Moulis" (traditional honey hunters) venture into the deep forest where tigers roam freely. It is a relationship built on fear and respect. By supporting ethical trade, we ensure these brave harvesters are paid fairly for their high-risk, high-skill work.</p>

      <h2 class="text-2xl font-serif font-bold text-brand-dark mt-8 mb-4">The Economic Shield</h2>
      <p class="mb-4">Conservation isn't just about fences; it's about economics. If the mangroves are seen only as wood for charcoal, they will disappear. If they are seen as the eternal source of "liquid gold," they will be protected. Every jar of <a href="/#/product/wildflower-honey" class="text-brand-moss underline">Sundarban Wild Honey</a> you buy is a vote for the forest.</p>

      <p class="mt-8 font-medium">Taste the wild and support the wild. Shop our <a href="/#/shop" class="text-brand-moss underline">Ethical Honey Collection</a>.</p>
    `,
    author: 'Yamuna',
    date: 'February 10, 2026',
    image: '/img/newproductshots/wildflower-honey-ps1.png',
    tags: ['Sustainability', 'Conservation', 'Story']
  }
];
