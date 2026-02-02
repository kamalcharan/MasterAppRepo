import { Question } from '../../types';

export const botanyCellBiologyQuestions: Question[] = [
  // ===== EASY (8 questions) =====

  {
    id: 'bot-cb-001',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The cell theory was proposed by',
    textTe: 'కణ సిద్ధాంతాన్ని ప్రతిపాదించినది ఎవరు?',
    options: [
      { id: 'a', text: 'Robert Hooke and Leeuwenhoek', textTe: 'Robert Hooke మరియు Leeuwenhoek' },
      { id: 'b', text: 'Schleiden and Schwann', textTe: 'Schleiden మరియు Schwann' },
      { id: 'c', text: 'Virchow and Pasteur', textTe: 'Virchow మరియు Pasteur' },
      { id: 'd', text: 'Watson and Crick', textTe: 'Watson మరియు Crick' },
    ],
    correctOptionId: 'b',
    explanation:
      'The cell theory was proposed by Matthias Schleiden (a botanist) and Theodor Schwann (a zoologist) in 1838-1839. They stated that all living organisms are composed of cells and that the cell is the basic structural and functional unit of life. Robert Hooke first observed cells in cork in 1665, Virchow later added "Omnis cellula-e cellula" (every cell arises from a pre-existing cell), and Watson and Crick elucidated the structure of DNA in 1953.',
    explanationTe:
      'కణ సిద్ధాంతాన్ని Matthias Schleiden (వృక్షశాస్త్రవేత్త) మరియు Theodor Schwann (జంతుశాస్త్రవేత్త) 1838-1839 లో ప్రతిపాదించారు. అన్ని జీవులు కణాలతో తయారవుతాయని, కణం జీవుల యొక్క ప్రాథమిక నిర్మాణ మరియు క్రియాత్మక ఏకకమని వారు పేర్కొన్నారు. Robert Hooke 1665 లో బెరడులో కణాలను మొదట గమనించాడు, Virchow తరువాత "Omnis cellula-e cellula" (ప్రతి కణం ముందు ఉన్న కణం నుండి పుడుతుంది) అని చేర్చాడు, Watson మరియు Crick 1953 లో DNA నిర్మాణాన్ని వివరించారు.',
    eliminationTechnique:
      'Robert Hooke discovered cells but did not formulate the cell theory — eliminate (a). Virchow expanded the theory but was not the original proposer — eliminate (c). Watson and Crick worked on DNA structure, which is unrelated to the cell theory — eliminate (d).',
    eliminationTechniqueTe:
      'Robert Hooke కణాలను కనుగొన్నాడు కానీ కణ సిద్ధాంతాన్ని రూపొందించలేదు — (a) తొలగించండి. Virchow సిద్ధాంతాన్ని విస్తరించాడు కానీ అసలు ప్రతిపాదకుడు కాదు — (c) తొలగించండి. Watson మరియు Crick DNA నిర్మాణంపై పనిచేశారు, ఇది కణ సిద్ధాంతానికి సంబంధం లేదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'bot-cb-002',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Which of the following is absent in prokaryotic cells?',
    textTe: 'ప్రోకారియోటిక్ కణాలలో కింది వాటిలో ఏది ఉండదు?',
    options: [
      { id: 'a', text: 'Membrane-bound nucleus', textTe: 'పొరతో కప్పబడిన కేంద్రకం' },
      { id: 'b', text: 'Cell wall', textTe: 'కణ భిత్తి' },
      { id: 'c', text: 'Ribosomes', textTe: 'Ribosomes' },
      { id: 'd', text: 'DNA', textTe: 'DNA' },
    ],
    correctOptionId: 'a',
    explanation:
      'Prokaryotic cells lack a membrane-bound nucleus. Their genetic material (DNA) is present in a region called the nucleoid, which is not enclosed by a nuclear membrane. However, prokaryotes do have cell walls (most bacteria have peptidoglycan cell walls), ribosomes (70S type), and DNA (usually a single circular chromosome).',
    explanationTe:
      'ప్రోకారియోటిక్ కణాలలో పొరతో కప్పబడిన కేంద్రకం ఉండదు. వాటి జన్యు పదార్థం (DNA) nucleoid అనే ప్రాంతంలో ఉంటుంది, ఇది కేంద్రక పొరతో చుట్టబడి ఉండదు. అయితే, ప్రోకారియోట్లలో కణ భిత్తి (చాలా బ్యాక్టీరియాలో peptidoglycan కణ భిత్తి ఉంటుంది), ribosomes (70S రకం), మరియు DNA (సాధారణంగా ఒక వృత్తాకార chromosome) ఉంటాయి.',
    eliminationTechnique:
      'Cell wall is present in most prokaryotes (bacteria have peptidoglycan walls) — eliminate (b). Ribosomes (70S) are present in prokaryotes for protein synthesis — eliminate (c). DNA is present in all living cells including prokaryotes — eliminate (d).',
    eliminationTechniqueTe:
      'కణ భిత్తి చాలా ప్రోకారియోట్లలో ఉంటుంది (బ్యాక్టీరియాలో peptidoglycan భిత్తి ఉంటుంది) — (b) తొలగించండి. Ribosomes (70S) ప్రోకారియోట్లలో protein సంశ్లేషణ కోసం ఉంటాయి — (c) తొలగించండి. DNA ప్రోకారియోట్లతో సహా అన్ని జీవ కణాలలో ఉంటుంది — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'bot-cb-003',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Which organelle is called the "powerhouse of the cell"?',
    textTe: 'ఏ కణాంగాన్ని "కణం యొక్క శక్తి కేంద్రం" అని పిలుస్తారు?',
    options: [
      { id: 'a', text: 'Chloroplast', textTe: 'Chloroplast (హరితకణం)' },
      { id: 'b', text: 'Nucleus', textTe: 'Nucleus (కేంద్రకం)' },
      { id: 'c', text: 'Mitochondria', textTe: 'Mitochondria' },
      { id: 'd', text: 'Golgi apparatus', textTe: 'Golgi apparatus' },
    ],
    correctOptionId: 'c',
    explanation:
      'Mitochondria are called the "powerhouse of the cell" because they are the primary site of aerobic respiration where ATP (adenosine triphosphate) is produced through oxidative phosphorylation. They convert the chemical energy stored in food molecules (glucose) into a usable form of energy (ATP) for the cell.',
    explanationTe:
      'Mitochondria ను "కణం యొక్క శక్తి కేంద్రం" అని పిలుస్తారు ఎందుకంటే ఇవి వాయు శ్వాసక్రియ జరిగే ప్రధాన స్థానం, ఇక్కడ oxidative phosphorylation ద్వారా ATP (adenosine triphosphate) ఉత్పత్తి అవుతుంది. ఇవి ఆహార అణువులలో (glucose) నిల్వ ఉన్న రసాయన శక్తిని కణానికి ఉపయోగపడే శక్తి రూపంలోకి (ATP) మారుస్తాయి.',
    eliminationTechnique:
      'Chloroplast is involved in photosynthesis (making food), not breaking food down for energy — eliminate (a). Nucleus stores genetic material and controls cell activities but does not produce ATP — eliminate (b). Golgi apparatus packages and transports materials, not energy production — eliminate (d).',
    eliminationTechniqueTe:
      'Chloroplast కిరణజన్య సంయోగక్రియలో (ఆహారం తయారు చేయడం) పాల్గొంటుంది, శక్తి కోసం ఆహారాన్ని విచ్ఛిన్నం చేయడంలో కాదు — (a) తొలగించండి. Nucleus జన్యు పదార్థాన్ని నిల్వ చేస్తుంది మరియు కణ కార్యకలాపాలను నియంత్రిస్తుంది కానీ ATP ఉత్పత్తి చేయదు — (b) తొలగించండి. Golgi apparatus పదార్థాలను ప్యాకేజ్ చేసి రవాణా చేస్తుంది, శక్తి ఉత్పత్తి కాదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'bot-cb-004',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The primary function of ribosomes in a cell is',
    textTe: 'కణంలో ribosomes యొక్క ప్రాథమిక విధి ఏమిటి?',
    options: [
      { id: 'a', text: 'Lipid synthesis', textTe: 'Lipid సంశ్లేషణ' },
      { id: 'b', text: 'Photosynthesis', textTe: 'కిరణజన్య సంయోగక్రియ' },
      { id: 'c', text: 'DNA replication', textTe: 'DNA ప్రతిరూపణ' },
      { id: 'd', text: 'Protein synthesis', textTe: 'Protein సంశ్లేషణ' },
    ],
    correctOptionId: 'd',
    explanation:
      'Ribosomes are the cellular organelles responsible for protein synthesis (translation). They read the genetic instructions carried by mRNA and assemble amino acids into polypeptide chains. Ribosomes can be found free in the cytoplasm (synthesizing cytoplasmic proteins) or attached to the rough endoplasmic reticulum (synthesizing secretory and membrane proteins).',
    explanationTe:
      'Ribosomes protein సంశ్లేషణ (translation) కు బాధ్యత వహించే కణాంగాలు. ఇవి mRNA ద్వారా తీసుకురాబడిన జన్యు సూచనలను చదివి amino acids ను polypeptide గొలుసులుగా అమర్చుతాయి. Ribosomes సైటోప్లాజంలో స్వేచ్ఛగా (సైటోప్లాజమిక్ proteins సంశ్లేషణ) లేదా rough endoplasmic reticulum కు అంటుకొని (స్రావ మరియు పొర proteins సంశ్లేషణ) కనుగొనబడతాయి.',
    eliminationTechnique:
      'Lipid synthesis occurs in the smooth endoplasmic reticulum, not ribosomes — eliminate (a). Photosynthesis takes place in chloroplasts — eliminate (b). DNA replication occurs in the nucleus during S phase of the cell cycle — eliminate (c).',
    eliminationTechniqueTe:
      'Lipid సంశ్లేషణ smooth endoplasmic reticulum లో జరుగుతుంది, ribosomes లో కాదు — (a) తొలగించండి. కిరణజన్య సంయోగక్రియ chloroplasts లో జరుగుతుంది — (b) తొలగించండి. DNA ప్రతిరూపణ కణ చక్రం యొక్క S దశలో కేంద్రకంలో జరుగుతుంది — (c) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'bot-cb-005',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The fluid mosaic model of the plasma membrane was proposed by',
    textTe: 'ప్లాస్మా పొర యొక్క fluid mosaic model ను ప్రతిపాదించినది ఎవరు?',
    options: [
      { id: 'a', text: 'Singer and Nicolson (1972)', textTe: 'Singer మరియు Nicolson (1972)' },
      { id: 'b', text: 'Danielli and Davson (1935)', textTe: 'Danielli మరియు Davson (1935)' },
      { id: 'c', text: 'Robertson (1959)', textTe: 'Robertson (1959)' },
      { id: 'd', text: 'Schleiden and Schwann (1838)', textTe: 'Schleiden మరియు Schwann (1838)' },
    ],
    correctOptionId: 'a',
    explanation:
      'The fluid mosaic model was proposed by S.J. Singer and G.L. Nicolson in 1972. According to this model, the cell membrane is a quasi-fluid structure with a lipid bilayer and proteins embedded in it (integral proteins) or attached to its surface (peripheral proteins). The lipid molecules provide fluidity, and the proteins are distributed in a mosaic pattern.',
    explanationTe:
      'Fluid mosaic model ను S.J. Singer మరియు G.L. Nicolson 1972 లో ప్రతిపాదించారు. ఈ నమూనా ప్రకారం, కణ పొర lipid ద్విపొర మరియు అందులో పొందుపరచబడిన proteins (integral proteins) లేదా దాని ఉపరితలానికి అంటుకొన్న proteins (peripheral proteins) తో కూడిన quasi-fluid నిర్మాణం. Lipid అణువులు ద్రవత్వాన్ని అందిస్తాయి, proteins mosaic నమూనాలో పంపిణీ చేయబడతాయి.',
    eliminationTechnique:
      'Danielli and Davson proposed the sandwich model (protein-lipid-protein layers), which was an earlier and less accurate model — eliminate (b). Robertson proposed the unit membrane model — eliminate (c). Schleiden and Schwann proposed the cell theory, which is about cells being the basic unit of life, not about membrane structure — eliminate (d).',
    eliminationTechniqueTe:
      'Danielli మరియు Davson sandwich model (protein-lipid-protein పొరలు) ను ప్రతిపాదించారు, ఇది ముందుగా మరియు తక్కువ ఖచ్చితమైన నమూనా — (b) తొలగించండి. Robertson unit membrane model ను ప్రతిపాదించారు — (c) తొలగించండి. Schleiden మరియు Schwann కణ సిద్ధాంతాన్ని ప్రతిపాదించారు, ఇది కణాలు జీవుల ప్రాథమిక ఏకకం అనే విషయం గురించి, పొర నిర్మాణం గురించి కాదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'bot-cb-006',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Lysosomes are often referred to as',
    textTe: 'Lysosomes ను తరచుగా ఏమని పిలుస్తారు?',
    options: [
      { id: 'a', text: 'Kitchen of the cell', textTe: 'కణం యొక్క వంటగది' },
      { id: 'b', text: 'Suicidal bags of the cell', textTe: 'కణం యొక్క ఆత్మహత్య సంచులు' },
      { id: 'c', text: 'Powerhouse of the cell', textTe: 'కణం యొక్క శక్తి కేంద్రం' },
      { id: 'd', text: 'Protein factories of the cell', textTe: 'కణం యొక్క protein కర్మాగారాలు' },
    ],
    correctOptionId: 'b',
    explanation:
      'Lysosomes are called "suicidal bags of the cell" because when a cell is damaged, aged, or about to die, the lysosomal membrane ruptures and releases its hydrolytic enzymes into the cytoplasm. These enzymes then digest the cell\'s own components, a process called autolysis. Lysosomes contain about 40 types of hydrolytic enzymes (acid hydrolases) that can digest all major biological macromolecules.',
    explanationTe:
      'Lysosomes ను "కణం యొక్క ఆత్మహత్య సంచులు" అని పిలుస్తారు ఎందుకంటే కణం దెబ్బతిన్నప్పుడు, పాతబడినప్పుడు లేదా చనిపోబోతున్నప్పుడు, lysosomal పొర చిట్లిపోయి దాని hydrolytic enzymes ను సైటోప్లాజంలోకి విడుదల చేస్తుంది. ఈ enzymes కణం యొక్క స్వంత భాగాలను జీర్ణం చేస్తాయి, ఈ ప్రక్రియను autolysis అంటారు. Lysosomes లో దాదాపు 40 రకాల hydrolytic enzymes (acid hydrolases) ఉంటాయి, ఇవి అన్ని ప్రధాన జీవ స్థూల అణువులను జీర్ణం చేయగలవు.',
    eliminationTechnique:
      '"Kitchen of the cell" is a nickname for chloroplasts, which make food via photosynthesis — eliminate (a). "Powerhouse of the cell" refers to mitochondria, which produce ATP — eliminate (c). "Protein factories" refers to ribosomes, which synthesize proteins — eliminate (d).',
    eliminationTechniqueTe:
      '"కణం యొక్క వంటగది" అనేది chloroplasts యొక్క మారుపేరు, ఇవి కిరణజన్య సంయోగక్రియ ద్వారా ఆహారం తయారు చేస్తాయి — (a) తొలగించండి. "కణం యొక్క శక్తి కేంద్రం" అనేది ATP ఉత్పత్తి చేసే mitochondria ను సూచిస్తుంది — (c) తొలగించండి. "Protein కర్మాగారాలు" అనేది proteins సంశ్లేషణ చేసే ribosomes ను సూచిస్తుంది — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'bot-cb-007',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The site of photosynthesis in a plant cell is',
    textTe: 'మొక్క కణంలో కిరణజన్య సంయోగక్రియ జరిగే స్థానం ఏది?',
    options: [
      { id: 'a', text: 'Mitochondria', textTe: 'Mitochondria' },
      { id: 'b', text: 'Ribosomes', textTe: 'Ribosomes' },
      { id: 'c', text: 'Nucleus', textTe: 'Nucleus (కేంద్రకం)' },
      { id: 'd', text: 'Chloroplast', textTe: 'Chloroplast (హరితకణం)' },
    ],
    correctOptionId: 'd',
    explanation:
      'Chloroplasts are the organelles responsible for photosynthesis in plant cells and algae. They contain the green pigment chlorophyll, which absorbs light energy. The light-dependent reactions occur in the thylakoid membranes (grana), while the light-independent reactions (Calvin cycle) occur in the stroma of the chloroplast. Chloroplasts are double-membrane-bound organelles with their own DNA.',
    explanationTe:
      'Chloroplasts మొక్క కణాలు మరియు ఆల్గేలలో కిరణజన్య సంయోగక్రియకు బాధ్యత వహించే కణాంగాలు. ఇవి ఆకుపచ్చ వర్ణద్రవ్యం chlorophyll ను కలిగి ఉంటాయి, ఇది కాంతి శక్తిని గ్రహిస్తుంది. కాంతి-ఆధారిత చర్యలు thylakoid పొరలలో (grana) జరుగుతాయి, కాంతి-స్వతంత్ర చర్యలు (Calvin cycle) chloroplast యొక్క stroma లో జరుగుతాయి. Chloroplasts ద్వి-పొర కణాంగాలు మరియు వాటి స్వంత DNA కలిగి ఉంటాయి.',
    eliminationTechnique:
      'Mitochondria are the site of cellular respiration (breaking down food), not photosynthesis — eliminate (a). Ribosomes synthesize proteins and have no role in photosynthesis — eliminate (b). The nucleus stores genetic information and controls cell functions, not photosynthesis — eliminate (c).',
    eliminationTechniqueTe:
      'Mitochondria కణ శ్వాసక్రియ (ఆహారాన్ని విచ్ఛిన్నం చేయడం) జరిగే స్థానం, కిరణజన్య సంయోగక్రియ కాదు — (a) తొలగించండి. Ribosomes proteins సంశ్లేషణ చేస్తాయి మరియు కిరణజన్య సంయోగక్రియలో పాత్ర లేదు — (b) తొలగించండి. Nucleus జన్యు సమాచారాన్ని నిల్వ చేస్తుంది మరియు కణ విధులను నియంత్రిస్తుంది, కిరణజన్య సంయోగక్రియ కాదు — (c) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'bot-cb-008',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The longest phase of the cell cycle is',
    textTe: 'కణ చక్రంలో అత్యంత సుదీర్ఘమైన దశ ఏది?',
    options: [
      { id: 'a', text: 'M phase (Mitosis)', textTe: 'M దశ (Mitosis)' },
      { id: 'b', text: 'G2 phase', textTe: 'G2 దశ' },
      { id: 'c', text: 'Interphase', textTe: 'Interphase (అంతర దశ)' },
      { id: 'd', text: 'Cytokinesis', textTe: 'Cytokinesis (సైటోప్లాజం విభజన)' },
    ],
    correctOptionId: 'c',
    explanation:
      'Interphase is the longest phase of the cell cycle, occupying about 95% of the total duration. It is divided into three sub-phases: G1 (Gap 1) where the cell grows and synthesizes proteins, S (Synthesis) where DNA replication occurs, and G2 (Gap 2) where the cell prepares for mitosis. The M phase (mitosis + cytokinesis) is comparatively very short, taking only about 5% of the total cell cycle time.',
    explanationTe:
      'Interphase కణ చక్రంలో అత్యంత సుదీర్ఘమైన దశ, మొత్తం కాలంలో దాదాపు 95% ఆక్రమిస్తుంది. ఇది మూడు ఉప-దశలుగా విభజించబడింది: G1 (Gap 1) — కణం పెరుగుతుంది మరియు proteins సంశ్లేషణ చేస్తుంది, S (Synthesis) — DNA ప్రతిరూపణ జరుగుతుంది, మరియు G2 (Gap 2) — కణం mitosis కు సిద్ధమవుతుంది. M దశ (mitosis + cytokinesis) చాలా తక్కువగా ఉంటుంది, మొత్తం కణ చక్ర సమయంలో దాదాపు 5% మాత్రమే తీసుకుంటుంది.',
    eliminationTechnique:
      'M phase is the shortest phase of the cell cycle, lasting only about 1-2 hours — eliminate (a). G2 is just one sub-phase of interphase and is shorter than the entire interphase — eliminate (b). Cytokinesis is a part of M phase and lasts only a few minutes — eliminate (d).',
    eliminationTechniqueTe:
      'M దశ కణ చక్రంలో అత్యంత తక్కువ కాలం ఉండే దశ, కేవలం 1-2 గంటలు మాత్రమే ఉంటుంది — (a) తొలగించండి. G2 interphase యొక్క ఒక ఉప-దశ మాత్రమే, మొత్తం interphase కంటే తక్కువ — (b) తొలగించండి. Cytokinesis M దశలో ఒక భాగం మరియు కొన్ని నిమిషాలు మాత్రమే ఉంటుంది — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  // ===== MEDIUM (10 questions) =====

  {
    id: 'bot-cb-009',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Which of the following is NOT a function of the Golgi apparatus?',
    textTe: 'కింది వాటిలో Golgi apparatus యొక్క విధి కానిది ఏది?',
    options: [
      { id: 'a', text: 'Glycosylation of proteins', textTe: 'Proteins యొక్క glycosylation' },
      { id: 'b', text: 'Synthesis of fatty acids', textTe: 'Fatty acids సంశ్లేషణ' },
      { id: 'c', text: 'Formation of lysosomes', textTe: 'Lysosomes ఏర్పాటు' },
      { id: 'd', text: 'Packaging and secretion of materials', textTe: 'పదార్థాల ప్యాకేజింగ్ మరియు స్రావం' },
    ],
    correctOptionId: 'b',
    explanation:
      'Synthesis of fatty acids is NOT a function of the Golgi apparatus. Fatty acid synthesis primarily occurs in the cytoplasm (catalyzed by fatty acid synthase) and in the smooth endoplasmic reticulum. The Golgi apparatus functions include glycosylation (adding carbohydrate groups to proteins), formation of lysosomes by budding from its trans face, and packaging molecules into vesicles for secretion.',
    explanationTe:
      'Fatty acids సంశ్లేషణ Golgi apparatus యొక్క విధి కాదు. Fatty acid సంశ్లేషణ ప్రధానంగా సైటోప్లాజంలో (fatty acid synthase ద్వారా ఉత్ప్రేరితం) మరియు smooth endoplasmic reticulum లో జరుగుతుంది. Golgi apparatus విధులలో glycosylation (proteins కు carbohydrate సమూహాలను చేర్చడం), దాని trans ముఖం నుండి మొగ్గ తొడగడం ద్వారా lysosomes ఏర్పాటు, మరియు స్రావం కోసం అణువులను vesicles లో ప్యాకేజ్ చేయడం ఉన్నాయి.',
    eliminationTechnique:
      'Glycosylation is a well-established function of Golgi (proteins are modified as they pass through Golgi cisternae) — eliminate (a). Lysosomes are formed from the trans-Golgi network — eliminate (c). Packaging and secretion is the defining role of the Golgi apparatus — eliminate (d).',
    eliminationTechniqueTe:
      'Glycosylation Golgi యొక్క బాగా తెలిసిన విధి (proteins Golgi cisternae గుండా వెళ్ళేటప్పుడు మార్పు చేయబడతాయి) — (a) తొలగించండి. Lysosomes trans-Golgi network నుండి ఏర్పడతాయి — (c) తొలగించండి. ప్యాకేజింగ్ మరియు స్రావం Golgi apparatus యొక్క నిర్వచించే పాత్ర — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-010',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Smooth endoplasmic reticulum (SER) is primarily involved in',
    textTe: 'Smooth endoplasmic reticulum (SER) ప్రధానంగా దేనిలో పాల్గొంటుంది?',
    options: [
      { id: 'a', text: 'Lipid and steroid hormone synthesis', textTe: 'Lipid మరియు steroid hormone సంశ్లేషణ' },
      { id: 'b', text: 'Protein synthesis and folding', textTe: 'Protein సంశ్లేషణ మరియు మడత' },
      { id: 'c', text: 'Photosynthesis', textTe: 'కిరణజన్య సంయోగక్రియ' },
      { id: 'd', text: 'DNA replication and repair', textTe: 'DNA ప్రతిరూపణ మరియు మరమ్మత్తు' },
    ],
    correctOptionId: 'a',
    explanation:
      'Smooth endoplasmic reticulum (SER) lacks ribosomes on its surface and is primarily involved in the synthesis of lipids, steroids, and phospholipids. In liver cells (hepatocytes), SER also plays an important role in detoxification of drugs and poisons. In muscle cells, a specialized form of SER called sarcoplasmic reticulum stores calcium ions. Protein synthesis occurs on rough ER (RER), which has ribosomes attached.',
    explanationTe:
      'Smooth endoplasmic reticulum (SER) దాని ఉపరితలంపై ribosomes లేవు మరియు ప్రధానంగా lipids, steroids, మరియు phospholipids సంశ్లేషణలో పాల్గొంటుంది. కాలేయ కణాలలో (hepatocytes), SER మందులు మరియు విషాల నిర్విషీకరణలో కూడా ముఖ్యమైన పాత్ర పోషిస్తుంది. కండర కణాలలో, sarcoplasmic reticulum అని పిలువబడే SER యొక్క ప్రత్యేక రూపం calcium ions ను నిల్వ చేస్తుంది. Protein సంశ్లేషణ rough ER (RER) పై జరుగుతుంది, దానికి ribosomes అంటుకొని ఉంటాయి.',
    eliminationTechnique:
      'Protein synthesis and folding occurs on rough ER (RER), which has ribosomes — eliminate (b). Photosynthesis occurs in chloroplasts, not in any form of ER — eliminate (c). DNA replication and repair occur in the nucleus — eliminate (d).',
    eliminationTechniqueTe:
      'Protein సంశ్లేషణ మరియు మడత rough ER (RER) పై జరుగుతుంది, దానికి ribosomes ఉంటాయి — (b) తొలగించండి. కిరణజన్య సంయోగక్రియ chloroplasts లో జరుగుతుంది, ER యొక్క ఏ రూపంలోనూ కాదు — (c) తొలగించండి. DNA ప్రతిరూపణ మరియు మరమ్మత్తు కేంద్రకంలో జరుగుతాయి — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-011',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The correct sequence of stages during mitosis is',
    textTe: 'Mitosis సమయంలో దశల సరైన క్రమం ఏమిటి?',
    options: [
      {
        id: 'a',
        text: 'Metaphase → Prophase → Anaphase → Telophase',
        textTe: 'Metaphase → Prophase → Anaphase → Telophase',
      },
      {
        id: 'b',
        text: 'Prophase → Anaphase → Metaphase → Telophase',
        textTe: 'Prophase → Anaphase → Metaphase → Telophase',
      },
      {
        id: 'c',
        text: 'Telophase → Metaphase → Prophase → Anaphase',
        textTe: 'Telophase → Metaphase → Prophase → Anaphase',
      },
      {
        id: 'd',
        text: 'Prophase → Metaphase → Anaphase → Telophase',
        textTe: 'Prophase → Metaphase → Anaphase → Telophase',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'The correct sequence of mitosis is Prophase → Metaphase → Anaphase → Telophase (remembered by the mnemonic PMAT). During Prophase, chromosomes condense and become visible, the nuclear envelope begins to break down. During Metaphase, chromosomes align at the cell\'s equatorial plate (metaphase plate). During Anaphase, sister chromatids separate and move to opposite poles. During Telophase, nuclear envelopes reform around each set of chromosomes and chromosomes decondense.',
    explanationTe:
      'Mitosis యొక్క సరైన క్రమం Prophase → Metaphase → Anaphase → Telophase (PMAT అనే జ్ఞాపక సూత్రంతో గుర్తుంచుకోవచ్చు). Prophase లో, chromosomes సంగ్రహమై కనిపిస్తాయి, కేంద్రక పొర విచ్ఛిన్నం కావడం ప్రారంభమవుతుంది. Metaphase లో, chromosomes కణం యొక్క మధ్యరేఖ వద్ద (metaphase plate) అమరుతాయి. Anaphase లో, sister chromatids వేరుపడి వ్యతిరేక ధ్రువాలకు కదులుతాయి. Telophase లో, ప్రతి chromosome సమూహం చుట్టూ కేంద్రక పొరలు తిరిగి ఏర్పడతాయి మరియు chromosomes decondense అవుతాయి.',
    eliminationTechnique:
      'Option (a) begins with Metaphase — but Prophase must come first as chromosomes need to condense before aligning. Option (b) places Anaphase before Metaphase — but chromosomes must align (Metaphase) before they can separate (Anaphase). Option (c) begins with Telophase, which is the last stage of mitosis — clearly incorrect.',
    eliminationTechniqueTe:
      'ఎంపిక (a) Metaphase తో ప్రారంభమవుతుంది — కానీ chromosomes అమరడానికి ముందు సంగ్రహం కావాలి కాబట్టి Prophase ముందు రావాలి. ఎంపిక (b) Anaphase ను Metaphase కంటే ముందు ఉంచుతుంది — కానీ chromosomes వేరుపడటానికి (Anaphase) ముందు అమరాలి (Metaphase). ఎంపిక (c) mitosis యొక్క చివరి దశ అయిన Telophase తో ప్రారంభమవుతుంది — స్పష్టంగా తప్పు.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-012',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Crossing over during meiosis takes place in which sub-stage of Prophase I?',
    textTe: 'Meiosis సమయంలో crossing over, Prophase I యొక్క ఏ ఉప-దశలో జరుగుతుంది?',
    options: [
      { id: 'a', text: 'Leptotene', textTe: 'Leptotene' },
      { id: 'b', text: 'Zygotene', textTe: 'Zygotene' },
      { id: 'c', text: 'Pachytene', textTe: 'Pachytene' },
      { id: 'd', text: 'Diplotene', textTe: 'Diplotene' },
    ],
    correctOptionId: 'c',
    explanation:
      'Crossing over (reciprocal exchange of genetic material between non-sister chromatids of homologous chromosomes) occurs during the Pachytene stage of Prophase I in meiosis. At this stage, homologous chromosomes are fully synapsed (paired) as bivalents, and recombination nodules (enzyme complexes) appear along the synaptonemal complex to facilitate the exchange. The visible results of crossing over — chiasmata — become apparent later during the Diplotene stage.',
    explanationTe:
      'Crossing over (homologous chromosomes యొక్క non-sister chromatids మధ్య జన్యు పదార్థం యొక్క పరస్పర మార్పిడి) meiosis లో Prophase I యొక్క Pachytene దశలో జరుగుతుంది. ఈ దశలో, homologous chromosomes bivalents గా పూర్తిగా synapsis (జత) చేయబడి ఉంటాయి, మరియు మార్పిడిని సులభతరం చేయడానికి synaptonemal complex వెంట recombination nodules (enzyme సమ్మేళనాలు) కనిపిస్తాయి. Crossing over యొక్క కనిపించే ఫలితాలు — chiasmata — తరువాత Diplotene దశలో స్పష్టమవుతాయి.',
    eliminationTechnique:
      'Leptotene involves chromosome condensation and compaction — crossing over has not begun yet — eliminate (a). Zygotene is when homologous chromosomes begin to pair (synapsis), but crossing over occurs after pairing is complete — eliminate (b). Diplotene is when chiasmata become visible; crossing over has already occurred by this point — eliminate (d).',
    eliminationTechniqueTe:
      'Leptotene లో chromosome సంగ్రహం మరియు సంకోచం జరుగుతుంది — crossing over ఇంకా ప్రారంభం కాలేదు — (a) తొలగించండి. Zygotene లో homologous chromosomes జత కట్టడం (synapsis) ప్రారంభమవుతుంది, కానీ crossing over జత పూర్తయిన తర్వాత జరుగుతుంది — (b) తొలగించండి. Diplotene లో chiasmata కనిపిస్తాయి; ఈ సమయానికి crossing over ఇప్పటికే జరిగిపోయింది — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-013',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Active transport across the cell membrane differs from passive transport because it',
    textTe: 'కణ పొర ద్వారా active transport, passive transport నుండి భిన్నంగా ఉంటుంది ఎందుకంటే అది',
    options: [
      {
        id: 'a',
        text: 'Requires metabolic energy in the form of ATP',
        textTe: 'ATP రూపంలో జీవక్రియ శక్తిని అవసరం చేస్తుంది',
      },
      {
        id: 'b',
        text: 'Always occurs along the concentration gradient',
        textTe: 'ఎల్లప్పుడూ సాంద్రత ప్రవణత వెంట జరుగుతుంది',
      },
      {
        id: 'c',
        text: 'Does not involve any carrier proteins',
        textTe: 'ఏ carrier proteins ను కలిగి ఉండదు',
      },
      {
        id: 'd',
        text: 'Is always faster than diffusion',
        textTe: 'ఎల్లప్పుడూ diffusion కంటే వేగంగా ఉంటుంది',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'Active transport requires metabolic energy, usually in the form of ATP, to move substances against their concentration gradient (from a region of lower concentration to a region of higher concentration). Examples include the sodium-potassium pump (Na+/K+ ATPase). In contrast, passive transport (simple diffusion, facilitated diffusion, osmosis) does not require energy and occurs along the concentration gradient.',
    explanationTe:
      'Active transport జీవక్రియ శక్తిని, సాధారణంగా ATP రూపంలో, పదార్థాలను వాటి సాంద్రత ప్రవణతకు వ్యతిరేకంగా (తక్కువ సాంద్రత ప్రాంతం నుండి ఎక్కువ సాంద్రత ప్రాంతానికి) తరలించడానికి అవసరం చేస్తుంది. ఉదాహరణలలో sodium-potassium pump (Na+/K+ ATPase) ఉన్నాయి. దీనికి భిన్నంగా, passive transport (simple diffusion, facilitated diffusion, osmosis) శక్తి అవసరం లేదు మరియు సాంద్రత ప్రవణత వెంట జరుగుతుంది.',
    eliminationTechnique:
      'Moving along the concentration gradient describes passive transport, not active — eliminate (b). Active transport does use carrier proteins (like ion pumps); saying it does not is incorrect — eliminate (c). Transport speed depends on many factors and is not a defining difference between active and passive transport — eliminate (d).',
    eliminationTechniqueTe:
      'సాంద్రత ప్రవణత వెంట కదలడం passive transport ను వివరిస్తుంది, active కాదు — (b) తొలగించండి. Active transport carrier proteins (ion pumps వంటివి) ఉపయోగిస్తుంది; అవి లేవని చెప్పడం తప్పు — (c) తొలగించండి. రవాణా వేగం అనేక అంశాలపై ఆధారపడుతుంది మరియు active మరియు passive transport మధ్య నిర్వచించే తేడా కాదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-014',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Which of the following is NOT a component found inside the nucleus?',
    textTe: 'కింది వాటిలో కేంద్రకం లోపల కనుగొనబడని భాగం ఏది?',
    options: [
      { id: 'a', text: 'Nucleolus', textTe: 'Nucleolus (కేంద్రకణువు)' },
      { id: 'b', text: 'Centrioles', textTe: 'Centrioles' },
      { id: 'c', text: 'Chromatin', textTe: 'Chromatin' },
      { id: 'd', text: 'Nuclear matrix', textTe: 'Nuclear matrix (కేంద్రక మాతృక)' },
    ],
    correctOptionId: 'b',
    explanation:
      'Centrioles are NOT found inside the nucleus. They are cylindrical structures located in the cytoplasm as part of the centrosome (cell center). During cell division, centrioles help in the formation of the mitotic spindle and asters. The nucleus contains the nucleolus (site of rRNA synthesis and ribosome subunit assembly), chromatin (DNA wound around histone proteins), and nuclear matrix (protein scaffold providing structural support).',
    explanationTe:
      'Centrioles కేంద్రకం లోపల కనుగొనబడవు. ఇవి centrosome (కణ కేంద్రం) లో భాగంగా సైటోప్లాజంలో ఉన్న స్తంభాకార నిర్మాణాలు. కణ విభజన సమయంలో, centrioles mitotic spindle మరియు asters ఏర్పాటులో సహాయపడతాయి. కేంద్రకంలో nucleolus (rRNA సంశ్లేషణ మరియు ribosome subunit సమావేశ స్థలం), chromatin (histone proteins చుట్టూ చుట్టబడిన DNA), మరియు nuclear matrix (నిర్మాణ మద్దతు అందించే protein skeleton) ఉంటాయి.',
    eliminationTechnique:
      'Nucleolus is a prominent structure within the nucleus, responsible for ribosomal RNA production — eliminate (a). Chromatin is the DNA-histone complex present in the nucleus — eliminate (c). Nuclear matrix is the structural framework within the nucleus — eliminate (d).',
    eliminationTechniqueTe:
      'Nucleolus కేంద్రకంలో ఒక ప్రముఖ నిర్మాణం, ribosomal RNA ఉత్పత్తికి బాధ్యత — (a) తొలగించండి. Chromatin కేంద్రకంలో ఉన్న DNA-histone సమ్మేళనం — (c) తొలగించండి. Nuclear matrix కేంద్రకంలోని నిర్మాణ చట్రం — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-015',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Which of the following is a characteristic feature of prokaryotic cells?',
    textTe: 'కింది వాటిలో ప్రోకారియోటిక్ కణాల లక్షణం ఏది?',
    options: [
      { id: 'a', text: 'Membrane-bound organelles', textTe: 'పొరతో కప్పబడిన కణాంగాలు' },
      { id: 'b', text: '80S ribosomes', textTe: '80S ribosomes' },
      { id: 'c', text: 'Linear chromosomes with histones', textTe: 'Histones తో కూడిన రేఖీయ chromosomes' },
      { id: 'd', text: '70S ribosomes', textTe: '70S ribosomes' },
    ],
    correctOptionId: 'd',
    explanation:
      'Prokaryotic cells have 70S ribosomes (made of 50S and 30S subunits), which are smaller than the 80S ribosomes (made of 60S and 40S subunits) found in eukaryotic cytoplasm. Prokaryotes lack membrane-bound organelles such as mitochondria, chloroplasts, and endoplasmic reticulum. Their genetic material is typically a single circular chromosome that is not associated with histone proteins (unlike eukaryotic linear chromosomes).',
    explanationTe:
      'ప్రోకారియోటిక్ కణాలలో 70S ribosomes (50S మరియు 30S subunits తో తయారైనవి) ఉంటాయి, ఇవి యూకారియోటిక్ సైటోప్లాజంలో కనుగొనబడే 80S ribosomes (60S మరియు 40S subunits తో తయారైనవి) కంటే చిన్నవి. ప్రోకారియోట్లలో mitochondria, chloroplasts, మరియు endoplasmic reticulum వంటి పొరతో కప్పబడిన కణాంగాలు ఉండవు. వాటి జన్యు పదార్థం సాధారణంగా histone proteins తో సంబంధం లేని ఒక వృత్తాకార chromosome (యూకారియోటిక్ రేఖీయ chromosomes వలె కాకుండా).',
    eliminationTechnique:
      'Membrane-bound organelles are exclusively found in eukaryotes — eliminate (a). 80S ribosomes are characteristic of eukaryotic cytoplasm, not prokaryotes — eliminate (b). Linear chromosomes with histone proteins are found in eukaryotes; prokaryotes have circular DNA without histones — eliminate (c).',
    eliminationTechniqueTe:
      'పొరతో కప్పబడిన కణాంగాలు ప్రత్యేకంగా యూకారియోట్లలో మాత్రమే ఉంటాయి — (a) తొలగించండి. 80S ribosomes యూకారియోటిక్ సైటోప్లాజం యొక్క లక్షణం, ప్రోకారియోట్ల కాదు — (b) తొలగించండి. Histone proteins తో కూడిన రేఖీయ chromosomes యూకారియోట్లలో ఉంటాయి; ప్రోకారియోట్లలో histones లేకుండా వృత్తాకార DNA ఉంటుంది — (c) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-016',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The total number of autosomes in a human somatic cell is',
    textTe: 'మానవ శరీర కణంలో మొత్తం autosomes సంఖ్య ఎంత?',
    options: [
      { id: 'a', text: '23', textTe: '23' },
      { id: 'b', text: '46', textTe: '46' },
      { id: 'c', text: '44', textTe: '44' },
      { id: 'd', text: '22', textTe: '22' },
    ],
    correctOptionId: 'c',
    explanation:
      'A human somatic cell (body cell) contains 46 chromosomes in total: 44 autosomes (22 pairs of non-sex chromosomes) and 2 sex chromosomes (one pair — XX in females, XY in males). The question specifically asks about autosomes (non-sex chromosomes), which number 44. The number 23 refers to the haploid number, 46 is the total diploid number, and 22 is the number of autosome pairs.',
    explanationTe:
      'మానవ శరీర కణంలో (body cell) మొత్తం 46 chromosomes ఉంటాయి: 44 autosomes (22 జతల non-sex chromosomes) మరియు 2 sex chromosomes (ఒక జత — స్త్రీలలో XX, పురుషులలో XY). ప్రశ్న ప్రత్యేకంగా autosomes (non-sex chromosomes) గురించి అడుగుతోంది, వాటి సంఖ్య 44. 23 అనేది haploid సంఖ్య, 46 మొత్తం diploid సంఖ్య, మరియు 22 అనేది autosome జతల సంఖ్య.',
    eliminationTechnique:
      '23 is the total haploid chromosome number (in gametes), not the autosome count in somatic cells — eliminate (a). 46 is the total chromosome count (autosomes + sex chromosomes), not just autosomes — eliminate (b). 22 is the number of autosome pairs, not the total number of individual autosomes — eliminate (d).',
    eliminationTechniqueTe:
      '23 మొత్తం haploid chromosome సంఖ్య (gametes లో), శరీర కణాలలో autosome సంఖ్య కాదు — (a) తొలగించండి. 46 మొత్తం chromosome సంఖ్య (autosomes + sex chromosomes), కేవలం autosomes కాదు — (b) తొలగించండి. 22 autosome జతల సంఖ్య, వ్యక్తిగత autosomes మొత్తం సంఖ్య కాదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-017',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'DNA replication takes place during which phase of the cell cycle?',
    textTe: 'కణ చక్రంలో DNA ప్రతిరూపణ ఏ దశలో జరుగుతుంది?',
    options: [
      { id: 'a', text: 'S phase (Synthesis phase)', textTe: 'S దశ (Synthesis phase)' },
      { id: 'b', text: 'G1 phase', textTe: 'G1 దశ' },
      { id: 'c', text: 'G2 phase', textTe: 'G2 దశ' },
      { id: 'd', text: 'M phase', textTe: 'M దశ' },
    ],
    correctOptionId: 'a',
    explanation:
      'DNA replication occurs during the S phase (Synthesis phase) of interphase in the cell cycle. During S phase, each chromosome is duplicated so that each daughter cell will receive an identical copy of the genome. After S phase, the cell has twice the amount of DNA (but the chromosome number remains the same because the sister chromatids are held together). G1 is for growth, G2 is for preparing for mitosis, and M phase is for actual chromosome separation and cell division.',
    explanationTe:
      'DNA ప్రతిరూపణ కణ చక్రంలో interphase యొక్క S దశ (Synthesis phase) లో జరుగుతుంది. S దశలో, ప్రతి daughter cell genome యొక్క ఒకేలాంటి copy అందుకునేలా ప్రతి chromosome ద్విగుణీకరించబడుతుంది. S దశ తర్వాత, కణంలో రెట్టింపు DNA ఉంటుంది (కానీ sister chromatids కలిసి ఉన్నందున chromosome సంఖ్య అదే ఉంటుంది). G1 పెరుగుదల కోసం, G2 mitosis కు సిద్ధం కావడం కోసం, మరియు M దశ chromosome వేరుచేయడం మరియు కణ విభజన కోసం.',
    eliminationTechnique:
      'G1 phase is the first gap phase where the cell grows and prepares for DNA synthesis, but replication has not yet started — eliminate (b). G2 phase follows S phase; by this point DNA replication is already complete — eliminate (c). M phase is when chromosomes separate and the cell divides, not when DNA replicates — eliminate (d).',
    eliminationTechniqueTe:
      'G1 దశ మొదటి gap దశ, ఇక్కడ కణం పెరుగుతుంది మరియు DNA సంశ్లేషణకు సిద్ధమవుతుంది, కానీ ప్రతిరూపణ ఇంకా ప్రారంభం కాలేదు — (b) తొలగించండి. G2 దశ S దశ తర్వాత వస్తుంది; ఈ సమయానికి DNA ప్రతిరూపణ ఇప్పటికే పూర్తయింది — (c) తొలగించండి. M దశ chromosomes వేరుపడి కణం విభజన జరిగే సమయం, DNA ప్రతిరూపణ కాదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'bot-cb-018',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The presence of their own DNA and 70S ribosomes in mitochondria and chloroplasts supports which theory?',
    textTe: 'Mitochondria మరియు chloroplasts లో వాటి స్వంత DNA మరియు 70S ribosomes ఉండటం ఏ సిద్ధాంతానికి మద్దతు ఇస్తుంది?',
    options: [
      { id: 'a', text: 'Cell theory', textTe: 'కణ సిద్ధాంతం' },
      { id: 'b', text: 'Endosymbiotic theory', textTe: 'Endosymbiotic సిద్ధాంతం' },
      { id: 'c', text: 'Germ plasm theory', textTe: 'Germ plasm సిద్ధాంతం' },
      { id: 'd', text: 'Theory of spontaneous generation', textTe: 'ఆకస్మిక ఉత్పత్తి సిద్ధాంతం' },
    ],
    correctOptionId: 'b',
    explanation:
      'The endosymbiotic theory, proposed by Lynn Margulis (1970), states that mitochondria and chloroplasts evolved from free-living prokaryotes that were engulfed by ancestral eukaryotic cells in a symbiotic relationship. Evidence supporting this theory includes: (1) they have their own circular DNA similar to prokaryotic DNA, (2) they have 70S ribosomes (same as prokaryotes), (3) they are surrounded by a double membrane, and (4) they divide independently by binary fission.',
    explanationTe:
      'Endosymbiotic సిద్ధాంతాన్ని Lynn Margulis (1970) ప్రతిపాదించారు, ఇది mitochondria మరియు chloroplasts సహజీవన సంబంధంలో పూర్వీక యూకారియోటిక్ కణాల ద్వారా మింగబడిన స్వేచ్ఛా-జీవన ప్రోకారియోట్ల నుండి పరిణామం చెందాయని పేర్కొంటుంది. ఈ సిద్ధాంతానికి మద్దతిచ్చే ఆధారాలు: (1) వాటికి ప్రోకారియోటిక్ DNA వంటి వాటి స్వంత వృత్తాకార DNA ఉంది, (2) వాటికి 70S ribosomes ఉన్నాయి (ప్రోకారియోట్ల వలె), (3) ఇవి ద్వి-పొరతో చుట్టబడి ఉన్నాయి, మరియు (4) ఇవి binary fission ద్వారా స్వతంత్రంగా విభజన చెందుతాయి.',
    eliminationTechnique:
      'Cell theory states that all organisms are made of cells — it does not explain organelle origins — eliminate (a). Germ plasm theory (Weismann) deals with inheritance through germline cells, not organelle evolution — eliminate (c). Theory of spontaneous generation (disproved by Pasteur) claims life can arise from non-living matter — eliminate (d).',
    eliminationTechniqueTe:
      'కణ సిద్ధాంతం అన్ని జీవులు కణాలతో తయారవుతాయని పేర్కొంటుంది — ఇది కణాంగాల మూలాన్ని వివరించదు — (a) తొలగించండి. Germ plasm సిద్ధాంతం (Weismann) germline కణాల ద్వారా వారసత్వంతో సంబంధం కలిగి ఉంది, కణాంగాల పరిణామం కాదు — (c) తొలగించండి. ఆకస్మిక ఉత్పత్తి సిద్ధాంతం (Pasteur ద్వారా తిరస్కరించబడింది) నిర్జీవ పదార్థం నుండి జీవం పుట్టగలదని పేర్కొంటుంది — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  // ===== HARD (7 questions) =====

  {
    id: 'bot-cb-019',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Which pair of organelles are termed "semi-autonomous" because they possess their own DNA, ribosomes, and can partially self-replicate?',
    textTe: 'ఏ జత కణాంగాలు వాటి స్వంత DNA, ribosomes కలిగి ఉండటం మరియు పాక్షికంగా స్వయంగా ప్రతిరూపణ చేయగలగడం వల్ల "semi-autonomous" అని పిలువబడతాయి?',
    options: [
      { id: 'a', text: 'Lysosomes and Peroxisomes', textTe: 'Lysosomes మరియు Peroxisomes' },
      {
        id: 'b',
        text: 'Golgi apparatus and Endoplasmic reticulum',
        textTe: 'Golgi apparatus మరియు Endoplasmic reticulum',
      },
      { id: 'c', text: 'Mitochondria and Chloroplasts', textTe: 'Mitochondria మరియు Chloroplasts' },
      { id: 'd', text: 'Ribosomes and Centrosomes', textTe: 'Ribosomes మరియు Centrosomes' },
    ],
    correctOptionId: 'c',
    explanation:
      'Mitochondria and chloroplasts are called semi-autonomous organelles because they contain their own circular DNA (similar to prokaryotic DNA), 70S ribosomes, and can synthesize some of their own proteins. They can also self-replicate by a process similar to binary fission. However, they are not fully autonomous because a large proportion of their proteins are encoded by nuclear DNA, synthesized in the cytoplasm, and then imported. This semi-autonomous nature is key evidence for the endosymbiotic theory.',
    explanationTe:
      'Mitochondria మరియు chloroplasts semi-autonomous కణాంగాలు అని పిలువబడతాయి ఎందుకంటే వాటిలో వాటి స్వంత వృత్తాకార DNA (ప్రోకారియోటిక్ DNA వంటి), 70S ribosomes ఉన్నాయి, మరియు వాటి స్వంత proteins లో కొన్నింటిని సంశ్లేషణ చేయగలవు. ఇవి binary fission వంటి ప్రక్రియ ద్వారా స్వయంగా ప్రతిరూపణ కూడా చేయగలవు. అయితే, వాటి proteins లో అధిక భాగం nuclear DNA ద్వారా encode చేయబడి, సైటోప్లాజంలో సంశ్లేషణ చేయబడి, ఆపై import చేయబడతాయి కాబట్టి అవి పూర్తిగా autonomous కావు. ఈ semi-autonomous స్వభావం endosymbiotic సిద్ధాంతానికి కీలక ఆధారం.',
    eliminationTechnique:
      'Lysosomes and peroxisomes are single-membrane organelles; they do not have their own DNA or ribosomes — eliminate (a). Golgi apparatus and ER are part of the endomembrane system and lack their own genetic material — eliminate (b). Ribosomes are not membrane-bound organelles and centrosomes do not have their own DNA — eliminate (d).',
    eliminationTechniqueTe:
      'Lysosomes మరియు peroxisomes ఏక-పొర కణాంగాలు; వాటికి వాటి స్వంత DNA లేదా ribosomes లేవు — (a) తొలగించండి. Golgi apparatus మరియు ER endomembrane system లో భాగం మరియు వాటి స్వంత జన్యు పదార్థం లేదు — (b) తొలగించండి. Ribosomes పొరతో కప్పబడిన కణాంగాలు కావు మరియు centrosomes వాటి స్వంత DNA కలిగి ఉండవు — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'bot-cb-020',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Which of the following is NOT a significance of meiosis?',
    textTe: 'కింది వాటిలో meiosis యొక్క ప్రాముఖ్యత కానిది ఏది?',
    options: [
      {
        id: 'a',
        text: 'Reduction of chromosome number from diploid (2n) to haploid (n)',
        textTe: 'Chromosome సంఖ్యను diploid (2n) నుండి haploid (n) కు తగ్గించడం',
      },
      {
        id: 'b',
        text: 'Introduction of genetic variation through crossing over and independent assortment',
        textTe: 'Crossing over మరియు independent assortment ద్వారా జన్యు వైవిధ్యాన్ని పరిచయం చేయడం',
      },
      {
        id: 'c',
        text: 'Formation of gametes in sexually reproducing organisms',
        textTe: 'లైంగికంగా ప్రత్యుత్పత్తి చేసే జీవులలో gametes ఏర్పాటు',
      },
      {
        id: 'd',
        text: 'Production of genetically identical daughter cells for growth and repair',
        textTe: 'పెరుగుదల మరియు మరమ్మత్తు కోసం జన్యుపరంగా ఒకే రకమైన daughter cells ఉత్పత్తి',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'Production of genetically identical daughter cells for growth and repair is a function of mitosis, NOT meiosis. Meiosis produces four genetically different haploid daughter cells. Its significance includes: (1) reducing the chromosome number from 2n to n so that the species chromosome number is maintained after fertilization, (2) generating genetic diversity through crossing over in Prophase I and independent assortment in Metaphase I, and (3) forming gametes (eggs and sperm) in sexually reproducing organisms.',
    explanationTe:
      'పెరుగుదల మరియు మరమ్మత్తు కోసం జన్యుపరంగా ఒకే రకమైన daughter cells ఉత్పత్తి mitosis యొక్క విధి, meiosis కాదు. Meiosis నాలుగు జన్యుపరంగా భిన్నమైన haploid daughter cells ను ఉత్పత్తి చేస్తుంది. దీని ప్రాముఖ్యతలో: (1) fertilization తర్వాత జాతి chromosome సంఖ్య నిర్వహించబడేలా chromosome సంఖ్యను 2n నుండి n కు తగ్గించడం, (2) Prophase I లో crossing over మరియు Metaphase I లో independent assortment ద్వారా జన్యు వైవిధ్యం సృష్టించడం, మరియు (3) లైంగికంగా ప్రత్యుత్పత్తి చేసే జీవులలో gametes (అండాలు మరియు శుక్రకణాలు) ఏర్పరచడం ఉన్నాయి.',
    eliminationTechnique:
      'Reducing chromosome number from 2n to n is the primary purpose of meiosis — eliminate (a). Crossing over and independent assortment are hallmark events of meiosis that generate genetic variation — eliminate (b). Formation of gametes is the direct outcome of meiosis in sexual reproduction — eliminate (c).',
    eliminationTechniqueTe:
      'Chromosome సంఖ్యను 2n నుండి n కు తగ్గించడం meiosis యొక్క ప్రాథమిక ఉద్దేశ్యం — (a) తొలగించండి. Crossing over మరియు independent assortment జన్యు వైవిధ్యాన్ని సృష్టించే meiosis యొక్క విశిష్ట సంఘటనలు — (b) తొలగించండి. Gametes ఏర్పాటు లైంగిక ప్రత్యుత్పత్తిలో meiosis యొక్క ప్రత్యక్ష ఫలితం — (c) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'bot-cb-021',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'In a metacentric chromosome, the centromere is located',
    textTe: 'Metacentric chromosome లో centromere ఎక్కడ ఉంటుంది?',
    options: [
      {
        id: 'a',
        text: 'At the middle, resulting in two equal arms',
        textTe: 'మధ్యలో, రెండు సమాన భుజాలను ఏర్పరుస్తుంది',
      },
      {
        id: 'b',
        text: 'Slightly off-center, producing one shorter and one longer arm',
        textTe: 'కొద్దిగా కేంద్రం నుండి దూరంగా, ఒక చిన్న మరియు ఒక పొడవైన భుజాన్ని ఏర్పరుస్తుంది',
      },
      {
        id: 'c',
        text: 'Close to one end, producing a very short arm and a very long arm',
        textTe: 'ఒక చివరకు దగ్గరగా, చాలా చిన్న భుజం మరియు చాలా పొడవైన భుజాన్ని ఏర్పరుస్తుంది',
      },
      {
        id: 'd',
        text: 'At the terminal end of the chromosome',
        textTe: 'Chromosome యొక్క చివరి కొనన',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'In metacentric chromosomes, the centromere is located at the middle (median position), dividing the chromosome into two arms of approximately equal length. These are also called V-shaped chromosomes because of their appearance during anaphase. Sub-metacentric chromosomes have the centromere slightly off-center (L-shaped). Acrocentric chromosomes have the centromere near one end (J-shaped). Telocentric chromosomes have the centromere at the terminal end (I-shaped).',
    explanationTe:
      'Metacentric chromosomes లో, centromere మధ్యలో (median position) ఉంటుంది, chromosome ను దాదాపు సమాన పొడవు గల రెండు భుజాలుగా విభజిస్తుంది. Anaphase సమయంలో వాటి రూపం కారణంగా ఇవి V-ఆకార chromosomes అని కూడా పిలువబడతాయి. Sub-metacentric chromosomes లో centromere కొద్దిగా కేంద్రం నుండి దూరంగా ఉంటుంది (L-ఆకారం). Acrocentric chromosomes లో centromere ఒక చివరకు దగ్గరగా ఉంటుంది (J-ఆకారం). Telocentric chromosomes లో centromere చివరి కొనన ఉంటుంది (I-ఆకారం).',
    eliminationTechnique:
      'Slightly off-center with unequal arms describes sub-metacentric chromosomes — eliminate (b). Close to one end with a very short and very long arm describes acrocentric chromosomes — eliminate (c). Terminal end position describes telocentric chromosomes — eliminate (d).',
    eliminationTechniqueTe:
      'అసమాన భుజాలతో కొద్దిగా కేంద్రం నుండి దూరంగా ఉండటం sub-metacentric chromosomes ను వివరిస్తుంది — (b) తొలగించండి. చాలా చిన్న మరియు చాలా పొడవైన భుజంతో ఒక చివరకు దగ్గరగా ఉండటం acrocentric chromosomes ను వివరిస్తుంది — (c) తొలగించండి. చివరి కొన స్థానం telocentric chromosomes ను వివరిస్తుంది — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'bot-cb-022',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The 70S ribosome found in prokaryotes is composed of which two subunits?',
    textTe: 'ప్రోకారియోట్లలో కనుగొనబడే 70S ribosome ఏ రెండు subunits తో కూడి ఉంటుంది?',
    options: [
      { id: 'a', text: '40S + 30S', textTe: '40S + 30S' },
      { id: 'b', text: '50S + 30S', textTe: '50S + 30S' },
      { id: 'c', text: '60S + 40S', textTe: '60S + 40S' },
      { id: 'd', text: '50S + 40S', textTe: '50S + 40S' },
    ],
    correctOptionId: 'b',
    explanation:
      'The 70S ribosome found in prokaryotes (as well as in mitochondria and chloroplasts) is composed of a large 50S subunit and a small 30S subunit. The "S" stands for Svedberg units, which measure sedimentation rate during ultracentrifugation. Svedberg values are not simply additive because they depend on the shape, size, and density of the particle, not just mass alone. The eukaryotic cytoplasmic ribosome is 80S, composed of 60S (large) and 40S (small) subunits.',
    explanationTe:
      'ప్రోకారియోట్లలో (అలాగే mitochondria మరియు chloroplasts లో) కనుగొనబడే 70S ribosome పెద్ద 50S subunit మరియు చిన్న 30S subunit తో కూడి ఉంటుంది. "S" అనేది Svedberg units ను సూచిస్తుంది, ఇవి ultracentrifugation సమయంలో అవక్షేపణ రేటును కొలుస్తాయి. Svedberg విలువలు సరళంగా కూడబడవు ఎందుకంటే అవి కణం యొక్క ఆకారం, పరిమాణం, మరియు సాంద్రతపై ఆధారపడతాయి, కేవలం ద్రవ్యరాశిపై మాత్రమే కాదు. యూకారియోటిక్ సైటోప్లాజమిక్ ribosome 80S, 60S (పెద్ద) మరియు 40S (చిన్న) subunits తో కూడి ఉంటుంది.',
    eliminationTechnique:
      '40S is a subunit of the eukaryotic 80S ribosome, not of the prokaryotic 70S — eliminate (a). 60S + 40S together make up the eukaryotic 80S ribosome, not the prokaryotic 70S — eliminate (c). 50S + 40S is a mix of prokaryotic large subunit and eukaryotic small subunit — this combination does not exist in nature — eliminate (d).',
    eliminationTechniqueTe:
      '40S యూకారియోటిక్ 80S ribosome యొక్క subunit, ప్రోకారియోటిక్ 70S కాదు — (a) తొలగించండి. 60S + 40S కలిసి యూకారియోటిక్ 80S ribosome ను తయారు చేస్తాయి, ప్రోకారియోటిక్ 70S కాదు — (c) తొలగించండి. 50S + 40S ప్రోకారియోటిక్ పెద్ద subunit మరియు యూకారియోటిక్ చిన్న subunit కలయిక — ఈ కలయిక ప్రకృతిలో ఉనికిలో లేదు — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'bot-cb-023',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'When a living plant cell is placed in a concentrated salt solution (hypertonic), the cell undergoes',
    textTe: 'సజీవ మొక్క కణాన్ని సాంద్రీకృత ఉప్పు ద్రావణంలో (hypertonic) ఉంచినప్పుడు, కణం ఏమి అనుభవిస్తుంది?',
    options: [
      {
        id: 'a',
        text: 'Endosmosis and becomes turgid',
        textTe: 'Endosmosis జరిగి కణం ఉబ్బి (turgid) అవుతుంది',
      },
      {
        id: 'b',
        text: 'Lysis due to excess water absorption',
        textTe: 'అధిక నీటి శోషణ వల్ల lysis జరుగుతుంది',
      },
      {
        id: 'c',
        text: 'Exosmosis and plasmolysis occurs',
        textTe: 'Exosmosis జరిగి plasmolysis సంభవిస్తుంది',
      },
      {
        id: 'd',
        text: 'No change as the cell wall prevents water movement',
        textTe: 'కణ భిత్తి నీటి కదలికను అడ్డుకుంటుంది కాబట్టి ఏ మార్పు జరగదు',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'When a living plant cell is placed in a hypertonic solution (higher solute concentration outside), water moves out of the cell by exosmosis (from the region of higher water potential inside the cell to the region of lower water potential outside). This causes the protoplasm (cell membrane and its contents) to shrink and pull away from the rigid cell wall — a process called plasmolysis. The space between the cell wall and the shrunken protoplasm gets filled with the external solution. Plasmolysis is reversible if the cell is placed back in a hypotonic solution (deplasmolysis).',
    explanationTe:
      'సజీవ మొక్క కణాన్ని hypertonic ద్రావణంలో (బయట ఎక్కువ ద్రావిత సాంద్రత) ఉంచినప్పుడు, exosmosis ద్వారా నీరు కణం నుండి బయటకు వెళ్తుంది (కణం లోపల ఎక్కువ నీటి పొటెన్షియల్ ప్రాంతం నుండి బయట తక్కువ నీటి పొటెన్షియల్ ప్రాంతానికి). ఇది protoplasm (కణ పొర మరియు దాని భాగాలు) సంకోచించి దృఢమైన కణ భిత్తి నుండి దూరంగా లాగబడటానికి కారణమవుతుంది — ఈ ప్రక్రియను plasmolysis అంటారు. కణ భిత్తి మరియు సంకోచించిన protoplasm మధ్య ఖాళీ బయటి ద్రావణంతో నిండుతుంది. కణాన్ని తిరిగి hypotonic ద్రావణంలో ఉంచితే plasmolysis తిరగబడుతుంది (deplasmolysis).',
    eliminationTechnique:
      'Endosmosis and turgidity occur when a cell is placed in a hypotonic solution (lower solute concentration outside), not hypertonic — eliminate (a). Lysis (cell bursting) can occur in animal cells in hypotonic solution; plant cells are protected by the rigid cell wall — eliminate (b). The cell wall is freely permeable to water and solutes; it cannot prevent osmotic water movement — eliminate (d).',
    eliminationTechniqueTe:
      'Endosmosis మరియు turgidity కణాన్ని hypotonic ద్రావణంలో (బయట తక్కువ ద్రావిత సాంద్రత) ఉంచినప్పుడు జరుగుతాయి, hypertonic లో కాదు — (a) తొలగించండి. Lysis (కణం పగలడం) hypotonic ద్రావణంలో జంతు కణాలలో జరగవచ్చు; మొక్క కణాలు దృఢమైన కణ భిత్తి ద్వారా రక్షించబడతాయి — (b) తొలగించండి. కణ భిత్తి నీరు మరియు ద్రావితాలకు స్వేచ్ఛగా ప్రవేశసాధ్యం; ఇది osmotic నీటి కదలికను అడ్డుకోలేదు — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'bot-cb-024',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'The G2/M checkpoint of the cell cycle primarily ensures that',
    textTe: 'కణ చక్రం యొక్క G2/M checkpoint ప్రధానంగా దేనిని నిర్ధారిస్తుంది?',
    options: [
      {
        id: 'a',
        text: 'The cell has reached a sufficient size and has adequate nutrients',
        textTe: 'కణం తగినంత పరిమాణానికి చేరుకుంది మరియు తగిన పోషకాలు ఉన్నాయి',
      },
      {
        id: 'b',
        text: 'All chromosomes are properly attached to spindle fibres',
        textTe: 'అన్ని chromosomes spindle fibres కు సరిగ్గా అంటుకొని ఉన్నాయి',
      },
      {
        id: 'c',
        text: 'The cell has received appropriate external growth factor signals',
        textTe: 'కణం తగిన బాహ్య growth factor సంకేతాలను అందుకుంది',
      },
      {
        id: 'd',
        text: 'DNA replication is complete and any DNA damage has been repaired',
        textTe: 'DNA ప్రతిరూపణ పూర్తయింది మరియు ఏదైనా DNA నష్టం మరమ్మత్తు చేయబడింది',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'The G2/M checkpoint (also called the DNA damage checkpoint) primarily ensures that DNA replication during S phase has been completed successfully and that any DNA damage has been detected and repaired before the cell enters mitosis. If DNA damage is found, the checkpoint halts the cell cycle and activates repair mechanisms. If the damage is irreparable, the cell may undergo apoptosis. The G1/S checkpoint (restriction point) checks for cell size, nutrients, and growth factors. The spindle assembly checkpoint at metaphase ensures all chromosomes are attached to spindle fibres.',
    explanationTe:
      'G2/M checkpoint (DNA damage checkpoint అని కూడా పిలువబడుతుంది) ప్రధానంగా S దశలో DNA ప్రతిరూపణ విజయవంతంగా పూర్తయిందని మరియు కణం mitosis లోకి ప్రవేశించడానికి ముందు ఏదైనా DNA నష్టం గుర్తించబడి మరమ్మత్తు చేయబడిందని నిర్ధారిస్తుంది. DNA నష్టం కనుగొనబడితే, checkpoint కణ చక్రాన్ని ఆపి మరమ్మత్తు యంత్రాంగాలను ప్రేరేపిస్తుంది. నష్టం మరమ్మత్తు చేయలేనిదైతే, కణం apoptosis అనుభవించవచ్చు. G1/S checkpoint (restriction point) కణ పరిమాణం, పోషకాలు, మరియు growth factors ను తనిఖీ చేస్తుంది. Metaphase లో spindle assembly checkpoint అన్ని chromosomes spindle fibres కు అంటుకొని ఉన్నాయని నిర్ధారిస్తుంది.',
    eliminationTechnique:
      'Cell size and nutrient availability are checked at the G1/S checkpoint (restriction point), not G2/M — eliminate (a). Chromosome attachment to spindle fibres is monitored at the spindle assembly checkpoint (metaphase checkpoint), not G2/M — eliminate (b). External growth factor signals are also assessed at the G1 checkpoint — eliminate (c).',
    eliminationTechniqueTe:
      'కణ పరిమాణం మరియు పోషక లభ్యత G1/S checkpoint (restriction point) వద్ద తనిఖీ చేయబడతాయి, G2/M కాదు — (a) తొలగించండి. Spindle fibres కు chromosome అంటుకోవడం spindle assembly checkpoint (metaphase checkpoint) వద్ద పర్యవేక్షించబడుతుంది, G2/M కాదు — (b) తొలగించండి. బాహ్య growth factor సంకేతాలు కూడా G1 checkpoint వద్ద అంచనా వేయబడతాయి — (c) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'bot-cb-025',
    chapterId: 'botany-cell-biology',
    subjectId: 'botany',
    text: 'Which of the following organelles is NOT a part of the endomembrane system?',
    textTe: 'కింది కణాంగాలలో endomembrane system లో భాగం కానిది ఏది?',
    options: [
      { id: 'a', text: 'Mitochondria', textTe: 'Mitochondria' },
      { id: 'b', text: 'Endoplasmic reticulum', textTe: 'Endoplasmic reticulum' },
      { id: 'c', text: 'Golgi apparatus', textTe: 'Golgi apparatus' },
      { id: 'd', text: 'Lysosomes', textTe: 'Lysosomes' },
    ],
    correctOptionId: 'a',
    explanation:
      'Mitochondria are NOT part of the endomembrane system. The endomembrane system is a group of membranes and organelles that work together to modify, package, and transport lipids and proteins within the cell. It includes the endoplasmic reticulum (ER), Golgi apparatus, lysosomes, vacuoles, vesicles, and the plasma membrane. Mitochondria (and chloroplasts) are excluded because they have their own independent origin (endosymbiotic origin), their own DNA, and they do not receive membrane vesicles from the ER or Golgi.',
    explanationTe:
      'Mitochondria endomembrane system లో భాగం కావు. Endomembrane system అనేది కణంలో lipids మరియు proteins ను మార్పు చేయడం, ప్యాకేజ్ చేయడం, మరియు రవాణా చేయడం కోసం కలిసి పనిచేసే పొరలు మరియు కణాంగాల సమూహం. ఇందులో endoplasmic reticulum (ER), Golgi apparatus, lysosomes, vacuoles, vesicles, మరియు plasma membrane ఉన్నాయి. Mitochondria (మరియు chloroplasts) వాటి స్వంత స్వతంత్ర మూలం (endosymbiotic origin), వాటి స్వంత DNA కలిగి ఉండటం, మరియు ER లేదా Golgi నుండి membrane vesicles అందుకోకపోవడం వల్ల మినహాయించబడ్డాయి.',
    eliminationTechnique:
      'Endoplasmic reticulum is a central component of the endomembrane system where protein and lipid synthesis begins — eliminate (b). Golgi apparatus receives vesicles from the ER and is a core member of the endomembrane system — eliminate (c). Lysosomes are derived from the trans-Golgi network and are part of the endomembrane system — eliminate (d).',
    eliminationTechniqueTe:
      'Endoplasmic reticulum endomembrane system యొక్క కేంద్ర భాగం, ఇక్కడ protein మరియు lipid సంశ్లేషణ ప్రారంభమవుతుంది — (b) తొలగించండి. Golgi apparatus ER నుండి vesicles అందుకుంటుంది మరియు endomembrane system యొక్క ప్రధాన సభ్యుడు — (c) తొలగించండి. Lysosomes trans-Golgi network నుండి ఉత్పన్నమవుతాయి మరియు endomembrane system లో భాగం — (d) తొలగించండి.',
    difficulty: 'hard',
  },
];
