import type { Product, Guide, ProductCategory } from '@/types/domain';
import { Zap, Wind, Cable, CircuitBoard } from 'lucide-react';

export const productCategories: ProductCategory[] = [
  { id: 'fans', name: 'Ceiling & Wall Fans', slug: 'fans', icon: Wind },
  { id: 'wires', name: 'Home Wiring Cables', slug: 'wires', icon: Cable },
  { id: 'tools', name: 'Electronic Tools & Equipment', slug: 'tools', icon: CircuitBoard },
  { id: 'lighting', name: 'Smart Lighting', slug: 'lighting', icon: Zap },
];

export const sampleProducts: Product[] = [
  {
    id: 'smart-ceiling-fan-x100',
    name: 'Smart Ceiling Fan X100',
    description: 'Energy-efficient smart ceiling fan with remote control and app integration.',
    longDescription: 'The Smart Ceiling Fan X100 brings comfort and convenience to your home. Featuring multiple speed settings, whisper-quiet operation, and seamless integration with your smart home ecosystem. Easy to install and built to last.',
    price: 129.99,
    category: 'fans',
    images: ['https://placehold.co/600x400.png?text=Smart+Fan+X100+Main', 'https://placehold.co/600x400.png?text=Smart+Fan+X100+Angle+2', 'https://placehold.co/600x400.png?text=Smart+Fan+X100+Remote'],
    specifications: [
      { key: 'Blade Span', value: '52 inches' },
      { key: 'Control', value: 'Remote, App, Voice Assistant' },
      { key: 'Motor', value: 'DC Brushless' },
      { key: 'Energy Star Certified', value: 'Yes' },
    ],
    reviews: [
      { id: 'review1', author: 'Jane D.', rating: 5, comment: 'Absolutely love this fan! So quiet and powerful.', date: '2023-05-10' },
      { id: 'review2', author: 'John S.', rating: 4, comment: 'Great fan, app is a bit clunky but works.', date: '2023-06-15' },
    ],
    stock: 50,
    sku: 'EH-SCF-X100',
    tags: ['smart home', 'ceiling fan', 'energy efficient'],
  },
  {
    id: 'premium-copper-wire-10m',
    name: 'Premium Copper Wiring Cable (10m)',
    description: 'High-quality 14-gauge copper wire for safe and reliable home electrical installations.',
    longDescription: 'Ensure the safety and efficiency of your home wiring with our Premium Copper Wiring Cable. This 10-meter roll of 14-gauge wire is perfect for various residential applications, offering excellent conductivity and durability. Meets all standard safety certifications.',
    price: 25.50,
    category: 'wires',
    images: ['https://placehold.co/600x400.png?text=Copper+Wire+Roll', 'https://placehold.co/600x400.png?text=Copper+Wire+Closeup'],
    specifications: [
      { key: 'Length', value: '10 meters' },
      { key: 'Gauge', value: '14 AWG' },
      { key: 'Material', value: '99.9% Pure Copper' },
      { key: 'Insulation', value: 'PVC, Flame Retardant' },
    ],
    stock: 200,
    sku: 'EH-CWR-14G10M',
    tags: ['wiring', 'copper cable', 'electrical'],
  },
  {
    id: 'diy-electronics-toolkit',
    name: 'DIY Electronics Toolkit Pro',
    description: 'Comprehensive toolkit for electronics enthusiasts and DIY home repair.',
    longDescription: 'The DIY Electronics Toolkit Pro includes everything you need for your electronics projects and repairs. From soldering irons to multimeters, this kit is packed with high-quality tools designed for precision and ease of use. Comes in a durable carrying case.',
    price: 79.99,
    category: 'tools',
    images: ['https://placehold.co/600x400.png?text=Toolkit+Pro+Open', 'https://placehold.co/600x400.png?text=Toolkit+Pro+Contents'],
    specifications: [
      { key: 'Pieces', value: '60+' },
      { key: 'Includes', value: 'Soldering Iron, Multimeter, Pliers, Screwdrivers, etc.' },
      { key: 'Case', value: 'Hard Shell Carrying Case' },
    ],
    stock: 75,
    sku: 'EH-TLK-DIYPRO',
    tags: ['toolkit', 'diy electronics', 'repair tools'],
  },
  {
    id: 'led-smart-bulb-rgb',
    name: 'LED Smart Bulb RGBW',
    description: 'Controllable RGBW LED smart bulb, works with Alexa and Google Home.',
    longDescription: 'Transform your home lighting with our LED Smart Bulb. Choose from millions of colors and various shades of white to create the perfect ambiance for any occasion. Control it with your voice, smartphone app, or integrate it into your smart home routines.',
    price: 19.99,
    category: 'lighting',
    images: ['https://placehold.co/600x400.png?text=Smart+Bulb+Lit', 'https://placehold.co/600x400.png?text=Smart+Bulb+Box'],
    specifications: [
      { key: 'Type', value: 'LED A19' },
      { key: 'Colors', value: 'RGB + Tunable White (2700K-6500K)' },
      { key: 'Connectivity', value: 'Wi-Fi (2.4GHz)' },
      { key: 'Lumens', value: '800 lm' },
    ],
    stock: 150,
    sku: 'EH-LBL-RGBW01',
    tags: ['smart lighting', 'led bulb', 'rgb', 'smart home'],
  }
];

export const sampleGuides: Guide[] = [
  {
    id: 'installing-ceiling-fan',
    title: 'How to Safely Install a Ceiling Fan',
    slug: 'how-to-safely-install-a-ceiling-fan',
    excerpt: 'A step-by-step guide to installing your new ceiling fan safely and efficiently.',
    content: `
## Introduction
Installing a ceiling fan can improve air circulation and add style to your room. This guide will walk you through the process. Safety first! Always turn off the power at the circuit breaker before working on electrical wiring.

## Tools Needed
- Screwdriver set
- Wire strippers
- Pliers
- Ladder
- Voltage tester
- Ceiling fan mounting kit (usually included with fan)

## Steps
1.  **Turn Off Power:** Locate the circuit breaker controlling the room's power and switch it off. Use a voltage tester to confirm there's no power to the existing fixture or wiring.
2.  **Remove Old Fixture:** If replacing an old fan or light, carefully remove it. Disconnect the wires.
3.  **Install Mounting Bracket:** Secure the fan's mounting bracket to the electrical box in the ceiling. Ensure the box is rated to support the weight of a ceiling fan.
4.  **Assemble Fan:** Follow the manufacturer's instructions to assemble the fan motor, blades, and light kit (if applicable).
5.  **Wire the Fan:** Connect the fan's wires to the house wiring according to the color codes (usually black to black, white to white, green/bare copper to green/bare copper). Use wire nuts to secure connections.
6.  **Attach Fan to Bracket:** Lift the fan assembly and attach it to the mounting bracket.
7.  **Install Canopy:** Slide the canopy up to cover the wiring and bracket, then secure it.
8.  **Install Blades and Lights:** Attach the fan blades and any light fixtures.
9.  **Test:** Turn the power back on at the circuit breaker. Test the fan and light operations using the pull chains, remote, or wall switch.

## Troubleshooting
- **Fan wobbles:** Ensure blades are balanced and screws are tight.
- **Fan doesn't work:** Double-check wiring connections and ensure power is on.

*Disclaimer: This is a general guide. Always refer to your fan manufacturer's specific instructions and local electrical codes. If unsure, consult a qualified electrician.*
    `,
    imageUrl: 'https://placehold.co/800x450.png?text=Ceiling+Fan+Installation',
    relatedProductIds: ['smart-ceiling-fan-x100'],
    category: 'Installation',
    lastUpdated: '2023-10-26',
    author: 'Electron Hub Experts'
  },
  {
    id: 'choosing-wires',
    title: 'Choosing the Right Wires for Your Home Projects',
    slug: 'choosing-the-right-wires-for-your-home-projects',
    excerpt: 'Understand wire gauges, types, and color codes for safe electrical work.',
    content: `
## Introduction
Selecting the correct wire is crucial for safety and performance in any electrical project. This guide covers the basics of wire types, gauges, and color coding.

## Wire Gauge (AWG)
American Wire Gauge (AWG) indicates the wire's diameter. Lower AWG numbers mean thicker wires, which can carry more current.
- **14-gauge:** Common for lighting circuits, outlets (15-amp circuits).
- **12-gauge:** Used for kitchen, bathroom, and outdoor receptacles (20-amp circuits).
- **10-gauge:** For larger appliances like dryers, A/C units (30-amp circuits).

## Wire Types
- **NM-B (Non-Metallic):** Most common for interior residential wiring. Sheathed cable containing multiple conductors.
- **UF-B (Underground Feeder):** Suitable for direct burial underground, often used for outdoor lighting or detached garages.
- **THHN/THWN:** Individual insulated conductors, often used inside conduit.

## Color Coding
Standard color codes for wires in the US:
- **Black/Red:** Hot (carries current from the source)
- **White:** Neutral (returns current to the source)
- **Green/Bare Copper:** Ground (safety path for fault current)

*Always consult local electrical codes and a professional electrician if you are unsure about any aspect of your wiring project.*
    `,
    imageUrl: 'https://placehold.co/800x450.png?text=Wiring+Types',
    relatedProductIds: ['premium-copper-wire-10m'],
    category: 'Knowledge Base',
    lastUpdated: '2023-11-05',
    author: 'Electron Hub Experts'
  }
];

export const getProductById = (id: string): Product | undefined => sampleProducts.find(p => p.id === id);
export const getProductsByCategory = (categorySlug: string): Product[] => sampleProducts.filter(p => p.category === categorySlug);
export const getAllProducts = (): Product[] => sampleProducts;

export const getGuideBySlug = (slug: string): Guide | undefined => sampleGuides.find(g => g.slug === slug);
export const getAllGuides = (): Guide[] => sampleGuides;
