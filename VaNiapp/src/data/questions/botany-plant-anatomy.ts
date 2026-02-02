import { Question } from '../../types';

export const botanyPlantAnatomyQuestions: Question[] = [
  // ===== EASY (8 questions) =====
  {
    id: 'bot-pa-001',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Which type of meristematic tissue is found at the tips of roots and shoots?',
    textTe: 'వేర్లు మరియు కాండం చివరలలో ఏ రకమైన meristematic కణజాలం కనిపిస్తుంది?',
    options: [
      { id: 'a', text: 'Lateral meristem', textTe: 'Lateral meristem' },
      { id: 'b', text: 'Intercalary meristem', textTe: 'Intercalary meristem' },
      { id: 'c', text: 'Apical meristem', textTe: 'Apical meristem' },
      { id: 'd', text: 'Cork cambium', textTe: 'Cork cambium' },
    ],
    correctOptionId: 'c',
    explanation:
      'Apical meristems are present at the growing tips of stems and roots. They are responsible for the primary growth (increase in length) of the plant. Lateral meristems are responsible for secondary growth (increase in girth), intercalary meristems are found at the base of internodes, and cork cambium is a specific type of lateral meristem involved in bark formation.',
    explanationTe:
      'Apical meristems కాండం మరియు వేర్ల పెరుగుతున్న చివరలలో ఉంటాయి. అవి మొక్క యొక్క ప్రాథమిక పెరుగుదలకు (పొడవులో పెరుగుదల) బాధ్యత వహిస్తాయి. Lateral meristems ద్వితీయ పెరుగుదలకు (మందంలో పెరుగుదల) బాధ్యత వహిస్తాయి, intercalary meristems కణుపు మధ్యభాగాల ఆధారంలో ఉంటాయి, మరియు cork cambium బెరడు ఏర్పాటులో పాల్గొనే ఒక నిర్దిష్ట రకమైన lateral meristem.',
    eliminationTechnique:
      'Cork cambium (d) is clearly a secondary structure, not found at tips — eliminate it first. Lateral meristem (a) increases girth, not length, so it is not at tips. Intercalary meristem (b) is found at nodes/internodes, not at the very tips. That leaves apical meristem (c).',
    eliminationTechniqueTe:
      'Cork cambium (d) స్పష్టంగా ద్వితీయ నిర్మాణం, చివరలలో కనిపించదు — దీన్ని మొదట తొలగించండి. Lateral meristem (a) మందాన్ని పెంచుతుంది, పొడవును కాదు, కాబట్టి ఇది చివరలలో ఉండదు. Intercalary meristem (b) కణుపులు/కణుపు మధ్యభాగాలలో ఉంటుంది, చివరలలో కాదు. అప్పుడు apical meristem (c) మిగులుతుంది.',
    difficulty: 'easy',
  },
  {
    id: 'bot-pa-002',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Parenchyma cells are characterized by which of the following features?',
    textTe: 'Parenchyma కణాలు కింది లక్షణాలలో దేని ద్వారా గుర్తించబడతాయి?',
    options: [
      { id: 'a', text: 'Thin primary cell wall, living at maturity, with intercellular spaces', textTe: 'సన్నని ప్రాథమిక కణ గోడ, పరిపక్వత సమయంలో జీవించి ఉంటాయి, అంతరకణ ఖాళీలతో' },
      { id: 'b', text: 'Thick secondary cell wall, dead at maturity', textTe: 'మందమైన ద్వితీయ కణ గోడ, పరిపక్వత సమయంలో చనిపోతాయి' },
      { id: 'c', text: 'Unevenly thickened cell wall with pectin deposits', textTe: 'Pectin నిక్షేపాలతో అసమానంగా మందమైన కణ గోడ' },
      { id: 'd', text: 'Elongated cells with lignified walls', textTe: 'Lignified గోడలతో పొడవైన కణాలు' },
    ],
    correctOptionId: 'a',
    explanation:
      'Parenchyma is the most common simple permanent tissue. Its cells are thin-walled, living at maturity, roughly isodiametric, and have prominent intercellular spaces. They perform functions like photosynthesis, storage, and secretion. Option (b) describes sclerenchyma, option (c) describes collenchyma, and option (d) describes fibres or tracheids.',
    explanationTe:
      'Parenchyma అత్యంత సాధారణ సాధారణ శాశ్వత కణజాలం. దీని కణాలు సన్నని గోడలు కలిగి, పరిపక్వత సమయంలో జీవించి ఉంటాయి, సుమారుగా isodiametric, మరియు ప్రముఖమైన అంతరకణ ఖాళీలను కలిగి ఉంటాయి. అవి కిరణజన్య సంయోగక్రియ, నిల్వ మరియు స్రావం వంటి విధులను నిర్వహిస్తాయి. ఎంపిక (b) sclerenchyma ను వివరిస్తుంది, ఎంపిక (c) collenchyma ను వివరిస్తుంది, మరియు ఎంపిక (d) fibres లేదా tracheids ను వివరిస్తుంది.',
    eliminationTechnique:
      'Option (b) mentions "dead at maturity" and thick secondary walls — that is sclerenchyma, not parenchyma. Option (c) mentions uneven pectin thickening — a hallmark of collenchyma. Option (d) mentions lignified elongated cells — characteristic of fibres. Eliminate b, c, and d.',
    eliminationTechniqueTe:
      'ఎంపిక (b) "పరిపక్వత సమయంలో చనిపోతాయి" మరియు మందమైన ద్వితీయ గోడలను ప్రస్తావిస్తుంది — ఇది sclerenchyma, parenchyma కాదు. ఎంపిక (c) అసమాన pectin మందాన్ని ప్రస్తావిస్తుంది — ఇది collenchyma యొక్క గుర్తింపు. ఎంపిక (d) lignified పొడవైన కణాలను ప్రస్తావిస్తుంది — fibres యొక్క లక్షణం. b, c మరియు d లను తొలగించండి.',
    difficulty: 'easy',
  },
  {
    id: 'bot-pa-003',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Sclerenchyma cells are dead at maturity because:',
    textTe: 'Sclerenchyma కణాలు పరిపక్వత సమయంలో చనిపోతాయి ఎందుకంటే:',
    options: [
      { id: 'a', text: 'They lack a nucleus from the beginning', textTe: 'అవి మొదటి నుండి కేంద్రకాన్ని కలిగి ఉండవు' },
      { id: 'b', text: 'Their cell walls become heavily lignified and the protoplasm disappears', textTe: 'వాటి కణ గోడలు బాగా lignified అవుతాయి మరియు protoplasm అదృశ్యమవుతుంది' },
      { id: 'c', text: 'They are filled with starch granules', textTe: 'అవి పిండి పదార్ధ కణికలతో నిండి ఉంటాయి' },
      { id: 'd', text: 'They are always found in the epidermis', textTe: 'అవి ఎల్లప్పుడూ బాహ్యచర్మంలో కనిపిస్తాయి' },
    ],
    correctOptionId: 'b',
    explanation:
      'Sclerenchyma cells deposit heavy amounts of lignin in their secondary cell walls. As lignification proceeds, the protoplast (living content) degenerates and the cells become dead. These dead cells provide mechanical strength and rigidity to the plant. They include fibres and sclereids. Option (a) is wrong because all plant cells initially have a nucleus. Option (c) describes storage parenchyma. Option (d) is incorrect since sclerenchyma is typically found in ground tissue and vascular bundles, not the epidermis.',
    explanationTe:
      'Sclerenchyma కణాలు తమ ద్వితీయ కణ గోడలలో భారీ మొత్తంలో lignin ను నిక్షేపిస్తాయి. Lignification కొనసాగుతున్నప్పుడు, protoplast (జీవ విషయాలు) క్షీణించి కణాలు చనిపోతాయి. ఈ చనిపోయిన కణాలు మొక్కకు యాంత్రిక బలం మరియు దృఢత్వాన్ని అందిస్తాయి. వీటిలో fibres మరియు sclereids ఉంటాయి. ఎంపిక (a) తప్పు ఎందుకంటే అన్ని మొక్క కణాలకు ప్రారంభంలో కేంద్రకం ఉంటుంది. ఎంపిక (c) నిల్వ parenchyma ను వివరిస్తుంది. ఎంపిక (d) తప్పు ఎందుకంటే sclerenchyma సాధారణంగా భూమి కణజాలం మరియు నాళ కట్టలలో కనిపిస్తుంది, బాహ్యచర్మంలో కాదు.',
    eliminationTechnique:
      'Option (a) is a flawed biological concept — all cells initially have nuclei. Eliminate it. Option (c) mentions starch granules, which relates to storage, not cell death — eliminate. Option (d) incorrectly places sclerenchyma in the epidermis — eliminate. Only (b) correctly explains the cause of cell death.',
    eliminationTechniqueTe:
      'ఎంపిక (a) తప్పు జీవశాస్త్ర భావన — అన్ని కణాలకు ప్రారంభంలో కేంద్రకాలు ఉంటాయి. దీన్ని తొలగించండి. ఎంపిక (c) పిండి పదార్ధ కణికలను ప్రస్తావిస్తుంది, ఇది నిల్వకు సంబంధించినది, కణ మరణానికి కాదు — తొలగించండి. ఎంపిక (d) sclerenchyma ను తప్పుగా బాహ్యచర్మంలో ఉంచుతుంది — తొలగించండి. (b) మాత్రమే కణ మరణానికి కారణాన్ని సరిగ్గా వివరిస్తుంది.',
    difficulty: 'easy',
  },
  {
    id: 'bot-pa-004',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Which of the following is the water-conducting element of xylem?',
    textTe: 'కింది వాటిలో xylem యొక్క నీటిని ప్రసరించే మూలకం ఏది?',
    options: [
      { id: 'a', text: 'Sieve tubes', textTe: 'Sieve tubes' },
      { id: 'b', text: 'Companion cells', textTe: 'Companion cells' },
      { id: 'c', text: 'Phloem parenchyma', textTe: 'Phloem parenchyma' },
      { id: 'd', text: 'Tracheids and vessels', textTe: 'Tracheids మరియు vessels' },
    ],
    correctOptionId: 'd',
    explanation:
      'Xylem is a complex permanent tissue responsible for the conduction of water and dissolved minerals from roots to aerial parts. Tracheids and vessels (tracheary elements) are the main conducting components. Tracheids are elongated cells with tapering ends and are found in all vascular plants. Vessels are wider, tubular, and found mainly in angiosperms. Sieve tubes, companion cells, and phloem parenchyma are all components of phloem, not xylem.',
    explanationTe:
      'Xylem ఒక సంక్లిష్ట శాశ్వత కణజాలం, ఇది వేర్ల నుండి ఆకాశ భాగాలకు నీరు మరియు కరిగిన ఖనిజాల ప్రసారానికి బాధ్యత వహిస్తుంది. Tracheids మరియు vessels (tracheary elements) ప్రధాన ప్రసార భాగాలు. Tracheids సన్నబడే చివరలతో పొడవైన కణాలు మరియు అన్ని నాళ మొక్కలలో కనిపిస్తాయి. Vessels విశాలమైనవి, గొట్టపు ఆకారం కలిగినవి, ప్రధానంగా angiosperms లో కనిపిస్తాయి. Sieve tubes, companion cells మరియు phloem parenchyma అన్నీ phloem యొక్క భాగాలు, xylem కాదు.',
    eliminationTechnique:
      'Options (a), (b), and (c) — sieve tubes, companion cells, and phloem parenchyma — all have the word "phloem" or are well-known phloem components. If the question asks about xylem, all three can be eliminated immediately. Only (d) contains xylem elements.',
    eliminationTechniqueTe:
      'ఎంపికలు (a), (b), మరియు (c) — sieve tubes, companion cells మరియు phloem parenchyma — అన్నీ "phloem" అనే పదాన్ని కలిగి ఉంటాయి లేదా బాగా తెలిసిన phloem భాగాలు. ప్రశ్న xylem గురించి అడిగితే, మూడింటినీ వెంటనే తొలగించవచ్చు. (d) మాత్రమే xylem మూలకాలను కలిగి ఉంది.',
    difficulty: 'easy',
  },
  {
    id: 'bot-pa-005',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'In phloem, which of the following cells is living but lacks a nucleus at maturity?',
    textTe: 'Phloem లో, కింది కణాలలో ఏది జీవించి ఉంటుంది కానీ పరిపక్వత సమయంలో కేంద్రకం లేదు?',
    options: [
      { id: 'a', text: 'Companion cells', textTe: 'Companion cells' },
      { id: 'b', text: 'Sieve tube elements', textTe: 'Sieve tube elements' },
      { id: 'c', text: 'Phloem parenchyma', textTe: 'Phloem parenchyma' },
      { id: 'd', text: 'Phloem fibres', textTe: 'Phloem fibres' },
    ],
    correctOptionId: 'b',
    explanation:
      'Sieve tube elements are the conducting cells of phloem. They are unique because they are living cells but lack a nucleus and most organelles at maturity. Their functions are assisted by companion cells, which retain their nucleus and are connected to sieve tube elements through plasmodesmata. Companion cells (a) are nucleated living cells. Phloem parenchyma (c) are also nucleated living cells. Phloem fibres (d) are dead at maturity.',
    explanationTe:
      'Sieve tube elements phloem యొక్క ప్రసార కణాలు. అవి ప్రత్యేకమైనవి ఎందుకంటే అవి జీవించి ఉన్న కణాలు కానీ పరిపక్వత సమయంలో కేంద్రకం మరియు చాలా అవయవాలను కలిగి ఉండవు. వాటి విధులకు companion cells సహాయం చేస్తాయి, ఇవి తమ కేంద్రకాన్ని నిలుపుకుంటాయి మరియు plasmodesmata ద్వారా sieve tube elements కు అనుసంధానం చేయబడి ఉంటాయి. Companion cells (a) కేంద్రకం కలిగిన జీవ కణాలు. Phloem parenchyma (c) కూడా కేంద్రకం కలిగిన జీవ కణాలు. Phloem fibres (d) పరిపక్వత సమయంలో చనిపోతాయి.',
    eliminationTechnique:
      'Phloem fibres (d) are dead at maturity — they cannot be the answer since the question says "living." Companion cells (a) have a nucleus — eliminate. Phloem parenchyma (c) also has a nucleus — eliminate. Only sieve tube elements (b) fit: living but enucleate.',
    eliminationTechniqueTe:
      'Phloem fibres (d) పరిపక్వత సమయంలో చనిపోతాయి — ప్రశ్న "జీవించి ఉంటుంది" అని చెబుతుంది కాబట్టి ఇది సమాధానం కాదు. Companion cells (a) కేంద్రకం కలిగి ఉంటాయి — తొలగించండి. Phloem parenchyma (c) కూడా కేంద్రకం కలిగి ఉంటుంది — తొలగించండి. Sieve tube elements (b) మాత్రమే సరిపోతాయి: జీవించి ఉంటాయి కానీ కేంద్రకం లేనివి.',
    difficulty: 'easy',
  },
  {
    id: 'bot-pa-006',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'The three types of tissue systems in a plant are:',
    textTe: 'మొక్కలో మూడు రకాల కణజాల వ్యవస్థలు:',
    options: [
      { id: 'a', text: 'Epidermal, ground, and vascular tissue systems', textTe: 'Epidermal, ground మరియు vascular కణజాల వ్యవస్థలు' },
      { id: 'b', text: 'Meristematic, permanent, and secretory tissue systems', textTe: 'Meristematic, permanent మరియు secretory కణజాల వ్యవస్థలు' },
      { id: 'c', text: 'Parenchyma, collenchyma, and sclerenchyma tissue systems', textTe: 'Parenchyma, collenchyma మరియు sclerenchyma కణజాల వ్యవస్థలు' },
      { id: 'd', text: 'Xylem, phloem, and cambium tissue systems', textTe: 'Xylem, phloem మరియు cambium కణజాల వ్యవస్థలు' },
    ],
    correctOptionId: 'a',
    explanation:
      'Based on their structure and location, there are three types of tissue systems: (1) Epidermal tissue system — the outermost covering of the plant body, (2) Ground tissue system (also called fundamental tissue system) — forms the bulk of the plant body, and (3) Vascular tissue system — consists of xylem and phloem and is responsible for transport. Option (b) lists tissue types, not tissue systems. Option (c) lists simple permanent tissues. Option (d) lists vascular tissue components, not tissue systems.',
    explanationTe:
      'వాటి నిర్మాణం మరియు స్థానం ఆధారంగా, మూడు రకాల కణజాల వ్యవస్థలు ఉన్నాయి: (1) Epidermal కణజాల వ్యవస్థ — మొక్క శరీరం యొక్క బయటి పొర, (2) Ground కణజాల వ్యవస్థ (fundamental కణజాల వ్యవస్థ అని కూడా అంటారు) — మొక్క శరీరం యొక్క ఎక్కువ భాగాన్ని ఏర్పరుస్తుంది, మరియు (3) Vascular కణజాల వ్యవస్థ — xylem మరియు phloem తో కూడి ఉంటుంది మరియు రవాణాకు బాధ్యత వహిస్తుంది. ఎంపిక (b) కణజాల రకాలను జాబితా చేస్తుంది, కణజాల వ్యవస్థలను కాదు. ఎంపిక (c) సాధారణ శాశ్వత కణజాలాలను జాబితా చేస్తుంది. ఎంపిక (d) నాళ కణజాల భాగాలను జాబితా చేస్తుంది.',
    eliminationTechnique:
      'Option (c) lists parenchyma, collenchyma, sclerenchyma — these are types of simple tissues, not tissue systems — eliminate. Option (d) lists xylem, phloem, cambium — these are components within the vascular system, not separate systems — eliminate. Option (b) mixes classification criteria (meristematic vs permanent is one way to classify tissues, not systems) — eliminate.',
    eliminationTechniqueTe:
      'ఎంపిక (c) parenchyma, collenchyma, sclerenchyma ను జాబితా చేస్తుంది — ఇవి సాధారణ కణజాల రకాలు, కణజాల వ్యవస్థలు కాదు — తొలగించండి. ఎంపిక (d) xylem, phloem, cambium ను జాబితా చేస్తుంది — ఇవి నాళ వ్యవస్థలో భాగాలు, ప్రత్యేక వ్యవస్థలు కాదు — తొలగించండి. ఎంపిక (b) వర్గీకరణ ప్రమాణాలను కలుపుతుంది — తొలగించండి.',
    difficulty: 'easy',
  },
  {
    id: 'bot-pa-007',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Open vascular bundles differ from closed vascular bundles in having:',
    textTe: 'Open vascular bundles మూసిన vascular bundles నుండి దేనిని కలిగి ఉండటం ద్వారా భిన్నంగా ఉంటాయి?',
    options: [
      { id: 'a', text: 'Only xylem', textTe: 'Xylem మాత్రమే' },
      { id: 'b', text: 'Only phloem', textTe: 'Phloem మాత్రమే' },
      { id: 'c', text: 'Cambium between xylem and phloem', textTe: 'Xylem మరియు phloem మధ్య cambium' },
      { id: 'd', text: 'Sclerenchyma cap over phloem', textTe: 'Phloem పై sclerenchyma టోపీ' },
    ],
    correctOptionId: 'c',
    explanation:
      'Open vascular bundles possess a strip of cambium (fascicular cambium) between xylem and phloem. This cambium is capable of forming secondary xylem and secondary phloem, hence the bundle is "open" to secondary growth. Open vascular bundles are characteristic of dicot stems. Closed vascular bundles lack cambium and are typically found in monocot stems, where secondary growth does not occur.',
    explanationTe:
      'Open vascular bundles xylem మరియు phloem మధ్య cambium (fascicular cambium) పట్టీని కలిగి ఉంటాయి. ఈ cambium ద్వితీయ xylem మరియు ద్వితీయ phloem ను ఏర్పరచగల సామర్థ్యం కలిగి ఉంటుంది, అందువల్ల కట్ట ద్వితీయ పెరుగుదలకు "open" గా ఉంటుంది. Open vascular bundles ద్విదళ కాండాల లక్షణం. Closed vascular bundles cambium లేకుండా ఉంటాయి మరియు సాధారణంగా ఏకదళ కాండాలలో కనిపిస్తాయి, ఇక్కడ ద్వితీయ పెరుగుదల జరగదు.',
    eliminationTechnique:
      'Both open and closed bundles have xylem and phloem, so options (a) and (b) cannot distinguish them — eliminate both. A sclerenchyma cap (d) is an accessory feature found in some bundles but is not the defining difference between open and closed — eliminate. The key distinguishing feature is cambium (c).',
    eliminationTechniqueTe:
      'Open మరియు closed రెండు కట్టలకు xylem మరియు phloem ఉంటాయి, కాబట్టి ఎంపికలు (a) మరియు (b) వాటిని వేరు చేయలేవు — రెండింటినీ తొలగించండి. Sclerenchyma టోపీ (d) కొన్ని కట్టలలో కనిపించే అదనపు లక్షణం కానీ open మరియు closed మధ్య నిర్వచించే తేడా కాదు — తొలగించండి. కీలక వ్యత్యాస లక్షణం cambium (c).',
    difficulty: 'easy',
  },
  {
    id: 'bot-pa-008',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Cork cambium (phellogen) gives rise to:',
    textTe: 'Cork cambium (phellogen) దేనిని ఉత్పత్తి చేస్తుంది?',
    options: [
      { id: 'a', text: 'Secondary xylem and secondary phloem', textTe: 'ద్వితీయ xylem మరియు ద్వితీయ phloem' },
      { id: 'b', text: 'Phellem (cork) on the outside and phelloderm on the inside', textTe: 'బయటి వైపు phellem (cork) మరియు లోపలి వైపు phelloderm' },
      { id: 'c', text: 'Endodermis and pericycle', textTe: 'Endodermis మరియు pericycle' },
      { id: 'd', text: 'Epidermis and cuticle', textTe: 'Epidermis మరియు cuticle' },
    ],
    correctOptionId: 'b',
    explanation:
      'Cork cambium (phellogen) is a lateral meristem that arises in the cortex during secondary growth. It cuts off cells on both sides: phellem (cork) toward the outside and phelloderm (secondary cortex) toward the inside. Together, phellem, phellogen, and phelloderm constitute the periderm. Option (a) describes the products of vascular cambium. Options (c) and (d) are primary tissues not produced by cork cambium.',
    explanationTe:
      'Cork cambium (phellogen) ద్వితీయ పెరుగుదల సమయంలో బెరడులో ఉత్పన్నమయ్యే lateral meristem. ఇది రెండు వైపులా కణాలను ఉత్పత్తి చేస్తుంది: బయటి వైపు phellem (cork) మరియు లోపలి వైపు phelloderm (ద్వితీయ బెరడు). Phellem, phellogen మరియు phelloderm కలిసి periderm ను ఏర్పరుస్తాయి. ఎంపిక (a) vascular cambium యొక్క ఉత్పత్తులను వివరిస్తుంది. ఎంపికలు (c) మరియు (d) cork cambium ద్వారా ఉత్పత్తి కాని ప్రాథమిక కణజాలాలు.',
    eliminationTechnique:
      'Option (a) describes products of the vascular cambium, not cork cambium — eliminate. Option (c) mentions endodermis and pericycle, which are primary root/stem structures — eliminate. Option (d) mentions epidermis and cuticle, which are primary surface structures, not produced by secondary meristems — eliminate.',
    eliminationTechniqueTe:
      'ఎంపిక (a) vascular cambium యొక్క ఉత్పత్తులను వివరిస్తుంది, cork cambium కాదు — తొలగించండి. ఎంపిక (c) endodermis మరియు pericycle ను ప్రస్తావిస్తుంది, ఇవి ప్రాథమిక వేరు/కాండ నిర్మాణాలు — తొలగించండి. ఎంపిక (d) epidermis మరియు cuticle ను ప్రస్తావిస్తుంది, ఇవి ద్వితీయ meristems ద్వారా ఉత్పత్తి కాని ప్రాథమిక ఉపరితల నిర్మాణాలు — తొలగించండి.',
    difficulty: 'easy',
  },

  // ===== MEDIUM (10 questions) =====
  {
    id: 'bot-pa-009',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Collenchyma differs from sclerenchyma in that collenchyma:',
    textTe: 'Collenchyma, sclerenchyma నుండి భిన్నంగా ఉంటుంది ఎందుకంటే collenchyma:',
    options: [
      { id: 'a', text: 'Has pectin-thickened walls and is living at maturity', textTe: 'Pectin తో మందమైన గోడలు కలిగి పరిపక్వత సమయంలో జీవించి ఉంటుంది' },
      { id: 'b', text: 'Has lignified walls and is dead at maturity', textTe: 'Lignified గోడలు కలిగి పరిపక్వత సమయంలో చనిపోతుంది' },
      { id: 'c', text: 'Is found only in roots', textTe: 'వేర్లలో మాత్రమే కనిపిస్తుంది' },
      { id: 'd', text: 'Lacks a cell wall entirely', textTe: 'కణ గోడ పూర్తిగా లేదు' },
    ],
    correctOptionId: 'a',
    explanation:
      'Collenchyma is a living mechanical tissue with irregularly thickened cell walls due to pectin and hemicellulose deposits. The thickening occurs at the corners (angular collenchyma), at the intercellular spaces (lacunar collenchyma), or on the tangential walls (lamellar collenchyma). Unlike sclerenchyma, collenchyma cells remain living at maturity and do not have lignin in their walls. Option (b) describes sclerenchyma. Option (c) is wrong — collenchyma is found in stems, petioles, and leaves but is generally absent in roots. Option (d) is absurd for any plant cell.',
    explanationTe:
      'Collenchyma pectin మరియు hemicellulose నిక్షేపాల కారణంగా అసమానంగా మందమైన కణ గోడలతో కూడిన జీవ యాంత్రిక కణజాలం. మందం మూలలలో (angular collenchyma), అంతరకణ ఖాళీలలో (lacunar collenchyma), లేదా tangential గోడలపై (lamellar collenchyma) జరుగుతుంది. Sclerenchyma కంటే భిన్నంగా, collenchyma కణాలు పరిపక్వత సమయంలో జీవించి ఉంటాయి మరియు వాటి గోడలలో lignin ఉండదు. ఎంపిక (b) sclerenchyma ను వివరిస్తుంది. ఎంపిక (c) తప్పు — collenchyma కాండాలు, పత్రవృంతాలు మరియు ఆకులలో కనిపిస్తుంది కానీ సాధారణంగా వేర్లలో ఉండదు. ఎంపిక (d) ఏ మొక్క కణానికైనా అసంబద్ధం.',
    eliminationTechnique:
      'Option (b) describes the exact features of sclerenchyma (lignified, dead), so it tells how sclerenchyma is, not collenchyma — eliminate. Option (d) is biologically impossible for plant cells, which always have cell walls — eliminate. Option (c) is factually wrong since collenchyma is generally absent in roots — eliminate. Only (a) correctly distinguishes collenchyma.',
    eliminationTechniqueTe:
      'ఎంపిక (b) sclerenchyma యొక్క ఖచ్చితమైన లక్షణాలను (lignified, చనిపోయిన) వివరిస్తుంది — తొలగించండి. ఎంపిక (d) మొక్క కణాలకు జీవశాస్త్రపరంగా అసాధ్యం, వాటికి ఎల్లప్పుడూ కణ గోడలు ఉంటాయి — తొలగించండి. ఎంపిక (c) వాస్తవపరంగా తప్పు ఎందుకంటే collenchyma సాధారణంగా వేర్లలో ఉండదు — తొలగించండి. (a) మాత్రమే collenchyma ను సరిగ్గా వేరు చేస్తుంది.',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-010',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Which of the following is NOT a component of xylem?',
    textTe: 'కింది వాటిలో xylem యొక్క భాగం కానిది ఏది?',
    options: [
      { id: 'a', text: 'Tracheids', textTe: 'Tracheids' },
      { id: 'b', text: 'Vessel members', textTe: 'Vessel members' },
      { id: 'c', text: 'Sieve tube elements', textTe: 'Sieve tube elements' },
      { id: 'd', text: 'Xylem fibres', textTe: 'Xylem fibres' },
    ],
    correctOptionId: 'c',
    explanation:
      'Xylem consists of four types of cells: tracheids, vessel members (trachea), xylem fibres, and xylem parenchyma. Sieve tube elements are part of phloem, not xylem. Sieve tubes are responsible for the translocation of organic food (sucrose) in plants, while xylem conducts water and minerals. This is a fundamental distinction between the two complex tissues.',
    explanationTe:
      'Xylem నాలుగు రకాల కణాలను కలిగి ఉంటుంది: tracheids, vessel members (trachea), xylem fibres మరియు xylem parenchyma. Sieve tube elements phloem యొక్క భాగం, xylem కాదు. Sieve tubes మొక్కలలో సేంద్రీయ ఆహారం (sucrose) యొక్క ప్రసరణకు బాధ్యత వహిస్తాయి, అయితే xylem నీరు మరియు ఖనిజాలను ప్రసరిస్తుంది. ఇది రెండు సంక్లిష్ట కణజాలాల మధ్య ప్రాథమిక వ్యత్యాసం.',
    eliminationTechnique:
      'Tracheids (a), vessel members (b), and xylem fibres (d) all clearly belong to xylem — their names contain "xylem" or they are classic xylem elements taught in every textbook. Only sieve tube elements (c) belong to phloem. The word "sieve" is a strong indicator of phloem association.',
    eliminationTechniqueTe:
      'Tracheids (a), vessel members (b) మరియు xylem fibres (d) అన్నీ స్పష్టంగా xylem కు చెందినవి — వాటి పేర్లలో "xylem" ఉంది లేదా అవి ప్రతి పాఠ్యపుస్తకంలో నేర్పించే క్లాసిక్ xylem మూలకాలు. Sieve tube elements (c) మాత్రమే phloem కు చెందినవి. "Sieve" అనే పదం phloem అనుబంధానికి బలమైన సూచిక.',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-011',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'In a dicot root, the vascular bundles are arranged in which pattern?',
    textTe: 'ద్విదళ వేరులో, vascular bundles ఏ విధంగా అమర్చబడి ఉంటాయి?',
    options: [
      { id: 'a', text: 'Conjoint, collateral, and open', textTe: 'Conjoint, collateral మరియు open' },
      { id: 'b', text: 'Radial, with xylem and phloem on alternate radii', textTe: 'Radial, xylem మరియు phloem ప్రత్యామ్నాయ radii పై' },
      { id: 'c', text: 'Scattered throughout the ground tissue', textTe: 'Ground కణజాలం అంతటా చెదురుగా' },
      { id: 'd', text: 'Conjoint, bicollateral, and open', textTe: 'Conjoint, bicollateral మరియు open' },
    ],
    correctOptionId: 'b',
    explanation:
      'In dicot roots, xylem and phloem are arranged on alternate radii, forming a radial vascular bundle arrangement. The number of xylem bundles is usually 2 to 6 (diarch to hexarch). This radial arrangement is a characteristic feature of roots (both dicot and monocot). Option (a) describes the arrangement in dicot stems. Option (c) describes monocot stems where bundles are scattered. Option (d) describes the arrangement seen in some dicot stems like those of Cucurbitaceae.',
    explanationTe:
      'ద్విదళ వేర్లలో, xylem మరియు phloem ప్రత్యామ్నాయ radii పై అమర్చబడి ఉంటాయి, radial vascular bundle అమరికను ఏర్పరుస్తాయి. Xylem కట్టల సంఖ్య సాధారణంగా 2 నుండి 6 వరకు ఉంటుంది (diarch నుండి hexarch). ఈ radial అమరిక వేర్ల యొక్క లక్షణ లక్షణం (ద్విదళ మరియు ఏకదళ రెండూ). ఎంపిక (a) ద్విదళ కాండాలలోని అమరికను వివరిస్తుంది. ఎంపిక (c) ఏకదళ కాండాలను వివరిస్తుంది ఇక్కడ కట్టలు చెదురుగా ఉంటాయి. ఎంపిక (d) Cucurbitaceae వంటి కొన్ని ద్విదళ కాండాలలో కనిపించే అమరికను వివరిస్తుంది.',
    eliminationTechnique:
      'Option (c) "scattered throughout" is characteristic of monocot stems, not roots — eliminate. Options (a) and (d) both describe conjoint bundles, which are stem features (in roots, xylem and phloem are on separate radii, not together in one bundle) — eliminate both. The word "radial" in (b) is the key indicator for root anatomy.',
    eliminationTechniqueTe:
      'ఎంపిక (c) "అంతటా చెదురుగా" ఏకదళ కాండాల లక్షణం, వేర్లది కాదు — తొలగించండి. ఎంపికలు (a) మరియు (d) రెండూ conjoint కట్టలను వివరిస్తాయి, ఇవి కాండ లక్షణాలు (వేర్లలో, xylem మరియు phloem ప్రత్యేక radii పై ఉంటాయి, ఒక కట్టలో కలిసి కాదు) — రెండింటినీ తొలగించండి. (b) లోని "radial" అనే పదం వేరు anatomy కి కీలక సూచిక.',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-012',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'A key anatomical difference between a monocot root and a dicot root is:',
    textTe: 'ఏకదళ వేరు మరియు ద్విదళ వేరు మధ్య కీలకమైన anatomy తేడా ఏమిటి?',
    options: [
      { id: 'a', text: 'Monocot root lacks an endodermis', textTe: 'ఏకదళ వేరుకు endodermis ఉండదు' },
      { id: 'b', text: 'Dicot root has a large pith, monocot root has a small or absent pith', textTe: 'ద్విదళ వేరుకు పెద్ద pith ఉంటుంది, ఏకదళ వేరుకు చిన్న లేదా pith ఉండదు' },
      { id: 'c', text: 'Monocot root has a large pith, while dicot root has a small or absent pith', textTe: 'ఏకదళ వేరుకు పెద్ద pith ఉంటుంది, అయితే ద్విదళ వేరుకు చిన్న లేదా pith ఉండదు' },
      { id: 'd', text: 'Dicot root has polyarch xylem with more than six xylem bundles', textTe: 'ద్విదళ వేరుకు ఆరు కంటే ఎక్కువ xylem కట్టలతో polyarch xylem ఉంటుంది' },
    ],
    correctOptionId: 'c',
    explanation:
      'In monocot roots, the pith is large and well-developed, occupying the central region. In dicot roots, the pith is small or absent because the xylem often occupies the centre. Also, monocot roots typically have polyarch xylem (more than 6 xylem bundles), while dicot roots are diarch to hexarch. Both types have an endodermis, so (a) is wrong. Option (b) reverses the pith condition. Option (d) describes the monocot root feature, not dicot.',
    explanationTe:
      'ఏకదళ వేర్లలో, pith పెద్దది మరియు బాగా అభివృద్ధి చెందినది, కేంద్ర ప్రాంతాన్ని ఆక్రమిస్తుంది. ద్విదళ వేర్లలో, xylem తరచుగా కేంద్రాన్ని ఆక్రమించడం వల్ల pith చిన్నది లేదా లేకుండా ఉంటుంది. అలాగే, ఏకదళ వేర్లు సాధారణంగా polyarch xylem (6 కంటే ఎక్కువ xylem కట్టలు) కలిగి ఉంటాయి, అయితే ద్విదళ వేర్లు diarch నుండి hexarch వరకు ఉంటాయి. రెండు రకాలకు endodermis ఉంటుంది, కాబట్టి (a) తప్పు. ఎంపిక (b) pith స్థితిని తారుమారు చేస్తుంది. ఎంపిక (d) ద్విదళ కాదు ఏకదళ వేరు లక్షణాన్ని వివరిస్తుంది.',
    eliminationTechnique:
      'Option (a) is wrong because both monocot and dicot roots have an endodermis — eliminate. Option (d) attributes polyarch xylem to dicots, but polyarch is a monocot root feature — eliminate. Between (b) and (c), remember: monocots typically have MORE xylem bundles pushing xylem to the periphery, leaving a LARGE pith. So (b) has it reversed — eliminate. Answer is (c).',
    eliminationTechniqueTe:
      'ఎంపిక (a) తప్పు ఎందుకంటే ఏకదళ మరియు ద్విదళ రెండు వేర్లకు endodermis ఉంటుంది — తొలగించండి. ఎంపిక (d) polyarch xylem ను ద్విదళాలకు ఆపాదిస్తుంది, కానీ polyarch ఏకదళ వేరు లక్షణం — తొలగించండి. (b) మరియు (c) మధ్య, గుర్తుంచుకోండి: ఏకదళాలకు సాధారణంగా ఎక్కువ xylem కట్టలు ఉంటాయి, పెద్ద pith ను వదిలి. కాబట్టి (b) తారుమారు చేయబడింది — తొలగించండి. సమాధానం (c).',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-013',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'In the transverse section of a dicot stem, the vascular bundles are:',
    textTe: 'ద్విదళ కాండం యొక్క అడ్డు విభాగంలో, vascular bundles:',
    options: [
      { id: 'a', text: 'Arranged in a ring', textTe: 'ఒక వలయంలో అమర్చబడి ఉంటాయి' },
      { id: 'b', text: 'Scattered throughout the ground tissue', textTe: 'Ground కణజాలం అంతటా చెదురుగా ఉంటాయి' },
      { id: 'c', text: 'Present only in the pith', textTe: 'Pith లో మాత్రమే ఉంటాయి' },
      { id: 'd', text: 'Arranged radially like in roots', textTe: 'వేర్లలో వలె radially అమర్చబడి ఉంటాయి' },
    ],
    correctOptionId: 'a',
    explanation:
      'In a dicot stem, the vascular bundles are conjoint, collateral, open, and arranged in a ring (eustele). The ring arrangement separates the cortex on the outside from the pith on the inside. Each bundle has phloem toward the outside and xylem toward the inside with cambium in between. Option (b) describes a monocot stem (atactostele). Option (c) is incorrect — bundles are not limited to the pith. Option (d) describes root anatomy where xylem and phloem alternate on different radii.',
    explanationTe:
      'ద్విదళ కాండంలో, vascular bundles conjoint, collateral, open మరియు ఒక వలయంలో (eustele) అమర్చబడి ఉంటాయి. వలయ అమరిక బయట ఉన్న cortex ను లోపల ఉన్న pith నుండి వేరు చేస్తుంది. ప్రతి కట్టలో phloem బయటి వైపు మరియు xylem లోపలి వైపు ఉంటాయి, మధ్యలో cambium ఉంటుంది. ఎంపిక (b) ఏకదళ కాండాన్ని (atactostele) వివరిస్తుంది. ఎంపిక (c) తప్పు — కట్టలు pith కు పరిమితం కావు. ఎంపిక (d) వేరు anatomy ను వివరిస్తుంది ఇక్కడ xylem మరియు phloem వేర్వేరు radii పై ప్రత్యామ్నాయంగా ఉంటాయి.',
    eliminationTechnique:
      'Option (b) "scattered" is the hallmark of monocot stems — eliminate. Option (c) "only in the pith" is anatomically incorrect for any standard stem — eliminate. Option (d) "radially like roots" describes root arrangement, not stem — eliminate. Dicot stems always show a ring arrangement (a).',
    eliminationTechniqueTe:
      'ఎంపిక (b) "చెదురుగా" ఏకదళ కాండాల గుర్తింపు — తొలగించండి. ఎంపిక (c) "pith లో మాత్రమే" ఏ ప్రామాణిక కాండానికైనా anatomy పరంగా తప్పు — తొలగించండి. ఎంపిక (d) "వేర్లలో వలె radially" వేరు అమరికను వివరిస్తుంది, కాండాన్ని కాదు — తొలగించండి. ద్విదళ కాండాలు ఎల్లప్పుడూ వలయ అమరికను (a) చూపిస్తాయి.',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-014',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'In a monocot stem, the vascular bundles are:',
    textTe: 'ఏకదళ కాండంలో, vascular bundles:',
    options: [
      { id: 'a', text: 'Conjoint, collateral, and open', textTe: 'Conjoint, collateral మరియు open' },
      { id: 'b', text: 'Radial with exarch xylem', textTe: 'Exarch xylem తో radial' },
      { id: 'c', text: 'Conjoint, collateral, and closed, scattered in ground tissue', textTe: 'Conjoint, collateral మరియు closed, ground కణజాలంలో చెదురుగా' },
      { id: 'd', text: 'Bicollateral and open, arranged in a ring', textTe: 'Bicollateral మరియు open, ఒక వలయంలో అమర్చబడి' },
    ],
    correctOptionId: 'c',
    explanation:
      'In monocot stems, vascular bundles are conjoint (xylem and phloem together in one bundle), collateral (phloem on the outer side, xylem on the inner side), and closed (no cambium between them, so no secondary growth). They are scattered throughout the ground tissue (atactostele pattern). Option (a) describes dicot stem bundles. Option (b) describes root vascular arrangement. Option (d) describes bundles found in members of Cucurbitaceae family.',
    explanationTe:
      'ఏకదళ కాండాలలో, vascular bundles conjoint (xylem మరియు phloem ఒక కట్టలో కలిసి), collateral (phloem బయటి వైపు, xylem లోపలి వైపు), మరియు closed (వాటి మధ్య cambium లేదు, కాబట్టి ద్వితీయ పెరుగుదల లేదు). అవి ground కణజాలం అంతటా చెదురుగా ఉంటాయి (atactostele నమూనా). ఎంపిక (a) ద్విదళ కాండ కట్టలను వివరిస్తుంది. ఎంపిక (b) వేరు నాళ అమరికను వివరిస్తుంది. ఎంపిక (d) Cucurbitaceae కుటుంబ సభ్యులలో కనిపించే కట్టలను వివరిస్తుంది.',
    eliminationTechnique:
      'Option (a) says "open" — monocot bundles are closed (no cambium), so eliminate. Option (b) says "radial" — that is a root feature, not stem — eliminate. Option (d) says "bicollateral" — this is specific to Cucurbitaceae family dicot stems — eliminate. Only (c) correctly combines closed, scattered, and conjoint collateral.',
    eliminationTechniqueTe:
      'ఎంపిక (a) "open" అని చెబుతుంది — ఏకదళ కట్టలు closed (cambium లేదు), కాబట్టి తొలగించండి. ఎంపిక (b) "radial" అని చెబుతుంది — ఇది వేరు లక్షణం, కాండ కాదు — తొలగించండి. ఎంపిక (d) "bicollateral" అని చెబుతుంది — ఇది Cucurbitaceae కుటుంబ ద్విదళ కాండాలకు నిర్దిష్టం — తొలగించండి. (c) మాత్రమే closed, scattered మరియు conjoint collateral ను సరిగ్గా కలుపుతుంది.',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-015',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'A dorsiventral leaf (typical dicot leaf) shows differentiation of mesophyll into:',
    textTe: 'Dorsiventral ఆకు (సాధారణ ద్విదళ ఆకు) mesophyll యొక్క భేదాన్ని దేనిలోకి చూపిస్తుంది?',
    options: [
      { id: 'a', text: 'Only spongy parenchyma', textTe: 'Spongy parenchyma మాత్రమే' },
      { id: 'b', text: 'Only palisade parenchyma', textTe: 'Palisade parenchyma మాత్రమే' },
      { id: 'c', text: 'Aerenchyma and chlorenchyma equally distributed', textTe: 'Aerenchyma మరియు chlorenchyma సమానంగా పంపిణీ' },
      { id: 'd', text: 'Palisade parenchyma (adaxial) and spongy parenchyma (abaxial)', textTe: 'Palisade parenchyma (adaxial) మరియు spongy parenchyma (abaxial)' },
    ],
    correctOptionId: 'd',
    explanation:
      'In dorsiventral (typical dicot) leaves, the mesophyll is clearly differentiated into two zones: palisade parenchyma on the adaxial (upper) side, which consists of elongated, tightly packed cells rich in chloroplasts for maximum photosynthesis, and spongy parenchyma on the abaxial (lower) side, which consists of loosely arranged cells with large intercellular spaces for gas exchange. This differentiation is absent in isobilateral (monocot) leaves where both surfaces are similar.',
    explanationTe:
      'Dorsiventral (సాధారణ ద్విదళ) ఆకులలో, mesophyll రెండు జోన్లుగా స్పష్టంగా భేదం చెందుతుంది: adaxial (పై) వైపు palisade parenchyma, ఇది గరిష్ట కిరణజన్య సంయోగక్రియ కోసం chloroplasts తో సమృద్ధిగా ఉన్న పొడవైన, గట్టిగా ప్యాక్ చేయబడిన కణాలను కలిగి ఉంటుంది, మరియు abaxial (కింది) వైపు spongy parenchyma, ఇది వాయువు మార్పిడి కోసం పెద్ద అంతరకణ ఖాళీలతో వదులుగా అమర్చబడిన కణాలను కలిగి ఉంటుంది. ఈ భేదం isobilateral (ఏకదళ) ఆకులలో ఉండదు ఇక్కడ రెండు ఉపరితలాలు సమానంగా ఉంటాయి.',
    eliminationTechnique:
      'Options (a) and (b) each mention only one type of mesophyll tissue. A dorsiventral leaf by definition has two distinct surfaces, so having only one type would not explain the dorsiventral nature — eliminate both. Option (c) mentions aerenchyma (air-storing tissue found in aquatic plants) which is not a standard mesophyll component of dicot leaves — eliminate. Only (d) correctly describes both palisade and spongy layers.',
    eliminationTechniqueTe:
      'ఎంపికలు (a) మరియు (b) ప్రతి ఒక్కటి ఒక రకమైన mesophyll కణజాలాన్ని మాత్రమే ప్రస్తావిస్తాయి. Dorsiventral ఆకుకు నిర్వచనం ప్రకారం రెండు వేర్వేరు ఉపరితలాలు ఉంటాయి, కాబట్టి ఒక రకం మాత్రమే ఉండటం dorsiventral స్వభావాన్ని వివరించదు — రెండింటినీ తొలగించండి. ఎంపిక (c) aerenchyma (జల మొక్కలలో కనిపించే గాలి నిల్వ కణజాలం) ను ప్రస్తావిస్తుంది, ఇది ద్విదళ ఆకుల ప్రామాణిక mesophyll భాగం కాదు — తొలగించండి. (d) మాత్రమే palisade మరియు spongy రెండు పొరలను సరిగ్గా వివరిస్తుంది.',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-016',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'In isobilateral leaves (typical monocot leaves), stomata are:',
    textTe: 'Isobilateral ఆకులలో (సాధారణ ఏకదళ ఆకులు), stomata:',
    options: [
      { id: 'a', text: 'Present only on the upper (adaxial) surface', textTe: 'పై (adaxial) ఉపరితలంపై మాత్రమే ఉంటాయి' },
      { id: 'b', text: 'Present only on the lower (abaxial) surface', textTe: 'కింది (abaxial) ఉపరితలంపై మాత్రమే ఉంటాయి' },
      { id: 'c', text: 'Completely absent', textTe: 'పూర్తిగా లేవు' },
      { id: 'd', text: 'Equally distributed on both surfaces (amphistomatic)', textTe: 'రెండు ఉపరితలాలపై సమానంగా పంపిణీ చేయబడి ఉంటాయి (amphistomatic)' },
    ],
    correctOptionId: 'd',
    explanation:
      'Isobilateral leaves (monocot leaves like grass) have stomata equally distributed on both the upper (adaxial) and lower (abaxial) epidermis. This is because both surfaces receive similar light exposure. Such leaves are called amphistomatic. In contrast, dorsiventral (dicot) leaves have more stomata on the lower (abaxial) surface (hypostomatic). Option (c) is impossible since all leaves need stomata for gas exchange.',
    explanationTe:
      'Isobilateral ఆకులు (గడ్డి వంటి ఏకదళ ఆకులు) పై (adaxial) మరియు కింది (abaxial) రెండు epidermis పై stomata సమానంగా పంపిణీ చేయబడి ఉంటాయి. ఇది రెండు ఉపరితలాలకు సమానమైన కాంతి ఎక్స్‌పోజర్ లభిస్తుంది కాబట్టి. ఇటువంటి ఆకులను amphistomatic అంటారు. దీనికి విరుద్ధంగా, dorsiventral (ద్విదళ) ఆకులు కింది (abaxial) ఉపరితలంపై ఎక్కువ stomata కలిగి ఉంటాయి (hypostomatic). ఎంపిక (c) అసాధ్యం ఎందుకంటే అన్ని ఆకులకు వాయువు మార్పిడి కోసం stomata అవసరం.',
    eliminationTechnique:
      'Option (c) is biologically impossible — all leaves require stomata — eliminate immediately. The key word is "isobilateral," meaning both sides are similar. If both sides are similar, stomata should be on BOTH surfaces equally, not restricted to one. This eliminates options (a) and (b). Answer is (d).',
    eliminationTechniqueTe:
      'ఎంపిక (c) జీవశాస్త్రపరంగా అసాధ్యం — అన్ని ఆకులకు stomata అవసరం — వెంటనే తొలగించండి. "Isobilateral" అనే కీలక పదం రెండు వైపులు సమానంగా ఉన్నాయని అర్థం. రెండు వైపులు సమానంగా ఉంటే, stomata రెండు ఉపరితలాలపై సమానంగా ఉండాలి, ఒకదానికి పరిమితం కాదు. ఇది ఎంపికలు (a) మరియు (b) ను తొలగిస్తుంది. సమాధానం (d).',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-017',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'During secondary growth in a dicot stem, the vascular cambium forms a continuous ring by the activity of:',
    textTe: 'ద్విదళ కాండంలో ద్వితీయ పెరుగుదల సమయంలో, vascular cambium దేని కార్యకలాపం ద్వారా నిరంతర వలయాన్ని ఏర్పరుస్తుంది?',
    options: [
      { id: 'a', text: 'Cork cambium alone', textTe: 'Cork cambium మాత్రమే' },
      { id: 'b', text: 'Fascicular cambium only', textTe: 'Fascicular cambium మాత్రమే' },
      { id: 'c', text: 'Interfascicular cambium only', textTe: 'Interfascicular cambium మాత్రమే' },
      { id: 'd', text: 'Both fascicular cambium and interfascicular cambium', textTe: 'Fascicular cambium మరియు interfascicular cambium రెండూ' },
    ],
    correctOptionId: 'd',
    explanation:
      'In dicot stems, fascicular cambium (present within vascular bundles, between xylem and phloem) and interfascicular cambium (formed from medullary ray cells between bundles) together form a complete cambial ring. This ring is responsible for producing secondary xylem (wood) on the inner side and secondary phloem on the outer side. Cork cambium (a) is a separate lateral meristem that forms the periderm, not the vascular cambium ring.',
    explanationTe:
      'ద్విదళ కాండాలలో, fascicular cambium (vascular bundles లో, xylem మరియు phloem మధ్య ఉంటుంది) మరియు interfascicular cambium (కట్టల మధ్య medullary ray కణాల నుండి ఏర్పడుతుంది) కలిసి పూర్తి cambial వలయాన్ని ఏర్పరుస్తాయి. ఈ వలయం లోపలి వైపు ద్వితీయ xylem (కలప) మరియు బయటి వైపు ద్వితీయ phloem ను ఉత్పత్తి చేయడానికి బాధ్యత వహిస్తుంది. Cork cambium (a) periderm ను ఏర్పరుచే ప్రత్యేక lateral meristem, vascular cambium వలయం కాదు.',
    eliminationTechnique:
      'Cork cambium (a) forms bark-related tissues (periderm), not the vascular cambium ring — eliminate. Options (b) and (c) each mention only one type of cambium. Fascicular cambium alone leaves gaps between bundles; interfascicular cambium alone has no bundle-associated cambium. Neither alone can form a "continuous ring." Only (d) combining both makes a complete ring.',
    eliminationTechniqueTe:
      'Cork cambium (a) బెరడు సంబంధిత కణజాలాలను (periderm) ఏర్పరుస్తుంది, vascular cambium వలయం కాదు — తొలగించండి. ఎంపికలు (b) మరియు (c) ప్రతి ఒక్కటి ఒక రకమైన cambium ను మాత్రమే ప్రస్తావిస్తాయి. Fascicular cambium మాత్రమే కట్టల మధ్య ఖాళీలను వదిలివేస్తుంది; interfascicular cambium మాత్రమే కట్ట-అనుసంధాన cambium లేకుండా ఉంటుంది. ఏ ఒక్కటి మాత్రమే "నిరంతర వలయం" ను ఏర్పరచలేదు. (d) రెండింటినీ కలిపి మాత్రమే పూర్తి వలయం ఏర్పడుతుంది.',
    difficulty: 'medium',
  },
  {
    id: 'bot-pa-018',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Companion cells are closely associated with sieve tube elements in angiosperms. Their primary function is to:',
    textTe: 'Companion cells angiosperms లో sieve tube elements తో దగ్గరగా అనుసంధానం చేయబడి ఉంటాయి. వాటి ప్రాథమిక విధి ఏమిటి?',
    options: [
      { id: 'a', text: 'Maintain the pressure and metabolic functions of enucleate sieve tube elements', textTe: 'కేంద్రకం లేని sieve tube elements యొక్క ఒత్తిడి మరియు జీవక్రియ విధులను నిర్వహించడం' },
      { id: 'b', text: 'Store starch for the plant', textTe: 'మొక్క కోసం పిండి పదార్ధాన్ని నిల్వ చేయడం' },
      { id: 'c', text: 'Provide mechanical support to sieve tubes', textTe: 'Sieve tubes కు యాంత్రిక మద్దతు అందించడం' },
      { id: 'd', text: 'Transport water upward through the plant', textTe: 'మొక్క ద్వారా నీటిని పైకి రవాణా చేయడం' },
    ],
    correctOptionId: 'a',
    explanation:
      'Companion cells are nucleated living cells that are connected to sieve tube elements through numerous plasmodesmata. Since sieve tube elements lose their nucleus and most organelles at maturity, companion cells provide the necessary ATP, proteins, and metabolic support. They help in loading and unloading of sugars into sieve tubes and maintain their turgor pressure. Option (c) describes a function of fibres. Option (b) is a function of storage parenchyma. Option (d) is a function of xylem.',
    explanationTe:
      'Companion cells కేంద్రకం కలిగిన జీవ కణాలు, ఇవి అనేక plasmodesmata ద్వారా sieve tube elements కు అనుసంధానం చేయబడి ఉంటాయి. Sieve tube elements పరిపక్వత సమయంలో తమ కేంద్రకం మరియు చాలా అవయవాలను కోల్పోతాయి కాబట్టి, companion cells అవసరమైన ATP, proteins మరియు జీవక్రియ మద్దతును అందిస్తాయి. అవి sieve tubes లోకి చక్కెరల లోడింగ్ మరియు అన్‌లోడింగ్ లో సహాయపడతాయి మరియు వాటి turgor ఒత్తిడిని నిర్వహిస్తాయి. ఎంపిక (c) fibres యొక్క విధిని వివరిస్తుంది. ఎంపిక (b) నిల్వ parenchyma యొక్క విధి. ఎంపిక (d) xylem యొక్క విధి.',
    eliminationTechnique:
      'Option (d) mentions water transport, which is a xylem function — eliminate immediately. Option (c) mentions mechanical support — that is the role of sclerenchyma/fibres, not companion cells — eliminate. Option (b) mentions starch storage — companion cells are metabolically active for sieve tubes, not for starch storage — eliminate. Only (a) correctly describes their role in assisting enucleate sieve tubes.',
    eliminationTechniqueTe:
      'ఎంపిక (d) నీటి రవాణాను ప్రస్తావిస్తుంది, ఇది xylem విధి — వెంటనే తొలగించండి. ఎంపిక (c) యాంత్రిక మద్దతును ప్రస్తావిస్తుంది — ఇది sclerenchyma/fibres పాత్ర, companion cells కాదు — తొలగించండి. ఎంపిక (b) పిండి పదార్ధ నిల్వను ప్రస్తావిస్తుంది — companion cells sieve tubes కోసం జీవక్రియపరంగా చురుకుగా ఉంటాయి, పిండి పదార్ధ నిల్వ కోసం కాదు — తొలగించండి. (a) మాత్రమే కేంద్రకం లేని sieve tubes కు సహాయం చేయడంలో వాటి పాత్రను సరిగ్గా వివరిస్తుంది.',
    difficulty: 'medium',
  },

  // ===== HARD (7 questions) =====
  {
    id: 'bot-pa-019',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Casparian strips are found in the:',
    textTe: 'Casparian strips ఎక్కడ కనిపిస్తాయి?',
    options: [
      { id: 'a', text: 'Endodermal cells of the root', textTe: 'వేరు యొక్క endodermal కణాలలో' },
      { id: 'b', text: 'Epidermal cells of the root', textTe: 'వేరు యొక్క epidermal కణాలలో' },
      { id: 'c', text: 'Pericycle cells of the stem', textTe: 'కాండం యొక్క pericycle కణాలలో' },
      { id: 'd', text: 'Cortical cells of the stem', textTe: 'కాండం యొక్క cortical కణాలలో' },
    ],
    correctOptionId: 'a',
    explanation:
      'Casparian strips are bands of suberin and lignin deposited in the radial and tangential walls of endodermal cells of the root. They act as a barrier to the apoplastic movement of water and dissolved ions, forcing all substances to pass through the symplastic pathway (through the cell membrane and cytoplasm of endodermal cells). This selective regulation is crucial for controlling mineral uptake. Casparian strips are a defining feature of the root endodermis and are named after Robert Caspary.',
    explanationTe:
      'Casparian strips వేరు యొక్క endodermal కణాల radial మరియు tangential గోడలలో నిక్షేపించబడిన suberin మరియు lignin బ్యాండ్లు. అవి నీరు మరియు కరిగిన అయాన్ల apoplastic కదలికకు అవరోధంగా పనిచేస్తాయి, అన్ని పదార్ధాలను symplastic మార్గం ద్వారా (endodermal కణాల కణ త్వచం మరియు cytoplasm ద్వారా) ప్రయాణించేలా బలవంతం చేస్తాయి. ఈ ఎంపిక నియంత్రణ ఖనిజ శోషణను నియంత్రించడానికి కీలకం. Casparian strips వేరు endodermis యొక్క నిర్వచించే లక్షణం మరియు Robert Caspary పేరు మీద నామకరణం చేయబడ్డాయి.',
    eliminationTechnique:
      'Casparian strips are specifically an endodermal feature. Options (c) and (d) mention stem structures — Casparian strips are associated with root endodermis, not stems — eliminate both. Option (b) mentions epidermal cells — the epidermis is the outermost layer and does not have Casparian strips (it has root hairs instead) — eliminate. Only endodermal cells (a) have Casparian strips.',
    eliminationTechniqueTe:
      'Casparian strips ప్రత్యేకంగా endodermal లక్షణం. ఎంపికలు (c) మరియు (d) కాండ నిర్మాణాలను ప్రస్తావిస్తాయి — Casparian strips వేరు endodermis తో సంబంధం కలిగి ఉంటాయి, కాండాలతో కాదు — రెండింటినీ తొలగించండి. ఎంపిక (b) epidermal కణాలను ప్రస్తావిస్తుంది — epidermis బయటి పొర మరియు Casparian strips కలిగి ఉండదు (బదులుగా వేరు వెంట్రుకలు ఉంటాయి) — తొలగించండి. Endodermal కణాలకు (a) మాత్రమే Casparian strips ఉంటాయి.',
    difficulty: 'hard',
  },
  {
    id: 'bot-pa-020',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Passage cells (thin-walled cells) in the endodermis of roots are significant because they:',
    textTe: 'వేర్ల endodermis లోని passage cells (సన్నని గోడల కణాలు) ముఖ్యమైనవి ఎందుకంటే అవి:',
    options: [
      { id: 'a', text: 'Provide mechanical strength to the root', textTe: 'వేరుకు యాంత్రిక బలాన్ని అందిస్తాయి' },
      { id: 'b', text: 'Allow the passage of water and dissolved salts from cortex to xylem', textTe: 'Cortex నుండి xylem కు నీరు మరియు కరిగిన లవణాల ప్రసారాన్ని అనుమతిస్తాయి' },
      { id: 'c', text: 'Are responsible for secondary growth', textTe: 'ద్వితీయ పెరుగుదలకు బాధ్యత వహిస్తాయి' },
      { id: 'd', text: 'Produce lateral roots', textTe: 'పార్శ్వ వేర్లను ఉత్పత్తి చేస్తాయి' },
    ],
    correctOptionId: 'b',
    explanation:
      'In monocot roots (and older dicot roots), most endodermal cells become heavily thickened with suberin and lignin (barrel-shaped cells). However, certain endodermal cells opposite the protoxylem poles remain thin-walled — these are called passage cells. They permit the movement of water and dissolved minerals from the cortex into the vascular cylinder (stele). Without these passage cells, the heavily suberized endodermis would completely block water entry into the stele. Lateral roots originate from the pericycle (not passage cells), and secondary growth involves cambium.',
    explanationTe:
      'ఏకదళ వేర్లలో (మరియు పాత ద్విదళ వేర్లలో), చాలా endodermal కణాలు suberin మరియు lignin తో భారీగా మందంగా మారతాయి (బారెల్-ఆకార కణాలు). అయితే, protoxylem స్తంభాలకు ఎదురుగా ఉన్న కొన్ని endodermal కణాలు సన్నని గోడలతో ఉంటాయి — వీటిని passage cells అంటారు. అవి cortex నుండి vascular cylinder (stele) లోకి నీరు మరియు కరిగిన ఖనిజాల కదలికను అనుమతిస్తాయి. ఈ passage cells లేకుండా, భారీగా suberized endodermis stele లోకి నీటి ప్రవేశాన్ని పూర్తిగా అడ్డుకుంటుంది. పార్శ్వ వేర్లు pericycle నుండి ఉత్పన్నమవుతాయి (passage cells నుండి కాదు), మరియు ద్వితీయ పెరుగుదల cambium ను కలిగి ఉంటుంది.',
    eliminationTechnique:
      'Option (a) mentions mechanical strength — passage cells are thin-walled, the opposite of mechanically strong — eliminate. Option (c) mentions secondary growth — that is a function of cambium, not endodermal cells — eliminate. Option (d) mentions lateral root production — lateral roots arise from the pericycle — eliminate. The name "passage cells" itself hints at allowing passage of substances (b).',
    eliminationTechniqueTe:
      'ఎంపిక (a) యాంత్రిక బలాన్ని ప్రస్తావిస్తుంది — passage cells సన్నని గోడలు కలిగి ఉంటాయి, యాంత్రికంగా బలంగా ఉండటానికి వ్యతిరేకం — తొలగించండి. ఎంపిక (c) ద్వితీయ పెరుగుదలను ప్రస్తావిస్తుంది — ఇది cambium యొక్క విధి, endodermal కణాలది కాదు — తొలగించండి. ఎంపిక (d) పార్శ్వ వేరు ఉత్పత్తిని ప్రస్తావిస్తుంది — పార్శ్వ వేర్లు pericycle నుండి ఉత్పన్నమవుతాయి — తొలగించండి. "Passage cells" అనే పేరే పదార్ధాల ప్రసారాన్ని (b) అనుమతించడాన్ని సూచిస్తుంది.',
    difficulty: 'hard',
  },
  {
    id: 'bot-pa-021',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Heartwood differs from sapwood in that heartwood:',
    textTe: 'Heartwood, sapwood నుండి భిన్నంగా ఉంటుంది ఎందుకంటే heartwood:',
    options: [
      { id: 'a', text: 'Is the peripheral, lighter-coloured, functional wood that conducts water', textTe: 'అంచున ఉన్న, తేలికైన రంగు, నీటిని ప్రసరించే పనిచేసే కలప' },
      { id: 'b', text: 'Contains living cells and stores food', textTe: 'జీవించి ఉన్న కణాలను కలిగి ఉంటుంది మరియు ఆహారాన్ని నిల్వ చేస్తుంది' },
      { id: 'c', text: 'Has wider vessels and is highly porous', textTe: 'విస్తృత vessels కలిగి మరియు అత్యంత సచ్ఛిద్రమైనది' },
      { id: 'd', text: 'Is the dark, central, non-functional wood filled with tannins, resins, and other deposits', textTe: 'Tannins, resins మరియు ఇతర నిక్షేపాలతో నిండిన ముదురు, కేంద్ర, పని చేయని కలప' },
    ],
    correctOptionId: 'd',
    explanation:
      'Heartwood (duramen) is the central, older portion of the secondary xylem in a tree trunk. Over time, the inner wood becomes non-functional as its vessels and tracheids get blocked by tyloses and filled with organic compounds like tannins, resins, oils, gums, and aromatic substances. These deposits make heartwood darker in colour, more durable, and resistant to decay and insects. Sapwood (alburnum) is the peripheral, lighter, functional wood that actively conducts water. Option (a) describes sapwood, not heartwood. Option (b) also describes sapwood features.',
    explanationTe:
      'Heartwood (duramen) చెట్టు కాండంలోని ద్వితీయ xylem యొక్క కేంద్ర, పాత భాగం. కాలక్రమేణా, లోపలి కలప పని చేయకుండా పోతుంది ఎందుకంటే దాని vessels మరియు tracheids tyloses ద్వారా అడ్డుకోబడతాయి మరియు tannins, resins, oils, gums మరియు సువాసన పదార్ధాలు వంటి సేంద్రీయ సమ్మేళనాలతో నిండి ఉంటాయి. ఈ నిక్షేపాలు heartwood ను ముదురు రంగులో, మరింత మన్నికగా మరియు క్షయం మరియు కీటకాలకు నిరోధకంగా చేస్తాయి. Sapwood (alburnum) అంచున ఉన్న, తేలికైన, నీటిని చురుకుగా ప్రసరించే పని చేసే కలప. ఎంపిక (a) heartwood కాదు sapwood ను వివరిస్తుంది. ఎంపిక (b) కూడా sapwood లక్షణాలను వివరిస్తుంది.',
    eliminationTechnique:
      'Option (a) describes sapwood — "peripheral, lighter-coloured, conducts water" are all sapwood characteristics, the exact opposite of heartwood — eliminate. Option (b) says "living cells" — heartwood cells are dead and filled with deposits — eliminate. Option (c) mentions "wider vessels and highly porous" — heartwood vessels are blocked by tyloses, making it less porous — eliminate. Only (d) accurately describes heartwood.',
    eliminationTechniqueTe:
      'ఎంపిక (a) sapwood ను వివరిస్తుంది — "అంచున, తేలికైన రంగు, నీటిని ప్రసరిస్తుంది" అన్నీ sapwood లక్షణాలు, heartwood కు ఖచ్చితంగా వ్యతిరేకం — తొలగించండి. ఎంపిక (b) "జీవించి ఉన్న కణాలు" అని చెబుతుంది — heartwood కణాలు చనిపోయినవి మరియు నిక్షేపాలతో నిండి ఉంటాయి — తొలగించండి. ఎంపిక (c) "విస్తృత vessels మరియు అత్యంత సచ్ఛిద్రం" అని ప్రస్తావిస్తుంది — heartwood vessels tyloses ద్వారా అడ్డుకోబడతాయి, తక్కువ సచ్ఛిద్రంగా చేస్తాయి — తొలగించండి. (d) మాత్రమే heartwood ను ఖచ్చితంగా వివరిస్తుంది.',
    difficulty: 'hard',
  },
  {
    id: 'bot-pa-022',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'In the anatomy of a dicot root, the xylem is described as "exarch." This means that:',
    textTe: 'ద్విదళ వేరు anatomy లో, xylem "exarch" గా వర్ణించబడుతుంది. దీని అర్థం:',
    options: [
      { id: 'a', text: 'Protoxylem is towards the centre and metaxylem is towards the periphery', textTe: 'Protoxylem కేంద్రం వైపు ఉంటుంది మరియు metaxylem అంచు వైపు ఉంటుంది' },
      { id: 'b', text: 'Protoxylem is towards the periphery and metaxylem is towards the centre', textTe: 'Protoxylem అంచు వైపు ఉంటుంది మరియు metaxylem కేంద్రం వైపు ఉంటుంది' },
      { id: 'c', text: 'All xylem elements mature simultaneously', textTe: 'అన్ని xylem మూలకాలు ఏకకాలంలో పరిపక్వమవుతాయి' },
      { id: 'd', text: 'Xylem is absent and only phloem is present', textTe: 'Xylem ఉండదు మరియు phloem మాత్రమే ఉంటుంది' },
    ],
    correctOptionId: 'b',
    explanation:
      'Exarch xylem means the protoxylem (first-formed, smaller xylem elements) is located towards the periphery (outer side) and the metaxylem (later-formed, larger xylem elements) is located towards the centre (inner side). This pattern is characteristic of roots. In stems, the xylem is endarch — protoxylem is towards the centre and metaxylem is towards the periphery. The prefix "ex-" means "outside," indicating that the older/first-formed elements are on the outside. Option (a) describes the endarch condition found in stems.',
    explanationTe:
      'Exarch xylem అంటే protoxylem (మొదట ఏర్పడిన, చిన్న xylem మూలకాలు) అంచు (బయటి వైపు) వైపు ఉంటుంది మరియు metaxylem (తరువాత ఏర్పడిన, పెద్ద xylem మూలకాలు) కేంద్రం (లోపలి వైపు) వైపు ఉంటుంది. ఈ నమూనా వేర్ల లక్షణం. కాండాలలో, xylem endarch — protoxylem కేంద్రం వైపు మరియు metaxylem అంచు వైపు ఉంటుంది. "Ex-" అనే ఉపసర్గ "బయట" అని అర్థం, పాత/మొదట ఏర్పడిన మూలకాలు బయట ఉన్నాయని సూచిస్తుంది. ఎంపిక (a) కాండాలలో కనిపించే endarch స్థితిని వివరిస్తుంది.',
    eliminationTechnique:
      'Option (d) is absurd — roots always have xylem — eliminate. Option (c) states simultaneous maturation, which does not correspond to any known xylem development pattern — eliminate. Between (a) and (b), use the prefix: "ex-" = outside. In exarch, the PROTO (first/older) xylem is on the OUTSIDE (periphery). Option (a) has protoxylem at the centre, which is ENDARCH — eliminate. Answer is (b).',
    eliminationTechniqueTe:
      'ఎంపిక (d) అసంబద్ధం — వేర్లకు ఎల్లప్పుడూ xylem ఉంటుంది — తొలగించండి. ఎంపిక (c) ఏకకాల పరిపక్వతను చెబుతుంది, ఇది ఏ తెలిసిన xylem అభివృద్ధి నమూనాకు సరిపోదు — తొలగించండి. (a) మరియు (b) మధ్య, ఉపసర్గను ఉపయోగించండి: "ex-" = బయట. Exarch లో, PROTO (మొదటి/పాత) xylem బయట (అంచు) ఉంటుంది. ఎంపిక (a) లో protoxylem కేంద్రంలో ఉంది, ఇది ENDARCH — తొలగించండి. సమాధానం (b).',
    difficulty: 'hard',
  },
  {
    id: 'bot-pa-023',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Kranz anatomy is a specialized leaf anatomy found in:',
    textTe: 'Kranz anatomy అనేది ఎక్కడ కనిపించే ప్రత్యేక ఆకు anatomy?',
    options: [
      { id: 'a', text: 'C3 plants like rice and wheat', textTe: 'వరి మరియు గోధుమ వంటి C3 మొక్కలు' },
      { id: 'b', text: 'C4 plants like maize and sugarcane', textTe: 'మొక్కజొన్న మరియు చెరకు వంటి C4 మొక్కలు' },
      { id: 'c', text: 'CAM plants like cactus', textTe: 'కాక్టస్ వంటి CAM మొక్కలు' },
      { id: 'd', text: 'All aquatic plants', textTe: 'అన్ని జల మొక్కలు' },
    ],
    correctOptionId: 'b',
    explanation:
      'Kranz anatomy (German: "wreath") is a specialized arrangement found in C4 plants. It features large, conspicuous bundle sheath cells arranged in a wreath-like manner around the vascular bundles. These bundle sheath cells contain chloroplasts and are the site of the Calvin cycle in C4 photosynthesis. The mesophyll cells surrounding the bundle sheath cells perform the initial CO2 fixation (C4 pathway). This spatial separation of photosynthetic reactions is unique to C4 plants like maize (Zea mays), sugarcane (Saccharum), and sorghum. C3 plants lack this distinct bundle sheath arrangement.',
    explanationTe:
      'Kranz anatomy (జర్మన్: "పూలదండ") C4 మొక్కలలో కనిపించే ప్రత్యేక అమరిక. ఇది vascular bundles చుట్టూ పూలదండ వలె అమర్చబడిన పెద్ద, స్పష్టమైన bundle sheath కణాలను కలిగి ఉంటుంది. ఈ bundle sheath కణాలు chloroplasts ను కలిగి ఉంటాయి మరియు C4 కిరణజన్య సంయోగక్రియలో Calvin cycle స్థానం. Bundle sheath కణాల చుట్టూ ఉన్న mesophyll కణాలు ప్రారంభ CO2 స్థిరీకరణను (C4 మార్గం) నిర్వహిస్తాయి. కిరణజన్య సంయోగక్రియ చర్యల ఈ ప్రాదేశిక విభజన C4 మొక్కలకు ప్రత్యేకం — మొక్కజొన్న (Zea mays), చెరకు (Saccharum) మరియు జొన్న. C3 మొక్కలకు ఈ విభిన్న bundle sheath అమరిక లేదు.',
    eliminationTechnique:
      'Kranz anatomy is a classic NEET topic always linked to C4 photosynthesis. CAM plants (c) have temporal separation of CO2 fixation (day/night), not spatial (Kranz) anatomy — eliminate. C3 plants (a) like rice and wheat have a standard mesophyll without specialized bundle sheath — eliminate. "All aquatic plants" (d) is too broad and unrelated to Kranz anatomy — eliminate.',
    eliminationTechniqueTe:
      'Kranz anatomy ఎల్లప్పుడూ C4 కిరణజన్య సంయోగక్రియతో అనుసంధానం చేయబడిన క్లాసిక్ NEET అంశం. CAM మొక్కలు (c) CO2 స్థిరీకరణ యొక్క కాల విభజన (పగలు/రాత్రి) కలిగి ఉంటాయి, ప్రాదేశిక (Kranz) anatomy కాదు — తొలగించండి. C3 మొక్కలు (a) వరి మరియు గోధుమ వంటివి ప్రత్యేక bundle sheath లేని ప్రామాణిక mesophyll కలిగి ఉంటాయి — తొలగించండి. "అన్ని జల మొక్కలు" (d) చాలా విస్తృతమైనది మరియు Kranz anatomy కి సంబంధం లేనిది — తొలగించండి.',
    difficulty: 'hard',
  },
  {
    id: 'bot-pa-024',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Which of the following statements about secondary growth is INCORRECT?',
    textTe: 'ద్వితీయ పెరుగుదల గురించి కింది ప్రకటనలలో సరికానిది ఏది?',
    options: [
      { id: 'a', text: 'Secondary growth occurs in most dicots and gymnosperms', textTe: 'ద్వితీయ పెరుగుదల చాలా ద్విదళాలు మరియు gymnosperms లో జరుగుతుంది' },
      { id: 'b', text: 'Vascular cambium produces secondary xylem towards the inside and secondary phloem towards the outside', textTe: 'Vascular cambium లోపలి వైపు ద్వితీయ xylem మరియు బయటి వైపు ద్వితీయ phloem ను ఉత్పత్తి చేస్తుంది' },
      { id: 'c', text: 'The amount of secondary xylem produced is usually more than secondary phloem', textTe: 'ఉత్పత్తి చేయబడిన ద్వితీయ xylem మొత్తం సాధారణంగా ద్వితీయ phloem కంటే ఎక్కువ' },
      { id: 'd', text: 'Secondary growth regularly occurs in all monocots, producing annual rings', textTe: 'ద్వితీయ పెరుగుదల అన్ని ఏకదళాలలో క్రమం తప్పకుండా జరుగుతుంది, వార్షిక వలయాలను ఉత్పత్తి చేస్తుంది' },
    ],
    correctOptionId: 'd',
    explanation:
      'Statement (d) is INCORRECT. Secondary growth does NOT regularly occur in monocots. Most monocots lack a vascular cambium and have closed vascular bundles, so they do not undergo typical secondary growth or form annual rings. Some exceptional monocots (like Dracaena, palm-like plants) show anomalous secondary growth, but this is not the norm. Statements (a), (b), and (c) are all correct. More secondary xylem than phloem is produced because cambium activity is more vigorous on the xylem side.',
    explanationTe:
      'ప్రకటన (d) సరికానిది. ద్వితీయ పెరుగుదల ఏకదళాలలో క్రమం తప్పకుండా జరగదు. చాలా ఏకదళాలకు vascular cambium లేదు మరియు closed vascular bundles ఉన్నాయి, కాబట్టి అవి సాధారణ ద్వితీయ పెరుగుదల లేదా వార్షిక వలయాలను ఏర్పరచవు. కొన్ని అసాధారణ ఏకదళాలు (Dracaena వంటివి) అసాధారణ ద్వితీయ పెరుగుదలను చూపిస్తాయి, కానీ ఇది సాధారణం కాదు. ప్రకటనలు (a), (b) మరియు (c) అన్నీ సరైనవి. Xylem వైపు cambium కార్యకలాపం మరింత చురుకుగా ఉన్నందున ద్వితీయ phloem కంటే ఎక్కువ ద్వితీయ xylem ఉత్పత్తి అవుతుంది.',
    eliminationTechnique:
      'This is a "find the incorrect" question. Verify each option: (a) Dicots and gymnosperms do show secondary growth — correct, keep. (b) Cambium does produce xylem inside and phloem outside — correct, keep. (c) More xylem than phloem is produced — correct, this is a well-known fact. (d) Claims ALL monocots show regular secondary growth with annual rings — this contradicts the fundamental fact that monocots generally LACK secondary growth. Option (d) is the incorrect statement.',
    eliminationTechniqueTe:
      'ఇది "సరికానిది కనుగొనండి" ప్రశ్న. ప్రతి ఎంపికను ధృవీకరించండి: (a) ద్విదళాలు మరియు gymnosperms ద్వితీయ పెరుగుదలను చూపిస్తాయి — సరైనది, ఉంచండి. (b) Cambium లోపల xylem మరియు బయట phloem ను ఉత్పత్తి చేస్తుంది — సరైనది, ఉంచండి. (c) Phloem కంటే ఎక్కువ xylem ఉత్పత్తి అవుతుంది — సరైనది, ఇది బాగా తెలిసిన వాస్తవం. (d) అన్ని ఏకదళాలు క్రమం తప్పకుండా ద్వితీయ పెరుగుదలను చూపిస్తాయి అని పేర్కొంటుంది — ఇది ఏకదళాలకు సాధారణంగా ద్వితీయ పెరుగుదల ఉండదు అనే ప్రాథమిక వాస్తవానికి విరుద్ధం. ఎంపిక (d) సరికాని ప్రకటన.',
    difficulty: 'hard',
  },
  {
    id: 'bot-pa-025',
    chapterId: 'botany-plant-anatomy',
    subjectId: 'botany',
    text: 'Lenticels are found in the bark of woody plants and their primary function is:',
    textTe: 'Lenticels కొయ్య మొక్కల బెరడులో కనిపిస్తాయి మరియు వాటి ప్రాథమిక విధి:',
    options: [
      { id: 'a', text: 'Absorption of water from rain', textTe: 'వర్షం నుండి నీటిని శోషించడం' },
      { id: 'b', text: 'Photosynthesis in the bark region', textTe: 'బెరడు ప్రాంతంలో కిరణజన్య సంయోగక్రియ' },
      { id: 'c', text: 'Gaseous exchange between the internal tissues and the atmosphere', textTe: 'అంతర్గత కణజాలాలు మరియు వాతావరణం మధ్య వాయువుల మార్పిడి' },
      { id: 'd', text: 'Prevention of pathogen entry', textTe: 'వ్యాధికారక ప్రవేశాన్ని నిరోధించడం' },
    ],
    correctOptionId: 'c',
    explanation:
      'Lenticels are lens-shaped openings in the periderm (bark) of woody stems and roots. They develop in regions where cork cambium is more active, producing loosely arranged cells (complementary cells or filling tissue) with large intercellular spaces. Since the periderm (especially the suberized cork cells) is impervious to gases, lenticels serve as the main pathway for gaseous exchange (O2 and CO2) between the living internal tissues and the external atmosphere. They replace the function of stomata, which are lost when the epidermis is replaced by periderm during secondary growth.',
    explanationTe:
      'Lenticels కొయ్య కాండాలు మరియు వేర్ల periderm (బెరడు) లో ఉన్న కటకాకార రంధ్రాలు. Cork cambium మరింత చురుకుగా ఉన్న ప్రాంతాలలో అవి అభివృద్ధి చెందుతాయి, పెద్ద అంతరకణ ఖాళీలతో వదులుగా అమర్చబడిన కణాలను (complementary cells లేదా filling tissue) ఉత్పత్తి చేస్తాయి. Periderm (ప్రత్యేకంగా suberized cork కణాలు) వాయువులకు చొరబడనిది కాబట్టి, lenticels జీవించి ఉన్న అంతర్గత కణజాలాలు మరియు బాహ్య వాతావరణం మధ్య వాయువుల మార్పిడికి (O2 మరియు CO2) ప్రధాన మార్గంగా పనిచేస్తాయి. ద్వితీయ పెరుగుదల సమయంలో epidermis periderm ద్వారా భర్తీ అయినప్పుడు కోల్పోయిన stomata యొక్క విధిని అవి భర్తీ చేస్తాయి.',
    eliminationTechnique:
      'Option (a) states water absorption — lenticels are not involved in water absorption, and the bark is designed to be waterproof — eliminate. Option (b) states photosynthesis — bark cells generally lack chloroplasts and lenticels are not green structures — eliminate. Option (d) states pathogen prevention — lenticels are actually openings that could potentially allow pathogen entry, not prevent it — eliminate. The correct answer is gas exchange (c), which is the classic textbook function.',
    eliminationTechniqueTe:
      'ఎంపిక (a) నీటి శోషణను చెబుతుంది — lenticels నీటి శోషణలో పాల్గొనవు, మరియు బెరడు నీటికి చొరబడనిదిగా రూపొందించబడింది — తొలగించండి. ఎంపిక (b) కిరణజన్య సంయోగక్రియను చెబుతుంది — బెరడు కణాలకు సాధారణంగా chloroplasts ఉండవు మరియు lenticels ఆకుపచ్చ నిర్మాణాలు కావు — తొలగించండి. ఎంపిక (d) వ్యాధికారక నిరోధాన్ని చెబుతుంది — lenticels వాస్తవానికి వ్యాధికారక ప్రవేశాన్ని అనుమతించగల రంధ్రాలు, నిరోధించేవి కాదు — తొలగించండి. సరైన సమాధానం వాయువుల మార్పిడి (c), ఇది క్లాసిక్ పాఠ్యపుస్తక విధి.',
    difficulty: 'hard',
  },
];
