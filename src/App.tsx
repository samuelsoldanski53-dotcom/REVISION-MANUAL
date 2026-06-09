import React, { useState, useEffect } from 'react';
import { AppTab, UserStats } from './types';
import InteractiveManual from './components/InteractiveManual';
import FlashcardDeck from './components/FlashcardDeck';
import QuizSession from './components/QuizSession';
import SignalsTrainer from './components/SignalsTrainer';
import { BookOpen, Star, HelpCircle, Eye, Compass, GraduationCap, Clock, Award, ShieldAlert } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'rules_air_study_stats_v1';

const INITIAL_STATS: UserStats = {
  starredFlashcards: [],
  masteredFlashcards: [],
  quizHighScores: {},
  recentQuizAttempts: []
};

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('manual');
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);

  // Hydrate stats on startup
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setStats(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load study stats from localStorage', e);
    }
  }, []);

  // Update statistics helper
  const handleUpdateStats = (newStats: UserStats) => {
    setStats(newStats);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newStats));
    } catch (e) {
      console.error('Failed to save study stats to localStorage', e);
    }
  };

  const handleResetSession = () => {
    if (window.confirm('Do you want to clear your study progress, saved stars, and practice scores?')) {
      handleUpdateStats(INITIAL_STATS);
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] font-sans text-slate-200 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Professional Header Navigation */}
      <header className="sticky top-0 bg-[#0d1321]/80 border-b border-slate-800/60 z-50 backdrop-blur-md">
        <div id="header-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-[#080c14] text-indigo-400 rounded-xl shadow-md flex items-center justify-center border border-slate-800/80">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-display font-bold text-lg md:text-xl text-slate-50 flex items-center justify-center md:justify-start gap-2 tracking-tight">
                Rules & Licensing
              </h1>
              <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                ICAO Annex 1 & 2 Study & Revision Companion
              </span>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <nav className="flex items-center bg-[#080c14] p-1.5 rounded-2xl border border-slate-800/80 w-full md:w-auto overflow-x-auto shrink-0 md:justify-center">
            <button
              onClick={() => setActiveTab('manual')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-display font-medium transition-all ${
                activeTab === 'manual'
                  ? 'bg-slate-800/80 text-white shadow-xs font-medium border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              Manual
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-display font-medium transition-all ${
                activeTab === 'flashcards'
                  ? 'bg-slate-800/80 text-white shadow-xs font-medium border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Star className="w-3.5 h-3.5 text-amber-400" />
              Flashcards
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-display font-medium transition-all ${
                activeTab === 'quiz'
                  ? 'bg-slate-800/80 text-white shadow-xs font-medium border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              Practice Quiz
            </button>
            <button
              onClick={() => setActiveTab('signals-trainer')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-display font-medium transition-all ${
                activeTab === 'signals-trainer'
                  ? 'bg-slate-800/80 text-white shadow-xs font-medium border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              Signals Drill
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container Stage */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Statistics and Quick Dashboard Stats Row */}
        <section id="stats-dashboard" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card A: Study Status overview */}
          <div className="bg-[#0e1626] rounded-2xl p-5 border border-slate-800/70 shadow-xs flex items-center gap-4.5">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20 flex items-center justify-center">
              <GraduationCap className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 font-bold block uppercase">Flashcard Mastery</span>
              <span className="font-display font-bold text-xl text-slate-100 block mt-0.5">
                {stats.masteredFlashcards?.length || 0} Card{stats.masteredFlashcards?.length === 1 ? '' : 's'}
              </span>
              <span className="text-xs text-slate-400 font-medium">marked as completely mastered</span>
            </div>
          </div>

          {/* Card B: Starred Questions */}
          <div className="bg-[#0e1626] rounded-2xl p-5 border border-slate-800/70 shadow-xs flex items-center gap-4.5">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20 flex items-center justify-center">
              <Star className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 font-bold block uppercase">Starred Elements</span>
              <span className="font-display font-bold text-xl text-slate-100 block mt-0.5">
                {stats.starredFlashcards?.length || 0} Element{stats.starredFlashcards?.length === 1 ? '' : 's'}
              </span>
              <span className="text-xs text-slate-400 font-medium">saved to quick flashcard favorites</span>
            </div>
          </div>

          {/* Card C: Quiz attempts and resets */}
          <div className="bg-[#0e1626] rounded-2xl p-5 border border-slate-800/70 shadow-xs flex items-center gap-4.5">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20 flex items-center justify-center">
              <Clock className="w-5.5 h-5.5" />
            </div>
            <div className="flex-grow">
              <span className="text-[10px] font-mono text-slate-500 font-bold block uppercase">Recent Attempt Logs</span>
              <span className="font-display font-bold text-xl text-slate-100 block mt-0.5">
                {stats.recentQuizAttempts?.length || 0} Quiz{stats.recentQuizAttempts?.length === 1 ? '' : 'zes'}
              </span>
              <span className="text-xs text-slate-400 font-medium">logged in active study session</span>
            </div>
            <button
              onClick={handleResetSession}
              title="Reset progress data"
              className="text-[10px] font-mono text-rose-450 hover:text-rose-400 bg-rose-950/40 hover:bg-rose-950/70 px-2.5 py-1.5 rounded-lg border border-rose-900/40 tracking-tight shrink-0 transition-all font-bold"
            >
              RESET
            </button>
          </div>
        </section>

        {/* Tab Routing Stage */}
        <section id="tab-routing-stage">
          {activeTab === 'manual' && <InteractiveManual />}
          {activeTab === 'flashcards' && (
            <FlashcardDeck
              stats={stats}
              onUpdateStats={handleUpdateStats}
            />
          )}
          {activeTab === 'quiz' && (
            <QuizSession
              stats={stats}
              onUpdateStats={handleUpdateStats}
            />
          )}
          {activeTab === 'signals-trainer' && <SignalsTrainer />}
        </section>

        {/* Recent Performance Attempt History Log Table */}
        {activeTab === 'quiz' && stats.recentQuizAttempts && stats.recentQuizAttempts.length > 0 && (
          <section id="attempt-logs-container" className="bg-[#0e1626] rounded-3xl p-6 border border-slate-800/60 shadow-xs space-y-4">
            <h3 className="font-display font-semibold text-sm text-slate-100 flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-indigo-400" />
              Practice Attempts History
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                    <th className="py-2.5">Date & Time</th>
                    <th className="py-2.5">Subject Category</th>
                    <th className="py-2.5 text-center">Correct Score</th>
                    <th className="py-2.5 text-right">Percentage Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40 text-xs text-slate-300">
                  {stats.recentQuizAttempts.map((attempt, idx) => {
                    const pct = Math.round((attempt.score / attempt.total) * 100);
                    return (
                      <tr key={idx} className="hover:bg-slate-800/20 transition-colors">
                        <td className="py-3 font-mono font-medium text-slate-500">{attempt.date}</td>
                        <td className="py-3 font-semibold text-slate-100">{attempt.category}</td>
                        <td className="py-3 font-mono font-bold text-center text-slate-300">{attempt.score} / {attempt.total}</td>
                        <td className={`py-3 font-mono font-bold text-right ${pct >= 85 ? 'text-emerald-400' : pct >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                          {pct}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      {/* Humid flight-deck themed footer */}
      <footer className="bg-[#090d16] border-t border-slate-800/60 py-6 text-center text-xs text-slate-500 font-mono tracking-normal">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          <p>
            Rules & Licensing Revision Manual — Compiled from official ICAO Annex 1 & 2 Standards.
          </p>
          <span className="text-[10px] font-semibold text-slate-600">
            CURRENT STANDARDS TENTH EDITION
          </span>
        </div>
      </footer>
    </div>
  );
}
