export type AppTab = 'manual' | 'flashcards' | 'quiz' | 'signals-trainer';

export interface StudyUnit {
  id: string;
  number: number;
  title: string;
  description: string;
  annex?: string; // e.g. "Annex 1" or "Annex 2"
  topic?: 'annex1' | 'annex2';
  keyPoints: Array<{
    term: string;
    definition: string;
    ruleRef?: string;
  }>;
  detailedItems: Array<{
    title: string;
    text: string;
    ruleRef?: string;
    list?: string[];
  }>;
}

export interface Flashcard {
  id: string;
  unitId: string;
  front: string;
  back: string;
  hint?: string;
  ruleRef?: string;
  annex?: string;
  topic?: 'annex1' | 'annex2';
}

export interface QuizQuestion {
  id: string;
  unitId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  ruleRef?: string;
  annex?: string;
  topic?: 'annex1' | 'annex2';
}

export interface UserStats {
  starredFlashcards: string[]; // flashcard.id
  masteredFlashcards: string[]; // flashcard.id
  quizHighScores: Record<string, number>; // quizCategory: score
  recentQuizAttempts: Array<{
    date: string;
    score: number;
    total: number;
    category: string;
  }>;
}
