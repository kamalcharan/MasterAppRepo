import { Question } from '../../types';

export const zoologyHumanPhysiologyQuestions: Question[] = [
  // ──────────────────────────────────────────────
  // DIGESTION & ABSORPTION (4 questions)
  // ──────────────────────────────────────────────
  {
    id: 'zoo-hp-001',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Which enzyme present in saliva initiates the digestion of starch in the oral cavity?',
    textTe: 'నోటి కుహరంలో పిండి పదార్థం జీర్ణక్రియను ప్రారంభించే లాలాజలంలోని enzyme ఏది?',
    options: [
      { id: 'a', text: 'Pepsin', textTe: 'Pepsin' },
      { id: 'b', text: 'Salivary amylase (ptyalin)', textTe: 'Salivary amylase (ptyalin)' },
      { id: 'c', text: 'Trypsin', textTe: 'Trypsin' },
      { id: 'd', text: 'Lipase', textTe: 'Lipase' },
    ],
    correctOptionId: 'b',
    explanation:
      'Salivary amylase, also called ptyalin, is secreted by the salivary glands (parotid, submandibular, sublingual) and acts on starch, breaking it down into maltose and isomaltose at an optimum pH of about 6.8. Digestion of starch begins in the oral cavity itself. Pepsin acts on proteins in the stomach, trypsin acts on proteins in the duodenum, and lipase acts on fats.',
    explanationTe:
      'Salivary amylase, దీనిని ptyalin అని కూడా అంటారు, ఇది లాలాజల గ్రంథులు (parotid, submandibular, sublingual) ద్వారా స్రవించబడుతుంది మరియు పిండి పదార్థంపై పనిచేసి, దానిని maltose మరియు isomaltose గా విభజిస్తుంది. ఇది సుమారు 6.8 pH వద్ద పనిచేస్తుంది. పిండి పదార్థ జీర్ణక్రియ నోటి కుహరంలోనే ప్రారంభమవుతుంది. Pepsin జఠరంలో proteins పై, trypsin డ్యూడెనమ్‌లో proteins పై, lipase కొవ్వులపై పనిచేస్తాయి.',
    eliminationTechnique:
      'Pepsin (option a) works only in the acidic pH of the stomach on proteins — it cannot be in saliva. Trypsin (option c) is a pancreatic enzyme that acts in the duodenum, not in the mouth. Lipase (option d) digests fats, not starch. Since the question specifically asks about starch digestion in the oral cavity, only salivary amylase fits.',
    eliminationTechniqueTe:
      'Pepsin (ఎంపిక a) జఠరంలోని ఆమ్ల pH లో proteins పై మాత్రమే పనిచేస్తుంది — ఇది లాలాజలంలో ఉండదు. Trypsin (ఎంపిక c) pancreatic enzyme, ఇది డ్యూడెనమ్‌లో పనిచేస్తుంది, నోటిలో కాదు. Lipase (ఎంపిక d) కొవ్వులను జీర్ణం చేస్తుంది, పిండి పదార్థాన్ని కాదు. ప్రశ్న నోటి కుహరంలో పిండి పదార్థ జీర్ణక్రియ గురించి అడుగుతోంది కాబట్టి, salivary amylase మాత్రమే సరిపోతుంది.',
    difficulty: 'easy',
  },
  {
    id: 'zoo-hp-002',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Bile salts produced by the liver primarily aid in digestion by:',
    textTe: 'కాలేయం ఉత్పత్తి చేసే పిత్త లవణాలు ప్రధానంగా జీర్ణక్రియలో ఏ విధంగా సహాయపడతాయి?',
    options: [
      { id: 'a', text: 'Breaking down proteins into amino acids', textTe: 'Proteins ను amino acids గా విభజించడం' },
      { id: 'b', text: 'Converting starch to maltose', textTe: 'పిండి పదార్థాన్ని maltose గా మార్చడం' },
      { id: 'c', text: 'Emulsification of fats into smaller droplets', textTe: 'కొవ్వులను చిన్న బిందువులుగా emulsification చేయడం' },
      { id: 'd', text: 'Activating trypsinogen into trypsin', textTe: 'Trypsinogen ను trypsin గా సక్రియం చేయడం' },
    ],
    correctOptionId: 'c',
    explanation:
      'Bile salts, synthesized in the liver and stored in the gallbladder, do not contain any digestive enzymes. Their primary role is to emulsify large fat globules into smaller micelles, increasing the surface area for lipase action. This mechanical breakdown is essential for efficient fat digestion. Protein breakdown is done by proteases, starch conversion by amylase, and trypsinogen activation is performed by enterokinase.',
    explanationTe:
      'పిత్త లవణాలు కాలేయంలో సంశ్లేషించబడి పిత్తాశయంలో నిల్వ చేయబడతాయి, వాటిలో ఎటువంటి జీర్ణ enzymes ఉండవు. వాటి ప్రధాన పాత్ర పెద్ద కొవ్వు గోళాలను చిన్న micelles గా emulsify చేయడం, ఇది lipase పనిచేయడానికి ఉపరితల వైశాల్యాన్ని పెంచుతుంది. ఈ యాంత్రిక విభజన కొవ్వు జీర్ణక్రియకు అవసరం. Protein విభజన proteases ద్వారా, పిండి పదార్థ మార్పిడి amylase ద్వారా, trypsinogen సక్రియం enterokinase ద్వారా జరుగుతుంది.',
    eliminationTechnique:
      'Option (a) is wrong because bile salts have no protease activity — protein digestion requires pepsin or trypsin. Option (b) is wrong because starch digestion needs amylase, which is not found in bile. Option (d) is wrong because enterokinase (from intestinal mucosa) activates trypsinogen, not bile salts. Bile salts are not enzymes; they are amphipathic molecules that emulsify fats.',
    eliminationTechniqueTe:
      'ఎంపిక (a) తప్పు ఎందుకంటే పిత్త లవణాలకు protease చర్య లేదు — protein జీర్ణక్రియకు pepsin లేదా trypsin అవసరం. ఎంపిక (b) తప్పు ఎందుకంటే పిండి పదార్థ జీర్ణక్రియకు amylase అవసరం, ఇది పిత్తంలో ఉండదు. ఎంపిక (d) తప్పు ఎందుకంటే enterokinase (ఆంత్ర శ్లేష్మం నుండి) trypsinogen ను సక్రియం చేస్తుంది, పిత్త లవణాలు కాదు.',
    difficulty: 'medium',
  },
  {
    id: 'zoo-hp-003',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Enterokinase is an enzyme secreted by the intestinal mucosa. What is its specific function?',
    textTe: 'Enterokinase అనేది ఆంత్ర శ్లేష్మం ద్వారా స్రవించబడే enzyme. దాని నిర్దిష్ట పని ఏమిటి?',
    options: [
      { id: 'a', text: 'Converts inactive trypsinogen to active trypsin', textTe: 'నిష్క్రియ trypsinogen ను సక్రియ trypsin గా మారుస్తుంది' },
      { id: 'b', text: 'Converts pepsinogen to pepsin', textTe: 'Pepsinogen ను pepsin గా మారుస్తుంది' },
      { id: 'c', text: 'Converts prothrombin to thrombin', textTe: 'Prothrombin ను thrombin గా మారుస్తుంది' },
      { id: 'd', text: 'Converts fibrinogen to fibrin', textTe: 'Fibrinogen ను fibrin గా మారుస్తుంది' },
    ],
    correctOptionId: 'a',
    explanation:
      'Enterokinase (also called enteropeptidase) is secreted by the mucosal cells of the duodenum. Its sole function is to activate trypsinogen (the inactive zymogen from the pancreas) into trypsin by cleaving a small peptide fragment. Trypsin then activates other pancreatic zymogens (chymotrypsinogen, procarboxypeptidase, proelastase) in a cascade. Pepsinogen is activated by HCl in the stomach. Prothrombin and fibrinogen conversions are part of blood clotting, not digestion.',
    explanationTe:
      'Enterokinase (దీనిని enteropeptidase అని కూడా అంటారు) డ్యూడెనమ్ యొక్క శ్లేష్మ కణాల ద్వారా స్రవించబడుతుంది. దీని ఏకైక పని trypsinogen (pancreas నుండి వచ్చే నిష్క్రియ zymogen) ను ఒక చిన్న peptide ను కత్తిరించడం ద్వారా trypsin గా సక్రియం చేయడం. Trypsin తర్వాత ఇతర pancreatic zymogens (chymotrypsinogen, procarboxypeptidase, proelastase) ను సక్రియం చేస్తుంది. Pepsinogen జఠరంలో HCl ద్వారా సక్రియమవుతుంది. Prothrombin మరియు fibrinogen మార్పిడులు రక్తం గడ్డకట్టే ప్రక్రియలో భాగం, జీర్ణక్రియలో కాదు.',
    eliminationTechnique:
      'Option (b) is wrong because pepsinogen is activated by hydrochloric acid (HCl) in the gastric lumen, not by any enzyme from the intestine. Options (c) and (d) deal with blood coagulation factors — prothrombin to thrombin requires thromboplastin and Ca2+, while thrombin converts fibrinogen to fibrin. These clotting reactions have nothing to do with intestinal digestion.',
    eliminationTechniqueTe:
      'ఎంపిక (b) తప్పు ఎందుకంటే pepsinogen జఠర కుహరంలో HCl ద్వారా సక్రియమవుతుంది, ఆంత్ర enzyme ద్వారా కాదు. ఎంపికలు (c) మరియు (d) రక్తం గడ్డకట్టే కారకాలకు సంబంధించినవి — prothrombin ను thrombin గా మార్చడానికి thromboplastin మరియు Ca2+ అవసరం, thrombin fibrinogen ను fibrin గా మారుస్తుంది. ఈ గడ్డకట్టే చర్యలకు ఆంత్ర జీర్ణక్రియతో సంబంధం లేదు.',
    difficulty: 'hard',
  },
  {
    id: 'zoo-hp-004',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Which of the following is NOT a function of hydrochloric acid (HCl) secreted in the stomach?',
    textTe: 'కింది వాటిలో జఠరంలో స్రవించబడే hydrochloric acid (HCl) యొక్క పని కానిది ఏది?',
    options: [
      { id: 'a', text: 'Activating the proenzyme pepsinogen to pepsin', textTe: 'Proenzyme pepsinogen ను pepsin గా సక్రియం చేయడం' },
      { id: 'b', text: 'Providing an acidic medium (pH 1.8) optimal for pepsin activity', textTe: 'Pepsin చర్యకు అనుకూలమైన ఆమ్ల మాధ్యమం (pH 1.8) అందించడం' },
      { id: 'c', text: 'Killing most bacteria and other harmful organisms ingested with food', textTe: 'ఆహారంతో పాటు ప్రవేశించిన చాలా bacteria మరియు ఇతర హానికరమైన జీవులను చంపడం' },
      { id: 'd', text: 'Emulsification of dietary fats into smaller fat globules', textTe: 'ఆహార కొవ్వులను చిన్న కొవ్వు గోళాలుగా emulsification చేయడం' },
    ],
    correctOptionId: 'd',
    explanation:
      'HCl in the stomach serves three major functions: (1) it converts the inactive pepsinogen to its active form pepsin, (2) it maintains the highly acidic pH (~1.8) needed for pepsin to function, and (3) it acts as a germicide killing ingested microorganisms. Emulsification of fats is carried out by bile salts released into the duodenum from the gallbladder, not by HCl. HCl has no role in fat emulsification.',
    explanationTe:
      'జఠరంలోని HCl మూడు ప్రధాన పనులు చేస్తుంది: (1) నిష్క్రియ pepsinogen ను సక్రియ pepsin గా మారుస్తుంది, (2) pepsin పనిచేయడానికి అవసరమైన అధిక ఆమ్ల pH (~1.8) ను నిర్వహిస్తుంది, (3) తినిన సూక్ష్మజీవులను చంపే germicide గా పనిచేస్తుంది. కొవ్వుల emulsification పిత్తాశయం నుండి డ్యూడెనమ్‌లోకి విడుదలయ్యే పిత్త లవణాల ద్వారా జరుగుతుంది, HCl ద్వారా కాదు.',
    eliminationTechnique:
      'Options (a), (b), and (c) are all well-known functions of HCl listed in NCERT. Activating pepsinogen (a), maintaining acidic pH (b), and acting as a germicide (c) are all correct roles of gastric HCl. The only function that does NOT belong to HCl is emulsification of fats (d), which is exclusively performed by bile salts in the duodenum.',
    eliminationTechniqueTe:
      'ఎంపికలు (a), (b), మరియు (c) అన్నీ NCERT లో పేర్కొన్న HCl యొక్క ప్రసిద్ధ పనులు. Pepsinogen ను సక్రియం చేయడం (a), ఆమ్ల pH నిర్వహించడం (b), germicide గా పనిచేయడం (c) అన్నీ జఠర HCl యొక్క సరైన పాత్రలే. HCl కు చెందని ఏకైక పని కొవ్వుల emulsification (d), ఇది డ్యూడెనమ్‌లో పిత్త లవణాల ద్వారా మాత్రమే జరుగుతుంది.',
    difficulty: 'medium',
  },

  // ──────────────────────────────────────────────
  // BREATHING & GAS EXCHANGE (4 questions)
  // ──────────────────────────────────────────────
  {
    id: 'zoo-hp-005',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'The volume of air inspired or expired during normal quiet breathing is called:',
    textTe: 'సాధారణ ప్రశాంత శ్వాసక్రియ సమయంలో పీల్చే లేదా వదిలే గాలి పరిమాణాన్ని ఏమని అంటారు?',
    options: [
      { id: 'a', text: 'Tidal volume', textTe: 'Tidal volume' },
      { id: 'b', text: 'Residual volume', textTe: 'Residual volume' },
      { id: 'c', text: 'Vital capacity', textTe: 'Vital capacity' },
      { id: 'd', text: 'Inspiratory reserve volume', textTe: 'Inspiratory reserve volume' },
    ],
    correctOptionId: 'a',
    explanation:
      'Tidal volume (TV) is approximately 500 mL in an average adult and represents the volume of air inspired or expired during a single normal breath. Residual volume (~1200 mL) is air remaining in the lungs after a forceful expiration. Vital capacity is the maximum volume of air that can be exhaled after a maximum inhalation (TV + IRV + ERV). Inspiratory reserve volume (~2500-3000 mL) is the additional air that can be forcibly inhaled beyond the normal tidal inspiration.',
    explanationTe:
      'Tidal volume (TV) సగటు వయోజనుడిలో సుమారు 500 mL, ఇది ఒక సాధారణ శ్వాస సమయంలో పీల్చే లేదా వదిలే గాలి పరిమాణం. Residual volume (~1200 mL) బలవంతపు ఉచ్ఛ్వాస తర్వాత ఊపిరితిత్తులలో మిగిలిన గాలి. Vital capacity గరిష్ట పీల్చుకోలు తర్వాత వదలగలిగే గరిష్ట గాలి పరిమాణం (TV + IRV + ERV). Inspiratory reserve volume (~2500-3000 mL) సాధారణ tidal inspiration కంటే అదనంగా బలవంతంగా పీల్చగలిగే గాలి.',
    eliminationTechnique:
      'Residual volume (b) is the air that CANNOT be expelled even after forceful breathing — it stays in the lungs permanently. Vital capacity (c) is a combined capacity, not a single breath volume. Inspiratory reserve volume (d) refers to the EXTRA air forcefully inhaled beyond normal tidal breathing. None of these describe the air moved during a single quiet breath.',
    eliminationTechniqueTe:
      'Residual volume (b) బలవంతపు శ్వాస తర్వాత కూడా బయటకు రాలేని గాలి — ఇది శాశ్వతంగా ఊపిరితిత్తులలో ఉంటుంది. Vital capacity (c) ఒక మిశ్రమ సామర్థ్యం, ఒకే శ్వాస పరిమాణం కాదు. Inspiratory reserve volume (d) సాధారణ tidal శ్వాస కంటే అదనంగా బలవంతంగా పీల్చే గాలిని సూచిస్తుంది. వీటిలో ఏదీ ఒకే ప్రశాంత శ్వాస సమయంలో కదిలే గాలిని వర్ణించదు.',
    difficulty: 'easy',
  },
  {
    id: 'zoo-hp-006',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'The oxygen-haemoglobin dissociation curve shifts to the right (Bohr effect) under which of the following conditions?',
    textTe: 'Oxygen-haemoglobin dissociation వక్రం కింది ఏ పరిస్థితిలో కుడివైపుకు మారుతుంది (Bohr effect)?',
    options: [
      { id: 'a', text: 'Decrease in pCO2 and increase in pH', textTe: 'pCO2 తగ్గడం మరియు pH పెరగడం' },
      { id: 'b', text: 'Increase in pCO2 and decrease in pH', textTe: 'pCO2 పెరగడం మరియు pH తగ్గడం' },
      { id: 'c', text: 'Decrease in temperature', textTe: 'ఉష్ణోగ్రత తగ్గడం' },
      { id: 'd', text: 'Decrease in H+ ion concentration', textTe: 'H+ ion సాంద్రత తగ్గడం' },
    ],
    correctOptionId: 'b',
    explanation:
      'The Bohr effect describes how the oxygen-haemoglobin dissociation curve shifts to the right when pCO2 increases, pH decreases (more acidic/more H+ ions), or temperature increases. A rightward shift means haemoglobin releases oxygen more readily to metabolically active tissues. This is physiologically significant because working muscles produce more CO2 and heat, creating conditions where they receive more O2. Conversely, a leftward shift (low pCO2, high pH, low temperature) means haemoglobin holds onto O2 more tightly.',
    explanationTe:
      'Bohr effect అనేది pCO2 పెరిగినప్పుడు, pH తగ్గినప్పుడు (ఎక్కువ ఆమ్లత/ఎక్కువ H+ ions), లేదా ఉష్ణోగ్రత పెరిగినప్పుడు oxygen-haemoglobin dissociation వక్రం కుడివైపుకు మారడాన్ని వివరిస్తుంది. కుడివైపు మార్పు అంటే haemoglobin జీవక్రియాత్మకంగా చురుకైన కణజాలాలకు oxy gen ను మరింత సులభంగా విడుదల చేస్తుంది. పనిచేసే కండరాలు ఎక్కువ CO2 మరియు వేడిని ఉత్పత్తి చేస్తాయి కాబట్టి ఇది శరీరధర్మపరంగా ముఖ్యమైనది.',
    eliminationTechnique:
      'Option (a) describes conditions opposite to the Bohr effect — decreased pCO2 and increased pH cause a leftward shift, meaning Hb binds O2 more tightly. Option (c) is wrong because decreased temperature causes a leftward shift, not rightward. Option (d) mentions decrease in H+ concentration, which is the same as increased pH (more alkaline), causing a leftward shift. Only increased pCO2 with decreased pH (option b) causes the rightward Bohr shift.',
    eliminationTechniqueTe:
      'ఎంపిక (a) Bohr effect కు వ్యతిరేకమైన పరిస్థితులను వివరిస్తుంది — pCO2 తగ్గడం మరియు pH పెరగడం ఎడమవైపు మార్పుకు కారణమవుతుంది. ఎంపిక (c) తప్పు ఎందుకంటే ఉష్ణోగ్రత తగ్గడం ఎడమవైపు మార్పును కలిగిస్తుంది. ఎంపిక (d) H+ సాంద్రత తగ్గడం అంటే pH పెరగడం (ఎక్కువ క్షారత), ఇది ఎడమవైపు మార్పును కలిగిస్తుంది. pCO2 పెరగడం మరియు pH తగ్గడం (ఎంపిక b) మాత్రమే కుడివైపు Bohr shift కు కారణమవుతుంది.',
    difficulty: 'medium',
  },
  {
    id: 'zoo-hp-007',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Approximately what percentage of carbon dioxide is transported in the blood as bicarbonate ions (HCO3-)?',
    textTe: 'రక్తంలో సుమారు ఎంత శాతం carbon dioxide bicarbonate ions (HCO3-) రూపంలో రవాణా చేయబడుతుంది?',
    options: [
      { id: 'a', text: 'About 7%', textTe: 'సుమారు 7%' },
      { id: 'b', text: 'About 20-25%', textTe: 'సుమారు 20-25%' },
      { id: 'c', text: 'About 70%', textTe: 'సుమారు 70%' },
      { id: 'd', text: 'About 97%', textTe: 'సుమారు 97%' },
    ],
    correctOptionId: 'c',
    explanation:
      'CO2 is transported in the blood in three forms: (1) About 70% as bicarbonate ions (HCO3-) — CO2 enters RBCs, combines with water in the presence of carbonic anhydrase to form H2CO3, which dissociates into H+ and HCO3-. The HCO3- ions then move out into the plasma (chloride shift). (2) About 20-25% binds to the amino groups of haemoglobin to form carbaminohaemoglobin. (3) About 7% is dissolved directly in blood plasma. This knowledge is frequently tested in NEET.',
    explanationTe:
      'CO2 రక్తంలో మూడు రూపాలలో రవాణా చేయబడుతుంది: (1) సుమారు 70% bicarbonate ions (HCO3-) గా — CO2 RBCs లోకి ప్రవేశిస్తుంది, carbonic anhydrase సమక్షంలో నీటితో కలిసి H2CO3 ను ఏర్పరుస్తుంది, ఇది H+ మరియు HCO3- గా విడిపోతుంది. HCO3- ions plasma లోకి కదులుతాయి (chloride shift). (2) సుమారు 20-25% haemoglobin యొక్క amino groups తో బంధించబడి carbaminohaemoglobin ను ఏర్పరుస్తుంది. (3) సుమారు 7% నేరుగా రక్త plasma లో కరిగి ఉంటుంది.',
    eliminationTechnique:
      'Option (a) 7% represents dissolved CO2 in plasma, which is the smallest fraction. Option (b) 20-25% represents CO2 bound to haemoglobin as carbaminohaemoglobin. Option (d) 97% is actually the percentage of O2 transported by haemoglobin as oxyhaemoglobin, not related to CO2 transport. Remember the 70-25-7 rule for CO2: bicarbonate (70%) > carbamino (25%) > dissolved (7%).',
    eliminationTechniqueTe:
      'ఎంపిక (a) 7% plasma లో కరిగిన CO2 ను సూచిస్తుంది, ఇది అతి చిన్న భాగం. ఎంపిక (b) 20-25% haemoglobin తో బంధించబడిన CO2 ను carbaminohaemoglobin గా సూచిస్తుంది. ఎంపిక (d) 97% వాస్తవానికి oxyhaemoglobin గా haemoglobin ద్వారా రవాణా చేయబడే O2 శాతం, CO2 రవాణాకు సంబంధం లేదు. CO2 కోసం 70-25-7 నియమాన్ని గుర్తుంచుకోండి: bicarbonate (70%) > carbamino (25%) > కరిగిన (7%).',
    difficulty: 'hard',
  },
  {
    id: 'zoo-hp-008',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'During the process of inspiration (inhalation), what happens to the diaphragm?',
    textTe: 'శ్వాస పీల్చే ప్రక్రియ (inspiration) సమయంలో, diaphragm కు ఏమి జరుగుతుంది?',
    options: [
      { id: 'a', text: 'It relaxes and becomes dome-shaped, moving upward', textTe: 'ఇది సడలించి గుమ్మటం ఆకారంలో పైకి కదులుతుంది' },
      { id: 'b', text: 'It does not move during breathing', textTe: 'శ్వాసక్రియ సమయంలో ఇది కదలదు' },
      { id: 'c', text: 'It contracts and moves upward into the thoracic cavity', textTe: 'ఇది సంకోచించి ఛాతీ కుహరంలోకి పైకి కదులుతుంది' },
      { id: 'd', text: 'It contracts and flattens, moving downward to increase thoracic volume', textTe: 'ఇది సంకోచించి చదును అవుతుంది, ఛాతీ కుహర పరిమాణాన్ని పెంచడానికి క్రిందికి కదులుతుంది' },
    ],
    correctOptionId: 'd',
    explanation:
      'During inspiration, the diaphragm (a dome-shaped muscular partition between the thoracic and abdominal cavities) contracts. When it contracts, it flattens and moves downward, increasing the volume of the thoracic cavity. This increase in volume decreases the intra-pulmonary pressure below atmospheric pressure, causing air to rush into the lungs. During expiration, the diaphragm relaxes and returns to its dome shape, reducing thoracic volume.',
    explanationTe:
      'శ్వాస పీల్చే సమయంలో, diaphragm (ఛాతీ మరియు ఉదర కుహరాల మధ్య గుమ్మటం ఆకారపు కండర విభజన) సంకోచిస్తుంది. అది సంకోచించినప్పుడు, ఇది చదును అవుతుంది మరియు క్రిందికి కదులుతుంది, ఛాతీ కుహర పరిమాణాన్ని పెంచుతుంది. ఈ పరిమాణ పెరుగుదల ఊపిరితిత్తుల లోపలి ఒత్తిడిని వాతావరణ ఒత్తిడి కంటే తగ్గిస్తుంది, దీని వల్ల గాలి ఊపిరితిత్తులలోకి ప్రవేశిస్తుంది. ఉచ్ఛ్వాస సమయంలో, diaphragm సడలించి తన గుమ్మటం ఆకారానికి తిరిగి వస్తుంది.',
    eliminationTechnique:
      'Option (a) describes what happens during expiration, not inspiration — relaxation and dome shape mean the diaphragm is returning to its resting position. Option (b) is factually wrong because the diaphragm is the primary muscle of respiration. Option (c) is contradictory — when the diaphragm contracts it moves downward, not upward. Only option (d) correctly describes contraction + flattening + downward movement.',
    eliminationTechniqueTe:
      'ఎంపిక (a) ఉచ్ఛ్వాస సమయంలో జరిగేదాన్ని వర్ణిస్తుంది, శ్వాస పీల్చేటప్పుడు కాదు — సడలింపు మరియు గుమ్మటం ఆకారం అంటే diaphragm తన విశ్రాంతి స్థితికి తిరిగి వస్తోంది. ఎంపిక (b) వాస్తవికంగా తప్పు ఎందుకంటే diaphragm శ్వాసక్రియ యొక్క ప్రాథమిక కండరం. ఎంపిక (c) విరుద్ధమైనది — diaphragm సంకోచించినప్పుడు ఇది క్రిందికి కదులుతుంది, పైకి కాదు.',
    difficulty: 'easy',
  },

  // ──────────────────────────────────────────────
  // BODY FLUIDS & CIRCULATION (5 questions)
  // ──────────────────────────────────────────────
  {
    id: 'zoo-hp-009',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'A person with blood group AB can receive blood from all blood groups and is called a universal recipient. This is because:',
    textTe: 'AB రక్త గ్రూపు ఉన్న వ్యక్తి అన్ని రక్త గ్రూపుల నుండి రక్తం స్వీకరించగలడు మరియు సార్వత్రిక గ్రహీత అని పిలువబడతాడు. దీనికి కారణం:',
    options: [
      { id: 'a', text: 'Their plasma contains both anti-A and anti-B antibodies', textTe: 'వారి plasma లో anti-A మరియు anti-B antibodies రెండూ ఉంటాయి' },
      { id: 'b', text: 'Their plasma contains neither anti-A nor anti-B antibodies', textTe: 'వారి plasma లో anti-A లేదా anti-B antibodies ఏవీ ఉండవు' },
      { id: 'c', text: 'Their RBCs have no antigens on the surface', textTe: 'వారి RBCs ఉపరితలంపై ఎటువంటి antigens ఉండవు' },
      { id: 'd', text: 'Their blood can clot faster than other blood groups', textTe: 'వారి రక్తం ఇతర రక్త గ్రూపుల కంటే వేగంగా గడ్డకడుతుంది' },
    ],
    correctOptionId: 'b',
    explanation:
      'Blood group AB individuals have both A and B antigens on their RBC surfaces. Since their body already recognizes both antigens as self, their plasma does NOT produce anti-A or anti-B antibodies. This means when they receive blood from A, B, AB, or O donors, there are no antibodies in the recipient\'s plasma to agglutinate the donor RBCs. That is why AB is called the universal recipient. In contrast, blood group O has neither antigen but both antibodies, making it the universal donor.',
    explanationTe:
      'AB రక్త గ్రూపు వ్యక్తుల RBC ఉపరితలంపై A మరియు B antigens రెండూ ఉంటాయి. వారి శరీరం రెండు antigens ను స్వంతంగా గుర్తించడం వల్ల, వారి plasma లో anti-A లేదా anti-B antibodies ఉత్పత్తి చేయబడవు. A, B, AB, లేదా O donors నుండి రక్తం స్వీకరించినప్పుడు, గ్రహీత plasma లో donor RBCs ను agglutinate చేసే antibodies ఉండవు. అందుకే AB ను సార్వత్రిక గ్రహీత అంటారు. దీనికి విరుద్ధంగా, O రక్త గ్రూపులో ఎటువంటి antigen ఉండదు కానీ రెండు antibodies ఉంటాయి, ఇది సార్వత్రిక దాత.',
    eliminationTechnique:
      'Option (a) is the exact opposite — having both antibodies would mean AB blood rejects ALL donor blood, which is the situation of blood group O. Option (c) is wrong because AB has BOTH A and B antigens on RBCs, not none. Option (d) is irrelevant — blood clotting speed has no connection to transfusion compatibility. The key concept is the ABSENCE of antibodies in recipient plasma.',
    eliminationTechniqueTe:
      'ఎంపిక (a) పూర్తిగా వ్యతిరేకం — రెండు antibodies ఉంటే AB రక్తం అన్ని donor రక్తాన్ని తిరస్కరిస్తుంది, ఇది O రక్త గ్రూపు పరిస్థితి. ఎంపిక (c) తప్పు ఎందుకంటే AB కు RBCs పై A మరియు B antigens రెండూ ఉంటాయి. ఎంపిక (d) అసంబద్ధం — రక్తం గడ్డకట్టే వేగానికి transfusion అనుకూలతతో సంబంధం లేదు.',
    difficulty: 'easy',
  },
  {
    id: 'zoo-hp-010',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'During the cardiac cycle, the first heart sound ("lub") is produced by the:',
    textTe: 'Cardiac cycle సమయంలో, మొదటి హృదయ ధ్వని ("lub") దేని ద్వారా ఉత్పత్తి అవుతుంది?',
    options: [
      { id: 'a', text: 'Closure of the atrioventricular (bicuspid and tricuspid) valves', textTe: 'Atrioventricular (bicuspid మరియు tricuspid) valves మూసుకోవడం' },
      { id: 'b', text: 'Closure of the semilunar (aortic and pulmonary) valves', textTe: 'Semilunar (aortic మరియు pulmonary) valves మూసుకోవడం' },
      { id: 'c', text: 'Opening of the atrioventricular valves', textTe: 'Atrioventricular valves తెరుచుకోవడం' },
      { id: 'd', text: 'Opening of the semilunar valves', textTe: 'Semilunar valves తెరుచుకోవడం' },
    ],
    correctOptionId: 'a',
    explanation:
      'The first heart sound, known as "lub" (S1), is produced at the beginning of ventricular systole when the atrioventricular valves (mitral/bicuspid on the left, tricuspid on the right) close to prevent backflow of blood into the atria. The second heart sound, known as "dub" (S2), is produced at the beginning of ventricular diastole by the closure of the semilunar valves (aortic and pulmonary). Valve openings generally do not produce audible sounds under normal conditions.',
    explanationTe:
      'మొదటి హృదయ ధ్వని "lub" (S1) ventricular systole ప్రారంభంలో ఉత్పత్తి అవుతుంది, అప్పుడు atrioventricular valves (ఎడమవైపు mitral/bicuspid, కుడివైపు tricuspid) atria లోకి రక్తం వెనక్కి ప్రవహించకుండా మూసుకుంటాయి. రెండవ హృదయ ధ్వని "dub" (S2) ventricular diastole ప్రారంభంలో semilunar valves (aortic మరియు pulmonary) మూసుకోవడం ద్వారా ఉత్పత్తి అవుతుంది. Valve తెరుచుకోవడం సాధారణ పరిస్థితులలో వినగలిగే ధ్వనులను ఉత్పత్తి చేయదు.',
    eliminationTechnique:
      'Option (b) describes the second heart sound "dub" (S2), not the first. Options (c) and (d) can both be eliminated because valve openings do not produce the characteristic heart sounds heard through a stethoscope — it is the closure of valves (with the abrupt stop of blood flow and vibrations) that generates sounds.',
    eliminationTechniqueTe:
      'ఎంపిక (b) రెండవ హృదయ ధ్వని "dub" (S2) ను వర్ణిస్తుంది, మొదటిది కాదు. ఎంపికలు (c) మరియు (d) రెండూ తొలగించవచ్చు ఎందుకంటే valve తెరుచుకోవడం stethoscope ద్వారా వినగలిగే హృదయ ధ్వనులను ఉత్పత్తి చేయదు — valve మూసుకోవడం (రక్త ప్రవాహం ఆకస్మిక ఆగడం మరియు కంపనాలు) మాత్రమే ధ్వనులను ఉత్పత్తి చేస్తుంది.',
    difficulty: 'medium',
  },
  {
    id: 'zoo-hp-011',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'In a standard electrocardiogram (ECG), the QRS complex represents:',
    textTe: 'ఒక ప్రామాణిక electrocardiogram (ECG) లో, QRS complex దేనిని సూచిస్తుంది?',
    options: [
      { id: 'a', text: 'Depolarization of the atria', textTe: 'Atria యొక్క depolarization' },
      { id: 'b', text: 'Repolarization of the atria', textTe: 'Atria యొక్క repolarization' },
      { id: 'c', text: 'Repolarization of the ventricles', textTe: 'Ventricles యొక్క repolarization' },
      { id: 'd', text: 'Depolarization of the ventricles', textTe: 'Ventricles యొక్క depolarization' },
    ],
    correctOptionId: 'd',
    explanation:
      'In an ECG, the P wave represents atrial depolarization (spread of excitation from the SA node through both atria). The QRS complex represents ventricular depolarization — the spread of electrical impulse through the ventricular myocardium via the bundle of His and Purkinje fibres. The T wave represents ventricular repolarization (recovery of the ventricles). Atrial repolarization is masked by the large QRS complex and is not visible as a separate wave.',
    explanationTe:
      'ECG లో, P wave atrial depolarization ను సూచిస్తుంది (SA node నుండి రెండు atria ద్వారా ఉత్తేజం వ్యాప్తి). QRS complex ventricular depolarization ను సూచిస్తుంది — Bundle of His మరియు Purkinje fibres ద్వారా ventricular myocardium లో విద్యుత్ ప్రేరణ వ్యాప్తి. T wave ventricular repolarization ను సూచిస్తుంది (ventricles పునరుద్ధరణ). Atrial repolarization పెద్ద QRS complex ద్వారా కప్పబడి ప్రత్యేక తరంగంగా కనిపించదు.',
    eliminationTechnique:
      'Option (a) is wrong because atrial depolarization is represented by the P wave, not the QRS complex. Option (b) is wrong because atrial repolarization occurs simultaneously with ventricular depolarization and is hidden within the QRS complex. Option (c) is wrong because ventricular repolarization is shown by the T wave. The QRS complex, being the largest deflection in ECG, specifically represents ventricular depolarization.',
    eliminationTechniqueTe:
      'ఎంపిక (a) తప్పు ఎందుకంటే atrial depolarization P wave ద్వారా సూచించబడుతుంది, QRS complex ద్వారా కాదు. ఎంపిక (b) తప్పు ఎందుకంటే atrial repolarization ventricular depolarization తో ఏకకాలంలో జరిగి QRS complex లో దాగి ఉంటుంది. ఎంపిక (c) తప్పు ఎందుకంటే ventricular repolarization T wave ద్వారా చూపబడుతుంది. ECG లో అతిపెద్ద deflection అయిన QRS complex నిర్దిష్టంగా ventricular depolarization ను సూచిస్తుంది.',
    difficulty: 'hard',
  },
  {
    id: 'zoo-hp-012',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'In the human circulatory system, "double circulation" means that blood:',
    textTe: 'మానవ రక్తప్రసరణ వ్యవస్థలో, "double circulation" అంటే రక్తం:',
    options: [
      { id: 'a', text: 'Flows through the heart only once during one complete circuit', textTe: 'ఒక పూర్తి వలయంలో హృదయం గుండా ఒక్కసారి మాత్రమే ప్రవహిస్తుంది' },
      { id: 'b', text: 'Flows through arteries and veins simultaneously', textTe: 'ధమనులు మరియు సిరల గుండా ఏకకాలంలో ప్రవహిస్తుంది' },
      { id: 'c', text: 'Passes through the heart twice during one complete circuit through the body', textTe: 'శరీరం గుండా ఒక పూర్తి వలయంలో హృదయం గుండా రెండుసార్లు ప్రవహిస్తుంది' },
      { id: 'd', text: 'Contains double the number of RBCs compared to WBCs', textTe: 'WBCs కంటే రెట్టింపు RBCs కలిగి ఉంటుంది' },
    ],
    correctOptionId: 'c',
    explanation:
      'Double circulation refers to the fact that blood passes through the heart twice to complete one full circuit. First, deoxygenated blood travels from the heart to the lungs and back (pulmonary circulation). Then, oxygenated blood travels from the heart to the body tissues and back (systemic circulation). This is an important feature of the four-chambered heart found in mammals and birds, ensuring complete separation of oxygenated and deoxygenated blood for maximum efficiency.',
    explanationTe:
      'Double circulation అంటే ఒక పూర్తి వలయం పూర్తి చేయడానికి రక్తం హృదయం గుండా రెండుసార్లు ప్రవహిస్తుంది. మొదట, ఆక్సిజన్ రహిత రక్తం హృదయం నుండి ఊపిరితిత్తులకు వెళ్ళి తిరిగి వస్తుంది (pulmonary circulation). తర్వాత, ఆక్సిజన్ సమృద్ధ రక్తం హృదయం నుండి శరీర కణజాలాలకు వెళ్ళి తిరిగి వస్తుంది (systemic circulation). ఇది క్షీరదాలు మరియు పక్షులలో కనిపించే నాలుగు గదుల హృదయం యొక్క ముఖ్యమైన లక్షణం.',
    eliminationTechnique:
      'Option (a) describes single circulation found in fish, where blood passes through the heart only once per circuit. Option (b) is a meaningless statement — blood always flows through arteries and veins as part of the same circuit. Option (d) is completely irrelevant; cell counts have nothing to do with the concept of double circulation. The defining feature of double circulation is blood visiting the heart twice per complete cycle.',
    eliminationTechniqueTe:
      'ఎంపిక (a) చేపలలో కనిపించే single circulation ను వర్ణిస్తుంది, ఇక్కడ రక్తం ఒక వలయంలో హృదయం గుండా ఒక్కసారి మాత్రమే ప్రవహిస్తుంది. ఎంపిక (b) అర్థరహిత ప్రకటన — రక్తం ఎల్లప్పుడూ ఒకే వలయంలో భాగంగా ధమనులు మరియు సిరల గుండా ప్రవహిస్తుంది. ఎంపిక (d) పూర్తిగా అసంబద్ధం; కణ సంఖ్యలకు double circulation భావనతో సంబంధం లేదు.',
    difficulty: 'medium',
  },
  {
    id: 'zoo-hp-013',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'The normal blood pressure of a healthy young adult (systolic/diastolic) is approximately:',
    textTe: 'ఆరోగ్యకరమైన యువ వయోజనుడి సాధారణ రక్తపోటు (systolic/diastolic) సుమారు ఎంత?',
    options: [
      { id: 'a', text: '120/80 mmHg', textTe: '120/80 mmHg' },
      { id: 'b', text: '140/100 mmHg', textTe: '140/100 mmHg' },
      { id: 'c', text: '160/90 mmHg', textTe: '160/90 mmHg' },
      { id: 'd', text: '90/60 mmHg', textTe: '90/60 mmHg' },
    ],
    correctOptionId: 'a',
    explanation:
      'The normal blood pressure for a healthy young adult is 120/80 mmHg, where 120 mmHg is the systolic pressure (pressure in arteries when the heart contracts/ventricles systole) and 80 mmHg is the diastolic pressure (pressure in arteries when the heart relaxes/ventricles diastole). A blood pressure of 140/90 mmHg or above is considered hypertension. Values like 90/60 mmHg or below may indicate hypotension.',
    explanationTe:
      'ఆరోగ్యకరమైన యువ వయోజనుడికి సాధారణ రక్తపోటు 120/80 mmHg, ఇక్కడ 120 mmHg systolic pressure (హృదయం సంకోచించినప్పుడు ధమనులలో ఒత్తిడి) మరియు 80 mmHg diastolic pressure (హృదయం సడలించినప్పుడు ధమనులలో ఒత్తిడి). 140/90 mmHg లేదా అంతకంటే ఎక్కువ రక్తపోటు hypertension గా పరిగణించబడుతుంది. 90/60 mmHg లేదా తక్కువ విలువలు hypotension ను సూచించవచ్చు.',
    eliminationTechnique:
      'Option (b) 140/100 mmHg is above normal and falls in the hypertensive range — this would be a clinical concern. Option (c) 160/90 mmHg represents stage-2 hypertension. Option (d) 90/60 mmHg is below normal and could indicate hypotension. The standard value taught in NCERT and asked in NEET is 120/80 mmHg.',
    eliminationTechniqueTe:
      'ఎంపిక (b) 140/100 mmHg సాధారణ కంటే ఎక్కువ మరియు hypertensive పరిధిలో ఉంటుంది. ఎంపిక (c) 160/90 mmHg stage-2 hypertension ను సూచిస్తుంది. ఎంపిక (d) 90/60 mmHg సాధారణ కంటే తక్కువ మరియు hypotension ను సూచించవచ్చు. NCERT లో బోధించబడే మరియు NEET లో అడిగే ప్రామాణిక విలువ 120/80 mmHg.',
    difficulty: 'easy',
  },

  // ──────────────────────────────────────────────
  // EXCRETORY SYSTEM (4 questions)
  // ──────────────────────────────────────────────
  {
    id: 'zoo-hp-014',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Podocytes are specialized epithelial cells found in which part of the nephron?',
    textTe: 'Podocytes అనేవి nephron లోని ఏ భాగంలో కనిపించే ప్రత్యేక epithelial కణాలు?',
    options: [
      { id: 'a', text: 'Proximal convoluted tubule (PCT)', textTe: 'Proximal convoluted tubule (PCT)' },
      { id: 'b', text: 'Inner wall of Bowman\'s capsule', textTe: 'Bowman\'s capsule యొక్క లోపలి గోడ' },
      { id: 'c', text: 'Ascending limb of loop of Henle', textTe: 'Loop of Henle యొక్క ఆరోహణ భుజం' },
      { id: 'd', text: 'Collecting duct', textTe: 'Collecting duct' },
    ],
    correctOptionId: 'b',
    explanation:
      'Podocytes are specialized cells that form the visceral (inner) layer of Bowman\'s capsule. They have foot-like projections called pedicels that wrap around the glomerular capillaries, creating filtration slits. These slits, along with the capillary endothelium and basement membrane, form the three-layered filtration barrier that allows small molecules (water, salts, glucose, urea) to pass through while retaining large proteins and blood cells. This is essential for ultrafiltration in the glomerulus.',
    explanationTe:
      'Podocytes Bowman\'s capsule యొక్క visceral (లోపలి) పొరను ఏర్పరిచే ప్రత్యేక కణాలు. వాటికి pedicels అనే పాద-వంటి ప్రక్షేపాలు ఉంటాయి, ఇవి glomerular capillaries చుట్టూ చుట్టుకుని filtration slits ను సృష్టిస్తాయి. ఈ slits, capillary endothelium మరియు basement membrane తో కలిసి, చిన్న అణువులు (నీరు, లవణాలు, glucose, urea) ప్రవేశించడానికి అనుమతించే మూడు-పొరల filtration అవరోధాన్ని ఏర్పరుస్తాయి, పెద్ద proteins మరియు రక్త కణాలను నిలుపుకుంటాయి.',
    eliminationTechnique:
      'The PCT (option a) is lined by cuboidal epithelium with a brush border for reabsorption, not podocytes. The ascending limb of Henle (option c) has simple epithelium involved in active transport of NaCl, not podocytes. The collecting duct (option d) has principal cells and intercalated cells for water and ion balance. Podocytes are exclusively associated with the glomerular filtration apparatus in Bowman\'s capsule.',
    eliminationTechniqueTe:
      'PCT (ఎంపిక a) పునశ్శోషణ కోసం brush border తో cuboidal epithelium కలిగి ఉంటుంది, podocytes కాదు. Henle యొక్క ఆరోహణ భుజం (ఎంపిక c) NaCl సక్రియ రవాణా కోసం సాధారణ epithelium కలిగి ఉంటుంది. Collecting duct (ఎంపిక d) నీరు మరియు ion సమతుల్యత కోసం principal cells మరియు intercalated cells కలిగి ఉంటుంది. Podocytes ప్రత్యేకంగా Bowman\'s capsule లోని glomerular filtration యంత్రాంగంతో సంబంధం కలిగి ఉంటాయి.',
    difficulty: 'medium',
  },
  {
    id: 'zoo-hp-015',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'The counter-current mechanism that helps in the concentration of urine is primarily maintained by:',
    textTe: 'మూత్ర సాంద్రీకరణలో సహాయపడే counter-current mechanism ను ప్రధానంగా ఏవి నిర్వహిస్తాయి?',
    options: [
      { id: 'a', text: 'Proximal convoluted tubule and distal convoluted tubule', textTe: 'Proximal convoluted tubule మరియు distal convoluted tubule' },
      { id: 'b', text: 'Glomerulus and Bowman\'s capsule', textTe: 'Glomerulus మరియు Bowman\'s capsule' },
      { id: 'c', text: 'Henle\'s loop and vasa recta', textTe: 'Henle\'s loop మరియు vasa recta' },
      { id: 'd', text: 'Collecting duct and renal pelvis', textTe: 'Collecting duct మరియు renal pelvis' },
    ],
    correctOptionId: 'c',
    explanation:
      'The counter-current mechanism involves two parallel structures with fluid flowing in opposite directions: (1) the descending and ascending limbs of the loop of Henle (counter-current multiplier), and (2) the vasa recta — peritubular capillaries running alongside the loop (counter-current exchanger). The descending limb is permeable to water but not NaCl, while the ascending limb actively pumps NaCl out but is impermeable to water. This creates an increasing osmotic gradient in the medullary interstitium (from 300 mOsm in the cortex to 1200 mOsm in the inner medulla). The vasa recta maintains this gradient by acting as a counter-current exchanger.',
    explanationTe:
      'Counter-current mechanism రెండు సమాంతర నిర్మాణాలను కలిగి ఉంటుంది, వాటిలో ద్రవం వ్యతిరేక దిశలలో ప్రవహిస్తుంది: (1) loop of Henle యొక్క అవరోహణ మరియు ఆరోహణ భుజాలు (counter-current multiplier), మరియు (2) vasa recta — loop పక్కన ప్రవహించే peritubular capillaries (counter-current exchanger). అవరోహణ భుజం నీటికి పారగమ్యం కానీ NaCl కు కాదు, ఆరోహణ భుజం NaCl ను బయటకు పంపుతుంది కానీ నీటికి అపారగమ్యం. ఇది medullary interstitium లో పెరుగుతున్న osmotic gradient ను సృష్టిస్తుంది (cortex లో 300 mOsm నుండి inner medulla లో 1200 mOsm వరకు).',
    eliminationTechnique:
      'Option (a) is wrong because PCT and DCT are located in the cortex and are involved in reabsorption and secretion, not in establishing the medullary osmotic gradient. Option (b) is wrong because the glomerulus and Bowman\'s capsule are involved in filtration, not concentration. Option (d) is partially misleading — while the collecting duct responds to ADH for final water reabsorption, it is not part of the counter-current mechanism itself. The renal pelvis only collects urine.',
    eliminationTechniqueTe:
      'ఎంపిక (a) తప్పు ఎందుకంటే PCT మరియు DCT cortex లో ఉంటాయి మరియు పునశ్శోషణ మరియు స్రావంలో పాల్గొంటాయి, medullary osmotic gradient ను స్థాపించడంలో కాదు. ఎంపిక (b) తప్పు ఎందుకంటే glomerulus మరియు Bowman\'s capsule filtration లో పాల్గొంటాయి, సాంద్రీకరణలో కాదు. ఎంపిక (d) భాగస్వామ్యంగా తప్పుదారి పట్టిస్తుంది — collecting duct ADH కు ప్రతిస్పందిస్తుంది కానీ counter-current mechanism లో భాగం కాదు. Renal pelvis మూత్రాన్ని మాత్రమే సేకరిస్తుంది.',
    difficulty: 'hard',
  },
  {
    id: 'zoo-hp-016',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'The process by which blood is filtered through the glomerular capillaries into Bowman\'s capsule is called:',
    textTe: 'Glomerular capillaries ద్వారా రక్తం Bowman\'s capsule లోకి వడపోత చేయబడే ప్రక్రియను ఏమని అంటారు?',
    options: [
      { id: 'a', text: 'Tubular secretion', textTe: 'Tubular secretion' },
      { id: 'b', text: 'Tubular reabsorption', textTe: 'Tubular reabsorption' },
      { id: 'c', text: 'Osmosis', textTe: 'Osmosis' },
      { id: 'd', text: 'Glomerular filtration (ultrafiltration)', textTe: 'Glomerular filtration (ultrafiltration)' },
    ],
    correctOptionId: 'd',
    explanation:
      'Glomerular filtration, also called ultrafiltration, is the first step of urine formation. Blood enters the glomerulus through the afferent arteriole at high pressure. The high glomerular capillary blood pressure (about 60 mmHg) forces water, small solutes (glucose, amino acids, urea, ions), and small proteins through the filtration membrane (fenestrated endothelium, basement membrane, and podocytes) into Bowman\'s capsule. About 125 mL/min of filtrate is formed (GFR = 125 mL/min or about 180 litres/day).',
    explanationTe:
      'Glomerular filtration, దీనిని ultrafiltration అని కూడా అంటారు, మూత్ర ఏర్పాటు యొక్క మొదటి దశ. రక్తం afferent arteriole ద్వారా అధిక ఒత్తిడిలో glomerulus లోకి ప్రవేశిస్తుంది. అధిక glomerular capillary రక్తపోటు (సుమారు 60 mmHg) నీరు, చిన్న ద్రావకాలు (glucose, amino acids, urea, ions), మరియు చిన్న proteins ను filtration membrane ద్వారా Bowman\'s capsule లోకి బలవంతం చేస్తుంది. సుమారు 125 mL/min filtrate ఏర్పడుతుంది (GFR = 125 mL/min లేదా రోజుకు సుమారు 180 litres).',
    eliminationTechnique:
      'Tubular secretion (option a) occurs later in the nephron when substances like H+, K+, and ammonia are actively secreted from peritubular capillaries into the tubular fluid. Tubular reabsorption (option b) is the process of taking back useful substances from the filtrate in the tubules. Osmosis (option c) is a general term for water movement across a semipermeable membrane and does not specifically describe the filtration process in the glomerulus.',
    eliminationTechniqueTe:
      'Tubular secretion (ఎంపిక a) nephron లో తర్వాత జరుగుతుంది, అప్పుడు H+, K+, మరియు ammonia వంటి పదార్థాలు peritubular capillaries నుండి tubular fluid లోకి సక్రియంగా స్రవించబడతాయి. Tubular reabsorption (ఎంపిక b) tubules లో filtrate నుండి ఉపయోగకరమైన పదార్థాలను తిరిగి తీసుకునే ప్రక్రియ. Osmosis (ఎంపిక c) semipermeable membrane ద్వారా నీటి కదలికకు సాధారణ పదం మరియు glomerulus లో filtration ప్రక్రియను నిర్దిష్టంగా వర్ణించదు.',
    difficulty: 'easy',
  },
  {
    id: 'zoo-hp-017',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Antidiuretic hormone (ADH) primarily acts on which part of the nephron to regulate water reabsorption?',
    textTe: 'Antidiuretic hormone (ADH) నీటి పునశ్శోషణను నియంత్రించడానికి nephron లోని ఏ భాగంపై ప్రధానంగా పనిచేస్తుంది?',
    options: [
      { id: 'a', text: 'Distal convoluted tubule (DCT) and collecting duct', textTe: 'Distal convoluted tubule (DCT) మరియు collecting duct' },
      { id: 'b', text: 'Proximal convoluted tubule only', textTe: 'Proximal convoluted tubule మాత్రమే' },
      { id: 'c', text: 'Glomerulus', textTe: 'Glomerulus' },
      { id: 'd', text: 'Descending limb of loop of Henle only', textTe: 'Loop of Henle యొక్క అవరోహణ భుజం మాత్రమే' },
    ],
    correctOptionId: 'a',
    explanation:
      'ADH (also called vasopressin) is produced by the hypothalamus and released from the posterior pituitary gland. It acts on the cells of the distal convoluted tubule (DCT) and the collecting duct by inserting aquaporin-2 water channels into their membranes, making them more permeable to water. This increases water reabsorption from the tubular fluid back into the blood, producing concentrated (low volume) urine. In the absence of ADH, these structures become impermeable to water, resulting in dilute (high volume) urine — a condition seen in diabetes insipidus.',
    explanationTe:
      'ADH (దీనిని vasopressin అని కూడా అంటారు) hypothalamus ద్వారా ఉత్పత్తి చేయబడి posterior pituitary gland నుండి విడుదల చేయబడుతుంది. ఇది DCT మరియు collecting duct కణాలపై పనిచేసి వాటి membranes లోకి aquaporin-2 నీటి channels ను చేర్చడం ద్వారా నీటికి మరింత పారగమ్యం చేస్తుంది. ఇది tubular fluid నుండి రక్తంలోకి నీటి పునశ్శోషణను పెంచుతుంది, సాంద్ర (తక్కువ పరిమాణం) మూత్రాన్ని ఉత్పత్తి చేస్తుంది. ADH లేనప్పుడు, ఈ నిర్మాణాలు నీటికి అపారగమ్యం అవుతాయి, పలచన (ఎక్కువ పరిమాణం) మూత్రం ఏర్పడుతుంది — ఈ పరిస్థితి diabetes insipidus లో కనిపిస్తుంది.',
    eliminationTechnique:
      'Option (b) is wrong because the PCT performs obligatory reabsorption of about 65-70% of water regardless of ADH — it is not regulated by ADH. Option (c) is wrong because the glomerulus is the site of filtration, not reabsorption, and ADH does not act here. Option (d) is wrong because the descending limb of Henle\'s loop is always permeable to water (passively) and is not specifically regulated by ADH.',
    eliminationTechniqueTe:
      'ఎంపిక (b) తప్పు ఎందుకంటే PCT ADH తో సంబంధం లేకుండా సుమారు 65-70% నీటిని తప్పనిసరిగా పునశ్శోషణ చేస్తుంది — ఇది ADH ద్వారా నియంత్రించబడదు. ఎంపిక (c) తప్పు ఎందుకంటే glomerulus filtration స్థలం, పునశ్శోషణ కాదు, ADH ఇక్కడ పనిచేయదు. ఎంపిక (d) తప్పు ఎందుకంటే Henle\'s loop యొక్క అవరోహణ భుజం ఎల్లప్పుడూ నీటికి (నిష్క్రియంగా) పారగమ్యం మరియు ADH ద్వారా నిర్దిష్టంగా నియంత్రించబడదు.',
    difficulty: 'medium',
  },

  // ──────────────────────────────────────────────
  // NERVOUS SYSTEM (4 questions)
  // ──────────────────────────────────────────────
  {
    id: 'zoo-hp-018',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'The correct sequence of components in a reflex arc is:',
    textTe: 'Reflex arc లోని భాగాల సరైన క్రమం ఏది?',
    options: [
      { id: 'a', text: 'Effector → Motor neuron → CNS → Sensory neuron → Receptor', textTe: 'Effector → Motor neuron → CNS → Sensory neuron → Receptor' },
      { id: 'b', text: 'Receptor → Motor neuron → CNS → Sensory neuron → Effector', textTe: 'Receptor → Motor neuron → CNS → Sensory neuron → Effector' },
      { id: 'c', text: 'Receptor → Sensory neuron → CNS → Motor neuron → Effector', textTe: 'Receptor → Sensory neuron → CNS → Motor neuron → Effector' },
      { id: 'd', text: 'Effector → Sensory neuron → CNS → Motor neuron → Receptor', textTe: 'Effector → Sensory neuron → CNS → Motor neuron → Receptor' },
    ],
    correctOptionId: 'c',
    explanation:
      'A reflex arc is the neural pathway involved in a reflex action. The correct sequence is: (1) Receptor — detects the stimulus (e.g., pain receptors in skin), (2) Sensory (afferent) neuron — carries the impulse from receptor to CNS, (3) CNS (spinal cord or brain) — processes the information, often via interneurons, (4) Motor (efferent) neuron — carries the response impulse from CNS to effector, (5) Effector — the muscle or gland that carries out the response. This pathway ensures rapid, involuntary responses like pulling your hand away from a hot surface.',
    explanationTe:
      'Reflex arc అనేది reflex action లో పాల్గొనే నాడీ మార్గం. సరైన క్రమం: (1) Receptor — ఉద్దీపనను గుర్తిస్తుంది (ఉదా. చర్మంలోని నొప్పి receptors), (2) Sensory (afferent) neuron — receptor నుండి CNS కు ప్రేరణను తీసుకెళ్తుంది, (3) CNS (spinal cord లేదా brain) — interneurons ద్వారా సమాచారాన్ని ప్రాసెస్ చేస్తుంది, (4) Motor (efferent) neuron — CNS నుండి effector కు ప్రతిస్పందన ప్రేరణను తీసుకెళ్తుంది, (5) Effector — ప్రతిస్పందనను నిర్వహించే కండరం లేదా గ్రంథి.',
    eliminationTechnique:
      'Option (a) starts with the effector, which is the LAST component (the one that responds). A reflex always starts at the receptor end. Option (b) has the sensory and motor neurons swapped — sensory neurons bring info IN to the CNS, motor neurons carry signals OUT. Option (d) also starts with effector and has receptor at the end, which reverses the entire pathway. Only option (c) follows the logical input-processing-output order.',
    eliminationTechniqueTe:
      'ఎంపిక (a) effector తో ప్రారంభమవుతుంది, ఇది చివరి భాగం (ప్రతిస్పందించేది). Reflex ఎల్లప్పుడూ receptor వద్ద ప్రారంభమవుతుంది. ఎంపిక (b) లో sensory మరియు motor neurons తారుమారు అయ్యాయి — sensory neurons CNS లోకి సమాచారాన్ని తీసుకువస్తాయి, motor neurons సంకేతాలను బయటకు తీసుకెళ్తాయి. ఎంపిక (d) కూడా effector తో ప్రారంభమవుతుంది మరియు receptor చివరన ఉంటుంది. ఎంపిక (c) మాత్రమే తార్కిక input-processing-output క్రమాన్ని అనుసరిస్తుంది.',
    difficulty: 'easy',
  },
  {
    id: 'zoo-hp-019',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'At a chemical synapse, neurotransmitters are released from:',
    textTe: 'ఒక chemical synapse వద్ద, neurotransmitters ఎక్కడ నుండి విడుదల చేయబడతాయి?',
    options: [
      { id: 'a', text: 'Dendrites of the post-synaptic neuron', textTe: 'Post-synaptic neuron యొక్క dendrites' },
      { id: 'b', text: 'Synaptic vesicles in the pre-synaptic axon terminal', textTe: 'Pre-synaptic axon terminal లోని synaptic vesicles' },
      { id: 'c', text: 'Synaptic cleft between the two neurons', textTe: 'రెండు neurons మధ్య synaptic cleft' },
      { id: 'd', text: 'Cell body (soma) of the post-synaptic neuron', textTe: 'Post-synaptic neuron యొక్క cell body (soma)' },
    ],
    correctOptionId: 'b',
    explanation:
      'At a chemical synapse, when an action potential reaches the pre-synaptic axon terminal, voltage-gated Ca2+ channels open. Calcium influx triggers the synaptic vesicles (which contain neurotransmitters like acetylcholine, dopamine, serotonin, etc.) to fuse with the pre-synaptic membrane and release their contents into the synaptic cleft by exocytosis. The neurotransmitters then diffuse across the cleft and bind to specific receptors on the post-synaptic membrane, generating a new impulse or inhibiting one.',
    explanationTe:
      'Chemical synapse వద్ద, action potential pre-synaptic axon terminal కు చేరుకున్నప్పుడు, voltage-gated Ca2+ channels తెరుచుకుంటాయి. Calcium ప్రవేశం synaptic vesicles (acetylcholine, dopamine, serotonin వంటి neurotransmitters కలిగి ఉంటాయి) ను pre-synaptic membrane తో కలిపి exocytosis ద్వారా వాటి విషయాలను synaptic cleft లోకి విడుదల చేయడానికి ప్రేరేపిస్తుంది. Neurotransmitters తర్వాత cleft ద్వారా వ్యాపించి post-synaptic membrane పై నిర్దిష్ట receptors తో బంధించబడతాయి.',
    eliminationTechnique:
      'Option (a) is wrong because dendrites of the post-synaptic neuron RECEIVE signals — they have receptors for neurotransmitters, they do not release them. Option (c) is wrong because the synaptic cleft is merely the gap between neurons; it does not store or release neurotransmitters. Option (d) is wrong because the cell body of the post-synaptic neuron integrates signals but does not release neurotransmitters at the synapse.',
    eliminationTechniqueTe:
      'ఎంపిక (a) తప్పు ఎందుకంటే post-synaptic neuron యొక్క dendrites సంకేతాలను స్వీకరిస్తాయి — వాటికి neurotransmitters కోసం receptors ఉంటాయి, వాటిని విడుదల చేయవు. ఎంపిక (c) తప్పు ఎందుకంటే synaptic cleft neurons మధ్య ఖాళీ మాత్రమే; ఇది neurotransmitters ను నిల్వ చేయదు లేదా విడుదల చేయదు. ఎంపిక (d) తప్పు ఎందుకంటే post-synaptic neuron యొక్క cell body సంకేతాలను సమగ్రపరుస్తుంది కానీ synapse వద్ద neurotransmitters ను విడుదల చేయదు.',
    difficulty: 'medium',
  },
  {
    id: 'zoo-hp-020',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Which region of the human brain is the primary centre for thermoregulation, hunger, thirst, and circadian rhythms?',
    textTe: 'మానవ మెదడులో ఉష్ణోగ్రత నియంత్రణ, ఆకలి, దాహం మరియు circadian rhythms కోసం ప్రాథమిక కేంద్రం ఏ ప్రాంతం?',
    options: [
      { id: 'a', text: 'Hypothalamus', textTe: 'Hypothalamus' },
      { id: 'b', text: 'Cerebellum', textTe: 'Cerebellum' },
      { id: 'c', text: 'Medulla oblongata', textTe: 'Medulla oblongata' },
      { id: 'd', text: 'Cerebral cortex', textTe: 'Cerebral cortex' },
    ],
    correctOptionId: 'a',
    explanation:
      'The hypothalamus is a small but vital region located at the base of the diencephalon (forebrain). It controls numerous homeostatic functions: (1) thermoregulation — it acts as the body\'s thermostat, (2) hunger and satiety centres regulate food intake, (3) thirst centre controls water balance, (4) circadian rhythms via the suprachiasmatic nucleus, (5) it links the nervous system to the endocrine system through the pituitary gland, and (6) it regulates emotions, sleep-wake cycles, and autonomic functions. The cerebellum coordinates movement, medulla oblongata controls vital reflexes (breathing, heartbeat), and the cerebral cortex handles higher cognitive functions.',
    explanationTe:
      'Hypothalamus diencephalon (ముందు మెదడు) ఆధారం వద్ద ఉన్న చిన్న కానీ ముఖ్యమైన ప్రాంతం. ఇది అనేక homeostatic పనులను నియంత్రిస్తుంది: (1) ఉష్ణోగ్రత నియంత్రణ — ఇది శరీరం యొక్క thermostat గా పనిచేస్తుంది, (2) ఆకలి మరియు సంతృప్తి కేంద్రాలు ఆహార తీసుకోవడాన్ని నియంత్రిస్తాయి, (3) దాహ కేంద్రం నీటి సమతుల్యతను నియంత్రిస్తుంది, (4) suprachiasmatic nucleus ద్వారా circadian rhythms, (5) pituitary gland ద్వారా నాడీ వ్యవస్థను అంతఃస్రావ వ్యవస్థతో అనుసంధానం చేస్తుంది. Cerebellum కదలికలను సమన్వయం చేస్తుంది, medulla oblongata ముఖ్యమైన reflexes ను నియంత్రిస్తుంది, cerebral cortex ఉన్నత అభిజ్ఞా పనులను నిర్వహిస్తుంది.',
    eliminationTechnique:
      'Cerebellum (option b) is located at the back of the brain and is responsible for coordination of voluntary movements, posture, and balance — not homeostatic regulation. Medulla oblongata (option c) controls involuntary vital functions like heart rate, respiration, and blood pressure, but not hunger or thermoregulation. Cerebral cortex (option d) is responsible for higher functions like thinking, memory, and sensory processing. Only the hypothalamus is the master regulator of homeostasis.',
    eliminationTechniqueTe:
      'Cerebellum (ఎంపిక b) మెదడు వెనుక భాగంలో ఉంటుంది మరియు స్వచ్ఛంద కదలికలు, భంగిమ, సమతుల్యత సమన్వయానికి బాధ్యత — homeostatic నియంత్రణ కాదు. Medulla oblongata (ఎంపిక c) హృదయ స్పందన, శ్వాసక్రియ, రక్తపోటు వంటి అసంకల్పిత ముఖ్యమైన పనులను నియంత్రిస్తుంది, కానీ ఆకలి లేదా ఉష్ణోగ్రత నియంత్రణను కాదు. Cerebral cortex (ఎంపిక d) ఆలోచన, జ్ఞాపకశక్తి వంటి ఉన్నత పనులకు బాధ్యత. Hypothalamus మాత్రమే homeostasis యొక్క ప్రధాన నియంత్రకం.',
    difficulty: 'hard',
  },
  {
    id: 'zoo-hp-021',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'The myelin sheath around nerve fibres in the peripheral nervous system (PNS) is formed by:',
    textTe: 'Peripheral nervous system (PNS) లో నాడీ తంతువుల చుట్టూ ఉన్న myelin sheath ఏ కణాల ద్వారా ఏర్పడుతుంది?',
    options: [
      { id: 'a', text: 'Astrocytes', textTe: 'Astrocytes' },
      { id: 'b', text: 'Microglia', textTe: 'Microglia' },
      { id: 'c', text: 'Oligodendrocytes', textTe: 'Oligodendrocytes' },
      { id: 'd', text: 'Schwann cells', textTe: 'Schwann cells' },
    ],
    correctOptionId: 'd',
    explanation:
      'In the peripheral nervous system (PNS), Schwann cells (also called neurolemmocytes) wrap around the axon to form the myelin sheath. Each Schwann cell myelinates a single segment of one axon. The gaps between adjacent Schwann cells are called nodes of Ranvier, which allow for saltatory conduction of nerve impulses. In the central nervous system (CNS), oligodendrocytes perform the same function — one oligodendrocyte can myelinate segments of multiple axons. Astrocytes provide structural support and maintain the blood-brain barrier. Microglia are the immune cells of the CNS.',
    explanationTe:
      'Peripheral nervous system (PNS) లో, Schwann cells (neurolemmocytes అని కూడా అంటారు) axon చుట్టూ చుట్టుకుని myelin sheath ను ఏర్పరుస్తాయి. ప్రతి Schwann cell ఒక axon యొక్క ఒక భాగాన్ని myelinate చేస్తుంది. ఆసన్న Schwann cells మధ్య ఖాళీలను nodes of Ranvier అంటారు, ఇవి నాడీ ప్రేరణల saltatory conduction ను అనుమతిస్తాయి. Central nervous system (CNS) లో, oligodendrocytes అదే పనిని చేస్తాయి — ఒక oligodendrocyte బహుళ axons యొక్క భాగాలను myelinate చేయగలదు. Astrocytes నిర్మాణ మద్దతు అందిస్తాయి. Microglia CNS యొక్క రోగనిరోధక కణాలు.',
    eliminationTechnique:
      'Astrocytes (option a) are star-shaped glial cells in the CNS that provide structural support and help form the blood-brain barrier, but they do NOT form myelin. Microglia (option b) are the immune/phagocytic cells of the CNS — they engulf pathogens and debris. Oligodendrocytes (option c) form the myelin sheath in the CNS, not in the PNS. The question specifically asks about the PNS, where Schwann cells are the myelinating glia.',
    eliminationTechniqueTe:
      'Astrocytes (ఎంపిక a) CNS లోని నక్షత్ర-ఆకారపు glial cells, ఇవి నిర్మాణ మద్దతు అందిస్తాయి కానీ myelin ను ఏర్పరచవు. Microglia (ఎంపిక b) CNS యొక్క రోగనిరోధక/phagocytic cells — ఇవి pathogens ను కబళిస్తాయి. Oligodendrocytes (ఎంపిక c) CNS లో myelin sheath ను ఏర్పరుస్తాయి, PNS లో కాదు. ప్రశ్న PNS గురించి నిర్దిష్టంగా అడుగుతోంది, ఇక్కడ Schwann cells myelinating glia.',
    difficulty: 'medium',
  },

  // ──────────────────────────────────────────────
  // ENDOCRINE SYSTEM (4 questions)
  // ──────────────────────────────────────────────
  {
    id: 'zoo-hp-022',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Which hormone is secreted by the beta cells of the Islets of Langerhans in the pancreas?',
    textTe: 'Pancreas లోని Islets of Langerhans యొక్క beta cells ఏ hormone ను స్రవిస్తాయి?',
    options: [
      { id: 'a', text: 'Glucagon', textTe: 'Glucagon' },
      { id: 'b', text: 'Insulin', textTe: 'Insulin' },
      { id: 'c', text: 'Somatostatin', textTe: 'Somatostatin' },
      { id: 'd', text: 'Thyroxine', textTe: 'Thyroxine' },
    ],
    correctOptionId: 'b',
    explanation:
      'The Islets of Langerhans in the pancreas contain several types of endocrine cells: (1) Alpha cells secrete glucagon, which raises blood glucose levels by promoting glycogenolysis and gluconeogenesis in the liver. (2) Beta cells secrete insulin, which lowers blood glucose by promoting cellular uptake of glucose, glycogenesis, and lipogenesis. (3) Delta cells secrete somatostatin, which inhibits both insulin and glucagon secretion. Thyroxine is secreted by the thyroid gland, not the pancreas. Insulin and glucagon work antagonistically to maintain blood glucose homeostasis.',
    explanationTe:
      'Pancreas లోని Islets of Langerhans అనేక రకాల అంతఃస్రావ కణాలను కలిగి ఉంటాయి: (1) Alpha cells glucagon ను స్రవిస్తాయి, ఇది కాలేయంలో glycogenolysis మరియు gluconeogenesis ను ప్రోత్సహించి రక్తంలో glucose స్థాయిలను పెంచుతుంది. (2) Beta cells insulin ను స్రవిస్తాయి, ఇది glucose కణాలలోకి చేరడాన్ని, glycogenesis, మరియు lipogenesis ను ప్రోత్సహించి రక్తంలో glucose ను తగ్గిస్తుంది. (3) Delta cells somatostatin ను స్రవిస్తాయి, ఇది insulin మరియు glucagon స్రావం రెండింటినీ నిరోధిస్తుంది. Thyroxine thyroid gland ద్వారా స్రవించబడుతుంది, pancreas కాదు.',
    eliminationTechnique:
      'Glucagon (option a) is secreted by alpha cells, not beta cells — a common confusion in NEET. Remember: Alpha = glucAgon (both start with letters near "a"), Beta = insulin (B for Blood sugar lowering). Somatostatin (option c) is secreted by delta cells of the islets. Thyroxine (option d) is from the thyroid gland and has no connection to the pancreas.',
    eliminationTechniqueTe:
      'Glucagon (ఎంపిక a) alpha cells ద్వారా స్రవించబడుతుంది, beta cells కాదు — NEET లో సాధారణ గందరగోళం. గుర్తుంచుకోండి: Alpha = glucAgon (రెండూ "a" దగ్గరి అక్షరాలతో ప్రారంభమవుతాయి), Beta = insulin (B for Blood sugar తగ్గించడం). Somatostatin (ఎంపిక c) islets యొక్క delta cells ద్వారా స్రవించబడుతుంది. Thyroxine (ఎంపిక d) thyroid gland నుండి వస్తుంది, pancreas తో సంబంధం లేదు.',
    difficulty: 'easy',
  },
  {
    id: 'zoo-hp-023',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'Cretinism in children is caused by the deficiency of which hormone during early development?',
    textTe: 'పిల్లలలో cretinism ప్రారంభ అభివృద్ధి సమయంలో ఏ hormone లోపం వల్ల సంభవిస్తుంది?',
    options: [
      { id: 'a', text: 'Growth hormone (GH)', textTe: 'Growth hormone (GH)' },
      { id: 'b', text: 'Insulin', textTe: 'Insulin' },
      { id: 'c', text: 'Thyroid hormones (T3 and T4)', textTe: 'Thyroid hormones (T3 మరియు T4)' },
      { id: 'd', text: 'Parathyroid hormone (PTH)', textTe: 'Parathyroid hormone (PTH)' },
    ],
    correctOptionId: 'c',
    explanation:
      'Cretinism is caused by the deficiency of thyroid hormones (T3 — triiodothyronine and T4 — thyroxine) during foetal development and early childhood. It is characterized by stunted growth, mental retardation, delayed sexual maturation, and a pot-bellied appearance. Thyroid hormones are crucial for normal brain development and skeletal growth. In adults, thyroid hormone deficiency causes myxoedema (not cretinism). Growth hormone deficiency in children causes pituitary dwarfism (proportionate short stature), which is different from cretinism.',
    explanationTe:
      'Cretinism భ్రూణ అభివృద్ధి మరియు ప్రారంభ బాల్యంలో thyroid hormones (T3 — triiodothyronine మరియు T4 — thyroxine) లోపం వల్ల సంభవిస్తుంది. ఇది కుంటుపడిన ఎదుగుదల, మానసిక వికలాంగత, ఆలస్యమైన లైంగిక పరిపక్వత, మరియు కుండ-కడుపు రూపాన్ని కలిగి ఉంటుంది. Thyroid hormones సాధారణ మెదడు అభివృద్ధి మరియు అస్థిపంజర ఎదుగుదలకు కీలకం. పెద్దవారిలో thyroid hormone లోపం myxoedema కు కారణమవుతుంది (cretinism కాదు). పిల్లలలో growth hormone లోపం pituitary dwarfism కు కారణమవుతుంది, ఇది cretinism కు భిన్నమైనది.',
    eliminationTechnique:
      'Growth hormone deficiency (option a) causes pituitary dwarfism — the child is short but proportionate and has normal intelligence, which is distinct from cretinism. Insulin deficiency (option b) causes diabetes mellitus, characterized by high blood sugar, not growth or mental retardation. PTH deficiency (option d) causes hypocalcemia and tetany, affecting calcium metabolism, not brain development or growth. Cretinism specifically involves thyroid hormones.',
    eliminationTechniqueTe:
      'Growth hormone లోపం (ఎంపిక a) pituitary dwarfism కు కారణమవుతుంది — పిల్లవాడు పొట్టిగా ఉంటాడు కానీ అనుపాతంగా ఉంటాడు మరియు సాధారణ తెలివితేటలు కలిగి ఉంటాడు. Insulin లోపం (ఎంపిక b) diabetes mellitus కు కారణమవుతుంది, ఎదుగుదల లేదా మానసిక వికలాంగతకు కాదు. PTH లోపం (ఎంపిక d) hypocalcemia మరియు tetany కి కారణమవుతుంది, calcium జీవక్రియను ప్రభావితం చేస్తుంది, మెదడు అభివృద్ధిని కాదు.',
    difficulty: 'medium',
  },
  {
    id: 'zoo-hp-024',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'When the level of thyroxine (T4) in the blood rises above normal, it inhibits the secretion of TSH from the anterior pituitary and TRH from the hypothalamus. This regulatory mechanism is called:',
    textTe: 'రక్తంలో thyroxine (T4) స్థాయి సాధారణ కంటే పెరిగినప్పుడు, ఇది anterior pituitary నుండి TSH మరియు hypothalamus నుండి TRH స్రావాన్ని నిరోధిస్తుంది. ఈ నియంత్రణ యంత్రాంగాన్ని ఏమని అంటారు?',
    options: [
      { id: 'a', text: 'Negative feedback mechanism', textTe: 'Negative feedback mechanism' },
      { id: 'b', text: 'Positive feedback mechanism', textTe: 'Positive feedback mechanism' },
      { id: 'c', text: 'Feed-forward mechanism', textTe: 'Feed-forward mechanism' },
      { id: 'd', text: 'Paracrine regulation', textTe: 'Paracrine regulation' },
    ],
    correctOptionId: 'a',
    explanation:
      'This is a classic example of negative feedback regulation. When thyroxine (T4) levels in the blood rise above the set point, the elevated T4 inhibits the hypothalamus from secreting TRH (thyrotropin-releasing hormone) and inhibits the anterior pituitary from secreting TSH (thyroid-stimulating hormone). With less TSH, the thyroid gland produces less T4, bringing levels back to normal. Conversely, when T4 drops, TRH and TSH secretion increases, stimulating more T4 production. This self-correcting loop maintains hormonal homeostasis. Positive feedback amplifies a response (e.g., oxytocin during childbirth) rather than reducing it.',
    explanationTe:
      'ఇది negative feedback regulation యొక్క క్లాసిక్ ఉదాహరణ. రక్తంలో thyroxine (T4) స్థాయిలు సెట్ పాయింట్ కంటే పెరిగినప్పుడు, ఎక్కువైన T4 hypothalamus TRH (thyrotropin-releasing hormone) స్రవించడాన్ని నిరోధిస్తుంది మరియు anterior pituitary TSH (thyroid-stimulating hormone) స్రవించడాన్ని నిరోధిస్తుంది. తక్కువ TSH తో, thyroid gland తక్కువ T4 ఉత్పత్తి చేస్తుంది, స్థాయిలు సాధారణ స్థితికి తిరిగి వస్తాయి. T4 తగ్గినప్పుడు, TRH మరియు TSH స్రావం పెరిగి, మరింత T4 ఉత్పత్తిని ప్రేరేపిస్తుంది. ఈ స్వయం-సరిచేసే loop హార్మోన్ల homeostasis ను నిర్వహిస్తుంది.',
    eliminationTechnique:
      'Positive feedback (option b) amplifies the original stimulus instead of reducing it — an example is oxytocin increasing uterine contractions during labour. The question describes INHIBITION of TSH/TRH when T4 rises, which is the opposite of amplification. Feed-forward mechanism (option c) anticipates changes before they occur, not a response to elevated levels. Paracrine regulation (option d) involves signalling to nearby cells, not a systemic hormonal loop between the hypothalamus, pituitary, and thyroid.',
    eliminationTechniqueTe:
      'Positive feedback (ఎంపిక b) అసలు ఉద్దీపనను తగ్గించడం కాకుండా పెంచుతుంది — ఒక ఉదాహరణ ప్రసవ సమయంలో oxytocin గర్భాశయ సంకోచాలను పెంచడం. ప్రశ్న T4 పెరిగినప్పుడు TSH/TRH యొక్క నిరోధాన్ని వర్ణిస్తుంది, ఇది పెంపుదలకు వ్యతిరేకం. Feed-forward mechanism (ఎంపిక c) మార్పులు జరగడానికి ముందే ముందుగానే చర్య తీసుకుంటుంది. Paracrine regulation (ఎంపిక d) సమీపంలోని కణాలకు సంకేతాలు పంపడం, hypothalamus, pituitary, మరియు thyroid మధ్య వ్యవస్థాగత హార్మోన్ loop కాదు.',
    difficulty: 'hard',
  },
  {
    id: 'zoo-hp-025',
    chapterId: 'zoology-human-physiology',
    subjectId: 'zoology',
    text: 'A patient presents with moon face, truncal obesity, purple striae on the abdomen, and persistently elevated blood glucose levels. Which endocrine disorder is most likely?',
    textTe: 'ఒక రోగి చంద్రుని ముఖం, మొండెం వద్ద ఊబకాయం, ఉదరంపై ఊదా రంగు striae, మరియు నిరంతరంగా పెరిగిన రక్తంలో glucose స్థాయిలతో వస్తాడు. ఏ అంతఃస్రావ రుగ్మత అత్యంత సంభావ్యం?',
    options: [
      { id: 'a', text: 'Addison\'s disease (adrenal insufficiency)', textTe: 'Addison\'s disease (adrenal insufficiency)' },
      { id: 'b', text: 'Diabetes insipidus', textTe: 'Diabetes insipidus' },
      { id: 'c', text: 'Acromegaly', textTe: 'Acromegaly' },
      { id: 'd', text: 'Cushing\'s syndrome', textTe: 'Cushing\'s syndrome' },
    ],
    correctOptionId: 'd',
    explanation:
      'Cushing\'s syndrome is caused by prolonged exposure to excess cortisol, either from overproduction by the adrenal cortex or exogenous corticosteroid therapy. Cortisol is a glucocorticoid hormone from the zona fasciculata of the adrenal cortex. Excess cortisol causes: (1) moon face and buffalo hump due to redistribution of body fat, (2) truncal obesity, (3) purple striae from thinning of skin, (4) hyperglycemia because cortisol promotes gluconeogenesis and antagonizes insulin, (5) muscle wasting, and (6) osteoporosis. Addison\'s disease is the opposite — adrenal hypofunction with low cortisol. Diabetes insipidus involves ADH deficiency causing excessive dilute urine. Acromegaly involves excess growth hormone in adults.',
    explanationTe:
      'Cushing\'s syndrome అధిక cortisol కు దీర్ఘకాలం బహిర్గతం వల్ల సంభవిస్తుంది. Cortisol adrenal cortex యొక్క zona fasciculata నుండి వచ్చే glucocorticoid hormone. అధిక cortisol: (1) శరీర కొవ్వు పునఃపంపిణీ వల్ల చంద్రుని ముఖం మరియు buffalo hump, (2) మొండెం వద్ద ఊబకాయం, (3) చర్మం సన్నబడటం వల్ల ఊదా రంగు striae, (4) cortisol gluconeogenesis ను ప్రోత్సహించి insulin ను వ్యతిరేకించడం వల్ల hyperglycemia, (5) కండరాల క్షీణత, (6) osteoporosis కు కారణమవుతుంది. Addison\'s disease దీనికి వ్యతిరేకం — తక్కువ cortisol తో adrenal hypofunction. Diabetes insipidus ADH లోపంతో అధిక పలచన మూత్రాన్ని కలిగిస్తుంది. Acromegaly పెద్దవారిలో అధిక growth hormone ను కలిగి ఉంటుంది.',
    eliminationTechnique:
      'Addison\'s disease (option a) is adrenal INSUFFICIENCY — patients show hyperpigmentation, weight loss, low blood pressure, and fatigue, which is the OPPOSITE of this presentation. Diabetes insipidus (option b) presents with extreme thirst and large volumes of dilute urine due to ADH deficiency, without the metabolic features described. Acromegaly (option c) shows enlargement of hands, feet, and jaw due to excess GH in adults, not fat redistribution or striae. The combination of moon face + truncal obesity + striae + hyperglycemia is a textbook presentation of Cushing\'s syndrome.',
    eliminationTechniqueTe:
      'Addison\'s disease (ఎంపిక a) adrenal INSUFFICIENCY — రోగులు hyperpigmentation, బరువు తగ్గడం, తక్కువ రక్తపోటు చూపుతారు, ఇది ఈ presentation కు వ్యతిరేకం. Diabetes insipidus (ఎంపిక b) ADH లోపం వల్ల తీవ్ర దాహం మరియు పెద్ద మొత్తంలో పలచన మూత్రాన్ని చూపుతుంది, వర్ణించిన జీవక్రియ లక్షణాలు లేకుండా. Acromegaly (ఎంపిక c) పెద్దవారిలో అధిక GH వల్ల చేతులు, కాళ్ళు, దవడ పెరుగుదలను చూపుతుంది, కొవ్వు పునఃపంపిణీ లేదా striae కాదు. చంద్రుని ముఖం + మొండెం ఊబకాయం + striae + hyperglycemia కలయిక Cushing\'s syndrome యొక్క textbook presentation.',
    difficulty: 'hard',
  },
];
