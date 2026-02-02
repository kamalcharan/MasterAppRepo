import { Question } from '../../types';

export const physicsThermodynamicsQuestions: Question[] = [
  // ===== EASY (8 questions): Q1–Q8 =====
  {
    id: 'phy-thd-001',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'According to the zeroth law of thermodynamics, if body A is in thermal equilibrium with body B, and body B is in thermal equilibrium with body C, then:',
    textTe: 'ఉష్ణగతిశాస్త్రం యొక్క సున్నా నియమం ప్రకారం, A వస్తువు B వస్తువుతో ఉష్ణ సమతాస్థితిలో ఉంటే, మరియు B వస్తువు C వస్తువుతో ఉష్ణ సమతాస్థితిలో ఉంటే, అప్పుడు:',
    options: [
      {
        id: 'a',
        text: 'A and C may or may not be in thermal equilibrium',
        textTe: 'A మరియు C ఉష్ణ సమతాస్థితిలో ఉండవచ్చు లేదా ఉండకపోవచ్చు',
      },
      {
        id: 'b',
        text: 'A and C are necessarily in thermal equilibrium with each other',
        textTe: 'A మరియు C తప్పనిసరిగా ఒకదానితో ఒకటి ఉష్ణ సమతాస్థితిలో ఉంటాయి',
      },
      {
        id: 'c',
        text: 'The temperatures of A, B, and C are all different',
        textTe: 'A, B మరియు C ఉష్ణోగ్రతలు అన్నీ భిన్నంగా ఉంటాయి',
      },
      {
        id: 'd',
        text: 'Heat will spontaneously flow from A to C',
        textTe: 'ఉష్ణం A నుండి C కి స్వయంచాలకంగా ప్రవహిస్తుంది',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'The zeroth law of thermodynamics establishes the concept of temperature and transitivity of thermal equilibrium. If A is in thermal equilibrium with B (T_A = T_B) and B is in thermal equilibrium with C (T_B = T_C), then T_A = T_C, meaning A and C are also in thermal equilibrium. This law forms the basis for temperature measurement using thermometers.',
    explanationTe:
      'ఉష్ణగతిశాస్త్రం యొక్క సున్నా నియమం ఉష్ణోగ్రత భావన మరియు ఉష్ణ సమతాస్థితి యొక్క పరివర్తన లక్షణాన్ని నిర్దేశిస్తుంది. A వస్తువు B తో ఉష్ణ సమతాస్థితిలో ఉంటే (T_A = T_B) మరియు B వస్తువు C తో ఉష్ణ సమతాస్థితిలో ఉంటే (T_B = T_C), అప్పుడు T_A = T_C, అంటే A మరియు C కూడా ఉష్ణ సమతాస్థితిలో ఉంటాయి. ఈ నియమం థర్మామీటర్లను ఉపయోగించి ఉష్ణోగ్రత కొలతకు ఆధారం.',
    eliminationTechnique:
      'Option (c) contradicts the premise since thermal equilibrium means equal temperatures. Option (d) implies a temperature difference which contradicts equilibrium. Option (a) is wrong because the zeroth law guarantees the result is definite, not uncertain. Only (b) correctly states the transitive property.',
    eliminationTechniqueTe:
      'ఎంపిక (c) ఉష్ణ సమతాస్థితి అంటే సమాన ఉష్ణోగ్రతలు కాబట్టి ఆధారాన్ని వ్యతిరేకిస్తుంది. ఎంపిక (d) ఉష్ణోగ్రత వ్యత్యాసాన్ని సూచిస్తుంది, ఇది సమతాస్థితికి విరుద్ధం. ఎంపిక (a) తప్పు ఎందుకంటే సున్నా నియమం ఫలితం ఖచ్చితమని హామీ ఇస్తుంది. (b) మాత్రమే పరివర్తన లక్షణాన్ని సరిగ్గా పేర్కొంటుంది.',
    difficulty: 'easy',
  },
  {
    id: 'phy-thd-002',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'The first law of thermodynamics is essentially a statement of:',
    textTe: 'ఉష్ణగతిశాస్త్రం యొక్క మొదటి నియమం ప్రాథమికంగా దేని గురించి చెబుతుంది:',
    options: [
      {
        id: 'a',
        text: 'Conservation of energy',
        textTe: 'శక్తి నిత్యత్వ నియమం',
      },
      {
        id: 'b',
        text: 'Conservation of momentum',
        textTe: 'ద్రవ్యవేగ నిత్యత్వ నియమం',
      },
      {
        id: 'c',
        text: 'Conservation of entropy',
        textTe: 'ఎంట్రోపీ నిత్యత్వ నియమం',
      },
      {
        id: 'd',
        text: 'Direction of heat flow',
        textTe: 'ఉష్ణ ప్రవాహ దిశ',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'The first law of thermodynamics states that energy can neither be created nor destroyed, only transformed from one form to another. Mathematically, dU = dQ - dW, where dU is the change in internal energy, dQ is heat added, and dW is work done by the system. This is a direct application of the law of conservation of energy to thermodynamic systems.',
    explanationTe:
      'ఉష్ణగతిశాస్త్రం యొక్క మొదటి నియమం శక్తిని సృష్టించడం లేదా నాశనం చేయడం సాధ్యం కాదని, ఒక రూపం నుండి మరొక రూపంలోకి మాత్రమే మార్చవచ్చని పేర్కొంటుంది. గణితశాస్త్రపరంగా, dU = dQ - dW, ఇక్కడ dU అంతర శక్తిలో మార్పు, dQ జోడించిన ఉష్ణం, మరియు dW వ్యవస్థ చేసిన పని. ఇది ఉష్ణగతి వ్యవస్థలకు శక్తి నిత్యత్వ నియమం యొక్క ప్రత్యక్ష అనువర్తనం.',
    eliminationTechnique:
      'Option (b) conservation of momentum relates to mechanics, not thermodynamics. Option (c) is wrong because entropy is not conserved; it increases in irreversible processes (second law). Option (d) describes the second law of thermodynamics, not the first. Only (a) correctly identifies the first law as energy conservation.',
    eliminationTechniqueTe:
      'ఎంపిక (b) ద్రవ్యవేగ నిత్యత్వం యాంత్రిక శాస్త్రానికి సంబంధించినది, ఉష్ణగతిశాస్త్రానికి కాదు. ఎంపిక (c) తప్పు ఎందుకంటే ఎంట్రోపీ నిత్యత్వం కాదు; అవిరామ ప్రక్రియలలో పెరుగుతుంది (రెండవ నియమం). ఎంపిక (d) రెండవ నియమాన్ని వివరిస్తుంది, మొదటి నియమాన్ని కాదు. (a) మాత్రమే మొదటి నియమాన్ని శక్తి నిత్యత్వంగా సరిగ్గా గుర్తిస్తుంది.',
    difficulty: 'easy',
  },
  {
    id: 'phy-thd-003',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'During an isothermal expansion of an ideal gas, the change in internal energy is:',
    textTe: 'ఆదర్శ వాయువు యొక్క సమోష్ణ వ్యాకోచం సమయంలో, అంతర శక్తిలో మార్పు:',
    options: [
      {
        id: 'a',
        text: 'Positive',
        textTe: 'ధనాత్మకం',
      },
      {
        id: 'b',
        text: 'Negative',
        textTe: 'ఋణాత్మకం',
      },
      {
        id: 'c',
        text: 'Zero',
        textTe: 'సున్నా',
      },
      {
        id: 'd',
        text: 'Depends on the nature of the gas',
        textTe: 'వాయువు స్వభావంపై ఆధారపడి ఉంటుంది',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'For an ideal gas, internal energy depends only on temperature (U = nCvT). In an isothermal process, temperature remains constant (dT = 0), so the change in internal energy dU = nCv(dT) = 0. All the heat absorbed by the gas is entirely converted into work done by the gas during expansion.',
    explanationTe:
      'ఆదర్శ వాయువుకు, అంతర శక్తి ఉష్ణోగ్రతపై మాత్రమే ఆధారపడి ఉంటుంది (U = nCvT). సమోష్ణ ప్రక్రియలో, ఉష్ణోగ్రత స్థిరంగా ఉంటుంది (dT = 0), కాబట్టి అంతర శక్తిలో మార్పు dU = nCv(dT) = 0. వాయువు గ్రహించిన ఉష్ణం మొత్తం వ్యాకోచం సమయంలో వాయువు చేసిన పనిగా మారుతుంది.',
    eliminationTechnique:
      'Since the question specifies an ideal gas and isothermal process, temperature is constant. For an ideal gas, internal energy is a function of temperature only. Options (a) and (b) imply a change in temperature, which contradicts the isothermal condition. Option (d) is wrong because the result holds for all ideal gases regardless of their nature.',
    eliminationTechniqueTe:
      'ప్రశ్న ఆదర్శ వాయువు మరియు సమోష్ణ ప్రక్రియను పేర్కొంటుంది కాబట్టి, ఉష్ణోగ్రత స్థిరం. ఆదర్శ వాయువుకు, అంతర శక్తి ఉష్ణోగ్రత యొక్క ఫలనం మాత్రమే. ఎంపికలు (a) మరియు (b) ఉష్ణోగ్రతలో మార్పును సూచిస్తాయి, ఇది సమోష్ణ షరతుకు విరుద్ధం. ఎంపిక (d) తప్పు ఎందుకంటే ఫలితం అన్ని ఆదర్శ వాయువులకు వర్తిస్తుంది.',
    difficulty: 'easy',
  },
  {
    id: 'phy-thd-004',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'In an isobaric process, the work done by the gas is given by:',
    textTe: 'సమపీడన ప్రక్రియలో, వాయువు చేసిన పని ఇలా ఇవ్వబడుతుంది:',
    options: [
      {
        id: 'a',
        text: 'W = 0',
        textTe: 'W = 0',
      },
      {
        id: 'b',
        text: 'W = nCvdT',
        textTe: 'W = nCvdT',
      },
      {
        id: 'c',
        text: 'W = nRT ln(V2/V1)',
        textTe: 'W = nRT ln(V2/V1)',
      },
      {
        id: 'd',
        text: 'W = P(V2 - V1)',
        textTe: 'W = P(V2 - V1)',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'In an isobaric (constant pressure) process, since pressure P is constant, the work done by the gas is W = integral of P dV = P(V2 - V1) = PdV. Option (a) is for isochoric process, option (b) gives the change in internal energy, and option (c) is for isothermal process.',
    explanationTe:
      'సమపీడన (స్థిర పీడనం) ప్రక్రియలో, పీడనం P స్థిరంగా ఉన్నందున, వాయువు చేసిన పని W = P dV యొక్క సమాకలనం = P(V2 - V1) = PdV. ఎంపిక (a) సమఘనపరిమాణ ప్రక్రియకు, ఎంపిక (b) అంతర శక్తిలో మార్పును ఇస్తుంది, మరియు ఎంపిక (c) సమోష్ణ ప్రక్రియకు సంబంధించినది.',
    eliminationTechnique:
      'Option (a) W = 0 applies to isochoric (constant volume) processes, not isobaric. Option (b) nCvdT represents the change in internal energy, not work. Option (c) nRT ln(V2/V1) is the formula for isothermal work. Only (d) correctly gives isobaric work as PdV.',
    eliminationTechniqueTe:
      'ఎంపిక (a) W = 0 సమఘనపరిమాణ (స్థిర ఘనపరిమాణం) ప్రక్రియలకు వర్తిస్తుంది, సమపీడనానికి కాదు. ఎంపిక (b) nCvdT అంతర శక్తిలో మార్పును సూచిస్తుంది, పనిని కాదు. ఎంపిక (c) nRT ln(V2/V1) సమోష్ణ పని సూత్రం. (d) మాత్రమే సమపీడన పనిని PdV గా సరిగ్గా ఇస్తుంది.',
    difficulty: 'easy',
  },
  {
    id: 'phy-thd-005',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'For an ideal gas, the molar specific heat at constant pressure (Cp) is greater than the molar specific heat at constant volume (Cv) because:',
    textTe: 'ఆదర్శ వాయువుకు, స్థిర పీడనం వద్ద మోలార్ విశిష్ట ఉష్ణం (Cp) స్థిర ఘనపరిమాణం వద్ద మోలార్ విశిష్ట ఉష్ణం (Cv) కంటే ఎక్కువగా ఉంటుంది ఎందుకంటే:',
    options: [
      {
        id: 'a',
        text: 'The gas contains more molecules at constant pressure',
        textTe: 'స్థిర పీడనం వద్ద వాయువు ఎక్కువ అణువులను కలిగి ఉంటుంది',
      },
      {
        id: 'b',
        text: 'At constant pressure, part of the heat supplied is used to do work against external pressure during expansion',
        textTe: 'స్థిర పీడనం వద్ద, సరఫరా చేసిన ఉష్ణంలో కొంత భాగం వ్యాకోచం సమయంలో బాహ్య పీడనానికి వ్యతిరేకంగా పని చేయడానికి ఉపయోగించబడుతుంది',
      },
      {
        id: 'c',
        text: 'Internal energy increases more at constant pressure',
        textTe: 'స్థిర పీడనం వద్ద అంతర శక్తి ఎక్కువగా పెరుగుతుంది',
      },
      {
        id: 'd',
        text: 'Temperature rises faster at constant pressure',
        textTe: 'స్థిర పీడనం వద్ద ఉష్ణోగ్రత వేగంగా పెరుగుతుంది',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'When heat is supplied at constant volume, all the energy goes into increasing the internal energy (and hence temperature) of the gas. At constant pressure, the gas expands and does PdV work against external pressure in addition to increasing its internal energy. Therefore, more heat is needed at constant pressure to achieve the same temperature rise, making Cp > Cv. The difference is Cp - Cv = R (Mayer relation).',
    explanationTe:
      'స్థిర ఘనపరిమాణం వద్ద ఉష్ణం సరఫరా చేసినప్పుడు, మొత్తం శక్తి వాయువు యొక్క అంతర శక్తిని (మరియు ఉష్ణోగ్రతను) పెంచడానికి వెళ్తుంది. స్థిర పీడనం వద్ద, వాయువు వ్యాకోచం చెంది అంతర శక్తిని పెంచడంతో పాటు బాహ్య పీడనానికి వ్యతిరేకంగా PdV పని చేస్తుంది. కాబట్టి, అదే ఉష్ణోగ్రత పెరుగుదలను సాధించడానికి స్థిర పీడనం వద్ద ఎక్కువ ఉష్ణం అవసరం, Cp > Cv అవుతుంది. తేడా Cp - Cv = R (Mayer సంబంధం).',
    eliminationTechnique:
      'Option (a) is wrong because the number of molecules does not change with the type of process. Option (c) is incorrect because for the same temperature change, the internal energy change is the same (dU = nCvdT) regardless of the process. Option (d) is the opposite of what happens; temperature rises slower at constant pressure for the same heat input.',
    eliminationTechniqueTe:
      'ఎంపిక (a) తప్పు ఎందుకంటే ప్రక్రియ రకంతో అణువుల సంఖ్య మారదు. ఎంపిక (c) తప్పు ఎందుకంటే అదే ఉష్ణోగ్రత మార్పుకు, అంతర శక్తి మార్పు ప్రక్రియతో సంబంధం లేకుండా ఒకే విధంగా ఉంటుంది (dU = nCvdT). ఎంపిక (d) జరిగేదానికి వ్యతిరేకం; అదే ఉష్ణ ఇన్‌పుట్‌కు స్థిర పీడనం వద్ద ఉష్ణోగ్రత నెమ్మదిగా పెరుగుతుంది.',
    difficulty: 'easy',
  },
  {
    id: 'phy-thd-006',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'The internal energy of an ideal gas depends only on:',
    textTe: 'ఆదర్శ వాయువు యొక్క అంతర శక్తి దేనిపై మాత్రమే ఆధారపడి ఉంటుంది:',
    options: [
      {
        id: 'a',
        text: 'Temperature',
        textTe: 'ఉష్ణోగ్రత',
      },
      {
        id: 'b',
        text: 'Pressure',
        textTe: 'పీడనం',
      },
      {
        id: 'c',
        text: 'Volume',
        textTe: 'ఘనపరిమాణం',
      },
      {
        id: 'd',
        text: 'Both pressure and volume',
        textTe: 'పీడనం మరియు ఘనపరిమాణం రెండూ',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'For an ideal gas, there are no intermolecular forces, so the internal energy is purely kinetic. The average kinetic energy per molecule is (f/2)kT, where f is the degrees of freedom. Therefore, U = (f/2)nRT, which depends only on temperature T. This is a direct consequence of the kinetic theory of gases and is valid for all ideal gases.',
    explanationTe:
      'ఆదర్శ వాయువుకు, అణుల మధ్య బలాలు లేవు, కాబట్టి అంతర శక్తి పూర్తిగా గతి శక్తి. ప్రతి అణువు యొక్క సగటు గతి శక్తి (f/2)kT, ఇక్కడ f స్వాతంత్ర్య మాత్రలు. కాబట్టి, U = (f/2)nRT, ఇది ఉష్ణోగ్రత T పై మాత్రమే ఆధారపడి ఉంటుంది. ఇది వాయువుల గతి సిద్ధాంతం యొక్క ప్రత్యక్ష పరిణామం మరియు అన్ని ఆదర్శ వాయువులకు చెల్లుబాటు అవుతుంది.',
    eliminationTechnique:
      'Options (b), (c), and (d) all involve pressure and/or volume. For an ideal gas, even if P and V change, as long as T remains constant, the internal energy does not change (as demonstrated in free expansion experiments). Recall that U = nCvT, which contains only T as a variable.',
    eliminationTechniqueTe:
      'ఎంపికలు (b), (c), మరియు (d) అన్నీ పీడనం మరియు/లేదా ఘనపరిమాణాన్ని కలిగి ఉంటాయి. ఆదర్శ వాయువుకు, P మరియు V మారినప్పటికీ, T స్థిరంగా ఉన్నంత వరకు, అంతర శక్తి మారదు (స్వేచ్ఛా వ్యాకోచ ప్రయోగాలలో నిరూపించబడినట్లు). U = nCvT అని గుర్తుంచుకోండి, ఇందులో T మాత్రమే చరరాశి.',
    difficulty: 'easy',
  },
  {
    id: 'phy-thd-007',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'The Kelvin-Planck statement of the second law of thermodynamics states that:',
    textTe: 'ఉష్ణగతిశాస్త్రం యొక్క రెండవ నియమం యొక్క Kelvin-Planck ప్రకటన ఇలా చెబుతుంది:',
    options: [
      {
        id: 'a',
        text: 'Heat always flows from a hot body to a cold body spontaneously',
        textTe: 'ఉష్ణం ఎల్లప్పుడూ వేడి వస్తువు నుండి చల్లని వస్తువుకు స్వయంచాలకంగా ప్రవహిస్తుంది',
      },
      {
        id: 'b',
        text: 'The entropy of an isolated system always increases',
        textTe: 'ఒంటరి వ్యవస్థ యొక్క ఎంట్రోపీ ఎల్లప్పుడూ పెరుగుతుంది',
      },
      {
        id: 'c',
        text: 'It is impossible to construct a heat engine that converts all the heat absorbed from a single reservoir entirely into work in a cyclic process',
        textTe: 'ఒకే భాండం నుండి గ్రహించిన మొత్తం ఉష్ణాన్ని చక్రీయ ప్రక్రియలో పూర్తిగా పనిగా మార్చే ఉష్ణ యంత్రాన్ని నిర్మించడం అసాధ్యం',
      },
      {
        id: 'd',
        text: 'The efficiency of any reversible engine is always 100%',
        textTe: 'ఏదైనా విరామయోగ్య యంత్రం యొక్క సామర్థ్యం ఎల్లప్పుడూ 100%',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'The Kelvin-Planck statement says no cyclic heat engine can convert all absorbed heat into work without rejecting some heat to a cold reservoir. This means a perfect heat engine (100% efficiency) is impossible. Option (a) is the Clausius statement. Option (b) is the entropy formulation. Option (d) is factually incorrect as even Carnot engines do not reach 100% efficiency.',
    explanationTe:
      'Kelvin-Planck ప్రకటన ప్రకారం ఏ చక్రీయ ఉష్ణ యంత్రం శీతల భాండానికి కొంత ఉష్ణాన్ని తిరస్కరించకుండా గ్రహించిన మొత్తం ఉష్ణాన్ని పనిగా మార్చలేదు. అంటే పరిపూర్ణ ఉష్ణ యంత్రం (100% సామర్థ్యం) అసాధ్యం. ఎంపిక (a) Clausius ప్రకటన. ఎంపిక (b) ఎంట్రోపీ సూత్రీకరణ. ఎంపిక (d) వాస్తవపరంగా తప్పు ఎందుకంటే Carnot యంత్రాలు కూడా 100% సామర్థ్యాన్ని చేరుకోవు.',
    eliminationTechnique:
      'Option (a) describes the Clausius statement, not Kelvin-Planck. Option (b) is a consequence of the second law but not the Kelvin-Planck statement specifically. Option (d) is clearly wrong because no engine can be 100% efficient. By elimination, (c) is the precise Kelvin-Planck formulation.',
    eliminationTechniqueTe:
      'ఎంపిక (a) Clausius ప్రకటనను వివరిస్తుంది, Kelvin-Planck కాదు. ఎంపిక (b) రెండవ నియమం యొక్క పరిణామం కానీ నిర్దిష్టంగా Kelvin-Planck ప్రకటన కాదు. ఎంపిక (d) స్పష్టంగా తప్పు ఎందుకంటే ఏ యంత్రం 100% సామర్థ్యం కలిగి ఉండదు. తొలగింపు ద్వారా, (c) ఖచ్చితమైన Kelvin-Planck సూత్రీకరణ.',
    difficulty: 'easy',
  },
  {
    id: 'phy-thd-008',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'In an adiabatic process involving an ideal gas, which of the following is true?',
    textTe: 'ఆదర్శ వాయువుతో కూడిన రుద్ధోష్ణ ప్రక్రియలో, కింది వాటిలో ఏది నిజం?',
    options: [
      {
        id: 'a',
        text: 'The temperature of the system remains constant',
        textTe: 'వ్యవస్థ ఉష్ణోగ్రత స్థిరంగా ఉంటుంది',
      },
      {
        id: 'b',
        text: 'The internal energy of the system remains constant',
        textTe: 'వ్యవస్థ అంతర శక్తి స్థిరంగా ఉంటుంది',
      },
      {
        id: 'c',
        text: 'The pressure of the system always remains constant',
        textTe: 'వ్యవస్థ పీడనం ఎల్లప్పుడూ స్థిరంగా ఉంటుంది',
      },
      {
        id: 'd',
        text: 'No heat is exchanged between the system and the surroundings',
        textTe: 'వ్యవస్థ మరియు పరిసరాల మధ్య ఉష్ణ మార్పిడి జరగదు',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'An adiabatic process is defined as one in which no heat is exchanged between the system and its surroundings (Q = 0). From the first law, dU = -dW, meaning any work done by the gas comes at the expense of its internal energy, causing the temperature to change. Temperature, internal energy, and pressure all change during an adiabatic process.',
    explanationTe:
      'రుద్ధోష్ణ ప్రక్రియ అనేది వ్యవస్థ మరియు దాని పరిసరాల మధ్య ఉష్ణ మార్పిడి జరగని (Q = 0) ప్రక్రియగా నిర్వచించబడుతుంది. మొదటి నియమం నుండి, dU = -dW, అంటే వాయువు చేసిన ఏదైనా పని దాని అంతర శక్తి ఖర్చుతో వస్తుంది, ఉష్ణోగ్రత మారడానికి కారణమవుతుంది. రుద్ధోష్ణ ప్రక్రియలో ఉష్ణోగ్రత, అంతర శక్తి మరియు పీడనం అన్నీ మారతాయి.',
    eliminationTechnique:
      'Option (a) describes an isothermal process, not adiabatic. Option (b) would mean no temperature change, which only happens in free expansion, not general adiabatic processes. Option (c) describes an isobaric process. Only (d) correctly defines the adiabatic condition: Q = 0.',
    eliminationTechniqueTe:
      'ఎంపిక (a) సమోష్ణ ప్రక్రియను వివరిస్తుంది, రుద్ధోష్ణ కాదు. ఎంపిక (b) ఉష్ణోగ్రత మార్పు లేదని అర్థం, ఇది స్వేచ్ఛా వ్యాకోచంలో మాత్రమే జరుగుతుంది. ఎంపిక (c) సమపీడన ప్రక్రియను వివరిస్తుంది. (d) మాత్రమే రుద్ధోష్ణ షరతును సరిగ్గా నిర్వచిస్తుంది: Q = 0.',
    difficulty: 'easy',
  },

  // ===== MEDIUM (10 questions): Q9–Q18 =====
  {
    id: 'phy-thd-009',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'A Carnot engine operates between a heat source at 600 K and a heat sink at 300 K. The efficiency of the engine is:',
    textTe: '600 K వద్ద ఉష్ణ మూలం మరియు 300 K వద్ద ఉష్ణ సింక్ మధ్య Carnot యంత్రం పని చేస్తుంది. యంత్రం యొక్క సామర్థ్యం:',
    options: [
      {
        id: 'a',
        text: '25%',
        textTe: '25%',
      },
      {
        id: 'b',
        text: '50%',
        textTe: '50%',
      },
      {
        id: 'c',
        text: '75%',
        textTe: '75%',
      },
      {
        id: 'd',
        text: '100%',
        textTe: '100%',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'The efficiency of a Carnot engine is given by eta = 1 - T2/T1, where T1 is the source temperature and T2 is the sink temperature (both in Kelvin). Here, eta = 1 - 300/600 = 1 - 0.5 = 0.5 = 50%. This is the maximum possible efficiency for any heat engine operating between these two temperatures.',
    explanationTe:
      'Carnot యంత్రం యొక్క సామర్థ్యం eta = 1 - T2/T1 ద్వారా ఇవ్వబడుతుంది, ఇక్కడ T1 మూలం ఉష్ణోగ్రత మరియు T2 సింక్ ఉష్ణోగ్రత (రెండూ Kelvin లో). ఇక్కడ, eta = 1 - 300/600 = 1 - 0.5 = 0.5 = 50%. ఈ రెండు ఉష్ణోగ్రతల మధ్య పనిచేసే ఏదైనా ఉష్ణ యంత్రానికి ఇది గరిష్ట సాధ్య సామర్థ్యం.',
    eliminationTechnique:
      'Option (d) 100% efficiency violates the second law of thermodynamics, so eliminate it immediately. Since T2 is exactly half of T1, the ratio T2/T1 = 0.5, and efficiency = 1 - 0.5 = 0.5, which rules out (a) 25% and (c) 75%. Quick check: for 75% efficiency, you would need T2/T1 = 0.25, i.e., T2 = 150 K.',
    eliminationTechniqueTe:
      'ఎంపిక (d) 100% సామర్థ్యం రెండవ నియమాన్ని ఉల్లంఘిస్తుంది, కాబట్టి దాన్ని వెంటనే తొలగించండి. T2 T1 లో సరిగ్గా సగం కాబట్టి, T2/T1 = 0.5, మరియు సామర్థ్యం = 1 - 0.5 = 0.5, ఇది (a) 25% మరియు (c) 75% ను తొలగిస్తుంది. త్వరిత తనిఖీ: 75% సామర్థ్యానికి, T2/T1 = 0.25 అవసరం, అంటే T2 = 150 K.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-010',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'A system absorbs 500 J of heat and does 200 J of work on the surroundings. The change in internal energy of the system is:',
    textTe: 'ఒక వ్యవస్థ 500 J ఉష్ణాన్ని గ్రహించి, పరిసరాలపై 200 J పని చేస్తుంది. వ్యవస్థ యొక్క అంతర శక్తిలో మార్పు:',
    options: [
      {
        id: 'a',
        text: '300 J',
        textTe: '300 J',
      },
      {
        id: 'b',
        text: '700 J',
        textTe: '700 J',
      },
      {
        id: 'c',
        text: '-300 J',
        textTe: '-300 J',
      },
      {
        id: 'd',
        text: '200 J',
        textTe: '200 J',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'By the first law of thermodynamics, dU = Q - W, where Q is heat absorbed by the system and W is work done by the system. Here, Q = +500 J (heat absorbed) and W = +200 J (work done by the system on surroundings). Therefore, dU = 500 - 200 = 300 J. The internal energy of the system increases by 300 J.',
    explanationTe:
      'ఉష్ణగతిశాస్త్రం యొక్క మొదటి నియమం ప్రకారం, dU = Q - W, ఇక్కడ Q వ్యవస్థ గ్రహించిన ఉష్ణం మరియు W వ్యవస్థ చేసిన పని. ఇక్కడ, Q = +500 J (గ్రహించిన ఉష్ణం) మరియు W = +200 J (పరిసరాలపై వ్యవస్థ చేసిన పని). కాబట్టి, dU = 500 - 200 = 300 J. వ్యవస్థ యొక్క అంతర శక్తి 300 J పెరుగుతుంది.',
    eliminationTechnique:
      'Option (b) 700 J incorrectly adds Q and W instead of subtracting. Option (c) -300 J uses the wrong sign convention (work done on the system rather than by the system). Option (d) 200 J confuses work done with internal energy change. The correct approach is dU = Q - W = 500 - 200 = 300 J.',
    eliminationTechniqueTe:
      'ఎంపిక (b) 700 J Q మరియు W ను తీసివేయడానికి బదులుగా తప్పుగా కూడుతుంది. ఎంపిక (c) -300 J తప్పు చిహ్న సంప్రదాయాన్ని ఉపయోగిస్తుంది. ఎంపిక (d) 200 J చేసిన పనిని అంతర శక్తి మార్పుతో గందరగోళం చేస్తుంది. సరైన విధానం dU = Q - W = 500 - 200 = 300 J.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-011',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'For a reversible adiabatic process involving an ideal gas, the correct relation is:',
    textTe: 'ఆదర్శ వాయువుతో కూడిన విరామయోగ్య రుద్ధోష్ణ ప్రక్రియకు, సరైన సంబంధం:',
    options: [
      {
        id: 'a',
        text: 'PV = constant',
        textTe: 'PV = స్థిరం',
      },
      {
        id: 'b',
        text: 'PV^2 = constant',
        textTe: 'PV^2 = స్థిరం',
      },
      {
        id: 'c',
        text: 'PV^gamma = constant',
        textTe: 'PV^gamma = స్థిరం',
      },
      {
        id: 'd',
        text: 'P^2 V = constant',
        textTe: 'P^2 V = స్థిరం',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'For a reversible adiabatic (isentropic) process involving an ideal gas, the relation PV^gamma = constant holds, where gamma = Cp/Cv is the heat capacity ratio (adiabatic index). This can be derived by combining the first law (dU = -PdV for Q = 0) with the ideal gas law. For a monoatomic gas gamma = 5/3 and for a diatomic gas gamma = 7/5.',
    explanationTe:
      'ఆదర్శ వాయువుతో కూడిన విరామయోగ్య రుద్ధోష్ణ (సమ ఎంట్రోపీ) ప్రక్రియకు, PV^gamma = స్థిరం అనే సంబంధం వర్తిస్తుంది, ఇక్కడ gamma = Cp/Cv ఉష్ణ సామర్థ్య నిష్పత్తి (రుద్ధోష్ణ సూచిక). ఇది మొదటి నియమాన్ని (Q = 0 కు dU = -PdV) ఆదర్శ వాయువు నియమంతో కలపడం ద్వారా ఉత్పన్నం చేయవచ్చు. ఏకపరమాణు వాయువుకు gamma = 5/3 మరియు ద్విపరమాణు వాయువుకు gamma = 7/5.',
    eliminationTechnique:
      'Option (a) PV = constant is Boyle\'s law for isothermal processes, not adiabatic. Options (b) PV^2 and (d) P^2V are not standard thermodynamic relations for any named process. The only correct adiabatic relation is PV^gamma = constant, where gamma > 1.',
    eliminationTechniqueTe:
      'ఎంపిక (a) PV = స్థిరం అనేది సమోష్ణ ప్రక్రియలకు Boyle నియమం, రుద్ధోష్ణ కాదు. ఎంపికలు (b) PV^2 మరియు (d) P^2V ఏ ప్రామాణిక ఉష్ణగతి ప్రక్రియకు సంబంధించిన సంబంధాలు కావు. సరైన రుద్ధోష్ణ సంబంధం PV^gamma = స్థిరం మాత్రమే, ఇక్కడ gamma > 1.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-012',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'One mole of an ideal gas at 300 K is expanded isothermally to twice its initial volume. The work done by the gas is approximately: (Given: R = 8.314 J mol^-1 K^-1, ln 2 = 0.693)',
    textTe: '300 K వద్ద ఒక మోల్ ఆదర్శ వాయువు దాని ప్రారంభ ఘనపరిమాణం రెట్టింపుకు సమోష్ణంగా వ్యాకోచం చెందుతుంది. వాయువు చేసిన పని సుమారు: (ఇవ్వబడినది: R = 8.314 J mol^-1 K^-1, ln 2 = 0.693)',
    options: [
      {
        id: 'a',
        text: '1247 J',
        textTe: '1247 J',
      },
      {
        id: 'b',
        text: '2494 J',
        textTe: '2494 J',
      },
      {
        id: 'c',
        text: '4988 J',
        textTe: '4988 J',
      },
      {
        id: 'd',
        text: '1729 J',
        textTe: '1729 J',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'For isothermal expansion, work done by the gas is W = nRT ln(V2/V1). Here n = 1 mol, R = 8.314 J/(mol K), T = 300 K, and V2/V1 = 2. So W = 1 x 8.314 x 300 x ln(2) = 2494.2 x 0.693 = 1728.5 J, which is approximately 1729 J. Note that nRT = 2494 J, but the work is less than this because of the ln 2 factor.',
    explanationTe:
      'సమోష్ణ వ్యాకోచానికి, వాయువు చేసిన పని W = nRT ln(V2/V1). ఇక్కడ n = 1 mol, R = 8.314 J/(mol K), T = 300 K, మరియు V2/V1 = 2. కాబట్టి W = 1 x 8.314 x 300 x ln(2) = 2494.2 x 0.693 = 1728.5 J, ఇది సుమారు 1729 J. nRT = 2494 J అని గమనించండి, కానీ ln 2 కారకం వల్ల పని దీని కంటే తక్కువ.',
    eliminationTechnique:
      'Option (b) 2494 J is just nRT without multiplying by ln 2. Option (c) 4988 J is 2nRT, likely from using n = 2 incorrectly. Option (a) 1247 J is nRT/2, which has no physical basis. The correct answer requires multiplying nRT by ln 2: 2494.2 x 0.693 = 1729 J.',
    eliminationTechniqueTe:
      'ఎంపిక (b) 2494 J అనేది ln 2 తో గుణించకుండా కేవలం nRT. ఎంపిక (c) 4988 J అనేది n = 2 తప్పుగా ఉపయోగించి 2nRT. ఎంపిక (a) 1247 J అనేది nRT/2, దీనికి భౌతిక ఆధారం లేదు. సరైన సమాధానానికి nRT ని ln 2 తో గుణించాలి: 2494.2 x 0.693 = 1729 J.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-013',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'When 1000 J of heat is added reversibly and isothermally to a system at 500 K, the change in entropy of the system is:',
    textTe: '500 K వద్ద ఒక వ్యవస్థకు 1000 J ఉష్ణం విరామయోగ్యంగా మరియు సమోష్ణంగా జోడించినప్పుడు, వ్యవస్థ యొక్క ఎంట్రోపీలో మార్పు:',
    options: [
      {
        id: 'a',
        text: '0.5 J/K',
        textTe: '0.5 J/K',
      },
      {
        id: 'b',
        text: '2 J/K',
        textTe: '2 J/K',
      },
      {
        id: 'c',
        text: '5 J/K',
        textTe: '5 J/K',
      },
      {
        id: 'd',
        text: '500 J/K',
        textTe: '500 J/K',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'For a reversible isothermal process, the change in entropy is given by dS = Q_rev / T. Here Q = 1000 J and T = 500 K, so dS = 1000/500 = 2 J/K. Entropy increases because heat is added to the system. This formula only applies directly when the process is both reversible and isothermal.',
    explanationTe:
      'విరామయోగ్య సమోష్ణ ప్రక్రియకు, ఎంట్రోపీలో మార్పు dS = Q_rev / T ద్వారా ఇవ్వబడుతుంది. ఇక్కడ Q = 1000 J మరియు T = 500 K, కాబట్టి dS = 1000/500 = 2 J/K. వ్యవస్థకు ఉష్ణం జోడించబడినందున ఎంట్రోపీ పెరుగుతుంది. ప్రక్రియ విరామయోగ్యంగా మరియు సమోష్ణంగా ఉన్నప్పుడు మాత్రమే ఈ సూత్రం నేరుగా వర్తిస్తుంది.',
    eliminationTechnique:
      'Option (a) 0.5 J/K results from dividing T by Q (500/1000) instead of Q by T. Option (c) 5 J/K has no basis in the calculation. Option (d) 500 J/K confuses the temperature value with the entropy change. The straightforward calculation dS = Q/T = 1000/500 = 2 J/K confirms (b).',
    eliminationTechniqueTe:
      'ఎంపిక (a) 0.5 J/K అనేది Q ద్వారా T ను భాగించడం వల్ల వస్తుంది (500/1000), T ద్వారా Q కాదు. ఎంపిక (c) 5 J/K కు లెక్కింపులో ఆధారం లేదు. ఎంపిక (d) 500 J/K ఉష్ణోగ్రత విలువను ఎంట్రోపీ మార్పుతో గందరగోళం చేస్తుంది. dS = Q/T = 1000/500 = 2 J/K అనే సూటి లెక్కింపు (b) ను నిర్ధారిస్తుంది.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-014',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'A gas undergoes a cyclic process ABCDA on a PV diagram forming a rectangle with corners at A(1 L, 100 kPa), B(3 L, 100 kPa), C(3 L, 300 kPa), and D(1 L, 300 kPa). The net work done by the gas per cycle is:',
    textTe: 'ఒక వాయువు PV రేఖాచిత్రంపై ABCDA చక్రీయ ప్రక్రియను చతురస్రం రూపంలో A(1 L, 100 kPa), B(3 L, 100 kPa), C(3 L, 300 kPa), మరియు D(1 L, 300 kPa) మూలలతో అనుసరిస్తుంది. ప్రతి చక్రానికి వాయువు చేసిన నికర పని:',
    options: [
      {
        id: 'a',
        text: '400 J',
        textTe: '400 J',
      },
      {
        id: 'b',
        text: '600 J',
        textTe: '600 J',
      },
      {
        id: 'c',
        text: '200 J',
        textTe: '200 J',
      },
      {
        id: 'd',
        text: '800 J',
        textTe: '800 J',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'The net work done in a cyclic process equals the area enclosed by the cycle on the PV diagram. For a rectangle, Area = length x breadth = (V2 - V1) x (P2 - P1). Here, Area = (3 - 1) L x (300 - 100) kPa = 2 x 10^-3 m^3 x 200 x 10^3 Pa = 400 J. The direction of traversal (clockwise = positive work done by gas) determines the sign.',
    explanationTe:
      'చక్రీయ ప్రక్రియలో నికర పని PV రేఖాచిత్రంపై చక్రం చుట్టూ ఉన్న వైశాల్యానికి సమానం. చతురస్రానికి, వైశాల్యం = పొడవు x వెడల్పు = (V2 - V1) x (P2 - P1). ఇక్కడ, వైశాల్యం = (3 - 1) L x (300 - 100) kPa = 2 x 10^-3 m^3 x 200 x 10^3 Pa = 400 J. ప్రయాణ దిశ (సవ్య దిశ = వాయువు చేసిన ధనాత్మక పని) చిహ్నాన్ని నిర్ణయిస్తుంది.',
    eliminationTechnique:
      'The area of the rectangle is straightforward: dV = 2 L = 0.002 m^3, dP = 200 kPa = 200000 Pa. Product = 0.002 x 200000 = 400 J. Option (b) 600 J and (d) 800 J are too large. Option (c) 200 J likely comes from forgetting to convert units properly or using only half the pressure difference.',
    eliminationTechniqueTe:
      'చతురస్ర వైశాల్యం సూటిగా ఉంటుంది: dV = 2 L = 0.002 m^3, dP = 200 kPa = 200000 Pa. లబ్ధం = 0.002 x 200000 = 400 J. ఎంపిక (b) 600 J మరియు (d) 800 J చాలా పెద్దవి. ఎంపిక (c) 200 J యూనిట్లను సరిగ్గా మార్చకపోవడం వల్ల వచ్చే అవకాశం ఉంది.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-015',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'For one mole of an ideal gas, the difference between the molar specific heat at constant pressure (Cp) and the molar specific heat at constant volume (Cv) equals:',
    textTe: 'ఒక మోల్ ఆదర్శ వాయువుకు, స్థిర పీడనం వద్ద మోలార్ విశిష్ట ఉష్ణం (Cp) మరియు స్థిర ఘనపరిమాణం వద్ద మోలార్ విశిష్ట ఉష్ణం (Cv) మధ్య తేడా సమానం:',
    options: [
      {
        id: 'a',
        text: 'gamma R, where gamma = Cp/Cv',
        textTe: 'gamma R, ఇక్కడ gamma = Cp/Cv',
      },
      {
        id: 'b',
        text: 'Cp/Cv',
        textTe: 'Cp/Cv',
      },
      {
        id: 'c',
        text: 'R/(gamma - 1)',
        textTe: 'R/(gamma - 1)',
      },
      {
        id: 'd',
        text: 'R (the universal gas constant)',
        textTe: 'R (సార్వత్రిక వాయువు స్థిరాంకం)',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'Mayer\'s relation states that for an ideal gas, Cp - Cv = R, where R = 8.314 J/(mol K) is the universal gas constant. This arises because at constant pressure, the gas does extra PdV work. For n moles, Cp - Cv = nR. Note that Cv = R/(gamma - 1) and Cp = gamma R/(gamma - 1), and their difference is always R per mole.',
    explanationTe:
      'Mayer సంబంధం ప్రకారం ఆదర్శ వాయువుకు, Cp - Cv = R, ఇక్కడ R = 8.314 J/(mol K) సార్వత్రిక వాయువు స్థిరాంకం. స్థిర పీడనం వద్ద, వాయువు అదనపు PdV పని చేయడం వల్ల ఇది ఏర్పడుతుంది. n మోల్‌లకు, Cp - Cv = nR. Cv = R/(gamma - 1) మరియు Cp = gamma R/(gamma - 1), మరియు వాటి తేడా ఒక్కో మోల్‌కు ఎల్లప్పుడూ R.',
    eliminationTechnique:
      'Option (a) gamma R is larger than R since gamma > 1, making it incorrect. Option (b) Cp/Cv equals gamma, which is a ratio and not a difference. Option (c) R/(gamma - 1) equals Cv itself, not the difference Cp - Cv. Only (d) R correctly gives Mayer\'s relation.',
    eliminationTechniqueTe:
      'ఎంపిక (a) gamma R అనేది gamma > 1 కాబట్టి R కంటే పెద్దది, ఇది తప్పు. ఎంపిక (b) Cp/Cv gamma కు సమానం, ఇది నిష్పత్తి, తేడా కాదు. ఎంపిక (c) R/(gamma - 1) Cv కే సమానం, Cp - Cv తేడా కాదు. (d) R మాత్రమే Mayer సంబంధాన్ని సరిగ్గా ఇస్తుంది.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-016',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'A Carnot refrigerator operates between a cold reservoir at 250 K and a hot reservoir at 300 K. Its coefficient of performance (COP) is:',
    textTe: '250 K వద్ద శీతల భాండం మరియు 300 K వద్ద ఉష్ణ భాండం మధ్య Carnot శీతలీకరణ యంత్రం పని చేస్తుంది. దాని పనితీరు గుణకం (COP):',
    options: [
      {
        id: 'a',
        text: '0.2',
        textTe: '0.2',
      },
      {
        id: 'b',
        text: '1.2',
        textTe: '1.2',
      },
      {
        id: 'c',
        text: '5',
        textTe: '5',
      },
      {
        id: 'd',
        text: '6',
        textTe: '6',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'The COP of a Carnot refrigerator is given by COP = T_cold / (T_hot - T_cold). Here, T_cold = 250 K and T_hot = 300 K. So COP = 250 / (300 - 250) = 250 / 50 = 5. This means for every 1 J of work input, the refrigerator removes 5 J of heat from the cold reservoir. The COP of a Carnot refrigerator is the maximum COP possible between these temperatures.',
    explanationTe:
      'Carnot శీతలీకరణ యంత్రం యొక్క COP = T_cold / (T_hot - T_cold) ద్వారా ఇవ్వబడుతుంది. ఇక్కడ, T_cold = 250 K మరియు T_hot = 300 K. కాబట్టి COP = 250 / (300 - 250) = 250 / 50 = 5. అంటే ప్రతి 1 J పని ఇన్‌పుట్‌కు, శీతలీకరణ యంత్రం శీతల భాండం నుండి 5 J ఉష్ణాన్ని తొలగిస్తుంది. ఈ ఉష్ణోగ్రతల మధ్య సాధ్యమైన గరిష్ట COP ఇది.',
    eliminationTechnique:
      'Option (a) 0.2 is the reciprocal of 5, likely from using (T_hot - T_cold)/T_cold by mistake. Option (b) 1.2 could result from an incorrect formula. Option (d) 6 would be the COP of a Carnot heat pump (T_hot/(T_hot - T_cold) = 300/50 = 6), not a refrigerator. COP_refrigerator = T_cold/(T_hot - T_cold) = 5.',
    eliminationTechniqueTe:
      'ఎంపిక (a) 0.2 అనేది 5 యొక్క విలోమం, తప్పుగా (T_hot - T_cold)/T_cold ఉపయోగించడం వల్ల వచ్చే అవకాశం ఉంది. ఎంపిక (b) 1.2 తప్పు సూత్రం నుండి వచ్చి ఉండవచ్చు. ఎంపిక (d) 6 Carnot ఉష్ణ పంపు యొక్క COP (T_hot/(T_hot - T_cold) = 300/50 = 6), శీతలీకరణ యంత్రం కాదు. COP_refrigerator = T_cold/(T_hot - T_cold) = 5.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-017',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'A gas undergoes a cyclic process along a triangular path on a PV diagram with vertices at (2 L, 100 kPa), (4 L, 100 kPa), and (4 L, 300 kPa). The net work done by the gas per cycle is:',
    textTe: 'ఒక వాయువు PV రేఖాచిత్రంపై (2 L, 100 kPa), (4 L, 100 kPa), మరియు (4 L, 300 kPa) శీర్షాలతో త్రికోణ మార్గంలో చక్రీయ ప్రక్రియను అనుసరిస్తుంది. ప్రతి చక్రానికి వాయువు చేసిన నికర పని:',
    options: [
      {
        id: 'a',
        text: '100 J',
        textTe: '100 J',
      },
      {
        id: 'b',
        text: '200 J',
        textTe: '200 J',
      },
      {
        id: 'c',
        text: '400 J',
        textTe: '400 J',
      },
      {
        id: 'd',
        text: '600 J',
        textTe: '600 J',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'The net work done in a cyclic process equals the area enclosed by the path on the PV diagram. For a triangle, Area = (1/2) x base x height. Base = (4 - 2) L = 2 L = 2 x 10^-3 m^3. Height = (300 - 100) kPa = 200 kPa = 200 x 10^3 Pa. Area = (1/2) x 2 x 10^-3 x 200 x 10^3 = (1/2) x 400 = 200 J.',
    explanationTe:
      'చక్రీయ ప్రక్రియలో నికర పని PV రేఖాచిత్రంపై మార్గం చుట్టూ ఉన్న వైశాల్యానికి సమానం. త్రికోణానికి, వైశాల్యం = (1/2) x భూమి x ఎత్తు. భూమి = (4 - 2) L = 2 L = 2 x 10^-3 m^3. ఎత్తు = (300 - 100) kPa = 200 kPa = 200 x 10^3 Pa. వైశాల్యం = (1/2) x 2 x 10^-3 x 200 x 10^3 = (1/2) x 400 = 200 J.',
    eliminationTechnique:
      'Option (c) 400 J forgets the factor of 1/2 for a triangle and incorrectly uses the rectangle area formula. Option (a) 100 J may come from using 1/4 of the rectangle area. Option (d) 600 J is too large and has no basis. Remember: triangle area = half of base times height.',
    eliminationTechniqueTe:
      'ఎంపిక (c) 400 J త్రికోణానికి 1/2 కారకాన్ని మరచిపోయి చతురస్ర వైశాల్య సూత్రాన్ని తప్పుగా ఉపయోగిస్తుంది. ఎంపిక (a) 100 J చతురస్ర వైశాల్యంలో 1/4 ఉపయోగించడం వల్ల వచ్చి ఉండవచ్చు. ఎంపిక (d) 600 J చాలా పెద్దది మరియు ఆధారం లేదు. గుర్తుంచుకోండి: త్రికోణ వైశాల్యం = భూమి సార్లు ఎత్తులో సగం.',
    difficulty: 'medium',
  },
  {
    id: 'phy-thd-018',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'An ideal gas undergoes free expansion (expansion into vacuum). Which of the following is correct?',
    textTe: 'ఆదర్శ వాయువు స్వేచ్ఛా వ్యాకోచం (శూన్యంలోకి వ్యాకోచం) చెందుతుంది. కింది వాటిలో ఏది సరైనది?',
    options: [
      {
        id: 'a',
        text: 'Q = 0, W = 0, and change in internal energy = 0',
        textTe: 'Q = 0, W = 0, మరియు అంతర శక్తిలో మార్పు = 0',
      },
      {
        id: 'b',
        text: 'Q = 0, W > 0, and change in internal energy < 0',
        textTe: 'Q = 0, W > 0, మరియు అంతర శక్తిలో మార్పు < 0',
      },
      {
        id: 'c',
        text: 'Q > 0, W = 0, and change in internal energy > 0',
        textTe: 'Q > 0, W = 0, మరియు అంతర శక్తిలో మార్పు > 0',
      },
      {
        id: 'd',
        text: 'Q > 0, W > 0, and change in internal energy = 0',
        textTe: 'Q > 0, W > 0, మరియు అంతర శక్తిలో మార్పు = 0',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'In free expansion, the gas expands into a vacuum against zero external pressure. Since P_ext = 0, the work done W = integral of P_ext dV = 0. Free expansion is also adiabatic (typically done in an insulated container), so Q = 0. By the first law, dU = Q - W = 0 - 0 = 0. For an ideal gas, since dU = 0, the temperature also remains unchanged.',
    explanationTe:
      'స్వేచ్ఛా వ్యాకోచంలో, వాయువు సున్నా బాహ్య పీడనానికి వ్యతిరేకంగా శూన్యంలోకి వ్యాకోచం చెందుతుంది. P_ext = 0 కాబట్టి, చేసిన పని W = P_ext dV యొక్క సమాకలనం = 0. స్వేచ్ఛా వ్యాకోచం రుద్ధోష్ణ కూడా (సాధారణంగా ఇన్సులేటెడ్ కంటైనర్‌లో చేయబడుతుంది), కాబట్టి Q = 0. మొదటి నియమం ప్రకారం, dU = Q - W = 0 - 0 = 0. ఆదర్శ వాయువుకు, dU = 0 కాబట్టి, ఉష్ణోగ్రత కూడా మారదు.',
    eliminationTechnique:
      'Key insight: in free expansion into vacuum, external pressure is zero, so W = 0. This eliminates options (b) and (d) which claim W > 0. Since the system is insulated, Q = 0, which eliminates option (c) claiming Q > 0. Only (a) correctly identifies all three quantities as zero.',
    eliminationTechniqueTe:
      'ముఖ్య అంతర్దృష్టి: శూన్యంలోకి స్వేచ్ఛా వ్యాకోచంలో, బాహ్య పీడనం సున్నా, కాబట్టి W = 0. ఇది W > 0 అని పేర్కొనే ఎంపికలు (b) మరియు (d) ను తొలగిస్తుంది. వ్యవస్థ ఇన్సులేటెడ్ కాబట్టి, Q = 0, ఇది Q > 0 అని పేర్కొనే ఎంపిక (c) ను తొలగిస్తుంది. (a) మాత్రమే మూడు పరిమాణాలను సున్నాగా సరిగ్గా గుర్తిస్తుంది.',
    difficulty: 'medium',
  },

  // ===== HARD (7 questions): Q19–Q25 =====
  {
    id: 'phy-thd-019',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'Two Carnot engines A and B are connected in series. Engine A receives heat from a hot reservoir at 900 K and rejects heat to a reservoir at temperature T. Engine B receives the heat rejected by A and rejects heat to a cold reservoir at 400 K. If both engines have equal efficiency, the temperature T is:',
    textTe: 'రెండు Carnot యంత్రాలు A మరియు B శ్రేణిలో అనుసంధానమై ఉన్నాయి. యంత్రం A, 900 K వద్ద ఉష్ణ భాండం నుండి ఉష్ణాన్ని గ్రహించి T ఉష్ణోగ్రత వద్ద భాండానికి ఉష్ణాన్ని తిరస్కరిస్తుంది. యంత్రం B, A తిరస్కరించిన ఉష్ణాన్ని గ్రహించి 400 K వద్ద శీతల భాండానికి ఉష్ణాన్ని తిరస్కరిస్తుంది. రెండు యంత్రాలు సమాన సామర్థ్యం కలిగి ఉంటే, ఉష్ణోగ్రత T:',
    options: [
      {
        id: 'a',
        text: '500 K',
        textTe: '500 K',
      },
      {
        id: 'b',
        text: '550 K',
        textTe: '550 K',
      },
      {
        id: 'c',
        text: '600 K',
        textTe: '600 K',
      },
      {
        id: 'd',
        text: '650 K',
        textTe: '650 K',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'For Carnot engine A: efficiency eta_A = 1 - T/900. For engine B: eta_B = 1 - 400/T. Setting eta_A = eta_B: 1 - T/900 = 1 - 400/T. Simplifying: T/900 = 400/T. Cross-multiplying: T^2 = 900 x 400 = 360000. Therefore T = sqrt(360000) = 600 K. This is the geometric mean of the two extreme temperatures: T = sqrt(T1 x T2).',
    explanationTe:
      'Carnot యంత్రం A కు: సామర్థ్యం eta_A = 1 - T/900. యంత్రం B కు: eta_B = 1 - 400/T. eta_A = eta_B గా సెట్ చేయగా: 1 - T/900 = 1 - 400/T. సరళీకరించగా: T/900 = 400/T. క్రాస్ గుణించగా: T^2 = 900 x 400 = 360000. కాబట్టి T = sqrt(360000) = 600 K. ఇది రెండు అంతిమ ఉష్ణోగ్రతల జ్యామితీయ మధ్యమం: T = sqrt(T1 x T2).',
    eliminationTechnique:
      'The intermediate temperature T must lie between 400 K and 900 K. For equal efficiencies, T must be the geometric mean of 900 and 400, i.e., T = sqrt(900 x 400) = sqrt(360000) = 600 K. Options (a) 500 K is the arithmetic mean minus 150 K. Option (b) 550 K is close to the arithmetic mean (650 K) but incorrect. Option (d) 650 K is the arithmetic mean, not the geometric mean.',
    eliminationTechniqueTe:
      'మధ్యస్థ ఉష్ణోగ్రత T 400 K మరియు 900 K మధ్య ఉండాలి. సమాన సామర్థ్యాలకు, T 900 మరియు 400 యొక్క జ్యామితీయ మధ్యమం అయి ఉండాలి, అంటే T = sqrt(900 x 400) = 600 K. ఎంపిక (a) 500 K తప్పు. ఎంపిక (b) 550 K అంకగణిత మధ్యమానికి దగ్గరగా ఉంది కానీ సరైనది కాదు. ఎంపిక (d) 650 K అంకగణిత మధ్యమం, జ్యామితీయ మధ్యమం కాదు.',
    difficulty: 'hard',
  },
  {
    id: 'phy-thd-020',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'An ideal monoatomic gas (gamma = 5/3) at 300 K is compressed adiabatically to 1/8th of its original volume. The final temperature of the gas is:',
    textTe: '300 K వద్ద ఆదర్శ ఏకపరమాణు వాయువు (gamma = 5/3) దాని అసలు ఘనపరిమాణంలో 1/8 వ వంతుకు రుద్ధోష్ణంగా సంపీడనం చేయబడింది. వాయువు యొక్క తుది ఉష్ణోగ్రత:',
    options: [
      {
        id: 'a',
        text: '600 K',
        textTe: '600 K',
      },
      {
        id: 'b',
        text: '800 K',
        textTe: '800 K',
      },
      {
        id: 'c',
        text: '900 K',
        textTe: '900 K',
      },
      {
        id: 'd',
        text: '1200 K',
        textTe: '1200 K',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'For an adiabatic process, T1 x V1^(gamma-1) = T2 x V2^(gamma-1). Therefore T2 = T1 x (V1/V2)^(gamma-1). Here T1 = 300 K, V1/V2 = 8 (since V2 = V1/8), and gamma - 1 = 5/3 - 1 = 2/3. So T2 = 300 x 8^(2/3) = 300 x (2^3)^(2/3) = 300 x 2^2 = 300 x 4 = 1200 K. The gas heats up significantly during adiabatic compression.',
    explanationTe:
      'రుద్ధోష్ణ ప్రక్రియకు, T1 x V1^(gamma-1) = T2 x V2^(gamma-1). కాబట్టి T2 = T1 x (V1/V2)^(gamma-1). ఇక్కడ T1 = 300 K, V1/V2 = 8 (V2 = V1/8 కాబట్టి), మరియు gamma - 1 = 5/3 - 1 = 2/3. కాబట్టి T2 = 300 x 8^(2/3) = 300 x (2^3)^(2/3) = 300 x 2^2 = 300 x 4 = 1200 K. రుద్ధోష్ణ సంపీడనం సమయంలో వాయువు గణనీయంగా వేడెక్కుతుంది.',
    eliminationTechnique:
      'The key calculation is 8^(2/3). Since 8 = 2^3, we get 8^(2/3) = (2^3)^(2/3) = 2^2 = 4. So T2 = 300 x 4 = 1200 K. Option (a) 600 K uses a factor of 2 instead of 4. Option (b) 800 K has no clear basis. Option (c) 900 K may come from incorrectly using 8^(1/3) = 2 and then multiplying 300 x 3.',
    eliminationTechniqueTe:
      'ముఖ్య లెక్కింపు 8^(2/3). 8 = 2^3 కాబట్టి, 8^(2/3) = (2^3)^(2/3) = 2^2 = 4 వస్తుంది. కాబట్టి T2 = 300 x 4 = 1200 K. ఎంపిక (a) 600 K 4 బదులు 2 కారకాన్ని ఉపయోగిస్తుంది. ఎంపిక (b) 800 K కు స్పష్టమైన ఆధారం లేదు. ఎంపిక (c) 900 K 8^(1/3) = 2 ను తప్పుగా ఉపయోగించి 300 x 3 గుణించడం వల్ల వచ్చి ఉండవచ్చు.',
    difficulty: 'hard',
  },
  {
    id: 'phy-thd-021',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'A metal block at 600 K is brought into thermal contact with a large heat reservoir at 300 K. If 1800 J of heat flows irreversibly from the block to the reservoir, the total entropy change of the universe is approximately:',
    textTe: '600 K వద్ద లోహపు బ్లాకును 300 K వద్ద పెద్ద ఉష్ణ భాండంతో ఉష్ణ సంపర్కంలోకి తీసుకువస్తారు. 1800 J ఉష్ణం బ్లాకు నుండి భాండానికి అవిరామంగా ప్రవహిస్తే, విశ్వం యొక్క మొత్తం ఎంట్రోపీ మార్పు సుమారు:',
    options: [
      {
        id: 'a',
        text: '3.0 J/K',
        textTe: '3.0 J/K',
      },
      {
        id: 'b',
        text: '0 J/K',
        textTe: '0 J/K',
      },
      {
        id: 'c',
        text: '-3.0 J/K',
        textTe: '-3.0 J/K',
      },
      {
        id: 'd',
        text: '9.0 J/K',
        textTe: '9.0 J/K',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'The entropy change of the universe is the sum of entropy changes of the block and the reservoir. The reservoir gains heat: dS_reservoir = +Q/T_reservoir = +1800/300 = +6.0 J/K. The block loses heat: dS_block = -Q/T_block = -1800/600 = -3.0 J/K. Total: dS_universe = 6.0 + (-3.0) = +3.0 J/K. This is positive, consistent with the second law for irreversible processes.',
    explanationTe:
      'విశ్వం యొక్క ఎంట్రోపీ మార్పు బ్లాకు మరియు భాండం యొక్క ఎంట్రోపీ మార్పుల మొత్తం. భాండం ఉష్ణాన్ని పొందుతుంది: dS_reservoir = +Q/T_reservoir = +1800/300 = +6.0 J/K. బ్లాకు ఉష్ణాన్ని కోల్పోతుంది: dS_block = -Q/T_block = -1800/600 = -3.0 J/K. మొత్తం: dS_universe = 6.0 + (-3.0) = +3.0 J/K. ఇది ధనాత్మకం, అవిరామ ప్రక్రియలకు రెండవ నియమంతో అనుగుణం.',
    eliminationTechnique:
      'Option (b) 0 J/K would only be true for a reversible process; this is irreversible. Option (c) -3.0 J/K violates the second law since entropy of the universe can never decrease. Option (d) 9.0 J/K likely adds the magnitudes instead of using proper signs. The net change must be positive but moderate: 6.0 - 3.0 = 3.0 J/K.',
    eliminationTechniqueTe:
      'ఎంపిక (b) 0 J/K విరామయోగ్య ప్రక్రియకు మాత్రమే నిజం; ఇది అవిరామం. ఎంపిక (c) -3.0 J/K రెండవ నియమాన్ని ఉల్లంఘిస్తుంది ఎందుకంటే విశ్వం యొక్క ఎంట్రోపీ ఎప్పుడూ తగ్గదు. ఎంపిక (d) 9.0 J/K సరైన చిహ్నాలను ఉపయోగించకుండా పరిమాణాలను కూడుతుంది. నికర మార్పు ధనాత్మకంగా ఉండాలి: 6.0 - 3.0 = 3.0 J/K.',
    difficulty: 'hard',
  },
  {
    id: 'phy-thd-022',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'An ideal gas is taken from state A to state C via two different paths: Path 1 is A -> B (isobaric expansion at 200 kPa from 2 L to 5 L) followed by B -> C (isochoric decrease from 200 kPa to 100 kPa at 5 L). Path 2 is directly from A to C. The total work done by the gas along Path 1 is:',
    textTe: 'ఆదర్శ వాయువు A స్థితి నుండి C స్థితికి రెండు వేర్వేరు మార్గాల ద్వారా తీసుకువెళ్ళబడుతుంది: మార్గం 1 అనేది A -> B (2 L నుండి 5 L కి 200 kPa వద్ద సమపీడన వ్యాకోచం) తర్వాత B -> C (5 L వద్ద 200 kPa నుండి 100 kPa కి సమఘనపరిమాణ తగ్గుదల). మార్గం 2 A నుండి C కి నేరుగా ఉంటుంది. మార్గం 1 వెంట వాయువు చేసిన మొత్తం పని:',
    options: [
      {
        id: 'a',
        text: '300 J',
        textTe: '300 J',
      },
      {
        id: 'b',
        text: '600 J',
        textTe: '600 J',
      },
      {
        id: 'c',
        text: '450 J',
        textTe: '450 J',
      },
      {
        id: 'd',
        text: '900 J',
        textTe: '900 J',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'Along Path 1: Step A->B is isobaric at P = 200 kPa. Work = P x dV = 200 x 10^3 x (5 - 2) x 10^-3 = 200 x 10^3 x 3 x 10^-3 = 600 J. Step B->C is isochoric (constant volume), so dV = 0 and W = 0. Total work along Path 1 = 600 + 0 = 600 J. Note that work is a path function, so the work along Path 2 would generally be different.',
    explanationTe:
      'మార్గం 1 వెంట: దశ A->B P = 200 kPa వద్ద సమపీడనం. పని = P x dV = 200 x 10^3 x (5 - 2) x 10^-3 = 200 x 10^3 x 3 x 10^-3 = 600 J. దశ B->C సమఘనపరిమాణం (స్థిర ఘనపరిమాణం), కాబట్టి dV = 0 మరియు W = 0. మార్గం 1 వెంట మొత్తం పని = 600 + 0 = 600 J. పని మార్గ ఫలనం అని గమనించండి, కాబట్టి మార్గం 2 వెంట పని సాధారణంగా భిన్నంగా ఉంటుంది.',
    eliminationTechnique:
      'Since B->C is isochoric (constant volume), no work is done in that step. All work comes from the isobaric step A->B. W = P x dV = 200 kPa x 3 L = 200 x 10^3 x 3 x 10^-3 = 600 J. Option (a) 300 J uses only half the pressure or volume change. Option (c) 450 J averages incorrectly. Option (d) 900 J likely adds extra work from the isochoric step erroneously.',
    eliminationTechniqueTe:
      'B->C సమఘనపరిమాణం (స్థిర ఘనపరిమాణం) కాబట్టి, ఆ దశలో పని జరగదు. మొత్తం పని సమపీడన దశ A->B నుండి వస్తుంది. W = P x dV = 200 kPa x 3 L = 200 x 10^3 x 3 x 10^-3 = 600 J. ఎంపిక (a) 300 J పీడనం లేదా ఘనపరిమాణ మార్పులో సగం మాత్రమే ఉపయోగిస్తుంది. ఎంపిక (c) 450 J తప్పుగా సగటు చేస్తుంది. ఎంపిక (d) 900 J సమఘనపరిమాణ దశ నుండి తప్పుగా అదనపు పనిని జోడిస్తుంది.',
    difficulty: 'hard',
  },
  {
    id: 'phy-thd-023',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'A heat engine absorbs 2000 J of heat from a hot reservoir per cycle and has an efficiency of 40%. The work done by the engine and the heat rejected to the cold reservoir per cycle are, respectively:',
    textTe: 'ఒక ఉష్ణ యంత్రం ప్రతి చక్రానికి ఉష్ణ భాండం నుండి 2000 J ఉష్ణాన్ని గ్రహిస్తుంది మరియు 40% సామర్థ్యం కలిగి ఉంటుంది. యంత్రం చేసిన పని మరియు ప్రతి చక్రానికి శీతల భాండానికి తిరస్కరించిన ఉష్ణం, వరుసగా:',
    options: [
      {
        id: 'a',
        text: '1200 J and 800 J',
        textTe: '1200 J మరియు 800 J',
      },
      {
        id: 'b',
        text: '400 J and 1600 J',
        textTe: '400 J మరియు 1600 J',
      },
      {
        id: 'c',
        text: '800 J and 1200 J',
        textTe: '800 J మరియు 1200 J',
      },
      {
        id: 'd',
        text: '1000 J and 1000 J',
        textTe: '1000 J మరియు 1000 J',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'Efficiency eta = W/Q1, where Q1 is heat absorbed and W is work done. So W = eta x Q1 = 0.40 x 2000 = 800 J. By energy conservation in a heat engine, Q1 = W + Q2, where Q2 is heat rejected. Therefore Q2 = Q1 - W = 2000 - 800 = 1200 J. The engine converts 40% of the absorbed heat into useful work and rejects the remaining 60% to the cold reservoir.',
    explanationTe:
      'సామర్థ్యం eta = W/Q1, ఇక్కడ Q1 గ్రహించిన ఉష్ణం మరియు W చేసిన పని. కాబట్టి W = eta x Q1 = 0.40 x 2000 = 800 J. ఉష్ణ యంత్రంలో శక్తి నిత్యత్వం ప్రకారం, Q1 = W + Q2, ఇక్కడ Q2 తిరస్కరించిన ఉష్ణం. కాబట్టి Q2 = Q1 - W = 2000 - 800 = 1200 J. యంత్రం గ్రహించిన ఉష్ణంలో 40% ను ఉపయోగకరమైన పనిగా మారుస్తుంది మరియు మిగిలిన 60% ను శీతల భాండానికి తిరస్కరిస్తుంది.',
    eliminationTechnique:
      'Option (a) reverses W and Q2. Option (b) incorrectly uses 20% for work instead of 40%. Option (d) assumes 50% efficiency. Quick check: 40% of 2000 = 800 J (work), remainder = 2000 - 800 = 1200 J (rejected heat). The pair (800, 1200) matches option (c).',
    eliminationTechniqueTe:
      'ఎంపిక (a) W మరియు Q2 ను తారుమారు చేస్తుంది. ఎంపిక (b) పని కోసం 40% బదులు 20% ను తప్పుగా ఉపయోగిస్తుంది. ఎంపిక (d) 50% సామర్థ్యాన్ని అనుమానిస్తుంది. త్వరిత తనిఖీ: 2000 లో 40% = 800 J (పని), మిగిలినది = 2000 - 800 = 1200 J (తిరస్కరించిన ఉష్ణం). (800, 1200) జత ఎంపిక (c) తో సరిపోతుంది.',
    difficulty: 'hard',
  },
  {
    id: 'phy-thd-024',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'An ideal diatomic gas (gamma = 7/5) at pressure P and volume V undergoes a reversible adiabatic expansion to a final volume of 32V. The final pressure of the gas is:',
    textTe: 'P పీడనం మరియు V ఘనపరిమాణం వద్ద ఆదర్శ ద్విపరమాణు వాయువు (gamma = 7/5) 32V తుది ఘనపరిమాణానికి విరామయోగ్య రుద్ధోష్ణ వ్యాకోచం చెందుతుంది. వాయువు యొక్క తుది పీడనం:',
    options: [
      {
        id: 'a',
        text: 'P/32',
        textTe: 'P/32',
      },
      {
        id: 'b',
        text: 'P/64',
        textTe: 'P/64',
      },
      {
        id: 'c',
        text: 'P/96',
        textTe: 'P/96',
      },
      {
        id: 'd',
        text: 'P/128',
        textTe: 'P/128',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'For a reversible adiabatic process, P1 x V1^gamma = P2 x V2^gamma. So P2 = P1 x (V1/V2)^gamma = P x (V/32V)^(7/5) = P x (1/32)^(7/5). Now, 32 = 2^5, so (1/32)^(7/5) = (2^-5)^(7/5) = 2^(-7) = 1/128. Therefore P2 = P/128. The pressure drops dramatically because the volume increases 32-fold in an adiabatic expansion.',
    explanationTe:
      'విరామయోగ్య రుద్ధోష్ణ ప్రక్రియకు, P1 x V1^gamma = P2 x V2^gamma. కాబట్టి P2 = P1 x (V1/V2)^gamma = P x (V/32V)^(7/5) = P x (1/32)^(7/5). ఇప్పుడు, 32 = 2^5, కాబట్టి (1/32)^(7/5) = (2^-5)^(7/5) = 2^(-7) = 1/128. కాబట్టి P2 = P/128. రుద్ధోష్ణ వ్యాకోచంలో ఘనపరిమాణం 32 రెట్లు పెరగడం వల్ల పీడనం నాటకీయంగా తగ్గుతుంది.',
    eliminationTechnique:
      'Option (a) P/32 uses the isothermal relation PV = constant (gamma = 1) instead of adiabatic. Option (b) P/64 corresponds to gamma = 6/5, which is not the given value. Option (c) P/96 does not correspond to any standard exponent. The calculation 32^(7/5) = (2^5)^(7/5) = 2^7 = 128, giving P/128 for option (d).',
    eliminationTechniqueTe:
      'ఎంపిక (a) P/32 రుద్ధోష్ణానికి బదులు సమోష్ణ సంబంధం PV = స్థిరం (gamma = 1) ను ఉపయోగిస్తుంది. ఎంపిక (b) P/64 gamma = 6/5 కు అనుగుణంగా ఉంటుంది, ఇది ఇవ్వబడిన విలువ కాదు. ఎంపిక (c) P/96 ఏ ప్రామాణిక ఘాతాంకానికి అనుగుణంగా ఉండదు. 32^(7/5) = (2^5)^(7/5) = 2^7 = 128 అనే లెక్కింపు ఎంపిక (d) కోసం P/128 ఇస్తుంది.',
    difficulty: 'hard',
  },
  {
    id: 'phy-thd-025',
    chapterId: 'physics-thermodynamics',
    subjectId: 'physics',
    text: 'One mole of an ideal monoatomic gas (gamma = 5/3) initially at 300 K first undergoes an isothermal expansion to double its volume, and then undergoes an adiabatic expansion to double its volume again. The final temperature of the gas is approximately: (Given: 2^(2/3) = 1.587)',
    textTe: 'ఒక మోల్ ఆదర్శ ఏకపరమాణు వాయువు (gamma = 5/3) ప్రారంభంలో 300 K వద్ద ఉన్నప్పుడు, మొదట దాని ఘనపరిమాణాన్ని రెట్టింపు చేయడానికి సమోష్ణ వ్యాకోచం చెందుతుంది, తర్వాత దాని ఘనపరిమాణాన్ని మళ్ళీ రెట్టింపు చేయడానికి రుద్ధోష్ణ వ్యాకోచం చెందుతుంది. వాయువు యొక్క తుది ఉష్ణోగ్రత సుమారు: (ఇవ్వబడినది: 2^(2/3) = 1.587)',
    options: [
      {
        id: 'a',
        text: '189 K',
        textTe: '189 K',
      },
      {
        id: 'b',
        text: '150 K',
        textTe: '150 K',
      },
      {
        id: 'c',
        text: '300 K',
        textTe: '300 K',
      },
      {
        id: 'd',
        text: '240 K',
        textTe: '240 K',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'Step 1 (Isothermal expansion): The gas expands from volume V to 2V at constant temperature. Since the process is isothermal, temperature remains T1 = 300 K. Step 2 (Adiabatic expansion): The gas expands from 2V to 4V. Using T x V^(gamma-1) = constant: T1 x (2V)^(2/3) = T2 x (4V)^(2/3). So T2 = T1 x (2V/4V)^(2/3) = 300 x (1/2)^(2/3) = 300 / 2^(2/3) = 300 / 1.587 = 189 K approximately.',
    explanationTe:
      'దశ 1 (సమోష్ణ వ్యాకోచం): వాయువు స్థిర ఉష్ణోగ్రత వద్ద V నుండి 2V కి వ్యాకోచం చెందుతుంది. ప్రక్రియ సమోష్ణం కాబట్టి, ఉష్ణోగ్రత T1 = 300 K గా ఉంటుంది. దశ 2 (రుద్ధోష్ణ వ్యాకోచం): వాయువు 2V నుండి 4V కి వ్యాకోచం చెందుతుంది. T x V^(gamma-1) = స్థిరం ఉపయోగించి: T1 x (2V)^(2/3) = T2 x (4V)^(2/3). కాబట్టి T2 = T1 x (2V/4V)^(2/3) = 300 x (1/2)^(2/3) = 300 / 2^(2/3) = 300 / 1.587 = సుమారు 189 K.',
    eliminationTechnique:
      'Option (c) 300 K would be correct only if both processes were isothermal, but the second step is adiabatic so temperature must decrease. Option (d) 240 K incorrectly uses gamma - 1 = 1 instead of 2/3. Option (b) 150 K uses (1/2)^1 = 0.5 instead of (1/2)^(2/3). The correct calculation is 300/1.587 = 189 K.',
    eliminationTechniqueTe:
      'ఎంపిక (c) 300 K రెండు ప్రక్రియలు సమోష్ణం అయితే మాత్రమే సరైనది, కానీ రెండవ దశ రుద్ధోష్ణం కాబట్టి ఉష్ణోగ్రత తగ్గాలి. ఎంపిక (d) 240 K 2/3 బదులు gamma - 1 = 1 ను తప్పుగా ఉపయోగిస్తుంది. ఎంపిక (b) 150 K (1/2)^(2/3) బదులు (1/2)^1 = 0.5 ను ఉపయోగిస్తుంది. సరైన లెక్కింపు 300/1.587 = 189 K.',
    difficulty: 'hard',
  },
];
