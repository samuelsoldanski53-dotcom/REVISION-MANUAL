import React, { useState, useEffect } from 'react';
import { FLASHCARDS, STUDY_UNITS } from '../studyData';
import { Flashcard, UserStats } from '../types';
import { Star, GraduationCap, RefreshCw, ChevronLeft, ChevronRight, HelpCircle, BookOpen, AlertCircle, Shuffle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface FlashcardDeckProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
}

export default function FlashcardDeck({ stats, onUpdateStats }: FlashcardDeckProps) {
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>('all');
  const [onlyShowStarred, setOnlyShowStarred] = useState<boolean>(false);
  const [deck, setDeck] = useState<Flashcard[]>(FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Re-build deck whenever filters change
  useEffect(() => {
    let filtered = FLASHCARDS;
    if (selectedUnitFilter !== 'all') {
      filtered = filtered.filter(fc => fc.unitId === selectedUnitFilter);
    }
    if (onlyShowStarred) {
      filtered = filtered.filter(fc => stats.starredFlashcards.includes(fc.id));
    }
    setDeck(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedUnitFilter, onlyShowStarred, stats.starredFlashcards]);

  const activeCard = deck[currentIndex];

  const handleNext = () => {
    if (currentIndex < deck.length - 1) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
      }, 150);
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const shuffled = [...deck].sort(() => Math.random() - 0.5);
      setDeck(shuffled);
      setCurrentIndex(0);
    }, 150);
  };

  const toggleStar = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isStarred = stats.starredFlashcards.includes(cardId);
    const newStarred = isStarred
      ? stats.starredFlashcards.filter(id => id !== cardId)
      : [...stats.starredFlashcards, cardId];

    onUpdateStats({
      ...stats,
      starredFlashcards: newStarred
    });
  };

  const toggleMastered = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isMastered = stats.masteredFlashcards.includes(cardId);
    const newMastered = isMastered
      ? stats.masteredFlashcards.filter(id => id !== cardId)
      : [...stats.masteredFlashcards, cardId];

    onUpdateStats({
      ...stats,
      masteredFlashcards: newMastered
    });
  };

  return (
    <div id="flashcard-deck-root" className="max-w-4xl mx-auto space-y-6">
      {/* Filters Toolbar */}
      <div className="bg-[#0e1626] rounded-2xl p-4 md:p-5 border border-slate-800/70 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-3 items-center w-full sm:w-auto">
          <label className="text-xs font-mono font-bold text-slate-500 uppercase">Module:</label>
          <select
            value={selectedUnitFilter}
            onChange={(e) => setSelectedUnitFilter(e.target.value)}
            className="text-xs bg-[#080c14] border border-slate-800/80 rounded-lg p-2 font-display font-medium text-slate-350 focus:outline-[#312e81] focus:bg-[#0c1220]"
          >
            <option value="all">All Modules ({FLASHCARDS.length} cards)</option>
            {STUDY_UNITS.map(unit => (
              <option key={unit.id} value={unit.id}>
                Mod {unit.number}: {unit.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
          {/* Star Filter Toggle */}
          <button
            onClick={() => setOnlyShowStarred(!onlyShowStarred)}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border text-xs font-display font-medium transition-all ${
              onlyShowStarred
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 shadow-2xs font-semibold'
                : 'bg-[#080c14] border-slate-800/80 hover:bg-slate-850/40 text-slate-455'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${onlyShowStarred ? 'fill-amber-500 text-amber-500' : 'text-slate-500'}`} />
            Starred Only ({stats.starredFlashcards.length})
          </button>

          {/* Shuffle Stack */}
          {deck.length > 1 && (
            <button
              onClick={handleShuffle}
              className="flex items-center justify-center gap-1.5 px-3.5 py-2 bg-[#080c14] border border-slate-800/80 text-custom-gray text-slate-450 text-xs font-display font-medium rounded-lg hover:bg-slate-850/40 hover:text-[#e2e8f0] transition-all shrink-0"
            >
              <Shuffle className="w-3.5 h-3.5 text-slate-505" />
              Shuffle Stack
            </button>
          )}
        </div>
      </div>

      {/* Main Flashcard Container */}
      {deck.length > 0 && activeCard ? (
        <div className="space-y-6">
          {/* Card Counter Progress */}
          <div className="flex justify-between items-center px-2">
            <span className="text-xs font-mono text-slate-500 font-bold">
              Progress: <span className="text-slate-200">{currentIndex + 1}</span> / <span className="text-slate-200">{deck.length}</span>
            </span>
            <span className="text-xs font-mono text-slate-500 font-medium">
              Starred: <span className="text-amber-450 font-bold">{deck.filter(fc => stats.starredFlashcards.includes(fc.id)).length}</span> | Mastered: <span className="text-emerald-400 font-bold">{deck.filter(fc => stats.masteredFlashcards.includes(fc.id)).length}</span>
            </span>
          </div>

          {/* Interactive Turn Stage */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative h-[25rem] cursor-pointer group [perspective:1000px] w-full"
          >
            <div
              className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* CARD FRONT */}
              <div className="absolute inset-0 w-full h-full bg-[#0e1626] rounded-3xl p-8 border border-slate-800/80 shadow-md backface-hidden flex flex-col justify-between overflow-hidden">
                {/* Background aviation radial */}
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header Actions */}
                <div className="flex justify-between items-center z-10">
                  <span className="font-mono text-[10px] tracking-wider font-bold bg-indigo-55 bg-indigo-500/10 text-indigo-350 px-2.5 py-1 rounded-md uppercase border border-indigo-500/20">
                    Question Card
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => toggleStar(activeCard.id, e)}
                      className="p-2 rounded-full hover:bg-slate-850 hover:bg-slate-800/60 transition-all border border-slate-800"
                    >
                      <Star className={`w-4 h-4 ${stats.starredFlashcards.includes(activeCard.id) ? 'fill-amber-400 text-amber-500' : 'text-slate-500 hover:text-indigo-400'}`} />
                    </button>
                  </div>
                </div>

                {/* Center Content */}
                <div className="my-auto py-6 max-w-xl mx-auto text-center z-10">
                  <h3 className="font-display font-medium text-lg md:text-2xl text-slate-100 leading-normal">
                    {activeCard.front}
                  </h3>
                </div>

                {/* Footer Directions */}
                <div className="flex justify-between items-center border-t border-slate-800/80 pt-4 z-10">
                  <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
                    Tap anywhere to reveal answer explanation
                  </span>
                  {activeCard.ruleRef && (
                    <span className="font-mono text-[10px] text-slate-450 bg-[#080c14] border border-slate-800/80 px-2.5 py-0.5 rounded-sm">
                      {activeCard.ruleRef}
                    </span>
                  )}
                </div>
              </div>

              {/* CARD BACK */}
              <div className="absolute inset-0 w-full h-full bg-[#0c1220] rounded-3xl p-8 [transform:rotateY(180deg)] backface-hidden flex flex-col justify-between overflow-hidden border border-slate-800 shadow-md">
                <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header Actions */}
                <div className="flex justify-between items-center z-10">
                  <span className="font-mono text-[10px] tracking-wider font-bold bg-emerald-950/40 text-emerald-400 px-2.5 py-1 rounded-md uppercase border border-emerald-900/50">
                    Official Answer
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => toggleStar(activeCard.id, e)}
                      className="p-2 rounded-full hover:bg-slate-800 transition-all border border-slate-800"
                    >
                      <Star className={`w-4 h-4 ${stats.starredFlashcards.includes(activeCard.id) ? 'fill-amber-400 text-amber-500' : 'text-slate-500 hover:text-amber-500'}`} />
                    </button>
                    <button
                      onClick={(e) => toggleMastered(activeCard.id, e)}
                      className={`p-2 rounded-full hover:bg-[#131b2e] hover:bg-slate-800 transition-all border ${
                        stats.masteredFlashcards.includes(activeCard.id) ? 'border-emerald-800/80 bg-emerald-950/20' : 'border-slate-800'
                      }`}
                    >
                      <GraduationCap className={`w-4 h-4 ${stats.masteredFlashcards.includes(activeCard.id) ? 'text-emerald-450 fill-emerald-400' : 'text-slate-500 hover:text-emerald-400'}`} />
                    </button>
                  </div>
                </div>

                {/* Center Content */}
                <div className="my-auto py-6 max-w-xl mx-auto text-center z-10 px-4">
                  <p className="font-display font-medium text-lg md:text-xl text-slate-100 leading-normal">
                    {activeCard.back}
                  </p>
                </div>

                {/* Footer and Stats buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-800 pt-4 gap-2 z-10">
                  <div className="flex gap-2 justify-center sm:justify-start">
                    <button
                      onClick={(e) => toggleMastered(activeCard.id, e)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-display font-medium transition-all ${
                        stats.masteredFlashcards.includes(activeCard.id)
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-350 hover:bg-slate-700 hover:text-white border border-slate-750'
                      }`}
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      {stats.masteredFlashcards.includes(activeCard.id) ? 'Mastered!' : 'Mark as Mastered'}
                    </button>
                  </div>
                  {activeCard.ruleRef && (
                    <span className="font-mono text-[10px] text-indigo-400 bg-indigo-950/30 border border-indigo-900/50 px-2.5 py-0.5 rounded-sm self-center">
                      ICAO Code {activeCard.ruleRef}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border transition-all ${
                currentIndex === 0
                  ? 'border-slate-800 bg-[#0e1626] text-slate-700 opacity-40 cursor-not-allowed'
                  : 'border-slate-800 bg-[#0e1626] hover:bg-slate-800/60 text-slate-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-slate-500">
              {currentIndex + 1} / {deck.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentIndex === deck.length - 1}
              className={`p-3 rounded-full border transition-all ${
                currentIndex === deck.length - 1
                  ? 'border-slate-800 bg-[#0e1626] text-slate-700 opacity-40 cursor-not-allowed'
                  : 'border-slate-800 bg-[#0e1626] hover:bg-slate-800/60 text-slate-300'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#0e1626] rounded-3xl p-12 border border-slate-800/80 text-center shadow-xs space-y-4">
          <AlertCircle className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="font-display font-semibold text-lg text-slate-200">Your flashcard queue is empty</h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            Try choosing a different Module filter or turning off the "Starred Only" toggle to reload your study deck.
          </p>
          <button
            onClick={() => {
              setSelectedUnitFilter('all');
              setOnlyShowStarred(false);
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-display font-medium transition-all shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
