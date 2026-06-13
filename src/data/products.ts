export interface ProductSpec {
  label: string;
  value: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Application {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  span?: 'tall' | 'wide' | 'normal';
}

export interface ProductData {
  id: string;
  slug: string;
  name: string;
  category: string;
  seoTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogImage: string;
  keywords: string[];
  hero: {
    heading: string;
    subtitle: string;
    badge: string;
    image: string;
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
  };
  showcase: {
    heading: string;
    description: string;
    image: string;
    specs: ProductSpec[];
  };
  applications: Application[];
  faqs: FAQ[];
  gallery: GalleryImage[];
  relatedProducts: string[];
  schemas: {
    breadcrumb: object;
    product: object;
    faq: object;
    localBusiness: object;
    organization: object;
  };
  prevProduct?: string;
  nextProduct?: string;
}

const makeSchemas = (name: string, slug: string, desc: string, img: string, faqs: FAQ[]) => ({
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shreekrishnalabels.in" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://products.shreekrishnalabels.in" },
      { "@type": "ListItem", "position": 3, "name": name, "item": `https://products.shreekrishnalabels.in/${slug}` }
    ]
  },
  product: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${name} - Shree Krishna Labels`,
    "description": desc,
    "image": img,
    "brand": { "@type": "Brand", "name": "Shree Krishna Labels" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Shree Krishna Labels Co.",
      "url": "https://products.shreekrishnalabels.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vasai",
        "addressLocality": "Vasai",
        "addressRegion": "Maharashtra",
        "postalCode": "401202",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "seller": { "@type": "Organization", "name": "Shree Krishna Labels Co." },
      "availability": "https://schema.org/MadeToOrder",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "valueAddedTaxIncluded": false
      },
      "areaServed": ["IN", "US", "GB", "AE", "AU"]
    }
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shree Krishna Labels Co.",
    "url": "https://products.shreekrishnalabels.in",
    "telephone": "+918879552022",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vasai East",
      "addressLocality": "Vasai",
      "addressRegion": "Maharashtra",
      "postalCode": "401202",
      "addressCountry": "IN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 19.3919, "longitude": 72.8397 },
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "$$"
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shree Krishna Labels Co.",
    "url": "https://products.shreekrishnalabels.in",
    "logo": "https://products.shreekrishnalabels.in/og-image.png",
    "foundingDate": "1999",
    "description": "Premium garment label manufacturer based in Vasai, Maharashtra, India. Serving 500+ brands globally since 1999.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918879552022",
      "contactType": "sales",
      "availableLanguage": ["English", "Hindi"]
    }
  }
});

const commonApplications: Application[] = [
  { title: "Fashion Brands", description: "RTW collections and designer labels", icon: "Shirt" },
  { title: "Sportswear & Athleisure", description: "Performance wear branding", icon: "Zap" },
  { title: "Luxury Apparel", description: "Couture and premium fashion houses", icon: "Crown" },
  { title: "Lingerie & Intimates", description: "Skin-safe, ultra-soft applications", icon: "Heart" },
  { title: "School & Corporate", description: "Uniform and workwear identification", icon: "Building2" },
  { title: "Kids & Baby Wear", description: "Safe, hypoallergenic labelling", icon: "Baby" },
  { title: "Export Houses", description: "International compliance labelling", icon: "Globe" },
  { title: "Home Textiles", description: "Bedding, towels, and home goods", icon: "Home" },
];

export const products: ProductData[] = [
  // 1. WOVEN LABELS
  {
    id: "woven-labels",
    slug: "woven-labels",
    name: "Woven Labels",
    category: "Fabric Labels",
    seoTitle: "Woven Labels Manufacturer India | Custom Woven Tags | SKL",
    metaDescription: "Premium woven label manufacturer in Vasai, Mumbai. Thread-precise custom woven labels for fashion brands. Low MOQ, 7-day sampling, global shipping. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/woven-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["woven labels manufacturer india", "custom woven labels", "woven garment labels mumbai", "thread labels"],
    hero: {
      heading: "Woven Labels That Speak in Thread",
      subtitle: "Thread-precise craftsmanship for brands that refuse to compromise. Every yarn placed with intention.",
      badge: "Fabric Labels",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "2mm", label: "Thread Precision" },
      stat2: { value: "5000+", label: "Designs Made" },
    },
    showcase: {
      heading: "Built for Woven Label Excellence",
      description: "Our high-density jacquard looms produce woven labels with razor-sharp detail — logos, patterns, and text rendered in thread with photographic fidelity. From damask weave to satin-finish woven, each label is engineered to survive 50+ industrial washes without fade.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Material", value: "100% Polyester / Cotton blend", icon: "Layers" },
        { label: "Weave Type", value: "Damask, Taffeta, Satin-finish", icon: "Grid3x3" },
        { label: "Wash Resistance", value: "50+ industrial washes", icon: "Droplets" },
        { label: "Eco-Friendly", value: "OEKO-TEX Standard 100", icon: "Leaf" },
        { label: "Sizes", value: "10mm–100mm width, custom", icon: "Ruler" },
        { label: "Colours", value: "Up to 8 thread colours", icon: "Palette" },
        { label: "Durability", value: "15+ years colorfastness", icon: "Shield" },
        { label: "MOQ", value: "100 pcs (custom orders)", icon: "Package" },
      ],
    },
    applications: commonApplications,
    faqs: [
      { question: "What is the minimum order quantity for woven labels?", answer: "Our standard MOQ is 100–500 pieces depending on design complexity. For startup brands and sampling, we offer flexible quantities. Contact us for bespoke requirements." },
      { question: "How long does it take to produce custom woven labels?", answer: "Standard production is 7–10 working days after artwork approval. Rush orders can be accommodated in 3–5 days for a nominal expedite fee." },
      { question: "What file formats do you accept for woven label artwork?", answer: "We accept CDR (CorelDRAW), AI (Adobe Illustrator), EPS, and high-resolution PDF. Minimum 300 DPI for raster artwork. Our in-house digitisers can work from brand guidelines." },
      { question: "Are your woven labels compliant with international export standards?", answer: "Yes — all labels meet OEKO-TEX Standard 100 requirements, suitable for USA, UK, EU, and UAE export markets." },
      { question: "What weave types are available?", answer: "We offer Damask (finest detail, soft), Taffeta (cost-effective, good for logos), and Satin-finish woven for a premium sheen. Each suits different applications and budgets." },
      { question: "Can you weave pantone-matched colours?", answer: "Yes, we colour-match to Pantone TPX/TPG standards using our dyed polyester thread inventory of 1,200+ shades." },
      { question: "Do you offer fold options for woven labels?", answer: "We offer all standard folds: center fold, end fold, loop fold, mitre fold, and straight cut — suitable for neck labels, care labels, size tabs, and more." },
      { question: "What is the maximum size for a woven label?", answer: "Standard widths go up to 100mm. Custom large-format woven patches are available up to 150mm × 200mm for jacket backs and bag applications." },
      { question: "Can woven labels include QR codes or barcodes?", answer: "Yes, our high-density damask weave can render QR codes and linear barcodes that are scannable. We recommend minimum 25mm × 25mm size for reliable scanning." },
      { question: "Do you provide samples before bulk production?", answer: "Absolutely. We ship physical woven label samples within 5–7 days at a nominal sampling charge, fully refundable on bulk order placement." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format&fit=crop", alt: "Close-up woven label texture", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=85&auto=format&fit=crop", alt: "Woven label on premium garment", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=85&auto=format&fit=crop", alt: "Fashion label detail shot", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=85&auto=format&fit=crop", alt: "Textile manufacturing process", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=85&auto=format&fit=crop", alt: "Woven label quality inspection", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=85&auto=format&fit=crop", alt: "Premium brand labels collection", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=85&auto=format&fit=crop", alt: "Label on fashion garment", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1558618047-3c8b2e5d5f44?w=600&q=85&auto=format&fit=crop", alt: "Woven labels packaging", width: 600, height: 400 },
    ],
    relatedProducts: ["satin-labels", "cotton-labels", "embroidered-badges", "hang-tags", "printed-labels"],
    schemas: makeSchemas("Woven Labels", "woven-labels", "Premium woven label manufacturer in Vasai, Mumbai. Thread-precise custom woven labels for fashion brands.", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85", [
      { question: "What is the minimum order quantity for woven labels?", answer: "Our standard MOQ is 100–500 pieces depending on design complexity." },
      { question: "How long does production take?", answer: "7–10 working days after artwork approval." },
    ]),
    prevProduct: "rfid-labels",
    nextProduct: "satin-labels",
  },

  // 2. SATIN LABELS
  {
    id: "satin-labels",
    slug: "satin-labels",
    name: "Satin Labels",
    category: "Fabric Labels",
    seoTitle: "Satin Labels Manufacturer India | Luxury Garment Labels | SKL",
    metaDescription: "Ultra-soft satin label manufacturer Vasai Mumbai. Whisper-soft for lingerie, luxury fashion & kidswear. Custom sizes, 8-colour print, ISO certified. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/satin-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["satin labels manufacturer india", "satin garment labels", "luxury satin labels mumbai", "soft labels lingerie"],
    hero: {
      heading: "Satin Labels — Whisper-Soft Luxury",
      subtitle: "The label of choice for lingerie houses, luxury RTW, and premium kidswear. Silky-smooth, skin-safe, signature.",
      badge: "Fabric Labels",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "8-col", label: "Full Colour Print" },
      stat2: { value: "Ultra", label: "Skin-Soft Finish" },
    },
    showcase: {
      heading: "Built for Satin Label Excellence",
      description: "Our satin labels are woven from ultra-fine polyester threads to produce a lustrous, skin-friendly surface that defines luxury garment branding. Heat transfer printing delivers vibrant, crisp colour that persists through repeated washes without cracking or fading.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Material", value: "Ultra-fine polyester satin", icon: "Layers" },
        { label: "Finish", value: "High-gloss silky sheen", icon: "Sparkles" },
        { label: "Print Method", value: "Heat transfer, up to 8 colours", icon: "Printer" },
        { label: "Eco-Friendly", value: "OEKO-TEX Standard 100", icon: "Leaf" },
        { label: "Sizes", value: "10mm–50mm width, custom", icon: "Ruler" },
        { label: "Fold Options", value: "Center, end, loop, straight cut", icon: "FoldVertical" },
        { label: "Wash Resistance", value: "40+ washes, colour-fast", icon: "Droplets" },
        { label: "MOQ", value: "200 pcs (flexible for samples)", icon: "Package" },
      ],
    },
    applications: commonApplications,
    faqs: [
      { question: "Why choose satin labels for lingerie?", answer: "Satin's ultra-smooth surface is completely non-irritating against sensitive skin — making it the standard choice for lingerie, innerwear, and babywear. Our labels pass skin-contact safety tests under OEKO-TEX Standard 100." },
      { question: "Can you print photographic quality images on satin?", answer: "Yes — our heat transfer printing on satin supports gradients, photographic imagery, and fine details up to 8 colours. The satin base enhances colour vibrancy compared to matte substrates." },
      { question: "Are satin labels suitable for high-end fashion brands?", answer: "Absolutely. The lustrous sheen of satin elevates brand perception significantly. Major luxury fashion houses use satin labels specifically for the tactile and visual premium it communicates." },
      { question: "What fold options are available for satin labels?", answer: "We offer center fold (neck labels), end fold, loop fold (size tabs), mitre fold, and straight cut — each produced cleanly with heat-sealed or ultrasonic edges to prevent fraying." },
      { question: "How do satin labels hold up to washing?", answer: "Our satin labels maintain colour integrity through 40+ machine washes at 40°C. Dry cleaning and tumble dry safe variants are also available on request." },
      { question: "What is the difference between satin and woven labels?", answer: "Woven labels have texture and depth from the jacquard loom — ideal for logos with dimension. Satin labels are smooth and flat — ideal for intricate print designs, photographic colour, and skin-contact applications." },
      { question: "Do you offer custom satin label shapes?", answer: "Yes — beyond standard rectangular cuts, we produce die-cut satin labels in custom shapes: oval, arch, scallop edges, and brand-specific silhouettes with clean sealed edges." },
      { question: "What is the minimum order quantity for satin labels?", answer: "Standard MOQ is 200 pieces. For brand sampling, we can accommodate smaller runs at adjusted per-unit pricing. Reach out with your requirements." },
      { question: "Can satin labels include care instructions?", answer: "Yes — satin labels can function as combination labels, carrying both brand identity and care/wash instruction symbols in a single label, saving cost and garment real estate." },
      { question: "Do you supply satin labels for export market compliance?", answer: "Yes — we produce satin labels compliant with EU REACH, US CPSC, and UK apparel labelling regulations. Country of origin, fibre content, and care symbols all included to spec." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=85&auto=format&fit=crop", alt: "Satin label close-up texture", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=85&auto=format&fit=crop", alt: "Luxury lingerie with satin label", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1558171813-20f44763c4cf?w=600&q=85&auto=format&fit=crop", alt: "Satin label colour printing", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85&auto=format&fit=crop", alt: "Fashion brand satin labels", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=85&auto=format&fit=crop", alt: "Premium garment label detail", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=85&auto=format&fit=crop", alt: "Luxury fashion branding", width: 600, height: 400 },
    ],
    relatedProducts: ["woven-labels", "cotton-labels", "care-labels", "size-labels", "printed-labels"],
    schemas: makeSchemas("Satin Labels", "satin-labels", "Ultra-soft satin label manufacturer Vasai Mumbai for lingerie and luxury fashion.", "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=85", []),
    prevProduct: "woven-labels",
    nextProduct: "cotton-labels",
  },

  // 3. COTTON LABELS
  {
    id: "cotton-labels",
    slug: "cotton-labels",
    name: "Cotton Labels",
    category: "Fabric Labels",
    seoTitle: "Cotton Labels Manufacturer India | Natural Fabric Labels | SKL",
    metaDescription: "Organic cotton label manufacturer Vasai Mumbai. Natural, sustainable garment labels for eco-conscious brands. Custom print, low MOQ, global delivery. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/cotton-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["cotton labels manufacturer india", "organic cotton labels", "natural fabric labels", "eco labels garments"],
    hero: {
      heading: "Cotton Labels — Naturally Premium",
      subtitle: "Organic, breathable, and beautifully textured. The label that matches your sustainable brand story.",
      badge: "Fabric Labels",
      image: "https://images.unsplash.com/photo-1586495777744-4e6232bf4e93?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "100%", label: "Natural Cotton" },
      stat2: { value: "GRS", label: "Certified Option" },
    },
    showcase: {
      heading: "Built for Cotton Label Excellence",
      description: "Woven and printed on natural cotton substrates, our cotton labels deliver the organic warmth that synthetic labels cannot replicate. Available in natural ecru, bleached white, or dyed base colours — each label is a tactile expression of your brand's commitment to natural materials.",
      image: "https://images.unsplash.com/photo-1586495777744-4e6232bf4e93?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Material", value: "100% natural / organic cotton", icon: "Leaf" },
        { label: "Finish", value: "Natural, matte, soft-washed", icon: "Wind" },
        { label: "Print Method", value: "Screen print, digital, woven", icon: "Printer" },
        { label: "Certification", value: "OEKO-TEX / GRS available", icon: "BadgeCheck" },
        { label: "Sizes", value: "Custom width and height", icon: "Ruler" },
        { label: "Base Colours", value: "Natural ecru, white, dyed", icon: "Palette" },
        { label: "Wash Resistance", value: "30+ washes colour-fast", icon: "Droplets" },
        { label: "MOQ", value: "200 pcs", icon: "Package" },
      ],
    },
    applications: commonApplications,
    faqs: [
      { question: "Are your cotton labels truly organic?", answer: "We offer GOTS-certified organic cotton and GRS (Global Recycled Standard) options. Certification documentation is available for export compliance." },
      { question: "Can you print on cotton labels?", answer: "Yes — screen printing, digital printing, and heat transfer all work on cotton substrates. We also offer woven cotton labels for a fully natural product." },
      { question: "What base colours are available for cotton labels?", answer: "Natural ecru (undyed), bleached white, and a range of dyed bases including black, navy, olive, and stone. Custom Pantone-matched dyeing available for 500+ pcs." },
      { question: "Are cotton labels suitable for baby clothing?", answer: "Absolutely — natural cotton is the safest label substrate for infant and baby clothing. All our cotton labels pass OEKO-TEX Standard 100 skin-safety testing." },
      { question: "How do cotton labels compare to woven polyester labels?", answer: "Cotton labels have a softer, more organic hand-feel and appeal to sustainability-conscious consumers. Polyester woven labels offer better colour vibrancy and wash durability. We recommend cotton for premium natural and eco-brand positioning." },
      { question: "Do you offer recycled cotton labels?", answer: "Yes — GRS-certified recycled cotton labels are available. These are produced from post-consumer textile waste and carry documentation suitable for EU Green Claims compliance." },
      { question: "Can cotton labels include care instruction symbols?", answer: "Yes — GINETEX and ASTM D5489 care symbols can be printed or woven into cotton labels. Combination brand + care labels are available." },
      { question: "What is the MOQ for cotton labels?", answer: "Minimum 200 pieces for printed cotton labels, 500 pieces for woven cotton. Smaller sampling quantities available at adjusted pricing." },
      { question: "How should cotton labels be attached to garments?", answer: "Cotton labels can be sewn-in, heat-sealed (with HT backing), or adhesive-backed for temporary use. We supply the appropriate attachment format per your manufacturing process." },
      { question: "Do you supply cotton labels for Fairtrade-certified brands?", answer: "Yes — we work with brands on the Fairtrade and SA8000 supply chain. Documentation and audit trails for ethical sourcing are available on request." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1586495777744-4e6232bf4e93?w=600&q=85&auto=format&fit=crop", alt: "Cotton label natural texture", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format&fit=crop", alt: "Organic cotton label on garment", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=85&auto=format&fit=crop", alt: "Sustainable fashion labelling", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=85&auto=format&fit=crop", alt: "Natural cotton label print", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=85&auto=format&fit=crop", alt: "Eco brand cotton labels", width: 600, height: 400 },
    ],
    relatedProducts: ["woven-labels", "satin-labels", "care-labels", "printed-labels", "hang-tags"],
    schemas: makeSchemas("Cotton Labels", "cotton-labels", "Organic cotton label manufacturer Vasai Mumbai for eco-conscious fashion brands.", "https://images.unsplash.com/photo-1586495777744-4e6232bf4e93?w=800&q=85", []),
    prevProduct: "satin-labels",
    nextProduct: "heat-transfer-labels",
  },

  // 4. HEAT TRANSFER LABELS
  {
    id: "heat-transfer-labels",
    slug: "heat-transfer-labels",
    name: "Heat Transfer Labels",
    category: "Printed Labels",
    seoTitle: "Heat Transfer Labels Manufacturer India | No-Sew Labels | SKL",
    metaDescription: "Heat transfer label manufacturer Vasai Mumbai. Tag-free, no-sew labels for activewear & sportswear. Full colour, wash-fast, soft-feel. Custom. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/heat-transfer-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["heat transfer labels india", "no sew labels", "tag free labels sportswear", "heat transfer printing manufacturer"],
    hero: {
      heading: "Heat Transfer Labels — Seamlessly Branded",
      subtitle: "Tag-free performance. Invisible comfort. Heat-bonded precision that activewear demands.",
      badge: "Printed Labels",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "Tag-free", label: "No-Sew Design" },
      stat2: { value: "CMYK+", label: "Full Colour" },
    },
    showcase: {
      heading: "Built for Heat Transfer Excellence",
      description: "Heat transfer labels bond directly to fabric using precise heat and pressure — no stitching, no scratchy woven edges. The result is a whisper-soft, tag-free brand mark that performs as hard as the athlete wearing it. Our labels withstand chlorine, sweat, and 60°C machine washes.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Material", value: "Polyurethane / PVC-free film", icon: "Layers" },
        { label: "Application", value: "Heat press, 160°C, 10 sec", icon: "Flame" },
        { label: "Print Method", value: "Digital + screen, full CMYK", icon: "Printer" },
        { label: "Wash Resistance", value: "60+ washes, chlorine safe", icon: "Droplets" },
        { label: "Feel", value: "Ultra-soft, tag-free", icon: "Wind" },
        { label: "Substrates", value: "Cotton, poly, nylon, spandex", icon: "Shirt" },
        { label: "Sizes", value: "5mm–200mm, custom shapes", icon: "Ruler" },
        { label: "MOQ", value: "500 pcs per design", icon: "Package" },
      ],
    },
    applications: [
      { title: "Sportswear", description: "Performance jerseys and training wear", icon: "Dumbbell" },
      { title: "Activewear", description: "Yoga, running, and athleisure", icon: "Activity" },
      { title: "Swimwear", description: "Chlorine-resistant labelling", icon: "Waves" },
      { title: "Innerwear", description: "Tag-free comfort underwear", icon: "Heart" },
      { title: "Team Uniforms", description: "Club and corporate kits", icon: "Users" },
      { title: "Kids Apparel", description: "Scratch-free for sensitive skin", icon: "Baby" },
      { title: "Outdoor Gear", description: "Waterproof technical clothing", icon: "Mountain" },
      { title: "Luxury Athleisure", description: "Premium lifestyle sportswear", icon: "Crown" },
    ],
    faqs: [
      { question: "What is a heat transfer label?", answer: "A heat transfer label is a printed design bonded to fabric using heat and pressure instead of sewing. The result is a flat, seamless brand mark with no raised edges or scratchy surfaces — ideal for performance and intimate apparel." },
      { question: "Are heat transfer labels suitable for sportswear?", answer: "They are the preferred labelling method for sportswear. Our HT labels are sweat-resistant, chlorine-safe, and retain colour through 60+ machine washes at 60°C — matching the performance demands of activewear." },
      { question: "What fabrics can heat transfer labels be applied to?", answer: "Our labels bond to cotton, polyester, nylon, spandex/elastane blends, and most performance fabrics. We pre-test adhesion for your specific substrate before production." },
      { question: "How are heat transfer labels applied?", answer: "Using a heat press at 160°C for 8–12 seconds at controlled pressure. We provide full application instructions. Suitable for both manual heat press and automated transfer machines." },
      { question: "Are your heat transfer labels PVC-free?", answer: "Yes — our labels use polyurethane (PU) film, which is phthalate-free and compliant with EU REACH, CPSIA, and Oeko-Tex Standard 100. Safer for skin and environment." },
      { question: "Can you print metallic and reflective designs?", answer: "Yes — we offer metallic gold/silver, holographic, and 3M reflective heat transfer options. Reflective labels are popular for safety workwear and night-running apparel." },
      { question: "What is the difference between heat transfer and screen print labels?", answer: "Heat transfer bonds a pre-printed film to fabric — offering photographic quality, fine detail, and consistent colour. Screen printing applies ink directly to fabric — better for large flat areas with fewer colours." },
      { question: "Can heat transfer labels be removed?", answer: "Our permanent HT labels are designed to last the garment's life. Removable variants are available for temporary applications or retail price tags." },
      { question: "What is the MOQ for heat transfer labels?", answer: "500 pieces per design for standard orders. Sampling available from 50 pieces at adjusted pricing. Digital printing allows cost-effective short runs." },
      { question: "Do heat transfer labels crack over time?", answer: "Our PU-based labels are engineered for flexibility and crack-resistance. They stretch with the fabric and do not crack even on high-stretch activewear, tested to 200% elongation." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=85&auto=format&fit=crop", alt: "Heat transfer label on activewear", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=85&auto=format&fit=crop", alt: "Sportswear heat transfer branding", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=85&auto=format&fit=crop", alt: "Heat press label application", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&q=85&auto=format&fit=crop", alt: "Tag-free label detail", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=85&auto=format&fit=crop", alt: "Performance wear labelling", width: 600, height: 800, span: "tall" },
    ],
    relatedProducts: ["silicone-labels", "tpu-labels", "printed-labels", "woven-labels", "care-labels"],
    schemas: makeSchemas("Heat Transfer Labels", "heat-transfer-labels", "Heat transfer label manufacturer Vasai Mumbai for activewear and sportswear.", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85", []),
    prevProduct: "cotton-labels",
    nextProduct: "tpu-labels",
  },

  // 5. TPU LABELS
  {
    id: "tpu-labels",
    slug: "tpu-labels",
    name: "TPU Labels",
    category: "Specialty Labels",
    seoTitle: "TPU Labels Manufacturer India | Rubber Feel Brand Labels | SKL",
    metaDescription: "Premium TPU label manufacturer Vasai Mumbai. Soft-rubber 3D brand labels for sportswear, bags & footwear. Embossed, debossed, full colour. Custom. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/tpu-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["TPU labels manufacturer india", "rubber labels sportswear", "TPU brand patches", "3D rubber labels"],
    hero: {
      heading: "TPU Labels — 3D Brand Identity",
      subtitle: "Soft-rubber precision moulded to your brand. The dimensional label that elevates streetwear, bags, and performance gear.",
      badge: "Specialty Labels",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "3D", label: "Embossed Depth" },
      stat2: { value: "IPX7", label: "Waterproof" },
    },
    showcase: {
      heading: "Built for TPU Label Excellence",
      description: "Thermoplastic polyurethane (TPU) labels are injection-moulded or debossed to create tactile brand marks with real dimensional depth. Soft, flexible, and waterproof — they bond permanently to virtually any surface: fabric, leather, neoprene, nylon, and hard goods.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Material", value: "Thermoplastic Polyurethane (TPU)", icon: "Layers" },
        { label: "Finish", value: "Matte, gloss, embossed, debossed", icon: "Sparkles" },
        { label: "Attachment", value: "Sew-on, heat bond, adhesive", icon: "Link" },
        { label: "Waterproof", value: "IPX7, fully waterproof", icon: "Droplets" },
        { label: "Colours", value: "Pantone matched, up to 8 colours", icon: "Palette" },
        { label: "Sizes", value: "Custom, 10mm–150mm", icon: "Ruler" },
        { label: "Flexibility", value: "200% stretch, crack-free", icon: "Zap" },
        { label: "MOQ", value: "300 pcs per design", icon: "Package" },
      ],
    },
    applications: [
      { title: "Streetwear", description: "Bold 3D brand marks for urban apparel", icon: "Shirt" },
      { title: "Bags & Backpacks", description: "Debossed brand logos on leather and nylon", icon: "Briefcase" },
      { title: "Footwear", description: "Tongue labels and heel branding", icon: "Footprints" },
      { title: "Outdoor Gear", description: "Waterproof labels for technical equipment", icon: "Mountain" },
      { title: "Sportswear", description: "Performance apparel brand marks", icon: "Dumbbell" },
      { title: "Accessories", description: "Caps, belts, and fashion accessories", icon: "Watch" },
      { title: "Workwear", description: "Durable labels for industrial uniforms", icon: "HardHat" },
      { title: "Luxury Goods", description: "Premium brand marks for leather goods", icon: "Crown" },
    ],
    faqs: [
      { question: "What is TPU and why is it used for labels?", answer: "Thermoplastic Polyurethane is a flexible polymer that combines the best properties of rubber and plastic — soft to touch, dimensionally stable, and highly resistant to abrasion, water, and UV light. These properties make it ideal for brand labels that need to survive heavy use." },
      { question: "Can TPU labels be debossed with fine detail?", answer: "Yes — our precision moulds can replicate fine line detail down to 0.3mm. Complex logos, wordmarks, and graphic elements all deboss cleanly in TPU." },
      { question: "Are TPU labels the same as PVC labels?", answer: "Similar applications but different materials. TPU is more flexible, eco-friendlier, and phthalate-free. PVC is harder and lower cost. We recommend TPU for premium brands and eco-compliance requirements." },
      { question: "How are TPU labels attached to garments?", answer: "Sew-on (perforated edge), heat bonding (TPU is self-adhesive under heat), or mechanical fixings (rivets, studs). We design the attachment method to your application." },
      { question: "Can I get metallic colour TPU labels?", answer: "Yes — metallic gold, silver, bronze, and chrome-effect TPU labels are available through pigment mixing and foil-inlay techniques." },
      { question: "Are TPU labels UV resistant?", answer: "Yes — our UV-stabilised TPU formulation resists fading and yellowing for outdoor and technical apparel applications. Salt spray and chlorine resistance also available." },
      { question: "What is the turnaround time for custom TPU labels?", answer: "Mould creation takes 10–14 days for the first order. Repeat orders from existing moulds: 7–10 days. Rush production available." },
      { question: "Are your TPU labels eco-friendly?", answer: "Our TPU labels are phthalate-free and REACH-compliant. Bio-based TPU (30–60% bio content) is available for brands with sustainability commitments." },
      { question: "Can TPU labels include raised text and graphics simultaneously?", answer: "Yes — multi-level debossing allows combined raised text, sunken backgrounds, and textured surfaces in a single label design." },
      { question: "What is the MOQ for TPU labels?", answer: "300 pieces per design including mould cost. For existing standard moulds, MOQ is 100 pieces. Mould cost is a one-time investment and waived on repeat orders." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85&auto=format&fit=crop", alt: "TPU label on sneaker", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=85&auto=format&fit=crop", alt: "3D rubber brand label", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85&auto=format&fit=crop", alt: "TPU label on bag", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=85&auto=format&fit=crop", alt: "Sportswear TPU branding", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&q=85&auto=format&fit=crop", alt: "Embossed TPU label detail", width: 600, height: 400 },
    ],
    relatedProducts: ["silicone-labels", "leather-labels", "heat-transfer-labels", "embroidered-badges", "pvc-patches"],
    schemas: makeSchemas("TPU Labels", "tpu-labels", "Premium TPU label manufacturer Vasai Mumbai for sportswear, bags and footwear.", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85", []),
    prevProduct: "heat-transfer-labels",
    nextProduct: "silicone-labels",
  },

  // 6. SILICONE LABELS
  {
    id: "silicone-labels",
    slug: "silicone-labels",
    name: "Silicone Labels",
    category: "Specialty Labels",
    seoTitle: "Silicone Labels Manufacturer India | Soft PVC Free Labels | SKL",
    metaDescription: "Custom silicone label manufacturer Vasai Mumbai. Gel-soft 3D labels for premium sportswear, kids & luxury brands. Eco-safe, heat-bonded. Low MOQ. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/silicone-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["silicone labels manufacturer india", "gel labels sportswear", "silicone patches custom", "soft rubber labels"],
    hero: {
      heading: "Silicone Labels — Gel-Soft Precision",
      subtitle: "Skin-safe, chemical-free, dimensionally rich. The label of tomorrow's most responsible luxury brands.",
      badge: "Specialty Labels",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "100%", label: "PVC-Free" },
      stat2: { value: "Gel-soft", label: "Tactile Finish" },
    },
    showcase: {
      heading: "Built for Silicone Label Excellence",
      description: "Liquid silicone is injected into precision engraved moulds to produce brand labels with a distinctive gel-like sheen and soft tactile quality. Completely PVC and phthalate-free, silicone labels are the eco-luxury choice — safe for children, safe for skin, safe for the planet.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Material", value: "Liquid silicone (100% PVC-free)", icon: "Layers" },
        { label: "Finish", value: "Gel-gloss, matte, translucent", icon: "Sparkles" },
        { label: "Attachment", value: "Heat bond, sew-on, rivet", icon: "Link" },
        { label: "Safety", value: "FDA-grade, skin-contact safe", icon: "Shield" },
        { label: "Colours", value: "Pantone matched, translucent options", icon: "Palette" },
        { label: "Temperature", value: "-40°C to +200°C stable", icon: "Thermometer" },
        { label: "Flexibility", value: "300% stretch resistance", icon: "Zap" },
        { label: "MOQ", value: "300 pcs per design", icon: "Package" },
      ],
    },
    applications: commonApplications,
    faqs: [
      { question: "What makes silicone labels different from PVC?", answer: "Silicone is a naturally derived polymer that is phthalate-free, BPA-free, and safe for direct skin contact including infants. PVC requires plasticisers that may not meet modern eco regulations. Silicone is the premium, compliant alternative." },
      { question: "Are silicone labels suitable for children's clothing?", answer: "Yes — silicone labels are FDA-grade, OEKO-TEX certified, and safe for baby and children's garments. They are commonly used by leading kidswear brands globally." },
      { question: "Can silicone labels withstand high-temperature washing?", answer: "Silicone is stable from -40°C to +200°C, making it suitable for industrial laundering, autoclave sterilisation, and high-temperature sportswear washing cycles." },
      { question: "Do you offer transparent/translucent silicone labels?", answer: "Yes — translucent and clear silicone labels create a distinctive floating-logo effect on dark fabrics. Combined with metallic pigments, they produce a premium gel-chrome appearance." },
      { question: "How are silicone labels manufactured?", answer: "Liquid silicone is injected into CNC-engraved aluminium moulds at controlled temperature. Multi-colour labels use separate pigmented pours with precision registration, then cured as a single piece." },
      { question: "Are silicone labels eco-friendly?", answer: "Silicone is inert, non-toxic, and fully recyclable. It does not leach chemicals into waterways and has a significantly lower environmental footprint than PVC. We recommend it for brands with B Corp or sustainability goals." },
      { question: "Can the label include both raised and inset elements?", answer: "Yes — multi-depth moulds allow embossed text combined with debossed backgrounds and inlaid colour channels in a single silicone label unit." },
      { question: "What is the lead time for silicone labels?", answer: "First-time mould creation takes 12–15 days. Repeat production from existing moulds ships in 7–10 days. Expedited production available." },
      { question: "Can silicone labels be applied with a heat press?", answer: "Yes — silicone labels bond directly to fabric under heat and pressure, eliminating sewn edges. Application: 160°C, 12 seconds, medium pressure." },
      { question: "What brands use silicone labels?", answer: "Major international sportswear, yoga apparel, and luxury kidswear brands use silicone labels. If you require confidential client references, we are happy to share under NDA." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=85&auto=format&fit=crop", alt: "Silicone label gel finish", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=85&auto=format&fit=crop", alt: "Silicone label on activewear", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=85&auto=format&fit=crop", alt: "Eco silicone brand label", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=85&auto=format&fit=crop", alt: "Sportswear silicone branding", width: 600, height: 400 },
    ],
    relatedProducts: ["tpu-labels", "heat-transfer-labels", "leather-labels", "embroidered-badges", "printed-labels"],
    schemas: makeSchemas("Silicone Labels", "silicone-labels", "Custom silicone label manufacturer Vasai Mumbai for premium sportswear and kidswear brands.", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=85", []),
    prevProduct: "tpu-labels",
    nextProduct: "leather-labels",
  },

  // 7. LEATHER LABELS
  {
    id: "leather-labels",
    slug: "leather-labels",
    name: "Leather Labels",
    category: "Luxury Labels",
    seoTitle: "Leather Labels Manufacturer India | Debossed Leather Patches | SKL",
    metaDescription: "Custom leather label manufacturer Vasai Mumbai. Genuine & vegan leather patches, debossed brand marks for denim, bags & luxury fashion. Low MOQ. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/leather-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["leather labels manufacturer india", "leather patches custom", "debossed leather brand tags", "genuine leather labels"],
    hero: {
      heading: "Leather Labels — Heritage in Every Impression",
      subtitle: "Genuine and vegan leather, debossed with brand marks that deepen with age. The label that tells a story.",
      badge: "Luxury Labels",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "2mm", label: "Deboss Depth" },
      stat2: { value: "Vegan", label: "Option Available" },
    },
    showcase: {
      heading: "Built for Leather Label Excellence",
      description: "Our leather labels are die-cut and hot-debossed from full-grain, corrected-grain, and premium vegan leather. Each label is an artisan piece — embossed with brand marks using brass dies under hydraulic pressure, creating deep, permanent impressions that gain character with wear.",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Material", value: "Full-grain / vegan leather", icon: "Layers" },
        { label: "Finish", value: "Natural, dyed, burnished edge", icon: "Sparkles" },
        { label: "Deboss", value: "Hot & cold, 0.5–3mm depth", icon: "Stamp" },
        { label: "Tanning", value: "Vegetable / chrome-free options", icon: "Leaf" },
        { label: "Colours", value: "Natural tan, black, navy, custom", icon: "Palette" },
        { label: "Attachment", value: "Sew-on, rivet, adhesive", icon: "Link" },
        { label: "Sizes", value: "Custom shapes, up to 80×120mm", icon: "Ruler" },
        { label: "MOQ", value: "100 pcs", icon: "Package" },
      ],
    },
    applications: [
      { title: "Denim & Jeans", description: "Classic leather back-patch branding", icon: "Shirt" },
      { title: "Leather Goods", description: "Wallets, belts, and leather accessories", icon: "Briefcase" },
      { title: "Luxury Bags", description: "Premium debossed brand marks", icon: "ShoppingBag" },
      { title: "Premium Footwear", description: "Tongue and counter branding", icon: "Footprints" },
      { title: "Workwear", description: "Heavy-duty identification labels", icon: "HardHat" },
      { title: "Heritage Fashion", description: "Classic tailoring and outerwear", icon: "Crown" },
      { title: "Home Textiles", description: "Furniture and bedding labels", icon: "Home" },
      { title: "Corporate Gifts", description: "Premium branded merchandise", icon: "Gift" },
    ],
    faqs: [
      { question: "What types of leather do you use for labels?", answer: "We work with full-grain cowhide, corrected-grain leather, split leather, and premium PU/PVC vegan leather. Sustainable vegetable-tanned and chrome-free leathers are available for eco-conscious brands." },
      { question: "What is the difference between hot debossing and cold debossing?", answer: "Hot debossing uses heated brass dies to create permanent, sharp impressions with a burnished edge — the classic leather label look. Cold debossing produces softer impressions, better suited for delicate leathers or gilded finishes." },
      { question: "Can you print on leather labels?", answer: "Yes — foil printing, screen printing, and digital UV printing are all compatible with leather substrates. Metallic foil (gold, silver, rose gold) on dark leather is a particularly popular premium option." },
      { question: "Are vegan leather labels as durable as genuine leather?", answer: "Our premium microfibre PU vegan leather is highly durable — comparable to corrected-grain genuine leather for most applications. It offers superior consistency and is fully animal-free." },
      { question: "What shapes can leather labels be cut to?", answer: "Standard rectangular and arch shapes are our most common. Die-cut custom shapes — shields, crests, ovals, and brand-specific silhouettes — are available with our in-house die tooling." },
      { question: "How are leather labels attached to denim?", answer: "The most common methods are sew-on (perforated or stitched), double-cap rivet, and adhesive backing. For denim jeans, sew-on with a contrasting stitch is the authentic heritage method." },
      { question: "Do your leather labels age and develop patina?", answer: "Full-grain and vegetable-tanned leather labels will develop natural patina with use — this is considered a feature for heritage and luxury brands. Corrected-grain and vegan leathers maintain consistent appearance over time." },
      { question: "Can the leather label include foil and deboss combined?", answer: "Yes — combination labels with hot foil stamping and debossed text/logo are a premium finish. Commonly seen on luxury denim and high-end accessories." },
      { question: "What is the minimum order quantity?", answer: "100 pieces for most leather label styles. Custom die creation is a one-time cost included in sampling or waived on orders above 500 pieces." },
      { question: "Do you supply leather labels for export markets?", answer: "Yes — we supply to export houses and direct international brands. REACH-compliant, azo-dye-free leather available for EU market requirements." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85&auto=format&fit=crop", alt: "Leather label deboss detail", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=85&auto=format&fit=crop", alt: "Leather patch on denim", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=85&auto=format&fit=crop", alt: "Premium leather brand label", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=85&auto=format&fit=crop", alt: "Luxury bag leather label", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=85&auto=format&fit=crop", alt: "Leather label collection", width: 600, height: 400 },
    ],
    relatedProducts: ["woven-labels", "tpu-labels", "embroidered-badges", "hang-tags", "silicone-labels"],
    schemas: makeSchemas("Leather Labels", "leather-labels", "Custom leather label manufacturer Vasai Mumbai for denim, bags and luxury fashion.", "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=85", []),
    prevProduct: "silicone-labels",
    nextProduct: "embroidered-badges",
  },

  // 8. EMBROIDERED BADGES
  {
    id: "embroidered-badges",
    slug: "embroidered-badges",
    name: "Embroidered Badges",
    category: "Specialty Labels",
    seoTitle: "Embroidered Badges Manufacturer India | Custom Patches | SKL",
    metaDescription: "Custom embroidered badge & patch manufacturer Vasai Mumbai. Iron-on, sew-on patches for fashion, uniforms & sportswear. 15+ thread colours. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/embroidered-badges",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["embroidered badges manufacturer india", "custom embroidered patches", "iron on patches india", "embroidered labels"],
    hero: {
      heading: "Embroidered Badges — Raised in Thread",
      subtitle: "Stitch-by-stitch precision. Custom embroidered patches that carry brand identity with dimensional texture.",
      badge: "Specialty Labels",
      image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "15+", label: "Thread Colours" },
      stat2: { value: "80%", label: "Max Coverage" },
    },
    showcase: {
      heading: "Built for Embroidered Badge Excellence",
      description: "Our computer-controlled Tajima embroidery machines digitise and embroider your artwork with up to 80% thread coverage on a merrowed, heat-cut, or laser-cut edge. Available iron-on, sew-on, or velcro-backed for maximum versatility across fashion, uniform, and corporate applications.",
      image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Machine", value: "Tajima multi-head embroidery", icon: "Settings" },
        { label: "Thread", value: "Rayon / polyester, 15+ colours", icon: "Layers" },
        { label: "Coverage", value: "Up to 80% fill coverage", icon: "Grid3x3" },
        { label: "Edge Finish", value: "Merrowed, heat-cut, laser-cut", icon: "Scissors" },
        { label: "Backing", value: "Iron-on, sew-on, velcro", icon: "Link" },
        { label: "Base Fabric", value: "Twill, felt, organza", icon: "Shirt" },
        { label: "Sizes", value: "25mm–200mm, custom shapes", icon: "Ruler" },
        { label: "MOQ", value: "50 pcs per design", icon: "Package" },
      ],
    },
    applications: [
      { title: "Fashion Brands", description: "Premium embroidered chest and sleeve patches", icon: "Shirt" },
      { title: "School Uniforms", description: "Crest and house badge embroidery", icon: "GraduationCap" },
      { title: "Corporate Uniforms", description: "Branded staff uniform badges", icon: "Building2" },
      { title: "Sports Teams", description: "Club crest and name patches", icon: "Trophy" },
      { title: "Military & Police", description: "Rank insignia and unit patches", icon: "Shield" },
      { title: "Streetwear", description: "Collectible embroidered graphics", icon: "Star" },
      { title: "Workwear", description: "Durable safety and ID badges", icon: "HardHat" },
      { title: "Luxury Accessories", description: "Premium cap and bag embellishments", icon: "Crown" },
    ],
    faqs: [
      { question: "What is the process for creating a custom embroidered badge?", answer: "Share your artwork (CDR, AI, EPS, or PDF). Our digitisers convert it to embroidery file format (.DST). We produce a digital proof and physical sample for approval before bulk production." },
      { question: "How many thread colours can an embroidered badge use?", answer: "Up to 15 thread colours in a single badge. For more complex multi-colour designs, we can split into sections. Thread is Pantone TPX matched from our inventory of 500+ shades." },
      { question: "What edge finishing options are available?", answer: "Merrowed edge (classic rolled border), heat-cut (clean flat edge following the badge shape), laser-cut (ultra-precise custom shapes), and woven edge (integrated clean border)." },
      { question: "What backing options do you provide?", answer: "Iron-on (heat-activated adhesive), plain sew-on, velcro loop backing (hook sold separately), and self-adhesive peel-and-stick for temporary applications." },
      { question: "What base fabrics are available for embroidered patches?", answer: "Polyester twill (most common — excellent for fine detail), felt (soft, thick, vintage aesthetic), organza (transparent, ethereal look), and denim twill for rugged applications." },
      { question: "What is the minimum order quantity?", answer: "50 pieces per design — one of the lowest MOQs in the industry. Ideal for limited edition fashion drops, school batches, and corporate events." },
      { question: "Can you embroider photographic or gradient designs?", answer: "True photographic embroidery is limited by thread grain size. We use high-density satin stitch and colour blending to approximate gradients. For photographic quality, we recommend woven labels or heat transfer alternatives." },
      { question: "Are embroidered badges suitable for caps?", answer: "Yes — flat embroidery for structured caps and 3D puff embroidery for raised logo effects on caps. Puff embroidery uses foam underlay to create a bold dimensional look." },
      { question: "How durable are embroidered badges?", answer: "Our embroidered badges are rated for 50+ industrial washes. Rayon thread offers superior sheen; polyester thread is preferred for high-wash applications like workwear and sportswear." },
      { question: "Do you digitise artwork in-house?", answer: "Yes — all digitising is done by our in-house team using Wilcom EmbroideryStudio software. No outsourcing, no delays. Digitising fee is waived on orders above 200 pieces." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&q=85&auto=format&fit=crop", alt: "Embroidered badge close-up", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=85&auto=format&fit=crop", alt: "Custom patch on jacket", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=85&auto=format&fit=crop", alt: "Embroidered badge collection", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=85&auto=format&fit=crop", alt: "Badge on sportswear", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=85&auto=format&fit=crop", alt: "Fashion embroidered patches", width: 600, height: 800, span: "tall" },
    ],
    relatedProducts: ["woven-labels", "leather-labels", "tpu-labels", "hang-tags", "printed-labels"],
    schemas: makeSchemas("Embroidered Badges", "embroidered-badges", "Custom embroidered badge and patch manufacturer Vasai Mumbai for fashion and uniforms.", "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&q=85", []),
    prevProduct: "leather-labels",
    nextProduct: "printed-labels",
  },

  // 9. PRINTED LABELS
  {
    id: "printed-labels",
    slug: "printed-labels",
    name: "Printed Labels",
    category: "Printed Labels",
    seoTitle: "Printed Labels Manufacturer India | Custom Garment Labels | SKL",
    metaDescription: "Premium printed label manufacturer Vasai Mumbai. Full-colour digital & screen printed labels for fashion, FMCG & garments. Low MOQ, fast turnaround. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/printed-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["printed labels manufacturer india", "custom printed labels", "garment printed labels", "digital print labels"],
    hero: {
      heading: "Printed Labels — Colour Without Compromise",
      subtitle: "Digital precision meets premium substrates. Labels printed with photographic fidelity for brands that demand perfection.",
      badge: "Printed Labels",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "CMYK+", label: "Full Spectrum" },
      stat2: { value: "300dpi", label: "Print Resolution" },
    },
    showcase: {
      heading: "Built for Printed Label Excellence",
      description: "From photographic gradients to solid corporate pantones, our digital and screen printing delivers accurate, consistent colour across every label in your run. We print on satin, woven, polyester, kraft, coated stock, and specialist substrates — matched to your brand and application.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Print Method", value: "Digital (inkjet), screen, offset", icon: "Printer" },
        { label: "Substrates", value: "Satin, woven, polyester, kraft", icon: "Layers" },
        { label: "Colour", value: "CMYK + Pantone spot", icon: "Palette" },
        { label: "Resolution", value: "1200 DPI digital", icon: "ScanLine" },
        { label: "Finish", value: "Gloss, matte, soft-touch, foil", icon: "Sparkles" },
        { label: "Sizes", value: "Any dimension, custom shape", icon: "Ruler" },
        { label: "Wash Resistance", value: "30–50+ washes depending on substrate", icon: "Droplets" },
        { label: "MOQ", value: "100 pcs digital / 500 pcs screen", icon: "Package" },
      ],
    },
    applications: commonApplications,
    faqs: [
      { question: "What is the difference between digital and screen printed labels?", answer: "Digital printing is ideal for complex designs, gradients, and short runs — no setup cost, photographic quality. Screen printing suits larger runs with solid Pantone colours, offering lower per-unit cost and excellent wash durability." },
      { question: "What substrates can you print on?", answer: "Satin ribbon, woven polyester, cotton twill, kraft paper, coated stock, transparent film, metallic foil paper, and specialty materials including velvet and cork." },
      { question: "Can you match exact Pantone colours?", answer: "Yes — for screen printing, we mix Pantone-matched inks to within ΔE < 2.0. For digital printing, we use colour profiles to achieve the closest reproducible match on each substrate." },
      { question: "What finishing options are available for printed labels?", answer: "Lamination (gloss, matte, soft-touch), UV spot varnish, hot foil stamping (gold, silver, holographic), embossing, die-cutting to custom shapes, and perforation." },
      { question: "Are printed labels suitable for garment care instructions?", answer: "Yes — printed satin or woven care labels are our most common product. We follow GINETEX, ASTM D5489, and ISO 3758 symbol standards. Multi-language care labels also produced." },
      { question: "How wash-resistant are printed labels?", answer: "Digital-printed satin labels withstand 30–40 washes. Screen-printed woven labels: 50+ washes. Substrate and ink system selection affects durability — we recommend the right combination for your wash requirements." },
      { question: "Do you offer variable data printing?", answer: "Yes — serial numbers, barcodes, QR codes, unique per-label text, and personalised details are all achievable with our digital printing setup." },
      { question: "What is the lead time for printed labels?", answer: "Standard orders: 5–7 working days. Rush: 2–3 days. Digital printing allows faster turnaround with no plate or screen setup." },
      { question: "Can I get samples before placing a bulk order?", answer: "Yes — printed label samples are available within 3–5 days. Digital proof provided within 24 hours of artwork approval." },
      { question: "What file formats do you accept?", answer: "AI, CDR, EPS, PDF (vector preferred), and high-resolution PNG/TIFF (300 DPI minimum). We provide pre-press checks and flag any resolution or colour issues before production." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=85&auto=format&fit=crop", alt: "Printed label colour detail", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=85&auto=format&fit=crop", alt: "Fashion brand printed labels", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=85&auto=format&fit=crop", alt: "Digital print label production", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=85&auto=format&fit=crop", alt: "Garment printed label collection", width: 600, height: 800, span: "tall" },
    ],
    relatedProducts: ["satin-labels", "woven-labels", "care-labels", "size-labels", "barcode-labels"],
    schemas: makeSchemas("Printed Labels", "printed-labels", "Premium printed label manufacturer Vasai Mumbai for fashion and garment brands.", "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=85", []),
    prevProduct: "embroidered-badges",
    nextProduct: "hang-tags",
  },

  // 10. HANG TAGS
  {
    id: "hang-tags",
    slug: "hang-tags",
    name: "Hang Tags",
    category: "Packaging",
    seoTitle: "Hang Tags Manufacturer India | Custom Garment Swing Tags | SKL",
    metaDescription: "Premium hang tag manufacturer Vasai Mumbai. Luxury swing tags for fashion brands — custom shape, foil, emboss, string. Low MOQ, global shipping. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/hang-tags",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["hang tags manufacturer india", "custom swing tags", "garment hang tags", "luxury hang tags fashion"],
    hero: {
      heading: "Hang Tags — First Impressions, Perfected",
      subtitle: "The first thing a customer touches. Make it count with precision-crafted swing tags that communicate brand authority.",
      badge: "Packaging",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "400gsm", label: "Premium Stock" },
      stat2: { value: "Foil+", label: "Luxury Finish" },
    },
    showcase: {
      heading: "Built for Hang Tag Excellence",
      description: "Printed on 300–600 GSM premium boards with hot foil stamping, embossing, spot UV, and specialty finishes that create undeniable tactile luxury. From minimalist kraft swing tags to multi-panel folded booklet tags — each design is an extension of your brand's retail story.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Paper Stock", value: "250–600 GSM, art board, kraft", icon: "FileText" },
        { label: "Print", value: "Offset, digital, full CMYK+", icon: "Printer" },
        { label: "Finishing", value: "Foil, emboss, spot UV, lamination", icon: "Sparkles" },
        { label: "Shapes", value: "Rectangular, arch, die-cut custom", icon: "Shapes" },
        { label: "String", value: "Cotton, jute, satin ribbon, elastic", icon: "Link" },
        { label: "Sizes", value: "Any size, custom die-cut", icon: "Ruler" },
        { label: "Eco Option", value: "FSC certified, recycled board", icon: "Leaf" },
        { label: "MOQ", value: "200 pcs", icon: "Package" },
      ],
    },
    applications: [
      { title: "Fashion & RTW", description: "Brand storytelling tags for clothing", icon: "Shirt" },
      { title: "Luxury Accessories", description: "Premium bags, shoes, jewellery", icon: "Crown" },
      { title: "Denim", description: "Heritage brand swing tags", icon: "Scissors" },
      { title: "Kidswear", description: "Fun, character-driven tags", icon: "Baby" },
      { title: "Export Houses", description: "Compliance info + brand tag", icon: "Globe" },
      { title: "Home Textiles", description: "Bedding and home goods tags", icon: "Home" },
      { title: "Eco Brands", description: "Recycled and kraft paper tags", icon: "Leaf" },
      { title: "Luxury Fragrances", description: "Ribbon-hung product storytelling", icon: "Sparkles" },
    ],
    faqs: [
      { question: "What paper stocks are available for hang tags?", answer: "Art board (gloss or matte), uncoated premium board, kraft (natural brown), textured laid paper, duplex board, and specialty papers including cotton fibre and recycled board. GSM range: 250 to 600." },
      { question: "What finishing options can be applied to hang tags?", answer: "Hot foil stamping (gold, silver, holographic, coloured), cold foil, embossing and debossing, spot UV varnish, full lamination (gloss, matte, soft-touch), perforating, die-cutting, and edge colouring." },
      { question: "What string or attachment options are available?", answer: "Cotton twine, jute string, satin ribbon, elastic loops, metallic string, and custom branded ribbons. Standard sizes 35cm loops or custom lengths. Brass, silver, or custom eyelets fitted." },
      { question: "Can hang tags include barcodes and pricing?", answer: "Yes — variable data including barcodes, QR codes, pricing, SKU numbers, and size information can be digitally printed as part of the tag design or added as adhesive secondary labels." },
      { question: "What is the minimum order quantity?", answer: "200 pieces per design for digital-print tags. 500 pieces for offset with specialty finishing. Lower quantities available for sampling." },
      { question: "Do you offer eco-friendly hang tags?", answer: "Yes — FSC-certified board, 100% recycled paper, seed paper (plantable tags), and soy-based inks are available. Popular with sustainable fashion brands and B Corp certified companies." },
      { question: "Can hang tags be multi-panel or booklet style?", answer: "Yes — folded 4-panel, 6-panel, and accordion booklet hang tags are available. Ideal for brand storytelling, care instructions in multiple languages, and sustainability messaging." },
      { question: "What shapes are available for die-cut hang tags?", answer: "Standard rectangular and arch shapes at no extra cost. Custom die-cut shapes — circles, shields, bottle shapes, garment silhouettes, and brand-specific forms — with one-time die tooling cost." },
      { question: "How quickly can you produce hang tags?", answer: "Digital print hang tags: 5–7 days. Offset with foil/emboss finishing: 10–14 days. Rush production in 3–5 days for standard designs." },
      { question: "Do you supply hang tags for luxury international brands?", answer: "Yes — we supply hang tags to luxury fashion brands exporting to Europe, North America, and the Middle East. NDA available on request for brand confidentiality." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=85&auto=format&fit=crop", alt: "Premium hang tag collection", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=85&auto=format&fit=crop", alt: "Fashion swing tag detail", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=85&auto=format&fit=crop", alt: "Luxury hang tag with foil", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=85&auto=format&fit=crop", alt: "Hang tags on garment rail", width: 600, height: 400 },
    ],
    relatedProducts: ["barcode-labels", "woven-labels", "printed-labels", "custom-packaging-labels", "size-labels"],
    schemas: makeSchemas("Hang Tags", "hang-tags", "Premium hang tag manufacturer Vasai Mumbai for luxury fashion and garment brands.", "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85", []),
    prevProduct: "printed-labels",
    nextProduct: "barcode-labels",
  },

  // 11. BARCODE LABELS
  {
    id: "barcode-labels",
    slug: "barcode-labels",
    name: "Barcode Labels",
    category: "Functional Labels",
    seoTitle: "Barcode Labels Manufacturer India | Custom Sticker Labels | SKL",
    metaDescription: "Custom barcode label manufacturer Vasai Mumbai. GS1, EAN, QR code labels for garments and retail. Thermal, digital print, durable adhesive. Low MOQ. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/barcode-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["barcode labels manufacturer india", "custom barcode stickers", "GS1 labels garment", "retail barcode labels"],
    hero: {
      heading: "Barcode Labels — Scan-Perfect Every Time",
      subtitle: "GS1-compliant, thermally-printed barcode labels engineered for zero-error scanning across global retail supply chains.",
      badge: "Functional Labels",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "GS1", label: "Compliant" },
      stat2: { value: "99.9%", label: "Scan Rate" },
    },
    showcase: {
      heading: "Built for Barcode Label Excellence",
      description: "Our barcode labels are produced on high-quality thermal and digital print stock with permanent or removable adhesive options. Engineered to the GS1 specification for consistent scanability across retail POS, warehouse WMS, and ecommerce fulfilment environments.",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Barcode Types", value: "EAN-13, UPC, Code 128, QR, Data Matrix", icon: "Barcode" },
        { label: "Print Method", value: "Thermal direct, thermal transfer, digital", icon: "Printer" },
        { label: "Adhesive", value: "Permanent, removable, freeze-grade", icon: "Layers" },
        { label: "Material", value: "Paper, polyester, polypropylene", icon: "FileText" },
        { label: "Compliance", value: "GS1 ISO/IEC 15416 verified", icon: "BadgeCheck" },
        { label: "Sizes", value: "Custom, standard retail sizes", icon: "Ruler" },
        { label: "Colours", value: "Black/white, full colour option", icon: "Palette" },
        { label: "MOQ", value: "500 pcs", icon: "Package" },
      ],
    },
    applications: [
      { title: "Retail Garments", description: "POS scanning and inventory", icon: "ShoppingBag" },
      { title: "Export Compliance", description: "Country of origin and HS code labels", icon: "Globe" },
      { title: "Warehouse & WMS", description: "Inventory tracking labels", icon: "Warehouse" },
      { title: "Ecommerce", description: "Fulfilment and dispatch labels", icon: "Package" },
      { title: "Fashion Brands", description: "Price tickets and swing tag barcodes", icon: "Tag" },
      { title: "FMCG", description: "Product identification labels", icon: "Boxes" },
      { title: "Textile Mills", description: "Roll and batch identification", icon: "Layers" },
      { title: "Quality Control", description: "In-process batch tracking", icon: "ClipboardCheck" },
    ],
    faqs: [
      { question: "What barcode formats do you print?", answer: "EAN-13, EAN-8, UPC-A, UPC-E, Code 39, Code 128, ITF-14, QR codes, Data Matrix, and PDF417. We can print any symbology to GS1 standards." },
      { question: "Are your barcodes GS1 compliant?", answer: "Yes — all our barcode labels are verified to ISO/IEC 15416 (linear) and ISO/IEC 15415 (2D) standards. We provide grade reports on request." },
      { question: "Can you print variable data barcodes?", answer: "Yes — unique serial numbers, sequential barcodes, and per-item variable data are supported through our digital barcode printing system." },
      { question: "What adhesive options are available?", answer: "Permanent (all-surface), removable (peel cleanly without residue), repositionable, freeze-grade for cold storage, and high-tack for rough surfaces." },
      { question: "Can barcode labels include brand design and colour?", answer: "Yes — full-colour digital printed labels with barcode are available. Commonly used as combined price/barcode/brand swing tag stickers." },
      { question: "What is the shelf life of your barcode labels?", answer: "Paper barcode labels: 2 years storage. Polyester and polypropylene: 5+ years. For outdoor or harsh environment applications, we use UV-resistant laminates." },
      { question: "Do you supply barcode labels for Amazon FBA?", answer: "Yes — we produce FNSKU and EAN Amazon FBA labels to their exact specifications. We can supply pre-applied or separate label rolls." },
      { question: "What roll sizes are available?", answer: "50mm, 76mm, and 100mm core rolls. Custom lengths available. Compatible with all major thermal label printers including Zebra, Honeywell, and TSC." },
      { question: "Can you supply pre-applied labels on garments?", answer: "For domestic clients, we offer label application services. For export clients, we provide labels in roll or sheet form for your labelling team or 3PL." },
      { question: "What is the minimum order quantity?", answer: "500 labels per design for standard orders. Digital printing allows cost-effective short runs. Thermal rolls typically supplied in 500–5000 label increments." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=600&q=85&auto=format&fit=crop", alt: "Barcode label scan detail", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=85&auto=format&fit=crop", alt: "Retail barcode labels", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=85&auto=format&fit=crop", alt: "Barcode label printing", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=85&auto=format&fit=crop", alt: "Garment barcode labels", width: 600, height: 400 },
    ],
    relatedProducts: ["hang-tags", "size-labels", "care-labels", "printed-labels", "rfid-labels"],
    schemas: makeSchemas("Barcode Labels", "barcode-labels", "Custom barcode label manufacturer Vasai Mumbai for garments and retail supply chains.", "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=800&q=85", []),
    prevProduct: "hang-tags",
    nextProduct: "size-labels",
  },

  // 12. SIZE LABELS
  {
    id: "size-labels",
    slug: "size-labels",
    name: "Size Labels",
    category: "Functional Labels",
    seoTitle: "Size Labels Manufacturer India | Garment Size Tags | SKL",
    metaDescription: "Custom size label manufacturer Vasai Mumbai. Woven, printed, and heat transfer size labels for all garment types. XS–5XL, custom sizing. Low MOQ. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/size-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["size labels manufacturer india", "garment size tags", "woven size labels", "custom sizing labels"],
    hero: {
      heading: "Size Labels — Precision Identification",
      subtitle: "Clear, consistent, and brand-matched. Size labels that work as hard in the stockroom as they do on the shop floor.",
      badge: "Functional Labels",
      image: "https://images.unsplash.com/photo-1589363460779-6d98bb51290f?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "XS–5XL", label: "Full Size Range" },
      stat2: { value: "3 types", label: "Print Methods" },
    },
    showcase: {
      heading: "Built for Size Label Excellence",
      description: "Size labels must be legible, consistent, and on-brand. We produce size labels in woven, printed satin, and heat transfer formats — each matched to your brand colour palette, font, and garment type. Available as individual tabs, loop-fold neck inserts, or adhesive stickers.",
      image: "https://images.unsplash.com/photo-1589363460779-6d98bb51290f?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Format", value: "Woven tab, printed satin, HT", icon: "Layers" },
        { label: "Sizes", value: "XS, S, M, L, XL, XXL–5XL, custom", icon: "Ruler" },
        { label: "Colours", value: "White, black, brand Pantone", icon: "Palette" },
        { label: "Attachment", value: "Sew-in, loop fold, adhesive", icon: "Link" },
        { label: "Width", value: "10mm, 13mm, 20mm standard", icon: "ScanLine" },
        { label: "Wash Resist", value: "50+ washes", icon: "Droplets" },
        { label: "Custom Text", value: "Numeric, alpha, EU/US/UK sizing", icon: "Type" },
        { label: "MOQ", value: "200 pcs per size", icon: "Package" },
      ],
    },
    applications: commonApplications,
    faqs: [
      { question: "What size label formats are available?", answer: "Woven polyester tabs (most durable), printed satin tabs (soft, full colour), heat transfer (tag-free, suitable for premium garments), and adhesive sticker size labels for retail hang tags." },
      { question: "Can you produce size labels in custom brand colours?", answer: "Yes — all size label formats are available in brand-matched Pantone colours. White text on black, black on white, and custom colourways are standard offerings." },
      { question: "Do you produce European and American sizing?", answer: "Yes — we produce labels in UK (6–22), US (XS–3XL), EU (34–54), numeric (28–42 for trousers), Italian (38–52), and any international sizing system." },
      { question: "Can size labels include the brand name?", answer: "Yes — combination size + brand labels are very common. 'Brand Name · Size M' in a single woven or printed label reduces overall label count and application cost." },
      { question: "What widths are available for size tabs?", answer: "Standard: 10mm, 13mm, 20mm, and 25mm. Custom widths available. Woven tabs typically come in 10mm and 13mm for loop-fold neck insertion." },
      { question: "Are size labels machine-washable?", answer: "Yes — all our size labels are rated for 50+ washes. Woven polyester labels are the most wash-durable; printed satin labels maintain legibility to 40+ washes at 40°C." },
      { question: "Can you produce children's sizing labels?", answer: "Yes — UK, EU, and age-based children's sizing (Age 2–16, 86–176cm, etc.) available in skin-safe OEKO-TEX certified materials." },
      { question: "What is the minimum order per size?", answer: "200 pieces per size designation. A full XS–XL run is a common order structure. We can split production across sizes within a single order for efficiency." },
      { question: "Can size labels include care instruction symbols?", answer: "For compact combination labels, basic care symbols (machine wash, dry clean, tumble dry) can be included alongside the size designation." },
      { question: "Do you offer rush production for size labels?", answer: "Yes — for in-stock standard white/black size labels, same-day dispatch is possible for local clients. Custom orders: 3–5 days for printed, 5–7 days for woven." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1589363460779-6d98bb51290f?w=600&q=85&auto=format&fit=crop", alt: "Garment size label collection", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=85&auto=format&fit=crop", alt: "Woven size labels on garment", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format&fit=crop", alt: "Size label tab detail", width: 600, height: 400 },
    ],
    relatedProducts: ["care-labels", "barcode-labels", "woven-labels", "satin-labels", "printed-labels"],
    schemas: makeSchemas("Size Labels", "size-labels", "Custom size label manufacturer Vasai Mumbai for all garment types and markets.", "https://images.unsplash.com/photo-1589363460779-6d98bb51290f?w=800&q=85", []),
    prevProduct: "barcode-labels",
    nextProduct: "care-labels",
  },

  // 13. CARE LABELS
  {
    id: "care-labels",
    slug: "care-labels",
    name: "Care Labels",
    category: "Functional Labels",
    seoTitle: "Care Labels Manufacturer India | Wash Care Labels | SKL",
    metaDescription: "Garment care label manufacturer Vasai Mumbai. GINETEX compliant wash care labels for export fashion. Multi-language, ISO symbols, satin & woven. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/care-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["care labels manufacturer india", "wash care labels", "garment care instruction labels", "GINETEX labels"],
    hero: {
      heading: "Care Labels — Compliance Meets Craft",
      subtitle: "GINETEX-compliant care instruction labels that protect your garments, your customers, and your brand from mishandling.",
      badge: "Functional Labels",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "GINETEX", label: "ISO Compliant" },
      stat2: { value: "15+", label: "Languages" },
    },
    showcase: {
      heading: "Built for Care Label Excellence",
      description: "We produce care labels to GINETEX (EU), ASTM D5489 (US), and ISO 3758 standards with all recognised care symbols. Available in satin, woven, and printed formats — in single or multiple languages — with content approved by your compliance team before production.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Standards", value: "GINETEX, ASTM D5489, ISO 3758", icon: "BadgeCheck" },
        { label: "Symbols", value: "Full GINETEX symbol set", icon: "Layers" },
        { label: "Languages", value: "15+ languages available", icon: "Globe" },
        { label: "Material", value: "Satin, woven, cotton, tyvek", icon: "FileText" },
        { label: "Attachment", value: "Sew-in, hem, side seam", icon: "Link" },
        { label: "Ink", value: "Wash-fast, OEKO-TEX approved", icon: "Droplets" },
        { label: "Sizes", value: "25mm, 30mm, 50mm, custom", icon: "Ruler" },
        { label: "MOQ", value: "200 pcs per design", icon: "Package" },
      ],
    },
    applications: commonApplications,
    faqs: [
      { question: "What care label standards do you comply with?", answer: "We comply with GINETEX (European standard, ISO 3758), ASTM D5489 (US standard), and ISO/CAN standards. Country-specific requirements for Japan (JIS L0217), China (GB/T 8685), and Australia are also available." },
      { question: "Can you produce care labels in multiple languages?", answer: "Yes — we produce multi-language care labels covering English, French, German, Spanish, Italian, Portuguese, Arabic, Japanese, Chinese, Korean, and 15+ languages. Ideal for export and multi-territory brands." },
      { question: "What are the standard care instruction symbols?", answer: "GINETEX symbols cover washing (machine/hand wash, temperatures), bleaching, drying (tumble/line/flat), ironing (temperatures), and dry cleaning (solvents). We supply the complete symbol set licensed for use." },
      { question: "What materials are available for care labels?", answer: "Satin (soft against skin, most common), woven polyester (durable), cotton (natural, for eco brands), tyvek (waterproof, for outdoor and technical clothing), and printed paper (for booklet labels)." },
      { question: "Are care labels mandatory for export garments?", answer: "Yes — garments exported to the EU must comply with EC Regulation 1007/2011 (fibre labelling), US imports require FTC Care Labeling Rule compliance, and UK post-Brexit follows similar standards. We guide you through requirements per market." },
      { question: "Can care labels include fibre content information?", answer: "Yes — fibre composition (e.g., '100% Cotton', '80% Polyester 20% Elastane') is commonly combined with care symbols on the same label. We produce combination labels to all required regulatory formats." },
      { question: "Can I supply my own care label text for you to produce?", answer: "Yes — you provide the care content (symbols, fibre content, country of origin, languages) and we set it to your brand standards, typeset to match your garment label aesthetic." },
      { question: "What is the legibility standard for care label text?", answer: "EU regulations require care label text to be legible, indelible, and durable for the life of the garment. Our satin and woven care labels meet all legibility and wash durability requirements." },
      { question: "Do care labels need to remain legible after washing?", answer: "Yes — legally required to remain legible for the garment's life. All our care labels are printed/woven with wash-fast inks and materials that maintain legibility through 50+ washes." },
      { question: "What is your lead time for care labels?", answer: "5–7 days for standard printed care labels. 7–10 days for woven care labels. Rush: 3 days for printed variants. We provide artwork proof within 24 hours." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=85&auto=format&fit=crop", alt: "Care label symbols detail", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format&fit=crop", alt: "Wash care labels on garment", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=85&auto=format&fit=crop", alt: "Multi-language care label", width: 600, height: 400 },
    ],
    relatedProducts: ["size-labels", "satin-labels", "woven-labels", "printed-labels", "barcode-labels"],
    schemas: makeSchemas("Care Labels", "care-labels", "GINETEX compliant care label manufacturer Vasai Mumbai for export fashion brands.", "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=85", []),
    prevProduct: "size-labels",
    nextProduct: "custom-packaging-labels",
  },

  // 14. CUSTOM PACKAGING LABELS
  {
    id: "custom-packaging-labels",
    slug: "custom-packaging-labels",
    name: "Custom Packaging Labels",
    category: "Packaging",
    seoTitle: "Custom Packaging Labels India | Premium Product Labels | SKL",
    metaDescription: "Custom packaging label manufacturer Vasai Mumbai. Premium product labels for boxes, bags & packaging. Foil, emboss, custom shapes. FSC certified. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/custom-packaging-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["custom packaging labels india", "premium product labels", "packaging stickers manufacturer", "brand labels packaging"],
    hero: {
      heading: "Packaging Labels — Unboxing Elevated",
      subtitle: "From premium polybag stickers to luxury box seals — packaging labels that transform unboxing into a brand moment.",
      badge: "Packaging",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "FSC", label: "Certified Option" },
      stat2: { value: "Foil+", label: "Premium Finish" },
    },
    showcase: {
      heading: "Built for Packaging Label Excellence",
      description: "Packaging labels span from functional polybag identification stickers to artisan wax seals and hot-foil branded box closures. We engineer each label to its substrate and purpose — ensuring adhesion, aesthetics, and compliance from factory floor to retail shelf.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Substrates", value: "Paper, polyester, polyprop, foil", icon: "Layers" },
        { label: "Adhesive", value: "Permanent, removable, tamper-evident", icon: "Link" },
        { label: "Print", value: "Offset, digital, flexo", icon: "Printer" },
        { label: "Finishing", value: "Foil, emboss, spot UV, die-cut", icon: "Sparkles" },
        { label: "Shapes", value: "Custom die-cut any shape", icon: "Shapes" },
        { label: "Eco Options", value: "FSC, recycled, compostable", icon: "Leaf" },
        { label: "Sizes", value: "From 10mm to A4 sheet", icon: "Ruler" },
        { label: "MOQ", value: "500 pcs", icon: "Package" },
      ],
    },
    applications: [
      { title: "Retail Packaging", description: "Box, bag and pouch labels", icon: "Package" },
      { title: "Polybag Labels", description: "Garment polybag identification", icon: "ShoppingBag" },
      { title: "Box Seals", description: "Premium brand closure stickers", icon: "Seal" },
      { title: "Gift Packaging", description: "Luxury gift box branding", icon: "Gift" },
      { title: "Tissue Stickers", description: "Brand tissue paper seals", icon: "Layers" },
      { title: "Mailer Bags", description: "Ecommerce dispatch labels", icon: "Mail" },
      { title: "Product Bottles", description: "FMCG and cosmetics labelling", icon: "Cylinder" },
      { title: "Eco Packaging", description: "Sustainable brand labelling", icon: "Leaf" },
    ],
    faqs: [
      { question: "What types of packaging labels do you manufacture?", answer: "Polybag identification labels, box closure seals, tissue paper stickers, thank-you card labels, tamper-evident seals, promotional stickers, FMCG product labels, and custom shape brand stickers." },
      { question: "What substrates are available?", answer: "Coated paper, uncoated natural paper, BOPP (biaxially oriented polypropylene), polyester, metallic foil paper, clear transparent film, kraft paper, and compostable bio-film." },
      { question: "Can you produce tamper-evident packaging labels?", answer: "Yes — void-pattern labels that reveal 'OPENED' or 'VOID' text when removed are available in custom sizes. Used for premium product authentication and anti-tampering." },
      { question: "What adhesive options are there?", answer: "Permanent all-surface, removable (clean removal from most substrates), repositionable, ultra-high-tack for rough surfaces, and cold-temperature adhesive for refrigerated goods." },
      { question: "Can packaging labels include QR codes?", answer: "Yes — QR codes, short URLs, and NFC triggers can be integrated into packaging label design for product authentication, brand storytelling, and digital engagement." },
      { question: "Do you offer eco-friendly packaging labels?", answer: "Yes — FSC-certified paper, recycled content substrates, compostable PLA film, and water-based ink options are available for sustainability-committed brands." },
      { question: "Can you produce die-cut stickers in custom shapes?", answer: "Yes — any custom shape is achievable with our in-house die cutting. Common shapes: circles, squares, hexagons, custom brand icons, and irregular organic shapes." },
      { question: "What is the minimum order quantity?", answer: "500 pieces for most packaging label types. Digital printing allows shorter runs. Sheet labels (A4/SRA3) available from 100 sheets." },
      { question: "Can packaging labels be printed with variable data?", answer: "Yes — batch numbers, expiry dates, serial codes, and per-item unique data are printed via variable digital printing on all label formats." },
      { question: "What is your lead time?", answer: "Standard packaging labels: 5–7 days. Complex foil/emboss labels: 10–14 days. Rush production available." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=85&auto=format&fit=crop", alt: "Premium packaging label", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=85&auto=format&fit=crop", alt: "Custom brand sticker seal", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1558618047-3c8b2e5d5f44?w=600&q=85&auto=format&fit=crop", alt: "Packaging labels collection", width: 600, height: 400 },
    ],
    relatedProducts: ["hang-tags", "barcode-labels", "printed-labels", "rfid-labels", "size-labels"],
    schemas: makeSchemas("Custom Packaging Labels", "custom-packaging-labels", "Custom packaging label manufacturer Vasai Mumbai for retail and luxury brands.", "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85", []),
    prevProduct: "care-labels",
    nextProduct: "rfid-labels",
  },

  // 15. RFID LABELS
  {
    id: "rfid-labels",
    slug: "rfid-labels",
    name: "RFID Labels",
    category: "Smart Labels",
    seoTitle: "RFID Labels Manufacturer India | Smart Garment Tags | SKL",
    metaDescription: "Custom RFID label manufacturer Vasai Mumbai. UHF & HF RFID labels for garment tracking, inventory & anti-counterfeit. ISO certified, global brands. Est. 1999.",
    canonicalUrl: "https://products.shreekrishnalabels.in/rfid-labels",
    ogImage: "https://products.shreekrishnalabels.in/og-image.png",
    keywords: ["RFID labels manufacturer india", "RFID garment tags", "smart labels apparel", "UHF RFID labels"],
    hero: {
      heading: "RFID Labels — Intelligence Woven In",
      subtitle: "Smart labels that talk to your systems. Real-time inventory, anti-counterfeit protection, and frictionless retail — in a single label.",
      badge: "Smart Labels",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85&auto=format&fit=crop",
      stat1: { value: "UHF+HF", label: "Both Standards" },
      stat2: { value: "99.9%", label: "Read Rate" },
    },
    showcase: {
      heading: "Built for RFID Label Excellence",
      description: "Our RFID labels integrate NXP and Impinj UHF/HF chips with precision-printed antennas into garment labels, hang tags, and packaging — enabling inventory visibility from factory to store floor. Programmed to your EPC standard and brand specification.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85&auto=format&fit=crop",
      specs: [
        { label: "Frequency", value: "UHF 860–960 MHz / HF 13.56 MHz", icon: "Radio" },
        { label: "Chip", value: "NXP, Impinj, Alien (options)", icon: "Cpu" },
        { label: "Memory", value: "128–512 bit EPC, user memory", icon: "HardDrive" },
        { label: "Read Range", value: "UHF: 3–8m, HF: 1–10cm", icon: "Wifi" },
        { label: "Compliance", value: "EPC Gen 2 / ISO 15693", icon: "BadgeCheck" },
        { label: "Format", value: "Woven label, hang tag, sticker", icon: "Layers" },
        { label: "Encoding", value: "Pre-encoded or blank", icon: "Code" },
        { label: "MOQ", value: "500 pcs", icon: "Package" },
      ],
    },
    applications: [
      { title: "Retail Inventory", description: "Real-time stock visibility in-store", icon: "BarChart3" },
      { title: "Anti-Counterfeit", description: "Brand protection and authentication", icon: "Shield" },
      { title: "Supply Chain", description: "Factory to distribution tracking", icon: "Truck" },
      { title: "Omnichannel", description: "Click and collect, BOPIS enablement", icon: "RefreshCcw" },
      { title: "Luxury Fashion", description: "Product authentication and CRM", icon: "Crown" },
      { title: "Contactless Checkout", description: "Self-service POS integration", icon: "CreditCard" },
      { title: "Returns Management", description: "Automated returns processing", icon: "RotateCcw" },
      { title: "Smart Fitting Room", description: "Item-awareness in dressing rooms", icon: "Scan" },
    ],
    faqs: [
      { question: "What is an RFID garment label?", answer: "An RFID label integrates a microchip and antenna into a standard garment label. The chip stores a unique product identifier that can be read wirelessly — enabling automated inventory counting, anti-counterfeit verification, and supply chain tracking without line-of-sight scanning." },
      { question: "What RFID frequency should I use for garments?", answer: "UHF (860–960 MHz) is standard for retail inventory — long read range (3–8m), fast bulk scanning through handheld reader or RFID tunnel. HF (13.56 MHz, NFC) is used for consumer-facing authentication (smartphone scanning), with shorter range. Many brands use both." },
      { question: "Can the RFID label look like a normal garment label?", answer: "Yes — RFID inlays can be integrated into woven labels, satin labels, and hang tags with no visual difference from standard labels. The chip and antenna are embedded in the label substrate and invisible to consumers." },
      { question: "What information is stored on the RFID chip?", answer: "Typically: EPC (Electronic Product Code) encoding product type, serial number, and brand. Additional data (colour, size, origin, manufacture date) can be stored in user memory. The EPC links to your product database for full item-level intelligence." },
      { question: "Can RFID labels be used for anti-counterfeiting?", answer: "Yes — NFC labels in particular enable consumers to tap their smartphone to verify product authenticity against a brand-hosted database. Combined with serialisation (unique per-item EPC), this provides strong anti-counterfeit capability." },
      { question: "Are RFID labels durable in washing?", answer: "Our waterproof RFID labels withstand 50+ machine washes at 40°C. Chips and antennas are encapsulated and tested to ISO 18000-6C wash durability standards." },
      { question: "Do you pre-encode RFID labels?", answer: "Yes — we can pre-encode labels with your EPC data, serialised in sequence or from your provided encoding file. Labels are supplied ready to integrate into your system." },
      { question: "What is the minimum order for RFID labels?", answer: "500 pieces for standard UHF woven RFID labels. Lower minimums for NFC sticker labels. First order includes integration support and reader compatibility testing." },
      { question: "Which major retail systems are your RFID labels compatible with?", answer: "Compatible with Zebra, Impinj, Alien, and Honeywell readers. EPC Gen 2 standard ensures compatibility with all major retail RFID systems including Nedap, Detego, and SML." },
      { question: "What support do you provide for RFID implementation?", answer: "We provide chip selection guidance, antenna design optimisation for your specific garment type, encoding specification support, and reader compatibility testing. Our RFID team has deployed solutions for 50+ retail brands." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=85&auto=format&fit=crop", alt: "RFID label chip detail", width: 600, height: 800, span: "tall" },
      { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=85&auto=format&fit=crop", alt: "Smart RFID garment tag", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format&fit=crop", alt: "RFID enabled woven label", width: 600, height: 400 },
      { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=85&auto=format&fit=crop", alt: "Retail RFID inventory scanning", width: 600, height: 400 },
    ],
    relatedProducts: ["barcode-labels", "hang-tags", "woven-labels", "custom-packaging-labels", "printed-labels"],
    schemas: makeSchemas("RFID Labels", "rfid-labels", "Custom RFID label manufacturer Vasai Mumbai for smart garment tracking and retail inventory.", "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85", []),
    prevProduct: "custom-packaging-labels",
    nextProduct: "woven-labels",
  },
];

export const getProductBySlug = (slug: string): ProductData | undefined =>
  products.find(p => p.slug === slug);

export const getRelatedProducts = (slugs: string[]): ProductData[] =>
  slugs.map(slug => products.find(p => p.slug === slug)).filter(Boolean) as ProductData[];
