export type Question = {
  week: number;
  q: number;
  question: string;
  options: string[];
  answerIndex: number;
  trick?: string;
};

export const WEEK_TITLES: Record<number, string> = {
  1: "Forest Basics & Values",
  2: "Silvics, Succession & Productivity",
  3: "Soils & Weathering",
  4: "Mensuration",
  5: "Surveying, Sampling & LiDAR",
  6: "Wildlife, Population & Fire",
  7: "Regeneration & Silvicultural Systems",
  8: "Shelterwood & Selection Systems",
  9: "Harvesting & Marking",
  10: "Nursery & Seed",
  11: "Conservation",
  12: "Mixed Revision",
};

export const WEEK_TRICKS: Record<number, string> = {
  1: "Use value = you DO something with it. Non-use = it just exists. Bequest = baccho ke liye.",
  2: "Silv-ICS = stud-Y (science). Silvi-CULTURE = cultivation (art). NPP = APAR × LUE.",
  3: "Physical = force. Chemical = reaction. Biological = living. Khadar+Bangar=alluvial. Regur=black.",
  4: "Basal Area (m²) = 0.7854 × d². Form factor: Absolute=base, Normal=10% ht, False=breast ht (1.37m).",
  5: "Accuracy=Aim correct. Precision=Points clustered. LiDAR distance = c×t/2. Geodetic >250 sq km.",
  6: "HIPPO = Habitat loss, Invasive, Pollution, Population, Over-harvest. IPAT = P×A×T. Climbers→ladder fire.",
  7: "Silvicultural sequence: Harvest → Regenerate → Tend (HRT). Taungya = with villagers.",
  8: "Shelterwood sequence: P-S-S-F (Preparatory→Seeding→Secondary→Final). Selection = inverse-J curve.",
  9: "Marking colours: Blue=keep (Bach jaye), Red=boundary, White=research, Yellow=fell. Skidding=drag.",
  10: "Storage = LOW & LOW. Sunken=Save water; Raised=Remove water. Ber=shell crack; Teak=wet-dry.",
  11: "In-situ=natural place. Ex-situ=outside (zoo, captive breeding). Conservation=use; Preservation=no use.",
  12: "Mixed revision — focus on form factors, soil types, and definitions.",
};

export const QUESTIONS: Question[] = [
  // ---------- WEEK 1 ----------
  { week:1, q:1, question:"Which of these is not a consumptive value?", options:["timber","firewood","non-timber forest products","education"], answerIndex:3, trick:"Education = knowledge, not consumed physically." },
  { week:1, q:2, question:"Tropical moist forests do not include", options:["broadleaved forests","wet evergreen forests","semi-evergreen forests","moist deciduous forests"], answerIndex:0, trick:"Broadleaved → montane sub-tropical, not tropical moist." },
  { week:1, q:3, question:"Montane sub-tropical forests do not include", options:["broadleaved forests","pine forests","semi-evergreen forests","dry evergreen forests"], answerIndex:2, trick:"Semi-evergreen belongs to tropical, not sub-tropical." },
  { week:1, q:4, question:"According to the Supreme Court, the word forest must be understood according to its", options:["biological meaning","ecological meaning","silvicultural meaning","dictionary meaning"], answerIndex:3, trick:"SC = dictionary meaning of 'forest'." },
  { week:1, q:5, question:"Which of these is not a use value?", options:["direct value","indirect value","option value","existence value"], answerIndex:3, trick:"Existence = non-use." },
  { week:1, q:6, question:"The value of leaving use and non-use values for offspring or future generations is called", options:["altruistic value","bequest value","existence value","option value"], answerIndex:1, trick:"Bequest = Baccho ke liye." },
  { week:1, q:7, question:"Which of these is not a non-use value?", options:["direct value","existence value","altruistic value","bequest value"], answerIndex:0, trick:"Direct = use value." },
  { week:1, q:8, question:"According to the Supreme Court, the term forest land includes", options:["some area recorded as forest in the Government record according to ownership","any area recorded as forest in the Government record according to ownership","some area recorded as forest in the Government record irrespective of ownership","any area recorded as forest in the Government record irrespective of ownership"], answerIndex:3, trick:"ANY area, IRRESPECTIVE of ownership." },
  { week:1, q:9, question:"Which of these is not a forest type found in India?", options:["Mediterranean dry","Tropical dry","Montane temperate","Alpine"], answerIndex:0, trick:"India has no Mediterranean type." },
  { week:1, q:10, question:"The term 'forest' originates from", options:["Latin foris meaning outside","Greek foris meaning outside","Latin foris meaning trees","Greek foris meaning trees"], answerIndex:0, trick:"Latin 'foris' = outside." },

  // ---------- WEEK 2 ----------
  { week:2, q:1, question:"Which of these is abiotic factor?", options:["vines","trees","reptiles","water"], answerIndex:3, trick:"Only non-living option." },
  { week:2, q:2, question:"A climax caused by wildfires is an example of", options:["climatic climax","edaphic climax","disclimax","catastrophic climax"], answerIndex:3, trick:"Wildfire = catastrophe." },
  { week:2, q:3, question:"The study of life history / general features of forest crops with respect to environmental factors is called", options:["foresticulture","monoculture","silviculture","silvics"], answerIndex:3, trick:"Silv-ICS = stud-Y." },
  { week:2, q:4, question:"The art and science of cultivating forest crops is called", options:["foresticulture","monoculture","silviculture","silvics"], answerIndex:2, trick:"Silvi-CULTURE = cultivation." },
  { week:2, q:5, question:"Which of these is not a characteristic of pioneer species", options:["ability to grow on bare rocks","ability to tolerate extreme temperatures","large size","short life span"], answerIndex:2, trick:"Pioneers are small/hardy, not large." },
  { week:2, q:6, question:"At compensation point,", options:["photosynthesis = respiration","photosynthesis > respiration","photosynthesis < respiration","none of these"], answerIndex:0, trick:"Compensation = balance." },
  { week:2, q:7, question:"Net primary productivity is given by", options:["APAR + LUE","APAR × LUE","APAR - LUE","APAR ÷ LUE"], answerIndex:1, trick:"NPP = APAR × LUE (multiply)." },
  { week:2, q:8, question:"Lithosere is an example of", options:["hydrosere","xerosere","psammosere","halosere"], answerIndex:1, trick:"Litho=rock=dry=xerosere." },
  { week:2, q:9, question:"Practical application of scientific, technical and economic principles of forestry comes under which branch?", options:["forest management","forest economics","forest mensuration","forest protection"], answerIndex:0, trick:"Practical application = management." },
  { week:2, q:10, question:"In the context of plant nutrition, boron is", options:["macronutrient","micronutrient","primary nutrient","secondary nutrient"], answerIndex:1, trick:"B, Zn, Cu, Mn = micros." },

  // ---------- WEEK 3 ----------
  { week:3, q:1, question:"Thermal stresses lead to", options:["chemical weathering","physical weathering","biological weathering","none of the above"], answerIndex:1, trick:"Heat/cold stress = physical." },
  { week:3, q:2, question:"Cryofracturing is an example of", options:["chemical weathering","physical weathering","biological weathering","none of the above"], answerIndex:1, trick:"Cryo=ice=physical." },
  { week:3, q:3, question:"Carbonation is an example of", options:["chemical weathering","physical weathering","biological weathering","none of the above"], answerIndex:0, trick:"Carbonation = chemical reaction." },
  { week:3, q:4, question:"Khadar is a type of", options:["black cotton soil","alluvial soil","saline soil","red and yellow soil"], answerIndex:1, trick:"Khadar = newer alluvial." },
  { week:3, q:5, question:"Self ploughing character is seen in", options:["black cotton soil","alluvial soil","saline soil","red and yellow soil"], answerIndex:0, trick:"Black cotton swells & cracks → self-ploughs." },
  { week:3, q:6, question:"In soil profile, C refers to", options:["organic surface layer","topsoil layer","subsoil layer","substratum layer"], answerIndex:3, trick:"A=top, B=sub, C=substratum." },
  { week:3, q:7, question:"Soil formation is dependent upon", options:["vegetation","time","climate","all of the above"], answerIndex:3, trick:"All factors contribute." },
  { week:3, q:8, question:"Regur is a term for", options:["black cotton soil","alluvial soil","saline soil","red and yellow soil"], answerIndex:0, trick:"Regur = black cotton." },
  { week:3, q:9, question:"Mechanical action of ocean waves is an example of", options:["chemical weathering","physical weathering","biological weathering","none of the above"], answerIndex:1, trick:"Mechanical = physical." },
  { week:3, q:10, question:"Bangar is a type of", options:["black cotton soil","alluvial soil","saline soil","red and yellow soil"], answerIndex:1, trick:"Bangar = older alluvial." },

  // ---------- WEEK 4 ----------
  { week:4, q:1, question:"For false form factor, the reference for the base of the cylinder is", options:["base of the tree","breast height","10% of tree height","20% of tree height"], answerIndex:1, trick:"False = breast height (1.37m)." },
  { week:4, q:2, question:"In India, the breast height is considered to be", options:["1.37 m","1.47 m","1.57 m","2.47 m"], answerIndex:0, trick:"India BH = 1.37 m." },
  { week:4, q:3, question:"3 trees in a 15m × 15m plot, dbh = 25, 30, 35 cm. Find stand basal area in sq m per Ha.", options:["9.6","14.6","21.6","27.6"], answerIndex:0, trick:"BA=0.049+0.071+0.096=0.216; ×10000/225 = 9.6." },
  { week:4, q:4, question:"Measurement of height based on similar triangles comes under", options:["similar measurement","dissimilar measurement","direct measurement","indirect measurement"], answerIndex:3, trick:"Triangles = indirect." },
  { week:4, q:5, question:"In a triangle, θ=60° and hypotenuse c=2 cm. Find the length of the base b.", options:["0.33","0.5","0.75","1"], answerIndex:3, trick:"b = c·cos60° = 2×0.5 = 1." },
  { week:4, q:6, question:"A tree has dbh of 25 cm. Find its basal area in sq m.", options:[".049",".096",".149",".195"], answerIndex:0, trick:"0.7854 × 0.25² = 0.049." },
  { week:4, q:7, question:"For normal form factor, the reference for the base of the cylinder is", options:["base of the tree","breast height","10% of tree height","20% of tree height"], answerIndex:2, trick:"Normal = Near 10% height." },
  { week:4, q:8, question:"A tree has dbh of 35 cm. Find its basal area in sq m.", options:[".049",".096",".149",".195"], answerIndex:1, trick:"0.7854 × 0.35² = 0.096." },
  { week:4, q:9, question:"dob, dub and bark thickness (tb) are related as", options:["dob = dub + tb","dob = dub - tb","dob = dub + 2 × tb","dob = dub - 2 × tb"], answerIndex:2, trick:"Bark on BOTH sides → 2×tb." },
  { week:4, q:10, question:"Eucalyptus stand, avg dbh 30 cm, spacing 3m grid. Find the spacing factor.", options:["5","10","15","data insufficient"], answerIndex:1, trick:"3 / 0.30 = 10." },

  // ---------- WEEK 5 ----------
  { week:5, q:1, question:"The time of flight for LiDAR is 0.00001 sec. Find the distance of the object.", options:["500 m","1000 m","1500 m","2000 m"], answerIndex:2, trick:"d = c·t/2 = 3e8 × 1e-5 /2 = 1500m." },
  { week:5, q:2, question:"A sampling procedure such that each combination has the same chance is referred to as", options:["Simple random sampling","Systematic sampling","Stratified sampling","Multistage sampling"], answerIndex:0, trick:"Equal chance = simple random." },
  { week:5, q:3, question:"Selecting every kth unit starting with random start is", options:["Simple random sampling","Systematic sampling","Stratified sampling","Multistage sampling"], answerIndex:1, trick:"Every kth = systematic." },
  { week:5, q:4, question:"A list of sampling units is called a", options:["frame","window","sample","population"], answerIndex:0, trick:"Sampling list = frame." },
  { week:5, q:5, question:"___ is how close the measured values are to the correct value.", options:["Accuracy","Precision","Bias","Variance"], answerIndex:0, trick:"Accuracy = Aim correct." },
  { week:5, q:6, question:"Bathymetric LiDAR uses", options:["far infrared light","near infrared light","orange light","green light"], answerIndex:3, trick:"Water = green LiDAR." },
  { week:5, q:7, question:"___ is how close the measured values are to each other.", options:["Accuracy","Precision","Bias","Variance"], answerIndex:1, trick:"Precision = Points clustered." },
  { week:5, q:8, question:"IMU stands for", options:["Imperial metering unit","Inertial metering unit","Imperial measurement unit","Inertial measurement unit"], answerIndex:3, trick:"Inertial Measurement Unit." },
  { week:5, q:9, question:"The frequency of flyovers is an indicator of", options:["spatial resolution","temporal resolution","spectral resolution","radiometric resolution"], answerIndex:1, trick:"Frequency over time = temporal." },
  { week:5, q:10, question:"Which is correct?", options:["Plane surveying considers true Earth shape, <250 sq km","Plane surveying considers true Earth shape, >250 sq km","Geodetic surveying considers true Earth shape, <250 sq km","Geodetic surveying considers true Earth shape, >250 sq km"], answerIndex:3, trick:"Geodetic = curvature, big areas." },

  // ---------- WEEK 6 ----------
  { week:6, q:1, question:"The acronym HIPPO does not include", options:["habitat loss","habitat enhancement","over-harvesting","human over-population"], answerIndex:1, trick:"Enhancement is positive — not in HIPPO." },
  { week:6, q:2, question:"A scientist uses a trap to capture a monkey. Per WPA 1972,", options:["the trap is a weapon and capturing is hunting","the trap is not a weapon and capturing is hunting","the trap is a weapon and capturing is not hunting","the trap is not a weapon and capturing is not hunting"], answerIndex:0, trick:"Trap=weapon, capture=hunting." },
  { week:6, q:3, question:"Which is a deterministic factor?", options:["environmental variation","forest fire","death rate","diseases"], answerIndex:2, trick:"Death rate = predictable." },
  { week:6, q:4, question:"The acronym HIPPO does not include", options:["habitat loss","invasive species","pollination","pollution"], answerIndex:2, trick:"Pollination is good, not in HIPPO." },
  { week:6, q:5, question:"In I = P×A×T, T refers to", options:["transference","time","technology","none"], answerIndex:2, trick:"T = Technology." },
  { week:6, q:6, question:"Invasive climbers increase probability of which fire type?", options:["ground fire","surface fire","ladder fire","firestorm"], answerIndex:2, trick:"Climbers = ladder." },
  { week:6, q:7, question:"Which is a stochastic factor?", options:["birth rate","death rate","population structure","forest fire"], answerIndex:3, trick:"Stochastic = random = fire." },
  { week:6, q:8, question:"Which forms the fire triangle?", options:["fire, air, heat","fire, oxygen, wood","fuel, air, wood","fuel, oxygen, heat"], answerIndex:3, trick:"Fuel + Oxygen + Heat." },
  { week:6, q:9, question:"In I = P×A×T, P refers to", options:["professional pressure","pollution pressure","population pressure","none"], answerIndex:2, trick:"P = Population." },
  { week:6, q:10, question:"A vet uses an immobilising gun on a deer. Per WPA 1972,", options:["the gun is a weapon and capturing is hunting","the gun is not a weapon and capturing is hunting","the gun is a weapon and capturing is not hunting","the gun is not a weapon and capturing is not hunting"], answerIndex:0, trick:"Gun=weapon, capture=hunting." },

  // ---------- WEEK 7 ----------
  { week:7, q:1, question:"The movement of seeds away from their place of seed production into a new area is called", options:["translocation","migration","dispersal","drifting"], answerIndex:2, trick:"Seeds disperse." },
  { week:7, q:2, question:"Which is NOT an advantage of clear felling?", options:["Simple system, easy operations","Allows uniform crop establishment","Increases soil erosion in hilly areas","Mimics natural large-scale disturbance"], answerIndex:2, trick:"Erosion = disadvantage." },
  { week:7, q:3, question:"Ring weeding is primarily a feature of", options:["natural regeneration","assisted natural regeneration","artificial by direct sowing","artificial by planting"], answerIndex:1, trick:"Assisted = ring weeding." },
  { week:7, q:4, question:"Average age at which a tree is mature for felling is called", options:["crop age","felling age","rotation age","maturity age"], answerIndex:2, trick:"Mature for felling = rotation age." },
  { week:7, q:5, question:"Which is NOT a feature of natural regeneration?", options:["low cost","less machinery/labour","preservation of genetic variability","good control over genetic improvement"], answerIndex:3, trick:"Genetic CONTROL needs artificial." },
  { week:7, q:6, question:"Tending is done during", options:["early stage","middle stage","late stage","any stage of life"], answerIndex:3, trick:"Tending = throughout life." },
  { week:7, q:7, question:"Correct sequence of a silvicultural system?", options:["Tending → Regen → Harvest","Harvest → Tend → Regen","Harvesting → Regeneration → Stand tending","Regen → Harvest → Tend"], answerIndex:2, trick:"HRT order." },
  { week:7, q:8, question:"Taungya regeneration is", options:["natural","artificial with villagers","artificial with nomadic tribes","artificial with hunters"], answerIndex:1, trick:"Taungya = villagers intercrop." },
  { week:7, q:9, question:"A site was clear-cut. Which method cannot be used in short time?", options:["natural regeneration","artificial direct sowing","artificial planting","artificial transplanting"], answerIndex:0, trick:"Natural is slow." },
  { week:7, q:10, question:"Which is NOT a feature of natural regeneration?", options:["seed consumption by insects","little control over spacing","long time to regenerate","high machinery requirement"], answerIndex:3, trick:"Heavy machinery = artificial." },

  // ---------- WEEK 8 ----------
  { week:8, q:1, question:"In group shelterwood system, the regeneration area is increased", options:["centrifugally around gaps","centripetally around gaps","parallel to gaps","perpendicular to gaps"], answerIndex:0, trick:"Outward from gap = centrifugal." },
  { week:8, q:2, question:"Correct sequence for shelterwood system?", options:["Prep → Secondary → Seeding → Final","Prep → Seeding → Secondary → Final","Prep → Secondary → Seeding → Final","Prep → Seeding → Secondary → Final (alt)"], answerIndex:1, trick:"P-S-S-F: Prep → Seeding → Secondary → Final." },
  { week:8, q:3, question:"Shelterwood system results in", options:["even aged stand with natural aesthetics","even aged with artificial aesthetics","uneven aged with natural aesthetics","uneven aged with artificial aesthetics"], answerIndex:0, trick:"Even-aged + natural look." },
  { week:8, q:4, question:"Catchment areas are best suited for", options:["clear felling","selection system","uniform shelterwood","group shelterwood"], answerIndex:1, trick:"Selection = soil protection." },
  { week:8, q:5, question:"Trees not putting increment are removed during", options:["preparatory felling","seeding felling","secondary felling","final felling"], answerIndex:0, trick:"Preparatory = remove non-growers." },
  { week:8, q:6, question:"Felling to open canopy and let light to regenerated crop is", options:["preparatory felling","seeding felling","secondary felling","final felling"], answerIndex:2, trick:"Secondary = let light in." },
  { week:8, q:7, question:"For rotation 120 yrs, PB-III crop age?", options:["0-30","30-60","60-90","90-120"], answerIndex:1, trick:"PB-I=90-120(oldest), PB-III=30-60." },
  { week:8, q:8, question:"Clear felling system is not used for", options:["light demanding species","shade bearer species","plain areas","plateau areas"], answerIndex:1, trick:"Shade bearers need shelter." },
  { week:8, q:9, question:"Close to nature forestry is a feature of", options:["clear felling","selection system","uniform shelterwood","group shelterwood"], answerIndex:1, trick:"Selection mimics nature." },
  { week:8, q:10, question:"Inverse-J shaped number-diameter curves are seen in", options:["clear felling","selection system","uniform shelterwood","group shelterwood"], answerIndex:1, trick:"Uneven-aged → inverse-J." },

  // ---------- WEEK 9 ----------
  { week:9, q:1, question:"Careful selection of trees for harvesting based on a forest management prescription is", options:["surveying","cruising","marking","logging"], answerIndex:2, trick:"Selecting trees = marking." },
  { week:9, q:2, question:"Moving of logs from forest to landing area is", options:["marking","bucking","skidding","delimbing"], answerIndex:2, trick:"Skidding = drag out." },
  { week:9, q:3, question:"Net growth in initial volume is given by", options:["V2-V1","V2-V1+H-I","V2-V1+H-I+M","V2-V1+H-I-M"], answerIndex:1, trick:"V2-V1+H-I." },
  { week:9, q:4, question:"Surveying timberlands to estimate volumes/grades is", options:["surveying","cruising","marking","logging"], answerIndex:1, trick:"Cruising = volume estimation." },
  { week:9, q:5, question:"Which gives greatest accuracy in face cuts?", options:["conventional face","humboldt face","open face","all of these"], answerIndex:0, trick:"Conventional = accurate." },
  { week:9, q:6, question:"Trees to be retained are shown in ___ marking colour", options:["yellow","blue","red","white"], answerIndex:1, trick:"Blue = Bach jaye (keep)." },
  { week:9, q:7, question:"Cutting of timber into logs is", options:["marking","bucking","skidding","delimbing"], answerIndex:1, trick:"Bucking = into logs." },
  { week:9, q:8, question:"Research plots are shown in ___ marking colour", options:["yellow","blue","red","white"], answerIndex:3, trick:"White = research." },
  { week:9, q:9, question:"Trees on boundary are shown in ___ marking colour", options:["yellow","blue","red","white"], answerIndex:2, trick:"Red = boundary." },
  { week:9, q:10, question:"Which gives greatest saving of lumber?", options:["conventional face","humboldt face","open face","all of these"], answerIndex:1, trick:"Humboldt = saves lumber." },

  // ---------- WEEK 10 ----------
  { week:10, q:1, question:"Which is a good storage condition?", options:["high moisture, high temp","high moisture, low temp","low moisture, high temp","low moisture, low temp"], answerIndex:3, trick:"LOW & LOW for storage." },
  { week:10, q:2, question:"Agave is used for", options:["barbed wire fencing","live fencing","chain link fencing","stone wall fencing"], answerIndex:1, trick:"Agave = live fence." },
  { week:10, q:3, question:"Which conserves moisture?", options:["sunken bed","raised bed","flat bed","all of these"], answerIndex:0, trick:"Sunken = Save water." },
  { week:10, q:4, question:"Shell cracking of seeds is used for which species?", options:["amla","mango","ber","teak"], answerIndex:2, trick:"Ber = shell crack." },
  { week:10, q:5, question:"Which is NOT a laboratory method to determine best days for seed collection?", options:["maximum dry weight","colour of fruits","moisture content of fruits","chemical analysis"], answerIndex:1, trick:"Colour = field method." },
  { week:10, q:6, question:"Which characterises a refractory site?", options:["soil depth < 10 cm","soil depth 10-30 cm","soil depth > 30 cm","none"], answerIndex:0, trick:"Refractory = very poor, <10cm." },
  { week:10, q:7, question:"Which prevents water logging?", options:["sunken bed","raised bed","flat bed","all of these"], answerIndex:1, trick:"Raised = Remove water." },
  { week:10, q:8, question:"Wet and dry treatment of seeds is used for which species?", options:["amla","mango","ber","teak"], answerIndex:3, trick:"Teak = wet-dry." },
  { week:10, q:9, question:"Choice of spacing is dependent upon", options:["objective of plantation","site-species matching","growth rate","all of these"], answerIndex:3, trick:"All factors matter." },
  { week:10, q:10, question:"Number of seeds germinated upto peak germination period (%) is", options:["germination number","germination percentage","germination energy","germination power"], answerIndex:2, trick:"Up to peak = energy." },

  // ---------- WEEK 11 ----------
  { week:11, q:1, question:"Zoo is an example of", options:["in-situ conservation","ex-situ conservation","in-situ preservation","ex-situ preservation"], answerIndex:1, trick:"Zoo = outside natural = ex-situ." },
  { week:11, q:2, question:"Captive breeding is an example of", options:["in-situ conservation","ex-situ conservation","in-situ preservation","ex-situ preservation"], answerIndex:1, trick:"Captive = ex-situ." },
  { week:11, q:3, question:"Elephant: large range, regulates ecosystem, public connect — it is", options:["umbrella species","keystone species","flagship species","all of the above"], answerIndex:3, trick:"All three properties → all of above." },
  { week:11, q:4, question:"Sustainable harvest of resources falls under", options:["conservation","preservation","environmentalism","none"], answerIndex:0, trick:"Sustainable use = conservation." },
  { week:11, q:5, question:"Which is NOT a forest classification per 1894 Forest Policy?", options:["protection forest","production forest","minor forest","major forest"], answerIndex:3, trick:"No 'major' forest in 1894 policy." },
  { week:11, q:6, question:"Tiger: large range, controls herbivores, tourist draw — it is", options:["umbrella species","keystone species","flagship species","all of the above"], answerIndex:3, trick:"All three roles." },
  { week:11, q:7, question:"Planting along canal banks is a part of", options:["farm forestry","community forestry","extension forestry","agroforestry"], answerIndex:2, trick:"Outside forest land = extension." },
  { week:11, q:8, question:"In 1931, Van Panchayats were constituted in areas now in", options:["Tamil Nadu","Madhya Pradesh","West Bengal","Uttarakhand"], answerIndex:3, trick:"Van Panchayats = Uttarakhand." },
  { week:11, q:9, question:"People come to Sessa orchid sanctuary to witness orchids → orchid is a", options:["umbrella species","keystone species","flagship species","extinct species"], answerIndex:2, trick:"Tourist draw = flagship." },
  { week:11, q:10, question:"Fig tree provides fruits in lean times → it is a good example of", options:["least concern species","keystone species","flagship species","extinct species"], answerIndex:1, trick:"Critical ecosystem role = keystone." },

  // ---------- WEEK 12 ----------
  { week:12, q:1, question:"Climax near Tindni village controlled by cattle disturbance is", options:["climatic climax","edaphic climax","disclimax","catastrophic climax"], answerIndex:2, trick:"D for Disturbance = disclimax." },
  { week:12, q:2, question:"'Science of relationships between organisms and environments' defines", options:["conservation","preservation","environmentalism","ecology"], answerIndex:3, trick:"Ecology = relationships." },
  { week:12, q:3, question:"'Allowing some places to exist without significant human interference' defines", options:["conservation","preservation","environmentalism","all of these"], answerIndex:1, trick:"No interference = preservation." },
  { week:12, q:4, question:"For absolute form factor, base of cylinder reference is", options:["base of the tree","breast height","10% of tree height","20% of tree height"], answerIndex:0, trick:"Absolute = At base." },
  { week:12, q:5, question:"Highest organic matter content?", options:["peaty soil","alluvial soil","saline soil","red and yellow soil"], answerIndex:0, trick:"Peat = decomposed organic." },
  { week:12, q:6, question:"For dbh=45.6 cm, ht=27 m, stem volume=1.78 m³, the artificial form factor is:", options:["0.1","0.2","0.3","0.4"], answerIndex:0, trick:"NPTEL key marks 0.1 (per official solution)." },
  { week:12, q:7, question:"'Plant community of trees with closed canopy' is", options:["silvicultural definition","FAO definition","legal definition","ecological definition"], answerIndex:3, trick:"Ecological focus = community." },
  { week:12, q:8, question:"Laterite soil from Latin 'later' means", options:["red","brick","fertile","infertile"], answerIndex:1, trick:"Later = brick." },
  { week:12, q:9, question:"For non-circular cross-section, girth tape:", options:["over-estimates sectional area","under-estimates sectional area","correctly estimates sectional area","none"], answerIndex:2, trick:"Per NPTEL key: correctly estimates." },
  { week:12, q:10, question:"Vertical arrangement of soil horizons is called", options:["soil texture","soil structure","soil profile","soil science"], answerIndex:2, trick:"Vertical layers = profile." },
];
