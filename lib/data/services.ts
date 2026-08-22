import { Shield, Fence, HardHat, Warehouse, Factory, Tractor, CheckCircle2, Hammer, LucideIcon } from "lucide-react";

export type ServiceData = {
  slug: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: LucideIcon;
  image: string;
  isMain?: boolean;
  scopeAr: string;
  scopeEn: string;
  suitableForAr: string[];
  suitableForEn: string[];
  featuresAr: string[];
  featuresEn: string[];
  processAr: string[];
  processEn: string[];
};

export const servicesData: ServiceData[] = [
  {
    slug: "security-fencing",
    titleAr: "الشبوك الأمنية",
    titleEn: "Security Fencing",
    descAr: "حلول لحماية وتحديد المواقع والمنشآت حسب متطلبات المشروع والمواصفات الأمنية.",
    descEn: "Solutions for securing and defining sites and facilities based on project and security requirements.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",
    isMain: true,
    scopeAr: "توريد وتركيب الشبوك الأمنية المقاومة للقص والتسلق، مع خيارات الأسلاك الشائكة والشفرات الحادة ودعامات التثبيت الخرسانية والمعدنية.",
    scopeEn: "Supply and installation of anti-cut and anti-climb security fences, with barbed wire, razor coils, and reinforced concrete/metal footing options.",
    suitableForAr: [
      "المواقع الحيوية والمرافق الحكومية",
      "المنشآت الصناعية ومحطات الطاقة والمياه",
      "المناطق المحمية والمشاريع التنموية الكبرى",
      "المستودعات والمجمعات اللوجستية"
    ],
    suitableForEn: [
      "Vital sites and government facilities",
      "Industrial plants, power and water stations",
      "Protected areas and mega development projects",
      "Warehouses and logistics compounds"
    ],
    featuresAr: [
      "مقاومة عالية للقص ومحاولات الاختراق",
      "مجلفنة ومطلية لمقاومة العوامل الجوية القاسية",
      "إمكانية دمج أسلاك الكونسرتينا والشفرات الحادة",
      "تنفيذ دقيق وفق الارتفاعات والمخططات المعتمدة"
    ],
    featuresEn: [
      "High resistance to cutting and intrusion attempts",
      "Galvanized and coated against harsh weather conditions",
      "Integrable with concertina wire and razor coils",
      "Accurate execution based on approved heights and layouts"
    ],
    processAr: [
      "معاينة الموقع ومراجعة المخططات الأمنية",
      "حفر وصب القواعد وتثبيت القوائم المعدنية",
      "شد وتثبيت ألواح وشباك الحماية",
      "تركيب الأسلاك الشائكة والملحقات والتسليم"
    ],
    processEn: [
      "Site inspection and review of security layouts",
      "Excavation, footing casting, and post installation",
      "Tensioning and fixing security mesh panels",
      "Installing barbed wire/accessories and final handover"
    ]
  },
  {
    slug: "steel-fencing",
    titleAr: "السياج الحديدي",
    titleEn: "Steel Fencing",
    descAr: "للمشاريع والمرافق والمنشآت وفق نطاق العمل والمواصفات المطلوبة.",
    descEn: "For projects, facilities, and structures according to the scope of work and required specifications.",
    icon: Fence,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/iron-fence/iron-fenc.jpeg",
    isMain: true,
    scopeAr: "تصنيع وتوريد وتركيب السياج الحديدي والأسوار المعدنية بمقاسات وتصاميم هندسية مطابقة لمتطلبات المشروع.",
    scopeEn: "Fabrication, supply, and installation of steel fences and metal barriers tailored to project architectural and engineering criteria.",
    suitableForAr: [
      "المنشآت التجارية والمباني الإدارية",
      "المجمعات السكنية والمشاريع التعليمية",
      "الحدائق والمرافق العامة والبلدية",
      "تحديد محيط العقارات والمخططات"
    ],
    suitableForEn: [
      "Commercial facilities and administrative buildings",
      "Residential compounds and educational projects",
      "Parks, public, and municipal amenities",
      "Property perimeters and land subdivisions"
    ],
    featuresAr: [
      "صلابة ومتانة عالية لعمر افتراضي طويل",
      "دهانات حرارية ومقاومة للصدأ والتآكل",
      "تنوع التصاميم الهندسية والارتفاعات",
      "تثبيت هندسي متين يتحمل الرياح والضغط"
    ],
    featuresEn: [
      "High rigidity and durability for long service life",
      "Thermal powder coating and anti-corrosion finishes",
      "Diverse architectural designs and height configurations",
      "Solid anchoring engineered for wind load and impact"
    ],
    processAr: [
      "دراسة المقاسات واعتماد التصميم الهندسي",
      "تجهيز المواد والطلاءات المعتمدة",
      "تركيب القواعد والأعمدة والربط الإنشائي",
      "التثبيت النهائي ومعالجة المفاصل والدهان"
    ],
    processEn: [
      "Dimension evaluation and blueprint approval",
      "Material preparation and certified coatings",
      "Post erection and structural tie-in",
      "Final assembly, joint treatment, and finish touch-ups"
    ]
  },
  {
    slug: "shades",
    titleAr: "المظلات",
    titleEn: "Shades & Canopies",
    descAr: "توريد وتنفيذ للمشاريع والمواقع حسب الاستخدام والمقاسات.",
    descEn: "Supply and installation for projects and sites based on usage and dimensions.",
    icon: HardHat,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/Outdoor-Canopies/outdoor-conb.png",
    isMain: true,
    scopeAr: "توريد وتنفيذ مظلات مواقف السيارات، مظلات الساحات والمشاريع، والمظلات القماشية والحديدية والشد الإنشائي وفق المواصفات.",
    scopeEn: "Supply and execution of car parking shades, yard covers, fabric/tensile structures, and steel canopies built to specifications.",
    suitableForAr: [
      "مواقف سيارات المنشآت والجهات الحكومية والخاصة",
      "المباني التعليمية والمدارس والجامعات",
      "الساحات الخارجية والمرافق العامة والحدائق",
      "المستودعات ومناطق التحميل والتفريغ"
    ],
    suitableForEn: [
      "Government, corporate, and public parking areas",
      "Educational campuses, schools, and universities",
      "Outdoor plazas, public parks, and recreational zones",
      "Warehouse loading docks and staging yards"
    ],
    featuresAr: [
      "أقمشة عالية المقاومة للأشعة فوق البنفسجية والحرارة (PVC / PVDF / HDPE)",
      "هياكل فولاذية معالجة ومقاومة للتآكل",
      "تصاميم متنوعة (كابولي، مخروطي، هرمي، مقوس)",
      "عزل حراري فعال وحماية من الشمس والأمطار"
    ],
    featuresEn: [
      "High-grade UV and heat-resistant fabrics (PVC / PVDF / HDPE)",
      "Treated, anti-corrosive structural steel frames",
      "Varied designs (cantilever, conical, pyramid, arched)",
      "Effective thermal shading and weather protection"
    ],
    processAr: [
      "رفع المساحات الميدانية وتحديد نوع التغطية",
      "تصنيع الهياكل الحديدية ومعالجتها",
      "تثبيت القواعد والشدادات الإنشائية",
      "تركيب القماش والشد والتسليم النهائي"
    ],
    processEn: [
      "Field dimension survey and shade type selection",
      "Steel frame fabrication and surface treatment",
      "Anchor installation and structural bracing",
      "Fabric tensioning and final inspection"
    ]
  },
  {
    slug: "warehouse-hangars",
    titleAr: "هياكل الهناجر",
    titleEn: "Warehouse Hangars",
    descAr: "توريد وتركيب هياكل الهناجر للمستودعات والمرافق وفق المواصفات.",
    descEn: "Supply and installation of hangar structures for warehouses and facilities according to specifications.",
    icon: Warehouse,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/Hangars/IMG_0897.JPG",
    isMain: true,
    scopeAr: "تصنيع وتركيب الهياكل الحديدية للهناجر والمستودعات والورش ومظلات التخزين الصناعية والزراعية بجميع المقاسات.",
    scopeEn: "Fabrication and assembly of structural steel frames for hangars, storage warehouses, workshops, and agricultural/industrial sheds.",
    suitableForAr: [
      "المستودعات اللوجستية ومراكز التوزيع",
      "الورش الصناعية وخطوط الإنتاج",
      "المشاريع والمستودعات الزراعية وحظائر المواشي",
      "مرافق التخزين التجاري والشركات"
    ],
    suitableForEn: [
      "Logistics warehouses and distribution hubs",
      "Industrial workshops and assembly plants",
      "Agricultural storage and livestock barns",
      "Commercial warehousing and trade facilities"
    ],
    featuresAr: [
      "هياكل حديدية متينة مصممة لتحمل الأحمال والرياح",
      "تغطيات معزولة بساندوتش بانل أو صاج مجلفن",
      "استغلال مثالي للمساحات الداخلية بدون أعمدة وسيطة",
      "تنفيذ وفق كود البناء والمخططات المعتمدة"
    ],
    featuresEn: [
      "Rigid steel framing engineered for structural load and wind resistance",
      "Insulated sandwich panel or corrugated sheet cladding",
      "Optimized clear-span interiors maximizing usable space",
      "Built in full compliance with approved building codes and plans"
    ],
    processAr: [
      "دراسة المخططات الإنشائية وجدول الكميات",
      "صب القواعد وتركيب مسامير التثبيت (Anchor Bolts)",
      "نصب الأعمدة والجمالونات والمدادات (Purlins)",
      "تركيب التغطيات والعوازل والتشطيبات النهائية"
    ],
    processEn: [
      "Reviewing structural drawings and BOQ",
      "Foundation pouring and anchor bolt placement",
      "Erecting columns, trusses, and purlins",
      "Cladding, insulation installation, and finishing"
    ]
  },
  {
    slug: "industrial-fencing",
    titleAr: "شبوك المنشآت الصناعية",
    titleEn: "Industrial Fencing",
    descAr: "تأمين وتسوير المواقع والمرافق الصناعية بحلول مخصصة.",
    descEn: "Securing and fencing industrial sites and facilities with customized solutions.",
    icon: Factory,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/industrial-fence/industrial-shobok.webp",
    scopeAr: "حلول تسوير مخصصة للمصانع والمناطق الصناعية ومحطات الطاقة والمرافق التابعة للمدن الصناعية وفق المعايير المعتمدة.",
    scopeEn: "Tailored perimeter fencing solutions for factories, industrial parks, power sub-stations, and utility compounds.",
    suitableForAr: [
      "المدن والمجمعات الصناعية",
      "المصانع وورش التصنيع الكبرى",
      "محطات معالجة المياه ومحطات الوقود",
      "مواقع المقاولات ومشاريع التعدين"
    ],
    suitableForEn: [
      "Industrial cities and industrial parks",
      "Manufacturing factories and heavy workshops",
      "Water treatment plants and fuel terminals",
      "Contracting sites and mining areas"
    ],
    featuresAr: [
      "مقاومة للظروف الصناعية والانبعاثات",
      "أسلاك سميكة ومجلفنة شديدة التحمل",
      "بوابات صناعية متحركة ومفصلية بمقاسات كبيرة",
      "مرونة في التثبيت على مختلف تضاريس المواقع"
    ],
    featuresEn: [
      "Resistant to industrial fumes and atmospheric conditions",
      "Heavy-duty galvanized thick gauge wire",
      "Large-span sliding and swing industrial gates",
      "Adaptable installation across varying ground terrains"
    ],
    processAr: [
      "تحديد حدود الموقع الصناعي والمداخل",
      "تنفيذ القواعد الخرسانية والأعمدة الحاملة",
      "تركيب شبك التسوير وشد الأسلاك الداعمة",
      "تركيب البوابات والتسليم الفني"
    ],
    processEn: [
      "Industrial perimeter delineation and access point planning",
      "Concrete footings and load-bearing post installation",
      "Mesh fixing and reinforcement wire tensioning",
      "Gate installation and technical commissioning"
    ]
  },
  {
    slug: "farm-fencing",
    titleAr: "شبوك المزارع",
    titleEn: "Farm Fencing",
    descAr: "حلول تسوير وحماية الأراضي والمشاريع الزراعية المختلفة.",
    descEn: "Fencing and protection solutions for various agricultural lands and projects.",
    icon: Tractor,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/agricultural-fence/farms-shobok.jpg",
    scopeAr: "تسوير وحماية الأراضي الزراعية والمزارع والمحميات ومشاريع الإنتاج الحيواني والنباتي بأطوال ومساحات شاسعة.",
    scopeEn: "Perimeter enclosure and protection for agricultural lands, farms, reserves, and livestock/crop production developments.",
    suitableForAr: [
      "المزارع الخاصة والمشاريع الزراعية الاستثمارية",
      "محميات النباتات والحيوانات والمنتزهات البرية",
      "مشاريع الدواجن وتربية المواشي والأعلاف",
      "حماية وتحديد أراضي ومخططات المزارع"
    ],
    suitableForEn: [
      "Private farms and agribusiness investment projects",
      "Nature reserves, wildlife enclosures, and rural parks",
      "Livestock, poultry, and forage farming projects",
      "Agricultural boundary delineation and land protection"
    ],
    featuresAr: [
      "حماية فعالة للمحاصيل والممتلكات من التعديات والحيوانات السائبة",
      "تكلفة اقتصادية متوازنة للمساحات والأطوال الكبيرة",
      "أسلاك مجلفنة مقاومة للصدأ والرطوبة والرياح الصحراوية",
      "خيارات متعددة للأعمدة (حديد، زوايا، أنابيب مجلفنة)"
    ],
    featuresEn: [
      "Effective crop and property protection from stray animals",
      "Cost-effective solution for extensive perimeters and large acreage",
      "Galvanized wire resisting rust, humidity, and desert winds",
      "Multiple post options (angle iron, galvanized pipes, T-posts)"
    ],
    processAr: [
      "مسح الحدود الطولية للأرض الزراعية",
      "حفر وتثبيت الأعمدة الرئيسية والوسيطة",
      "فرد وشد شبك المزارع بدقة",
      "تثبيت الأسلاك الشائكة العلوية والبوابات"
    ],
    processEn: [
      "Boundary surveying across agricultural land",
      "Digging and securing corner/line posts",
      "Rolling and tensioning farm mesh",
      "Affixing top barbed strands and field gates"
    ]
  },
  {
    slug: "galvanized-fencing",
    titleAr: "الشبوك المجلفنة",
    titleEn: "Galvanized Fencing",
    descAr: "شبوك مقاومة للصدأ والعوامل الجوية للمشاريع طويلة الأجل.",
    descEn: "Rust-resistant and weatherproof fencing for long-term projects.",
    icon: Shield,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/galvanized-fence/golvan.jpg",
    scopeAr: "توريد وتركيب الشبوك المجلفنة بالغمس الساخن (Hot-Dip Galvanized) والبارد بمختلف السماكات والفتحات للأغراض العامة والتخصصية.",
    scopeEn: "Supply and installation of hot-dip and electro-galvanized wire mesh in varying gauges and apertures for all site applications.",
    suitableForAr: [
      "مشاريع البنية التحتية والطرق السريعة",
      "المواقع الساحلية والمعرضة لنسب رطوبة مرتفعة",
      "تسوير المنشآت الرياضية والملاعب",
      "الأراضي والمشاريع الاستثمارية طويلة الأمد"
    ],
    suitableForEn: [
      "Infrastructure works and highway corridors",
      "Coastal sites and high-humidity environments",
      "Sports facility, court, and stadium fencing",
      "Long-term land assets and investment plots"
    ],
    featuresAr: [
      "طبقة جلفنة كثيفة توفر حماية فائقة ضد الصدأ والتآكل",
      "عمر افتراضي طويل بأقل متطلبات صيانة",
      "قوة شد عالية ومقاومة للصدمات الميكانيكية",
      "توافق مع مختلف متطلبات واشتراطات الهيئات والوزارات"
    ],
    featuresEn: [
      "Heavy zinc coating delivering superior rust protection",
      "Extended service lifecycle with minimal maintenance",
      "High tensile strength and mechanical impact resistance",
      "Compliance with government and municipal standards"
    ],
    processAr: [
      "اختيار سماكة السلك وفتحة الشبك المطلوبة",
      "تثبيت القوائم المجلفنة على خط السور",
      "شد وربط الشبك المجلفن باستخدام أسلاك وأربطة مجلفنة",
      "فحص استقامة السور والتسليم النهائي"
    ],
    processEn: [
      "Selecting wire gauge and mesh aperture specifications",
      "Erecting galvanized posts along perimeter alignment",
      "Tensioning and binding galvanized mesh with zinc ties",
      "Alignment verification and final acceptance"
    ]
  },
  {
    slug: "supply-install",
    titleAr: "توريد وتركيب شامل",
    titleEn: "Turnkey Supply & Install",
    descAr: "حل شامل لتنفيذ المشروع بالكامل من التوريد حتى التسليم النهائي.",
    descEn: "A comprehensive solution for full project execution, from supply to final delivery.",
    icon: CheckCircle2,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/supply-install/supply-install.jpeg",
    scopeAr: "خدمة متكاملة تشمل تأمين المواد المعتمدة، النقل إلى الموقع، وتجهيز فرق العمل المتخصصة لتنفيذ المشروع وتسليمه حسب المخططات.",
    scopeEn: "Integrated turnkey service encompassing material procurement, site logistics, and specialized field crews for complete project handover.",
    suitableForAr: [
      "الشركات والمقاولون الرئيسيون",
      "المشاريع الحكومية والتنموية",
      "المستثمرون وأصحاب المنشآت",
      "المشاريع ذات الجداول الزمنية المحددة"
    ],
    suitableForEn: [
      "General contractors and EPC companies",
      "Government and development projects",
      "Commercial investors and property owners",
      "Time-sensitive fast-track projects"
    ],
    featuresAr: [
      "إدارة متكاملة للمشروع من نقطة تواصل واحدة",
      "ضمان الالتزام بالمواصفات الفنية المعتمدة",
      "كفاءة وسرعة في التوريد والتنفيذ الميداني",
      "إشراف فني مستمر حتى الاستلام النهائي"
    ],
    featuresEn: [
      "Single-point-of-contact project management",
      "Guaranteed compliance with approved specifications",
      "Logistical speed and efficient on-site execution",
      "Continuous technical supervision until sign-off"
    ],
    processAr: [
      "توقيع العقد واعتماد جداول التوريد والتنفيذ",
      "شحن المواد وتجهيز فرق العمل في الموقع",
      "تنفيذ الأعمال الميدانية وفق الخطة المعتمدة",
      "المعاينة الفنية والتسليم النهائي للمشروع"
    ],
    processEn: [
      "Contract agreement and schedule sign-off",
      "Material mobilization and site crew deployment",
      "Field execution following project milestones",
      "Technical inspection and project handover"
    ]
  },
  {
    slug: "supply-only",
    titleAr: "توريد فقط",
    titleEn: "Material Supply Only",
    descAr: "توفير المواد حسب المواصفات والكميات المطلوبة للمشروع.",
    descEn: "Providing materials according to the required specifications and quantities for the project.",
    icon: CheckCircle2,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/supply-install/supply-only.jpeg",
    scopeAr: "تأمين وتوريد كافة أنواع الشبوك، الأسياج، الأنابيب، الأعمدة، الأقمشة، والملحقات مباشرة إلى موقع المشروع بالكميات والمواصفات المطلوبة.",
    scopeEn: "Procurement and direct delivery of all types of fencing mesh, steel posts, pipes, fabrics, and accessories to site as per specified quantities.",
    suitableForAr: [
      "المقاولون الذين يمتلكون فرق تركيب خاصة",
      "الجهات الحكومية والشركات التي تدير التنفيذ الذاتي",
      "تجار الجملة والمشاريع الكبيرة",
      "مشاريع الصيانة والتجديد الجزئي"
    ],
    suitableForEn: [
      "Contractors with in-house installation labor",
      "Entities managing internal execution",
      "Wholesale distributors and mega projects",
      "Maintenance and perimeter upgrade projects"
    ],
    featuresAr: [
      "مواد مطابقة للمواصفات القياسية المعتمدة",
      "أسعار تنافسية للكميات والمشاريع الكبيرة",
      "مرونة في التوريد والتوصيل لمختلف مناطق المملكة",
      "توفير كافة الملحقات والقطع اللازمة للتركيب"
    ],
    featuresEn: [
      "Materials adhering to certified national standards",
      "Competitive commercial rates for bulk quantities",
      "Reliable delivery across all Saudi regions",
      "Complete provision of fittings and mounting accessories"
    ],
    processAr: [
      "استلام جدول الكميات والمواصفات المطلوبة",
      "تجهيز المواد وتعبئتها ومطابقة الجودة",
      "التنسيق اللوجستي وجدولة الشحن للموقع",
      "استلام العميل للمواد ومطابقة الكميات"
    ],
    processEn: [
      "Receiving BOQ and technical specifications",
      "Material staging, packaging, and QA inspection",
      "Logistics coordination and site dispatch",
      "Client receipt and quantity verification"
    ]
  },
  {
    slug: "install-only",
    titleAr: "تركيب فقط",
    titleEn: "Installation Only",
    descAr: "تنفيذ الأعمال بواسطة فريق متخصص بناءً على المواد المتوفرة.",
    descEn: "Execution of works by a specialized team based on available materials.",
    icon: Hammer,
    image: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/services/supply-install/install-only.jpeg",
    scopeAr: "تقديم خدمات العمالة الفنية المتخصصة والإشراف الهندسي لتركيب الشبوك والسياج والمظلات والهياكل باستخدام المواد المتاحة لدى العميل.",
    scopeEn: "Deploying skilled technical labor and site supervisors to execute fencing, shade, and structure installations using client-provided materials.",
    suitableForAr: [
      "العملاء والشركات التي قامت بشراء المواد مسبقاً",
      "المشاريع التي تحتاج كفاءات تركيب متخصصة وسريعة",
      "أعمال إعادة التركيب أو النقل من موقع لآخر",
      "استكمال أعمال سياج وهياكل متوقفة"
    ],
    suitableForEn: [
      "Clients who have already procured materials",
      "Projects requiring expedited, skilled installation teams",
      "Relocation or re-erection of existing fencing/shades",
      "Completing partially executed barrier or structural works"
    ],
    featuresAr: [
      "كوادر فنية مدربة وذات خبرة طويلة في الميدان",
      "معدات وأدوات تركيب متكاملة وحديثة",
      "دقة في الاستقامة وشد الأسلاك وتثبيت القواعد",
      "التزام صارم بإجراءات السلامة المهنية في الموقع"
    ],
    featuresEn: [
      "Well-trained technicians with extensive field experience",
      "Equipped with modern erection tools and machinery",
      "Precision alignment, tensioning, and secure anchorage",
      "Strict compliance with on-site occupational safety standards"
    ],
    processAr: [
      "معاينة الموقع ومراجعة المواد المتاحة لدى العميل",
      "تحديد جدول العمل وتجهيز فريق التركيب والمعدات",
      "بدء أعمال التركيب الميداني بإشراف مستمر",
      "الفحص النهائي والتسليم للمشرف المعتمد"
    ],
    processEn: [
      "Site inspection and checking client-supplied stock",
      "Work schedule agreement and team mobilization",
      "Commencing field erection under continuous oversight",
      "Final inspection and sign-off with the client rep"
    ]
  }
];

