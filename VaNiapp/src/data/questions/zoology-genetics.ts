import { Question } from '../../types';

export const zoologyGeneticsQuestions: Question[] = [
  // ─── EASY (8 questions) ────────────────────────────────────────────

  {
    id: 'zoo-gen-001',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'When Mendel crossed pure-breeding tall pea plants (TT) with pure-breeding dwarf pea plants (tt), all the F1 offspring were tall. This observation is best explained by:',
    textTe: 'మెండెల్ స్వచ్ఛ సంతాన పొడవు బఠానీ మొక్కలను (TT) స్వచ్ఛ సంతాన పొట్టి బఠానీ మొక్కలతో (tt) సంకరణం చేసినపుడు, F1 తరం మొక్కలన్నీ పొడవుగా ఉన్నాయి. ఈ పరిశీలనకు ఉత్తమ వివరణ:',
    options: [
      { id: 'a', text: 'Law of Segregation', textTe: 'విభజన నియమం' },
      { id: 'b', text: 'Law of Dominance', textTe: 'ప్రాబల్య నియమం' },
      { id: 'c', text: 'Law of Independent Assortment', textTe: 'స్వతంత్ర వర్గీకరణ నియమం' },
      { id: 'd', text: 'Incomplete Dominance', textTe: 'అసంపూర్ణ ప్రాబల్యం' },
    ],
    correctOptionId: 'b',
    explanation:
      'When pure tall (TT) is crossed with pure dwarf (tt), all F1 offspring are heterozygous (Tt). Since the T allele is dominant over t, all F1 plants express the tall phenotype. This demonstrates the Law of Dominance, which states that in a heterozygote, only the dominant allele expresses its phenotype while the recessive allele is masked.',
    explanationTe:
      'స్వచ్ఛ పొడవు (TT) ను స్వచ్ఛ పొట్టి (tt) తో సంకరణం చేసినపుడు, F1 సంతానం అంతా హెటెరోజైగస్ (Tt) గా ఉంటుంది. T allele, t పై ప్రబలంగా ఉన్నందున, F1 మొక్కలన్నీ పొడవు phenotype ను చూపుతాయి. ఇది ప్రాబల్య నియమాన్ని ప్రదర్శిస్తుంది — హెటెరోజైగస్ లో ప్రబల allele మాత్రమే తన phenotype ను వ్యక్తం చేస్తుంది, అప్రబల allele మరుగున ఉంటుంది.',
    eliminationTechnique:
      'Law of Segregation explains allele separation during gamete formation, not why one trait masks another — eliminate (a). Law of Independent Assortment applies to two or more gene pairs in a dihybrid cross, not a single gene — eliminate (c). Incomplete Dominance would produce an intermediate phenotype (neither tall nor dwarf), but all F1 are tall — eliminate (d).',
    eliminationTechniqueTe:
      'విభజన నియమం gamete ఏర్పాటులో allele ల విడిపోవడాన్ని వివరిస్తుంది, ఒక లక్షణం మరొకదాన్ని ఎందుకు మరుగుపరుస్తుందో కాదు — (a) తొలగించండి. స్వతంత్ర వర్గీకరణ నియమం రెండు లేదా అంతకంటే ఎక్కువ gene జతలకు వర్తిస్తుంది, ఒకే gene కు కాదు — (c) తొలగించండి. అసంపూర్ణ ప్రాబల్యంలో మధ్యస్థ phenotype కనిపిస్తుంది, కానీ ఇక్కడ F1 అన్నీ పొడవు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'zoo-gen-002',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'In a monohybrid cross between two heterozygous tall pea plants (Tt × Tt), the expected phenotypic ratio in the F2 generation is:',
    textTe: 'రెండు హెటెరోజైగస్ పొడవు బఠానీ మొక్కల (Tt × Tt) మధ్య ఏక సంకర సంకరణంలో, F2 తరంలో ఆశించిన phenotypic నిష్పత్తి:',
    options: [
      { id: 'a', text: '1 : 1', textTe: '1 : 1' },
      { id: 'b', text: '1 : 2 : 1', textTe: '1 : 2 : 1' },
      { id: 'c', text: '3 : 1', textTe: '3 : 1' },
      { id: 'd', text: '9 : 3 : 3 : 1', textTe: '9 : 3 : 3 : 1' },
    ],
    correctOptionId: 'c',
    explanation:
      'Tt × Tt gives the genotypic ratio TT : Tt : tt = 1 : 2 : 1. Since both TT and Tt express the tall phenotype (T is dominant over t), the phenotypic ratio is 3 tall : 1 dwarf = 3 : 1. This classic Mendelian ratio is the hallmark of a monohybrid cross with complete dominance.',
    explanationTe:
      'Tt × Tt genotypic నిష్పత్తి TT : Tt : tt = 1 : 2 : 1 ఇస్తుంది. TT మరియు Tt రెండూ పొడవు phenotype ను చూపిస్తాయి (T, t పై ప్రబలం) కాబట్టి, phenotypic నిష్పత్తి 3 పొడవు : 1 పొట్టి = 3 : 1 అవుతుంది. సంపూర్ణ ప్రాబల్యం ఉన్న ఏక సంకర సంకరణంలో ఈ నిష్పత్తి ప్రామాణికం.',
    eliminationTechnique:
      '1 : 1 is the ratio from a test cross (Tt × tt), not a cross between two heterozygotes — eliminate (a). 1 : 2 : 1 is the genotypic ratio (TT : Tt : tt), not the phenotypic ratio — eliminate (b). 9 : 3 : 3 : 1 is the dihybrid cross phenotypic ratio involving two gene pairs, not a monohybrid cross — eliminate (d).',
    eliminationTechniqueTe:
      '1 : 1 అనేది test cross (Tt × tt) నిష్పత్తి, రెండు హెటెరోజైగస్ ల సంకరణం కాదు — (a) తొలగించండి. 1 : 2 : 1 అనేది genotypic నిష్పత్తి (TT : Tt : tt), phenotypic నిష్పత్తి కాదు — (b) తొలగించండి. 9 : 3 : 3 : 1 అనేది రెండు gene జతలతో ద్వంద్వ సంకర నిష్పత్తి — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'zoo-gen-003',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'DNA replication is described as semiconservative because:',
    textTe: 'DNA ప్రతిరూపణను అర్ధ సంరక్షక (semiconservative) అని పిలుస్తారు ఎందుకంటే:',
    options: [
      {
        id: 'a',
        text: 'Each new DNA molecule contains one parental strand and one newly synthesized strand',
        textTe: 'ప్రతి కొత్త DNA అణువులో ఒక మాతృ strand మరియు ఒక కొత్తగా సంశ్లేషించబడిన strand ఉంటుంది',
      },
      {
        id: 'b',
        text: 'Only half of the DNA molecule is replicated at a time',
        textTe: 'ఒక సమయంలో DNA అణువులో సగం మాత్రమే ప్రతిరూపణ అవుతుంది',
      },
      {
        id: 'c',
        text: 'The process requires only DNA polymerase and no other enzyme',
        textTe: 'ఈ ప్రక్రియకు DNA polymerase మాత్రమే అవసరం, ఇతర enzyme లు అవసరం లేదు',
      },
      {
        id: 'd',
        text: 'Both strands are entirely newly synthesized in each daughter molecule',
        textTe: 'ప్రతి కుమార్తె అణువులో రెండు strand లు పూర్తిగా కొత్తగా సంశ్లేషించబడతాయి',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'Meselson and Stahl (1958) experimentally proved that DNA replication is semiconservative using N-15 heavy nitrogen labelling in E. coli. In semiconservative replication, each daughter DNA molecule retains one original (parental) strand and synthesizes one new complementary strand. This ensures genetic fidelity across generations.',
    explanationTe:
      'Meselson మరియు Stahl (1958) E. coli లో N-15 భారీ నైట్రోజన్ లేబులింగ్ ఉపయోగించి DNA ప్రతిరూపణ అర్ధ సంరక్షకమని ప్రయోగాత్మకంగా నిరూపించారు. అర్ధ సంరక్షక ప్రతిరూపణలో, ప్రతి కుమార్తె DNA అణువు ఒక అసలు (మాతృ) strand ను నిలుపుకొని ఒక కొత్త పూరక strand ను సంశ్లేషిస్తుంది.',
    eliminationTechnique:
      '"Only half of the DNA is replicated" is factually wrong — the entire genome is replicated before cell division — eliminate (b). DNA replication requires many enzymes including helicase, primase, DNA ligase, and topoisomerase, not just DNA polymerase — eliminate (c). If both strands were entirely new, that would describe dispersive replication, not semiconservative — eliminate (d).',
    eliminationTechniqueTe:
      '"DNA లో సగం మాత్రమే ప్రతిరూపణ అవుతుంది" అనేది తప్పు — కణ విభజనకు ముందు మొత్తం genome ప్రతిరూపణ అవుతుంది — (b) తొలగించండి. DNA ప్రతిరూపణకు helicase, primase, DNA ligase, topoisomerase వంటి అనేక enzyme లు అవసరం — (c) తొలగించండి. రెండు strand లు పూర్తిగా కొత్తవి అయితే అది dispersive replication, semiconservative కాదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'zoo-gen-004',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'Down syndrome in humans is caused by:',
    textTe: 'మానవులలో Down syndrome దేని వలన కలుగుతుంది?',
    options: [
      { id: 'a', text: 'Monosomy of chromosome 21', textTe: 'Chromosome 21 యొక్క monosomy' },
      { id: 'b', text: 'Trisomy of chromosome 18', textTe: 'Chromosome 18 యొక్క trisomy' },
      { id: 'c', text: 'Deletion in chromosome 5', textTe: 'Chromosome 5 లో deletion' },
      { id: 'd', text: 'Trisomy of chromosome 21', textTe: 'Chromosome 21 యొక్క trisomy' },
    ],
    correctOptionId: 'd',
    explanation:
      'Down syndrome (also called Trisomy 21) is caused by the presence of an extra copy of chromosome 21, giving a total karyotype of 47 chromosomes (2n + 1 = 47). It is the most common autosomal aneuploidy in live births and is characterized by intellectual disability, characteristic facial features, short stature, and a broad palm with a single crease.',
    explanationTe:
      'Down syndrome (Trisomy 21) chromosome 21 యొక్క అదనపు ప్రతి వల్ల కలుగుతుంది, మొత్తం 47 chromosomes (2n + 1 = 47) ఉంటాయి. ఇది జీవించి పుట్టిన వారిలో అత్యంత సాధారణ autosomal aneuploidy. మేధోవైకల్యం, ప్రత్యేక ముఖ లక్షణాలు, పొట్టి ఎత్తు మరియు ఒకే చేతి గీత ఉన్న వెడల్పు అరచేయి దీని లక్షణాలు.',
    eliminationTechnique:
      'Monosomy of chromosome 21 (only one copy) is usually lethal and does not produce Down syndrome — eliminate (a). Trisomy of chromosome 18 causes Edward syndrome, a different and more severe disorder — eliminate (b). Deletion of the short arm of chromosome 5 causes Cri-du-chat syndrome, characterized by a cat-like cry — eliminate (c).',
    eliminationTechniqueTe:
      'Chromosome 21 యొక్క monosomy (ఒక copy మాత్రమే) సాధారణంగా ప్రాణాంతకం, Down syndrome కాదు — (a) తొలగించండి. Chromosome 18 trisomy Edward syndrome ను కలిగిస్తుంది — (b) తొలగించండి. Chromosome 5 లో deletion Cri-du-chat syndrome ను కలిగిస్తుంది — (c) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'zoo-gen-005',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'The genetic code is described as a triplet code. This means:',
    textTe: 'జన్యు సంకేతాన్ని త్రికం (triplet) సంకేతం అని వర్ణిస్తారు. దీని అర్థం:',
    options: [
      {
        id: 'a',
        text: 'Three different codons code for each amino acid',
        textTe: 'ప్రతి amino acid కోసం మూడు వేర్వేరు codon లు సంకేతం చేస్తాయి',
      },
      {
        id: 'b',
        text: 'A sequence of three consecutive nucleotides (codon) codes for one amino acid',
        textTe: 'మూడు వరుస nucleotide ల శ్రేణి (codon) ఒక amino acid కోసం సంకేతం చేస్తుంది',
      },
      {
        id: 'c',
        text: 'Three amino acids are coded by one nucleotide',
        textTe: 'ఒక nucleotide ద్వారా మూడు amino acid లు సంకేతించబడతాయి',
      },
      {
        id: 'd',
        text: 'Only three types of nucleotides exist in mRNA',
        textTe: 'mRNA లో మూడు రకాల nucleotide లు మాత్రమే ఉంటాయి',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'The genetic code is a triplet code where each codon consists of three consecutive nucleotides on mRNA. Each triplet codon specifies one amino acid during translation. With four bases (A, U, G, C) arranged in triplets, there are 4^3 = 64 possible codons, which code for 20 amino acids plus three stop signals (UAA, UAG, UGA).',
    explanationTe:
      'జన్యు సంకేతం triplet code, ఇందులో ప్రతి codon mRNA పై మూడు వరుస nucleotide లతో కూడి ఉంటుంది. ప్రతి triplet codon translation సమయంలో ఒక amino acid ను నిర్దేశిస్తుంది. నాలుగు base లు (A, U, G, C) triplet లుగా అమరిస్తే 4^3 = 64 codon లు సాధ్యం, ఇవి 20 amino acid లు మరియు మూడు stop signal లు (UAA, UAG, UGA) కోసం సంకేతం చేస్తాయి.',
    eliminationTechnique:
      'The number of codons per amino acid varies due to degeneracy (e.g., leucine has 6 codons, methionine has 1), so "three codons per amino acid" is not a general rule — eliminate (a). One nucleotide cannot code for three amino acids; it takes three nucleotides to specify one — eliminate (c). mRNA contains four types of nucleotides (A, U, G, C), not three — eliminate (d).',
    eliminationTechniqueTe:
      'Degeneracy వల్ల ప్రతి amino acid కు codon ల సంఖ్య భిన్నంగా ఉంటుంది (leucine కు 6 codons, methionine కు 1) — (a) తొలగించండి. ఒక nucleotide మూడు amino acid లను సంకేతించలేదు; ఒక amino acid కు మూడు nucleotide లు అవసరం — (c) తొలగించండి. mRNA లో నాలుగు రకాల nucleotide లు (A, U, G, C) ఉంటాయి, మూడు కాదు — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'zoo-gen-006',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'Turner syndrome is characterized by which chromosomal constitution?',
    textTe: 'Turner syndrome ఏ chromosomal నిర్మాణం ద్వారా గుర్తించబడుతుంది?',
    options: [
      { id: 'a', text: '47, XXY', textTe: '47, XXY' },
      { id: 'b', text: '47, XXX', textTe: '47, XXX' },
      { id: 'c', text: '45, X0', textTe: '45, X0' },
      { id: 'd', text: '47, XYY', textTe: '47, XYY' },
    ],
    correctOptionId: 'c',
    explanation:
      'Turner syndrome occurs in females with a missing second sex chromosome, giving a 45, X0 karyotype (monosomy of the X chromosome). Affected individuals are phenotypically female but exhibit short stature, a webbed neck, shield-shaped chest, sterility due to rudimentary ovaries, and absence of secondary sexual characteristics. It is the only viable monosomy in humans.',
    explanationTe:
      'Turner syndrome రెండవ లింగ chromosome లేని స్త్రీలలో సంభవిస్తుంది, 45, X0 karyotype (X chromosome monosomy) కలిగి ఉంటుంది. ప్రభావిత వ్యక్తులు phenotypically స్త్రీలు కానీ పొట్టి ఎత్తు, జాలం మెడ (webbed neck), అభివృద్ధి చెందని అండాశయాలు వల్ల వంధ్యత్వం మరియు ద్వితీయ లైంగిక లక్షణాల లేమి చూపిస్తారు. ఇది మానవులలో ఏకైక జీవించగల monosomy.',
    eliminationTechnique:
      '47, XXY is Klinefelter syndrome, which occurs in males with an extra X chromosome — eliminate (a). 47, XXX is Triple X syndrome (superfemale), where affected females are usually fertile with mild symptoms — eliminate (b). 47, XYY is Jacob syndrome, seen in males who are typically tall with no major abnormalities — eliminate (d).',
    eliminationTechniqueTe:
      '47, XXY అనేది Klinefelter syndrome, ఇది అదనపు X chromosome ఉన్న పురుషులలో సంభవిస్తుంది — (a) తొలగించండి. 47, XXX అనేది Triple X syndrome, ప్రభావిత స్త్రీలు సాధారణంగా సంతానోత్పత్తి సామర్థ్యం కలిగి ఉంటారు — (b) తొలగించండి. 47, XYY అనేది Jacob syndrome, సాధారణంగా ఎత్తైన పురుషులలో కనిపిస్తుంది — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'zoo-gen-007',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'A person with blood group AB has which of the following genotypes?',
    textTe: 'AB రక్తపు గ్రూపు ఉన్న వ్యక్తి యొక్క genotype ఏది?',
    options: [
      { id: 'a', text: 'I^A I^B', textTe: 'I^A I^B' },
      { id: 'b', text: 'I^A I^A or I^A i', textTe: 'I^A I^A లేదా I^A i' },
      { id: 'c', text: 'I^B I^B or I^B i', textTe: 'I^B I^B లేదా I^B i' },
      { id: 'd', text: 'ii', textTe: 'ii' },
    ],
    correctOptionId: 'a',
    explanation:
      'ABO blood groups are determined by the gene I with three alleles: I^A, I^B, and i. Blood group AB results from the genotype I^A I^B, where both I^A and I^B alleles are codominant — both are expressed simultaneously, producing both A and B antigens on the surface of red blood cells. This is a classic example of codominance and multiple allelism.',
    explanationTe:
      'ABO రక్తపు గ్రూపులు I gene యొక్క మూడు allele లు (I^A, I^B, i) ద్వారా నిర్ణయించబడతాయి. AB రక్తపు గ్రూపు I^A I^B genotype నుండి వస్తుంది, ఇక్కడ I^A మరియు I^B allele లు రెండూ codominant — రెండూ ఏకకాలంలో వ్యక్తమవుతాయి, ఎర్ర రక్త కణాల ఉపరితలంపై A మరియు B antigen లు రెండూ ఉత్పత్తి అవుతాయి. ఇది codominance మరియు multiple allelism కు ఉదాహరణ.',
    eliminationTechnique:
      'I^A I^A or I^A i produces blood group A (only A antigen), not AB — eliminate (b). I^B I^B or I^B i produces blood group B (only B antigen), not AB — eliminate (c). The genotype ii produces blood group O with neither A nor B antigens — eliminate (d).',
    eliminationTechniqueTe:
      'I^A I^A లేదా I^A i రక్తపు గ్రూపు A ను ఇస్తుంది (A antigen మాత్రమే), AB కాదు — (b) తొలగించండి. I^B I^B లేదా I^B i రక్తపు గ్రూపు B ను ఇస్తుంది (B antigen మాత్రమే) — (c) తొలగించండి. ii genotype O రక్తపు గ్రూపును ఇస్తుంది — (d) తొలగించండి.',
    difficulty: 'easy',
  },

  {
    id: 'zoo-gen-008',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'Klinefelter syndrome is characterized by:',
    textTe: 'Klinefelter syndrome యొక్క లక్షణాలు:',
    options: [
      {
        id: 'a',
        text: '45 chromosomes with X0 sex complement',
        textTe: '45 chromosomes, X0 లింగ పూరకంతో',
      },
      {
        id: 'b',
        text: '47 chromosomes with trisomy of chromosome 21',
        textTe: '47 chromosomes, chromosome 21 trisomy తో',
      },
      {
        id: 'c',
        text: '44 autosomes with XY sex complement (normal male)',
        textTe: '44 autosome లు, XY లింగ పూరకంతో (సాధారణ పురుషుడు)',
      },
      {
        id: 'd',
        text: '47 chromosomes with XXY sex complement',
        textTe: '47 chromosomes, XXY లింగ పూరకంతో',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'Klinefelter syndrome occurs in males who possess an extra X chromosome, giving a karyotype of 47, XXY (44 autosomes + XXY). Affected individuals are phenotypically male but display gynecomastia (breast enlargement), are tall in stature, sterile due to underdeveloped testes, and may experience mild learning difficulties. The condition results from nondisjunction during meiosis.',
    explanationTe:
      'Klinefelter syndrome అదనపు X chromosome ఉన్న పురుషులలో సంభవిస్తుంది, 47, XXY karyotype (44 autosome లు + XXY) కలిగి ఉంటుంది. ప్రభావిత వ్యక్తులు phenotypically పురుషులు కానీ స్తనాభివృద్ధి (gynecomastia), ఎత్తైన ఎత్తు, అభివృద్ధి చెందని వృషణాల వల్ల వంధ్యత్వం చూపిస్తారు. ఈ పరిస్థితి meiosis లో nondisjunction వల్ల కలుగుతుంది.',
    eliminationTechnique:
      '45 chromosomes with X0 is Turner syndrome, which occurs in females — eliminate (a). 47 chromosomes with trisomy 21 is Down syndrome, an autosomal disorder unrelated to sex chromosomes — eliminate (b). 44 autosomes + XY = 46 chromosomes is a normal male karyotype with no abnormality — eliminate (c).',
    eliminationTechniqueTe:
      '45, X0 అనేది Turner syndrome, ఇది స్త్రీలలో సంభవిస్తుంది — (a) తొలగించండి. Chromosome 21 trisomy అనేది Down syndrome — (b) తొలగించండి. 44 autosome లు + XY = 46 chromosomes సాధారణ పురుష karyotype — (c) తొలగించండి.',
    difficulty: 'easy',
  },

  // ─── MEDIUM (10 questions) ─────────────────────────────────────────

  {
    id: 'zoo-gen-009',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'In a dihybrid cross between two plants heterozygous for seed shape and seed colour (RrYy × RrYy), the expected phenotypic ratio in F2 is:',
    textTe: 'విత్తన ఆకారం మరియు విత్తన రంగుకు హెటెరోజైగస్ అయిన రెండు మొక్కల మధ్య ద్వంద్వ సంకర సంకరణంలో (RrYy × RrYy), F2 లో ఆశించిన phenotypic నిష్పత్తి:',
    options: [
      { id: 'a', text: '3 : 1', textTe: '3 : 1' },
      { id: 'b', text: '9 : 3 : 3 : 1', textTe: '9 : 3 : 3 : 1' },
      { id: 'c', text: '1 : 1 : 1 : 1', textTe: '1 : 1 : 1 : 1' },
      { id: 'd', text: '12 : 3 : 1', textTe: '12 : 3 : 1' },
    ],
    correctOptionId: 'b',
    explanation:
      'A dihybrid cross between two double heterozygotes (RrYy × RrYy) produces the classic Mendelian ratio of 9 : 3 : 3 : 1 — specifically, 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green. This ratio arises from the independent assortment of two gene pairs, each showing complete dominance (R over r, and Y over y).',
    explanationTe:
      'రెండు ద్వంద్వ హెటెరోజైగస్ ల (RrYy × RrYy) మధ్య ద్వంద్వ సంకర సంకరణం 9 : 3 : 3 : 1 నిష్పత్తిని ఇస్తుంది — 9 గుండ్రని పసుపు : 3 గుండ్రని ఆకుపచ్చ : 3 ముడత పసుపు : 1 ముడత ఆకుపచ్చ. ఈ నిష్పత్తి రెండు gene జతల స్వతంత్ర వర్గీకరణ నుండి వస్తుంది.',
    eliminationTechnique:
      '3 : 1 is the monohybrid F2 ratio for a single gene pair, not two gene pairs — eliminate (a). 1 : 1 : 1 : 1 is the ratio expected from a dihybrid test cross (RrYy × rryy), not a dihybrid F2 — eliminate (c). 12 : 3 : 1 is a modified ratio due to epistasis (e.g., inhibitory gene interaction), not a standard dihybrid cross — eliminate (d).',
    eliminationTechniqueTe:
      '3 : 1 అనేది ఒకే gene జత యొక్క ఏక సంకర F2 నిష్పత్తి — (a) తొలగించండి. 1 : 1 : 1 : 1 అనేది ద్వంద్వ సంకర test cross (RrYy × rryy) నిష్పత్తి — (c) తొలగించండి. 12 : 3 : 1 అనేది epistasis వల్ల మార్పు చెందిన నిష్పత్తి — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-010',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'In snapdragon (Antirrhinum majus), a cross between a homozygous red-flowered plant (RR) and a homozygous white-flowered plant (rr) produces pink-flowered F1 plants. This is an example of:',
    textTe: 'Snapdragon (Antirrhinum majus) లో, homozygous ఎరుపు పుష్పం మొక్క (RR) మరియు homozygous తెలుపు పుష్పం మొక్క (rr) మధ్య సంకరణం F1 లో గులాబీ పుష్పం మొక్కలను ఉత్పత్తి చేస్తుంది. ఇది దేనికి ఉదాహరణ?',
    options: [
      { id: 'a', text: 'Complete dominance', textTe: 'సంపూర్ణ ప్రాబల్యం' },
      { id: 'b', text: 'Codominance', textTe: 'సహ-ప్రాబల్యం (codominance)' },
      { id: 'c', text: 'Incomplete dominance', textTe: 'అసంపూర్ణ ప్రాబల్యం' },
      { id: 'd', text: 'Epistasis', textTe: 'ఎపిస్టాసిస్ (epistasis)' },
    ],
    correctOptionId: 'c',
    explanation:
      'In incomplete dominance, the heterozygote (Rr) shows an intermediate phenotype between the two homozygous parents. Red (RR) × White (rr) produces Pink (Rr) in F1. The F2 phenotypic ratio is 1 Red (RR) : 2 Pink (Rr) : 1 White (rr) = 1 : 2 : 1, which differs from the typical 3 : 1 Mendelian ratio because neither allele is completely dominant.',
    explanationTe:
      'అసంపూర్ణ ప్రాబల్యంలో, హెటెరోజైగస్ (Rr) రెండు homozygous తల్లిదండ్రుల మధ్య మధ్యస్థ phenotype ను చూపిస్తుంది. ఎరుపు (RR) × తెలుపు (rr) F1 లో గులాబీ (Rr) ను ఉత్పత్తి చేస్తుంది. F2 phenotypic నిష్పత్తి 1 ఎరుపు (RR) : 2 గులాబీ (Rr) : 1 తెలుపు (rr) = 1 : 2 : 1, ఇది సాధారణ 3 : 1 నిష్పత్తి నుండి భిన్నంగా ఉంటుంది.',
    eliminationTechnique:
      'In complete dominance, the F1 would display the dominant parent phenotype (red), not an intermediate (pink) — eliminate (a). Codominance would show both parental traits simultaneously (e.g., red and white patches on the same flower), not a blended intermediate colour — eliminate (b). Epistasis involves one gene masking expression of another gene at a different locus, which is not the case here with one gene pair — eliminate (d).',
    eliminationTechniqueTe:
      'సంపూర్ణ ప్రాబల్యంలో F1 ప్రబల phenotype (ఎరుపు) ను చూపిస్తుంది, మధ్యస్థ (గులాబీ) కాదు — (a) తొలగించండి. Codominance లో రెండు తల్లిదండ్రుల లక్షణాలు ఏకకాలంలో కనిపిస్తాయి (ఎరుపు మరియు తెలుపు మచ్చలు), మిశ్రమ రంగు కాదు — (b) తొలగించండి. Epistasis లో ఒక gene మరొక gene వ్యక్తీకరణను మరుగుపరుస్తుంది — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-011',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'In humans, an individual with blood group AB shows both A and B antigens on the surface of red blood cells. This phenomenon is an example of:',
    textTe: 'మానవులలో, AB రక్తపు గ్రూపు ఉన్న వ్యక్తి ఎర్ర రక్త కణాల ఉపరితలంపై A మరియు B antigen లు రెండింటినీ చూపిస్తాడు. ఈ దృగ్విషయం దేనికి ఉదాహరణ?',
    options: [
      { id: 'a', text: 'Incomplete dominance', textTe: 'అసంపూర్ణ ప్రాబల్యం' },
      { id: 'b', text: 'Epistasis', textTe: 'ఎపిస్టాసిస్ (epistasis)' },
      { id: 'c', text: 'Pleiotropy', textTe: 'బహుప్రభావిత్వం (pleiotropy)' },
      { id: 'd', text: 'Codominance', textTe: 'సహ-ప్రాబల్యం (codominance)' },
    ],
    correctOptionId: 'd',
    explanation:
      'In blood group AB (genotype I^A I^B), both the I^A and I^B alleles are fully and independently expressed. The I^A allele produces N-acetylgalactosamine (A antigen) and the I^B allele produces galactose (B antigen) on RBC surfaces. This is codominance — neither allele is dominant over the other, and both produce their respective gene products in the heterozygote.',
    explanationTe:
      'AB రక్తపు గ్రూపులో (genotype I^A I^B), I^A మరియు I^B allele లు రెండూ పూర్తిగా మరియు స్వతంత్రంగా వ్యక్తమవుతాయి. I^A allele N-acetylgalactosamine (A antigen) ను, I^B allele galactose (B antigen) ను RBC ఉపరితలంపై ఉత్పత్తి చేస్తుంది. ఇది codominance — ఏ allele మరొకదానిపై ప్రబలం కాదు, హెటెరోజైగస్ లో రెండూ వాటి gene ఉత్పత్తులను తయారు చేస్తాయి.',
    eliminationTechnique:
      'Incomplete dominance would produce a blended intermediate phenotype (e.g., a "mixed" antigen), but both A and B antigens are distinctly present — eliminate (a). Epistasis involves interaction between two different genes, whereas A and B antigens are produced by alleles of the same gene I — eliminate (b). Pleiotropy means one gene affects multiple unrelated traits, which is not what is being demonstrated here — eliminate (c).',
    eliminationTechniqueTe:
      'అసంపూర్ణ ప్రాబల్యం మధ్యస్థ phenotype ను ఉత్పత్తి చేస్తుంది, కానీ ఇక్కడ A మరియు B antigen లు రెండూ విభిన్నంగా ఉన్నాయి — (a) తొలగించండి. Epistasis రెండు వేర్వేరు gene ల మధ్య పరస్పర చర్యను సూచిస్తుంది — (b) తొలగించండి. Pleiotropy ఒక gene బహుళ లక్షణాలను ప్రభావితం చేయడం — (c) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-012',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'A colour-blind man marries a woman with normal vision who is a carrier for colour blindness. What is the probability that their son will be colour-blind?',
    textTe: 'వర్ణాంధత్వం ఉన్న పురుషుడు, వర్ణాంధత్వానికి వాహకురాలైన సాధారణ దృష్టి గల స్త్రీని వివాహం చేసుకున్నాడు. వారి కుమారుడు వర్ణాంధుడిగా ఉండే సంభావ్యత ఎంత?',
    options: [
      { id: 'a', text: '0%', textTe: '0%' },
      { id: 'b', text: '25%', textTe: '25%' },
      { id: 'c', text: '100%', textTe: '100%' },
      { id: 'd', text: '50%', textTe: '50%' },
    ],
    correctOptionId: 'd',
    explanation:
      'Colour blindness is X-linked recessive. The father is X^c Y (colour-blind) and the mother is X^C X^c (carrier with normal vision). Sons receive their X chromosome from the mother only. Mother\'s X chromosomes: X^C and X^c. So sons are either X^C Y (normal vision, 50%) or X^c Y (colour-blind, 50%). Therefore, the probability of a colour-blind son is 50%.',
    explanationTe:
      'వర్ణాంధత్వం X-linked recessive. తండ్రి X^c Y (వర్ణాంధుడు), తల్లి X^C X^c (వాహకురాలు). కుమారులు తల్లి నుండి మాత్రమే X chromosome ను పొందుతారు. తల్లి X chromosomes: X^C మరియు X^c. కాబట్టి కుమారులు X^C Y (సాధారణ, 50%) లేదా X^c Y (వర్ణాంధుడు, 50%) అవుతారు. వర్ణాంధ కుమారుడి సంభావ్యత 50%.',
    eliminationTechnique:
      '0% would only be true if the mother were homozygous normal (X^C X^C), but she is a carrier (X^C X^c) — eliminate (a). 25% is the probability of colour blindness among ALL children (both sons and daughters), not specifically among sons — eliminate (b). 100% would require the mother to be colour-blind herself (X^c X^c), not just a carrier — eliminate (c).',
    eliminationTechniqueTe:
      'తల్లి homozygous normal (X^C X^C) అయితే మాత్రమే 0% సాధ్యం, కానీ ఆమె వాహకురాలు — (a) తొలగించండి. 25% అన్ని పిల్లలలో (కుమారులు మరియు కుమార్తెలు) వర్ణాంధత్వ సంభావ్యత, కేవలం కుమారులలో కాదు — (b) తొలగించండి. తల్లి స్వయంగా వర్ణాంధురాలు (X^c X^c) అయితే మాత్రమే 100% — (c) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-013',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'During transcription, the enzyme that catalyzes the synthesis of mRNA from a DNA template is:',
    textTe: 'Transcription సమయంలో, DNA template నుండి mRNA సంశ్లేషణను ఉత్ప్రేరణ చేసే enzyme:',
    options: [
      { id: 'a', text: 'DNA polymerase III', textTe: 'DNA polymerase III' },
      { id: 'b', text: 'RNA polymerase', textTe: 'RNA polymerase' },
      { id: 'c', text: 'DNA ligase', textTe: 'DNA ligase' },
      { id: 'd', text: 'Reverse transcriptase', textTe: 'Reverse transcriptase' },
    ],
    correctOptionId: 'b',
    explanation:
      'RNA polymerase is the enzyme responsible for transcription — the synthesis of mRNA using a DNA strand as a template. In prokaryotes, a single type of RNA polymerase transcribes all classes of RNA. In eukaryotes, RNA polymerase II specifically transcribes mRNA (protein-coding genes), while RNA Pol I transcribes rRNA and RNA Pol III transcribes tRNA and 5S rRNA.',
    explanationTe:
      'RNA polymerase transcription కు బాధ్యత వహించే enzyme — DNA strand ను template గా ఉపయోగించి mRNA సంశ్లేషణ. Prokaryotes లో ఒకే రకం RNA polymerase అన్ని రకాల RNA ను transcribe చేస్తుంది. Eukaryotes లో RNA polymerase II ప్రత్యేకంగా mRNA ను transcribe చేస్తుంది, RNA Pol I rRNA ను, RNA Pol III tRNA మరియు 5S rRNA ను transcribe చేస్తాయి.',
    eliminationTechnique:
      'DNA polymerase III synthesizes new DNA strands during DNA replication, not RNA during transcription — eliminate (a). DNA ligase joins Okazaki fragments during replication by sealing phosphodiester bonds, not involved in RNA synthesis — eliminate (c). Reverse transcriptase synthesizes DNA from an RNA template (found in retroviruses like HIV), which is the opposite of transcription — eliminate (d).',
    eliminationTechniqueTe:
      'DNA polymerase III DNA ప్రతిరూపణ సమయంలో కొత్త DNA strand లను సంశ్లేషిస్తుంది, RNA కాదు — (a) తొలగించండి. DNA ligase Okazaki fragments ను కలుపుతుంది, RNA సంశ్లేషణలో పాల్గొనదు — (c) తొలగించండి. Reverse transcriptase RNA template నుండి DNA ను సంశ్లేషిస్తుంది (retroviruses లో) — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-014',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'The codon AUG on mRNA is significant because it:',
    textTe: 'mRNA పై AUG codon ప్రాముఖ్యత ఏమిటంటే:',
    options: [
      {
        id: 'a',
        text: 'Codes for methionine and serves as the universal initiation (start) codon',
        textTe: 'Methionine ను సంకేతం చేస్తుంది మరియు సార్వత్రిక ప్రారంభ (start) codon గా పనిచేస్తుంది',
      },
      {
        id: 'b',
        text: 'Serves as a stop codon to terminate translation',
        textTe: 'Translation ను ముగించే stop codon గా పనిచేస్తుంది',
      },
      {
        id: 'c',
        text: 'Codes for tryptophan, the rarest amino acid in proteins',
        textTe: 'Proteins లో అరుదైన amino acid అయిన tryptophan ను సంకేతం చేస్తుంది',
      },
      {
        id: 'd',
        text: 'Is a nonsense codon that does not code for any amino acid',
        textTe: 'ఏ amino acid ను సంకేతించని nonsense codon',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'AUG is the universal start codon (initiation codon) that signals the beginning of translation. It codes for the amino acid methionine (Met). In prokaryotes, translation begins with N-formylmethionine (fMet). Every polypeptide chain starts with methionine at the N-terminus, though it may be removed post-translationally. AUG is unique because it serves a dual role as both a start signal and an amino acid codon.',
    explanationTe:
      'AUG సార్వత్రిక start codon (initiation codon), ఇది translation ప్రారంభాన్ని సూచిస్తుంది. ఇది amino acid methionine (Met) ను సంకేతం చేస్తుంది. Prokaryotes లో translation N-formylmethionine (fMet) తో ప్రారంభమవుతుంది. ప్రతి polypeptide గొలుసు N-terminus వద్ద methionine తో మొదలవుతుంది. AUG start signal మరియు amino acid codon రెండింటిగా ద్వంద్వ పాత్ర పోషిస్తుంది.',
    eliminationTechnique:
      'Stop codons are UAA (ochre), UAG (amber), and UGA (opal) — AUG is not among them — eliminate (b). The codon UGG codes for tryptophan, not AUG — eliminate (c). Nonsense codons are the three stop codons (UAA, UAG, UGA) that do not code for amino acids; AUG is a sense codon coding for methionine — eliminate (d).',
    eliminationTechniqueTe:
      'Stop codons UAA, UAG, UGA — AUG వాటిలో లేదు — (b) తొలగించండి. UGG codon tryptophan ను సంకేతం చేస్తుంది, AUG కాదు — (c) తొలగించండి. Nonsense codons అంటే మూడు stop codons (UAA, UAG, UGA); AUG methionine ను సంకేతించే sense codon — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-015',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'Mendel\'s Law of Independent Assortment is applicable when:',
    textTe: 'మెండెల్ స్వతంత్ర వర్గీకరణ నియమం ఎప్పుడు వర్తిస్తుంది?',
    options: [
      {
        id: 'a',
        text: 'Genes are located on the same chromosome and are closely linked',
        textTe: 'Gene లు ఒకే chromosome పై ఉండి, దగ్గరగా అనుసంధానించబడినప్పుడు',
      },
      {
        id: 'b',
        text: 'Only one pair of contrasting characters is being studied',
        textTe: 'ఒకే జత విరుద్ధ లక్షణాలు అధ్యయనం చేయబడినప్పుడు',
      },
      {
        id: 'c',
        text: 'Two or more pairs of genes are located on different (non-homologous) chromosomes',
        textTe: 'రెండు లేదా అంతకంటే ఎక్కువ gene జతలు వేర్వేరు (non-homologous) chromosomes పై ఉన్నప్పుడు',
      },
      {
        id: 'd',
        text: 'The traits under study show incomplete dominance',
        textTe: 'అధ్యయనంలో ఉన్న లక్షణాలు అసంపూర్ణ ప్రాబల్యం చూపినప్పుడు',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'The Law of Independent Assortment states that alleles of different genes segregate (assort) independently of each other during gamete formation, provided the genes are on different (non-homologous) chromosomes. This law applies to dihybrid and polyhybrid crosses and explains why the 9 : 3 : 3 : 1 ratio is obtained in F2. Linked genes on the same chromosome violate this law.',
    explanationTe:
      'స్వతంత్ర వర్గీకరణ నియమం ప్రకారం, వేర్వేరు gene ల allele లు gamete ఏర్పాటు సమయంలో ఒకదానికొకటి స్వతంత్రంగా విభజిస్తాయి, gene లు వేర్వేరు (non-homologous) chromosomes పై ఉంటే. ఈ నియమం ద్వంద్వ సంకర మరియు బహు సంకర సంకరణాలకు వర్తిస్తుంది మరియు F2 లో 9 : 3 : 3 : 1 నిష్పత్తిని వివరిస్తుంది. ఒకే chromosome పై అనుసంధానిత gene లు ఈ నియమాన్ని ఉల్లంఘిస్తాయి.',
    eliminationTechnique:
      'Closely linked genes on the same chromosome tend to be inherited together and do NOT assort independently — this directly violates the law — eliminate (a). When only one gene pair is studied, independent assortment cannot be observed — that scenario involves the Law of Segregation, not independent assortment — eliminate (b). Incomplete dominance affects how a single gene expresses its phenotype, not how different genes sort into gametes — eliminate (d).',
    eliminationTechniqueTe:
      'ఒకే chromosome పై దగ్గరగా అనుసంధానిత gene లు కలిసి వారసత్వంగా వస్తాయి, స్వతంత్రంగా వర్గీకరించబడవు — (a) తొలగించండి. ఒకే gene జత అధ్యయనం చేసినపుడు స్వతంత్ర వర్గీకరణ పరిశీలించలేము — అది విభజన నియమం — (b) తొలగించండి. అసంపూర్ణ ప్రాబల్యం ఒక gene phenotype వ్యక్తీకరణను ప్రభావితం చేస్తుంది, gene లు gametes లోకి ఎలా వెళ్తాయో కాదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-016',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'A man heterozygous for blood group A (I^A i) marries a woman heterozygous for blood group B (I^B i). What are the possible blood groups of their children?',
    textTe: 'A రక్తపు గ్రూపుకు హెటెరోజైగస్ పురుషుడు (I^A i) B రక్తపు గ్రూపుకు హెటెరోజైగస్ స్త్రీని (I^B i) వివాహం చేసుకున్నాడు. వారి పిల్లలకు సాధ్యమయ్యే రక్తపు గ్రూపులు ఏవి?',
    options: [
      { id: 'a', text: 'A and B only', textTe: 'A మరియు B మాత్రమే' },
      { id: 'b', text: 'A, B, and AB only', textTe: 'A, B మరియు AB మాత్రమే' },
      { id: 'c', text: 'AB and O only', textTe: 'AB మరియు O మాత్రమే' },
      {
        id: 'd',
        text: 'A, B, AB, and O (all four blood groups)',
        textTe: 'A, B, AB మరియు O (నాలుగు రక్తపు గ్రూపులు)',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'Father (I^A i) produces gametes I^A and i. Mother (I^B i) produces gametes I^B and i. Possible offspring genotypes: I^A I^B (AB), I^A i (A), I^B i (B), and ii (O). Therefore, all four ABO blood groups are possible in a 1 : 1 : 1 : 1 ratio. This cross beautifully demonstrates multiple allelism and codominance simultaneously.',
    explanationTe:
      'తండ్రి (I^A i) I^A మరియు i gametes ను ఉత్పత్తి చేస్తాడు. తల్లి (I^B i) I^B మరియు i gametes ను ఉత్పత్తి చేస్తుంది. సాధ్యమయ్యే సంతాన genotypes: I^A I^B (AB), I^A i (A), I^B i (B), మరియు ii (O). కాబట్టి నాలుగు ABO రక్తపు గ్రూపులు 1 : 1 : 1 : 1 నిష్పత్తిలో సాధ్యం. ఈ సంకరణం multiple allelism మరియు codominance రెండింటినీ ప్రదర్శిస్తుంది.',
    eliminationTechnique:
      'A and B only misses the ii (O) and I^A I^B (AB) combinations that form when recessive alleles from both parents combine or when both dominant alleles come together — eliminate (a). A, B, and AB only forgets that both parents carry the recessive i allele, so ii (blood group O) is possible — eliminate (b). AB and O only ignores the I^A i (A) and I^B i (B) combinations — eliminate (c).',
    eliminationTechniqueTe:
      'A మరియు B మాత్రమే అనేది ii (O) మరియు I^A I^B (AB) కలయికలను విస్మరిస్తుంది — (a) తొలగించండి. A, B, AB మాత్రమే అనేది రెండు తల్లిదండ్రుల i allele ల కలయిక ii (O) ను మరచిపోతుంది — (b) తొలగించండి. AB మరియు O మాత్రమే అనేది I^A i (A) మరియు I^B i (B) కలయికలను విస్మరిస్తుంది — (c) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-017',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'In a pedigree chart, two phenotypically normal parents produce an affected child. This inheritance pattern is most characteristic of:',
    textTe: 'Pedigree chart లో, phenotypically సాధారణ తల్లిదండ్రులకు ప్రభావిత బిడ్డ పుట్టింది. ఈ వారసత్వ విధానం ఏ రకానికి చెందినది?',
    options: [
      {
        id: 'a',
        text: 'Autosomal dominant inheritance',
        textTe: 'Autosomal ప్రబల వారసత్వం',
      },
      {
        id: 'b',
        text: 'Autosomal recessive inheritance',
        textTe: 'Autosomal అప్రబల వారసత్వం',
      },
      {
        id: 'c',
        text: 'X-linked dominant inheritance',
        textTe: 'X-linked ప్రబల వారసత్వం',
      },
      {
        id: 'd',
        text: 'Y-linked (holandric) inheritance',
        textTe: 'Y-linked (holandric) వారసత్వం',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'When both parents appear phenotypically normal but produce an affected child, both parents must be heterozygous carriers (Aa) for an autosomal recessive trait. The affected child is homozygous recessive (aa), having received one recessive allele from each carrier parent. The probability is: Aa × Aa = 1/4 AA : 2/4 Aa : 1/4 aa, so 25% of children will be affected.',
    explanationTe:
      'తల్లిదండ్రులు ఇద్దరూ phenotypically సాధారణంగా ఉండి ప్రభావిత బిడ్డను కనడం autosomal recessive వారసత్వాన్ని సూచిస్తుంది. తల్లిదండ్రులు ఇద్దరూ హెటెరోజైగస్ వాహకులు (Aa). ప్రభావిత బిడ్డ homozygous recessive (aa), ప్రతి వాహక తల్లిదండ్రి నుండి ఒక recessive allele ను పొందింది. Aa × Aa = 1/4 AA : 2/4 Aa : 1/4 aa, కాబట్టి 25% పిల్లలు ప్రభావితులవుతారు.',
    eliminationTechnique:
      'In autosomal dominant inheritance, at least one parent must show the trait to pass it on — unaffected parents cannot produce affected offspring — eliminate (a). In X-linked dominant, an affected child must inherit the dominant allele from at least one affected parent — eliminate (c). Y-linked traits pass exclusively from father to ALL sons, making it impossible for an unaffected father to have affected sons — eliminate (d).',
    eliminationTechniqueTe:
      'Autosomal dominant వారసత్వంలో, కనీసం ఒక తల్లిదండ్రి లక్షణాన్ని చూపించాలి — (a) తొలగించండి. X-linked dominant లో ప్రభావిత బిడ్డకు కనీసం ఒక ప్రభావిత తల్లిదండ్రి ఉండాలి — (c) తొలగించండి. Y-linked లక్షణాలు తండ్రి నుండి అన్ని కుమారులకు వస్తాయి — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  {
    id: 'zoo-gen-018',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'Sickle cell anemia is caused by a point mutation in the beta-globin gene where the codon GAG is changed to GUG. This results in the substitution of:',
    textTe: 'Sickle cell anemia, beta-globin gene లో GAG codon GUG గా మారే point mutation వల్ల కలుగుతుంది. దీని ఫలితంగా ఏ amino acid ప్రతిక్షేపణ జరుగుతుంది?',
    options: [
      {
        id: 'a',
        text: 'Glutamic acid by valine at position 6 of the beta chain',
        textTe: 'Beta chain యొక్క 6వ స్థానంలో glutamic acid బదులుగా valine',
      },
      {
        id: 'b',
        text: 'Valine by glutamic acid at position 6 of the beta chain',
        textTe: 'Beta chain యొక్క 6వ స్థానంలో valine బదులుగా glutamic acid',
      },
      {
        id: 'c',
        text: 'Glutamic acid by lysine at position 6 of the beta chain',
        textTe: 'Beta chain యొక్క 6వ స్థానంలో glutamic acid బదులుగా lysine',
      },
      {
        id: 'd',
        text: 'Alanine by valine at position 6 of the beta chain',
        textTe: 'Beta chain యొక్క 6వ స్థానంలో alanine బదులుగా valine',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'In sickle cell anemia, a single base substitution (A to T in DNA template strand, leading to A to U change in mRNA) changes the sixth codon from GAG (glutamic acid) to GUG (valine) in the beta-globin chain of haemoglobin. This single amino acid change from the hydrophilic glutamic acid to the hydrophobic valine causes HbS molecules to polymerize under low oxygen, distorting RBCs into the characteristic sickle shape.',
    explanationTe:
      'Sickle cell anemia లో, ఒక base ప్రతిక్షేపణ (DNA template strand లో A నుండి T, mRNA లో A నుండి U) haemoglobin beta-globin chain లో ఆరవ codon ను GAG (glutamic acid) నుండి GUG (valine) గా మారుస్తుంది. ఈ ఒక్క amino acid మార్పు — hydrophilic glutamic acid నుండి hydrophobic valine — తక్కువ ఆక్సిజన్ పరిస్థితులలో HbS అణువులను polymerize చేసి, RBC లను కొడవలి ఆకారంలోకి మారుస్తుంది.',
    eliminationTechnique:
      'Valine by glutamic acid reverses the actual substitution direction — the original amino acid (glutamic acid) is replaced by valine, not the other way — eliminate (b). GAG codes for glutamic acid and GUG codes for valine; lysine is coded by AAA or AAG, not involved here — eliminate (c). Neither the original codon GAG nor the mutant GUG codes for alanine (GCU/GCC/GCA/GCG) — eliminate (d).',
    eliminationTechniqueTe:
      'Valine బదులుగా glutamic acid అనేది అసలు ప్రతిక్షేపణ దిశకు వ్యతిరేకం — (b) తొలగించండి. GAG glutamic acid ను, GUG valine ను సంకేతం చేస్తుంది; lysine AAA లేదా AAG ద్వారా సంకేతించబడుతుంది — (c) తొలగించండి. GAG లేదా GUG ఏదీ alanine ను సంకేతించదు — (d) తొలగించండి.',
    difficulty: 'medium',
  },

  // ─── HARD (7 questions) ────────────────────────────────────────────

  {
    id: 'zoo-gen-019',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'A plant heterozygous for two independently assorting gene pairs (RrYy) is test crossed with a double homozygous recessive plant (rryy). The expected phenotypic ratio in the offspring is:',
    textTe: 'రెండు స్వతంత్రంగా వర్గీకరించబడే gene జతలకు హెటెరోజైగస్ మొక్క (RrYy) ద్వంద్వ homozygous recessive మొక్కతో (rryy) test cross చేయబడింది. సంతానంలో ఆశించిన phenotypic నిష్పత్తి:',
    options: [
      { id: 'a', text: '9 : 3 : 3 : 1', textTe: '9 : 3 : 3 : 1' },
      { id: 'b', text: '3 : 1', textTe: '3 : 1' },
      { id: 'c', text: '1 : 1 : 1 : 1', textTe: '1 : 1 : 1 : 1' },
      { id: 'd', text: '1 : 2 : 1', textTe: '1 : 2 : 1' },
    ],
    correctOptionId: 'c',
    explanation:
      'In a dihybrid test cross (RrYy × rryy), the heterozygous parent produces four types of gametes in equal proportions: RY, Ry, rY, and ry (each 25%). The homozygous recessive parent produces only one type of gamete: ry. The resulting offspring are RrYy (round yellow), Rryy (round green), rrYy (wrinkled yellow), and rryy (wrinkled green) in a 1 : 1 : 1 : 1 ratio. A test cross is used to determine the genotype of the dominant phenotype organism.',
    explanationTe:
      'ద్వంద్వ సంకర test cross (RrYy × rryy) లో, హెటెరోజైగస్ తల్లిదండ్రి సమాన నిష్పత్తులలో నాలుగు రకాల gametes ను ఉత్పత్తి చేస్తుంది: RY, Ry, rY, ry (ప్రతిదీ 25%). Homozygous recessive తల్లిదండ్రి ry gamete మాత్రమే ఉత్పత్తి చేస్తుంది. సంతానం: RrYy (గుండ్రని పసుపు), Rryy (గుండ్రని ఆకుపచ్చ), rrYy (ముడత పసుపు), rryy (ముడత ఆకుపచ్చ) = 1 : 1 : 1 : 1 నిష్పత్తి. ప్రబల phenotype జీవి genotype ను నిర్ణయించడానికి test cross ఉపయోగిస్తారు.',
    eliminationTechnique:
      '9 : 3 : 3 : 1 is the F2 dihybrid ratio from RrYy × RrYy, not from a test cross where one parent is rryy — eliminate (a). 3 : 1 is the monohybrid cross ratio for one gene; a dihybrid test cross involves two genes producing four phenotypic classes — eliminate (b). 1 : 2 : 1 is the phenotypic ratio from incomplete dominance in a monohybrid cross, not applicable to a dihybrid test cross — eliminate (d).',
    eliminationTechniqueTe:
      '9 : 3 : 3 : 1 అనేది RrYy × RrYy F2 నిష్పత్తి, test cross కాదు — (a) తొలగించండి. 3 : 1 ఒక gene కోసం ఏక సంకర నిష్పత్తి; ద్వంద్వ test cross లో నాలుగు phenotypic తరగతులు ఉంటాయి — (b) తొలగించండి. 1 : 2 : 1 అసంపూర్ణ ప్రాబల్యం ఏక సంకర నిష్పత్తి — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'zoo-gen-020',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'A mother with blood group O (genotype ii) and a father with blood group AB (genotype I^A I^B) have children. Which of the following correctly describes the possible blood groups of their offspring?',
    textTe: 'O రక్తపు గ్రూపు (genotype ii) ఉన్న తల్లి మరియు AB రక్తపు గ్రూపు (genotype I^A I^B) ఉన్న తండ్రికి పిల్లలు ఉన్నారు. వారి సంతానం యొక్క సాధ్యమయ్యే రక్తపు గ్రూపులను సరిగ్గా వర్ణించేది ఏది?',
    options: [
      {
        id: 'a',
        text: 'A, B, AB, and O — all four blood groups are possible',
        textTe: 'A, B, AB మరియు O — నాలుగు రక్తపు గ్రూపులు సాధ్యం',
      },
      {
        id: 'b',
        text: 'AB and O only',
        textTe: 'AB మరియు O మాత్రమే',
      },
      {
        id: 'c',
        text: 'A and B only — neither AB nor O can occur',
        textTe: 'A మరియు B మాత్రమే — AB లేదా O సాధ్యం కాదు',
      },
      {
        id: 'd',
        text: 'A, B, and AB only',
        textTe: 'A, B మరియు AB మాత్రమే',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'Mother (ii) can only contribute the i allele. Father (I^A I^B) contributes either I^A or I^B. Possible offspring genotypes are I^A i (blood group A) and I^B i (blood group B) — each with 50% probability. Blood group AB (I^A I^B) is impossible because the mother has no I^A or I^B allele to contribute. Blood group O (ii) is impossible because the father always contributes either I^A or I^B, never i.',
    explanationTe:
      'తల్లి (ii) i allele మాత్రమే ఇవ్వగలదు. తండ్రి (I^A I^B) I^A లేదా I^B ఇస్తాడు. సాధ్యమయ్యే సంతానం: I^A i (A రక్తపు గ్రూపు) మరియు I^B i (B రక్తపు గ్రూపు) — ప్రతిదీ 50% సంభావ్యత. AB రక్తపు గ్రూపు (I^A I^B) సాధ్యం కాదు ఎందుకంటే తల్లి వద్ద I^A లేదా I^B allele లేదు. O రక్తపు గ్రూపు (ii) సాధ్యం కాదు ఎందుకంటే తండ్రి ఎల్లప్పుడూ I^A లేదా I^B ను ఇస్తాడు, i ను ఎప్పుడూ ఇవ్వడు.',
    eliminationTechnique:
      'All four blood groups would require both parents to carry the i allele AND both I^A and I^B alleles, but the mother has only i and the father has no i — eliminate (a). AB requires I^A I^B genotype, needing I^A or I^B from the mother, which is impossible (she is ii); O requires ii, needing i from the father, also impossible (he is I^A I^B) — eliminate (b). AB is impossible for the same reason — the mother cannot contribute I^A or I^B — eliminate (d).',
    eliminationTechniqueTe:
      'నాలుగు రక్తపు గ్రూపులు రావాలంటే ఇద్దరు తల్లిదండ్రులు i మరియు I^A, I^B allele లు కలిగి ఉండాలి — (a) తొలగించండి. AB కు I^A I^B genotype అవసరం, తల్లి నుండి I^A లేదా I^B రావాలి — అసాధ్యం; O కు తండ్రి నుండి i రావాలి — అసాధ్యం — (b) తొలగించండి. AB అదే కారణం వల్ల అసాధ్యం — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'zoo-gen-021',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'A carrier woman for haemophilia (X^H X^h) marries a normal man (X^H Y). What is the probability of haemophilia among ALL their children (sons and daughters combined)?',
    textTe: 'Haemophilia వాహకురాలు (X^H X^h) సాధారణ పురుషుడిని (X^H Y) వివాహం చేసుకుంది. వారి మొత్తం పిల్లలలో (కుమారులు మరియు కుమార్తెలు కలిపి) haemophilia సంభావ్యత ఎంత?',
    options: [
      { id: 'a', text: '50%', textTe: '50%' },
      { id: 'b', text: '25%', textTe: '25%' },
      { id: 'c', text: '75%', textTe: '75%' },
      { id: 'd', text: '12.5%', textTe: '12.5%' },
    ],
    correctOptionId: 'b',
    explanation:
      'Cross: X^H X^h (carrier female) × X^H Y (normal male). Offspring: Daughters — X^H X^H (normal) and X^H X^h (carrier, phenotypically normal). Sons — X^H Y (normal) and X^h Y (haemophilic). Only X^h Y sons are affected. Out of 4 possible offspring, only 1 (X^h Y) is haemophilic = 1/4 = 25%. Note: 50% of sons will be haemophilic, but among ALL children the probability is 25%.',
    explanationTe:
      'సంకరణం: X^H X^h (వాహక స్త్రీ) × X^H Y (సాధారణ పురుషుడు). సంతానం: కుమార్తెలు — X^H X^H (సాధారణ), X^H X^h (వాహకురాలు). కుమారులు — X^H Y (సాధారణ), X^h Y (haemophilic). 4 సాధ్యమైన సంతానంలో 1 (X^h Y) మాత్రమే haemophilic = 1/4 = 25%. గమనిక: కుమారులలో 50% haemophilic అవుతారు, కానీ మొత్తం పిల్లలలో 25%.',
    eliminationTechnique:
      '50% is the probability among sons specifically, not among ALL children — the question asks about all children including daughters, who cannot be haemophilic in this cross — eliminate (a). 75% is far too high; it would require most children to be affected, which is impossible when the father is normal and only the mother is a carrier — eliminate (c). 12.5% does not correspond to any standard Mendelian ratio from this cross — eliminate (d).',
    eliminationTechniqueTe:
      '50% కేవలం కుమారులలో సంభావ్యత, మొత్తం పిల్లలలో కాదు — ప్రశ్న అన్ని పిల్లల గురించి అడుగుతోంది — (a) తొలగించండి. 75% చాలా ఎక్కువ; తండ్రి సాధారణుడు, తల్లి వాహకురాలు మాత్రమే — (c) తొలగించండి. 12.5% ఈ సంకరణం నుండి ఏ ప్రామాణిక Mendelian నిష్పత్తికి అనుగుణంగా లేదు — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'zoo-gen-022',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'In a pedigree, an affected grandfather transmits a trait through his phenotypically normal daughter to his grandson, but never directly to his son. The trait is never transmitted from father to son. This pattern of inheritance is:',
    textTe: 'Pedigree లో, ప్రభావిత తాత ఒక లక్షణాన్ని తన phenotypically సాధారణ కుమార్తె ద్వారా మనవడికి అందిస్తాడు, కానీ తన కుమారుడికి నేరుగా ఇవ్వడు. తండ్రి నుండి కుమారుడికి ఎప్పుడూ అందని ఈ వారసత్వ విధానం:',
    options: [
      {
        id: 'a',
        text: 'X-linked recessive inheritance',
        textTe: 'X-linked recessive వారసత్వం',
      },
      {
        id: 'b',
        text: 'Autosomal dominant inheritance',
        textTe: 'Autosomal ప్రబల వారసత్వం',
      },
      {
        id: 'c',
        text: 'Autosomal recessive inheritance',
        textTe: 'Autosomal అప్రబల వారసత్వం',
      },
      {
        id: 'd',
        text: 'Y-linked (holandric) inheritance',
        textTe: 'Y-linked (holandric) వారసత్వం',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'This is the classic crisscross inheritance pattern of X-linked recessive traits. An affected male (X^a Y) passes his X chromosome to all daughters (who become carriers X^A X^a, phenotypically normal). These carrier daughters can then pass X^a to their sons (X^a Y, affected). Since fathers pass their Y chromosome (not X) to sons, the trait never goes directly from father to son. Examples include haemophilia and colour blindness.',
    explanationTe:
      'ఇది X-linked recessive లక్షణాల యొక్క క్రిస్-క్రాస్ వారసత్వ విధానం. ప్రభావిత పురుషుడు (X^a Y) తన X chromosome ను అన్ని కుమార్తెలకు ఇస్తాడు (వారు వాహకురాళ్లు X^A X^a అవుతారు). ఈ వాహక కుమార్తెలు X^a ను తమ కుమారులకు (X^a Y, ప్రభావిత) ఇవ్వగలరు. తండ్రులు కుమారులకు Y chromosome ను (X కాదు) ఇస్తారు కాబట్టి, లక్షణం తండ్రి నుండి కుమారుడికి నేరుగా వెళ్లదు. Haemophilia మరియు వర్ణాంధత్వం ఉదాహరణలు.',
    eliminationTechnique:
      'Autosomal dominant traits would affect the daughter herself (not just be a carrier) if she inherited the allele, and can pass from father to son — eliminate (b). Autosomal recessive traits can pass from father to son through carrier parents and do not show the distinctive "never father-to-son" pattern described — eliminate (c). Y-linked traits ALWAYS pass from father to ALL sons, which is the exact opposite of the described pattern — eliminate (d).',
    eliminationTechniqueTe:
      'Autosomal dominant లో కుమార్తె స్వయంగా ప్రభావితమవుతుంది (కేవలం వాహకురాలు కాదు), మరియు తండ్రి నుండి కుమారుడికి అందగలదు — (b) తొలగించండి. Autosomal recessive తండ్రి నుండి కుమారుడికి అందగలదు మరియు "తండ్రి-కుమారుడు ఎప్పుడూ కాదు" నమూనా చూపదు — (c) తొలగించండి. Y-linked లక్షణాలు ఎల్లప్పుడూ తండ్రి నుండి అన్ని కుమారులకు అందుతాయి — వర్ణించిన దానికి పూర్తి వ్యతిరేకం — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'zoo-gen-023',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'A genetic disorder in humans caused by translocation of a portion of chromosome 21 to chromosome 14 results in:',
    textTe: 'మానవులలో chromosome 21 భాగం chromosome 14 కు translocation చెందడం వల్ల కలిగే జన్యు వ్యాధి:',
    options: [
      {
        id: 'a',
        text: 'Edward syndrome (Trisomy 18)',
        textTe: 'Edward syndrome (Trisomy 18)',
      },
      {
        id: 'b',
        text: 'Turner syndrome (45, X0)',
        textTe: 'Turner syndrome (45, X0)',
      },
      {
        id: 'c',
        text: 'Translocation Down syndrome',
        textTe: 'Translocation Down syndrome',
      },
      {
        id: 'd',
        text: 'Patau syndrome (Trisomy 13)',
        textTe: 'Patau syndrome (Trisomy 13)',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'Translocation Down syndrome occurs when a portion of chromosome 21 becomes attached (translocated) to chromosome 14, forming a Robertsonian translocation t(14;21). This accounts for approximately 4% of all Down syndrome cases. Unlike the more common trisomy 21 (which arises from meiotic nondisjunction), translocation Down syndrome can be inherited if a parent carries the balanced translocation. The total chromosome number may be 46, but the individual effectively has three copies of the critical region of chromosome 21.',
    explanationTe:
      'Translocation Down syndrome, chromosome 21 భాగం chromosome 14 కు అతుక్కుని (translocated) Robertsonian translocation t(14;21) ఏర్పడినపుడు కలుగుతుంది. ఇది మొత్తం Down syndrome కేసులలో సుమారు 4%. సాధారణ trisomy 21 (meiotic nondisjunction వల్ల) కంటే భిన్నంగా, ఈ రకం తల్లిదండ్రి balanced translocation కలిగి ఉంటే వారసత్వంగా రావచ్చు. మొత్తం chromosome సంఖ్య 46 కావచ్చు, కానీ chromosome 21 critical region యొక్క మూడు copies ఉంటాయి.',
    eliminationTechnique:
      'Edward syndrome is trisomy 18, involving an extra copy of chromosome 18, not a translocation of chromosome 21 — eliminate (a). Turner syndrome (45, X0) is a sex chromosome monosomy disorder, completely unrelated to autosomal translocation — eliminate (b). Patau syndrome is trisomy 13, involving chromosome 13, not chromosome 21 — eliminate (d).',
    eliminationTechniqueTe:
      'Edward syndrome trisomy 18, chromosome 18 యొక్క అదనపు copy — chromosome 21 translocation కాదు — (a) తొలగించండి. Turner syndrome (45, X0) లింగ chromosome monosomy — autosomal translocation తో సంబంధం లేదు — (b) తొలగించండి. Patau syndrome trisomy 13, chromosome 13 — chromosome 21 కాదు — (d) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'zoo-gen-024',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'During DNA replication, Okazaki fragments are synthesized on the:',
    textTe: 'DNA ప్రతిరూపణ సమయంలో, Okazaki fragments ఎక్కడ సంశ్లేషించబడతాయి?',
    options: [
      {
        id: 'a',
        text: 'Leading strand, continuously in the 5\' → 3\' direction',
        textTe: 'Leading strand పై, 5\' → 3\' దిశలో నిరంతరంగా',
      },
      {
        id: 'b',
        text: 'Leading strand, discontinuously in the 3\' → 5\' direction',
        textTe: 'Leading strand పై, 3\' → 5\' దిశలో అసంతత (discontinuous) గా',
      },
      {
        id: 'c',
        text: 'Lagging strand, discontinuously in the 3\' → 5\' direction',
        textTe: 'Lagging strand పై, 3\' → 5\' దిశలో అసంతత (discontinuous) గా',
      },
      {
        id: 'd',
        text: 'Lagging strand, discontinuously in the 5\' → 3\' direction',
        textTe: 'Lagging strand పై, 5\' → 3\' దిశలో అసంతత (discontinuous) గా',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'Okazaki fragments are short DNA segments (1000-2000 nucleotides in prokaryotes, 100-200 in eukaryotes) synthesized discontinuously on the lagging strand. DNA polymerase can ONLY synthesize DNA in the 5\' to 3\' direction. On the lagging strand, because the template runs 5\' to 3\' (same as fork movement), DNA synthesis proceeds in short fragments away from the replication fork. Each fragment requires a separate RNA primer, and the fragments are later joined by DNA ligase after RNA primers are replaced with DNA by DNA polymerase I.',
    explanationTe:
      'Okazaki fragments lagging strand పై అసంతత (discontinuous) గా సంశ్లేషించబడే చిన్న DNA విభాగాలు (prokaryotes లో 1000-2000 nucleotides, eukaryotes లో 100-200). DNA polymerase 5\' నుండి 3\' దిశలో మాత్రమే DNA ను సంశ్లేషించగలదు. Lagging strand లో, template 5\' నుండి 3\' దిశలో ఉన్నందున, DNA సంశ్లేషణ replication fork కు దూరంగా చిన్న fragments లో జరుగుతుంది. ప్రతి fragment కు ప్రత్యేక RNA primer అవసరం, తర్వాత DNA ligase fragments ను కలుపుతుంది.',
    eliminationTechnique:
      'The leading strand is synthesized continuously (not in fragments), so Okazaki fragments cannot form there — eliminate (a) and (b). DNA polymerase NEVER synthesizes in the 3\' → 5\' direction; all DNA synthesis proceeds exclusively 5\' → 3\' — eliminate (b) and (c). Only option (d) correctly identifies both the lagging strand and the obligatory 5\' → 3\' synthesis direction.',
    eliminationTechniqueTe:
      'Leading strand నిరంతరంగా (fragments లో కాదు) సంశ్లేషించబడుతుంది, కాబట్టి Okazaki fragments అక్కడ ఏర్పడవు — (a) మరియు (b) తొలగించండి. DNA polymerase 3\' → 5\' దిశలో ఎప్పుడూ సంశ్లేషించదు; DNA సంశ్లేషణ ఎల్లప్పుడూ 5\' → 3\' దిశలో మాత్రమే — (b) మరియు (c) తొలగించండి.',
    difficulty: 'hard',
  },

  {
    id: 'zoo-gen-025',
    chapterId: 'zoology-genetics',
    subjectId: 'zoology',
    text: 'According to the Wobble Hypothesis proposed by Francis Crick, the non-standard base pairing occurs at which position of the codon-anticodon interaction?',
    textTe: 'Francis Crick ప్రతిపాదించిన Wobble Hypothesis ప్రకారం, codon-anticodon పరస్పర చర్యలో ప్రామాణికం కాని base pairing ఏ స్థానంలో జరుగుతుంది?',
    options: [
      {
        id: 'a',
        text: 'Third position (3\' end) of the codon, pairing with the first position (5\' end) of the anticodon',
        textTe: 'Codon యొక్క మూడవ స్థానం (3\' చివర), anticodon యొక్క మొదటి స్థానంతో (5\' చివర) జత కట్టడం',
      },
      {
        id: 'b',
        text: 'First position (5\' end) of the codon',
        textTe: 'Codon యొక్క మొదటి స్థానం (5\' చివర)',
      },
      {
        id: 'c',
        text: 'Second position (middle) of the codon',
        textTe: 'Codon యొక్క రెండవ స్థానం (మధ్య)',
      },
      {
        id: 'd',
        text: 'All three positions of the codon equally',
        textTe: 'Codon యొక్క మూడు స్థానాలలో సమానంగా',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'The Wobble Hypothesis (proposed by Francis Crick in 1966) states that the base pairing between the third position (3\' end) of the codon and the first position (5\' end) of the anticodon is less stringent than standard Watson-Crick base pairing. This flexibility ("wobble") allows non-standard pairs such as G-U and I (inosine)-U/C/A. As a result, a single tRNA can recognize more than one codon, which explains the degeneracy of the genetic code — why 61 sense codons can be read by fewer than 61 tRNAs.',
    explanationTe:
      'Wobble Hypothesis (Francis Crick, 1966) ప్రకారం, codon యొక్క మూడవ స్థానం (3\' చివర) మరియు anticodon యొక్క మొదటి స్థానం (5\' చివర) మధ్య base pairing ప్రామాణిక Watson-Crick base pairing కంటే తక్కువ కఠినంగా ఉంటుంది. ఈ flexibility ("wobble") G-U మరియు I (inosine)-U/C/A వంటి ప్రామాణికం కాని జతలను అనుమతిస్తుంది. ఫలితంగా, ఒక tRNA ఒకటి కంటే ఎక్కువ codon లను గుర్తించగలదు, ఇది జన్యు సంకేత degeneracy ను వివరిస్తుంది — 61 sense codons ను 61 కంటే తక్కువ tRNA లు చదవగలవు.',
    eliminationTechnique:
      'The first position (5\' end) of the codon pairs with the third position of the anticodon through strict Watson-Crick pairing — no wobble occurs here — eliminate (b). The second position is the most critical for amino acid specificity and has the strictest base pairing of all three positions — eliminate (c). If all three positions had equal wobble flexibility, the genetic code would be highly ambiguous and error-prone, which would be lethal — eliminate (d).',
    eliminationTechniqueTe:
      'Codon మొదటి స్థానం (5\' చివర) anticodon మూడవ స్థానంతో కఠినమైన Watson-Crick pairing చేస్తుంది — ఇక్కడ wobble లేదు — (b) తొలగించండి. రెండవ స్థానం amino acid specificity కి అత్యంత ముఖ్యమైనది, అత్యంత కఠినమైన base pairing కలిగి ఉంటుంది — (c) తొలగించండి. మూడు స్థానాలలో సమాన wobble ఉంటే, జన్యు సంకేతం అస్పష్టంగా మరియు తప్పు-ప్రవణంగా ఉంటుంది — (d) తొలగించండి.',
    difficulty: 'hard',
  },
];
