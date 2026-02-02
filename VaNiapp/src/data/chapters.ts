import { Chapter, NeetSubjectId } from '../types';

export interface ChapterMeta extends Chapter {
  subjectId: NeetSubjectId;
}

export const NEET_CHAPTERS: ChapterMeta[] = [
  // Physics
  {
    id: 'physics-laws-of-motion',
    name: 'Laws of Motion',
    nameTe: 'చలన నియమాలు',
    subjectId: 'physics',
    questionCount: 25,
    timeMinutes: 30,
  },
  {
    id: 'physics-thermodynamics',
    name: 'Thermodynamics',
    nameTe: 'ఉష్ణగతిశాస్త్రం',
    subjectId: 'physics',
    questionCount: 25,
    timeMinutes: 30,
  },
  // Chemistry
  {
    id: 'chemistry-chemical-bonding',
    name: 'Chemical Bonding',
    nameTe: 'రసాయన బంధం',
    subjectId: 'chemistry',
    questionCount: 25,
    timeMinutes: 30,
  },
  {
    id: 'chemistry-hydrocarbons',
    name: 'Hydrocarbons',
    nameTe: 'హైడ్రోకార్బన్లు',
    subjectId: 'chemistry',
    questionCount: 25,
    timeMinutes: 30,
  },
  // Botany
  {
    id: 'botany-cell-biology',
    name: 'Cell Biology',
    nameTe: 'కణ జీవశాస్త్రం',
    subjectId: 'botany',
    questionCount: 25,
    timeMinutes: 30,
  },
  {
    id: 'botany-plant-anatomy',
    name: 'Plant Anatomy',
    nameTe: 'మొక్కల శరీర నిర్మాణ శాస్త్రం',
    subjectId: 'botany',
    questionCount: 25,
    timeMinutes: 30,
  },
  // Zoology
  {
    id: 'zoology-human-physiology',
    name: 'Human Physiology',
    nameTe: 'మానవ శరీర ధర్మశాస్త్రం',
    subjectId: 'zoology',
    questionCount: 25,
    timeMinutes: 30,
  },
  {
    id: 'zoology-genetics',
    name: 'Genetics',
    nameTe: 'జన్యుశాస్త్రం',
    subjectId: 'zoology',
    questionCount: 25,
    timeMinutes: 30,
  },
];

export function getChaptersBySubject(subjectId: NeetSubjectId): ChapterMeta[] {
  return NEET_CHAPTERS.filter((c) => c.subjectId === subjectId);
}

export function getChapterById(chapterId: string): ChapterMeta | undefined {
  return NEET_CHAPTERS.find((c) => c.id === chapterId);
}
