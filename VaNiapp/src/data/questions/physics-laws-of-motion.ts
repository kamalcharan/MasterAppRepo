import { Question } from '../../types';

export const physicsLawsOfMotionQuestions: Question[] = [
  // ──────────────────────────────────────────────
  // EASY — 8 questions (phy-lom-001 … 008)
  // ──────────────────────────────────────────────

  // Q1 — Newton's First Law (Inertia) — easy — answer: c
  {
    id: 'phy-lom-001',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A passenger standing in a bus falls forward when the bus suddenly stops. This is due to:',
    textTe: 'బస్సు అకస్మాత్తుగా ఆగినప్పుడు బస్సులో నిలబడి ఉన్న ప్రయాణికుడు ముందుకు పడతాడు. దీనికి కారణం:',
    options: [
      { id: 'a', text: 'Gravitational pull of the earth', textTe: 'భూమి యొక్క గురుత్వాకర్షణ బలం' },
      { id: 'b', text: 'Frictional force acting on the passenger', textTe: 'ప్రయాణికుడిపై పనిచేసే ఘర్షణ బలం' },
      { id: 'c', text: 'Inertia of motion of the passenger', textTe: 'ప్రయాణికుడి చలన జడత్వం' },
      { id: 'd', text: 'Reaction force from the bus floor', textTe: 'బస్సు అంతస్తు నుండి ప్రతిచర్య బలం' },
    ],
    correctOptionId: 'c',
    explanation:
      'When the bus stops suddenly, the lower part of the passenger\'s body comes to rest along with the bus due to friction with the floor. However, the upper body continues to move forward due to inertia of motion (Newton\'s first law). This is why the passenger falls forward.',
    explanationTe:
      'బస్సు అకస్మాత్తుగా ఆగినప్పుడు, ప్రయాణికుడి శరీరం యొక్క దిగువ భాగం నేలతో ఘర్షణ వల్ల బస్సుతో పాటు ఆగిపోతుంది. అయితే, ఎగువ భాగం చలన జడత్వం (Newton మొదటి నియమం) కారణంగా ముందుకు కదులుతూనే ఉంటుంది. అందువల్ల ప్రయాణికుడు ముందుకు పడతాడు.',
    eliminationTechnique:
      'Gravity acts vertically downward, not in the forward direction — eliminate (a). Friction between the feet and the floor actually helps the lower body stop; it does not push the passenger forward — eliminate (b). The normal reaction from the floor is also vertical and does not cause forward motion — eliminate (d).',
    eliminationTechniqueTe:
      'గురుత్వాకర్షణ నిలువుగా కిందికి పనిచేస్తుంది, ముందుకు కాదు — (a) తొలగించండి. పాదాలు మరియు నేల మధ్య ఘర్షణ దిగువ శరీరాన్ని ఆపడానికి సహాయపడుతుంది, ముందుకు నెట్టదు — (b) తొలగించండి. నేల నుండి అభిలంబ ప్రతిచర్య కూడా నిలువుగా ఉంటుంది, ముందుకు చలనానికి కారణం కాదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  // Q2 — Newton's Second Law (basic F = ma) — easy — answer: b
  {
    id: 'phy-lom-002',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A constant force of 20 N acts on a body of mass 4 kg initially at rest on a smooth surface. The acceleration produced in the body is:',
    textTe: 'నున్నని తలంపై విరామంలో ఉన్న 4 kg ద్రవ్యరాశి గల వస్తువుపై 20 N స్థిర బలం పనిచేస్తుంది. వస్తువులో ఉత్పన్నమయ్యే త్వరణం:',
    options: [
      { id: 'a', text: '80 m/s²', textTe: '80 m/s²' },
      { id: 'b', text: '5 m/s²', textTe: '5 m/s²' },
      { id: 'c', text: '0.2 m/s²', textTe: '0.2 m/s²' },
      { id: 'd', text: '24 m/s²', textTe: '24 m/s²' },
    ],
    correctOptionId: 'b',
    explanation:
      'By Newton\'s second law, F = ma. Therefore a = F/m = 20/4 = 5 m/s². The surface is smooth, so there is no friction to consider.',
    explanationTe:
      'Newton రెండవ నియమం ప్రకారం, F = ma. కాబట్టి a = F/m = 20/4 = 5 m/s². తలం నున్నగా ఉన్నందున ఘర్షణ పరిగణించాల్సిన అవసరం లేదు.',
    eliminationTechnique:
      'Option (a) gives 80 = F × m, which is the product, not the quotient — eliminate (a). Option (c) gives 0.2 = m/F, the inverse — eliminate (c). Option (d) gives 24 = F + m, a meaningless sum — eliminate (d). Only (b) correctly divides force by mass.',
    eliminationTechniqueTe:
      '(a) 80 = F × m అనేది గుణకారం, భాగహారం కాదు — (a) తొలగించండి. (c) 0.2 = m/F అనేది విలోమం — (c) తొలగించండి. (d) 24 = F + m అనేది అర్థరహిత మొత్తం — (d) తొలగించండి. (b) మాత్రమే బలాన్ని ద్రవ్యరాశితో సరిగ్గా భాగిస్తుంది.',
    difficulty: 'easy',
  },

  // Q3 — Newton's Third Law (action-reaction) — easy — answer: a
  {
    id: 'phy-lom-003',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'When a bullet is fired from a gun, the gun recoils backward. This is best explained by:',
    textTe: 'తుపాకీ నుండి తూటా కాల్చినప్పుడు, తుపాకీ వెనుకకు తన్నుతుంది. దీనిని ఏ నియಮం ద్వారా బాగా వివరించవచ్చు:',
    options: [
      { id: 'a', text: 'Newton\'s third law of motion', textTe: 'Newton మూడవ చలన నియమం' },
      { id: 'b', text: 'Newton\'s first law of motion', textTe: 'Newton మొదటి చలన నియమం' },
      { id: 'c', text: 'Law of conservation of energy', textTe: 'శక్తి నిత్యత్వ నియమం' },
      { id: 'd', text: 'Newton\'s law of gravitation', textTe: 'Newton గురుత్వాకర్షణ నియమం' },
    ],
    correctOptionId: 'a',
    explanation:
      'When the bullet is fired, the gun exerts a forward force on the bullet and the bullet exerts an equal and opposite backward force on the gun. This action-reaction pair is a direct application of Newton\'s third law: every action has an equal and opposite reaction.',
    explanationTe:
      'తూటా కాల్చినప్పుడు, తుపాకీ తూటాపై ముందుకు బలం ప్రయోగిస్తుంది మరియు తూటా తుపాకీపై సమానమైన మరియు వ్యతిరేక వెనుకకు బలం ప్రయోగిస్తుంది. ఈ చర్య-ప్రతిచర్య జంట Newton మూడవ నియమం యొక్క ప్రత్యక్ష అనువర్తనం: ప్రతి చర్యకు సమానమైన మరియు వ్యతిరేక ప్రతిచర్య ఉంటుంది.',
    eliminationTechnique:
      'Newton\'s first law deals with inertia and objects at rest/uniform motion, not interacting forces — eliminate (b). Conservation of energy relates to energy transformations, not the recoil force — eliminate (c). Gravitation describes attraction between masses due to their mass, unrelated to firing — eliminate (d).',
    eliminationTechniqueTe:
      'Newton మొదటి నియమం జడత్వం మరియు విరామం/ఏకరీతి చలనంలో ఉన్న వస్తువులకు సంబంధించినది, పరస్పర బలాలకు కాదు — (b) తొలగించండి. శక్తి నిత్యత్వం శక్తి రూపాంతరాలకు సంబంధించినది, తిరుగు బలానికి కాదు — (c) తొలగించండి. గురుత్వాకర్షణ ద్రవ్యరాశుల మధ్య ఆకర్షణను వివరిస్తుంది, కాల్పులకు సంబంధం లేదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  // Q4 — Static Friction (basic) — easy — answer: d
  {
    id: 'phy-lom-004',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A block of mass 10 kg rests on a rough horizontal surface. The coefficient of static friction is 0.4. The maximum horizontal force that can be applied without moving the block is (g = 10 m/s²):',
    textTe: 'ముతక క్షితిజ సమాంతర తలంపై 10 kg ద్రవ్యరాశి గల బ్లాక్ విరామంలో ఉంది. స్థిర ఘర్షణ గుణకం 0.4. బ్లాక్ ను కదపకుండా ప్రయోగించగల గరిష్ఠ క్షితిజ సమాంతర బలం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '10 N', textTe: '10 N' },
      { id: 'b', text: '100 N', textTe: '100 N' },
      { id: 'c', text: '4 N', textTe: '4 N' },
      { id: 'd', text: '40 N', textTe: '40 N' },
    ],
    correctOptionId: 'd',
    explanation:
      'The maximum static friction force is f_s(max) = μ_s × N = μ_s × mg = 0.4 × 10 × 10 = 40 N. This is the maximum horizontal force the block can withstand without starting to move.',
    explanationTe:
      'గరిష్ఠ స్థిర ఘర్షణ బలం f_s(max) = μ_s × N = μ_s × mg = 0.4 × 10 × 10 = 40 N. ఇది బ్లాక్ కదలడం ప్రారంభించకుండా తట్టుకోగల గరిష్ఠ క్షితిజ సమాంతర బలం.',
    eliminationTechnique:
      'Option (a) gives only mg/10, ignoring the coefficient — eliminate (a). Option (b) gives mg without the coefficient — eliminate (b). Option (c) gives just μ × m, missing g — eliminate (c). The correct formula requires all three: μ_s × m × g.',
    eliminationTechniqueTe:
      '(a) mg/10 మాత్రమే ఇస్తుంది, గుణకాన్ని విస్మరిస్తుంది — (a) తొలగించండి. (b) గుణకం లేకుండా mg ఇస్తుంది — (b) తొలగించండి. (c) μ × m మాత్రమే ఇస్తుంది, g లేదు — (c) తొలగించండి. సరైన సూత్రానికి మూడూ అవసరం: μ_s × m × g.',
    difficulty: 'easy',
  },

  // Q5 — Momentum (basic calculation) — easy — answer: a
  {
    id: 'phy-lom-005',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A body of mass 2 kg is moving with a velocity of 3 m/s. The linear momentum of the body is:',
    textTe: '2 kg ద్రవ్యరాశి గల వస్తువు 3 m/s వేగంతో కదులుతోంది. వస్తువు యొక్క రేఖీయ ద్రవ్యవేగం:',
    options: [
      { id: 'a', text: '6 kg·m/s', textTe: '6 kg·m/s' },
      { id: 'b', text: '1.5 kg·m/s', textTe: '1.5 kg·m/s' },
      { id: 'c', text: '5 kg·m/s', textTe: '5 kg·m/s' },
      { id: 'd', text: '9 kg·m/s', textTe: '9 kg·m/s' },
    ],
    correctOptionId: 'a',
    explanation:
      'Linear momentum is defined as p = mv = 2 × 3 = 6 kg·m/s. Momentum is a vector quantity with the same direction as velocity.',
    explanationTe:
      'రేఖీయ ద్రవ్యవేగం p = mv = 2 × 3 = 6 kg·m/s గా నిర్వచించబడుతుంది. ద్రవ్యవేగం వేగం వలెనే దిశను కలిగి ఉన్న సదిశ రాశి.',
    eliminationTechnique:
      'Option (b) gives v/m = 3/2 = 1.5, the inverse operation — eliminate (b). Option (c) gives m + v = 5, an incorrect addition — eliminate (c). Option (d) gives v² × m/... or some other wrong combination giving 9 — eliminate (d). Momentum is simply mass times velocity.',
    eliminationTechniqueTe:
      '(b) v/m = 3/2 = 1.5 ఇస్తుంది, విలోమ చర్య — (b) తొలగించండి. (c) m + v = 5 ఇస్తుంది, తప్పు కూడిక — (c) తొలగించండి. (d) 9 అనేది తప్పు కలయిక — (d) తొలగించండి. ద్రవ్యవేగం కేవలం ద్రవ్యరాశి మరియు వేగం యొక్క లబ్దం.',
    difficulty: 'easy',
  },

  // Q6 — Free Body Diagram — easy — answer: b
  {
    id: 'phy-lom-006',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A book of mass 1 kg rests on a horizontal table. The forces acting on the book are:',
    textTe: '1 kg ద్రవ్యరాశి గల పుస్తకం క్షితిజ సమాంతర బల్లపై విరామంలో ఉంది. పుస్తకంపై పనిచేసే బలాలు:',
    options: [
      { id: 'a', text: 'Weight and friction', textTe: 'భారం మరియు ఘర్షణ' },
      { id: 'b', text: 'Weight and normal reaction', textTe: 'భారం మరియు అభిలంబ ప్రతిచర్య' },
      { id: 'c', text: 'Weight, normal reaction, and friction', textTe: 'భారం, అభిలంబ ప్రతిచర్య మరియు ఘర్షణ' },
      { id: 'd', text: 'Only weight', textTe: 'భారం మాత్రమే' },
    ],
    correctOptionId: 'b',
    explanation:
      'A book at rest on a horizontal table experiences two forces: its weight (mg) acting downward and the normal reaction (N) from the table acting upward. Since the book is not moving horizontally, there is no frictional force. These two forces are equal and opposite, keeping the book in equilibrium.',
    explanationTe:
      'క్షితిజ సమాంతర బల్లపై విరామంలో ఉన్న పుస్తకం రెండు బలాలను అనుభవిస్తుంది: కిందికి పనిచేసే దాని భారం (mg) మరియు పైకి పనిచేసే బల్ల నుండి అభిలంబ ప్రతిచర్య (N). పుస్తకం క్షితిజ సమాంతరంగా కదలనందున, ఘర్షణ బలం ఉండదు. ఈ రెండు బలాలు సమానంగా మరియు వ్యతిరేకంగా ఉండి పుస్తకాన్ని సమతౌల్యంలో ఉంచుతాయి.',
    eliminationTechnique:
      'Friction only arises when there is relative motion or a tendency of motion along the surface. The book is at rest with no horizontal force applied, so there is no friction — eliminate (a) and (c). The table exerts an upward normal reaction that balances the weight, so the book is not acted upon by weight alone — eliminate (d).',
    eliminationTechniqueTe:
      'ఘర్షణ తలం వెంట సాపేక్ష చలనం లేదా చలన ధోరణి ఉన్నప్పుడు మాత్రమే ఉత్పన్నమవుతుంది. పుస్తకం క్షితిజ సమాంతర బలం లేకుండా విరామంలో ఉంది కాబట్టి ఘర్షణ లేదు — (a) మరియు (c) తొలగించండి. బల్ల భారాన్ని సమతుల్యం చేసే పైకి అభిలంబ ప్రతిచర్యను ప్రయోగిస్తుంది, కాబట్టి భారం మాత్రమే కాదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  // Q7 — Apparent Weight in a Lift (conceptual) — easy — answer: c
  {
    id: 'phy-lom-007',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A person stands on a weighing scale inside a lift that is accelerating upward. The scale reading will be:',
    textTe: 'పైకి త్వరణంతో కదులుతున్న లిఫ్ట్ లోపల ఒక వ్యక్తి తూనిక యంత్రంపై నిలబడి ఉన్నాడు. యంత్రం చూపించే విలువ:',
    options: [
      { id: 'a', text: 'Equal to the person\'s actual weight', textTe: 'వ్యక్తి యొక్క నిజమైన భారానికి సమానం' },
      { id: 'b', text: 'Less than the person\'s actual weight', textTe: 'వ్యక్తి యొక్క నిజమైన భారం కంటే తక్కువ' },
      { id: 'c', text: 'Greater than the person\'s actual weight', textTe: 'వ్యక్తి యొక్క నిజమైన భారం కంటే ఎక్కువ' },
      { id: 'd', text: 'Zero', textTe: 'సున్నా' },
    ],
    correctOptionId: 'c',
    explanation:
      'When the lift accelerates upward, the person experiences a pseudo force downward in the lift\'s frame. The scale must push the person upward with a force N = m(g + a), which is greater than mg. Hence the apparent weight (scale reading) is greater than the actual weight.',
    explanationTe:
      'లిఫ్ట్ పైకి త్వరణంతో కదిలినప్పుడు, లిఫ్ట్ యొక్క చట్రంలో వ్యక్తి కిందికి ఒక మిథ్యా బలాన్ని అనుభవిస్తాడు. యంత్రం వ్యక్తిని N = m(g + a) బలంతో పైకి నెట్టాలి, ఇది mg కంటే ఎక్కువ. అందువల్ల ఆభాస భారం (యంత్రం చదువు) నిజమైన భారం కంటే ఎక్కువగా ఉంటుంది.',
    eliminationTechnique:
      'The scale reads the normal force, not actual weight. During upward acceleration, extra force is needed — not equal, so eliminate (a). The reading decreases only during downward acceleration — eliminate (b). Zero reading occurs only in free fall — eliminate (d).',
    eliminationTechniqueTe:
      'యంత్రం అభిలంబ బలాన్ని చదువుతుంది, నిజమైన భారాన్ని కాదు. పైకి త్వరణం సమయంలో అదనపు బలం అవసరం — సమానం కాదు, కాబట్టి (a) తొలగించండి. కిందికి త్వరణం సమయంలో మాత్రమే చదువు తగ్గుతుంది — (b) తొలగించండి. స్వేచ్ఛా పతనంలో మాత్రమే సున్నా చదువు వస్తుంది — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  // Q8 — Weight and Mass — easy — answer: d
  {
    id: 'phy-lom-008',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'An object weighs 49 N on the surface of the earth. Its mass is (g = 9.8 m/s²):',
    textTe: 'ఒక వస్తువు భూమి ఉపరితలంపై 49 N బరువు కలిగి ఉంది. దాని ద్రవ్యరాశి (g = 9.8 m/s²):',
    options: [
      { id: 'a', text: '49 kg', textTe: '49 kg' },
      { id: 'b', text: '4.9 kg', textTe: '4.9 kg' },
      { id: 'c', text: '480.2 kg', textTe: '480.2 kg' },
      { id: 'd', text: '5 kg', textTe: '5 kg' },
    ],
    correctOptionId: 'd',
    explanation:
      'Weight W = mg, so mass m = W/g = 49/9.8 = 5 kg. Weight is the gravitational force on an object and is measured in Newtons, while mass is measured in kilograms.',
    explanationTe:
      'భారం W = mg, కాబట్టి ద్రవ్యరాశి m = W/g = 49/9.8 = 5 kg. భారం అనేది వస్తువుపై గురుత్వాకర్షణ బలం మరియు Newton లలో కొలుస్తారు, ద్రవ్యరాశిని kilogram లలో కొలుస్తారు.',
    eliminationTechnique:
      'Option (a) equates weight directly to mass (49 N = 49 kg), ignoring the unit difference — eliminate (a). Option (b) divides by 10 instead of 9.8 — eliminate (b). Option (c) multiplies W × g = 49 × 9.8 = 480.2, which is the inverse operation — eliminate (c).',
    eliminationTechniqueTe:
      '(a) భారాన్ని నేరుగా ద్రవ్యరాశికి సమం చేస్తుంది (49 N = 49 kg), ప్రమాణ భేదాన్ని విస్మరిస్తుంది — (a) తొలగించండి. (b) 9.8 కు బదులు 10 తో భాగిస్తుంది — (b) తొలగించండి. (c) W × g = 49 × 9.8 = 480.2 గుణిస్తుంది, ఇది విలోమ చర్య — (c) తొలగించండి.',
    difficulty: 'easy',
  },

  // ──────────────────────────────────────────────
  // MEDIUM — 10 questions (phy-lom-009 … 018)
  // ──────────────────────────────────────────────

  // Q9 — Force on a smooth incline — medium — answer: a
  {
    id: 'phy-lom-009',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A block of mass 5 kg is placed on a smooth inclined plane making an angle of 30° with the horizontal. The net force acting on the block along the incline is (g = 10 m/s²):',
    textTe: 'క్షితిజ సమాంతరంతో 30° కోణం చేసే నున్నని వాలు తలంపై 5 kg ద్రవ్యరాశి గల బ్లాక్ ఉంచబడింది. వాలు వెంట బ్లాక్ పై పనిచేసే నికర బలం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '25 N', textTe: '25 N' },
      { id: 'b', text: '50 N', textTe: '50 N' },
      { id: 'c', text: '43.3 N', textTe: '43.3 N' },
      { id: 'd', text: '10 N', textTe: '10 N' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a smooth incline, the component of gravitational force along the incline is F = mg sin θ = 5 × 10 × sin 30° = 5 × 10 × 0.5 = 25 N. Since the plane is smooth (frictionless), this is the net force causing the block to slide down.',
    explanationTe:
      'నున్నని వాలు తలంపై, వాలు వెంట గురుత్వాకర్షణ బలం యొక్క భాగం F = mg sin θ = 5 × 10 × sin 30° = 5 × 10 × 0.5 = 25 N. తలం నున్నగా (ఘర్షణరహితం) ఉన్నందున, ఇది బ్లాక్ ను కిందికి జారడానికి కారణమయ్యే నికర బలం.',
    eliminationTechnique:
      'Option (b) gives mg = 50 N, the full weight — this would be correct only for a vertical drop, not an incline — eliminate (b). Option (c) gives mg cos 30° = 43.3 N, which is the component perpendicular to the incline (normal force related), not along it — eliminate (c). Option (d) has no meaningful formula connection — eliminate (d).',
    eliminationTechniqueTe:
      '(b) mg = 50 N, పూర్తి భారం ఇస్తుంది — ఇది నిలువు పతనానికి మాత్రమే సరైనది, వాలుకు కాదు — (b) తొలగించండి. (c) mg cos 30° = 43.3 N, వాలుకు లంబంగా ఉన్న భాగం (అభిలంబ బలం సంబంధిత), వాలు వెంట కాదు — (c) తొలగించండి. (d) కు అర్థవంతమైన సూత్ర సంబంధం లేదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  // Q10 — Connected blocks on surface — medium — answer: c
  {
    id: 'phy-lom-010',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'Two blocks of masses 3 kg and 5 kg are connected by a light string on a smooth horizontal surface. A horizontal force of 16 N is applied on the 5 kg block. The tension in the string connecting the two blocks is:',
    textTe: 'నున్నని క్షితిజ సమాంతర తలంపై 3 kg మరియు 5 kg ద్రవ్యరాశుల రెండు బ్లాక్ లు తేలికైన దారంతో అనుసంధానించబడి ఉన్నాయి. 5 kg బ్లాక్ పై 16 N క్షితిజ సమాంతర బలం ప్రయోగించబడింది. రెండు బ్లాక్ లను అనుసంధానించే దారంలో తన్యత:',
    options: [
      { id: 'a', text: '10 N', textTe: '10 N' },
      { id: 'b', text: '8 N', textTe: '8 N' },
      { id: 'c', text: '6 N', textTe: '6 N' },
      { id: 'd', text: '16 N', textTe: '16 N' },
    ],
    correctOptionId: 'c',
    explanation:
      'The system accelerates together: a = F/(m₁ + m₂) = 16/(3 + 5) = 16/8 = 2 m/s². The tension in the string equals the force needed to accelerate the 3 kg block: T = m₁ × a = 3 × 2 = 6 N.',
    explanationTe:
      'వ్యవస్థ కలిసి త్వరణం చెందుతుంది: a = F/(m₁ + m₂) = 16/(3 + 5) = 16/8 = 2 m/s². దారంలో తన్యత 3 kg బ్లాక్ ను త్వరణం చేయడానికి అవసరమైన బలానికి సమానం: T = m₁ × a = 3 × 2 = 6 N.',
    eliminationTechnique:
      'Option (d) assumes the entire applied force is transmitted as tension, ignoring that the 5 kg block also accelerates — eliminate (d). Option (a) gives T = m₂ × a = 5 × 2 = 10, which is the net force on the 5 kg block, not the tension — eliminate (a). Option (b) gives half the applied force, which has no physical basis here — eliminate (b).',
    eliminationTechniqueTe:
      '(d) ప్రయోగించిన మొత్తం బలం తన్యతగా ప్రసారమవుతుందని ఊహిస్తుంది, 5 kg బ్లాక్ కూడా త్వరణం చెందుతుందనే విషయాన్ని విస్మరిస్తుంది — (d) తొలగించండి. (a) T = m₂ × a = 5 × 2 = 10 ఇస్తుంది, ఇది 5 kg బ్లాక్ పై నికర బలం, తన్యత కాదు — (a) తొలగించండి. (b) ప్రయోగించిన బలంలో సగం ఇస్తుంది, దీనికి భౌతిక ఆధారం లేదు — (b) తొలగించండి.',
    difficulty: 'medium',
  },

  // Q11 — Impulse-Momentum Theorem — medium — answer: b
  {
    id: 'phy-lom-011',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A ball of mass 0.5 kg moving at 10 m/s is brought to rest in 0.1 s by a fielder. The average force exerted by the fielder on the ball is:',
    textTe: 'ఫీల్డర్ 10 m/s వేగంతో కదులుతున్న 0.5 kg ద్రవ్యరాశి గల బంతిని 0.1 s లో ఆపుతాడు. ఫీల్డర్ బంతిపై ప్రయోగించిన సగటు బలం:',
    options: [
      { id: 'a', text: '5 N', textTe: '5 N' },
      { id: 'b', text: '50 N', textTe: '50 N' },
      { id: 'c', text: '500 N', textTe: '500 N' },
      { id: 'd', text: '0.5 N', textTe: '0.5 N' },
    ],
    correctOptionId: 'b',
    explanation:
      'Using the impulse-momentum theorem: F × Δt = Δp = m × Δv. The change in momentum is Δp = 0.5 × (10 − 0) = 5 kg·m/s. Therefore F = Δp/Δt = 5/0.1 = 50 N.',
    explanationTe:
      'ఆవేగ-ద్రవ్యవేగ సిద్ధాంతం ఉపయోగించి: F × Δt = Δp = m × Δv. ద్రవ్యవేగంలో మార్పు Δp = 0.5 × (10 − 0) = 5 kg·m/s. కాబట్టి F = Δp/Δt = 5/0.1 = 50 N.',
    eliminationTechnique:
      'Option (a) gives m × v / (Δt × 10) = 5, missing one factor — eliminate (a). Option (c) gives m × v / Δt² = 500, squaring the time incorrectly — eliminate (c). Option (d) gives just the mass value, unrelated to the calculation — eliminate (d).',
    eliminationTechniqueTe:
      '(a) m × v / (Δt × 10) = 5 ఇస్తుంది, ఒక కారకం తప్పిపోయింది — (a) తొలగించండి. (c) m × v / Δt² = 500 ఇస్తుంది, సమయాన్ని తప్పుగా వర్గం చేస్తుంది — (c) తొలగించండి. (d) కేవలం ద్రవ్యరాశి విలువను ఇస్తుంది, లెక్కింపుకు సంబంధం లేదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  // Q12 — Centripetal Force — medium — answer: d
  {
    id: 'phy-lom-012',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A car of mass 1000 kg moves along a circular track of radius 50 m with a uniform speed of 10 m/s. The centripetal force acting on the car is:',
    textTe: '1000 kg ద్రవ్యరాశి గల కారు 50 m వ్యాసార్ధం గల వృత్తాకార మార్గంలో 10 m/s ఏకరీతి వేగంతో కదులుతోంది. కారుపై పనిచేసే అభికేంద్ర బలం:',
    options: [
      { id: 'a', text: '200 N', textTe: '200 N' },
      { id: 'b', text: '500 N', textTe: '500 N' },
      { id: 'c', text: '1000 N', textTe: '1000 N' },
      { id: 'd', text: '2000 N', textTe: '2000 N' },
    ],
    correctOptionId: 'd',
    explanation:
      'Centripetal force F = mv²/r = 1000 × (10)²/50 = 1000 × 100/50 = 2000 N. This force is directed toward the center of the circular path and is provided by the friction between the tires and the road.',
    explanationTe:
      'అభికేంద్ర బలం F = mv²/r = 1000 × (10)²/50 = 1000 × 100/50 = 2000 N. ఈ బలం వృత్తాకార మార్గం కేంద్రం వైపు దిశలో ఉంటుంది మరియు టైర్లు మరియు రోడ్డు మధ్య ఘర్షణ ద్వారా అందించబడుతుంది.',
    eliminationTechnique:
      'Option (a) gives mv/r = 1000×10/50 = 200, forgetting to square the velocity — eliminate (a). Option (b) gives m×v/... = 500, another incorrect combination — eliminate (b). Option (c) gives just the mass in Newtons, which is dimensionally wrong — eliminate (c). Remember: centripetal force requires v², not v.',
    eliminationTechniqueTe:
      '(a) mv/r = 1000×10/50 = 200 ఇస్తుంది, వేగాన్ని వర్గం చేయడం మరచిపోయింది — (a) తొలగించండి. (b) m×v/... = 500 ఇస్తుంది, మరొక తప్పు కలయిక — (b) తొలగించండి. (c) కేవలం ద్రవ్యరాశిని Newton లలో ఇస్తుంది, ఇది పరిమాణాత్మకంగా తప్పు — (c) తొలగించండి. గుర్తుంచుకోండి: అభికేంద్ర బలానికి v² అవసరం, v కాదు.',
    difficulty: 'medium',
  },

  // Q13 — Atwood Machine — medium — answer: a
  {
    id: 'phy-lom-013',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'In an Atwood machine, two masses of 3 kg and 5 kg are connected by a light string passing over a smooth, massless pulley. The acceleration of the system is (g = 10 m/s²):',
    textTe: 'Atwood యంత్రంలో, 3 kg మరియు 5 kg ద్రవ్యరాశులు నున్నని, ద్రవ్యరాశిరహిత కప్పి మీదుగా తేలికైన దారంతో అనుసంధానించబడి ఉన్నాయి. వ్యవస్థ యొక్క త్వరణం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '2.5 m/s²', textTe: '2.5 m/s²' },
      { id: 'b', text: '5 m/s²', textTe: '5 m/s²' },
      { id: 'c', text: '10 m/s²', textTe: '10 m/s²' },
      { id: 'd', text: '1.25 m/s²', textTe: '1.25 m/s²' },
    ],
    correctOptionId: 'a',
    explanation:
      'For an Atwood machine: a = (m₂ − m₁)g / (m₁ + m₂) = (5 − 3) × 10 / (5 + 3) = 20/8 = 2.5 m/s². The heavier mass accelerates downward and the lighter mass accelerates upward with the same magnitude.',
    explanationTe:
      'Atwood యంత్రానికి: a = (m₂ − m₁)g / (m₁ + m₂) = (5 − 3) × 10 / (5 + 3) = 20/8 = 2.5 m/s². భారీ ద్రవ్యరాశి కిందికి త్వరణం చెందుతుంది మరియు తేలికైన ద్రవ్యరాశి అదే పరిమాణంతో పైకి త్వరణం చెందుతుంది.',
    eliminationTechnique:
      'Option (b) uses (m₂−m₁)g/m₂ = 2×10/5 = 4... no, it gives 5 perhaps from a different wrong formula — eliminate (b). Option (c) gives g itself, which would only happen if one mass were zero — eliminate (c). Option (d) uses (m₂−m₁)g/(m₁+m₂)² or some other incorrect denominator — eliminate (d).',
    eliminationTechniqueTe:
      '(b) తప్పు సూత్రం నుండి 5 ఇస్తుంది — (b) తొలగించండి. (c) g ను అదేవిధంగా ఇస్తుంది, ఇది ఒక ద్రవ్యరాశి సున్నా అయినప్పుడు మాత్రమే జరుగుతుంది — (c) తొలగించండి. (d) తప్పు హారంతో 1.25 ఇస్తుంది — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  // Q14 — Net force with opposing forces — medium — answer: c
  {
    id: 'phy-lom-014',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'Two forces of 10 N and 6 N act simultaneously on a body of mass 2 kg in opposite directions along a straight line. The acceleration of the body is:',
    textTe: '2 kg ద్రవ్యరాశి గల వస్తువుపై 10 N మరియు 6 N బలాలు ఒక సరళరేఖ వెంట వ్యతిరేక దిశలలో ఏకకాలంలో పనిచేస్తాయి. వస్తువు యొక్క త్వరణం:',
    options: [
      { id: 'a', text: '8 m/s²', textTe: '8 m/s²' },
      { id: 'b', text: '3 m/s²', textTe: '3 m/s²' },
      { id: 'c', text: '2 m/s²', textTe: '2 m/s²' },
      { id: 'd', text: '5 m/s²', textTe: '5 m/s²' },
    ],
    correctOptionId: 'c',
    explanation:
      'When two forces act in opposite directions, the net force is their difference: F_net = 10 − 6 = 4 N. By Newton\'s second law, a = F_net/m = 4/2 = 2 m/s² in the direction of the larger force.',
    explanationTe:
      'రెండు బలాలు వ్యతిరేక దిశలలో పనిచేసినప్పుడు, నికర బలం వాటి భేదం: F_net = 10 − 6 = 4 N. Newton రెండవ నియమం ప్రకారం, a = F_net/m = 4/2 = 2 m/s² పెద్ద బలం దిశలో.',
    eliminationTechnique:
      'Option (a) uses (10+6)/2 = 8, adding forces instead of subtracting for opposite directions — eliminate (a). Option (b) uses (10−6) but divides by some wrong factor — eliminate (b). Option (d) uses 10/2 = 5, ignoring the opposing 6 N force entirely — eliminate (d).',
    eliminationTechniqueTe:
      '(a) (10+6)/2 = 8 ఉపయోగిస్తుంది, వ్యతిరేక దిశలకు తీసివేయడానికి బదులు బలాలను కలుపుతుంది — (a) తొలగించండి. (b) (10−6) ఉపయోగిస్తుంది కానీ తప్పు కారకంతో భాగిస్తుంది — (b) తొలగించండి. (d) 10/2 = 5 ఉపయోగిస్తుంది, వ్యతిరేక 6 N బలాన్ని పూర్తిగా విస్మరిస్తుంది — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  // Q15 — Finding coefficient of kinetic friction — medium — answer: b
  {
    id: 'phy-lom-015',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A body sliding on a horizontal surface with an initial velocity of 10 m/s comes to rest after covering 25 m. The coefficient of kinetic friction between the body and the surface is (g = 10 m/s²):',
    textTe: '10 m/s ప్రారంభ వేగంతో క్షితిజ సమాంతర తలంపై జారుతున్న వస్తువు 25 m దూరం ప్రయాణించిన తర్వాత ఆగిపోతుంది. వస్తువు మరియు తలం మధ్య గతిజ ఘర్షణ గుణకం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '0.1', textTe: '0.1' },
      { id: 'b', text: '0.2', textTe: '0.2' },
      { id: 'c', text: '0.4', textTe: '0.4' },
      { id: 'd', text: '0.5', textTe: '0.5' },
    ],
    correctOptionId: 'b',
    explanation:
      'Using v² = u² − 2as where a = μg (deceleration due to friction): 0 = (10)² − 2 × μ × 10 × 25. So 100 = 500μ, giving μ = 100/500 = 0.2.',
    explanationTe:
      'v² = u² − 2as ఉపయోగించి, ఇక్కడ a = μg (ఘర్షణ వల్ల మందగమనం): 0 = (10)² − 2 × μ × 10 × 25. కాబట్టి 100 = 500μ, μ = 100/500 = 0.2.',
    eliminationTechnique:
      'You can estimate: the body decelerates from 10 m/s to 0 over 25 m. Using v² = u² − 2as: a = 100/50 = 2 m/s². Since a = μg, μ = 2/10 = 0.2. Options (c) and (d) give unrealistically high deceleration for the given distance — eliminate (c) and (d). Option (a) gives a = 1 m/s², requiring 50 m to stop, not 25 m — eliminate (a).',
    eliminationTechniqueTe:
      'అంచనా వేయవచ్చు: వస్తువు 25 m లో 10 m/s నుండి 0 కి మందగమనం చెందుతుంది. v² = u² − 2as: a = 100/50 = 2 m/s². a = μg కాబట్టి, μ = 2/10 = 0.2. (c) మరియు (d) ఇచ్చిన దూరానికి అవాస్తవికంగా అధిక మందగమనం ఇస్తాయి — (c) మరియు (d) తొలగించండి. (a) a = 1 m/s² ఇస్తుంది, ఆగడానికి 50 m అవసరం, 25 m కాదు — (a) తొలగించండి.',
    difficulty: 'medium',
  },

  // Q16 — Momentum Conservation (collision) — medium — answer: d
  {
    id: 'phy-lom-016',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A bullet of mass 10 g moving with a velocity of 400 m/s gets embedded in a wooden block of mass 990 g initially at rest. The velocity of the block-bullet system after impact is:',
    textTe: '400 m/s వేగంతో కదులుతున్న 10 g ద్రవ్యరాశి గల తూటా, విరామంలో ఉన్న 990 g ద్రవ్యరాశి గల కలప బ్లాక్ లో దిగబడుతుంది. తాకిడి తర్వాత బ్లాక్-తూటా వ్యవస్థ వేగం:',
    options: [
      { id: 'a', text: '40 m/s', textTe: '40 m/s' },
      { id: 'b', text: '0.4 m/s', textTe: '0.4 m/s' },
      { id: 'c', text: '400 m/s', textTe: '400 m/s' },
      { id: 'd', text: '4 m/s', textTe: '4 m/s' },
    ],
    correctOptionId: 'd',
    explanation:
      'By conservation of linear momentum: m₁v₁ = (m₁ + m₂)v. So 0.01 × 400 = (0.01 + 0.99) × v, giving 4 = 1 × v, hence v = 4 m/s. This is a perfectly inelastic collision where the two objects stick together.',
    explanationTe:
      'రేఖీయ ద్రవ్యవేగ నిత్యత్వ నియమం ప్రకారం: m₁v₁ = (m₁ + m₂)v. కాబట్టి 0.01 × 400 = (0.01 + 0.99) × v, 4 = 1 × v, అందువల్ల v = 4 m/s. ఇది పూర్తిగా అస్థితిస్థాపక తాకిడి, ఇక్కడ రెండు వస్తువులు కలిసిపోతాయి.',
    eliminationTechnique:
      'Option (c) assumes the bullet\'s velocity is unchanged, violating momentum conservation — eliminate (c). Option (a) gives 40 m/s, which would mean the 1 kg system has momentum 40 kg·m/s, far exceeding the initial 4 kg·m/s — eliminate (a). Option (b) gives 0.4 m/s, which is off by a factor of 10 — likely a decimal error — eliminate (b).',
    eliminationTechniqueTe:
      '(c) తూటా వేగం మారలేదని ఊహిస్తుంది, ద్రవ్యవేగ నిత్యత్వాన్ని ఉల్లంఘిస్తుంది — (c) తొలగించండి. (a) 40 m/s ఇస్తుంది, దీని అర్థం 1 kg వ్యవస్థకు 40 kg·m/s ద్రవ్యవేగం ఉంటుంది, ప్రారంభ 4 kg·m/s కంటే చాలా ఎక్కువ — (a) తొలగించండి. (b) 0.4 m/s ఇస్తుంది, 10 రెట్లు తక్కువ — దశాంశ దోషం ఉండవచ్చు — (b) తొలగించండి.',
    difficulty: 'medium',
  },

  // Q17 — Apparent weight in accelerating lift (numerical) — medium — answer: a
  {
    id: 'phy-lom-017',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A person of mass 60 kg stands on a weighing scale inside a lift accelerating upward at 2 m/s². The reading on the scale is (g = 10 m/s²):',
    textTe: '60 kg ద్రవ్యరాశి గల వ్యక్తి పైకి 2 m/s² త్వరణంతో కదులుతున్న లిఫ్ట్ లోపల తూనిక యంత్రంపై నిలబడి ఉన్నాడు. యంత్రం చదువు (g = 10 m/s²):',
    options: [
      { id: 'a', text: '720 N', textTe: '720 N' },
      { id: 'b', text: '480 N', textTe: '480 N' },
      { id: 'c', text: '600 N', textTe: '600 N' },
      { id: 'd', text: '120 N', textTe: '120 N' },
    ],
    correctOptionId: 'a',
    explanation:
      'When a lift accelerates upward with acceleration a, the apparent weight (normal force) is N = m(g + a) = 60 × (10 + 2) = 60 × 12 = 720 N. The scale reads the normal force, which is the apparent weight.',
    explanationTe:
      'లిఫ్ట్ a త్వరణంతో పైకి కదిలినప్పుడు, ఆభాస భారం (అభిలంబ బలం) N = m(g + a) = 60 × (10 + 2) = 60 × 12 = 720 N. యంత్రం అభిలంబ బలాన్ని చదువుతుంది, అదే ఆభాస భారం.',
    eliminationTechnique:
      'Option (c) gives mg = 600 N, the actual weight — correct only if the lift is stationary or moving at constant velocity — eliminate (c). Option (b) gives m(g − a) = 60 × 8 = 480 N, which applies to downward acceleration — eliminate (b). Option (d) gives m × a = 120, just the net upward force, not the scale reading — eliminate (d).',
    eliminationTechniqueTe:
      '(c) mg = 600 N, నిజమైన భారం ఇస్తుంది — లిఫ్ట్ స్థిరంగా లేదా స్థిర వేగంతో కదిలినప్పుడు మాత్రమే సరైనది — (c) తొలగించండి. (b) m(g − a) = 60 × 8 = 480 N ఇస్తుంది, ఇది కిందికి త్వరణానికి వర్తిస్తుంది — (b) తొలగించండి. (d) m × a = 120 ఇస్తుంది, కేవలం నికర పైకి బలం, యంత్రం చదువు కాదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  // Q18 — Block sliding at constant velocity on incline — medium — answer: c
  {
    id: 'phy-lom-018',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A block slides down a rough inclined plane of inclination 30° with uniform velocity. The coefficient of kinetic friction between the block and the incline is:',
    textTe: '30° వాలు కలిగిన ముతక వాలు తలంపై ఒక బ్లాక్ ఏకరీతి వేగంతో కిందికి జారుతోంది. బ్లాక్ మరియు వాలు తలం మధ్య గతిజ ఘర్షణ గుణకం:',
    options: [
      { id: 'a', text: '0.500', textTe: '0.500' },
      { id: 'b', text: '0.866', textTe: '0.866' },
      { id: 'c', text: '0.577', textTe: '0.577' },
      { id: 'd', text: '0.250', textTe: '0.250' },
    ],
    correctOptionId: 'c',
    explanation:
      'When a block slides with uniform velocity, acceleration is zero, so net force is zero. Along the incline: mg sin θ = μ mg cos θ. Therefore μ = tan θ = tan 30° = 1/√3 ≈ 0.577.',
    explanationTe:
      'బ్లాక్ ఏకరీతి వేగంతో జారినప్పుడు, త్వరణం సున్నా, కాబట్టి నికర బలం సున్నా. వాలు వెంట: mg sin θ = μ mg cos θ. కాబట్టి μ = tan θ = tan 30° = 1/√3 ≈ 0.577.',
    eliminationTechnique:
      'Option (a) gives sin 30° = 0.5, confusing sine with tangent — eliminate (a). Option (b) gives cos 30° = 0.866, using the wrong trigonometric ratio — eliminate (b). Option (d) gives sin 30° × cos 30° / 2 or some other incorrect combination — eliminate (d). For uniform velocity on an incline, μ = tan θ.',
    eliminationTechniqueTe:
      '(a) sin 30° = 0.5 ఇస్తుంది, sine ను tangent తో గందరగోళం చేస్తుంది — (a) తొలగించండి. (b) cos 30° = 0.866 ఇస్తుంది, తప్పు త్రికోణమితి నిష్పత్తిని ఉపయోగిస్తుంది — (b) తొలగించండి. (d) తప్పు కలయిక నుండి 0.250 ఇస్తుంది — (d) తొలగించండి. వాలు తలంపై ఏకరీతి వేగానికి, μ = tan θ.',
    difficulty: 'medium',
  },

  // ──────────────────────────────────────────────
  // HARD — 7 questions (phy-lom-019 … 025)
  // ──────────────────────────────────────────────

  // Q19 — Incline-pulley connected system — hard — answer: b
  {
    id: 'phy-lom-019',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A block of mass 2 kg is placed on a smooth inclined plane of angle 30°. It is connected by a light, inextensible string over a frictionless pulley to a hanging block of mass 3 kg. The acceleration of the system is (g = 10 m/s²):',
    textTe: '30° కోణం గల నున్నని వాలు తలంపై 2 kg ద్రవ్యరాశి గల బ్లాక్ ఉంచబడింది. ఇది ఘర్షణరహిత కప్పి మీదుగా తేలికైన, సాగని దారంతో 3 kg ద్రవ్యరాశి గల వేలాడుతున్న బ్లాక్ కు అనుసంధానించబడింది. వ్యవస్థ యొక్క త్వరణం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '2 m/s²', textTe: '2 m/s²' },
      { id: 'b', text: '4 m/s²', textTe: '4 m/s²' },
      { id: 'c', text: '6 m/s²', textTe: '6 m/s²' },
      { id: 'd', text: '8 m/s²', textTe: '8 m/s²' },
    ],
    correctOptionId: 'b',
    explanation:
      'The hanging block (3 kg) pulls the system. Force driving the system = m₂g − m₁g sin 30° = 3(10) − 2(10)(0.5) = 30 − 10 = 20 N. Total mass = 2 + 3 = 5 kg. Acceleration a = 20/5 = 4 m/s².',
    explanationTe:
      'వేలాడుతున్న బ్లాక్ (3 kg) వ్యవస్థను లాగుతుంది. వ్యవస్థను నడిపే బలం = m₂g − m₁g sin 30° = 3(10) − 2(10)(0.5) = 30 − 10 = 20 N. మొత్తం ద్రవ్యరాశి = 2 + 3 = 5 kg. త్వరణం a = 20/5 = 4 m/s².',
    eliminationTechnique:
      'Option (a) uses only the incline component m₁g sin30° = 10 N and divides by total mass 10/5 = 2, ignoring the net force approach — eliminate (a). Option (c) uses (m₂−m₁)g/... = some wrong formula giving 6 — eliminate (c). Option (d) gives an acceleration close to g itself, which is impossible when a mass on the incline resists motion — eliminate (d).',
    eliminationTechniqueTe:
      '(a) వాలు భాగం m₁g sin30° = 10 N మాత్రమే ఉపయోగిస్తుంది మరియు మొత్తం ద్రవ్యరాశితో భాగిస్తుంది 10/5 = 2, నికర బలం విధానాన్ని విస్మరిస్తుంది — (a) తొలగించండి. (c) తప్పు సూత్రం నుండి 6 ఇస్తుంది — (c) తొలగించండి. (d) g కి దగ్గరగా త్వరణం ఇస్తుంది, వాలుపై ద్రవ్యరాశి చలనాన్ని ప్రతిఘటిస్తున్నప్పుడు ఇది అసాధ్యం — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  // Q20 — Banking of road — hard — answer: d
  {
    id: 'phy-lom-020',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A car negotiates a banked curve of radius 10 m without any friction. If the banking angle is 45°, the optimum speed of the car is (g = 10 m/s²):',
    textTe: 'ఒక కారు ఘర్షణ లేకుండా 10 m వ్యాసార్ధం గల వంపు వాలు మార్గంలో ప్రయాణిస్తుంది. వంపు కోణం 45° అయితే, కారు యొక్క సరైన వేగం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '5 m/s', textTe: '5 m/s' },
      { id: 'b', text: '20 m/s', textTe: '20 m/s' },
      { id: 'c', text: '5√2 m/s', textTe: '5√2 m/s' },
      { id: 'd', text: '10 m/s', textTe: '10 m/s' },
    ],
    correctOptionId: 'd',
    explanation:
      'For a banked road without friction: tan θ = v²/(rg). So v² = rg tan θ = 10 × 10 × tan 45° = 10 × 10 × 1 = 100. Therefore v = 10 m/s.',
    explanationTe:
      'ఘర్షణ లేని వంపు రోడ్డుకు: tan θ = v²/(rg). కాబట్టి v² = rg tan θ = 10 × 10 × tan 45° = 10 × 10 × 1 = 100. అందువల్ల v = 10 m/s.',
    eliminationTechnique:
      'Option (a) gives √(rg/4) or some other incorrect sub-formula — eliminate (a). Option (b) gives 20, which would require v² = 400, meaning tan θ = 4, far from tan 45° = 1 — eliminate (b). Option (c) gives 5√2, meaning v² = 50, which would mean rg tan θ = 50, inconsistent with the given values — eliminate (c).',
    eliminationTechniqueTe:
      '(a) తప్పు ఉప-సూత్రం నుండి √(rg/4) ఇస్తుంది — (a) తొలగించండి. (b) 20 ఇస్తుంది, దీనికి v² = 400 అవసరం, అంటే tan θ = 4, tan 45° = 1 కు చాలా దూరం — (b) తొలగించండి. (c) 5√2 ఇస్తుంది, అంటే v² = 50, rg tan θ = 50 అవుతుంది, ఇచ్చిన విలువలతో అసంగతం — (c) తొలగించండి.',
    difficulty: 'hard',
  },

  // Q21 — Pseudo force / pendulum in accelerating car — hard — answer: c
  {
    id: 'phy-lom-021',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A simple pendulum is suspended from the ceiling of a car that is accelerating horizontally at 10 m/s² on a level road. The angle made by the string with the vertical in equilibrium is (g = 10 m/s²):',
    textTe: 'సమతల రోడ్డుపై 10 m/s² త్వరణంతో క్షితిజ సమాంతరంగా కదులుతున్న కారు పైకప్పు నుండి ఒక సాధారణ లోలకం వేలాడదీయబడింది. సమతౌల్యంలో దారం నిలువుతో చేసే కోణం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '30°', textTe: '30°' },
      { id: 'b', text: '60°', textTe: '60°' },
      { id: 'c', text: '45°', textTe: '45°' },
      { id: 'd', text: '90°', textTe: '90°' },
    ],
    correctOptionId: 'c',
    explanation:
      'In the non-inertial frame of the car, a pseudo force ma acts horizontally backward on the pendulum bob. In equilibrium, tan θ = ma/(mg) = a/g = 10/10 = 1. Therefore θ = tan⁻¹(1) = 45°.',
    explanationTe:
      'కారు యొక్క అజడ చట్రంలో, లోలకం బాబ్ పై క్షితిజ సమాంతరంగా వెనుకకు ma మిథ్యా బలం పనిచేస్తుంది. సమతౌల్యంలో, tan θ = ma/(mg) = a/g = 10/10 = 1. కాబట్టి θ = tan⁻¹(1) = 45°.',
    eliminationTechnique:
      'Option (d) gives 90°, meaning the string would be horizontal — this requires infinite acceleration (tan 90° = ∞) — eliminate (d). For tan θ = 1 (since a = g), the angle must be 45°. Option (a) gives tan 30° = 1/√3, requiring a = g/√3 — eliminate (a). Option (b) gives tan 60° = √3, requiring a = g√3 — eliminate (b).',
    eliminationTechniqueTe:
      '(d) 90° ఇస్తుంది, అంటే దారం క్షితిజ సమాంతరంగా ఉంటుంది — ఇది అనంత త్వరణం అవసరం (tan 90° = ∞) — (d) తొలగించండి. tan θ = 1 (a = g కాబట్టి) కు కోణం 45° ఉండాలి. (a) tan 30° = 1/√3 ఇస్తుంది, a = g/√3 అవసరం — (a) తొలగించండి. (b) tan 60° = √3 ఇస్తుంది, a = g√3 అవసరం — (b) తొలగించండి.',
    difficulty: 'hard',
  },

  // Q22 — Variable force / impulse — hard — answer: a
  {
    id: 'phy-lom-022',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A time-dependent force F = 2t (in N) acts on a body of mass 2 kg initially at rest. The velocity of the body at t = 4 s is:',
    textTe: 'విరామంలో ఉన్న 2 kg ద్రవ్యరాశి గల వస్తువుపై కాల-ఆధారిత బలం F = 2t (N లో) పనిచేస్తుంది. t = 4 s వద్ద వస్తువు వేగం:',
    options: [
      { id: 'a', text: '8 m/s', textTe: '8 m/s' },
      { id: 'b', text: '16 m/s', textTe: '16 m/s' },
      { id: 'c', text: '4 m/s', textTe: '4 m/s' },
      { id: 'd', text: '32 m/s', textTe: '32 m/s' },
    ],
    correctOptionId: 'a',
    explanation:
      'Impulse = change in momentum. Impulse J = integral of F dt from 0 to 4 = integral of 2t dt from 0 to 4 = [t²] from 0 to 4 = 16 N·s. By impulse-momentum theorem: J = mv − 0, so 16 = 2v, giving v = 8 m/s.',
    explanationTe:
      'ఆవేగం = ద్రవ్యవేగంలో మార్పు. ఆవేగం J = 0 నుండి 4 వరకు F dt సమాకలనం = 0 నుండి 4 వరకు 2t dt సమాకలనం = [t²] 0 నుండి 4 = 16 N·s. ఆవేగ-ద్రవ్యవేగ సిద్ధాంతం ప్రకారం: J = mv − 0, కాబట్టి 16 = 2v, v = 8 m/s.',
    eliminationTechnique:
      'Option (b) gives J/m with J calculated as F(4) × t = 8 × 4 = 32, then 32/2 = 16 — this wrongly uses the final force value instead of integrating — eliminate (b). Option (c) uses F(4)/m = 8/2 = 4, which gives instantaneous acceleration, not velocity — eliminate (c). Option (d) gives 32 = 2 × 4 × 4 without proper integration — eliminate (d).',
    eliminationTechniqueTe:
      '(b) J ను F(4) × t = 8 × 4 = 32 గా లెక్కించి, 32/2 = 16 ఇస్తుంది — ఇది సమాకలనం చేయకుండా తుది బలం విలువను తప్పుగా ఉపయోగిస్తుంది — (b) తొలగించండి. (c) F(4)/m = 8/2 = 4 ఉపయోగిస్తుంది, ఇది తాత్కాలిక త్వరణం ఇస్తుంది, వేగం కాదు — (c) తొలగించండి. (d) సరైన సమాకలనం లేకుండా 32 = 2 × 4 × 4 ఇస్తుంది — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  // Q23 — Monkey climbing rope (tension limit) — hard — answer: b
  {
    id: 'phy-lom-023',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A monkey of mass 40 kg climbs up a rope that can withstand a maximum tension of 600 N. The maximum acceleration with which the monkey can safely climb up is (g = 10 m/s²):',
    textTe: '40 kg ద్రవ్యరాశి గల కోతి గరిష్ఠంగా 600 N తన్యతను తట్టుకోగల తాడు ఎక్కుతోంది. కోతి సురక్షితంగా పైకి ఎక్కగల గరిష్ఠ త్వరణం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '10 m/s²', textTe: '10 m/s²' },
      { id: 'b', text: '5 m/s²', textTe: '5 m/s²' },
      { id: 'c', text: '15 m/s²', textTe: '15 m/s²' },
      { id: 'd', text: '25 m/s²', textTe: '25 m/s²' },
    ],
    correctOptionId: 'b',
    explanation:
      'When the monkey climbs up with acceleration a, the tension in the rope is T = m(g + a). For maximum tension: 600 = 40(10 + a). So 15 = 10 + a, giving a = 5 m/s². If the monkey accelerates faster, the rope breaks.',
    explanationTe:
      'కోతి a త్వరణంతో పైకి ఎక్కినప్పుడు, తాడులో తన్యత T = m(g + a). గరిష్ఠ తన్యతకు: 600 = 40(10 + a). కాబట్టి 15 = 10 + a, a = 5 m/s². కోతి వేగంగా త్వరణం చెందితే, తాడు తెగిపోతుంది.',
    eliminationTechnique:
      'Option (a) gives a = g = 10, so T = 40(10+10) = 800 N, exceeding the rope\'s limit — eliminate (a). Option (c) gives T = 40(10+15) = 1000 N, far beyond 600 N — eliminate (c). Option (d) gives T = 40(10+25) = 1400 N, absurdly high — eliminate (d). Only a = 5 keeps T = 600 N.',
    eliminationTechniqueTe:
      '(a) a = g = 10 ఇస్తుంది, కాబట్టి T = 40(10+10) = 800 N, తాడు పరిమితిని మించిపోతుంది — (a) తొలగించండి. (c) T = 40(10+15) = 1000 N ఇస్తుంది, 600 N కంటే చాలా ఎక్కువ — (c) తొలగించండి. (d) T = 40(10+25) = 1400 N ఇస్తుంది, అసంబద్ధంగా ఎక్కువ — (d) తొలగించండి. a = 5 మాత్రమే T = 600 N లో ఉంచుతుంది.',
    difficulty: 'hard',
  },

  // Q24 — Vertical circular motion (minimum speed at top) — hard — answer: d
  {
    id: 'phy-lom-024',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A ball of mass 0.5 kg is attached to a string of length 1 m and whirled in a vertical circle. The minimum speed at the topmost point so that the string does not become slack is (g = 10 m/s²):',
    textTe: '0.5 kg ద్రవ్యరాశి గల బంతి 1 m పొడవు గల దారానికి కట్టబడి నిలువు వృత్తంలో తిప్పబడుతుంది. దారం వదులు కాకుండా ఉండటానికి అత్యున్నత బిందువు వద్ద కనీస వేగం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '10 m/s', textTe: '10 m/s' },
      { id: 'b', text: '5 m/s', textTe: '5 m/s' },
      { id: 'c', text: '√5 m/s', textTe: '√5 m/s' },
      { id: 'd', text: '√10 m/s', textTe: '√10 m/s' },
    ],
    correctOptionId: 'd',
    explanation:
      'At the topmost point, for the string to remain taut, the centripetal force must be at least equal to the weight: mg = mv²/r. This gives v² = rg = 1 × 10 = 10, so v = √10 m/s ≈ 3.16 m/s. Note that the mass cancels out — the minimum speed is independent of mass.',
    explanationTe:
      'అత్యున్నత బిందువు వద్ద, దారం బిగుతుగా ఉండటానికి, అభికేంద్ర బలం కనీసం భారానికి సమానంగా ఉండాలి: mg = mv²/r. ఇది v² = rg = 1 × 10 = 10, కాబట్టి v = √10 m/s ≈ 3.16 m/s ఇస్తుంది. ద్రవ్యరాశి రద్దవుతుందని గమనించండి — కనీస వేగం ద్రవ్యరాశిపై ఆధారపడదు.',
    eliminationTechnique:
      'Option (a) gives v = 10 m/s, meaning v² = 100. Since rg = 10, this speed is far higher than the minimum — eliminate (a). Option (b) gives v = 5, meaning v² = 25 — again much more than rg = 10 — eliminate (b). Option (c) gives v² = 5 = rg/2, using half of rg incorrectly — eliminate (c). At the top, mg provides all centripetal force: v² = rg exactly.',
    eliminationTechniqueTe:
      '(a) v = 10 m/s ఇస్తుంది, అంటే v² = 100. rg = 10 కాబట్టి, ఈ వేగం కనీసం కంటే చాలా ఎక్కువ — (a) తొలగించండి. (b) v = 5 ఇస్తుంది, అంటే v² = 25 — మళ్ళీ rg = 10 కంటే చాలా ఎక్కువ — (b) తొలగించండి. (c) v² = 5 = rg/2 ఇస్తుంది, rg లో సగం తప్పుగా ఉపయోగిస్తుంది — (c) తొలగించండి. పైన, mg మొత్తం అభికేంద్ర బలాన్ని అందిస్తుంది: v² = rg ఖచ్చితంగా.',
    difficulty: 'hard',
  },

  // Q25 — Block pressed against rough vertical wall — hard — answer: c
  {
    id: 'phy-lom-025',
    chapterId: 'physics-laws-of-motion',
    subjectId: 'physics',
    text: 'A block of mass 5 kg is pushed against a rough vertical wall by a horizontal force of 100 N. If the coefficient of static friction between the block and the wall is 0.5, the frictional force acting on the block is (g = 10 m/s²):',
    textTe: '5 kg ద్రవ్యరాశి గల బ్లాక్ ను 100 N క్షితిజ సమాంతర బలంతో ముతక నిలువు గోడకు నొక్కబడుతోంది. బ్లాక్ మరియు గోడ మధ్య స్థిర ఘర్షణ గుణకం 0.5 అయితే, బ్లాక్ పై పనిచేసే ఘర్షణ బలం (g = 10 m/s²):',
    options: [
      { id: 'a', text: '100 N', textTe: '100 N' },
      { id: 'b', text: '25 N', textTe: '25 N' },
      { id: 'c', text: '50 N', textTe: '50 N' },
      { id: 'd', text: '0 N', textTe: '0 N' },
    ],
    correctOptionId: 'c',
    explanation:
      'The horizontal push (100 N) provides the normal force on the wall. The block tends to slide down under gravity, so friction acts upward. Weight = mg = 5 × 10 = 50 N downward. Maximum static friction = μN = 0.5 × 100 = 50 N. Since the weight (50 N) equals the maximum static friction (50 N), the block is just on the verge of sliding. The actual friction force is 50 N (upward), balancing the weight exactly.',
    explanationTe:
      'క్షితిజ సమాంతర నొక్కడం (100 N) గోడపై అభిలంబ బలాన్ని అందిస్తుంది. బ్లాక్ గురుత్వాకర్షణ కింద జారడానికి ప్రయత్నిస్తుంది, కాబట్టి ఘర్షణ పైకి పనిచేస్తుంది. భారం = mg = 5 × 10 = 50 N కిందికి. గరిష్ఠ స్థిర ఘర్షణ = μN = 0.5 × 100 = 50 N. భారం (50 N) గరిష్ఠ స్థిర ఘర్షణకు (50 N) సమానం కాబట్టి, బ్లాక్ జారడం అంచున ఉంది. నిజమైన ఘర్షణ బలం 50 N (పైకి), భారాన్ని ఖచ్చితంగా సమతుల్యం చేస్తుంది.',
    eliminationTechnique:
      'Option (a) gives 100 N — this equals the applied horizontal force, not friction. Friction acts vertically here, not horizontally — eliminate (a). Option (d) says 0 N — if there were no friction, the block would slide down under gravity, which contradicts the setup — eliminate (d). Option (b) gives 25 N = mg/2, which would leave an unbalanced 25 N downward force, meaning the block accelerates down — this is incorrect because μN ≥ mg — eliminate (b).',
    eliminationTechniqueTe:
      '(a) 100 N ఇస్తుంది — ఇది ప్రయోగించిన క్షితిజ సమాంతర బలానికి సమానం, ఘర్షణ కాదు. ఇక్కడ ఘర్షణ నిలువుగా పనిచేస్తుంది, క్షితిజ సమాంతరంగా కాదు — (a) తొలగించండి. (d) 0 N అంటుంది — ఘర్షణ లేకపోతే, బ్లాక్ గురుత్వాకర్షణ కింద కిందికి జారిపోతుంది — (d) తొలగించండి. (b) 25 N = mg/2 ఇస్తుంది, 25 N కిందికి అసమతుల్య బలం ఉంటుంది, అంటే బ్లాక్ కిందికి త్వరణం చెందుతుంది — μN ≥ mg కాబట్టి ఇది తప్పు — (b) తొలగించండి.',
    difficulty: 'hard',
  },
];
