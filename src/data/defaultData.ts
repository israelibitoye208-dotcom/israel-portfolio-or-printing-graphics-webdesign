import { CMSAppState } from '../types';

// Static Image Asset Bundled Compiler References
import checkatradeImg from '../assets/images/checkatrade_embroidery_1780133265702.png';
import newHallImg from '../assets/images/new_hall_embroidery_1780131230575.png';
import gustoNapoletanoImg from '../assets/images/gusto_napoletano_embroidery_1780130988171.png';
import academyPulloverImg from '../assets/images/academy_pullover_embroidery_1780083048447.png';
import learnGrowImg from '../assets/images/learn_grow_embroidery_1780082822611.png';
import schoolImg from '../assets/images/school_embroidery_1780081999366.png';

import israelGoldMonogramImg from '../assets/images/israel_gold_monogram_embroidery_1780080698806.png';
import bespokeRoyalImg from '../assets/images/bespoke_royal_embroidery_1780154936542.png';
import royalMonogramImg from '../assets/images/royal_monogram_embroidery_1780143054792.png';

import israelChurchSundayServiceFlyerImg from '../assets/images/israel_church_sunday_service_flyer_1780081453194.png';
import beeLaurelImg from '../assets/images/bee_laurel_embroidery_1780261872915.png';
import revivalFireImg from '../assets/images/revival_fire_campaign_1780262599307.png';
import hoursOfGraceImg from '../assets/images/hours_of_grace_distinct_speakers_1780264114262.png';
import herovergeImg from '../assets/images/heroverge_campaign_instagram_1780264689160.png';
import superDeliciousBurgerImg from '../assets/images/super_delicious_burger_campaign_1780264892092.png';
import bossManPosImg from '../assets/images/boss_man_pos_campaign_1780304702388.png';
import acrylicFrameImg from '../assets/images/acrylic_glass_frame_young_woman_1780305160716.png';
import goldenFrameImg from '../assets/images/golden_luxury_photo_frame_1780305181327.png';
import acrylicDressFrameImg from '../assets/images/acrylic_dress_frame_1780307818186.png';
import asoOkeTraditionalFrameImg from '../assets/images/aso_oke_traditional_frame_1780308862526.png';

export const INITIAL_CMS_STATE: CMSAppState = {
  services: [
    {
      id: 'web-design',
      title: 'Luxury Website Design',
      category: 'Digital Innovation',
      description: 'Crafting ultra-responsive, high-converting digital flagships with boutique layouts and bespoke motion graphics styled for absolute executive authority.',
      detailedBenefits: [
        'Custom React & Tailwind architectures (no templates, no bloated plugins)',
        'Speed-optimized loading to keep affluent clients fully engaged',
        'Built-in conversion storytelling sequences to accelerate qualified inquiries',
        'High-contrast layouts optimized for direct, elite positioning'
      ],
      icon: 'Monitor',
      priceEstimate: 'Contact for Custom Quote',
      isActive: true
    },
    {
      id: 'brand-identity',
      title: 'Executive Brand Identity',
      category: 'Creative Strategy',
      description: 'Defining pristine brand guidelines, typography standards, logo architectures, and modern colors that declare premium leadership at first glance.',
      detailedBenefits: [
        'High-concept symbol and emblem craft representing core prestige',
        'Comprehensive brand book defining print and screen standards',
        'Executive typography curation & bespoke font matching systems',
        'Complete suite of stationery, business card designs, and executive layouts'
      ],
      icon: 'Sparkles',
      priceEstimate: 'Contact for Custom Quote',
      isActive: true
    },
    {
      id: 'printing-solutions',
      title: 'Professional Printing Solutions',
      category: 'Print Production',
      description: 'High-end layout printing, book offset, custom jotters, notebooks, and premium corporate stationery with exceptional ink density and paper selection.',
      detailedBenefits: [
        'Rigorous prepress file reviews ensuring error-free margin limits',
        'Rich matte, satin, and gloss finishes on heavyweight stock',
        'Beautiful binding styles (saddle-stitch, perfect bind, wire-O-bound)',
        'Ideal for corporate publications, journals, luxury menus, and custom folders'
      ],
      icon: 'Printer',
      priceEstimate: 'Varies on Volume',
      isActive: true
    },
    {
      id: 'large-format',
      title: 'Large Format Printing',
      category: 'Print Production',
      description: 'Bespoke banners, backdrop displays, decals, signage, stickers, and massive layout prints utilizing advanced weather-resistant pigments.',
      detailedBenefits: [
        'High-density large format plotting with rich contrast & vibrant pigments',
        'Premium indoor/outdoor banner materials, rollup systems, and hardware setups',
        'Precision plotter contour cutting for custom shapes and premium stickers',
        'Ideal for grand launches, conferences, church campaigns, and storefront structures'
      ],
      icon: 'Maximize',
      priceEstimate: 'Varies on Size',
      isActive: true
    },
    {
      id: 'book-publishing',
      title: 'Book Publishing & Layout Design',
      category: 'Editorial Care',
      description: 'Pragmatic, beautifully structured typesetting, academic layout designs, journal book publishing, and custom cover finishes.',
      detailedBenefits: [
        'Flawless typesetting layouts following formal typographic standards',
        'Executive front cover wraps with customized matte or spot-UV designs',
        'Careful index and structural page layout composition',
        'Perfect choice for corporate histories, church program books, school materials, and journals'
      ],
      icon: 'BookOpen',
      priceEstimate: 'Request a Quote',
      isActive: true
    },
    {
      id: 'event-flyers',
      title: 'High-End Event & Program Flyers',
      category: 'Visual Craft',
      description: 'Prestige invitations, program agendas, flyers, and digital flyers crafted to capture the refined essence of high-profile events and services.',
      detailedBenefits: [
        'Masterful layout design matching the specific prestige theme of the event',
        'Staggered typography grids that deliver high-priority details at a glance',
        'Digital flyer formats optimized for WhatsApp, Instagram, and direct mail',
        'Cohesive visual palettes tailored according to premium brand layouts'
      ],
      icon: 'Calendar',
      priceEstimate: 'Request a Quote',
      isActive: true
    },
    {
      id: 'merchandise-branding',
      title: 'Shirt & Merchandise Branding',
      category: 'Print Production',
      description: 'Monogram branding, premium custom t-shirts, tailored hoodies, throw pillows, personalized jotters, and luxury promotional items.',
      detailedBenefits: [
        'Premium monogram embroidery with tight, long-lasting stitch matrices',
        'Heat-transfer, DTF, and screen-print methodologies of corporate fidelity',
        'Bespoke throw pillows, personalized mugs, and commemorative office gifts',
        'Perfect for premium corporate onboarding kits and brand ambassadors'
      ],
      icon: 'Shirt',
      priceEstimate: 'Request Quote',
      isActive: true
    },
    {
      id: 'bespoke-framing',
      title: 'Bespoke Acrylic & Wood Framing',
      category: 'Premium Decor & Memorabilia',
      description: 'Creating museum-grade glass acrylic prints, floating gold frames, and custom-embellished wooden memory plaques of peerless clarity and precision.',
      detailedBenefits: [
        'Highly light-reflective edge-polished solid acrylic glass sheets',
        'Custom precision-milled aluminum mounting studs and alignment gear',
        'Rich high-density archival pigment prints that resist fading',
        'Custom floating frames and heavy-duty organic wood mount placements'
      ],
      icon: 'Frame',
      priceEstimate: 'Request a Quote',
      isActive: true
    }
  ],
  caseStudies: [
    {
      id: 'uniform-embroidery-series',
      title: 'Institutional Uniform & Custom Monogram Series',
      clientName: 'Prestige Schools, Academies & Luxury Clients',
      industry: 'Institutional Custom Embroidery & Monogram',
      summary: 'A premier comprehensive portfolio showcasing high-fidelity physical branding, custom computerized embroidery, and team athletic apparel. Stitching is executed with exquisite precision on rich fleece, heavyweight pullovers, and custom substrates.',
      designGoals: 'To bridge academic heritage with modern athletic and corporate aesthetic values. We engineer each piece by ensuring strict fabric registration inside physical hoops and using advanced custom stabilizers, producing thick, resilient, high-density stitched motifs of absolute symmetry.',
      visualPresentation: {
        heroImage: newHallImg,
        brandColor: '#F59E0B',
        deliverables: [
          'High-Fidelity Computerized Digitizing',
          'Premium Tensile Stitch Matrix Design',
          'Taut Industrial Alignment Hoops',
          'Vibrant Fine Multi-thread Layering'
        ],
        gallery: [
          {
            id: 'checkatrade-embroidery',
            title: 'Checkatrade Custom Commercial Embroidery',
            clientName: 'Checkatrade Commercial Services',
            summary: 'A pristine, high-density trade-aligned computerized custom embroidery showcasing the iconic Checkatrade logo. Stitched with vibrant red and deep navy thread on fine light-grey heather clothing.',
            designGoals: 'To achieve absolute brand color compliance and ultimate stitch clarity. The fabric is clamped perfectly flat and taut inside our high-contrast green circular registration hoops under computerized industrial multi-needle sewing rigs.',
            image: checkatradeImg,
            brandColor: '#1E3A8A',
            deliverables: ['High-Density Red & Navy Threading', 'Taut Green Registration Hoop', 'Symmetric Wordmark Alignments', 'Premium Grey Heather Cotton Underlay']
          },
          {
            id: 'new-hall-primary',
            title: 'New Hall Primary Custom School Uniform Embroidery',
            clientName: "New Hall Primary School & Children's Centre",
            summary: 'A high-precision, vibrant multi-colored embroidery featuring a custom school logo with an orange half-sun and the slogan "LOVE TO LEARN". Meticulously stitched on textured light-blue pique cotton polo garments.',
            designGoals: 'To deliver crisp lettering and perfect fabric registration for daily academic wear. The pique polo is held taut inside an industrial white circular layout hoop, guaranteeing complete design centering and eliminating any thread-puckering on lightweight knits.',
            image: newHallImg,
            brandColor: '#F59E0B',
            deliverables: ['Orange Love to Learn Banner', 'Clean White Bubble Wording Stitches', 'Industrial White Alignment Hoop Frame', 'Light-Blue Pique Cotton Polo Garment']
          },
          {
            id: 'gusto-napoletano-pizzeria',
            title: 'Gusto Napoletano Custom Pizzeria Embroidery',
            clientName: 'Gusto Napoletano Pizzeria & Restaurant',
            summary: 'A rich, high-density computerized circular embroidery featuring a detailed Italian castle and village logo layout. Perfectly stitched with vibrant forest-green, custom crimson-red, and pure-white thread on premium white heavy fleece garments.',
            designGoals: 'To preserve the authentic European heritage of the brand through precise mechanical sewing. The design is secured in highly-taut green registration hoops inside heavy-duty multi-needle embroidery gear, ensuring crisp ring curvatures and non-warping thread alignment.',
            image: gustoNapoletanoImg,
            brandColor: '#10B981',
            deliverables: ['Vibrant Red & Green Threading', 'High-Density Circular Stitching Pattern', 'Green Clamping Hoop Frame Alignment', 'White Fleeced Garment Setup']
          },
          {
            id: 'academy-athletic',
            title: 'One Dream One Team Academy Custom Embroidery',
            clientName: 'One Dream One Team Academy',
            summary: 'A luxury-gilded scholastic embroidered pullover commissioned for local athletic leaders. Featuring a brilliant laurel crown surrounding bold center numbers and custom dynamic script overlay.',
            designGoals: 'To compose a premier scholastic emblem pairing traditional academic laurel wreaths with modern overlapping varsity script, conveying unity and high achievement on durable athletic pullovers.',
            image: academyPulloverImg,
            brandColor: '#F59E0B',
            deliverables: ['Dual-text Layer Stitching', 'White Laurel Crown Border', 'Golden Varsity Script Embroidery', 'Heavyweight Quarter-Zip Fleece Mockup']
          },
          {
            id: 'learn-grow-daycare',
            title: 'Learn & Grow Daycare Custom Embroidery',
            clientName: 'Learn & Grow Daycare, Nursery & Pre-Sch',
            summary: 'A high-precision, vibrant computerized multi-thread embroidery commission designed for premium nursery and daycare uniforms. Stitched beautifully on textured grey fabric featuring a multi-tonal pencil logo and a crisp green tree.',
            designGoals: 'To forge cozy, inviting, highly professional child-care staff or kid uniform gear. Stretched inside custom blue alignment hoops, this design ensures that the high-contrast white text remains legible and colorful elements pop.',
            image: learnGrowImg,
            brandColor: '#3B82F6',
            deliverables: ['Multi-color Pencil Branding', 'Vibrant Fine Stitching Craft', 'Taut Blue Alignment Frame Hoop', 'Extra-Durable Fabric Choice']
          },
          {
            id: 'school-unis-fatima',
            title: 'Our Lady of Fatima Custom Uniform Embroidery',
            clientName: 'Our Lady of Fatima Nur/Pry Sch, Ire Ekiti',
            summary: 'A detailed physical branding commission producing high-precision custom school embroidery. Stitched with vibrant, high-durability navy thread on customized light-grey fabrics.',
            designGoals: 'To maintain pristine institutional branding and text legibility across demanding daily educational wear. We set the fabric stretched meticulously inside vibrant green registration hoops under custom specialized stabilizer layers to prevent cloth warping.',
            image: schoolImg,
            brandColor: '#10B981',
            deliverables: ['High-Strength Navy Threading', 'Tear-Away Stabilizer Backing', 'Taut Green Registration Hoop', 'Precision Block Lettering Alignment']
          }
        ]
      },
      isActive: true
    },
    {
      id: 'royal-monogram-embroidery',
      title: 'Bespoke Royal Monogram Embroidery',
      clientName: 'Israel Elite Premium Commissions',
      industry: 'Custom High-Density Luxury Embroidery',
      summary: 'A computerized masterpiece of bespoke gold-gilded monogram embroideries. Featuring elegant symmetrical floral flourishes, intricate crowns, and scrollwork, these commissions showcase high-density satin-stitch metallic threading executed on flat premium white linen textiles and fine dark luxury fabrics held perfectly under high-tension hoop registration.',
      designGoals: 'To compose masterfully digitized circular and shield monograms pairing classic heraldic aesthetics with crisp satin-stitch embroidery, ensuring stunning gold reflection on high-density ornamental thread layers.',
      visualPresentation: {
        heroImage: israelGoldMonogramImg,
        brandColor: '#D4AF37',
        deliverables: [
          'Circular & Shield Clamping Framework',
          'Symmetric Gilded Thread Alignment',
          'Ornate Royal Crown Layers',
          'High-Density Luminous Gold Threading'
        ],
        gallery: [
          {
            id: 'israel-laurel-s-monogram',
            title: "Laurel Wreath Crown Monogram (Stylized 'S' Emblem)",
            clientName: 'Israel Premium Commission',
            summary: "A classical heraldic computerized design presenting a beautifully stylized 'S' enclosed in a thick circle, topped with an ornate royal crown and embraced by symmetrical laurel wreath branches. It is embroidered with high-density, highly light-reflective silk-gold thread on coarse classic off-white linen.",
            designGoals: "Perfect computerized digitization of circular laurels and fine coronet structures, maintaining balanced stitch count, dense satin-stitch outlines, and zero puckering on coarse linen backgrounds.",
            image: israelGoldMonogramImg,
            brandColor: '#D4AF37',
            deliverables: [
              "Ornate Laurel Wreath Frame Stitching",
              "Imperial Crown Royal Detailing",
              "High-Density Satin 'S' Lettering",
              "Flat Coarse Linen Hoop Alignment"
            ]
          },
          {
            id: 'royal-crown-a-monogram',
            title: "Royal Crown Monogram (Gilded 'A' Shield)",
            clientName: 'Israel Premium Commission',
            summary: "An exquisite high-density customized gold computerized crest showing an elegant crown, fine scrollwork arches, and high-fidelity satin metallic lettering 'A' on premium white linen fabrics.",
            designGoals: "Perfect computerized digitization of shield curves and fine coronet structures, maintaining balanced stitch count, dense satin-stitch outlines, and zero puckering on coarse linen backgrounds.",
            image: bespokeRoyalImg,
            brandColor: '#D4AF37',
            deliverables: [
              "Custom Shield Motif Embroidering",
              "Satin-Stitch Border Flares",
              "Ornate Silver Scrollwork Layers",
              "Flat Linen Fabric Hoops Setup"
            ]
          },
          {
            id: 'dominion-crown-h-monogram',
            title: "Dominion Crown Monogram (Stylized 'H' Emblem)",
            clientName: 'Israel Premium Commission',
            summary: "A magnificent computerized golden monogram topped with an intricate royal crown, featuring finely interlaced leafy flourishes and a stylized 'H' central character, stitched with premium metallic thread layers on dynamic black luxury cloth.",
            designGoals: 'To achieve exquisite alignment of multi-layered metallic satin stitch embroidery on dense black textile fabric, maintaining flawless tension.',
            image: royalMonogramImg,
            brandColor: '#D4AF37',
            deliverables: [
              'Intricate Royal Crown Stitching',
              'Satin-Stitch Border Arches',
              'Dynamic Gilded Lettering Matrix',
              'Symmetric Hoop Registration Clamping'
            ]
          },
          {
            id: 'bee-laurel-fleur-de-lis',
            title: "Bee & Laurel Royal Embroidery (Fleur-de-lis Crest)",
            clientName: 'Israel Premium Commission',
            summary: "A magnificent royal embroidery showcase in a custom square magnetic hoop. Features an intricately stitched honeybee in shimmering gold and bronze metallic thread, topped with a delicate fleur-de-lis emblem and wrapped inside a classic symmetrical laurel wreath woven in highly detailed icy turquoise-blue silk threading on flat beige cotton linen.",
            designGoals: 'To maintain crisp double-layered metallic thread alignments of a central organic insect motif while delivering balanced tension and high-density circular vine borders without puckering.',
            image: beeLaurelImg,
            brandColor: '#2D82B7',
            deliverables: [
              'Intricately Detailed Golden Honeybee',
              'Icy Turquoise-Blue Fleur-de-lis Top',
              'Symmetric Silk-Turquoise Laurel Wreath',
              'Square Magnetic Alignment Hoop Setup'
            ]
          }
        ]
      },
      isActive: true
    },

    {
      id: 'church-sunday-service',
      title: 'Premium Spiritual Campaign Series',
      clientName: 'Harvesters Abuja & Prophetic Breed',
      industry: 'Spiritual branding & 3D Typography',
      summary: 'A collection of high-impact spiritual campaign designs and event flyers. Features dynamic 3D metallic typography, cinematic lighting textures, and custom studio portrait designs built for high-gloss print and digital formats.',
      designGoals: 'To compose powerful, divine, attention-grabbing spiritual campaigns pairing dramatic atmospheric elements with premium typography and professional double-exposure character portraiture.',
      visualPresentation: {
        heroImage: israelChurchSundayServiceFlyerImg,
        brandColor: '#D4AF37',
        deliverables: [
          'Custom 3D Metallic Extrusions',
          'Cinematic Volume Lighting & Flares',
          'Symmetric Dynamic Typography Layout',
          'Professional Character Framing'
        ],
        gallery: [
          {
            id: 'harvesters-sunday-service',
            title: 'Harvesters Abuja Sunday Service Flyer',
            clientName: 'Harvesters Abuja',
            summary: 'A golden-gilded bold 3D typography promotional campaign poster created for Harvesters Abuja. Features energetic ambient lighting, custom-molded metallic typeface extrusions, and cinematic production values.',
            designGoals: 'To develop a strong, high-contrast, attention-commanding flyer that works beautifully on both digital screens and large-format high-gloss event posters.',
            image: israelChurchSundayServiceFlyerImg,
            brandColor: '#D4AF37',
            deliverables: ['Custom 3D Metallic Extrusions', 'Warm Studio Lighting & Flares Overlay', 'Symmetric Typography Layout', 'High-Gloss Banner Setup Format']
          },
          {
            id: 'prophetic-breed-revival-fire',
            title: 'Prophetic Breed "Revival Fire" Campaign',
            clientName: 'Prophetic Breed International',
            summary: 'A highly detailed and majestic church promotional poster presenting the "REVIVAL FIRE" event. Centered around highly-textured distressed 3D metallic lettering erupting with fire sparks, with premium dual speaker portraits and precise informational grids.',
            designGoals: 'To capture corporate and prophetic spiritual energy. Combining bright background sunbursts and cinematic smoke with bright modern speaker panels and high-tension fire-burst effects.',
            image: revivalFireImg,
            brandColor: '#E65100',
            deliverables: ['Distressed Dark Metallic "FIRE" 3D Text', 'Dual Professional Portrait Frame Layout', 'Vivid Yellow & Orange Fire Sparks Overlay', 'Clean Black Information Footer Banner']
          },
          {
            id: 'hours-of-grace-service',
            title: 'First Love Chapel "Hours of Grace" Service',
            clientName: 'First Love Chapel International',
            summary: 'A deeply expressive spiritual event poster crafted for First Love Chapel International. Set against a theatrical deep red and gold vignette with fine congregation shadows, presenting a premium square title slate with winding golden silk ribbons, dual modern speaker portraits, and clear event info grids.',
            designGoals: 'To establish a majestic, deeply reverent and visually clean prophetic design space. Melding rich gold script embellishments with high-density light-play on black frames and balanced text blocks.',
            image: hoursOfGraceImg,
            brandColor: '#9E1B1B',
            deliverables: [
              'Custom Winding Silk Ribbon Graphic',
              'Symmetric Golden Block Title Frame',
              'Fading Congregation Silhouette Light-Play',
              'Double Speaker Portrait Arrangement'
            ]
          },
          {
            id: 'heroverge-campaign-instagram',
            title: 'Heroverge Success Campaign Instagram Post',
            clientName: 'Heroverge Group',
            summary: 'A premium, highly detailed corporate consulting campaign Instagram poster. Outlines corporate consulting services with high-contrast text layout paired with a welcoming character portrait design over a dynamic glowing neon blue vector waves backdrop.',
            designGoals: 'To establish an instant professional connection and strong corporate authority by pairing vibrant high-tech neon blue background accents with pristine structural information typography grids and friendly portrait placement.',
            image: herovergeImg,
            brandColor: '#0052CC',
            deliverables: [
              'Vibrant Deep-Blue Wave Backdrop',
              'Professional Character Foreground Mask',
              'Double-Nested Corporate Service Bullet Grid',
              'Clean Custom Footer with QR Code block'
            ]
          },
          {
            id: 'super-delicious-burger-campaign',
            title: 'Super Delicious Burger Gourmet Campaign',
            clientName: 'Gourmet Grillers Inc',
            summary: 'A premium, high-fidelity promotional food flyer designed for social media feeds. Features a split background layout pairing a soft cream-beige with a dramatic dark burgundy shade, setting the stage for a giant, succulent flame-grilled double-decker cheeseburger.',
            designGoals: 'To stimulate immediate sensory and emotional engagement, contrasting rich food-catalog photography with dual vertical graphic lettering blocks and clean hand-drawn callouts.',
            image: superDeliciousBurgerImg,
            brandColor: '#E65100',
            deliverables: [
              'Dual Panel Cream and Burgundy Backdrop',
              'Symmetric Vertical Title Lettering',
              'Premium Flame-Grilled Burger Photography',
              'Dashed Special Offer Vector Arrow Callouts'
            ]
          },
          {
            id: 'boss-man-pos-campaign',
            title: 'The Boss Man Computers POS Flyer',
            clientName: 'The Boss Man Computers',
            summary: 'A vibrant POS merchant promotional campaign flyer designed for social media feeds. Features a clean, airy cyan-blue gradient with radial wave textures, showcasing a modern sky-blue hand-held POS terminal and a clean service listing grid.',
            designGoals: 'To represent swift, professional financial accessibility by pairing a realistic, high-fidelity physical smart POS terminal with high-contrast service lists and trusted operator badge markers.',
            image: bossManPosImg,
            brandColor: '#0052CC',
            deliverables: [
              'Vibrant Cyan-Blue Ambient Backdrop',
              'High-Fidelity Smart POS Terminal Illustration',
              'Four-Segment Solid Rounded Service Grid',
              'Clean operator and Partner Logo Banner Footer'
            ]
          }
        ]
      },
      isActive: true
    },
    {
      id: 'indeego-restaurant',
      title: 'Indeego Restaurant & Lounge',
      clientName: 'Indeego Group',
      industry: 'Hospitality & Luxury Dining',
      summary: 'Developing an immersive visual identity and editorial, high-converting digital menu experience for an elite culinary lounge.',
      designGoals: 'Crafting a moody, visually rich aesthetic to highlight culinary artistry and facilitate table bookings. We paired rich serif display headers with cinematic, full-bleed micro-animations to create an elite digital dining preview.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#171311',
        deliverables: ['Aesthetic Digital Front', 'Brand Strategy Guidelines', 'Monogrammed Menus', 'Embroidered Apparel & Throw Pillows']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/indeego'
    },
    {
      id: 'gf-logistics',
      title: 'GF Logistics Web Platform',
      clientName: 'GF Logistics Ltd',
      industry: 'Global Transport & Logistics',
      summary: 'An elegant, high-impact corporate web flagship crafted specifically to inspire secure shipping trust and elevate container routing authority.',
      designGoals: 'To design a powerful, clear, and modern corporate environment. We prioritized crisp typographic grids, robust delivery information structures, and interactive booking highlights that showcase regional fleet management and freight dispatcher expertise.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#0D1B2A',
        deliverables: ['Responsive Web Flagship', 'Corporate Positioning Architecture', 'Interactive Fleet Display UX', 'Custom Shipping Bookings']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/gf-logistics'
    },
    {
      id: 'new-model-autocare',
      title: 'New Model Autocare',
      clientName: 'New Model Autocare',
      industry: 'Premium Automotive Services',
      summary: 'Establishing a cohesive brand presence and executive digital landing system for a leading high-end detailing and autocare brand.',
      designGoals: 'To bridge the gap between heavy technical mechanical expertise and the elegant luxury expectations of premium vehicle owners. We redefined their typography, colors, and created an ultra-modern booking system representing ultimate performance.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#0E0F11',
        deliverables: ['Responsive Web System', 'Identity Rebrand', 'Direct Booking Flow', 'Premium Outdoor Signage & Decals']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/new-model-autocare'
    },
    {
      id: 'ivory-bites-restaurant',
      title: 'Ivory Bites Restaurant',
      clientName: 'Ivory Bites Group',
      industry: 'Contemporary Premium Dining',
      summary: 'Developing a pristine culinary identity and strategic reservation-focused digital web flagship.',
      designGoals: 'To align Ivory Bites with modern dining prestige. We conceptualized an exquisite layout centered around spacious minimalist menus, curated editorial imagery, and custom interactive contact interfaces.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#1A1816',
        deliverables: ['Pristine Desktop Flagship', 'Menu Typography Layouts', 'Responsive Table Booking Flow', 'Direct Client Inquiry Channel']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/ivory-bites-restaura'
    },
    {
      id: 'orente-grills',
      title: 'Orente Grills',
      clientName: 'Orente Grills & Catering',
      industry: 'Artisanal Grill & Contemporary Catering',
      summary: 'Crafting a high-end web presence and interactive menu experience for an artisanal grill and premium catering brand.',
      designGoals: 'To capture the rustic elegance and rich flame-grilled dining story. We engineered a warm dark visual standard, spacious custom digital food catalogs, and streamlined catering bookings.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#2B1A13',
        deliverables: ['Gourmet Digital Identity', 'Flame-Grilled Visual Artistry', 'Integrated Catering Booking UI', 'Responsive Menu Catalog']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/orente-grills'
    },
    {
      id: 'zeus-club-lounge',
      title: 'Zeus Club and Lounge',
      clientName: 'Zeus Nightlife Group',
      industry: 'Ultra-Premium Nightlife & Lounge',
      summary: 'Sculpting an immersive digital gateway and reservation system for an elite, high-energy club and lounge experience.',
      designGoals: 'To express the vibrant raw energy and exclusive hospitality of Zeus. We crafted a neon-draped, responsive club showcase featuring VIP table bookings and dynamic visual media integration.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#0E021A',
        deliverables: ['VIP Reservation Flagship', 'High-Contrast Identity Architecture', 'Immersive Event Calendar UI', 'Interactive Table Finder']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/zeus-club-lounge'
    },
    {
      id: 'imperial-supermarket',
      title: 'Imperial Supermarket',
      clientName: 'Imperial Retail Partners',
      industry: 'Premium Grocery & FMCG Retail',
      summary: 'Establishing a cohesive, upscale supermarket web storefront, cataloging brand standards and digital locations.',
      designGoals: 'To build a high-contrast, clean-cut digital hub for premium retail. We centered layout mechanics upon sharp typography, a curated product catalog preview, responsive location markers, and smooth search filters.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#0D3421',
        deliverables: ['Digital Retail Storefront', 'Fluid Product Category UI', 'Responsive Store Finder', 'Modern Grocery Catalogue']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/imperial-supermarket'
    },
    {
      id: 'hotel-de-treasure',
      title: 'Hotel De Treasure',
      clientName: 'Hotel De Treasure Group',
      industry: 'Premium Hospitality & Leisure',
      summary: 'Architecting an exquisite hospitality digital reserve and seamless vacation planning portal.',
      designGoals: 'To elevate the prestige of Hotel De Treasure. We configured a majestic, warm visual showcase incorporating interactive booking integrations, rich room previews, and seamless navigation.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#1C3D32',
        deliverables: ['Majestic Web Portal', 'Room Reservation Interface', 'Curated Activity Showcase', 'Dynamic Inquiry Form']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/hotel-de-treasure'
    },
    {
      id: 'ife-grand-resort',
      title: 'Ife Grand Resort',
      clientName: 'Ife Resort & Leisure Group',
      industry: 'Luxury Resort & Cultural Hospitality',
      summary: 'Crafting a regal digital getaway and interactive booking information portal steeped in rich cultural heritage.',
      designGoals: 'To bridge monumental cultural hospitality with ultra-premium digital travel booking. We laid out an immersive visual design pairing luxurious golden tones with high-contrast imagery, smooth custom reservations, and comprehensive booking navigation.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#800020',
        deliverables: ['Modern Cultural Hub', 'Premium Booking Navigation', 'Interactive Lodging Preview', 'Bespoke Experience Engine']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/ife-grand-resort#Booking%20Information'
    },
    {
      id: 'valu-mall',
      title: 'Valu Mall',
      clientName: 'Valu Retail Group',
      industry: 'Smart Grocery & Discount Retail',
      summary: 'Developing a sleek, modern supermarket web hub for everyday premium groceries and savings.',
      designGoals: 'To forge an innovative retail platform featuring interactive category listings, real-time store location directions, weekly deals previews, and frictionless search controls.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#1E3A8A',
        deliverables: ['Custom Retail Storefront', 'Fluid Savings Board', 'Store Location Map', 'Smart Search Interface']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208.wixsite.com/valu-mall'
    },
    {
      id: 'used-auto-lagos',
      title: 'Used Auto Lagos',
      clientName: 'Used Auto Lagos Dealer',
      industry: 'Premium Automotive Services',
      summary: 'A clean, responsive car marketplace website built for a Lagos-based auto dealer, showcasing vehicle listings with an easy browsing experience.',
      designGoals: 'To compose an ultra-clean, high-converting digital car listing marketplace tailored for the Lagos region. We configured visual listing grids, search structures, dynamic filters, and clean contact workflows for seamless consumer exploration.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#1E3A8A',
        deliverables: ['Automotive Marketplace Webfront', 'Responsive Inventory Navigation', 'High-Fidelity Vehicle Display Grid', 'Dealer Contact Channels']
      },
      isActive: true,
      projectUrl: 'https://israelibitoye208@wixsite.com/used-auto-lagos'
    },
    {
      id: 'exec-printing-showcase',
      title: 'Executive Print & Production Showcase',
      clientName: 'Dominion PrintLab',
      industry: 'Real-World Production Design',
      summary: 'A deep-dive portfolio showcase demonstrating hands-on expertise in custom corporate stationery, monograms, and books.',
      designGoals: 'To show that premium physical branding matters. Demonstrating premium heavy-density offset printing on custom exercise books, high-resistance stickers, event rollup displays, and custom tailored corporate wear.',
      visualPresentation: {
        heroImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
        brandColor: '#2B231D',
        deliverables: ['Custom Binding Layouts', 'Monogram Custom Embroidery', 'contour-cut Stickers', 'Vibrant Backdrop Displays']
      },
      isActive: true
    },
    {
      id: 'bespoke-framing-series',
      title: 'Bespoke Premium Framing & Memorabilia',
      clientName: 'Dominion FrameLab',
      industry: 'Premium Acrylic & Wood Frames',
      summary: 'An exquisite physical interior design display series showcasing borderless polished acrylic crystal glass prints, custom gold-gilded floating frames, and custom-embellished wooden memory plaques.',
      designGoals: 'To preserve and elevate milestone corporate awards, fine art, and portraiture under high-end glass structures and heavy-impact floating frames that command visual prestige.',
      visualPresentation: {
        heroImage: acrylicFrameImg,
        brandColor: '#D4AF37',
        deliverables: [
          'Edge-Polished Solid 8mm Plexiglass',
          'Circular Metal Corner Mounting Studs',
          'Solid Gold Floating Wood Liners',
          'Vivid Archival Pigment Sublimation'
        ],
        gallery: [
          {
            id: 'acrylic-glass-frame-young-woman',
            title: 'Premium Crystal-Clear Acrylic Glass Frame',
            clientName: 'Israel Premium Frame Commission',
            summary: 'A minimalist, museum-grade borderless acrylic glass print showcasing beautiful detailed high-contrast fine art portraiture. Edge-polished transparent lexan sheets are floatingly mounted on metal wall studs to elevate ambient light depth.',
            designGoals: 'To deliver absolute edge-to-edge transparency and deep light reflection by sandwiching ultra-high resolution photography under thick shatterproof acrylic material.',
            image: acrylicFrameImg,
            brandColor: '#D4AF37',
            deliverables: [
              '8mm Beveled Glass Acrylic Sheet',
              'Sleek Polished Corner Spacer Studs',
              'Edge-to-Edge Floating Frameless Fit',
              'Cinematic Dual Portrait Reflection'
            ]
          },
          {
            id: 'golden-luxury-photo-frame',
            title: 'Bespoke Golden Custom Floating Frame',
            clientName: 'Israel Elite Wedding Commission',
            summary: 'An exquisite, modern floating frame crafted with heavy gold-leaf metal contours. Built to house high-density textured wedding portraits under non-reflective custom matte glass.',
            designGoals: 'To construct classic, majestic display systems that combine traditional royal gold margins with modern floating backing depth, resulting in premium wall prestige.',
            image: goldenFrameImg,
            brandColor: '#D4AF37',
            deliverables: [
              'Heavy Gold-Leaf Metal Frame Backing',
              'Museum-Grade Non-Reflective Glass',
              'Deep Beveled Mat Board Margins',
              'Floating Portrait Tension Mounting'
            ]
          },
          {
            id: 'custom-vertical-wood-acrylic-frame',
            title: 'Vertical Wood-Paneled Custom Acrylic Frame',
            clientName: 'Israel Elite Boutique Portrait Commission',
            summary: 'An exquisitely structured borderless vertical acrylic glass mounting, beautifully displaying an elegant portrait of a woman in a sleek white one-shoulder bodycon dress. Designed with professional silver corner-anchoring wall spacers against dark-toned wood paneling backgrounds.',
            designGoals: 'To blend warm rustic wood-grained textures with high-contrast, glossy crystal glazing, framed perfectly by corner-mounted spacers and a secondary custom body-scale inset reference layout.',
            image: acrylicDressFrameImg,
            brandColor: '#D4AF37',
            deliverables: [
              '8mm Rounded-Edge Polished Glass Plate',
              'Quad-Lock Silver Metallic corner wall mounts',
              'Sublime Inset Miniature reference block',
              'Precision-milled Contrast Panel mounting alignment'
            ]
          },
          {
            id: 'traditional-aso-oke-frame',
            title: 'Heritage Traditional Aso Oke Collage Frame',
            clientName: 'Israel Heritage Portrait Commission',
            summary: 'A magnificent custom-mounted portrait display presenting a radiant woman styled in high-prestige magenta and maroon traditional Aso Oke gele headtie and exquisite layered neck jewellery, set against vibrant foliage. Features a beautiful vertical column of four miniature outfit-styling thumbnails on the left margin.',
            designGoals: 'To immortalize rich cultural identity and premium traditional styling through clean edge-to-edge frameless acrylic curation with integrated multi-outfit collage coordinates.',
            image: asoOkeTraditionalFrameImg,
            brandColor: '#B03060',
            deliverables: [
              'Edge-Polished Premium Glaze Acrylic Board',
              'Satin-Chrome heavy-duty corner spacer mounts',
              'Vertical Quad-Thumbnail Collage margin alignment',
              'Ultra-High-Density Chroma Sublimation print'
            ]
          }
        ]
      },
      isActive: true
    }
  ],
  blogPosts: [
    {
      id: 'luxury-branding-rules',
      title: 'The Golden Rules of Luxury Brand Positioning in a Digital World',
      slug: 'luxury-branding-rules',
      excerpt: 'Discover why generic layouts are diluting your authority and how intentional contrast commands higher client retainer fees.',
      content: `In an era defined by overwhelming digital noise, true premium positioning requires absolute restraint. The common trap for growing premium brands is cluttering their presentation with excessive indicators, bright badges, and overstuffed paragraphs. 

### 1. Minimalist Architectural Grids
Luxury brands do not beg for attention; they command it. Use clean layout frameworks with generous padding, minimalist typography (pairing a stark typeface like Montserrat or Inter with an elegant display Serif), and sharp accent tones (such as rich Gold #D4AF37 against solid charcoal or absolute black backgrounds). This creates instant contrast and visual prestige.

### 2. High-Caliber Physical Continuity
Your digital presence must perfectly match your offline touchpoints. When a premium customer experiences a bespoke website and subsequently receives a cheap corporate booklet, the perception of luxury breaks down. We ensure that our custom web graphics, corporate monogram wear, personalized throw pillows, stickers, and layout publishing operate together as a singular, unified narrative of excellence.

### 3. Precision Storytelling Over Clichés
Ditch the generic bullet points. High-end clientele buy because of meticulous craftsmanship and structured authority. Frame your services around benefits, custom processes, clear discovery systems, and flawless visual executions.`,
      category: 'Brand Strategy',
      tags: ['Branding', 'Luxury', 'Visual Identity', 'Digital Design'],
      metaDescription: 'Learn how to command premium rates for your brand with the golden rules of high-concept digital and print positioning by Dominion Creative Studio.',
      publishedAt: 'May 24, 2026',
      status: 'published',
      featuredImage: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=600&q=80',
      readTime: '4 min read'
    },
    {
      id: 'print-vs-digital',
      title: 'Phygital Resonance: Why Physical Corporate Stationery Still Drives Major Retainers',
      slug: 'print-vs-digital',
      excerpt: 'How tactile printed components—custom notebooks, custom monogram shirts, and engraved stationery—seal enterprise deals.',
      content: `Despite the global transition to digital communication, physical touchpoints remain unmatched when closing high-value deals. This combined screen-and-substrate approach—often referred to as "Phygital Branding"—is the signature strategy of premium companies.

### The Tactile Retainer Hook
When an enterprise prospect leaves an online pitch deck, the interaction ceases. But when they walk away with a beautifully bound, custom spot-UV printed corporate notebook, a stunning tailored shirt customized with modern monogram embroidery, or a custom-molded binder containing your strategic outline, your brand lives on their desk permanently.

### Key Print Assets Every Elite Brand Demands:
- **Monogrammed Polo Shirts & Corporate Curation**: Builds standard-setting cohesive authority during site inspections, guest welcomes, or public representation.
- **Heavyweight Custom Jotters**: Positioned as premium corporate journaling gifts that command pride of place.
- **Rollup Signage & Backdrops**: High-end satin-surface banners that establish immediate presentation authority during critical conferences, church convocations, and school launches.`,
      category: 'Print Masterclass',
      tags: ['Print Production', 'Corporate Gifts', 'Monograms', 'Stationery'],
      metaDescription: 'Discover why high-caliber physical collateral like custom embroidery and premium binding elevates trust levels for consulting and premium services.',
      publishedAt: 'May 28, 2026',
      status: 'published',
      featuredImage: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&q=80',
      readTime: '5 min read'
    }
  ],
  testimonials: [
    {
      id: 't-indeego',
      name: 'Elena Rostova',
      role: 'Creative Director',
      company: 'Indeego Dine & Lounge',
      content: 'Working with Dominion Creative Studio was standard-defining. They treated our hospitality concept with meticulous care. The serif menu interactions and beautiful monogrammed pillows they produced tied our physical-digital dining space into a flawless luxury universe.',
      rating: 5,
      avatarUrl: '',
      isActive: true
    },
    {
      id: 't1',
      name: 'Adewale Harrison',
      role: 'CEO & Founder',
      company: 'New Model Autocare',
      content: 'Dominion Creative Studio aligned our high-end automotive center with absolute perfection. From the sleek responsive client portal to the bold outdoor banner signage and staff customized shirts, our customer trust soared immediately. Highly professional!',
      rating: 5,
      avatarUrl: '',
      isActive: true
    },
    {
      id: 't2',
      name: 'Gabriel F. Alao',
      role: 'Managing Director',
      company: 'GF Logistics Ltd',
      content: 'Dominion Creative Studio aligned our global cargo and freight forwarding business with standard-setting digital authority. The corporate platform is beautifully structured, load times are instantaneous, and shipping partner trust was established immediately. Elite strategy!',
      rating: 5,
      avatarUrl: '',
      isActive: true
    }
  ],
  faqs: [
    {
      id: 'f1',
      question: 'What is the standard turnaround time for a luxury web system?',
      answer: 'Typically, our custom web design systems take 3 to 6 weeks. This includes detailed strategic discovery, user-journey mapping, interactive visual designs, robust responsiveness optimization, and SEO preparation.',
      category: 'Digital Systems',
      isActive: true
    },
    {
      id: 'f2',
      question: 'Can you handle both high-caliber digital designs and real-world physical printing?',
      answer: 'Yes! This is our core strategic advantage. We are full-circle designers with hands-on pre-press production knowledge. We design with print specifications in mind (color spaces, bleeds, safe margins) and handle banner printing, monogram wear, custom jotters, books layout, and large display stands.',
      category: 'Full Service',
      isActive: true
    },
    {
      id: 'f3',
      question: 'Do you offer revision limits on creative projects?',
      answer: 'Our goal is absolute alignment. We provide 3 structured review sprints during our production lifecycle. Because we invest heavily in strategic discovery at the starting line, our initial proposals are highly aligned with user targets, minimizing excessive structural edits.',
      category: 'Design Flow',
      isActive: true
    },
    {
      id: 'f4',
      question: 'Where do you offer delivery for custom printed materials and merchandise?',
      answer: 'We provide premium, secure dispatch and shipping pipelines. For clients in Nigeria, printing collateral reaches major corporate hubs directly, and we handle safe international crating and shipping for our global partners.',
      category: 'Delivery',
      isActive: true
    }
  ],
  leads: [
    {
      id: 'l1',
      type: 'consultation',
      name: 'Olapade K. Williams',
      email: 'o.williams@zenithcorps.com',
      phone: '+2348033221199',
      whatsappConsent: true,
      serviceId: 'brand-identity',
      customService: '',
      date: '2026-06-05',
      time: '14:00',
      budget: '$2,000 - $5,000',
      message: 'Looking to perform a luxury corporate rebrand including stationery layouts and physical ID cards.',
      status: 'pending',
      createdAt: '2026-05-29T08:00:00.000Z'
    },
    {
      id: 'l2',
      type: 'quote',
      name: 'Chioma Nduka',
      email: 'chioma@indeegolounge.com',
      phone: '+2349077654321',
      whatsappConsent: true,
      serviceId: 'merchandise-branding',
      customService: '',
      date: '',
      time: '',
      budget: 'Under $1,000',
      message: 'We need 50 copies of customizable corporate journals (jotters) and embroidered polo monogram shirts for our lounge opening.',
      status: 'reviewed',
      createdAt: '2026-05-28T15:30:00.000Z'
    }
  ],
  subscribers: [
    {
      id: 's1',
      email: 'vip.client@luxurygroup.com',
      subscribedAt: '2026-05-29T07:45:00.000Z'
    }
  ],
  sections: [
    { id: 'hero', label: 'Cinematic Hero Banner', enabled: true, order: 0 },
    { id: 'trust', label: 'Trust & Authority Indicators', enabled: true, order: 1 },
    { id: 'about', label: 'About Dominion Creative Studio', enabled: true, order: 2 },
    { id: 'services', label: 'Signature Services Bento', enabled: true, order: 3 },
    { id: 'portfolio', label: 'Portfolio Masterpieces', enabled: true, order: 4 },
    { id: 'process', label: 'Strategic Six-Step Process', enabled: true, order: 5 },
    { id: 'testimonials', label: 'Client Testimonials', enabled: true, order: 6 },
    { id: 'faq', label: 'FAQ System', enabled: true, order: 7 },
    { id: 'booking', label: 'Strategic Lead CTA & Booking', enabled: true, order: 8 }
  ],
  contact: {
    phone: '+2349050804512',
    whatsapp: '+2349050804512',
    email: 'israelibitoye208@gmail.com',
    officeHours: 'Monday - Friday (8:00 AM - 6:00 PM WAT)',
    addressPlaceholder: 'Bespoke Studio Location • Lagos, Nigeria & Worldwide Dispatch'
  },
  visual: {
    primaryBg: '#000000',
    secondaryBg: '#111111',
    accentGold: '#D4AF37',
    softGold: '#C9A227',
    textWhite: '#FFFFFF',
    softGray: '#B8B8B8',
    fontHeadingStyle: 'serif',
    cinematicVibe: 'executive'
  }
};
