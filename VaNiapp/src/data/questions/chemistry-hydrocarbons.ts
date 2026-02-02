import { Question } from '../../types';

export const chemistryHydrocarbonsQuestions: Question[] = [
  // ===== EASY (8 questions) =====
  {
    id: 'chem-hc-001',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The general formula of alkanes is:',
    textTe: 'ఆల్కేన్ల సాధారణ సూత్రం ఏమిటి?',
    options: [
      { id: 'a', text: 'CₙH₂ₙ₊₂', textTe: 'CₙH₂ₙ₊₂' },
      { id: 'b', text: 'CₙH₂ₙ', textTe: 'CₙH₂ₙ' },
      { id: 'c', text: 'CₙH₂ₙ₋₂', textTe: 'CₙH₂ₙ₋₂' },
      { id: 'd', text: 'CₙHₙ', textTe: 'CₙHₙ' },
    ],
    correctOptionId: 'a',
    explanation:
      'Alkanes are saturated hydrocarbons with only single bonds between carbon atoms. Each carbon is sp³ hybridized and bonded to the maximum number of hydrogen atoms possible, giving the general formula CₙH₂ₙ₊₂. CₙH₂ₙ is for alkenes (one double bond), and CₙH₂ₙ₋₂ is for alkynes (one triple bond).',
    explanationTe:
      'ఆల్కేన్లు సంతృప్త హైడ్రోకార్బన్లు, వాటిలో కార్బన్ పరమాణువుల మధ్య ఏక బంధాలు మాత్రమే ఉంటాయి. ప్రతి కార్బన్ sp³ సంకరీకరణం కలిగి ఉంటుంది మరియు గరిష్ట సంఖ్యలో హైడ్రోజన్ పరమాణువులతో బంధించబడి ఉంటుంది, ఇది CₙH₂ₙ₊₂ సాధారణ సూత్రాన్ని ఇస్తుంది. CₙH₂ₙ ఆల్కీన్లకు (ఒక ద్విబంధం), CₙH₂ₙ₋₂ ఆల్కైన్లకు (ఒక త్రిబంధం) వర్తిస్తుంది.',
    eliminationTechnique:
      'CₙH₂ₙ is specifically for cycloalkanes or alkenes — eliminate (b). CₙH₂ₙ₋₂ is for alkynes — eliminate (c). CₙHₙ does not correspond to any standard hydrocarbon family — eliminate (d).',
    eliminationTechniqueTe:
      'CₙH₂ₙ అనేది సైక్లోఆల్కేన్లు లేదా ఆల్కీన్లకు మాత్రమే — (b) తొలగించండి. CₙH₂ₙ₋₂ అనేది ఆల్కైన్లకు — (c) తొలగించండి. CₙHₙ ఏ ప్రామాణిక హైడ్రోకార్బన్ కుటుంబానికి చెందదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },
  {
    id: 'chem-hc-002',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'What is the IUPAC name of CH₃–CH₂–CH₃?',
    textTe: 'CH₃–CH₂–CH₃ యొక్క IUPAC నామం ఏమిటి?',
    options: [
      { id: 'a', text: 'Ethane', textTe: 'Ethane' },
      { id: 'b', text: 'Propane', textTe: 'Propane' },
      { id: 'c', text: 'Butane', textTe: 'Butane' },
      { id: 'd', text: 'Methane', textTe: 'Methane' },
    ],
    correctOptionId: 'b',
    explanation:
      'The given structure CH₃–CH₂–CH₃ has three carbon atoms in a continuous chain. According to IUPAC nomenclature, a three-carbon alkane is called propane (prop- = 3 carbons, -ane = alkane). Methane has 1 carbon, ethane has 2, and butane has 4.',
    explanationTe:
      'ఇచ్చిన నిర్మాణం CH₃–CH₂–CH₃ లో మూడు కార్బన్ పరమాణువులు నిరంతర గొలుసులో ఉన్నాయి. IUPAC నామకరణం ప్రకారం, మూడు కార్బన్ల ఆల్కేన్‌ను propane అంటారు (prop- = 3 కార్బన్లు, -ane = ఆల్కేన్). Methane లో 1 కార్బన్, ethane లో 2, butane లో 4 కార్బన్లు ఉంటాయి.',
    eliminationTechnique:
      'Count the carbons: there are clearly 3 carbon atoms. Methane has 1C — eliminate (d). Ethane has 2C — eliminate (a). Butane has 4C — eliminate (c).',
    eliminationTechniqueTe:
      'కార్బన్లను లెక్కించండి: స్పష్టంగా 3 కార్బన్ పరమాణువులు ఉన్నాయి. Methane లో 1C — (d) తొలగించండి. Ethane లో 2C — (a) తొలగించండి. Butane లో 4C — (c) తొలగించండి.',
    difficulty: 'easy',
  },
  {
    id: 'chem-hc-003',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The molecular formula of benzene is:',
    textTe: 'బెంజీన్ యొక్క అణు సూత్రం ఏమిటి?',
    options: [
      { id: 'a', text: 'C₆H₁₂', textTe: 'C₆H₁₂' },
      { id: 'b', text: 'C₆H₈', textTe: 'C₆H₈' },
      { id: 'c', text: 'C₆H₆', textTe: 'C₆H₆' },
      { id: 'd', text: 'C₆H₁₀', textTe: 'C₆H₁₀' },
    ],
    correctOptionId: 'c',
    explanation:
      'Benzene is an aromatic hydrocarbon with the molecular formula C₆H₆. It has a planar hexagonal ring of six carbon atoms, each bonded to one hydrogen atom. The high degree of unsaturation (4 degrees) accounts for its low hydrogen count. C₆H₁₂ is cyclohexane, C₆H₁₀ is cyclohexene, and C₆H₈ corresponds to cyclohexadiene.',
    explanationTe:
      'బెంజీన్ ఒక ఆరోమాటిక్ హైడ్రోకార్బన్, దీని అణు సూత్రం C₆H₆. ఇది ఆరు కార్బన్ పరమాణువుల సమతల షట్కోణ వలయాన్ని కలిగి ఉంటుంది, ప్రతి కార్బన్ ఒక హైడ్రోజన్ పరమాణువుతో బంధించబడి ఉంటుంది. అధిక అసంతృప్త స్థాయి (4 డిగ్రీలు) తక్కువ హైడ్రోజన్ సంఖ్యకు కారణం. C₆H₁₂ అనేది cyclohexane, C₆H₁₀ అనేది cyclohexene, C₆H₈ అనేది cyclohexadiene.',
    eliminationTechnique:
      'C₆H₁₂ follows CₙH₂ₙ — that is cyclohexane, a saturated ring, not aromatic — eliminate (a). Benzene is highly unsaturated, so it must have fewer H atoms than C₆H₁₀ or C₆H₈. The classic formula C₆H₆ with 4 degrees of unsaturation is the answer.',
    eliminationTechniqueTe:
      'C₆H₁₂ అనేది CₙH₂ₙ సూత్రాన్ని అనుసరిస్తుంది — ఇది cyclohexane, సంతృప్త వలయం, ఆరోమాటిక్ కాదు — (a) తొలగించండి. బెంజీన్ అత్యంత అసంతృప్తం కాబట్టి C₆H₁₀ లేదా C₆H₈ కంటే తక్కువ H పరమాణువులు ఉండాలి. 4 డిగ్రీల అసంతృప్తతో C₆H₆ సరైన సమాధానం.',
    difficulty: 'easy',
  },
  {
    id: 'chem-hc-004',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The hybridization of each carbon atom in ethylene (C₂H₄) is:',
    textTe: 'ఇథిలీన్ (C₂H₄) లో ప్రతి కార్బన్ పరమాణువు యొక్క సంకరీకరణం ఏమిటి?',
    options: [
      { id: 'a', text: 'sp', textTe: 'sp' },
      { id: 'b', text: 'sp³', textTe: 'sp³' },
      { id: 'c', text: 'sp³d', textTe: 'sp³d' },
      { id: 'd', text: 'sp²', textTe: 'sp²' },
    ],
    correctOptionId: 'd',
    explanation:
      'In ethylene (C₂H₄), each carbon forms one C=C double bond and two C–H single bonds. A double bond consists of one sigma and one pi bond. The three sigma bonds around each carbon require three hybrid orbitals, so the hybridization is sp². The remaining unhybridized p orbital forms the pi bond. sp hybridization has 2 hybrid orbitals (as in alkynes), and sp³ has 4 (as in alkanes).',
    explanationTe:
      'ఇథిలీన్ (C₂H₄) లో ప్రతి కార్బన్ ఒక C=C ద్విబంధం మరియు రెండు C–H ఏక బంధాలను ఏర్పరుస్తుంది. ద్విబంధంలో ఒక సిగ్మా మరియు ఒక పై బంధం ఉంటాయి. ప్రతి కార్బన్ చుట్టూ మూడు సిగ్మా బంధాలకు మూడు సంకర కక్ష్యలు అవసరం, కాబట్టి సంకరీకరణం sp². మిగిలిన సంకరీకరణం చెందని p కక్ష్య పై బంధాన్ని ఏర్పరుస్తుంది. sp సంకరీకరణంలో 2 సంకర కక్ష్యలు (ఆల్కైన్లలో వలె), sp³ లో 4 (ఆల్కేన్లలో వలె) ఉంటాయి.',
    eliminationTechnique:
      'sp³d requires d-orbitals and is seen in expanded octets (like PCl₅) — eliminate (c). sp³ means four single bonds with no pi bonds, but ethylene has a double bond — eliminate (b). sp means two hybrid orbitals (triple bond context like acetylene) — eliminate (a).',
    eliminationTechniqueTe:
      'sp³d కు d-కక్ష్యలు అవసరం, ఇది విస్తరించిన అష్టకంలో (PCl₅ వంటివి) కనిపిస్తుంది — (c) తొలగించండి. sp³ అంటే నాలుగు ఏక బంధాలు, పై బంధం లేదు, కానీ ఇథిలీన్‌లో ద్విబంధం ఉంది — (b) తొలగించండి. sp అంటే రెండు సంకర కక్ష్యలు (acetylene వంటి త్రిబంధ సందర్భం) — (a) తొలగించండి.',
    difficulty: 'easy',
  },
  {
    id: 'chem-hc-005',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Which of the following is a saturated hydrocarbon?',
    textTe: 'కింది వాటిలో సంతృప్త హైడ్రోకార్బన్ ఏది?',
    options: [
      { id: 'a', text: 'Ethane (C₂H₆)', textTe: 'Ethane (C₂H₆)' },
      { id: 'b', text: 'Ethene (C₂H₄)', textTe: 'Ethene (C₂H₄)' },
      { id: 'c', text: 'Ethyne (C₂H₂)', textTe: 'Ethyne (C₂H₂)' },
      { id: 'd', text: 'Benzene (C₆H₆)', textTe: 'Benzene (C₆H₆)' },
    ],
    correctOptionId: 'a',
    explanation:
      'A saturated hydrocarbon contains only carbon–carbon single bonds (sigma bonds) with no double or triple bonds. Ethane (C₂H₆) is the only option with exclusively single bonds. Ethene has a C=C double bond, ethyne has a C≡C triple bond, and benzene has a delocalized pi system — all are unsaturated.',
    explanationTe:
      'సంతృప్త హైడ్రోకార్బన్ కేవలం కార్బన్–కార్బన్ ఏక బంధాలను (సిగ్మా బంధాలు) మాత్రమే కలిగి ఉంటుంది, ద్విబంధాలు లేదా త్రిబంధాలు ఉండవు. Ethane (C₂H₆) మాత్రమే ఏక బంధాలను కలిగి ఉన్న ఎంపిక. Ethene లో C=C ద్విబంధం, ethyne లో C≡C త్రిబంధం ఉంటుంది, మరియు benzene లో డీలోకలైజ్డ్ పై వ్యవస్థ ఉంటుంది — ఇవన్నీ అసంతృప్తమైనవి.',
    eliminationTechnique:
      'Ethene has a double bond (C=C) — it is unsaturated, eliminate (b). Ethyne has a triple bond (C≡C) — unsaturated, eliminate (c). Benzene has alternating double bonds / aromatic ring — unsaturated, eliminate (d). Only ethane has all single bonds.',
    eliminationTechniqueTe:
      'Ethene లో ద్విబంధం (C=C) ఉంది — ఇది అసంతృప్తం, (b) తొలగించండి. Ethyne లో త్రిబంధం (C≡C) ఉంది — అసంతృప్తం, (c) తొలగించండి. Benzene లో ఆరోమాటిక్ వలయం ఉంది — అసంతృప్తం, (d) తొలగించండి. Ethane మాత్రమే అన్ని ఏక బంధాలను కలిగి ఉంది.',
    difficulty: 'easy',
  },
  {
    id: 'chem-hc-006',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Complete combustion of methane (CH₄) produces:',
    textTe: 'మీథేన్ (CH₄) యొక్క సంపూర్ణ దహనం ద్వారా ఏర్పడే ఉత్పన్నాలు:',
    options: [
      { id: 'a', text: 'CO and H₂O', textTe: 'CO మరియు H₂O' },
      { id: 'b', text: 'CO₂ and H₂O', textTe: 'CO₂ మరియు H₂O' },
      { id: 'c', text: 'CO₂ and H₂', textTe: 'CO₂ మరియు H₂' },
      { id: 'd', text: 'C and H₂O', textTe: 'C మరియు H₂O' },
    ],
    correctOptionId: 'b',
    explanation:
      'Complete combustion means burning in excess oxygen. Methane undergoes complete combustion as: CH₄ + 2O₂ → CO₂ + 2H₂O. Carbon is fully oxidized to CO₂ (not CO) and hydrogen is oxidized to H₂O. Incomplete combustion would produce CO or soot (C), and H₂ is not a combustion product.',
    explanationTe:
      'సంపూర్ణ దహనం అంటే అధిక ఆక్సిజన్‌లో మండటం. మీథేన్ సంపూర్ణ దహన చర్య: CH₄ + 2O₂ → CO₂ + 2H₂O. కార్బన్ పూర్తిగా CO₂ గా ఆక్సీకరణం చెందుతుంది (CO కాదు) మరియు హైడ్రోజన్ H₂O గా ఆక్సీకరణం చెందుతుంది. అసంపూర్ణ దహనం CO లేదా మసి (C) ను ఉత్పత్తి చేస్తుంది, మరియు H₂ దహన ఉత్పన్నం కాదు.',
    eliminationTechnique:
      'CO is the product of incomplete combustion, not complete — eliminate (a). H₂ cannot be a product when burning in O₂ (hydrogen gets oxidized to water) — eliminate (c). Free carbon (C) is produced only in very limited oxygen (soot formation) — eliminate (d).',
    eliminationTechniqueTe:
      'CO అసంపూర్ణ దహన ఉత్పన్నం, సంపూర్ణ దహనం కాదు — (a) తొలగించండి. O₂ లో మండేటప్పుడు H₂ ఉత్పన్నం కాదు (హైడ్రోజన్ నీరుగా ఆక్సీకరణం చెందుతుంది) — (c) తొలగించండి. స్వేచ్ఛా కార్బన్ (C) చాలా తక్కువ ఆక్సిజన్‌లో మాత్రమే ఏర్పడుతుంది — (d) తొలగించండి.',
    difficulty: 'easy',
  },
  {
    id: 'chem-hc-007',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The total number of sigma (σ) bonds in ethane (C₂H₆) is:',
    textTe: 'Ethane (C₂H₆) లో మొత్తం సిగ్మా (σ) బంధాల సంఖ్య ఎంత?',
    options: [
      { id: 'a', text: '5', textTe: '5' },
      { id: 'b', text: '6', textTe: '6' },
      { id: 'c', text: '7', textTe: '7' },
      { id: 'd', text: '8', textTe: '8' },
    ],
    correctOptionId: 'c',
    explanation:
      'In ethane (C₂H₆), there is 1 C–C sigma bond and each carbon is bonded to 3 hydrogen atoms, giving 6 C–H sigma bonds. Total sigma bonds = 1 (C–C) + 6 (C–H) = 7. Every single bond is a sigma bond. There are no pi bonds in ethane since it has no double or triple bonds.',
    explanationTe:
      'Ethane (C₂H₆) లో 1 C–C సిగ్మా బంధం ఉంటుంది మరియు ప్రతి కార్బన్ 3 హైడ్రోజన్ పరమాణువులతో బంధించబడి ఉంటుంది, ఇది 6 C–H సిగ్మా బంధాలను ఇస్తుంది. మొత్తం సిగ్మా బంధాలు = 1 (C–C) + 6 (C–H) = 7. ప్రతి ఏక బంధం ఒక సిగ్మా బంధం. ద్విబంధాలు లేదా త్రిబంధాలు లేనందున ethane లో పై బంధాలు ఉండవు.',
    eliminationTechnique:
      'Count systematically: 1 C–C bond + (3+3) C–H bonds = 7. If you forgot the C–C bond you would get 6 — that is wrong, eliminate (b). 5 misses both the C–C and one C–H — eliminate (a). 8 would require an extra bond that does not exist — eliminate (d).',
    eliminationTechniqueTe:
      'క్రమపద్ధతిలో లెక్కించండి: 1 C–C బంధం + (3+3) C–H బంధాలు = 7. C–C బంధాన్ని మరచిపోతే 6 వస్తుంది — అది తప్పు, (b) తొలగించండి. 5 అంటే C–C మరియు ఒక C–H రెండూ మిస్ అయ్యాయి — (a) తొలగించండి. 8 కి అదనపు బంధం అవసరం, అది ఉనికిలో లేదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },
  {
    id: 'chem-hc-008',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The most stable conformation of ethane is:',
    textTe: 'Ethane యొక్క అత్యంత స్థిరమైన రూపాంతరం ఏది?',
    options: [
      { id: 'a', text: 'Eclipsed', textTe: 'Eclipsed (గ్రహణ రూపాంతరం)' },
      { id: 'b', text: 'Gauche', textTe: 'Gauche (గాష్ రూపాంతరం)' },
      { id: 'c', text: 'Skew boat', textTe: 'Skew boat (వక్ర నౌకా రూపాంతరం)' },
      { id: 'd', text: 'Staggered', textTe: 'Staggered (విచ్ఛిన్న రూపాంతరం)' },
    ],
    correctOptionId: 'd',
    explanation:
      'The staggered conformation of ethane is the most stable because the hydrogen atoms on adjacent carbons are at maximum distance (dihedral angle 60°), minimizing torsional strain. The eclipsed conformation is the least stable with a dihedral angle of 0° and maximum torsional strain. The energy difference between staggered and eclipsed ethane is about 12.5 kJ/mol. Gauche and skew boat are terms relevant to butane and cyclohexane, not ethane.',
    explanationTe:
      'Ethane యొక్క staggered రూపాంతరం అత్యంత స్థిరమైనది, ఎందుకంటే పక్క కార్బన్ల మీద హైడ్రోజన్ పరమాణువులు గరిష్ట దూరంలో (ద్విహేద్ర కోణం 60°) ఉంటాయి, ఇది టోర్షనల్ స్ట్రెయిన్‌ను తగ్గిస్తుంది. Eclipsed రూపాంతరం 0° ద్విహేద్ర కోణంతో అత్యంత అస్థిరమైనది. Staggered మరియు eclipsed ethane మధ్య శక్తి వ్యత్యాసం సుమారు 12.5 kJ/mol. Gauche మరియు skew boat అనేవి butane మరియు cyclohexane కు సంబంధించినవి, ethane కు కాదు.',
    eliminationTechnique:
      'Eclipsed has maximum torsional strain (H atoms closest together) — it is the least stable, eliminate (a). Gauche conformation applies to butane (not ethane, which has no gauche form) — eliminate (b). Skew boat is a cyclohexane conformation — eliminate (c).',
    eliminationTechniqueTe:
      'Eclipsed లో గరిష్ట టోర్షనల్ స్ట్రెయిన్ ఉంటుంది (H పరమాణువులు అత్యంత సమీపంలో) — ఇది అత్యంత అస్థిరం, (a) తొలగించండి. Gauche రూపాంతరం butane కు వర్తిస్తుంది (ethane కు gauche రూపం లేదు) — (b) తొలగించండి. Skew boat అనేది cyclohexane రూపాంతరం — (c) తొలగించండి.',
    difficulty: 'easy',
  },

  // ===== MEDIUM (10 questions) =====
  {
    id: 'chem-hc-009',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Addition of HBr to propene in the absence of peroxide gives predominantly:',
    textTe: 'పెరాక్సైడ్ లేనప్పుడు propene కు HBr సంకలనం చేస్తే ప్రధానంగా ఏర్పడే ఉత్పన్నం:',
    options: [
      { id: 'a', text: '1-Bromopropane', textTe: '1-Bromopropane' },
      { id: 'b', text: '2-Bromopropane', textTe: '2-Bromopropane' },
      { id: 'c', text: '1,2-Dibromopropane', textTe: '1,2-Dibromopropane' },
      { id: 'd', text: 'Propyne', textTe: 'Propyne' },
    ],
    correctOptionId: 'b',
    explanation:
      "According to Markovnikov's rule, when HBr adds to an unsymmetrical alkene like propene (in the absence of peroxide), the hydrogen atom attaches to the carbon with more hydrogen atoms (C-1), and the bromine attaches to the carbon with fewer hydrogens (C-2). This gives 2-bromopropane as the major product. The rule is based on the stability of the intermediate carbocation — the secondary carbocation (at C-2) is more stable than the primary one (at C-1).",
    explanationTe:
      "Markovnikov's నియమం ప్రకారం, propene వంటి అసమాన ఆల్కీన్‌కు HBr సంకలనం చేసినప్పుడు (పెరాక్సైడ్ లేనప్పుడు), హైడ్రోజన్ పరమాణువు ఎక్కువ హైడ్రోజన్ పరమాణువులు ఉన్న కార్బన్‌కు (C-1) జతచేయబడుతుంది, మరియు బ్రోమిన్ తక్కువ హైడ్రోజన్లు ఉన్న కార్బన్‌కు (C-2) జతచేయబడుతుంది. ఇది 2-bromopropane ను ప్రధాన ఉత్పన్నంగా ఇస్తుంది. ఈ నియమం మధ్యవర్తి కార్బోకేషన్ స్థిరత్వంపై ఆధారపడి ఉంటుంది — ద్వితీయ కార్బోకేషన్ (C-2 వద్ద) ప్రాథమిక కార్బోకేషన్ (C-1 వద్ద) కంటే ఎక్కువ స్థిరంగా ఉంటుంది.",
    eliminationTechnique:
      "1,2-Dibromopropane requires addition of Br₂ (not HBr) — eliminate (c). Propyne is an alkyne, not an addition product of HBr — eliminate (d). 1-Bromopropane would form only via anti-Markovnikov addition (peroxide present) — eliminate (a).",
    eliminationTechniqueTe:
      "1,2-Dibromopropane కు Br₂ సంకలనం అవసరం (HBr కాదు) — (c) తొలగించండి. Propyne ఒక ఆల్కైన్, HBr సంకలన ఉత్పన్నం కాదు — (d) తొలగించండి. 1-Bromopropane anti-Markovnikov సంకలనం ద్వారా మాత్రమే ఏర్పడుతుంది (పెరాక్సైడ్ ఉన్నప్పుడు) — (a) తొలగించండి.",
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-010',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The IUPAC name of neopentane is:',
    textTe: 'Neopentane యొక్క IUPAC నామం ఏమిటి?',
    options: [
      { id: 'a', text: '2-Methylpropane', textTe: '2-Methylpropane' },
      { id: 'b', text: 'n-Pentane', textTe: 'n-Pentane' },
      { id: 'c', text: '2-Methylbutane', textTe: '2-Methylbutane' },
      { id: 'd', text: '2,2-Dimethylpropane', textTe: '2,2-Dimethylpropane' },
    ],
    correctOptionId: 'd',
    explanation:
      'Neopentane has the structure C(CH₃)₄ — a central carbon bonded to four methyl groups. The longest continuous chain has 3 carbons (propane), and there are two methyl substituents both on C-2. Therefore, the IUPAC name is 2,2-dimethylpropane. 2-Methylpropane is isobutane (C₄H₁₀), 2-methylbutane is isopentane, and n-pentane is the straight-chain isomer.',
    explanationTe:
      'Neopentane నిర్మాణం C(CH₃)₄ — ఒక కేంద్ర కార్బన్ నాలుగు మిథైల్ గ్రూపులతో బంధించబడి ఉంటుంది. అత్యధిక పొడవు గల నిరంతర గొలుసులో 3 కార్బన్లు ఉన్నాయి (propane), మరియు C-2 పై రెండు మిథైల్ ప్రతిక్షేపకాలు ఉన్నాయి. కాబట్టి IUPAC నామం 2,2-dimethylpropane. 2-Methylpropane అనేది isobutane (C₄H₁₀), 2-methylbutane అనేది isopentane, మరియు n-pentane నేరుగా గొలుసు సమాంగి.',
    eliminationTechnique:
      'Neopentane has 5 carbons (C₅H₁₂). 2-Methylpropane has only 4 carbons — eliminate (a). n-Pentane is a straight chain with no branches — neopentane is highly branched — eliminate (b). 2-Methylbutane has the longest chain of 4C with one methyl branch, but neopentane has a 3C chain with two methyl branches — eliminate (c).',
    eliminationTechniqueTe:
      'Neopentane లో 5 కార్బన్లు (C₅H₁₂) ఉన్నాయి. 2-Methylpropane లో 4 కార్బన్లు మాత్రమే ఉన్నాయి — (a) తొలగించండి. n-Pentane శాఖలు లేని నేరు గొలుసు — neopentane అత్యధిక శాఖలు కలిగి ఉంది — (b) తొలగించండి. 2-Methylbutane లో 4C పొడవైన గొలుసుతో ఒక మిథైల్ శాఖ ఉంది, కానీ neopentane లో 3C గొలుసుతో రెండు మిథైల్ శాఖలు ఉన్నాయి — (c) తొలగించండి.',
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-011',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Which of the following compounds exhibits geometrical (cis-trans) isomerism?',
    textTe: 'కింది సమ్మేళనాలలో జ్యామితీయ (cis-trans) సమాంగత్వాన్ని ప్రదర్శించేది ఏది?',
    options: [
      { id: 'a', text: '1-Butene', textTe: '1-Butene' },
      { id: 'b', text: '2-Methylpropene', textTe: '2-Methylpropene' },
      { id: 'c', text: '2-Butene', textTe: '2-Butene' },
      { id: 'd', text: 'Propene', textTe: 'Propene' },
    ],
    correctOptionId: 'c',
    explanation:
      'Geometrical (cis-trans) isomerism requires restricted rotation (a double bond) and each doubly bonded carbon must have two different groups attached. In 2-butene (CH₃–CH=CH–CH₃), each carbon of the double bond has one H and one CH₃, so cis and trans forms exist. In 1-butene, one end of the double bond (C-1) has two H atoms — no cis-trans isomerism. 2-Methylpropene has two identical methyl groups on one carbon. Propene has two H on C-1.',
    explanationTe:
      'జ్యామితీయ (cis-trans) సమాంగత్వానికి నియంత్రిత భ్రమణం (ద్విబంధం) అవసరం మరియు ప్రతి ద్విబంధ కార్బన్‌కు రెండు వేర్వేరు సమూహాలు జతచేయబడి ఉండాలి. 2-Butene (CH₃–CH=CH–CH₃) లో, ద్విబంధం యొక్క ప్రతి కార్బన్‌కు ఒక H మరియు ఒక CH₃ ఉన్నాయి, కాబట్టి cis మరియు trans రూపాలు ఉంటాయి. 1-Butene లో, ద్విబంధం యొక్క ఒక చివర (C-1) రెండు H పరమాణువులు ఉన్నాయి — cis-trans సమాంగత్వం లేదు. 2-Methylpropene లో ఒక కార్బన్‌పై రెండు ఒకే మిథైల్ సమూహాలు ఉన్నాయి. Propene లో C-1 పై రెండు H ఉన్నాయి.',
    eliminationTechnique:
      'For cis-trans isomerism, both doubly bonded carbons need different substituents. 1-Butene: CH₂=CH–CH₂–CH₃ — C-1 has two H atoms (identical) — eliminate (a). 2-Methylpropene: (CH₃)₂C=CH₂ — C-1 has two identical CH₃ groups — eliminate (b). Propene: CH₃–CH=CH₂ — C-3 has two H atoms — eliminate (d).',
    eliminationTechniqueTe:
      'Cis-trans సమాంగత్వానికి రెండు ద్విబంధ కార్బన్లకు వేర్వేరు ప్రతిక్షేపకాలు అవసరం. 1-Butene: CH₂=CH–CH₂–CH₃ — C-1 కు రెండు H పరమాణువులు (ఒకే విధం) — (a) తొలగించండి. 2-Methylpropene: (CH₃)₂C=CH₂ — ఒక కార్బన్‌కు రెండు ఒకే CH₃ సమూహాలు — (b) తొలగించండి. Propene: CH₃–CH=CH₂ — C-1 కు రెండు H పరమాణువులు — (d) తొలగించండి.',
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-012',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Ozonolysis of 2-butene followed by reductive workup with Zn/H₂O gives:',
    textTe: '2-Butene యొక్క ఓజోనాలిసిస్ తరువాత Zn/H₂O తో క్షయకారక ప్రక్రియ చేస్తే ఏర్పడే ఉత్పన్నాలు:',
    options: [
      { id: 'a', text: 'Two moles of acetaldehyde (CH₃CHO)', textTe: 'రెండు మోల్స్ acetaldehyde (CH₃CHO)' },
      { id: 'b', text: 'Formaldehyde and acetaldehyde', textTe: 'Formaldehyde మరియు acetaldehyde' },
      { id: 'c', text: 'Acetone and formaldehyde', textTe: 'Acetone మరియు formaldehyde' },
      { id: 'd', text: 'Two moles of formaldehyde (HCHO)', textTe: 'రెండు మోల్స్ formaldehyde (HCHO)' },
    ],
    correctOptionId: 'a',
    explanation:
      'Ozonolysis cleaves the double bond and converts each carbon of the C=C into a carbonyl group. 2-Butene is CH₃–CH=CH–CH₃. Cleavage at the double bond gives two fragments: CH₃–CHO and CHO–CH₃, which are both acetaldehyde. So the product is two moles of acetaldehyde (CH₃CHO). Formaldehyde (HCHO) would form only if one of the doubly bonded carbons had two H atoms (as in a terminal alkene).',
    explanationTe:
      'ఓజోనాలిసిస్ ద్విబంధాన్ని విచ్ఛిన్నం చేసి C=C యొక్క ప్రతి కార్బన్‌ను కార్బోనైల్ సమూహంగా మారుస్తుంది. 2-Butene అనేది CH₃–CH=CH–CH₃. ద్విబంధం వద్ద విచ్ఛిన్నం రెండు భాగాలను ఇస్తుంది: CH₃–CHO మరియు CHO–CH₃, ఇవి రెండూ acetaldehyde. కాబట్టి ఉత్పన్నం రెండు మోల్స్ acetaldehyde (CH₃CHO). Formaldehyde (HCHO) ద్విబంధ కార్బన్లలో ఒకదానికి రెండు H పరమాణువులు ఉన్నప్పుడు మాత్రమే ఏర్పడుతుంది (టెర్మినల్ ఆల్కీన్ వంటివి).',
    eliminationTechnique:
      'The double bond is between C-2 and C-3, both of which carry one CH₃ and one H. Ozonolysis gives identical fragments (CH₃CHO). Formaldehyde requires a =CH₂ group (terminal carbon) — 2-butene has no terminal double bond — eliminate (b), (c), and (d).',
    eliminationTechniqueTe:
      'ద్విబంధం C-2 మరియు C-3 మధ్య ఉంది, రెండింటిలో ఒక CH₃ మరియు ఒక H ఉన్నాయి. ఓజోనాలిసిస్ ఒకే విధమైన భాగాలను (CH₃CHO) ఇస్తుంది. Formaldehyde కు =CH₂ సమూహం (టెర్మినల్ కార్బన్) అవసరం — 2-butene లో టెర్మినల్ ద్విబంధం లేదు — (b), (c), మరియు (d) తొలగించండి.',
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-013',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Benzene reacts with Cl₂ in the presence of anhydrous AlCl₃ to form:',
    textTe: 'బెంజీన్ నిర్జల AlCl₃ సమక్షంలో Cl₂ తో చర్య జరిపి ఏర్పరిచే ఉత్పన్నం:',
    options: [
      { id: 'a', text: 'Cyclohexane', textTe: 'Cyclohexane' },
      { id: 'b', text: 'Chlorobenzene', textTe: 'Chlorobenzene' },
      { id: 'c', text: 'Hexachlorobenzene', textTe: 'Hexachlorobenzene' },
      { id: 'd', text: 'Benzyl chloride', textTe: 'Benzyl chloride' },
    ],
    correctOptionId: 'b',
    explanation:
      'This is an electrophilic aromatic substitution reaction. AlCl₃ acts as a Lewis acid catalyst and polarizes Cl₂ to generate Cl⁺ (electrophile). The electrophile attacks the benzene ring, substituting one hydrogen atom to form chlorobenzene (C₆H₅Cl) and HCl. It is a substitution (not addition) reaction because the aromatic ring is preserved. Cyclohexane would require complete hydrogenation, hexachlorobenzene would need excess Cl₂ under extreme conditions, and benzyl chloride is formed from toluene side-chain chlorination.',
    explanationTe:
      'ఇది ఎలక్ట్రోఫిలిక్ ఆరోమాటిక్ ప్రతిక్షేపణ చర్య. AlCl₃ Lewis ఆమ్ల ఉత్ప్రేరకంగా పనిచేసి Cl₂ ను ధ్రువీకరించి Cl⁺ (ఎలక్ట్రోఫైల్) ను ఉత్పత్తి చేస్తుంది. ఎలక్ట్రోఫైల్ బెంజీన్ వలయంపై దాడి చేసి ఒక హైడ్రోజన్ పరమాణువును ప్రతిక్షేపించి chlorobenzene (C₆H₅Cl) మరియు HCl ను ఏర్పరుస్తుంది. ఇది ప్రతిక్షేపణ (సంకలనం కాదు) చర్య ఎందుకంటే ఆరోమాటిక్ వలయం సంరక్షించబడుతుంది. Cyclohexane కు పూర్తి హైడ్రోజనేషన్ అవసరం, hexachlorobenzene కు అధిక Cl₂ తీవ్ర పరిస్థితులలో అవసరం, benzyl chloride toluene పార్శ్వ-గొలుసు క్లోరినేషన్ ద్వారా ఏర్పడుతుంది.',
    eliminationTechnique:
      'Cyclohexane has no double bonds — you cannot get it from Cl₂ addition — eliminate (a). Hexachlorobenzene requires harsh conditions and excess Cl₂ — a single substitution is the normal product — eliminate (c). Benzyl chloride (C₆H₅CH₂Cl) requires a methyl group on benzene (toluene) — eliminate (d).',
    eliminationTechniqueTe:
      'Cyclohexane లో ద్విబంధాలు లేవు — Cl₂ సంకలనం ద్వారా దీన్ని పొందలేము — (a) తొలగించండి. Hexachlorobenzene కు కఠినమైన పరిస్థితులు మరియు అధిక Cl₂ అవసరం — ఏక ప్రతిక్షేపణ సాధారణ ఉత్పన్నం — (c) తొలగించండి. Benzyl chloride (C₆H₅CH₂Cl) కు బెంజీన్‌పై మిథైల్ సమూహం (toluene) అవసరం — (d) తొలగించండి.',
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-014',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The correct order of acidic strength among hydrocarbons is:',
    textTe: 'హైడ్రోకార్బన్లలో ఆమ్ల బలం యొక్క సరైన క్రమం:',
    options: [
      { id: 'a', text: 'Ethane > Ethene > Ethyne', textTe: 'Ethane > Ethene > Ethyne' },
      { id: 'b', text: 'Ethene > Ethyne > Ethane', textTe: 'Ethene > Ethyne > Ethane' },
      { id: 'c', text: 'Ethane > Ethyne > Ethene', textTe: 'Ethane > Ethyne > Ethene' },
      { id: 'd', text: 'Ethyne > Ethene > Ethane', textTe: 'Ethyne > Ethene > Ethane' },
    ],
    correctOptionId: 'd',
    explanation:
      'Acidic strength of C–H bonds depends on the hybridization of the carbon: sp > sp² > sp³. In ethyne (sp hybridized), the s-character of the C–H bond is 50%, making the bonding electrons closer to carbon and the hydrogen more acidic. In ethene (sp²), s-character is 33%, and in ethane (sp³) it is 25%. Greater s-character means the electron pair in the conjugate base is held more tightly, stabilizing the anion. Hence: Ethyne > Ethene > Ethane.',
    explanationTe:
      'C–H బంధాల ఆమ్ల బలం కార్బన్ సంకరీకరణంపై ఆధారపడి ఉంటుంది: sp > sp² > sp³. Ethyne (sp సంకరీకరణం) లో C–H బంధం యొక్క s-లక్షణం 50%, ఇది బంధ ఎలక్ట్రాన్లను కార్బన్‌కు దగ్గరగా చేసి హైడ్రోజన్‌ను ఎక్కువ ఆమ్లంగా చేస్తుంది. Ethene (sp²) లో s-లక్షణం 33%, ethane (sp³) లో 25%. ఎక్కువ s-లక్షణం అంటే సంయుగ్మ క్షారంలో ఎలక్ట్రాన్ జత బిగుతుగా ఉంటుంది, ఆయాన్‌ను స్థిరపరుస్తుంది. కాబట్టి: Ethyne > Ethene > Ethane.',
    eliminationTechnique:
      'The key concept is: more s-character = more acidic. sp has 50% s (ethyne), sp² has 33% (ethene), sp³ has 25% (ethane). Any option placing ethane as most acidic is wrong — eliminate (a) and (c). Option (b) places ethene above ethyne, but sp² < sp in s-character — eliminate (b).',
    eliminationTechniqueTe:
      'కీలక భావన: ఎక్కువ s-లక్షణం = ఎక్కువ ఆమ్లత్వం. sp లో 50% s (ethyne), sp² లో 33% (ethene), sp³ లో 25% (ethane). Ethane ను అత్యంత ఆమ్లంగా చూపే ఏ ఎంపిక అయినా తప్పు — (a) మరియు (c) తొలగించండి. (b) ethene ను ethyne పైన ఉంచుతుంది, కానీ sp² < sp s-లక్షణంలో — (b) తొలగించండి.',
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-015',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: "Baeyer's reagent (dilute alkaline KMnO₄) is used to detect the presence of:",
    textTe: "Baeyer's రీఏజెంట్ (విలీన క్షారీయ KMnO₄) దేని ఉనికిని గుర్తించడానికి ఉపయోగిస్తారు?",
    options: [
      { id: 'a', text: 'Saturation in hydrocarbons', textTe: 'హైడ్రోకార్బన్లలో సంతృప్తత' },
      { id: 'b', text: 'Aromaticity', textTe: 'ఆరోమాటిసిటీ' },
      { id: 'c', text: 'Unsaturation (double or triple bonds)', textTe: 'అసంతృప్తత (ద్విబంధాలు లేదా త్రిబంధాలు)' },
      { id: 'd', text: 'The presence of a halogen atom', textTe: 'హాలోజన్ పరమాణువు ఉనికి' },
    ],
    correctOptionId: 'c',
    explanation:
      "Baeyer's test uses dilute alkaline potassium permanganate (KMnO₄), which is purple in color. When it reacts with an unsaturated compound (containing C=C or C≡C bonds), the purple color is discharged (decolorized) as the permanganate is reduced to MnO₂ (brown precipitate). This confirms unsaturation. Saturated hydrocarbons and aromatic compounds like benzene do not decolorize Baeyer's reagent under normal conditions.",
    explanationTe:
      "Baeyer's పరీక్ష విలీన క్షారీయ పొటాషియం పర్మాంగనేట్ (KMnO₄) ను ఉపయోగిస్తుంది, ఇది ఊదా రంగులో ఉంటుంది. ఇది అసంతృప్త సమ్మేళనంతో (C=C లేదా C≡C బంధాలు కలిగిన) చర్య జరిపినప్పుడు, ఊదా రంగు తొలగిపోతుంది (రంగు పోతుంది) ఎందుకంటే పర్మాంగనేట్ MnO₂ (గోధుమ అవక్షేపం) గా క్షయం చెందుతుంది. ఇది అసంతృప్తతను నిర్ధారిస్తుంది. సంతృప్త హైడ్రోకార్బన్లు మరియు benzene వంటి ఆరోమాటిక్ సమ్మేళనాలు సాధారణ పరిస్థితులలో Baeyer's రీఏజెంట్ రంగును తొలగించవు.",
    eliminationTechnique:
      "Saturated compounds do not react with KMnO₄ — the test specifically detects unsaturation, not saturation — eliminate (a). Benzene (aromatic) does not decolorize Baeyer's reagent — eliminate (b). Halogen detection uses different tests like sodium fusion/Lassaigne's test — eliminate (d).",
    eliminationTechniqueTe:
      "సంతృప్త సమ్మేళనాలు KMnO₄ తో చర్య జరపవు — ఈ పరీక్ష అసంతృప్తతను గుర్తిస్తుంది, సంతృప్తతను కాదు — (a) తొలగించండి. Benzene (ఆరోమాటిక్) Baeyer's రీఏజెంట్ రంగును తొలగించదు — (b) తొలగించండి. హాలోజన్ గుర్తింపుకు సోడియం ఫ్యూజన్/Lassaigne's పరీక్ష వంటి వేర్వేరు పరీక్షలు ఉపయోగిస్తారు — (d) తొలగించండి.",
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-016',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Addition of HBr to propene in the presence of benzoyl peroxide gives predominantly:',
    textTe: 'బెంజాయిల్ పెరాక్సైడ్ సమక్షంలో propene కు HBr సంకలనం చేస్తే ప్రధానంగా ఏర్పడే ఉత్పన్నం:',
    options: [
      { id: 'a', text: '1-Bromopropane', textTe: '1-Bromopropane' },
      { id: 'b', text: '2-Bromopropane', textTe: '2-Bromopropane' },
      { id: 'c', text: '1,3-Dibromopropane', textTe: '1,3-Dibromopropane' },
      { id: 'd', text: 'Allyl bromide', textTe: 'Allyl bromide' },
    ],
    correctOptionId: 'a',
    explanation:
      "In the presence of benzoyl peroxide, HBr addition follows the anti-Markovnikov rule (also called the Kharasch effect or peroxide effect). The reaction proceeds via a free radical mechanism. A bromine radical adds to the less substituted carbon (C-1 of propene) to form a more stable secondary radical at C-2, and then hydrogen adds to C-2. The product is 1-bromopropane. Note: The peroxide effect is observed only with HBr, not with HCl or HI.",
    explanationTe:
      "బెంజాయిల్ పెరాక్సైడ్ సమక్షంలో, HBr సంకలనం anti-Markovnikov నియమాన్ని (Kharasch ప్రభావం లేదా పెరాక్సైడ్ ప్రభావం అని కూడా అంటారు) అనుసరిస్తుంది. చర్య స్వేచ్ఛా రాడికల్ యంత్రాంగం ద్వారా జరుగుతుంది. బ్రోమిన్ రాడికల్ తక్కువ ప్రతిక్షేపిత కార్బన్‌కు (propene యొక్క C-1) జతచేయబడి C-2 వద్ద మరింత స్థిరమైన ద్వితీయ రాడికల్‌ను ఏర్పరుస్తుంది, తరువాత హైడ్రోజన్ C-2 కు జతచేయబడుతుంది. ఉత్పన్నం 1-bromopropane. గమనిక: పెరాక్సైడ్ ప్రభావం HBr తో మాత్రమే కనిపిస్తుంది, HCl లేదా HI తో కాదు.",
    eliminationTechnique:
      '2-Bromopropane is the Markovnikov product (formed without peroxide) — eliminate (b). 1,3-Dibromopropane requires two equivalents of HBr or a different reaction — eliminate (c). Allyl bromide (CH₂=CH–CH₂Br) retains the double bond, which does not occur in HBr addition — eliminate (d).',
    eliminationTechniqueTe:
      '2-Bromopropane Markovnikov ఉత్పన్నం (పెరాక్సైడ్ లేకుండా ఏర్పడుతుంది) — (b) తొలగించండి. 1,3-Dibromopropane కు రెండు HBr సమానాంశాలు లేదా వేరే చర్య అవసరం — (c) తొలగించండి. Allyl bromide (CH₂=CH–CH₂Br) ద్విబంధాన్ని నిలుపుకుంటుంది, ఇది HBr సంకలనంలో జరగదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-017',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Wurtz reaction of CH₃Br with sodium metal in dry ether gives:',
    textTe: 'పొడి ఈథర్‌లో CH₃Br ను సోడియం లోహంతో Wurtz చర్య జరిపితే ఏర్పడే ఉత్పన్నం:',
    options: [
      { id: 'a', text: 'Methane', textTe: 'Methane' },
      { id: 'b', text: 'Ethane', textTe: 'Ethane' },
      { id: 'c', text: 'Propane', textTe: 'Propane' },
      { id: 'd', text: 'Butane', textTe: 'Butane' },
    ],
    correctOptionId: 'b',
    explanation:
      'In the Wurtz reaction, two molecules of an alkyl halide react with sodium in dry ether to form a higher alkane. The reaction is: 2CH₃Br + 2Na → CH₃–CH₃ + 2NaBr. Two methyl groups couple together to form ethane (C₂H₆). The reaction works by sodium removing the halogen, and the resulting alkyl groups join. This reaction always doubles the number of carbons (for a single type of alkyl halide).',
    explanationTe:
      'Wurtz చర్యలో, రెండు ఆల్కైల్ హాలైడ్ అణువులు పొడి ఈథర్‌లో సోడియంతో చర్య జరిపి ఉన్నత ఆల్కేన్‌ను ఏర్పరుస్తాయి. చర్య: 2CH₃Br + 2Na → CH₃–CH₃ + 2NaBr. రెండు మిథైల్ సమూహాలు కలిసి ethane (C₂H₆) ను ఏర్పరుస్తాయి. సోడియం హాలోజన్‌ను తొలగించి, ఏర్పడిన ఆల్కైల్ సమూహాలు కలుస్తాయి. ఈ చర్య ఎల్లప్పుడూ కార్బన్ల సంఖ్యను రెట్టింపు చేస్తుంది (ఒకే రకం ఆల్కైల్ హాలైడ్ కోసం).',
    eliminationTechnique:
      'Wurtz reaction couples two alkyl groups: CH₃ + CH₃ = C₂H₆ (ethane). Methane (CH₄) has only one carbon — you cannot get it by coupling — eliminate (a). Propane (C₃H₈) has 3 carbons, but two CH₃ groups give only 2C — eliminate (c). Butane (C₄H₁₀) would require C₂H₅Br, not CH₃Br — eliminate (d).',
    eliminationTechniqueTe:
      'Wurtz చర్య రెండు ఆల్కైల్ సమూహాలను జతచేస్తుంది: CH₃ + CH₃ = C₂H₆ (ethane). Methane (CH₄) లో ఒక కార్బన్ మాత్రమే ఉంది — జత చేయడం ద్వారా దీన్ని పొందలేము — (a) తొలగించండి. Propane (C₃H₈) లో 3 కార్బన్లు ఉన్నాయి, కానీ రెండు CH₃ సమూహాలు 2C మాత్రమే ఇస్తాయి — (c) తొలగించండి. Butane (C₄H₁₀) కు C₂H₅Br అవసరం, CH₃Br కాదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },
  {
    id: 'chem-hc-018',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Friedel-Crafts acylation of benzene with CH₃COCl in the presence of anhydrous AlCl₃ gives:',
    textTe: 'నిర్జల AlCl₃ సమక్షంలో బెంజీన్ యొక్క CH₃COCl తో Friedel-Crafts ఎసైలేషన్ చర్య ఇచ్చే ఉత్పన్నం:',
    options: [
      { id: 'a', text: 'Toluene', textTe: 'Toluene' },
      { id: 'b', text: 'Benzaldehyde', textTe: 'Benzaldehyde' },
      { id: 'c', text: 'Benzoic acid', textTe: 'Benzoic acid' },
      { id: 'd', text: 'Acetophenone', textTe: 'Acetophenone' },
    ],
    correctOptionId: 'd',
    explanation:
      'Friedel-Crafts acylation introduces an acyl group (RCO–) onto the benzene ring. CH₃COCl (acetyl chloride) with AlCl₃ generates the acylium ion CH₃CO⁺, which attacks benzene to form acetophenone (C₆H₅COCH₃). Toluene (C₆H₅CH₃) would be the product of Friedel-Crafts alkylation (using CH₃Cl), not acylation. Benzaldehyde (C₆H₅CHO) would require formyl chloride (HCOCl). Benzoic acid is not a direct product of this reaction.',
    explanationTe:
      'Friedel-Crafts ఎసైలేషన్ బెంజీన్ వలయంపై ఒక ఎసైల్ సమూహాన్ని (RCO–) ప్రవేశపెడుతుంది. CH₃COCl (ఎసిటైల్ క్లోరైడ్) AlCl₃ తో ఎసైలియమ్ అయాన్ CH₃CO⁺ ను ఉత్పత్తి చేస్తుంది, ఇది బెంజీన్‌పై దాడి చేసి acetophenone (C₆H₅COCH₃) ను ఏర్పరుస్తుంది. Toluene (C₆H₅CH₃) Friedel-Crafts ఆల్కైలేషన్ (CH₃Cl ఉపయోగించి) ఉత్పన్నం, ఎసైలేషన్ కాదు. Benzaldehyde (C₆H₅CHO) కు ఫార్మైల్ క్లోరైడ్ (HCOCl) అవసరం. Benzoic acid ఈ చర్య యొక్క ప్రత్యక్ష ఉత్పన్నం కాదు.',
    eliminationTechnique:
      'Toluene has a –CH₃ group (alkyl), but the reagent is CH₃COCl (acyl chloride), which introduces –COCH₃, not –CH₃ — eliminate (a). Benzaldehyde has –CHO, but the reagent provides –COCH₃ — eliminate (b). Benzoic acid (–COOH) requires oxidation, not a Friedel-Crafts product — eliminate (c).',
    eliminationTechniqueTe:
      'Toluene లో –CH₃ సమూహం (ఆల్కైల్) ఉంది, కానీ రీఏజెంట్ CH₃COCl (ఎసైల్ క్లోరైడ్), ఇది –COCH₃ ను ప్రవేశపెడుతుంది, –CH₃ కాదు — (a) తొలగించండి. Benzaldehyde లో –CHO ఉంది, కానీ రీఏజెంట్ –COCH₃ ను అందిస్తుంది — (b) తొలగించండి. Benzoic acid (–COOH) కు ఆక్సీకరణం అవసరం, Friedel-Crafts ఉత్పన్నం కాదు — (c) తొలగించండి.',
    difficulty: 'medium',
  },

  // ===== HARD (7 questions) =====
  {
    id: 'chem-hc-019',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: "Reduction of 2-butyne with Lindlar's catalyst (Pd/BaSO₄ poisoned with quinoline) gives:",
    textTe: "Lindlar's ఉత్ప్రేరకం (quinoline తో విషపూరితమైన Pd/BaSO₄) తో 2-butyne యొక్క క్షయకరణం ఇచ్చే ఉత్పన్నం:",
    options: [
      { id: 'a', text: 'Butane', textTe: 'Butane' },
      { id: 'b', text: 'trans-2-Butene', textTe: 'trans-2-Butene' },
      { id: 'c', text: 'cis-2-Butene', textTe: 'cis-2-Butene' },
      { id: 'd', text: '1-Butene', textTe: '1-Butene' },
    ],
    correctOptionId: 'c',
    explanation:
      "Lindlar's catalyst is a partially deactivated (poisoned) palladium catalyst that allows selective semi-hydrogenation of alkynes to alkenes without further reduction to alkanes. The hydrogenation occurs by syn-addition, where both hydrogen atoms add from the same face of the triple bond. This gives the cis-alkene as the product. 2-Butyne (CH₃–C≡C–CH₃) is reduced to cis-2-butene (with both CH₃ groups on the same side). For the trans product, Birch reduction (Na in liquid NH₃) is used instead.",
    explanationTe:
      "Lindlar's ఉత్ప్రేరకం పాక్షికంగా నిష్క్రియం (విషపూరితం) చేయబడిన పెల్లాడియం ఉత్ప్రేరకం, ఇది ఆల్కైన్లను ఆల్కీన్లుగా ఎంపిక చేసిన సెమీ-హైడ్రోజనేషన్‌ను అనుమతిస్తుంది, ఆల్కేన్లుగా మరింత క్షయకరణం చేయకుండా. హైడ్రోజనేషన్ syn-సంకలనం ద్వారా జరుగుతుంది, ఇక్కడ రెండు హైడ్రోజన్ పరమాణువులు త్రిబంధం యొక్క ఒకే పక్క నుండి జతచేయబడతాయి. ఇది cis-ఆల్కీన్‌ను ఉత్పన్నంగా ఇస్తుంది. 2-Butyne (CH₃–C≡C–CH₃) cis-2-butene గా (రెండు CH₃ సమూహాలు ఒకే వైపు) క్షయకరణం చెందుతుంది. Trans ఉత్పన్నానికి, Birch క్షయకరణం (ద్రవ NH₃ లో Na) ఉపయోగిస్తారు.",
    eliminationTechnique:
      "Lindlar's catalyst gives semi-hydrogenation (alkyne → alkene), not full hydrogenation (alkyne → alkane) — butane requires full reduction, eliminate (a). The syn-addition mechanism produces cis geometry, not trans — eliminate (b). 1-Butene would require the double bond to shift position, which does not happen in simple hydrogenation — eliminate (d).",
    eliminationTechniqueTe:
      "Lindlar's ఉత్ప్రేరకం సెమీ-హైడ్రోజనేషన్ (ఆల్కైన్ → ఆల్కీన్) ఇస్తుంది, పూర్తి హైడ్రోజనేషన్ (ఆల్కైన్ → ఆల్కేన్) కాదు — butane కు పూర్తి క్షయకరణం అవసరం, (a) తొలగించండి. Syn-సంకలన యంత్రాంగం cis జ్యామితిని ఉత్పత్తి చేస్తుంది, trans కాదు — (b) తొలగించండి. 1-Butene కు ద్విబంధం స్థానం మారాలి, ఇది సాధారణ హైడ్రోజనేషన్‌లో జరగదు — (d) తొలగించండి.",
    difficulty: 'hard',
  },
  {
    id: 'chem-hc-020',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Birch reduction of benzene (using Na in liquid NH₃ with alcohol) gives:',
    textTe: 'బెంజీన్ యొక్క Birch క్షయకరణం (ఆల్కహాల్ తో ద్రవ NH₃ లో Na ఉపయోగించి) ఇచ్చే ఉత్పన్నం:',
    options: [
      { id: 'a', text: '1,4-Cyclohexadiene', textTe: '1,4-Cyclohexadiene' },
      { id: 'b', text: 'Cyclohexane', textTe: 'Cyclohexane' },
      { id: 'c', text: 'Cyclohexene', textTe: 'Cyclohexene' },
      { id: 'd', text: '1,3-Cyclohexadiene', textTe: '1,3-Cyclohexadiene' },
    ],
    correctOptionId: 'a',
    explanation:
      'Birch reduction of benzene using sodium metal dissolved in liquid ammonia with an alcohol as proton source selectively reduces benzene to 1,4-cyclohexadiene. The reduction adds two hydrogen atoms to the ring in 1,4-positions, leaving two non-conjugated double bonds. It does not fully reduce benzene to cyclohexane (that requires catalytic hydrogenation at high pressure). The product is 1,4-cyclohexadiene (unconjugated), not 1,3-cyclohexadiene (conjugated), because thermodynamic vs kinetic control favors the 1,4-product in Birch reduction.',
    explanationTe:
      'బెంజీన్ యొక్క Birch క్షయకరణం ద్రవ అమ్మోనియాలో కరిగిన సోడియం లోహం మరియు ప్రోటాన్ మూలంగా ఆల్కహాల్ ఉపయోగించి బెంజీన్‌ను ఎంపికతో 1,4-cyclohexadiene గా క్షయకరణం చేస్తుంది. క్షయకరణం వలయానికి 1,4-స్థానాలలో రెండు హైడ్రోజన్ పరమాణువులను జతచేస్తుంది, రెండు అసంయుగ్మ ద్విబంధాలను మిగిల్చుతుంది. ఇది బెంజీన్‌ను పూర్తిగా cyclohexane గా క్షయకరణం చేయదు (దానికి అధిక పీడనం వద్ద ఉత్ప్రేరక హైడ్రోజనేషన్ అవసరం). ఉత్పన్నం 1,4-cyclohexadiene (అసంయుగ్మం), 1,3-cyclohexadiene (సంయుగ్మం) కాదు.',
    eliminationTechnique:
      'Birch reduction is a partial reduction — it cannot fully reduce benzene to cyclohexane — eliminate (b). Cyclohexene has only one double bond remaining, but Birch reduction removes only one double bond worth of unsaturation from three, leaving two — eliminate (c). The product is 1,4- (unconjugated) not 1,3- (conjugated) because the unconjugated diene is the characteristic Birch product — eliminate (d).',
    eliminationTechniqueTe:
      'Birch క్షయకరణం పాక్షిక క్షయకరణం — ఇది బెంజీన్‌ను పూర్తిగా cyclohexane గా క్షయకరణం చేయలేదు — (b) తొలగించండి. Cyclohexene లో ఒక ద్విబంధం మాత్రమే మిగిలి ఉంటుంది, కానీ Birch క్షయకరణం మూడింటిలో ఒక ద్విబంధం విలువ అసంతృప్తతను మాత్రమే తొలగిస్తుంది, రెండు మిగిలిస్తుంది — (c) తొలగించండి. ఉత్పన్నం 1,4- (అసంయుగ్మం) 1,3- (సంయుగ్మం) కాదు, ఎందుకంటే అసంయుగ్మ డయీన్ Birch ఉత్పన్నం యొక్క లక్షణం — (d) తొలగించండి.',
    difficulty: 'hard',
  },
  {
    id: 'chem-hc-021',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The correct order of reactivity towards electrophilic aromatic substitution is:',
    textTe: 'ఎలక్ట్రోఫిలిక్ ఆరోమాటిక్ ప్రతిక్షేపణ పట్ల చర్యాశీలత యొక్క సరైన క్రమం:',
    options: [
      { id: 'a', text: 'Benzene > Toluene > Nitrobenzene', textTe: 'Benzene > Toluene > Nitrobenzene' },
      { id: 'b', text: 'Toluene > Benzene > Nitrobenzene', textTe: 'Toluene > Benzene > Nitrobenzene' },
      { id: 'c', text: 'Nitrobenzene > Benzene > Toluene', textTe: 'Nitrobenzene > Benzene > Toluene' },
      { id: 'd', text: 'Toluene > Nitrobenzene > Benzene', textTe: 'Toluene > Nitrobenzene > Benzene' },
    ],
    correctOptionId: 'b',
    explanation:
      'Reactivity in electrophilic aromatic substitution depends on the electron density of the aromatic ring. Electron-donating groups (EDGs) like –CH₃ (in toluene) increase electron density through hyperconjugation and inductive effect, making the ring more reactive than benzene. Electron-withdrawing groups (EWGs) like –NO₂ (in nitrobenzene) decrease electron density through both –I and –M effects, making the ring less reactive. Therefore: Toluene (activating –CH₃) > Benzene (no substituent) > Nitrobenzene (deactivating –NO₂).',
    explanationTe:
      'ఎలక్ట్రోఫిలిక్ ఆరోమాటిక్ ప్రతిక్షేపణలో చర్యాశీలత ఆరోమాటిక్ వలయం యొక్క ఎలక్ట్రాన్ సాంద్రతపై ఆధారపడి ఉంటుంది. Toluene లోని –CH₃ వంటి ఎలక్ట్రాన్-దాన సమూహాలు (EDGs) హైపర్‌కాంజుగేషన్ మరియు ప్రేరక ప్రభావం ద్వారా ఎలక్ట్రాన్ సాంద్రతను పెంచుతాయి, ఇది వలయాన్ని benzene కంటే ఎక్కువ చర్యాశీలంగా చేస్తుంది. Nitrobenzene లోని –NO₂ వంటి ఎలక్ట్రాన్-ఆకర్షక సమూహాలు (EWGs) –I మరియు –M ప్రభావాల ద్వారా ఎలక్ట్రాన్ సాంద్రతను తగ్గిస్తాయి. కాబట్టి: Toluene (క్రియాశీల –CH₃) > Benzene (ప్రతిక్షేపకం లేదు) > Nitrobenzene (నిష్క్రియ –NO₂).',
    eliminationTechnique:
      'The –CH₃ group donates electrons to the ring, so toluene must be more reactive than benzene. Any option with Benzene > Toluene is wrong — eliminate (a) and (c). The –NO₂ group strongly withdraws electrons, so nitrobenzene must be the least reactive. Option (d) places nitrobenzene above benzene — eliminate (d).',
    eliminationTechniqueTe:
      '–CH₃ సమూహం వలయానికి ఎలక్ట్రాన్లను దానం చేస్తుంది, కాబట్టి toluene benzene కంటే ఎక్కువ చర్యాశీలంగా ఉండాలి. Benzene > Toluene ఉన్న ఏ ఎంపిక అయినా తప్పు — (a) మరియు (c) తొలగించండి. –NO₂ సమూహం బలంగా ఎలక్ట్రాన్లను ఆకర్షిస్తుంది, కాబట్టి nitrobenzene అత్యంత తక్కువ చర్యాశీలంగా ఉండాలి. (d) nitrobenzene ను benzene పైన ఉంచుతుంది — (d) తొలగించండి.',
    difficulty: 'hard',
  },
  {
    id: 'chem-hc-022',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'The total number of structural isomers possible for the molecular formula C₅H₁₂ is:',
    textTe: 'C₅H₁₂ అణు సూత్రానికి సాధ్యమయ్యే నిర్మాణ సమాంగుల మొత్తం సంఖ్య:',
    options: [
      { id: 'a', text: '2', textTe: '2' },
      { id: 'b', text: '4', textTe: '4' },
      { id: 'c', text: '5', textTe: '5' },
      { id: 'd', text: '3', textTe: '3' },
    ],
    correctOptionId: 'd',
    explanation:
      'C₅H₁₂ (pentane) has exactly three structural isomers: (1) n-Pentane — a straight chain of 5 carbons: CH₃CH₂CH₂CH₂CH₃; (2) Isopentane (2-methylbutane) — a 4-carbon chain with one methyl branch at C-2: CH₃CH(CH₃)CH₂CH₃; (3) Neopentane (2,2-dimethylpropane) — a 3-carbon chain with two methyl branches at C-2: C(CH₃)₄. No other arrangement is possible without duplicating one of these three structures.',
    explanationTe:
      'C₅H₁₂ (pentane) కు సరిగ్గా మూడు నిర్మాణ సమాంగులు ఉన్నాయి: (1) n-Pentane — 5 కార్బన్ల నేరు గొలుసు: CH₃CH₂CH₂CH₂CH₃; (2) Isopentane (2-methylbutane) — C-2 వద్ద ఒక మిథైల్ శాఖతో 4-కార్బన్ గొలుసు: CH₃CH(CH₃)CH₂CH₃; (3) Neopentane (2,2-dimethylpropane) — C-2 వద్ద రెండు మిథైల్ శాఖలతో 3-కార్బన్ గొలుసు: C(CH₃)₄. ఈ మూడు నిర్మాణాలలో ఒకదాన్ని పునరావృతం చేయకుండా మరే ఇతర అమరిక సాధ్యం కాదు.',
    eliminationTechnique:
      'You can systematically enumerate: start with the longest chain (5C: n-pentane), then 4C chain with one branch (isopentane), then 3C chain with two branches (neopentane). A 2C chain with 3 branches is impossible for C₅H₁₂. So there are exactly 3. Options 2, 4, and 5 are incorrect — eliminate (a), (b), and (c).',
    eliminationTechniqueTe:
      'క్రమపద్ధతిలో లెక్కించవచ్చు: అత్యధిక పొడవు గొలుసుతో ప్రారంభించండి (5C: n-pentane), తరువాత ఒక శాఖతో 4C గొలుసు (isopentane), తరువాత రెండు శాఖలతో 3C గొలుసు (neopentane). C₅H₁₂ కు 3 శాఖలతో 2C గొలుసు అసాధ్యం. కాబట్టి సరిగ్గా 3 ఉన్నాయి. 2, 4, మరియు 5 ఎంపికలు తప్పు — (a), (b), మరియు (c) తొలగించండి.',
    difficulty: 'hard',
  },
  {
    id: 'chem-hc-023',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'Among the various conformations of n-butane, the most stable one is:',
    textTe: 'n-Butane యొక్క వివిధ రూపాంతరాలలో అత్యంత స్థిరమైనది:',
    options: [
      { id: 'a', text: 'Anti (dihedral angle 180°)', textTe: 'Anti (ద్విహేద్ర కోణం 180°)' },
      { id: 'b', text: 'Gauche (dihedral angle 60°)', textTe: 'Gauche (ద్విహేద్ర కోణం 60°)' },
      { id: 'c', text: 'Fully eclipsed (dihedral angle 0°)', textTe: 'పూర్తిగా eclipsed (ద్విహేద్ర కోణం 0°)' },
      { id: 'd', text: 'Partially eclipsed (dihedral angle 120°)', textTe: 'పాక్షికంగా eclipsed (ద్విహేద్ర కోణం 120°)' },
    ],
    correctOptionId: 'a',
    explanation:
      'In n-butane, when viewed along the C₂–C₃ bond using Newman projections, the anti conformation (dihedral angle 180° between the two methyl groups) is the most stable. In this arrangement, the two bulky –CH₃ groups are at maximum distance from each other, minimizing both torsional strain and steric strain. The stability order is: Anti > Gauche > Partially eclipsed > Fully eclipsed. The fully eclipsed conformation (0°, where both CH₃ groups overlap) is the least stable due to maximum steric and torsional strain.',
    explanationTe:
      'n-Butane లో, C₂–C₃ బంధం వెంట Newman ప్రొజెక్షన్లలో చూసినప్పుడు, anti రూపాంతరం (రెండు మిథైల్ సమూహాల మధ్య 180° ద్విహేద్ర కోణం) అత్యంత స్థిరమైనది. ఈ అమరికలో, రెండు భారీ –CH₃ సమూహాలు ఒకదానికొకటి గరిష్ట దూరంలో ఉంటాయి, ఇది టోర్షనల్ స్ట్రెయిన్ మరియు స్టెరిక్ స్ట్రెయిన్ రెండింటినీ తగ్గిస్తుంది. స్థిరత్వ క్రమం: Anti > Gauche > పాక్షికంగా eclipsed > పూర్తిగా eclipsed. పూర్తిగా eclipsed రూపాంతరం (0°, రెండు CH₃ సమూహాలు అతిపాతం) గరిష్ట స్టెరిక్ మరియు టోర్షనల్ స్ట్రెయిన్ కారణంగా అత్యంత అస్థిరమైనది.',
    eliminationTechnique:
      'Fully eclipsed (0°) has the two CH₃ groups directly overlapping — maximum strain, least stable — eliminate (c). Partially eclipsed (120°) still has significant eclipsing interactions — eliminate (d). Gauche (60°) has the CH₃ groups closer together than anti, causing some steric strain — eliminate (b). Anti (180°) has maximum separation and minimum strain.',
    eliminationTechniqueTe:
      'పూర్తిగా eclipsed (0°) లో రెండు CH₃ సమూహాలు నేరుగా అతిపాతం — గరిష్ట స్ట్రెయిన్, అత్యంత అస్థిరం — (c) తొలగించండి. పాక్షికంగా eclipsed (120°) లో ఇంకా గణనీయమైన eclipsing పరస్పర చర్యలు ఉన్నాయి — (d) తొలగించండి. Gauche (60°) లో CH₃ సమూహాలు anti కంటే దగ్గరగా ఉన్నాయి, కొంత స్టెరిక్ స్ట్రెయిన్ కలిగిస్తాయి — (b) తొలగించండి. Anti (180°) లో గరిష్ట వేరు మరియు కనిష్ట స్ట్రెయిన్ ఉంటుంది.',
    difficulty: 'hard',
  },
  {
    id: 'chem-hc-024',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: 'When acetylene is passed through dilute H₂SO₄ in the presence of HgSO₄ at 333 K, the product formed is:',
    textTe: '333 K వద్ద HgSO₄ సమక్షంలో విలీన H₂SO₄ ద్వారా acetylene ను పంపినప్పుడు ఏర్పడే ఉత్పన్నం:',
    options: [
      { id: 'a', text: 'Ethanol', textTe: 'Ethanol' },
      { id: 'b', text: 'Acetic acid', textTe: 'Acetic acid' },
      { id: 'c', text: 'Acetaldehyde', textTe: 'Acetaldehyde' },
      { id: 'd', text: 'Acetone', textTe: 'Acetone' },
    ],
    correctOptionId: 'c',
    explanation:
      'This is the hydration of acetylene (Kucherov reaction). When acetylene (HC≡CH) is treated with dilute H₂SO₄ in the presence of HgSO₄ (mercuric sulfate acts as a catalyst) at 333 K, water adds across the triple bond following Markovnikov\'s rule to initially form vinyl alcohol (ethenol), which immediately tautomerizes (keto-enol tautomerism) to acetaldehyde (CH₃CHO). Acetone would form from propyne, not acetylene. Ethanol would require complete reduction. Acetic acid would require oxidation.',
    explanationTe:
      'ఇది acetylene యొక్క జలవిశ్లేషణం (Kucherov చర్య). Acetylene (HC≡CH) ను HgSO₄ (మెర్క్యూరిక్ సల్ఫేట్ ఉత్ప్రేరకంగా పనిచేస్తుంది) సమక్షంలో 333 K వద్ద విలీన H₂SO₄ తో చికిత్స చేసినప్పుడు, నీరు Markovnikov\'s నియమం ప్రకారం త్రిబంధం అంతటా జతచేయబడి మొదట vinyl alcohol (ethenol) ను ఏర్పరుస్తుంది, ఇది వెంటనే టాటోమరైజేషన్ (keto-enol టాటోమరిజం) చెంది acetaldehyde (CH₃CHO) ను ఇస్తుంది. Acetone propyne నుండి ఏర్పడుతుంది, acetylene నుండి కాదు. Ethanol కు పూర్తి క్షయకరణం అవసరం. Acetic acid కు ఆక్సీకరణం అవసరం.',
    eliminationTechnique:
      'The reaction is hydration (adding H₂O), not reduction — ethanol requires H₂ addition, not H₂O — eliminate (a). Acetic acid (CH₃COOH) has an extra oxygen and requires oxidation — eliminate (b). Acetone (CH₃COCH₃) has 3 carbons, but acetylene has only 2 carbons — eliminate (d). The 2-carbon product of hydration + tautomerism is acetaldehyde.',
    eliminationTechniqueTe:
      'ఈ చర్య జలవిశ్లేషణం (H₂O జతచేయడం), క్షయకరణం కాదు — ethanol కు H₂ సంకలనం అవసరం, H₂O కాదు — (a) తొలగించండి. Acetic acid (CH₃COOH) లో అదనపు ఆక్సిజన్ ఉంది, ఆక్సీకరణం అవసరం — (b) తొలగించండి. Acetone (CH₃COCH₃) లో 3 కార్బన్లు ఉన్నాయి, కానీ acetylene లో 2 కార్బన్లు మాత్రమే ఉన్నాయి — (d) తొలగించండి. జలవిశ్లేషణం + టాటోమరిజం యొక్క 2-కార్బన్ ఉత్పన్నం acetaldehyde.',
    difficulty: 'hard',
  },
  {
    id: 'chem-hc-025',
    chapterId: 'chemistry-hydrocarbons',
    subjectId: 'chemistry',
    text: "In Kolbe's electrolytic method, when a concentrated aqueous solution of sodium acetate (CH₃COONa) is electrolyzed, the hydrocarbon obtained at the anode is:",
    textTe: "Kolbe's విద్యుద్విశ్లేషణ పద్ధతిలో, సోడియం ఎసిటేట్ (CH₃COONa) యొక్క సాంద్ర జలద్రావణాన్ని విద్యుద్విశ్లేషణం చేసినప్పుడు, ఆనోడ్ వద్ద ఏర్పడే హైడ్రోకార్బన్:",
    options: [
      { id: 'a', text: 'Methane', textTe: 'Methane' },
      { id: 'b', text: 'Ethane', textTe: 'Ethane' },
      { id: 'c', text: 'Ethylene', textTe: 'Ethylene' },
      { id: 'd', text: 'Acetylene', textTe: 'Acetylene' },
    ],
    correctOptionId: 'b',
    explanation:
      "In Kolbe's electrolysis, the acetate ion (CH₃COO⁻) migrates to the anode, where it is oxidized. The acetate ion loses an electron to form the acetate radical (CH₃COO·), which then decarboxylates (loses CO₂) to form a methyl radical (CH₃·). Two methyl radicals then couple together at the anode to form ethane (CH₃–CH₃). The overall anode reaction: 2CH₃COO⁻ → CH₃–CH₃ + 2CO₂ + 2e⁻. This is a useful method for preparing symmetrical alkanes.",
    explanationTe:
      "Kolbe's విద్యుద్విశ్లేషణలో, ఎసిటేట్ అయాన్ (CH₃COO⁻) ఆనోడ్‌కు వలసపోతుంది, అక్కడ ఇది ఆక్సీకరణం చెందుతుంది. ఎసిటేట్ అయాన్ ఒక ఎలక్ట్రాన్‌ను కోల్పోయి ఎసిటేట్ రాడికల్ (CH₃COO·) ను ఏర్పరుస్తుంది, ఇది డీకార్బాక్సిలేషన్ (CO₂ కోల్పోవడం) చెంది మిథైల్ రాడికల్ (CH₃·) ను ఏర్పరుస్తుంది. రెండు మిథైల్ రాడికల్లు ఆనోడ్ వద్ద కలిసి ethane (CH₃–CH₃) ను ఏర్పరుస్తాయి. మొత్తం ఆనోడ్ చర్య: 2CH₃COO⁻ → CH₃–CH₃ + 2CO₂ + 2e⁻. ఇది సమాన ఆల్కేన్లను తయారుచేయడానికి ఉపయోగకరమైన పద్ధతి.",
    eliminationTechnique:
      "Kolbe's electrolysis couples two decarboxylated radicals. Each CH₃COO⁻ gives a CH₃· radical after losing CO₂. Two CH₃· radicals combine to give C₂H₆ (ethane). Methane (CH₄) would need a hydrogen source, not radical coupling — eliminate (a). Ethylene (C₂H₄) has a double bond, but radical coupling gives a single bond — eliminate (c). Acetylene (C₂H₂) has a triple bond — eliminate (d).",
    eliminationTechniqueTe:
      "Kolbe's విద్యుద్విశ్లేషణ రెండు డీకార్బాక్సిలేటెడ్ రాడికల్లను జతచేస్తుంది. ప్రతి CH₃COO⁻ CO₂ కోల్పోయిన తర్వాత CH₃· రాడికల్‌ను ఇస్తుంది. రెండు CH₃· రాడికల్లు కలిసి C₂H₆ (ethane) ను ఇస్తాయి. Methane (CH₄) కు హైడ్రోజన్ మూలం అవసరం, రాడికల్ జత కాదు — (a) తొలగించండి. Ethylene (C₂H₄) లో ద్విబంధం ఉంది, కానీ రాడికల్ జత ఏక బంధాన్ని ఇస్తుంది — (c) తొలగించండి. Acetylene (C₂H₂) లో త్రిబంధం ఉంది — (d) తొలగించండి.",
    difficulty: 'hard',
  },
];
