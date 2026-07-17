const fs = require('fs');

const en = require('./messages/en.json');
const de = require('./messages/de.json');
const ar = require('./messages/ar.json');

const pagesEn = {
    AboutPage: {
        hero: { eyebrow: "Our Story", title_1: "We Live", title_accent: "In The Edit", sub: "FrameForge is a boutique post-production studio obsessed with craft. We don't just cut video — we build emotion, frame by frame." },
        stats: { "250+": "Projects Delivered", "98%": "Client Satisfaction", "7+": "Years in Post", "40+": "Award Nominations" },
        mission: { eyebrow: "Our Philosophy", title_1: "Great Editing is", title_accent: "Invisible", body_1: "The best edit is one where the audience never notices the cut. They're too busy feeling the story. At FrameForge, every decision — every frame held, every transition chosen, every colour pushed — serves the narrative above all else.", body_2: "We founded this studio on a simple belief: that post-production deserves the same creative investment as production itself. Great footage, poorly edited, is wasted potential. We exist to unlock that potential.", quote: "\"Cinema is a mirror by which we often see ourselves.\"", quote_attr: "— Martin Scorsese" },
        team: { eyebrow: "The Team", title_1: "The Minds Behind", title_accent: "The Magic", members: { "Marco Visconti": { role: "Founder & Lead Editor", bio: "Former feature film editor with credits on 3 Sundance selections. Marco set up FrameForge to bring cinematic quality to every format." }, "Priya Nair": { role: "Senior Colorist", bio: "Certified DaVinci Resolve colorist with a background in commercial and documentary grade. Priya's palettes are unmistakably cinematic." }, "Remy Fontaine": { role: "Motion Design Lead", bio: "Motion designer and After Effects specialist. Remy transforms static brand identities into kinetic, living animations." }, "Aaliyah Brooks": { role: "VFX & Compositing", bio: "Nuke-certified compositor with a passion for invisible effects. Aaliyah makes the impossible look effortless." } } },
        awards: { eyebrow: "Recognition", title: "Industry Awards", items: ["Cannes Corporate Media Award — Silver", "One Show — Merit, Online Film", "Vimeo Staff Pick — 2023 & 2024", "D&AD Shortlist — Motion Design", "Webby Award — Best Video Series"] },
        cta: { title: "Work With Us", sub: "Let's make something extraordinary together.", btn: "Get in Touch →" }
    },
    ContactsPage: {
        hero: { eyebrow: "Get In Touch", title_1: "Let's", title_accent: "Talk", sub: "Have a project in mind? Drop us a line and we'll get back to you with a custom quote and proposed timeline." },
        form: { name_lbl: "Your Name", name_plh: "John Doe", email_lbl: "Email Address", email_plh: "john@company.com", type_lbl: "Project Type", type_opt_ph: "Select a service...", type_opts: { "video-editing": "Video Editing", "color-grading": "Color Grading", "motion-graphics": "Motion Graphics", "vfx": "VFX & Compositing", "audio-post": "Audio Post-Production", "full-post": "Full Post-Production", "other": "Other" }, budget_lbl: "Budget Range", budget_opt_ph: "Select budget...", budget_opts: { "under-5k": "Under $5,000", "5k-15k": "$5,000 – $15,000", "15k-50k": "$15,000 – $50,000", "50k-plus": "$50,000+", "not-sure": "Not sure yet" }, msg_lbl: "Tell Us About Your Project", msg_plh: "Describe your project, timeline, and any specific requirements...", submit: "Send Brief" },
        info: { title: "Contact Info", "Email Us": "hello@frameforge.studio", "Call Us": "+1 (555) 234-5678", "Studio Location": "42 Post Lane, Suite 8\\nLos Angeles, CA 90028", "Response Time": "We reply within 4 business hours", avail_strong: "Currently accepting projects", avail_next: "Next available slot: Q3 2026" }
    },
    ProjectsPage: {
        hero: { eyebrow: "Portfolio", title_1: "Work That", title_accent: "Speaks", sub: "Selected projects spanning brand films, documentaries, social content, and beyond." },
        filters: { "All": "All", "Brand Film": "Brand Film", "Documentary": "Documentary", "Social": "Social", "Commercial": "Commercial", "Music Video": "Music Video" },
        projects: {
            "axiom-sport": { category: "Brand Film", title: "Axiom Sport — Global Launch", description: "A cinematic product launch film distributed across 14 markets. Full edit, color grade, and international versioning." },
            "silent-frames": { category: "Documentary", title: "Silent Frames", description: "Feature documentary on urban street photographers. Selected for three international film festivals." },
            "neon-nights": { category: "Social", title: "Neon Nights — Club Series", description: "24-episode vertical social series. Combined 18M+ views across platforms in first 30 days." },
            "luxe-tvc": { category: "Commercial", title: "Luxe Interiors TVC", description: "30-second broadcast commercial with VFX compositing and luxury color treatment." },
            "pulse-mv": { category: "Music Video", title: "Pulse — Official Music Video", description: "Chart-topping artist's visual release. Full edit, VFX, and custom animated elements." },
            "summit-reel": { category: "Brand Film", title: "Summit 2024 Highlight Reel", description: "Multi-camera event coverage condensed into a high-energy highlight reel." }
        },
        cta: { title: "Your Project Could Be Next", sub: "Let's create something you're proud to share.", btn: "Start a Conversation →" }
    },
    ServicesPage: {
        hero: { title_1: "End-to-End", title_accent: "Post-Production", sub: "We offer a full suite of finishing services under one roof. Work with us for the entire process, or bring us in for specific disciplines." },
        services: {
            "offline-edit": { title: "Offline Editing", description: "The foundation of every great piece. We shape the narrative, establish pacing, and build the story structure. We cut on Premiere Pro, Avid, or DaVinci depending on your workflow needs.", tags: ["Narrative", "Documentary", "Commercial"], features: ["Narrative structure development", "Multi-cam assembly", "Dialogue and performance selection", "Pacing and rhythmic cutting"] },
            "color-grade": { title: "Color Grading", description: "We don't just balance shots — we create a look. Our grading suite is calibrated for cinema and broadcast standards, ensuring your film looks perfect on a 60-foot screen or an iPhone.", tags: ["DaVinci Resolve", "HDR", "Look Dev"], features: ["Log to Rec.709 / Rec.2020 transforms", "Custom LUT development for on-set", "Shot matching and continuity", "Stylised look development"] },
            "motion-vfx": { title: "Motion & VFX", description: "From invisible clean-ups to full CG product integrations. We handle 2D motion graphics, kinetic typography, green-screen keying, and compositing.", tags: ["After Effects", "Nuke", "Cinema 4D"], features: ["Wire removal & clean-up", "Screen replacements", "2D/3D Title sequences", "Motion tracking & rotoscoping"] },
            "audio-post": { title: "Audio Post", description: "Video is 50% sound. We clean up production audio, design immersive soundscapes, and deliver broadcast-compliant mixes that punch through.", tags: ["Sound Design", "Mix", "Foley"], features: ["Dialogue clean-up (iZotope RX)", "Custom sound design and Foley", "Music search and licensing", "Stereo & 5.1 mixing"] }
        },
        cta: { title: "Ready to Cut?", sub: "Send us your brief, and we'll assemble the perfect team and workflow for your project.", btn: "Get a Quote →" }
    }
};

const pagesDe = {
    AboutPage: {
        hero: { eyebrow: "Unsere Geschichte", title_1: "Wir leben", title_accent: "Im Schnitt", sub: "FrameForge ist eine Boutique-Postproduktion mit Leidenschaft fürs Handwerk. Wir schneiden nicht nur Video — wir erschaffen Emotionen, Bild für Bild." },
        stats: { "250+": "Abgeschlossene Projekte", "98%": "Kundenzufriedenheit", "7+": "Jahre Erfahrung", "40+": "Award-Nominierungen" },
        mission: { eyebrow: "Unsere Philosophie", title_1: "Guter Schnitt ist", title_accent: "Unsichtbar", body_1: "Der beste Schnitt ist der, den das Publikum nie bemerkt. Es ist zu sehr damit beschäftigt, die Geschichte zu fühlen. Bei FrameForge dient jede Entscheidung — jedes gehaltene Bild, jeder gewählte Übergang, jede Farbkorrektur — vor allem der Erzählung.", body_2: "Wir haben dieses Studio aus einer einfachen Überzeugung heraus gegründet: Postproduktion verdient die gleiche kreative Investition wie die Produktion selbst. Großartiges Material, schlecht geschnitten, ist verschwendetes Potenzial. Wir sind da, um dieses Potenzial freizusetzen.", quote: "\"Kino ist ein Spiegel, durch den wir uns oft selbst sehen.\"", quote_attr: "— Martin Scorsese" },
        team: { eyebrow: "Das Team", title_1: "Die Köpfe hinter der", title_accent: "Magie", members: { "Marco Visconti": { role: "Gründer & Lead Editor", bio: "Ehemaliger Spielfilm-Editor mit Credits für 3 Sundance-Einreichungen. Marco gründete FrameForge, um Kinoqualität in jedes Format zu bringen." }, "Priya Nair": { role: "Senior Colorist", bio: "Zertifizierter DaVinci Resolve Colorist. Priyas Farbpaletten sind unverkennbar cineastisch." }, "Remy Fontaine": { role: "Motion Design Lead", bio: "Motion Designer und After Effects-Spezialist. Remy verwandelt statische Markenidentitäten in kinetische, lebendige Animationen." }, "Aaliyah Brooks": { role: "VFX & Compositing", bio: "Nuke-zertifizierter Compositor mit einer Leidenschaft für unsichtbare Effekte. Aaliyah lässt das Unmögliche mühelos aussehen." } } },
        awards: { eyebrow: "Anerkennung", title: "Branchenauszeichnungen", items: ["Cannes Corporate Media Award — Silber", "One Show — Merit, Online Film", "Vimeo Staff Pick — 2023 & 2024", "D&AD Shortlist — Motion Design", "Webby Award — Beste Videoserie"] },
        cta: { title: "Arbeiten Sie mit uns", sub: "Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen.", btn: "Kontakt aufnehmen →" }
    },
    ContactsPage: {
        hero: { eyebrow: "Kontaktieren Sie uns", title_1: "Lassen Sie uns", title_accent: "Reden", sub: "Haben Sie ein Projekt im Kopf? Schreiben Sie uns und wir melden uns mit einem maßgeschneiderten Angebot zurück." },
        form: { name_lbl: "Ihr Name", name_plh: "Max Mustermann", email_lbl: "E-Mail Adresse", email_plh: "max@firma.de", type_lbl: "Projekttyp", type_opt_ph: "Wählen Sie einen Service...", type_opts: { "video-editing": "Videoschnitt", "color-grading": "Farbkorrektur", "motion-graphics": "Motion Graphics", "vfx": "VFX & Compositing", "audio-post": "Audio-Postproduktion", "full-post": "Komplette Postproduktion", "other": "Sonstiges" }, budget_lbl: "Budgetrahmen", budget_opt_ph: "Budget wählen...", budget_opts: { "under-5k": "Unter 5.000 €", "5k-15k": "5.000 € – 15.000 €", "15k-50k": "15.000 € – 50.000 €", "50k-plus": "50.000 €+", "not-sure": "Noch nicht sicher" }, msg_lbl: "Erzählen Sie uns von Ihrem Projekt", msg_plh: "Beschreiben Sie Ihr Projekt, den Zeitplan und spezielle Anforderungen...", submit: "Briefing senden" },
        info: { title: "Kontaktinformationen", "Email Us": "hallo@frameforge.studio", "Call Us": "+49 (0) 123 45678", "Studio Location": "42 Post Lane, Suite 8\\nLos Angeles, CA 90028", "Response Time": "Wir antworten innerhalb von 4 Geschäftsstunden", avail_strong: "Wir nehmen aktuell Projekte an", avail_next: "Nächster freier Termin: Q3 2026" }
    },
    ProjectsPage: {
        hero: { eyebrow: "Portfolio", title_1: "Arbeit, die", title_accent: "Für uns spricht", sub: "Ausgewählte Projekte, von Markenfilmen über Dokumentationen bis hin zu Social-Media-Content." },
        filters: { "All": "Alle", "Brand Film": "Markenfilm", "Documentary": "Dokumentation", "Social": "Social", "Commercial": "Werbung", "Music Video": "Musikvideo" },
        projects: {
            "axiom-sport": { category: "Markenfilm", title: "Axiom Sport — Global Launch", description: "Ein cineastischer Produktlaunch-Film für 14 Märkte. Inklusive Schnitt, Color Grading und internationalen Versionen." },
            "silent-frames": { category: "Dokumentation", title: "Silent Frames", description: "Dokumentarfilm über Straßenfotografen. Ausgewählt für drei internationale Filmfestivals." },
            "neon-nights": { category: "Social", title: "Neon Nights — Club-Serie", description: "24-teilige Social-Serie für Hochformat. Mehr als 18 Mio. Views über alle Plattformen in den ersten 30 Tagen." },
            "luxe-tvc": { category: "Werbung", title: "Luxe Interiors TVC", description: "30-sekündiger TV-Werbespot mit VFX-Compositing und luxuriösem Farb-Look." },
            "pulse-mv": { category: "Musikvideo", title: "Pulse — Offizielles Musikvideo", description: "Visual für den Release eines Chartstürmers. Kompletter Schnitt, VFX und animierte Elemente." },
            "summit-reel": { category: "Markenfilm", title: "Summit 2024 Highlight Reel", description: "High-Energy-Highlight-Reel eines Multi-Kamera-Events." }
        },
        cta: { title: "Ihr Projekt könnte das nächste sein", sub: "Lassen Sie uns etwas aufbauen, auf das Sie stolz sein können.", btn: "Gespräch beginnen →" }
    },
    ServicesPage: {
        hero: { title_1: "End-to-End", title_accent: "Postproduktion", sub: "Wir bieten das gesamte Leistungsspektrum unter einem Dach. Arbeiten Sie bei den kompletten Projekten mit uns, oder ziehen Sie uns für spezielle Disziplinen hinzu." },
        services: {
            "offline-edit": { title: "Offline-Schnitt", description: "Die Grundlage jedes großartigen Werks. Wir formen die Narration, geben das Tempo vor und bauen die Story. Wir schneiden mit Premiere Pro, Avid oder DaVinci.", tags: ["Narrativ", "Dokumentation", "Werbung"], features: ["Entwicklung von Narrativen Strukturen", "Multi-Cam-Schnitt", "Auswahl von Dialogen", "Pacing & Rhythmus"] },
            "color-grade": { title: "Farbkorrektur", description: "Wir gleichen Aufnahmen nicht nur ab, wir kreieren einen Look. Unsere Grading-Suite ist für Kino- und TV-Standards kalibriert.", tags: ["DaVinci Resolve", "HDR", "Look Dev"], features: ["Log zu Rec.709 / Rec.2020", "LUT-Entwicklung fürs Set", "Shot-Matching", "Stilistisches Look Development"] },
            "motion-vfx": { title: "Motion & VFX", description: "Von nahtlosen Retuschen bis hin zu 3D-Produktintegrationen. 2D-Animations, Green-Screen und Compositing.", tags: ["After Effects", "Nuke", "Cinema 4D"], features: ["Drahtentfernung", "Screen-Ersatz", "Titelsequenzen", "Rotoscoping"] },
            "audio-post": { title: "Audio-Postproduktion", description: "Wir reinigen den Produktionssound, entwerfen Klanglandschaften und mischen final ab.", tags: ["Sounddesign", "Mix", "Foley"], features: ["Rauschunterdrückung", "Sounddesign & Geräusche", "Musik-Lizenzierung", "Stereo- & 5.1-Mischungen"] }
        },
        cta: { title: "Bereit für den Schnitt?", sub: "Senden Sie uns Ihr Briefing – wir stellen Ihnen das perfekte Team zur Verfügung.", btn: "Angebot anfordern →" }
    }
};

const pagesAr = {
    AboutPage: {
        hero: { eyebrow: "قصتنا", title_1: "نحن نعيش", title_accent: "في التحرير", sub: "فريم فورج هو استوديو بوتيك لخدمات ما بعد الإنتاج شغوف بالحرفية. نحن لا نقوم فقط بقطع الفيديو - نحن نبني العاطفة، إطارًا تلو الآخر." },
        stats: { "250+": "مشاريع منجزة", "98%": "رضا العملاء", "7+": "سنوات في المجال", "40+": "ترشيحات لجوائز" },
        mission: { eyebrow: "فلسفتنا", title_1: "التحرير العظيم هو", title_accent: "غير مرئي", body_1: "أفضل تعديل هو الذي لا يلاحظه الجمهور أبدًا. هم مشغولون جدًا بالشعور بالقصة. في فريم فورج، كل قرار يخدم السرد فوق كل شيء.", body_2: "أسسنا هذا الاستوديو بناءً على اعتقاد بسيط: أن ما بعد الإنتاج يستحق نفس الاستثمار الإبداعي مثل الإنتاج نفسه.", quote: "\"السينما مرآة نرى من خلالها أنفسنا غالبًا.\"", quote_attr: "— مارتن سكورسيزي" },
        team: { eyebrow: "الفريق", title_1: "العقول وراء", title_accent: "السحر", members: { "Marco Visconti": { role: "مؤسس ومحرر رئيسي", bio: "محرر أفلام سينمائية سابق مع أعمال مختارة في صندانس. أسس ماركو فريم فورج لجلب الجودة السينمائية إلى كل شكل." }, "Priya Nair": { role: "كبيرة مصححي الألوان", bio: "مصححة ألوان DaVinci معتمدة." }, "Remy Fontaine": { role: "قائد تصميم الحركة", bio: "متخصص في تصميم الحركة و After Effects. يحول ريمي هويات العلامات التجارية الثابتة إلى رسوم متحركة حية." }, "Aaliyah Brooks": { role: "المؤثرات البصرية والدمج", bio: "مركبة نيوك معتمدة تمتلك شغفاً بالتأثيرات الخفية. تجعل المستحيل يبدو بلا مجهود." } } },
        awards: { eyebrow: "التقدير", title: "جوائز الصناعة", items: ["جائزة كان لوسائل الإعلام - فضية", "The One Show - الفيلم عبر الإنترنت", "اختيار طاقم فيميو - 2023 و 2024", "القائمة القصيرة D&AD - موشن ديزاين", "جائزة ويبي - أفضل مسلسل فيديو"] },
        cta: { title: "اعمل معنا", sub: "دعونا نصنع شيئًا غير عاديًا معًا.", btn: "تواصل معنا ←" }
    },
    ContactsPage: {
        hero: { eyebrow: "تواصل معنا", title_1: "دعنا", title_accent: "نتحدث", sub: "هل لديك مشروع في الاعتبار؟ راسلنا وسنعاود الاتصال بك." },
        form: { name_lbl: "اسمك", name_plh: "جون دو", email_lbl: "عنوان البريد الإلكتروني", email_plh: "john@company.com", type_lbl: "نوع المشروع", type_opt_ph: "اختر خدمة...", type_opts: { "video-editing": "تحرير الفيديو", "color-grading": "تصحيح الألوان", "motion-graphics": "الرسوم المتحركة", "vfx": "المؤثرات البصرية والدمج", "audio-post": "ما بعد الإنتاج الصوتي", "full-post": "إنتاج كامل", "other": "آخر" }, budget_lbl: "نطاق الميزانية", budget_opt_ph: "اختر الميزانية...", budget_opts: { "under-5k": "أقل من 5,000 دولار", "5k-15k": "5,000 - 15,000 دولار", "15k-50k": "15,000 - 50,000 دولار", "50k-plus": "50,000+ دولار", "not-sure": "لست متأكدا بعد" }, msg_lbl: "أخبرنا عن مشروعك", msg_plh: "صف مشروعك، والجدول الزمني، وأي متطلبات...", submit: "إرسال الموجز" },
        info: { title: "معلومات الاتصال", "Email Us": "hello@frameforge.studio", "Call Us": "+1 (555) 234-5678", "Studio Location": "42 شارع بوست، الجناح 8\\nلوس أنجلوس، كاليفورنيا", "Response Time": "نرد خلال 4 ساعات عمل", avail_strong: "نقبل المشاريع حاليا", avail_next: "حان الموعد التالي: الربع الثالث من عام 2026" }
    },
    ProjectsPage: {
        hero: { eyebrow: "المحفظة", title_1: "العمل الذي", title_accent: "يتحدث", sub: "مشاريع مختارة تشمل أفلام العلامات التجارية والأفلام الوثائقية والمحتوى الاجتماعي وما بعده." },
        filters: { "All": "الكل", "Brand Film": "فيلم علامة تجارية", "Documentary": "وثائقي", "Social": "اجتماعي", "Commercial": "تجاري", "Music Video": "فيديو موسيقي" },
        projects: {
            "axiom-sport": { category: "فيلم علامة تجارية", title: "حملة إطلاق أكسيوم سبورت", description: "إنتاج شامل لحملة رياضية عالمية، تصحيح ألوان وتسليم بدقة 4K." },
            "silent-frames": { category: "وثائقي", title: "إطارات صامتة", description: "فيلم وثائقي عن مصوري الشوارع. 87 دقيقة، ألوان DaVinci." },
            "neon-nights": { category: "اجتماعي", title: "ليالي النيون — سلسلة نوادي", description: "سلسلة من 24 حلقة. تحرير سريع وإضافات متحركة." },
            "luxe-tvc": { category: "تجاري", title: "إعلان تصميم داخلي فاخر", description: "إعلان تلفزيوني 30 ثانية مع دمج مؤثرات بصرية فاخرة." },
            "pulse-mv": { category: "فيديو موسيقي", title: "نبض — الفيديو الموسيقي الرسمي", description: "قص ألوان وتأثيرات حركية لعمل فني يتصدر القوائم." },
            "summit-reel": { category: "فيلم علامة تجارية", title: "ملخص أحداث القمة 2024", description: "تغطية حدثية شاملة ودمج الكلمات الرئيسية بلمسة فنية عالية." }
        },
        cta: { title: "مشروعك قد يكون التالي", sub: "دعونا ننشئ شيئًا تفخر بمشاركته.", btn: "ابدأ محادثة ←" }
    },
    ServicesPage: {
        hero: { title_1: "في كل مرحلة", title_accent: "ما بعد الإنتاج", sub: "نحن نقدم مجموعة كاملة من خدمات التشطيب تحت سقف واحد. اعمل معنا طوال العملية، أو أحضرنا لتخصصات معينة." },
        services: {
            "offline-edit": { title: "التحرير دون اتصال", description: "نُشكل السرد ونبني بنية القصة باستخدام أفضل البرامج.", tags: ["سردي", "وثائقي", "تجاري"], features: ["تطوير البنية السردية", "تجميع الكاميرات المتعددة", "اختيار الأداء", "التنظيم الإيقاعي"] },
            "color-grade": { title: "تصحيح الألوان", description: "نحن لا نوازن اللقطات فقط - بل ننشئ مظهرًا فريدًا.", tags: ["دافينشي ريزولف", "HDR"], features: ["تحويلات الألوان", "تطوير LUT", "مطابقة اللقطات", "تطوير المظهر"] },
            "motion-vfx": { title: "الرسوم المتحركة والمؤثرات", description: "نتعامل مع الرسوم المتحركة ثنائية الأبعاد والمؤثرات.", tags: ["After Effects", "Nuke"], features: ["إزالة الأسلاك", "استبدال الشاشة", "تسلسلات العناوين", "تتبع الحركة"] },
            "audio-post": { title: "الصوت", description: "الفيديو عبارة عن 50% صوت. نصمم إيقاعات صوتية غامرة ومناسبة للبث.", tags: ["تصميم الصوت", "مكس", "فولي"], features: ["تنظيف الحوار", "تصميم صوتي مخصص", "ترخيص الموسيقى", "اختلاط الاستريو وعمليات 5.1"] }
        },
        cta: { title: "مستعدون للقص؟", sub: "أرسل لنا متطلباتك وسنقوم بتجميع الفريق المثالي لمشروعك.", btn: "احصل على عرض أسعار ←" }
    }
};

fs.writeFileSync('./messages/en.json', JSON.stringify({ ...en, ...pagesEn }, null, 2));
fs.writeFileSync('./messages/de.json', JSON.stringify({ ...de, ...pagesDe }, null, 2));
fs.writeFileSync('./messages/ar.json', JSON.stringify({ ...ar, ...pagesAr }, null, 2));

console.log("Pages translations successfully added.");
