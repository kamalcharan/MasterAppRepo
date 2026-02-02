import { Question } from '../../types';

export const chemistryChemicalBondingQuestions: Question[] = [
  // ─────────────────────────────────────────────
  //  EASY (8 questions): chem-cb-001 to chem-cb-008
  // ─────────────────────────────────────────────

  {
    id: 'chem-cb-001',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Which of the following compounds is formed by the transfer of electrons from one atom to another?',
    textTe: 'కింది సమ్మేళనాలలో ఒక పరమాణువు నుండి మరొక పరమాణువుకు ఎలక్ట్రాన్ల బదిలీ ద్వారా ఏర్పడేది ఏది?',
    options: [
      { id: 'a', text: 'NaCl', textTe: 'NaCl' },
      { id: 'b', text: 'Cl₂', textTe: 'Cl₂' },
      { id: 'c', text: 'HCl', textTe: 'HCl' },
      { id: 'd', text: 'CCl₄', textTe: 'CCl₄' },
    ],
    correctOptionId: 'a',
    explanation:
      'NaCl is an ionic compound formed by the transfer of one electron from sodium (Na) to chlorine (Cl). Na loses an electron to form Na⁺ and Cl gains an electron to form Cl⁻. The electrostatic attraction between these oppositely charged ions constitutes the ionic bond.',
    explanationTe:
      'NaCl అనేది అయానిక సమ్మేళనం, ఇది సోడియం (Na) నుండి క్లోరిన్ (Cl) కు ఒక ఎలక్ట్రాన్ బదిలీ ద్వారా ఏర్పడుతుంది. Na ఒక ఎలక్ట్రాన్‌ను కోల్పోయి Na⁺ గా మారుతుంది, Cl ఒక ఎలక్ట్రాన్‌ను పొంది Cl⁻ గా మారుతుంది. ఈ వ్యతిరేక ఆవేశం కలిగిన అయాన్ల మధ్య స్థిర విద్యుత్ ఆకర్షణ అయానిక బంధాన్ని ఏర్పరుస్తుంది.',
    eliminationTechnique:
      'Cl₂ is a homonuclear diatomic molecule with a pure covalent bond — no electron transfer occurs. HCl and CCl₄ are covalent compounds formed by sharing of electrons, not transfer. Only NaCl involves a metal (Na) and a non-metal (Cl) with a large electronegativity difference, making electron transfer favorable.',
    eliminationTechniqueTe:
      'Cl₂ అనేది సమ పరమాణు ద్విపరమాణు అణువు, ఇది శుద్ధ సహసంయోజక బంధంతో ఉంటుంది — ఎలక్ట్రాన్ బదిలీ జరగదు. HCl మరియు CCl₄ ఎలక్ట్రాన్ల భాగస్వామ్యం ద్వారా ఏర్పడే సహసంయోజక సమ్మేళనాలు. NaCl మాత్రమే లోహం (Na) మరియు అలోహం (Cl) మధ్య అధిక ఎలక్ట్రోనెగటివిటీ భేదం కలిగి ఎలక్ట్రాన్ బదిలీకి అనుకూలంగా ఉంటుంది.',
    difficulty: 'easy',
  },

  {
    id: 'chem-cb-002',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The bond formed by mutual sharing of electron pairs between two atoms is called:',
    textTe: 'రెండు పరమాణువుల మధ్య ఎలక్ట్రాన్ జతల పరస్పర భాగస్వామ్యం ద్వారా ఏర్పడే బంధాన్ని ఏమంటారు?',
    options: [
      { id: 'a', text: 'Ionic bond', textTe: 'అయానిక బంధం' },
      { id: 'b', text: 'Covalent bond', textTe: 'సహసంయోజక బంధం' },
      { id: 'c', text: 'Metallic bond', textTe: 'లోహ బంధం' },
      { id: 'd', text: 'Hydrogen bond', textTe: 'హైడ్రోజన్ బంధం' },
    ],
    correctOptionId: 'b',
    explanation:
      'A covalent bond is formed when two atoms share one or more pairs of electrons mutually. Both atoms contribute electrons to the shared pair. This type of bonding is common between non-metal atoms with similar electronegativity values.',
    explanationTe:
      'రెండు పరమాణువులు ఒకటి లేదా అంతకంటే ఎక్కువ ఎలక్ట్రాన్ జతలను పరస్పరం భాగస్వామ్యం చేసుకున్నప్పుడు సహసంయోజక బంధం ఏర్పడుతుంది. రెండు పరమాణువులు భాగస్వామ్య జతకు ఎలక్ట్రాన్లను అందిస్తాయి. ఈ రకమైన బంధం సమాన ఎలక్ట్రోనెగటివిటీ విలువలు కలిగిన అలోహ పరమాణువుల మధ్య సాధారణంగా ఉంటుంది.',
    eliminationTechnique:
      'Ionic bond involves transfer (not sharing) of electrons — eliminate (a). Metallic bond involves delocalized electrons in a metal lattice, not direct sharing between two specific atoms — eliminate (c). Hydrogen bond is an intermolecular force, not a bond formed by electron sharing — eliminate (d).',
    eliminationTechniqueTe:
      'అయానిక బంధంలో ఎలక్ట్రాన్ల బదిలీ జరుగుతుంది, భాగస్వామ్యం కాదు — (a) తొలగించండి. లోహ బంధంలో లోహ లాటిస్‌లో విస్థానీకృత ఎలక్ట్రాన్లు ఉంటాయి — (c) తొలగించండి. హైడ్రోజన్ బంధం అంతర-అణు బలం, ఎలక్ట్రాన్ భాగస్వామ్యం ద్వారా ఏర్పడే బంధం కాదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'chem-cb-003',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'In which of the following species does a coordinate (dative) bond exist?',
    textTe: 'కింది వాటిలో దేనిలో సమన్వయ (దాత) బంధం ఉంటుంది?',
    options: [
      { id: 'a', text: 'NaCl', textTe: 'NaCl' },
      { id: 'b', text: 'H₂O', textTe: 'H₂O' },
      { id: 'c', text: 'NH₄⁺', textTe: 'NH₄⁺' },
      { id: 'd', text: 'CH₄', textTe: 'CH₄' },
    ],
    correctOptionId: 'c',
    explanation:
      'In NH₄⁺, the nitrogen atom in NH₃ donates its lone pair of electrons to H⁺ (which has an empty 1s orbital). This bond where one atom donates both electrons of the shared pair is called a coordinate or dative bond. Once formed, it is indistinguishable from other N–H covalent bonds in NH₄⁺.',
    explanationTe:
      'NH₄⁺ లో, NH₃ లోని నైట్రోజన్ పరమాణువు తన ఏకాంత ఎలక్ట్రాన్ జతను H⁺ కు (ఖాళీ 1s కక్ష్యం ఉన్న) దానం చేస్తుంది. భాగస్వామ్య జతలోని రెండు ఎలక్ట్రాన్లను ఒక పరమాణువు దానం చేసే ఈ బంధాన్ని సమన్వయ లేదా దాత బంధం అంటారు. ఏర్పడిన తర్వాత, ఇది NH₄⁺ లోని ఇతర N–H సహసంయోజక బంధాల నుండి వేరుగా గుర్తించలేము.',
    eliminationTechnique:
      'NaCl is ionic — formed by electron transfer, not coordinate bonding — eliminate (a). H₂O has two normal covalent O–H bonds with no coordinate bond — eliminate (b). CH₄ has four equivalent C–H covalent bonds with no lone pair donation — eliminate (d). Only NH₄⁺ involves donation of the lone pair of N to H⁺.',
    eliminationTechniqueTe:
      'NaCl అయానిక — ఎలక్ట్రాన్ బదిలీ ద్వారా ఏర్పడుతుంది — (a) తొలగించండి. H₂O లో రెండు సాధారణ O–H సహసంయోజక బంధాలు ఉన్నాయి — (b) తొలగించండి. CH₄ లో నాలుగు సమాన C–H సహసంయోజక బంధాలు ఉన్నాయి — (d) తొలగించండి. NH₄⁺ మాత్రమే N యొక్క ఏకాంత జత H⁺ కు దానం చేయడం కలిగి ఉంటుంది.',
    difficulty: 'easy',
  },

  {
    id: 'chem-cb-004',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Which of the following hydrogen halides has the highest boiling point due to hydrogen bonding?',
    textTe: 'హైడ్రోజన్ బంధం కారణంగా కింది హైడ్రోజన్ హాలైడ్లలో అత్యధిక మరిగే బిందువు ఏది కలిగి ఉంటుంది?',
    options: [
      { id: 'a', text: 'HCl', textTe: 'HCl' },
      { id: 'b', text: 'HBr', textTe: 'HBr' },
      { id: 'c', text: 'HI', textTe: 'HI' },
      { id: 'd', text: 'HF', textTe: 'HF' },
    ],
    correctOptionId: 'd',
    explanation:
      'HF has the highest boiling point among the hydrogen halides (19.5 °C) because fluorine is the most electronegative element, which enables strong intermolecular hydrogen bonding between HF molecules. HCl, HBr, and HI do not exhibit significant hydrogen bonding because Cl, Br, and I are much less electronegative and larger in size.',
    explanationTe:
      'హైడ్రోజన్ హాలైడ్లలో HF అత్యధిక మరిగే బిందువును (19.5 °C) కలిగి ఉంటుంది, ఎందుకంటే ఫ్లోరిన్ అత్యంత ఎలక్ట్రోనెగటివ్ మూలకం, ఇది HF అణువుల మధ్య బలమైన అంతర-అణు హైడ్రోజన్ బంధాన్ని అనుమతిస్తుంది. HCl, HBr మరియు HI గణనీయమైన హైడ్రోజన్ బంధాన్ని ప్రదర్శించవు, ఎందుకంటే Cl, Br మరియు I తక్కువ ఎలక్ట్రోనెగటివిటీ మరియు పెద్ద పరిమాణం కలిగి ఉంటాయి.',
    eliminationTechnique:
      'Among hydrogen halides, the boiling points generally follow the trend HF >> HI > HBr > HCl when considering both hydrogen bonding and van der Waals forces. HCl, HBr, and HI lack strong hydrogen bonding — their boiling points are governed primarily by London dispersion forces. Only HF forms strong hydrogen bonds due to the very high electronegativity and small size of fluorine.',
    eliminationTechniqueTe:
      'హైడ్రోజన్ హాలైడ్లలో, హైడ్రోజన్ బంధం మరియు వాన్ డెర్ వాల్స్ బలాలను పరిగణిస్తే మరిగే బిందువులు సాధారణంగా HF >> HI > HBr > HCl ధోరణిని అనుసరిస్తాయి. HCl, HBr, HI బలమైన హైడ్రోజన్ బంధం లేకపోవడం వల్ల ప్రధానంగా లండన్ వికీర్ణ బలాలపై ఆధారపడతాయి. ఫ్లోరిన్ యొక్క అధిక ఎలక్ట్రోనెగటివిటీ మరియు చిన్న పరిమాణం వల్ల HF మాత్రమే బలమైన హైడ్రోజన్ బంధాలను ఏర్పరుస్తుంది.',
    difficulty: 'easy',
  },

  {
    id: 'chem-cb-005',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Metallic bonding is best described as:',
    textTe: 'లోహ బంధాన్ని ఏ విధంగా ఉత్తమంగా వివరించవచ్చు?',
    options: [
      { id: 'a', text: 'Transfer of electrons from one atom to another', textTe: 'ఒక పరమాణువు నుండి మరొక పరమాణువుకు ఎలక్ట్రాన్ల బదిలీ' },
      { id: 'b', text: 'A sea of delocalized electrons shared among metal cations', textTe: 'లోహ కాటయాన్ల మధ్య భాగస్వామ్యం చేయబడిన విస్థానీకృత ఎలక్ట్రాన్ల సముద్రం' },
      { id: 'c', text: 'Mutual sharing of electron pairs between two atoms', textTe: 'రెండు పరమాణువుల మధ్య ఎలక్ట్రాన్ జతల పరస్పర భాగస్వామ్యం' },
      { id: 'd', text: 'Electrostatic attraction between fixed ion pairs', textTe: 'స్థిర అయాన్ జతల మధ్య స్థిర విద్యుత్ ఆకర్షణ' },
    ],
    correctOptionId: 'b',
    explanation:
      'In metallic bonding, the valence electrons of metal atoms are delocalized and form an "electron sea" that is shared among all the positively charged metal cations arranged in a lattice. This model explains the high electrical and thermal conductivity, malleability, and ductility of metals.',
    explanationTe:
      'లోహ బంధంలో, లోహ పరమాణువుల సంయోజకత ఎలక్ట్రాన్లు విస్థానీకృతమై "ఎలక్ట్రాన్ సముద్రాన్ని" ఏర్పరుస్తాయి, ఇది లాటిస్‌లో అమర్చబడిన ధనాత్మక ఆవేశం కలిగిన లోహ కాటయాన్ల మధ్య భాగస్వామ్యం చేయబడుతుంది. ఈ నమూనా లోహాల అధిక విద్యుత్ మరియు ఉష్ణ వాహకత, సాగతను మరియు తంతుసాగతను వివరిస్తుంది.',
    eliminationTechnique:
      'Option (a) describes ionic bonding, not metallic bonding — eliminate it. Option (c) describes covalent bonding between specific atom pairs — eliminate it. Option (d) describes ionic lattice interactions with fixed ion positions — eliminate it. Metallic bonding is unique in that the electrons are not fixed between specific atoms but delocalized across the entire metal lattice.',
    eliminationTechniqueTe:
      'ఎంపిక (a) అయానిక బంధాన్ని వివరిస్తుంది — తొలగించండి. ఎంపిక (c) నిర్దిష్ట పరమాణు జతల మధ్య సహసంయోజక బంధాన్ని వివరిస్తుంది — తొలగించండి. ఎంపిక (d) స్థిర అయాన్ స్థానాలతో అయానిక లాటిస్ పరస్పర చర్యలను వివరిస్తుంది — తొలగించండి. లోహ బంధంలో ఎలక్ట్రాన్లు నిర్దిష్ట పరమాణువుల మధ్య స్థిరంగా ఉండవు, మొత్తం లోహ లాటిస్ అంతటా విస్థానీకృతమై ఉంటాయి.',
    difficulty: 'easy',
  },

  {
    id: 'chem-cb-006',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'What is the bond order of the oxygen molecule (O₂) according to molecular orbital theory?',
    textTe: 'మాలిక్యులర్ ఆర్బిటల్ సిద్ధాంతం ప్రకారం ఆక్సిజన్ అణువు (O₂) యొక్క బంధ క్రమం ఎంత?',
    options: [
      { id: 'a', text: '1', textTe: '1' },
      { id: 'b', text: '1.5', textTe: '1.5' },
      { id: 'c', text: '2', textTe: '2' },
      { id: 'd', text: '3', textTe: '3' },
    ],
    correctOptionId: 'c',
    explanation:
      'The molecular orbital configuration of O₂ (16 electrons) is: (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2p)² (π2p)⁴ (π*2p)². Bond order = (bonding electrons − antibonding electrons) / 2 = (10 − 6) / 2 = 2. This double bond is consistent with the Lewis structure O=O.',
    explanationTe:
      'O₂ (16 ఎలక్ట్రాన్లు) యొక్క మాలిక్యులర్ ఆర్బిటల్ విన్యాసం: (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (σ2p)² (π2p)⁴ (π*2p)². బంధ క్రమం = (బంధ ఎలక్ట్రాన్లు − ప్రతిబంధ ఎలక్ట్రాన్లు) / 2 = (10 − 6) / 2 = 2. ఈ ద్విబంధం O=O అనే Lewis నిర్మాణంతో అనుగుణంగా ఉంటుంది.',
    eliminationTechnique:
      'Bond order 1 corresponds to a single bond like in H₂O₂ (O–O) — too weak for O₂ — eliminate (a). Bond order 1.5 corresponds to species like O₂⁻ — eliminate (b). Bond order 3 corresponds to N₂ with a triple bond — eliminate (d). O₂ has a double bond with bond order 2.',
    eliminationTechniqueTe:
      'బంధ క్రమం 1 H₂O₂ (O–O) వంటి ఏక బంధానికి అనుగుణంగా ఉంటుంది — O₂ కు చాలా బలహీనం — (a) తొలగించండి. బంధ క్రమం 1.5 O₂⁻ వంటి జాతులకు అనుగుణం — (b) తొలగించండి. బంధ క్రమం 3 త్రిబంధం కలిగిన N₂ కు అనుగుణం — (d) తొలగించండి. O₂ బంధ క్రమం 2 తో ద్విబంధం కలిగి ఉంటుంది.',
    difficulty: 'easy',
  },

  {
    id: 'chem-cb-007',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The hybridization of the carbon atom in methane (CH₄) is:',
    textTe: 'మీథేన్ (CH₄) లోని కార్బన్ పరమాణువు యొక్క సంకరీకరణం ఏది?',
    options: [
      { id: 'a', text: 'sp', textTe: 'sp' },
      { id: 'b', text: 'sp²', textTe: 'sp²' },
      { id: 'c', text: 'sp³d', textTe: 'sp³d' },
      { id: 'd', text: 'sp³', textTe: 'sp³' },
    ],
    correctOptionId: 'd',
    explanation:
      'In CH₄, carbon has four bond pairs and no lone pairs. One 2s orbital and three 2p orbitals mix (hybridize) to form four equivalent sp³ hybrid orbitals. These sp³ orbitals are directed towards the corners of a regular tetrahedron with a bond angle of 109.5°, giving methane its tetrahedral geometry.',
    explanationTe:
      'CH₄ లో, కార్బన్ నాలుగు బంధ జతలు మరియు ఏకాంత జతలు లేకుండా ఉంటుంది. ఒక 2s కక్ష్యం మరియు మూడు 2p కక్ష్యాలు కలిసి (సంకరీకరణం చెంది) నాలుగు సమానమైన sp³ సంకర కక్ష్యాలను ఏర్పరుస్తాయి. ఈ sp³ కక్ష్యాలు 109.5° బంధ కోణంతో సక్రమ చతుర్ముఖి మూలల వైపు దిశగా ఉంటాయి, మీథేన్‌కు చతుర్ముఖీయ జ్యామితిని ఇస్తాయి.',
    eliminationTechnique:
      'sp hybridization gives 2 hybrid orbitals (linear geometry, like BeCl₂) — too few for 4 bonds — eliminate (a). sp² gives 3 hybrid orbitals (trigonal planar, like BF₃) — still not enough for 4 bonds — eliminate (b). sp³d gives 5 hybrid orbitals (trigonal bipyramidal) — more than needed — eliminate (c). Only sp³ provides exactly 4 equivalent hybrid orbitals needed for CH₄.',
    eliminationTechniqueTe:
      'sp సంకరీకరణం 2 సంకర కక్ష్యాలను ఇస్తుంది (సరళ రేఖ జ్యామితి) — 4 బంధాలకు సరిపోదు — (a) తొలగించండి. sp² 3 సంకర కక్ష్యాలను ఇస్తుంది (త్రిభుజ సమతల) — ఇంకా సరిపోదు — (b) తొలగించండి. sp³d 5 సంకర కక్ష్యాలను ఇస్తుంది — అవసరం కంటే ఎక్కువ — (c) తొలగించండి. sp³ మాత్రమే CH₄ కు అవసరమైన సరిగ్గా 4 సమాన సంకర కక్ష్యాలను అందిస్తుంది.',
    difficulty: 'easy',
  },

  {
    id: 'chem-cb-008',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Which of the following molecules has zero dipole moment?',
    textTe: 'కింది అణువులలో సున్నా ద్విధ్రువ భ్రామకం కలిగినది ఏది?',
    options: [
      { id: 'a', text: 'CO₂', textTe: 'CO₂' },
      { id: 'b', text: 'H₂O', textTe: 'H₂O' },
      { id: 'c', text: 'NH₃', textTe: 'NH₃' },
      { id: 'd', text: 'HCl', textTe: 'HCl' },
    ],
    correctOptionId: 'a',
    explanation:
      'CO₂ is a linear molecule (O=C=O) with two equal C=O bond dipoles pointing in opposite directions. These dipoles cancel each other exactly, resulting in a net dipole moment of zero. In contrast, H₂O (bent), NH₃ (pyramidal), and HCl (polar diatomic) all have non-zero dipole moments because their bond dipoles do not cancel.',
    explanationTe:
      'CO₂ రెండు సమాన C=O బంధ ద్విధ్రువాలు వ్యతిరేక దిశలలో ఉన్న సరళ రేఖ అణువు (O=C=O). ఈ ద్విధ్రువాలు ఒకదానినొకటి ఖచ్చితంగా రద్దు చేసుకుంటాయి, ఫలితంగా నికర ద్విధ్రువ భ్రామకం సున్నా అవుతుంది. దీనికి భిన్నంగా, H₂O (వంగిన), NH₃ (పిరమిడల్), మరియు HCl (ధ్రువ ద్విపరమాణు) అన్నీ శూన్యేతర ద్విధ్రువ భ్రామకాలను కలిగి ఉంటాయి, ఎందుకంటే వాటి బంధ ద్విధ్రువాలు రద్దు కావు.',
    eliminationTechnique:
      'H₂O has a bent shape (104.5°) where the two O–H dipoles do not cancel — non-zero dipole moment — eliminate (b). NH₃ has a trigonal pyramidal shape with a net dipole pointing upward — eliminate (c). HCl is a polar diatomic molecule with an inherent dipole — eliminate (d). Only CO₂ has a symmetric linear structure where dipoles cancel.',
    eliminationTechniqueTe:
      'H₂O వంగిన ఆకారం (104.5°) కలిగి ఉండి O–H ద్విధ్రువాలు రద్దు కావు — (b) తొలగించండి. NH₃ త్రిభుజ పిరమిడల్ ఆకారంతో నికర ద్విధ్రువం పైకి చూపుతుంది — (c) తొలగించండి. HCl ధ్రువ ద్విపరమాణు అణువు — (d) తొలగించండి. CO₂ మాత్రమే ద్విధ్రువాలు రద్దయ్యే సౌష్ఠవ సరళ రేఖ నిర్మాణం కలిగి ఉంటుంది.',
    difficulty: 'easy',
  },

  // ─────────────────────────────────────────────
  //  MEDIUM (10 questions): chem-cb-009 to chem-cb-018
  // ─────────────────────────────────────────────

  {
    id: 'chem-cb-009',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'According to VSEPR theory, the shape of SF₄ molecule is:',
    textTe: 'VSEPR సిద్ధాంతం ప్రకారం SF₄ అణువు ఆకారం ఏమిటి?',
    options: [
      { id: 'a', text: 'Tetrahedral', textTe: 'చతుర్ముఖీయ' },
      { id: 'b', text: 'See-saw (distorted tetrahedral)', textTe: 'సీ-సా (వికృత చతుర్ముఖీయ)' },
      { id: 'c', text: 'Square planar', textTe: 'చతురస్ర సమతల' },
      { id: 'd', text: 'Trigonal bipyramidal', textTe: 'త్రిభుజ ద్విపిరమిడల్' },
    ],
    correctOptionId: 'b',
    explanation:
      'In SF₄, sulfur has 4 bond pairs and 1 lone pair, giving 5 electron domains. The electron geometry is trigonal bipyramidal (sp³d hybridization). The lone pair occupies an equatorial position to minimize repulsion, resulting in a see-saw (or distorted tetrahedral) molecular shape with bond angles of approximately 87° and 120°.',
    explanationTe:
      'SF₄ లో, సల్ఫర్ 4 బంధ జతలు మరియు 1 ఏకాంత జత కలిగి ఉంటుంది, ఇది 5 ఎలక్ట్రాన్ డొమైన్లను ఇస్తుంది. ఎలక్ట్రాన్ జ్యామితి త్రిభుజ ద్విపిరమిడల్ (sp³d సంకరీకరణం). వికర్షణను తగ్గించడానికి ఏకాంత జత భూమధ్యరేఖ స్థానంలో ఉంటుంది, ఫలితంగా సుమారు 87° మరియు 120° బంధ కోణాలతో సీ-సా (లేదా వికృత చతుర్ముఖీయ) అణు ఆకారం ఏర్పడుతుంది.',
    eliminationTechnique:
      'Tetrahedral shape requires 4 bond pairs and 0 lone pairs (like CH₄) — SF₄ has a lone pair, so eliminate (a). Square planar needs 4 bond pairs and 2 lone pairs (like XeF₄) — SF₄ has only 1 lone pair, so eliminate (c). Trigonal bipyramidal is the electron geometry for 5 domains with 0 lone pairs (like PCl₅) — SF₄ has 1 lone pair, so the molecular shape differs — eliminate (d).',
    eliminationTechniqueTe:
      'చతుర్ముఖీయ ఆకారానికి 4 బంధ జతలు మరియు 0 ఏకాంత జతలు అవసరం (CH₄ వలె) — SF₄ కు ఏకాంత జత ఉంది — (a) తొలగించండి. చతురస్ర సమతలానికి 4 బంధ జతలు మరియు 2 ఏకాంత జతలు అవసరం (XeF₄ వలె) — (c) తొలగించండి. త్రిభుజ ద్విపిరమిడల్ 0 ఏకాంత జతలతో 5 డొమైన్లకు ఎలక్ట్రాన్ జ్యామితి (PCl₅ వలె) — SF₄ కు 1 ఏకాంత జత ఉన్నందున ఆకారం భిన్నంగా ఉంటుంది — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-010',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Which of the following molecules has sp² hybridization on its central atom?',
    textTe: 'కింది అణువులలో దేని కేంద్ర పరమాణువు sp² సంకరీకరణం కలిగి ఉంటుంది?',
    options: [
      { id: 'a', text: 'CH₄', textTe: 'CH₄' },
      { id: 'b', text: 'NH₃', textTe: 'NH₃' },
      { id: 'c', text: 'BF₃', textTe: 'BF₃' },
      { id: 'd', text: 'H₂O', textTe: 'H₂O' },
    ],
    correctOptionId: 'c',
    explanation:
      'In BF₃, boron has 3 bond pairs and 0 lone pairs. One 2s and two 2p orbitals hybridize to form three sp² hybrid orbitals arranged in a trigonal planar geometry with bond angles of 120°. CH₄ is sp³ (4 bond pairs), NH₃ is sp³ (3 bond pairs + 1 lone pair), and H₂O is sp³ (2 bond pairs + 2 lone pairs).',
    explanationTe:
      'BF₃ లో, బోరాన్ 3 బంధ జతలు మరియు 0 ఏకాంత జతలు కలిగి ఉంటుంది. ఒక 2s మరియు రెండు 2p కక్ష్యాలు సంకరీకరణం చెంది 120° బంధ కోణాలతో త్రిభుజ సమతల జ్యామితిలో అమర్చబడిన మూడు sp² సంకర కక్ష్యాలను ఏర్పరుస్తాయి. CH₄ sp³ (4 బంధ జతలు), NH₃ sp³ (3 బంధ జతలు + 1 ఏకాంత జత), H₂O sp³ (2 బంధ జతలు + 2 ఏకాంత జతలు).',
    eliminationTechnique:
      'CH₄ has 4 electron domains around C — that is sp³, not sp² — eliminate (a). NH₃ has 4 electron domains (3 BP + 1 LP) around N — that is sp³ — eliminate (b). H₂O has 4 electron domains (2 BP + 2 LP) around O — that is sp³ — eliminate (d). Only BF₃ with 3 electron domains (3 BP, 0 LP) is sp².',
    eliminationTechniqueTe:
      'CH₄ C చుట్టూ 4 ఎలక్ట్రాన్ డొమైన్లు కలిగి ఉంది — ఇది sp³ — (a) తొలగించండి. NH₃ N చుట్టూ 4 ఎలక్ట్రాన్ డొమైన్లు (3 BP + 1 LP) కలిగి ఉంది — ఇది sp³ — (b) తొలగించండి. H₂O O చుట్టూ 4 ఎలక్ట్రాన్ డొమైన్లు (2 BP + 2 LP) కలిగి ఉంది — ఇది sp³ — (d) తొలగించండి. 3 ఎలక్ట్రాన్ డొమైన్లు (3 BP, 0 LP) కలిగిన BF₃ మాత్రమే sp².',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-011',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The hybridization of each carbon atom in ethyne (C₂H₂) is:',
    textTe: 'ఇథైన్ (C₂H₂) లోని ప్రతి కార్బన్ పరమాణువు సంకరీకరణం ఏది?',
    options: [
      { id: 'a', text: 'sp', textTe: 'sp' },
      { id: 'b', text: 'sp²', textTe: 'sp²' },
      { id: 'c', text: 'sp³', textTe: 'sp³' },
      { id: 'd', text: 'sp³d', textTe: 'sp³d' },
    ],
    correctOptionId: 'a',
    explanation:
      'In ethyne (HC≡CH), each carbon atom forms a triple bond with the other carbon and a single bond with hydrogen — that is 2 sigma bonds per carbon. One 2s orbital and one 2p orbital hybridize to give two sp hybrid orbitals (linear arrangement, 180° bond angle). The remaining two unhybridized 2p orbitals on each carbon form two pi bonds, making the C≡C triple bond (1 sigma + 2 pi).',
    explanationTe:
      'ఇథైన్ (HC≡CH) లో, ప్రతి కార్బన్ పరమాణువు మరొక కార్బన్‌తో త్రిబంధం మరియు హైడ్రోజన్‌తో ఏక బంధం ఏర్పరుస్తుంది — ప్రతి కార్బన్‌కు 2 sigma బంధాలు. ఒక 2s కక్ష్యం మరియు ఒక 2p కక్ష్యం సంకరీకరణం చెంది రెండు sp సంకర కక్ష్యాలను ఇస్తాయి (సరళ రేఖ అమరిక, 180° బంధ కోణం). ప్రతి కార్బన్‌పై మిగిలిన రెండు అసంకరీకృత 2p కక్ష్యాలు రెండు pi బంధాలను ఏర్పరుస్తాయి, C≡C త్రిబంధం (1 sigma + 2 pi) అవుతుంది.',
    eliminationTechnique:
      'sp² hybridization requires 3 sigma bonds or 2 sigma bonds + 1 lone pair — each C in C₂H₂ has only 2 sigma bonds — eliminate (b). sp³ requires 4 sigma bonds or equivalent — far too many for a triple-bonded carbon — eliminate (c). sp³d requires 5 electron domains using d orbitals — carbon does not use d orbitals — eliminate (d). sp with 2 hybrid orbitals perfectly matches the two sigma bonds on each carbon.',
    eliminationTechniqueTe:
      'sp² సంకరీకరణానికి 3 sigma బంధాలు అవసరం — C₂H₂ లో ప్రతి C కు 2 sigma బంధాలు మాత్రమే ఉన్నాయి — (b) తొలగించండి. sp³ కు 4 sigma బంధాలు అవసరం — త్రిబంధ కార్బన్‌కు చాలా ఎక్కువ — (c) తొలగించండి. sp³d కు d కక్ష్యాలు ఉపయోగించి 5 ఎలక్ట్రాన్ డొమైన్లు అవసరం — కార్బన్ d కక్ష్యాలను ఉపయోగించదు — (d) తొలగించండి. 2 సంకర కక్ష్యాలతో sp ప్రతి కార్బన్‌పై రెండు sigma బంధాలకు ఖచ్చితంగా సరిపోతుంది.',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-012',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'According to molecular orbital theory, the bond order of N₂ is:',
    textTe: 'మాలిక్యులర్ ఆర్బిటల్ సిద్ధాంతం ప్రకారం N₂ యొక్క బంధ క్రమం ఎంత?',
    options: [
      { id: 'a', text: '1', textTe: '1' },
      { id: 'b', text: '1.5', textTe: '1.5' },
      { id: 'c', text: '2', textTe: '2' },
      { id: 'd', text: '3', textTe: '3' },
    ],
    correctOptionId: 'd',
    explanation:
      'N₂ has 14 electrons. Its MO configuration is: (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (π2p)⁴ (σ2p)². Note that for N₂, the π2p orbitals are lower in energy than σ2p due to s-p mixing. Bonding electrons = 10, antibonding electrons = 4. Bond order = (10 − 4) / 2 = 3. This triple bond makes N₂ extremely stable with a high bond dissociation energy of 945 kJ/mol.',
    explanationTe:
      'N₂ 14 ఎలక్ట్రాన్లను కలిగి ఉంటుంది. దాని MO విన్యాసం: (σ1s)² (σ*1s)² (σ2s)² (σ*2s)² (π2p)⁴ (σ2p)². N₂ కు, s-p మిశ్రమం కారణంగా π2p కక్ష్యాలు σ2p కంటే తక్కువ శక్తిలో ఉంటాయి. బంధ ఎలక్ట్రాన్లు = 10, ప్రతిబంధ ఎలక్ట్రాన్లు = 4. బంధ క్రమం = (10 − 4) / 2 = 3. ఈ త్రిబంధం N₂ ను 945 kJ/mol అధిక బంధ విఘటన శక్తితో అత్యంత స్థిరంగా చేస్తుంది.',
    eliminationTechnique:
      'Bond order 1 would mean N₂ has a single bond — far too weak for the extremely stable N₂ molecule — eliminate (a). Bond order 1.5 is seen in species like NO — N₂ is more stable than NO — eliminate (b). Bond order 2 corresponds to O₂ — N₂ has a higher dissociation energy than O₂, suggesting a stronger bond — eliminate (c). Bond order 3 correctly reflects the triple bond in N≡N.',
    eliminationTechniqueTe:
      'బంధ క్రమం 1 అంటే N₂ ఏక బంధం కలిగి ఉంటుంది — అత్యంత స్థిరమైన N₂ అణువుకు చాలా బలహీనం — (a) తొలగించండి. బంధ క్రమం 1.5 NO వంటి జాతులలో కనిపిస్తుంది — (b) తొలగించండి. బంధ క్రమం 2 O₂ కు అనుగుణం — N₂ O₂ కంటే అధిక విఘటన శక్తి కలిగి ఉంది — (c) తొలగించండి. బంధ క్రమం 3 N≡N లోని త్రిబంధాన్ని సరిగ్గా ప్రతిబింబిస్తుంది.',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-013',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The correct order of bond dissociation energy is:',
    textTe: 'బంధ విఘటన శక్తి యొక్క సరైన క్రమం ఏది?',
    options: [
      { id: 'a', text: 'F–F > O=O > N≡N', textTe: 'F–F > O=O > N≡N' },
      { id: 'b', text: 'N≡N > O=O > F–F', textTe: 'N≡N > O=O > F–F' },
      { id: 'c', text: 'O=O > N≡N > F–F', textTe: 'O=O > N≡N > F–F' },
      { id: 'd', text: 'F–F > N≡N > O=O', textTe: 'F–F > N≡N > O=O' },
    ],
    correctOptionId: 'b',
    explanation:
      'Bond dissociation energies: N≡N = 945 kJ/mol (triple bond, bond order 3), O=O = 498 kJ/mol (double bond, bond order 2), F–F = 159 kJ/mol (single bond, bond order 1; also weakened by lone pair-lone pair repulsion on adjacent small F atoms). Therefore the correct order is N≡N > O=O > F–F.',
    explanationTe:
      'బంధ విఘటన శక్తులు: N≡N = 945 kJ/mol (త్రిబంధం, బంధ క్రమం 3), O=O = 498 kJ/mol (ద్విబంధం, బంధ క్రమం 2), F–F = 159 kJ/mol (ఏక బంధం, బంధ క్రమం 1; సమీపంలోని చిన్న F పరమాణువులపై ఏకాంత జత-ఏకాంత జత వికర్షణ వల్ల కూడా బలహీనమవుతుంది). కాబట్టి సరైన క్రమం N≡N > O=O > F–F.',
    eliminationTechnique:
      'F–F is a single bond with unusually low dissociation energy (159 kJ/mol) due to lone pair repulsion on small fluorine atoms — any option placing F–F as the strongest can be eliminated — eliminate (a) and (d). Between N≡N and O=O, a triple bond is always stronger than a double bond — eliminate (c) which places O=O above N≡N.',
    eliminationTechniqueTe:
      'F–F చిన్న ఫ్లోరిన్ పరమాణువులపై ఏకాంత జత వికర్షణ కారణంగా అసాధారణంగా తక్కువ విఘటన శక్తి (159 kJ/mol) కలిగిన ఏక బంధం — F–F ను బలమైనదిగా ఉంచే ఏదైనా ఎంపికను తొలగించవచ్చు — (a) మరియు (d) తొలగించండి. N≡N మరియు O=O మధ్య, త్రిబంధం ఎల్లప్పుడూ ద్విబంధం కంటే బలంగా ఉంటుంది — O=O ను N≡N కంటే పైన ఉంచే (c) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-014',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'According to Fajan\'s rules, the covalent character of an ionic compound increases with:',
    textTe: 'Fajan\'s నియమాల ప్రకారం, అయానిక సమ్మేళనం యొక్క సహసంయోజక లక్షణం దేనితో పెరుగుతుంది?',
    options: [
      { id: 'a', text: 'Large cation and small anion', textTe: 'పెద్ద కాటయాన్ మరియు చిన్న ఆనయాన్' },
      { id: 'b', text: 'Large cation and large anion', textTe: 'పెద్ద కాటయాన్ మరియు పెద్ద ఆనయాన్' },
      { id: 'c', text: 'Small cation and large anion', textTe: 'చిన్న కాటయాన్ మరియు పెద్ద ఆనయాన్' },
      { id: 'd', text: 'Small cation and small anion', textTe: 'చిన్న కాటయాన్ మరియు చిన్న ఆనయాన్' },
    ],
    correctOptionId: 'c',
    explanation:
      'According to Fajan\'s rules, covalent character increases when: (1) the cation is small with high charge (greater polarizing power), and (2) the anion is large with high charge (greater polarizability). A small, highly charged cation distorts the electron cloud of a large, easily polarizable anion, leading to increased sharing of electrons and greater covalent character.',
    explanationTe:
      'Fajan\'s నియమాల ప్రకారం, సహసంయోజక లక్షణం పెరుగుతుంది: (1) కాటయాన్ అధిక ఆవేశంతో చిన్నదిగా ఉన్నప్పుడు (ఎక్కువ ధ్రువణ శక్తి), మరియు (2) ఆనయాన్ అధిక ఆవేశంతో పెద్దదిగా ఉన్నప్పుడు (ఎక్కువ ధ్రువణత). చిన్న, అధిక ఆవేశం కలిగిన కాటయాన్ పెద్ద, సులభంగా ధ్రువణమయ్యే ఆనయాన్ యొక్క ఎలక్ట్రాన్ మేఘాన్ని వికృతం చేస్తుంది, ఇది ఎలక్ట్రాన్ల భాగస్వామ్యం పెరగడానికి మరియు అధిక సహసంయోజక లక్షణానికి దారితీస్తుంది.',
    eliminationTechnique:
      'A large cation has low polarizing power (low charge density) — it cannot significantly distort the anion\'s electron cloud — eliminate (a) and (b). A small anion has low polarizability — its electron cloud is tightly held and not easily distorted — eliminate (d). Only a small cation (high polarizing power) with a large anion (high polarizability) maximizes covalent character.',
    eliminationTechniqueTe:
      'పెద్ద కాటయాన్ తక్కువ ధ్రువణ శక్తి కలిగి ఉంటుంది — ఆనయాన్ ఎలక్ట్రాన్ మేఘాన్ని గణనీయంగా వికృతం చేయలేదు — (a) మరియు (b) తొలగించండి. చిన్న ఆనయాన్ తక్కువ ధ్రువణత కలిగి ఉంటుంది — దాని ఎలక్ట్రాన్ మేఘం గట్టిగా పట్టుకోబడుతుంది — (d) తొలగించండి. చిన్న కాటయాన్ (అధిక ధ్రువణ శక్తి) మరియు పెద్ద ఆనయాన్ (అధిక ధ్రువణత) మాత్రమే సహసంయోజక లక్షణాన్ని గరిష్టంగా చేస్తాయి.',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-015',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Among the following ionic compounds, which one has the highest lattice energy?',
    textTe: 'కింది అయానిక సమ్మేళనాలలో అత్యధిక లాటిస్ శక్తి ఏది కలిగి ఉంటుంది?',
    options: [
      { id: 'a', text: 'LiF', textTe: 'LiF' },
      { id: 'b', text: 'NaCl', textTe: 'NaCl' },
      { id: 'c', text: 'KBr', textTe: 'KBr' },
      { id: 'd', text: 'CsI', textTe: 'CsI' },
    ],
    correctOptionId: 'a',
    explanation:
      'Lattice energy is directly proportional to the product of ionic charges and inversely proportional to the sum of ionic radii (U ∝ q⁺q⁻/r⁺+r⁻). All four compounds have +1 and −1 ions, so the charges are equal. LiF has the smallest cation (Li⁺) and smallest anion (F⁻), giving the shortest interionic distance and therefore the highest lattice energy (1037 kJ/mol). As ion sizes increase (Na⁺, K⁺, Cs⁺ and Cl⁻, Br⁻, I⁻), lattice energy decreases.',
    explanationTe:
      'లాటిస్ శక్తి అయానిక ఆవేశాల గుణకారానికి అనులోమానుపాతంలో మరియు అయానిక వ్యాసార్ధాల మొత్తానికి విలోమానుపాతంలో ఉంటుంది (U ∝ q⁺q⁻/r⁺+r⁻). నాలుగు సమ్మేళనాలు +1 మరియు −1 అయాన్లను కలిగి ఉన్నాయి, కాబట్టి ఆవేశాలు సమానం. LiF అతి చిన్న కాటయాన్ (Li⁺) మరియు అతి చిన్న ఆనయాన్ (F⁻) కలిగి ఉండి, తక్కువ అంతర-అయానిక దూరం మరియు అందువల్ల అత్యధిక లాటిస్ శక్తి (1037 kJ/mol) కలిగి ఉంటుంది.',
    eliminationTechnique:
      'Lattice energy decreases as ionic radii increase. Cs⁺ is the largest alkali metal cation and I⁻ is the largest halide anion — CsI will have the lowest lattice energy — eliminate (d). K⁺ and Br⁻ are also large — eliminate (c). Na⁺ and Cl⁻ are intermediate — eliminate (b). Li⁺ and F⁻ are the smallest, giving LiF the highest lattice energy.',
    eliminationTechniqueTe:
      'అయానిక వ్యాసార్ధాలు పెరిగేకొద్దీ లాటిస్ శక్తి తగ్గుతుంది. Cs⁺ అతి పెద్ద క్షార లోహ కాటయాన్ మరియు I⁻ అతి పెద్ద హాలైడ్ ఆనయాన్ — CsI అతి తక్కువ లాటిస్ శక్తి కలిగి ఉంటుంది — (d) తొలగించండి. K⁺ మరియు Br⁻ కూడా పెద్దవి — (c) తొలగించండి. Na⁺ మరియు Cl⁻ మధ్యస్థం — (b) తొలగించండి. Li⁺ మరియు F⁻ అతి చిన్నవి, LiF కు అత్యధిక లాటిస్ శక్తి ఇస్తాయి.',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-016',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The hybridization of the central atom in PCl₅ is:',
    textTe: 'PCl₅ లోని కేంద్ర పరమాణువు సంకరీకరణం ఏది?',
    options: [
      { id: 'a', text: 'sp³', textTe: 'sp³' },
      { id: 'b', text: 'sp³d', textTe: 'sp³d' },
      { id: 'c', text: 'sp³d²', textTe: 'sp³d²' },
      { id: 'd', text: 'dsp³', textTe: 'dsp³' },
    ],
    correctOptionId: 'b',
    explanation:
      'In PCl₅, phosphorus has 5 bond pairs and 0 lone pairs. To accommodate 5 electron domains, one 3s orbital, three 3p orbitals, and one 3d orbital hybridize to form five sp³d hybrid orbitals. These are arranged in a trigonal bipyramidal geometry with three equatorial bonds at 120° and two axial bonds at 90° to the equatorial plane.',
    explanationTe:
      'PCl₅ లో, భాస్వరం 5 బంధ జతలు మరియు 0 ఏకాంత జతలు కలిగి ఉంటుంది. 5 ఎలక్ట్రాన్ డొమైన్లను అనుగుణ్యపరచడానికి, ఒక 3s కక్ష్యం, మూడు 3p కక్ష్యాలు మరియు ఒక 3d కక్ష్యం సంకరీకరణం చెంది ఐదు sp³d సంకర కక్ష్యాలను ఏర్పరుస్తాయి. ఇవి 120° వద్ద మూడు భూమధ్యరేఖ బంధాలు మరియు భూమధ్యరేఖ తలానికి 90° వద్ద రెండు అక్షీయ బంధాలతో త్రిభుజ ద్విపిరమిడల్ జ్యామితిలో అమర్చబడతాయి.',
    eliminationTechnique:
      'sp³ gives only 4 hybrid orbitals — not enough for 5 bonds in PCl₅ — eliminate (a). sp³d² gives 6 hybrid orbitals — more than needed for 5 bonds — eliminate (c). dsp³ is sometimes used for inner orbital hybridization in transition metal complexes, not for main group elements like P — eliminate (d). sp³d with 5 hybrid orbitals matches the 5 bond pairs in PCl₅.',
    eliminationTechniqueTe:
      'sp³ 4 సంకర కక్ష్యాలను మాత్రమే ఇస్తుంది — PCl₅ లో 5 బంధాలకు సరిపోదు — (a) తొలగించండి. sp³d² 6 సంకర కక్ష్యాలను ఇస్తుంది — 5 బంధాలకు అవసరం కంటే ఎక్కువ — (c) తొలగించండి. dsp³ పరివర్తన లోహ సంక్లిష్టాలలో అంతర్గత కక్ష్య సంకరీకరణం కోసం ఉపయోగిస్తారు, P వంటి ప్రధాన గుంపు మూలకాలకు కాదు — (d) తొలగించండి. 5 సంకర కక్ష్యాలతో sp³d PCl₅ లోని 5 బంధ జతలకు సరిపోతుంది.',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-017',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The hybridization of sulfur in SF₆ is:',
    textTe: 'SF₆ లోని సల్ఫర్ యొక్క సంకరీకరణం ఏది?',
    options: [
      { id: 'a', text: 'sp³', textTe: 'sp³' },
      { id: 'b', text: 'sp³d', textTe: 'sp³d' },
      { id: 'c', text: 'sp³d²', textTe: 'sp³d²' },
      { id: 'd', text: 'sp³d³', textTe: 'sp³d³' },
    ],
    correctOptionId: 'c',
    explanation:
      'In SF₆, sulfur has 6 bond pairs and 0 lone pairs, giving 6 electron domains. One 3s, three 3p, and two 3d orbitals hybridize to form six sp³d² hybrid orbitals arranged in a regular octahedral geometry. All F–S–F bond angles are 90°. SF₆ is an extremely stable and inert gas due to its symmetric octahedral structure.',
    explanationTe:
      'SF₆ లో, సల్ఫర్ 6 బంధ జతలు మరియు 0 ఏకాంత జతలు కలిగి ఉంటుంది, ఇది 6 ఎలక్ట్రాన్ డొమైన్లను ఇస్తుంది. ఒక 3s, మూడు 3p, మరియు రెండు 3d కక్ష్యాలు సంకరీకరణం చెంది ఆరు sp³d² సంకర కక్ష్యాలను ఏర్పరుస్తాయి, ఇవి సక్రమ అష్టముఖీయ జ్యామితిలో అమర్చబడతాయి. అన్ని F–S–F బంధ కోణాలు 90°. SF₆ దాని సౌష్ఠవ అష్టముఖీయ నిర్మాణం కారణంగా అత్యంత స్థిరమైన మరియు జడ వాయువు.',
    eliminationTechnique:
      'sp³ provides only 4 hybrid orbitals — far too few for 6 S–F bonds — eliminate (a). sp³d provides 5 hybrid orbitals — one short for 6 bonds — eliminate (b). sp³d³ would require 7 hybrid orbitals using 3 d orbitals — more than needed and not a standard hybridization type for this case — eliminate (d). sp³d² with 6 hybrid orbitals matches the 6 bond pairs in SF₆ perfectly.',
    eliminationTechniqueTe:
      'sp³ 4 సంకర కక్ష్యాలను మాత్రమే అందిస్తుంది — 6 S–F బంధాలకు చాలా తక్కువ — (a) తొలగించండి. sp³d 5 సంకర కక్ష్యాలను అందిస్తుంది — 6 బంధాలకు ఒకటి తక్కువ — (b) తొలగించండి. sp³d³ కు 3 d కక్ష్యాలు ఉపయోగించి 7 సంకర కక్ష్యాలు అవసరం — అవసరం కంటే ఎక్కువ — (d) తొలగించండి. 6 సంకర కక్ష్యాలతో sp³d² SF₆ లోని 6 బంధ జతలకు ఖచ్చితంగా సరిపోతుంది.',
    difficulty: 'medium',
  },

  {
    id: 'chem-cb-018',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Which pair of molecules both have non-zero dipole moments?',
    textTe: 'ఏ జత అణువులు రెండూ శూన్యేతర ద్విధ్రువ భ్రామకాలను కలిగి ఉంటాయి?',
    options: [
      { id: 'a', text: 'CO₂ and BF₃', textTe: 'CO₂ మరియు BF₃' },
      { id: 'b', text: 'CCl₄ and CH₄', textTe: 'CCl₄ మరియు CH₄' },
      { id: 'c', text: 'BeCl₂ and CO₂', textTe: 'BeCl₂ మరియు CO₂' },
      { id: 'd', text: 'H₂O and NH₃', textTe: 'H₂O మరియు NH₃' },
    ],
    correctOptionId: 'd',
    explanation:
      'H₂O has a bent shape (bond angle ~104.5°) with a net dipole moment of 1.85 D, and NH₃ has a trigonal pyramidal shape (bond angle ~107°) with a net dipole moment of 1.47 D. Both molecules have asymmetric charge distributions due to lone pairs, so their bond dipoles do not cancel. In contrast, CO₂ (linear), BF₃ (trigonal planar), CCl₄ (tetrahedral), CH₄ (tetrahedral), and BeCl₂ (linear) all have symmetric geometries where bond dipoles cancel, giving zero net dipole moment.',
    explanationTe:
      'H₂O వంగిన ఆకారం (బంధ కోణం ~104.5°) తో 1.85 D నికర ద్విధ్రువ భ్రామకం కలిగి ఉంటుంది, మరియు NH₃ త్రిభుజ పిరమిడల్ ఆకారం (బంధ కోణం ~107°) తో 1.47 D నికర ద్విధ్రువ భ్రామకం కలిగి ఉంటుంది. రెండు అణువులు ఏకాంత జతల కారణంగా అసౌష్ఠవ ఆవేశ పంపిణీలను కలిగి ఉంటాయి. దీనికి భిన్నంగా, CO₂ (సరళ రేఖ), BF₃ (త్రిభుజ సమతల), CCl₄ (చతుర్ముఖీయ), CH₄ (చతుర్ముఖీయ), BeCl₂ (సరళ రేఖ) అన్నీ సౌష్ఠవ జ్యామితులతో బంధ ద్విధ్రువాలు రద్దయ్యి సున్నా నికర ద్విధ్రువ భ్రామకాన్ని ఇస్తాయి.',
    eliminationTechnique:
      'CO₂ is linear and symmetric — zero dipole moment. BF₃ is trigonal planar and symmetric — zero dipole moment. So the pair CO₂ + BF₃ both have zero dipole — eliminate (a). CCl₄ is tetrahedral and symmetric — zero dipole. CH₄ is also tetrahedral — zero dipole. Both zero — eliminate (b). BeCl₂ is linear — zero dipole. CO₂ is also zero — eliminate (c). Only H₂O (bent) and NH₃ (pyramidal) both have non-zero dipole moments.',
    eliminationTechniqueTe:
      'CO₂ సరళ రేఖ మరియు సౌష్ఠవం — సున్నా ద్విధ్రువం. BF₃ త్రిభుజ సమతల మరియు సౌష్ఠవం — సున్నా ద్విధ్రువం. కాబట్టి CO₂ + BF₃ రెండూ సున్నా — (a) తొలగించండి. CCl₄ చతుర్ముఖీయ మరియు సౌష్ఠవం — సున్నా. CH₄ కూడా చతుర్ముఖీయ — సున్నా — (b) తొలగించండి. BeCl₂ సరళ రేఖ — సున్నా. CO₂ కూడా సున్నా — (c) తొలగించండి. H₂O (వంగిన) మరియు NH₃ (పిరమిడల్) మాత్రమే శూన్యేతర ద్విధ్రువ భ్రామకాలను కలిగి ఉంటాయి.',
    difficulty: 'medium',
  },

  // ─────────────────────────────────────────────
  //  HARD (7 questions): chem-cb-019 to chem-cb-025
  // ─────────────────────────────────────────────

  {
    id: 'chem-cb-019',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The correct order of bond order among O₂⁺, O₂, O₂⁻, and O₂²⁻ is:',
    textTe: 'O₂⁺, O₂, O₂⁻ మరియు O₂²⁻ మధ్య బంధ క్రమం యొక్క సరైన క్రమం ఏది?',
    options: [
      { id: 'a', text: 'O₂⁺ > O₂ > O₂⁻ > O₂²⁻', textTe: 'O₂⁺ > O₂ > O₂⁻ > O₂²⁻' },
      { id: 'b', text: 'O₂ > O₂⁺ > O₂⁻ > O₂²⁻', textTe: 'O₂ > O₂⁺ > O₂⁻ > O₂²⁻' },
      { id: 'c', text: 'O₂²⁻ > O₂⁻ > O₂ > O₂⁺', textTe: 'O₂²⁻ > O₂⁻ > O₂ > O₂⁺' },
      { id: 'd', text: 'O₂⁻ > O₂ > O₂⁺ > O₂²⁻', textTe: 'O₂⁻ > O₂ > O₂⁺ > O₂²⁻' },
    ],
    correctOptionId: 'a',
    explanation:
      'Using MOT, bond order = (bonding e⁻ − antibonding e⁻) / 2. O₂⁺ has 15 electrons: (10 − 5)/2 = 2.5. O₂ has 16 electrons: (10 − 6)/2 = 2.0. O₂⁻ has 17 electrons: (10 − 7)/2 = 1.5. O₂²⁻ has 18 electrons: (10 − 8)/2 = 1.0. Each additional electron enters an antibonding π* orbital, reducing the bond order. Therefore: O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0).',
    explanationTe:
      'MOT ఉపయోగించి, బంధ క్రమం = (బంధ e⁻ − ప్రతిబంధ e⁻) / 2. O₂⁺ 15 ఎలక్ట్రాన్లు: (10 − 5)/2 = 2.5. O₂ 16 ఎలక్ట్రాన్లు: (10 − 6)/2 = 2.0. O₂⁻ 17 ఎలక్ట్రాన్లు: (10 − 7)/2 = 1.5. O₂²⁻ 18 ఎలక్ట్రాన్లు: (10 − 8)/2 = 1.0. ప్రతి అదనపు ఎలక్ట్రాన్ ప్రతిబంధ π* కక్ష్యంలోకి ప్రవేశిస్తుంది, బంధ క్రమాన్ని తగ్గిస్తుంది. కాబట్టి: O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0).',
    eliminationTechnique:
      'O₂⁺ has one fewer antibonding electron than O₂, so its bond order must be higher than O₂ — any option placing O₂ above O₂⁺ is wrong — eliminate (b). Adding electrons to antibonding orbitals decreases bond order, so the reverse order (c) is impossible — eliminate (c). O₂⁻ has more antibonding electrons than O₂, so O₂⁻ cannot have a higher bond order — eliminate (d).',
    eliminationTechniqueTe:
      'O₂⁺ O₂ కంటే ఒక తక్కువ ప్రతిబంధ ఎలక్ట్రాన్ కలిగి ఉంది, కాబట్టి దాని బంధ క్రమం O₂ కంటే ఎక్కువగా ఉండాలి — O₂ ను O₂⁺ కంటే పైన ఉంచే ఎంపిక తప్పు — (b) తొలగించండి. ప్రతిబంధ కక్ష్యాలకు ఎలక్ట్రాన్లు జోడించడం బంధ క్రమాన్ని తగ్గిస్తుంది, కాబట్టి విలోమ క్రమం అసాధ్యం — (c) తొలగించండి. O₂⁻ O₂ కంటే ఎక్కువ ప్రతిబంధ ఎలక్ట్రాన్లు కలిగి ఉంది — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'chem-cb-020',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'What is the shape of XeF₄ according to VSEPR theory?',
    textTe: 'VSEPR సిద్ధాంతం ప్రకారం XeF₄ ఆకారం ఏమిటి?',
    options: [
      { id: 'a', text: 'Tetrahedral', textTe: 'చతుర్ముఖీయ' },
      { id: 'b', text: 'See-saw', textTe: 'సీ-సా' },
      { id: 'c', text: 'Trigonal bipyramidal', textTe: 'త్రిభుజ ద్విపిరమిడల్' },
      { id: 'd', text: 'Square planar', textTe: 'చతురస్ర సమతల' },
    ],
    correctOptionId: 'd',
    explanation:
      'In XeF₄, xenon has 4 bond pairs and 2 lone pairs, giving 6 electron domains. The electron geometry is octahedral (sp³d² hybridization). The 2 lone pairs occupy trans (opposite) positions to minimize lone pair-lone pair repulsion, and the 4 F atoms are in the same plane, giving a square planar molecular shape with 90° F–Xe–F bond angles.',
    explanationTe:
      'XeF₄ లో, జీనాన్ 4 బంధ జతలు మరియు 2 ఏకాంత జతలు కలిగి ఉంటుంది, ఇది 6 ఎలక్ట్రాన్ డొమైన్లను ఇస్తుంది. ఎలక్ట్రాన్ జ్యామితి అష్టముఖీయ (sp³d² సంకరీకరణం). ఏకాంత జత-ఏకాంత జత వికర్షణను తగ్గించడానికి 2 ఏకాంత జతలు ట్రాన్స్ (వ్యతిరేక) స్థానాలలో ఉంటాయి, మరియు 4 F పరమాణువులు ఒకే తలంలో ఉంటాయి, ఇది 90° F–Xe–F బంధ కోణాలతో చతురస్ర సమతల అణు ఆకారాన్ని ఇస్తుంది.',
    eliminationTechnique:
      'Tetrahedral shape has 4 bond pairs and 0 lone pairs — XeF₄ has 2 lone pairs, so it cannot be tetrahedral — eliminate (a). See-saw shape has 4 bond pairs and 1 lone pair (like SF₄) — XeF₄ has 2 lone pairs — eliminate (b). Trigonal bipyramidal has 5 bond pairs and 0 lone pairs — XeF₄ has only 4 bond pairs — eliminate (c). Square planar correctly describes 4 bond pairs + 2 lone pairs in octahedral electron geometry.',
    eliminationTechniqueTe:
      'చతుర్ముఖీయ ఆకారం 4 బంధ జతలు మరియు 0 ఏకాంత జతలు కలిగి ఉంటుంది — XeF₄ కు 2 ఏకాంత జతలు ఉన్నాయి — (a) తొలగించండి. సీ-సా ఆకారం 4 బంధ జతలు మరియు 1 ఏకాంత జత కలిగి ఉంటుంది (SF₄ వలె) — XeF₄ కు 2 ఏకాంత జతలు ఉన్నాయి — (b) తొలగించండి. త్రిభుజ ద్విపిరమిడల్ 5 బంధ జతలు కలిగి ఉంటుంది — XeF₄ కు 4 బంధ జతలు మాత్రమే — (c) తొలగించండి. చతురస్ర సమతలం అష్టముఖీయ ఎలక్ట్రాన్ జ్యామితిలో 4 బంధ జతలు + 2 ఏకాంత జతలను సరిగ్గా వివరిస్తుంది.',
    difficulty: 'hard',
  },

  {
    id: 'chem-cb-021',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The hybridization and molecular shape of XeF₂ are respectively:',
    textTe: 'XeF₂ యొక్క సంకరీకరణం మరియు అణు ఆకారం వరుసగా ఏమిటి?',
    options: [
      { id: 'a', text: 'sp³ and bent', textTe: 'sp³ మరియు వంగిన' },
      { id: 'b', text: 'sp³d and linear', textTe: 'sp³d మరియు సరళ రేఖ' },
      { id: 'c', text: 'sp³d² and square planar', textTe: 'sp³d² మరియు చతురస్ర సమతల' },
      { id: 'd', text: 'sp³d and T-shaped', textTe: 'sp³d మరియు T-ఆకారం' },
    ],
    correctOptionId: 'b',
    explanation:
      'In XeF₂, xenon has 2 bond pairs and 3 lone pairs, giving 5 electron domains. The electron geometry is trigonal bipyramidal with sp³d hybridization. The 3 lone pairs occupy the three equatorial positions to minimize repulsions, and the 2 F atoms occupy the two axial positions, resulting in a linear molecular shape with an F–Xe–F bond angle of 180°.',
    explanationTe:
      'XeF₂ లో, జీనాన్ 2 బంధ జతలు మరియు 3 ఏకాంత జతలు కలిగి ఉంటుంది, ఇది 5 ఎలక్ట్రాన్ డొమైన్లను ఇస్తుంది. ఎలక్ట్రాన్ జ్యామితి sp³d సంకరీకరణంతో త్రిభుజ ద్విపిరమిడల్. వికర్షణలను తగ్గించడానికి 3 ఏకాంత జతలు మూడు భూమధ్యరేఖ స్థానాలను ఆక్రమిస్తాయి, 2 F పరమాణువులు రెండు అక్షీయ స్థానాలను ఆక్రమిస్తాయి, ఫలితంగా F–Xe–F బంధ కోణం 180° తో సరళ రేఖ అణు ఆకారం ఏర్పడుతుంది.',
    eliminationTechnique:
      'sp³ with a bent shape requires 2 BP + 2 LP (4 domains total) — but Xe in XeF₂ has 3 lone pairs, not 2, giving 5 total domains — eliminate (a). sp³d² with a square planar shape requires 4 BP + 2 LP (6 domains) — XeF₂ has only 2 BP — eliminate (c). sp³d with a T-shape requires 3 BP + 2 LP — but XeF₂ has 2 BP + 3 LP — eliminate (d). sp³d with linear shape (2 BP + 3 LP in equatorial) is correct.',
    eliminationTechniqueTe:
      'sp³ వంగిన ఆకారానికి 2 BP + 2 LP (4 డొమైన్లు) అవసరం — కానీ XeF₂ లో Xe కు 3 ఏకాంత జతలు ఉన్నాయి, 5 మొత్తం డొమైన్లు — (a) తొలగించండి. sp³d² చతురస్ర సమతలానికి 4 BP + 2 LP (6 డొమైన్లు) అవసరం — XeF₂ కు 2 BP మాత్రమే — (c) తొలగించండి. sp³d T-ఆకారానికి 3 BP + 2 LP అవసరం — కానీ XeF₂ కు 2 BP + 3 LP ఉన్నాయి — (d) తొలగించండి. sp³d సరళ రేఖ ఆకారం (2 BP + 3 LP భూమధ్యరేఖలో) సరైనది.',
    difficulty: 'hard',
  },

  {
    id: 'chem-cb-022',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Among LiCl, NaCl, KCl, and CsCl, the compound with the highest covalent character is:',
    textTe: 'LiCl, NaCl, KCl మరియు CsCl లో, అత్యధిక సహసంయోజక లక్షణం కలిగిన సమ్మేళనం ఏది?',
    options: [
      { id: 'a', text: 'NaCl', textTe: 'NaCl' },
      { id: 'b', text: 'KCl', textTe: 'KCl' },
      { id: 'c', text: 'LiCl', textTe: 'LiCl' },
      { id: 'd', text: 'CsCl', textTe: 'CsCl' },
    ],
    correctOptionId: 'c',
    explanation:
      'According to Fajan\'s rules, the covalent character of an ionic compound increases with the polarizing power of the cation. Among Li⁺, Na⁺, K⁺, and Cs⁺, Li⁺ is the smallest cation with the highest charge density (charge/size ratio). This gives Li⁺ the greatest polarizing power, enabling it to distort the Cl⁻ electron cloud the most, introducing the maximum covalent character in LiCl. The order is: LiCl > NaCl > KCl > CsCl.',
    explanationTe:
      'Fajan\'s నియమాల ప్రకారం, కాటయాన్ యొక్క ధ్రువణ శక్తితో అయానిక సమ్మేళనం యొక్క సహసంయోజక లక్షణం పెరుగుతుంది. Li⁺, Na⁺, K⁺ మరియు Cs⁺ లో, Li⁺ అత్యధిక ఆవేశ సాంద్రత (ఆవేశం/పరిమాణం నిష్పత్తి) కలిగిన అతి చిన్న కాటయాన్. ఇది Li⁺ కు అత్యధిక ధ్రువణ శక్తిని ఇస్తుంది, Cl⁻ ఎలక్ట్రాన్ మేఘాన్ని అత్యధికంగా వికృతం చేయగలుగుతుంది, LiCl లో గరిష్ట సహసంయోజక లక్షణాన్ని ఇస్తుంది. క్రమం: LiCl > NaCl > KCl > CsCl.',
    eliminationTechnique:
      'CsCl has the largest cation (Cs⁺) with the lowest charge density — weakest polarizing power — most ionic character — eliminate (d). KCl has K⁺ which is larger than Na⁺ and Li⁺ — lower polarizing power than both — eliminate (b). NaCl has Na⁺ which is larger than Li⁺ — lower polarizing power — eliminate (a). LiCl with the smallest cation Li⁺ has the highest polarizing power and thus the most covalent character.',
    eliminationTechniqueTe:
      'CsCl అతి పెద్ద కాటయాన్ (Cs⁺) కలిగి ఉంది — తక్కువ ఆవేశ సాంద్రత — అత్యంత అయానిక లక్షణం — (d) తొలగించండి. KCl లో K⁺ Na⁺ మరియు Li⁺ కంటే పెద్దది — తక్కువ ధ్రువణ శక్తి — (b) తొలగించండి. NaCl లో Na⁺ Li⁺ కంటే పెద్దది — తక్కువ ధ్రువణ శక్తి — (a) తొలగించండి. అతి చిన్న కాటయాన్ Li⁺ తో LiCl అత్యధిక ధ్రువణ శక్తి మరియు అత్యధిక సహసంయోజక లక్షణం కలిగి ఉంటుంది.',
    difficulty: 'hard',
  },

  {
    id: 'chem-cb-023',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The B–F bond length in BF₃ is shorter than expected for a single B–F bond. This is primarily because of:',
    textTe: 'BF₃ లో B–F బంధ పొడవు ఏక B–F బంధానికి ఊహించిన దాని కంటే తక్కువగా ఉంటుంది. ఇది ప్రధానంగా దేని కారణంగా?',
    options: [
      { id: 'a', text: 'ppi-ppi back bonding from filled 2p orbitals of F to the empty 2p orbital of B', textTe: 'F యొక్క నిండిన 2p కక్ష్యాల నుండి B యొక్క ఖాళీ 2p కక్ష్యకు ppi-ppi back bonding' },
      { id: 'b', text: 'High electronegativity of fluorine causing strong sigma bond', textTe: 'ఫ్లోరిన్ యొక్క అధిక ఎలక్ట్రోనెగటివిటీ బలమైన sigma బంధాన్ని కలిగిస్తుంది' },
      { id: 'c', text: 'Small size of both B and F atoms', textTe: 'B మరియు F రెండు పరమాణువుల చిన్న పరిమాణం' },
      { id: 'd', text: 'Formation of a coordinate bond from B to F', textTe: 'B నుండి F కు సమన్వయ బంధం ఏర్పడటం' },
    ],
    correctOptionId: 'a',
    explanation:
      'In BF₃, boron is sp² hybridized and has an empty unhybridized 2p orbital perpendicular to the molecular plane. Each fluorine atom has filled 2p orbitals with lone pairs. The filled 2p orbital of F overlaps laterally with the empty 2p orbital of B, forming a partial pi bond (ppi-ppi back bonding). This gives the B–F bond partial double bond character, making it shorter (130 pm) than a typical B–F single bond (143 pm).',
    explanationTe:
      'BF₃ లో, బోరాన్ sp² సంకరీకృతం మరియు అణు తలానికి లంబంగా ఖాళీ అసంకరీకృత 2p కక్ష్యం కలిగి ఉంటుంది. ప్రతి ఫ్లోరిన్ పరమాణువు ఏకాంత జతలతో నిండిన 2p కక్ష్యాలను కలిగి ఉంటుంది. F యొక్క నిండిన 2p కక్ష్యం B యొక్క ఖాళీ 2p కక్ష్యంతో పార్శ్వంగా అతిపాతం చెందుతుంది, పాక్షిక pi బంధాన్ని (ppi-ppi back bonding) ఏర్పరుస్తుంది. ఇది B–F బంధానికి పాక్షిక ద్విబంధ లక్షణాన్ని ఇస్తుంది, సాధారణ B–F ఏక బంధం (143 pm) కంటే తక్కువగా (130 pm) చేస్తుంది.',
    eliminationTechnique:
      'While fluorine is highly electronegative, electronegativity alone makes the sigma bond polar but does not explain the bond shortening beyond single bond length — eliminate (b). The small size of B and F contributes somewhat but does not explain why the observed bond is shorter than the calculated single bond length for these atoms — eliminate (c). Boron has an empty orbital, not a lone pair, so it cannot donate electrons to form a coordinate bond to F — eliminate (d). Back bonding (ppi-ppi) correctly explains the additional pi character and bond shortening.',
    eliminationTechniqueTe:
      'ఫ్లోరిన్ అధిక ఎలక్ట్రోనెగటివిటీ కలిగి ఉన్నప్పటికీ, ఎలక్ట్రోనెగటివిటీ మాత్రమే sigma బంధాన్ని ధ్రువంగా చేస్తుంది కానీ ఏక బంధ పొడవు కంటే తక్కువగా ఉండటాన్ని వివరించదు — (b) తొలగించండి. B మరియు F చిన్న పరిమాణం కొంత సహాయపడుతుంది కానీ లెక్కించిన ఏక బంధ పొడవు కంటే తక్కువగా ఉండటాన్ని వివరించదు — (c) తొలగించండి. బోరాన్ ఖాళీ కక్ష్యం కలిగి ఉంది, ఏకాంత జత కాదు, కాబట్టి F కు సమన్వయ బంధాన్ని ఏర్పరచలేదు — (d) తొలగించండి. Back bonding (ppi-ppi) అదనపు pi లక్షణం మరియు బంధ తక్కువ పొడవును సరిగ్గా వివరిస్తుంది.',
    difficulty: 'hard',
  },

  {
    id: 'chem-cb-024',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'The correct order of C–O bond length in CO, CO₂, and CO₃²⁻ is:',
    textTe: 'CO, CO₂ మరియు CO₃²⁻ లో C–O బంధ పొడవు యొక్క సరైన క్రమం ఏది?',
    options: [
      { id: 'a', text: 'CO₃²⁻ < CO₂ < CO', textTe: 'CO₃²⁻ < CO₂ < CO' },
      { id: 'b', text: 'CO < CO₂ < CO₃²⁻', textTe: 'CO < CO₂ < CO₃²⁻' },
      { id: 'c', text: 'CO₂ < CO < CO₃²⁻', textTe: 'CO₂ < CO < CO₃²⁻' },
      { id: 'd', text: 'CO < CO₃²⁻ < CO₂', textTe: 'CO < CO₃²⁻ < CO₂' },
    ],
    correctOptionId: 'b',
    explanation:
      'Bond length is inversely proportional to bond order. CO has a triple bond (bond order 3, length ~113 pm). CO₂ has double bonds C=O (bond order 2, length ~116 pm). CO₃²⁻ has resonance structures with a bond order of 4/3 ≈ 1.33 (length ~129 pm). Since bond order CO (3) > CO₂ (2) > CO₃²⁻ (1.33), the bond length order is CO (shortest) < CO₂ < CO₃²⁻ (longest).',
    explanationTe:
      'బంధ పొడవు బంధ క్రమానికి విలోమానుపాతంలో ఉంటుంది. CO త్రిబంధం కలిగి ఉంటుంది (బంధ క్రమం 3, పొడవు ~113 pm). CO₂ C=O ద్విబంధాలు కలిగి ఉంటుంది (బంధ క్రమం 2, పొడవు ~116 pm). CO₃²⁻ అనునాద నిర్మాణాలతో బంధ క్రమం 4/3 ≈ 1.33 (పొడవు ~129 pm) కలిగి ఉంటుంది. బంధ క్రమం CO (3) > CO₂ (2) > CO₃²⁻ (1.33) కాబట్టి, బంధ పొడవు క్రమం CO (అతి తక్కువ) < CO₂ < CO₃²⁻ (అతి ఎక్కువ).',
    eliminationTechnique:
      'CO has a triple bond (the highest bond order among the three), so it must have the shortest bond length — any option not placing CO as shortest is wrong — eliminate (a) and (c). CO₃²⁻ has the lowest bond order (1.33 due to resonance), so it must have the longest bond — eliminate (d) which places CO₂ as longest. Only (b) correctly orders CO (shortest) < CO₂ < CO₃²⁻ (longest).',
    eliminationTechniqueTe:
      'CO త్రిబంధం కలిగి ఉంది (మూడింటిలో అత్యధిక బంధ క్రమం), కాబట్టి ఇది అతి తక్కువ బంధ పొడవు కలిగి ఉండాలి — CO ను అతి తక్కువగా ఉంచని ఏదైనా ఎంపిక తప్పు — (a) మరియు (c) తొలగించండి. CO₃²⁻ అతి తక్కువ బంధ క్రమం (అనునాదం వల్ల 1.33) కలిగి ఉంది, కాబట్టి అతి పొడవైన బంధం ఉండాలి — CO₂ ను పొడవుగా ఉంచే (d) తొలగించండి. (b) మాత్రమే CO (అతి తక్కువ) < CO₂ < CO₃²⁻ (అతి ఎక్కువ) ను సరిగ్గా క్రమపరుస్తుంది.',
    difficulty: 'hard',
  },

  {
    id: 'chem-cb-025',
    chapterId: 'chemistry-chemical-bonding',
    subjectId: 'chemistry',
    text: 'Which of the following species is paramagnetic according to molecular orbital theory?',
    textTe: 'మాలిక్యులర్ ఆర్బిటల్ సిద్ధాంతం ప్రకారం కింది జాతులలో పారామాగ్నెటిక్ ఏది?',
    options: [
      { id: 'a', text: 'N₂', textTe: 'N₂' },
      { id: 'b', text: 'C₂', textTe: 'C₂' },
      { id: 'c', text: 'F₂', textTe: 'F₂' },
      { id: 'd', text: 'O₂', textTe: 'O₂' },
    ],
    correctOptionId: 'd',
    explanation:
      'According to MOT, O₂ has 16 electrons with the configuration ending in (π*2p)². By Hund\'s rule, the two electrons in the degenerate π*2p orbitals occupy them singly with parallel spins, giving O₂ two unpaired electrons. This makes O₂ paramagnetic — it is attracted to a magnetic field. N₂ (all electrons paired), C₂ (all electrons paired in π2p⁴), and F₂ (all electrons paired) are all diamagnetic.',
    explanationTe:
      'MOT ప్రకారం, O₂ 16 ఎలక్ట్రాన్లతో (π*2p)² తో ముగిసే విన్యాసం కలిగి ఉంటుంది. Hund\'s నియమం ప్రకారం, సమశక్తి π*2p కక్ష్యాలలోని రెండు ఎలక్ట్రాన్లు సమాంతర స్పిన్‌లతో ఒంటరిగా ఉంటాయి, O₂ కు రెండు జతచేయని ఎలక్ట్రాన్లను ఇస్తాయి. ఇది O₂ ను పారామాగ్నెటిక్‌గా చేస్తుంది — ఇది అయస్కాంత క్షేత్రానికి ఆకర్షించబడుతుంది. N₂ (అన్ని ఎలక్ట్రాన్లు జతచేయబడినవి), C₂ (π2p⁴ లో అన్ని ఎలక్ట్రాన్లు జతచేయబడినవి), మరియు F₂ (అన్ని ఎలక్ట్రాన్లు జతచేయబడినవి) అన్నీ డయామాగ్నెటిక్.',
    eliminationTechnique:
      'N₂ has 14 electrons — all are paired in its MO configuration — diamagnetic — eliminate (a). C₂ has 12 electrons with configuration ending in (π2p)⁴ — all paired — diamagnetic — eliminate (b). F₂ has 18 electrons — the π*2p orbitals are completely filled (4 electrons) — all paired — diamagnetic — eliminate (c). Only O₂ with 2 unpaired electrons in π*2p is paramagnetic. This was a key success of MOT over Lewis structures.',
    eliminationTechniqueTe:
      'N₂ 14 ఎలక్ట్రాన్లు కలిగి ఉంది — దాని MO విన్యాసంలో అన్నీ జతచేయబడినవి — డయామాగ్నెటిక్ — (a) తొలగించండి. C₂ 12 ఎలక్ట్రాన్లతో (π2p)⁴ తో ముగిసే విన్యాసం — అన్నీ జతచేయబడినవి — డయామాగ్నెటిక్ — (b) తొలగించండి. F₂ 18 ఎలక్ట్రాన్లు — π*2p కక్ష్యాలు పూర్తిగా నిండినవి (4 ఎలక్ట్రాన్లు) — అన్నీ జతచేయబడినవి — డయామాగ్నెటిక్ — (c) తొలగించండి. π*2p లో 2 జతచేయని ఎలక్ట్రాన్లతో O₂ మాత్రమే పారామాగ్నెటిక్. ఇది Lewis నిర్మాణాలపై MOT యొక్క ముఖ్యమైన విజయం.',
    difficulty: 'hard',
  },
];
