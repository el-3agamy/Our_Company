const fs = require('fs');
const path = require('path');

const en = require('./messages/en.json');
const de = require('./messages/de.json');
const ar = require('./messages/ar.json');

const newStrings = {
    en: {
        ServicesPreview: {
            eyebrow: "What We Do",
            title_1: "Every Frame,",
            title_accent: "Perfected",
            subtitle: "From a single social clip to a full documentary — our end-to-end post-production services cover everything your project needs.",
            cta: "Explore All Services",
            services: {
                "video-editing": { title: "Video Editing", description: "Precise cuts, rhythm-driven pacing, and narrative structure that transforms raw footage into compelling stories.", tags: ["Premiere Pro", "DaVinci", "Final Cut"] },
                "color-grading": { title: "Color Grading", description: "Cinematic color science — from log-to-rec709 transforms to custom LUTs that define your brand's visual signature.", tags: ["DaVinci Resolve", "LUT Design", "HDR"] },
                "motion-graphics": { title: "Motion Graphics", description: "Animated lower-thirds, kinetic typography, and brand intros that add professional polish to every frame.", tags: ["After Effects", "Cinema 4D", "Lottie"] },
                "showreel": { title: "Showreel Production", description: "Curated highlight reels that showcase your best work with maximum impact — cut to music, timed to perfection.", tags: ["Pacing", "Music Sync", "Brand Story"] },
                "audio-design": { title: "Audio Design", description: "Sound design, music licensing, dialogue clean-up, and final mix so your video sounds as good as it looks.", tags: ["Audition", "Sound Design", "Foley"] },
                "vfx": { title: "VFX & Compositing", description: "Green-screen keying, particle systems, and seamless compositing that pushes creative boundaries.", tags: ["Nuke", "After Effects", "Mocha"] }
            }
        },
        WorkShowcase: {
            eyebrow: "Our Work",
            title_1: "Projects That",
            title_accent: "Move",
            subtitle: "A selection of recent collaborations — brand films, documentaries, social content, and everything in between.",
            cta: "View All Projects",
            viewProject: "View Project →",
            projects: {
                "brand-film-axiom": { category: "Brand Film", title: "Axiom Sport — Launch Campaign", description: "Full post-production for a global sportswear launch. Color graded, motion graphics, and 4K delivery." },
                "doc-silent-frames": { category: "Documentary", title: "Silent Frames", description: "Feature-length documentary on street photographers. 87 minutes, DaVinci color grade." },
                "social-neon-nights": { category: "Social Content", title: "Neon Nights — Club Series", description: "24-episode vertical social series. Fast-cut editing + custom animated overlays." },
                "commercial-luxe": { category: "Commercial", title: "Luxe Interiors TVC", description: "30-second TV commercial with VFX compositing and luxury grade." },
                "music-video-pulse": { category: "Music Video", title: "Pulse — Official Music Video", description: "Full edit + grade + motion effects for a chart-topping artist's visual release." },
                "corp-summit-reel": { category: "Corporate", title: "Summit 2024 Highlight Reel", description: "Multi-camera event highlight reel with live-action B-roll and keynote integration." }
            }
        },
        ProcessTimeline: {
            eyebrow: "How We Work",
            title_1: "From Brief to",
            title_accent: "Broadcast",
            subtitle: "A streamlined four-step process built for speed, clarity, and creative excellence.",
            steps: {
                "01": { title: "Discovery Brief", description: "We dive deep into your vision, audience, and goals. A shared creative brief ensures we're aligned before a single frame is touched." },
                "02": { title: "Editing & Assembly", description: "Our editors craft the rough cut — narrative structure, pacing, and rhythm — using the footage and brief as our compass." },
                "03": { title: "Review & Refine", description: "You receive a private link to review. Feedback is collected, revisions are made — up to 3 rounds until it's exactly right." },
                "04": { title: "Final Delivery", description: "Broadcast-ready files delivered in your required formats — 4K ProRes, H.264, vertical cuts, platform-specific exports, all in one package." }
            }
        },
        Testimonials: {
            eyebrow: "Client Stories",
            title_1: "Trusted by",
            title_accent: "Visionaries",
            subtitle: "From independent filmmakers to global brands — here's what our clients say about working with us.",
            reviews: {
                "1": { quote: "FrameForge turned our raw footage into a cinematic brand film that exceeded every expectation. The color grade alone was worth every penny.", name: "Sophia Reinhardt", role: "Creative Director, Axiom Sport" },
                "2": { quote: "The fastest, most communicative post-production team we've ever worked with. 48-hour turnarounds without sacrificing an ounce of quality.", name: "Marcus Osei", role: "Head of Content, Neon Media" },
                "3": { quote: "They understood our documentary's emotional core immediately. The edit made our subjects' stories feel truly heard.", name: "Lena Voss", role: "Independent Filmmaker" },
                "4": { quote: "Our TVC increased conversions by 34% — we attribute that directly to the world-class editing and motion work from FrameForge.", name: "James Harlow", role: "CMO, Luxe Interiors" },
                "5": { quote: "Six music videos in and they still bring fresh energy to every project. The VFX compositing on our last release was absolutely stunning.", name: "Aida Serrano", role: "Artist Manager, Pulse Records" },
                "6": { quote: "Professional, creative, and obsessively detailed. FrameForge is our go-to for every corporate video project.", name: "Daniel Kwame", role: "Communications Lead, Summit Corp" }
            }
        },
        Footer: {
            tagline: "We craft cinematic visual stories for brands that demand excellence. From raw footage to final frame — perfected.",
            nav: {
                Services: "Services",
                Company: "Company",
                "Video Editing": "Video Editing",
                "Color Grading": "Color Grading",
                "Motion Graphics": "Motion Graphics",
                "Showreel Production": "Showreel Production",
                "Audio Design": "Audio Design",
                "VFX & Compositing": "VFX & Compositing",
                "About Us": "About Us",
                "Our Work": "Our Work",
                "Process": "Process",
                "Contact": "Contact"
            },
            contact: {
                heading: "Get In Touch",
                address: "123 Studio Ave, Suite 4B\nNew York, NY 10001",
                cta: "Start a Project →",
                copyright: "FrameForge Studio. All rights reserved.",
                privacy: "Privacy Policy",
                terms: "Terms of Service"
            }
        }
    },
    de: {
        ServicesPreview: {
            eyebrow: "Was wir tun",
            title_1: "Jedes Frame,",
            title_accent: "Perfektioniert",
            subtitle: "Vom kurzen Social-Clip bis zur Dokumentation in voller Länge — unsere Postproduktion bietet alles, was Ihr Projekt braucht.",
            cta: "Alle Dienstleistungen",
            services: {
                "video-editing": { title: "Videoschnitt", description: "Präzise Schnitte, rhythmusgesteuertes Pacing und narrative Struktur, die Rohmaterial in packende Geschichten verwandelt.", tags: ["Premiere Pro", "DaVinci", "Final Cut"] },
                "color-grading": { title: "Farbkorrektur", description: "Filmische Farben — von Log-zu-Rec709-Transformationen bis zu maßgeschneiderten LUTs für Ihren visuellen Stil.", tags: ["DaVinci Resolve", "LUT Design", "HDR"] },
                "motion-graphics": { title: "Motion Graphics", description: "Animierte Bauchbinden, kinetische Typografie und Marken-Intros verleihen jedem Frame professionellen Glanz.", tags: ["After Effects", "Cinema 4D", "Lottie"] },
                "showreel": { title: "Showreel-Produktion", description: "Kuratierte Highlight-Reels, die Ihre beste Arbeit maximal zur Geltung bringen — perfekt auf Musik geschnitten.", tags: ["Pacing", "Music Sync", "Brand Story"] },
                "audio-design": { title: "Audio Design", description: "Sounddesign, Musiklizenzierung, Dialogbereinigung und Endmischung — damit Ihr Video so gut klingt, wie es aussieht.", tags: ["Audition", "Sound Design", "Foley"] },
                "vfx": { title: "VFX & Compositing", description: "Greenscreen-Keying, Partikelsysteme und nahtloses Compositing, das kreative Grenzen verschiebt.", tags: ["Nuke", "After Effects", "Mocha"] }
            }
        },
        WorkShowcase: {
            eyebrow: "Unsere Arbeit",
            title_1: "Projekte, die",
            title_accent: "Bewegen",
            subtitle: "Eine Auswahl aktueller Projekte — Markenfilme, Dokumentationen, Social-Media-Inhalte und alles dazwischen.",
            cta: "Alle Projekte ansehen",
            viewProject: "Projekt ansehen →",
            projects: {
                "brand-film-axiom": { category: "Markenfilm", title: "Axiom Sport — Launch-Kampagne", description: "Komplette Postproduktion für eine globale Sportswear-Einführung. Farbkorrektur, Motion Graphics und 4K-Lieferung." },
                "doc-silent-frames": { category: "Dokumentation", title: "Silent Frames", description: "Dokumentarfilm über Straßenfotografen. 87 Minuten, DaVinci-Farbkorrektur." },
                "social-neon-nights": { category: "Social-Media", title: "Neon Nights — Club-Serie", description: "24-teilige vertikale Serie. Schneller Schnitt + benutzerdefinierte animierte Overlays." },
                "commercial-luxe": { category: "Werbespot", title: "Luxe Interiors TVC", description: "30-sekündiger TV-Werbespot mit VFX-Compositing und luxuriösem Look." },
                "music-video-pulse": { category: "Musikvideo", title: "Pulse — Offizielles Musikvideo", description: "Schnitt + Grading + Bewegungseffekte für das Visual eines Chartstürmers." },
                "corp-summit-reel": { category: "Corporate", title: "Summit 2024 Highlight Reel", description: "Multi-Kamera-Highlight-Reel mit Live-Action B-Roll und Keynote." }
            }
        },
        ProcessTimeline: {
            eyebrow: "Wie wir arbeiten",
            title_1: "Vom Briefing bis",
            title_accent: "zur Ausstrahlung",
            subtitle: "Ein optimierter vierstufiger Prozess für Geschwindigkeit, Klarheit und kreative Exzellenz.",
            steps: {
                "01": { title: "Discovery Briefing", description: "Wir vertiefen uns in Ihre Vision, Zielgruppe und Ziele. Ein gemeinsames Kreativ-Briefing sorgt für Abstimmung." },
                "02": { title: "Schnitt & Montage", description: "Unsere Editoren erstellen den Rohschnitt — Erzählstruktur, Pacing und Rhythmus — mit dem Briefing als Kompass." },
                "03": { title: "Feedback & Verfeinerung", description: "Sie erhalten einen geschützten Link. Feedback wird eingearbeitet — bis zu 3 Runden, bis es perfekt ist." },
                "04": { title: "Finale Abnahme", description: "Sendefähige Dateien in den benötigten Formaten — 4K ProRes, H.264, vertikal, für jede Plattform, alles inklusive." }
            }
        },
        Testimonials: {
            eyebrow: "Kundenstimmen",
            title_1: "Vertrauen von",
            title_accent: "Visionären",
            subtitle: "Von Indie-Filmemachern bis zu globalen Marken — das sagen unsere Kunden.",
            reviews: {
                "1": { quote: "FrameForge verwandelte unser Rohmaterial in einen cineastischen Markenfilm. Allein die Farbkorrektur war jeden Cent wert.", name: "Sophia Reinhardt", role: "Creative Director, Axiom Sport" },
                "2": { quote: "Das schnellste, kommunikativste Postproduktions-Team, mit dem wir je gearbeitet haben. 48-Stunden-Turnaround ohne Qualitätsverlust.", name: "Marcus Osei", role: "Head of Content, Neon Media" },
                "3": { quote: "Sie haben den emotionalen Kern sofort verstanden. Der Schnitt hat unsere Protagonisten wirklich spürbar gemacht.", name: "Lena Voss", role: "Unabhängige Regisseurin" },
                "4": { quote: "Unser TVC steigerte die Conversions um 34% — das verdanken wir direkt dem herausragenden Schnitt und Motion-Design.", name: "James Harlow", role: "CMO, Luxe Interiors" },
                "5": { quote: "Sechs Musikvideos und sie bringen immer neue Energie mit. Das VFX-Compositing beim letzten Release war atemberaubend.", name: "Aida Serrano", role: "Künstlermanagerin, Pulse Records" },
                "6": { quote: "Professionell, kreativ und besessen von Details. FrameForge ist unsere erste Wahl für Corporate-Videos.", name: "Daniel Kwame", role: "Communications Lead, Summit Corp" }
            }
        },
        Footer: {
            tagline: "Wir kreieren cineastische visuelle Geschichten für Marken, die Exzellenz erwarten. Von der Rohfassung zum finalen Frame — perfekt.",
            nav: {
                Services: "Dienstleistungen",
                Company: "Unternehmen",
                "Video Editing": "Videoschnitt",
                "Color Grading": "Farbkorrektur",
                "Motion Graphics": "Motion Graphics",
                "Showreel Production": "Showreel-Produktion",
                "Audio Design": "Audio Design",
                "VFX & Compositing": "VFX & Compositing",
                "About Us": "Über uns",
                "Our Work": "Unsere Arbeit",
                "Process": "Prozess",
                "Contact": "Kontakt"
            },
            contact: {
                heading: "Kontakt",
                address: "123 Studio Ave, Suite 4B\nNew York, NY 10001",
                cta: "Projekt starten →",
                copyright: "FrameForge Studio. Alle Rechte vorbehalten.",
                privacy: "Datenschutzerklärung",
                terms: "Nutzungsbedingungen"
            }
        }
    },
    ar: {
        ServicesPreview: {
            eyebrow: "ماذا نفعل",
            title_1: "كل إطار،",
            title_accent: "بشكل مثالي",
            subtitle: "من مقطع اجتماعي واحد إلى فيلم وثائقي كامل — خدماتنا تغطي كل ما يحتاجه مشروعك.",
            cta: "استكشف جميع الخدمات",
            services: {
                "video-editing": { title: "تحرير الفيديو", description: "قصات دقيقة، سرد محكم يحول اللقطات الخام إلى قصص مقنعة.", tags: ["Premiere Pro", "DaVinci", "Final Cut"] },
                "color-grading": { title: "تصحيح الألوان", description: "علم ألوان سينمائي لتحديد البصمة البصرية لعلامتك التجارية.", tags: ["DaVinci Resolve", "LUT Design", "HDR"] },
                "motion-graphics": { title: "موشن جرافيك", description: "نصوص متحركة ومقدمات علامات تجارية تضيف لمسة احترافية لكل إطار.", tags: ["After Effects", "Cinema 4D", "Lottie"] },
                "showreel": { title: "إنتاج العروض المجمعة", description: "بناء مقاطع عرض متميزة لاستعراض أعمالك بأفضل شكل وبإيقاع موسيقي مبهر.", tags: ["Pacing", "Music Sync", "Brand Story"] },
                "audio-design": { title: "تصميم الصوت", description: "تصميم صوتي، ميكس نهائي لضمان أن يكون الصوت مذهلاً كالصورة.", tags: ["Audition", "Sound Design", "Foley"] },
                "vfx": { title: "المؤثرات البصرية", description: "مؤثرات بصرية فائقة ودمج احترافي يتجاوز الحدود الإبداعية.", tags: ["Nuke", "After Effects", "Mocha"] }
            }
        },
        WorkShowcase: {
            eyebrow: "أعمالنا",
            title_1: "مشاريع تلهم",
            title_accent: "الحركة",
            subtitle: "مجموعة مختارة من التعاونات الحديثة — أفلام تجارية، وثائقية، والمزيد.",
            cta: "عرض جميع المشاريع",
            viewProject: "عرض المشروع ←",
            projects: {
                "brand-film-axiom": { category: "فيلم تجاري", title: "حملة إطلاق أكسيوم سبورت", description: "إنتاج شامل لحملة رياضية عالمية، تصحيح ألوان وتسليم بدقة 4K." },
                "doc-silent-frames": { category: "فيلم وثائقي", title: "إطارات صامتة", description: "فيلم وثائقي عن مصوري الشوارع. 87 دقيقة، ألوان DaVinci." },
                "social-neon-nights": { category: "محتوى اجتماعي", title: "ليالي النيون — سلسلة نوادي", description: "سلسلة من 24 حلقة. تحرير سريع وإضافات متحركة." },
                "commercial-luxe": { category: "إعلان تجاري", title: "إعلان تصميم داخلي فاخر", description: "إعلان تلفزيوني 30 ثانية مع دمج مؤثرات بصرية فاخرة." },
                "music-video-pulse": { category: "فيديو موسيقي", title: "نبض — الفيديو الموسيقي الرسمي", description: "قص ألوان وتأثيرات حركية لعمل فني يتصدر القوائم." },
                "corp-summit-reel": { category: "شركات", title: "ملخص أحداث القمة 2024", description: "تغطية حدثية شاملة ودمج الكلمات الرئيسية بلمسة فنية عالية." }
            }
        },
        ProcessTimeline: {
            eyebrow: "طريقة عملنا",
            title_1: "من الفكرة إلى",
            title_accent: "البث التلفزيوني",
            subtitle: "عملية من أربع خطوات، صُممت لتكون سريعة وواضحة ومتميزة إبداعياً.",
            steps: {
                "01": { title: "التواصل والاكتشاف", description: "ندرس رؤيتك، وجمهورك، وأهدافك، لضمان التوافق قبل البدأ بصناعة الفيديو." },
                "02": { title: "التعديل والتجميع", description: "يقوم فريقنا بصياغة القصة والإيقاع بناءً على المشاهد الملتقطة." },
                "03": { title: "المراجعة والتنقيح", description: "تتلقى رابطاً مخصصاً للمراجعة، نأخذ ملاحظاتك ونجري التعديلات اللازمة حتى النهاية." },
                "04": { title: "التسليم النهائي", description: "ملفات جاهزة للعرض بصيغ متعددة مثل 4K ProRes و H.264، لتناسب جميع المنصات." }
            }
        },
        Testimonials: {
            eyebrow: "آراء العملاء",
            title_1: "أكثر من مجرد",
            title_accent: "عملاء",
            subtitle: "ما يقوله عملاؤنا، بدءًا من صناع الأفلام المستقلين إلى العلامات التجارية العالمية.",
            reviews: {
                "1": { quote: "حول الفريق مقاطعنا الخام إلى فيلم سينمائي يفوق كل التوقعات.", name: "صوفيا راينهاردت", role: "المدير الإبداعي، أكسيوم سبورت" },
                "2": { quote: "أسرع فريق تعاملنا معه دون التضحية بأي جودة. تواصل احترافي تماماً.", name: "ماركوس أوسي", role: "رئيس المحتوى، نيون ميديا" },
                "3": { quote: "فهموا العاطفة الأساسية في وثائقينا فوراً. جعلوا قصصنا تُسمع بحق.", name: "لينا فوس", role: "مخرجة مستقلة" },
                "4": { quote: "زادت إعلاناتنا من المبيعات بنسبة 34٪ بفضل الاحتراف المبهر في التحرير.", name: "جيمس هارلو", role: "مسؤول التسويق، التصميم الفاخر" },
                "5": { quote: "أنتجنا ستة مقاطع موسيقية معهم ولا يزالون يقدمون المزيد من الإبداع.", name: "عايدة سيرانو", role: "مديرة فنانين، شركة بلس" },
                "6": { quote: "فريق احترافي وإبداعي يركز على التفاصيل. هم خيارنا الأول للأعمال المؤسسية.", name: "دانيال كوامي", role: "مسؤول التواصل، شركة سوميت" }
            }
        },
        Footer: {
            tagline: "نصنع قصصًا بصرية سينمائية للعلامات التجارية التي تتطلب التميز. من اللقطات الخام إلى العمل النهائي — بإتقان مطلق.",
            nav: {
                Services: "الخدمات",
                Company: "الشركة",
                "Video Editing": "تحرير الفيديو",
                "Color Grading": "تصحيح الألوان",
                "Motion Graphics": "موشن جرافيك",
                "Showreel Production": "إنتاج العروض المجمعة",
                "Audio Design": "تصميم الصوت",
                "VFX & Compositing": "المؤثرات البصرية",
                "About Us": "من نحن",
                "Our Work": "أعمالنا",
                "Process": "طريقة عملنا",
                "Contact": "اتصل بنا"
            },
            contact: {
                heading: "تواصل معنا",
                address: "١٢٣ ستوديو أفيـ مركز ٤\nنيويورك، ١٠٠٠١",
                cta: "ابدأ مشروعاً ←",
                copyright: "استوديو فريم فورج. كل الحقوق محفوظة.",
                privacy: "سياسة الخصوصية",
                terms: "شروط الخدمة"
            }
        }
    }
};

fs.writeFileSync('./messages/en.json', JSON.stringify({ ...en, ...newStrings.en }, null, 2));
fs.writeFileSync('./messages/de.json', JSON.stringify({ ...de, ...newStrings.de }, null, 2));
fs.writeFileSync('./messages/ar.json', JSON.stringify({ ...ar, ...newStrings.ar }, null, 2));

console.log("Translations successfully updated.");
