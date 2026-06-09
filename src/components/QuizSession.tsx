import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, STUDY_UNITS } from '../studyData';
import { QuizQuestion, UserStats } from '../types';
import { HelpCircle, CheckCircle2, XCircle, ChevronRight, Award, RotateCcw, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';

interface QuizSessionProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
}

export default function QuizSession({ stats, onUpdateStats }: QuizSessionProps) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedLength, setSelectedLength] = useState<number>(5);

  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<{ questionId: string; optionIndex: number | null; correct: boolean }>>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = () => {
    let pool = QUIZ_QUESTIONS;
    if (selectedUnit !== 'all') {
      pool = pool.filter(q => q.unitId === selectedUnit);
    }
    
    // Shuffle and slice to selected length
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(selectedLength, shuffled.length));

    setActiveQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;

    const currentQuestion = activeQuestions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.correctIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionId: currentQuestion.id,
        optionIndex: selectedOption,
        correct: isCorrect
      }
    ]);

    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Finished!
      setQuizFinished(true);

      // Save statistics in state
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      
      const newAttempt = {
        date: formattedDate,
        score,
        total: activeQuestions.length,
        category: selectedUnit === 'all' ? 'All Subjects' : STUDY_UNITS.find(u => u.id === selectedUnit)?.title || 'Custom'
      };

      const originalAttempts = stats.recentQuizAttempts || [];
      const updatedAttempts = [newAttempt, ...originalAttempts].slice(0, 10); // keep last 10 attempts

      const updatedHighScores = { ...stats.quizHighScores };
      const previousHigh = updatedHighScores[selectedUnit] || 0;
      const currentPct = (score / activeQuestions.length) * 100;
      if (currentPct > previousHigh) {
        updatedHighScores[selectedUnit] = Math.round(currentPct);
      }

      onUpdateStats({
        ...stats,
        recentQuizAttempts: updatedAttempts,
        quizHighScores: updatedHighScores
      });
    }
  };

  const currentQuestion = activeQuestions[currentIndex];

  return (
    <div id="quiz-session-root" className="max-w-3xl mx-auto">
      {!quizStarted ? (
        /* QUIZ SETUP PANEL */
        <div className="bg-[#0e1626] rounded-3xl p-6 md:p-8 border border-slate-800/80 shadow-xs space-y-6">
          <div className="border-b border-slate-800/80 pb-4 text-center sm:text-left">
            <h2 className="font-display font-bold text-2xl text-slate-100 animate-pulse-subtle">Practice Exam Simulator</h2>
            <p className="text-xs text-slate-400 mt-1">Test your FAA/ICAO Rules of the Air navigation knowledge under strict exam parameters.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Filter Module Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-505 text-slate-500 uppercase block">Select Study Module</label>
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="w-full bg-[#080c14] border border-slate-800 rounded-xl p-3 font-display font-medium text-sm text-slate-300 focus:outline-hidden focus:border-indigo-500 focus:bg-[#0c1220] transition-all"
              >
                <option value="all">All Regulatory Chapters ({QUIZ_QUESTIONS.length} Questions)</option>
                {STUDY_UNITS.map(unit => (
                  <option key={unit.id} value={unit.id}>
                    Mod {unit.number}: {unit.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Quiz Length Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-505 text-slate-500 uppercase block">Number of Questions</label>
              <div className="flex gap-2.5">
                {[5, 10, 15, 25].map(len => (
                  <button
                    key={len}
                    type="button"
                    onClick={() => setSelectedLength(len)}
                    className={`flex-1 py-3 px-2 text-center rounded-xl border text-sm font-display font-bold transition-all ${
                      selectedLength === len
                        ? 'bg-indigo-500/10 border-indigo-550 border-indigo-500/30 text-indigo-300 shadow-2xs'
                        : 'bg-[#080c14] border-slate-800/80 hover:bg-slate-850/40 text-slate-450'
                    }`}
                  >
                    {len}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0c1220] rounded-2xl p-4 border border-slate-800/80 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-400 leading-normal">
              <strong className="text-slate-200 font-semibold block mb-0.5">Instructions & Performance Metrics</strong>
              Selecting options will reveal the standard answer immediately. Every correct answer contributes to your knowledge stats. Standard explanations citing actual annex documentation are included for mistake study.
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-display font-bold py-4 rounded-xl text-sm transition-all shadow-xs flex items-center justify-center gap-2"
          >
            Start Practice Quiz
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : quizFinished ? (
        /* QUIZ SCORE FINISH PANEL */
        <div className="bg-[#0e1626] rounded-3xl p-6 md:p-8 border border-slate-800/80 shadow-xs space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center p-4 bg-indigo-500/10 rounded-full border border-indigo-505/20 border-indigo-500/20 mb-2">
              <Award className="w-12 h-12 text-indigo-400" />
            </div>
            <h2 className="font-display font-bold text-3xl text-slate-100 leading-tight">Practice Exam Finished</h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">You have completed your revision quiz. Excellent training effort!</p>
          </div>

          {/* Performance Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#0c1220] border border-slate-800/80 p-4 rounded-2xl text-center">
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mb-1">Total Score</span>
              <span className="font-display font-bold text-2xl text-slate-100">{score} / {activeQuestions.length}</span>
            </div>
            <div className="bg-[#0c1220] border border-slate-800/80 p-4 rounded-2xl text-center">
              <span className="text-[10px] font-mono text-slate-505 text-slate-500 font-bold uppercase block mb-1">Percentage</span>
              <span className={`font-display font-bold text-2xl ${score / activeQuestions.length >= 0.8 ? 'text-emerald-400' : score / activeQuestions.length >= 0.5 ? 'text-amber-400' : 'text-rose-450'}`}>
                {Math.round((score / activeQuestions.length) * 100)}%
              </span>
            </div>
            <div className="bg-[#0c1220] border border-slate-800/80 p-4 rounded-2xl text-center">
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mb-1">Correct</span>
              <span className="font-display font-bold text-2xl text-emerald-400">{score}</span>
            </div>
            <div className="bg-[#0c1220] border border-slate-800/80 p-4 rounded-2xl text-center">
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block mb-1">Incorrect</span>
              <span className="font-display font-bold text-2xl text-rose-400">{activeQuestions.length - score}</span>
            </div>
          </div>

          {/* Questions Review list */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-base text-slate-200 border-b border-slate-800/85 pb-2">Questions Audit</h3>
            <div className="space-y-3.5 max-h-[30rem] overflow-y-auto pr-2">
              {activeQuestions.map((q, idx) => {
                const answerLog = userAnswers.find(log => log.questionId === q.id);
                const userChoice = answerLog?.optionIndex !== undefined ? answerLog.optionIndex : null;
                const wasCorrect = answerLog?.correct || false;
 
                return (
                  <div key={q.id} className="p-4 rounded-xl border border-slate-800/60 bg-[#0c1220] space-y-3">
                    <div className="flex justify-between items-start gap-2 border-b border-slate-800/70 pb-2">
                      <span className="font-mono text-xs text-slate-500 font-bold">Q{idx + 1}</span>
                      <div className="flex items-center gap-1">
                        {wasCorrect ? (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold uppercase"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Correct</span>
                        ) : (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-rose-405 text-rose-400 font-bold uppercase"><XCircle className="w-3.5 h-3.5 text-rose-450" /> Incorrect</span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs font-display font-semibold text-slate-200">{q.question}</p>
                    <div className="space-y-1.5 pl-3 border-l-2 border-slate-800">
                      <p className="text-xs text-slate-400">Your selection: <span className="font-medium text-slate-300">{userChoice !== null ? q.options[userChoice] : 'None'}</span></p>
                      {!wasCorrect && (
                        <p className="text-xs text-emerald-400">Correct Answer: <span className="font-semibold text-emerald-305 text-emerald-300">{q.options[q.correctIndex]}</span></p>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-405 text-slate-400 bg-[#080c14] p-2.5 rounded-lg border border-slate-800/60 leading-relaxed font-sans">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setQuizStarted(false)}
              className="flex-1 bg-slate-800 hover:bg-slate-705 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-display font-bold py-3.5 rounded-xl transition-all border border-slate-700/60"
            >
              Configure Selectors
            </button>
            <button
              onClick={startQuiz}
              className="flex-grow bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-display font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Try Another Stack
            </button>
          </div>
        </div>
      ) : (
        /* QUIZ ACTIVE SCREEN */
        <div className="bg-[#0e1626] rounded-3xl p-6 md:p-8 border border-slate-800/80 shadow-xs space-y-6">
          {/* Header Stats */}
          <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-500">
            <span>Question {currentIndex + 1} of {activeQuestions.length}</span>
            <span className="text-emerald-400">Correct Score: {score}</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-[#080c14] rounded-full h-2">
            <div
              className="bg-indigo-505 bg-indigo-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
            />
          </div>

          <div className="space-y-4">
            {/* Question Text */}
            <div className="flex gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <h3 className="font-display font-bold text-lg md:text-xl text-slate-100 leading-normal">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Answer Options list */}
            <div className="space-y-2.5 pt-2">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                let optionStyle = 'border-slate-800 bg-[#0c1220] text-slate-350 hover:bg-[#131b2e] hover:border-slate-700';
                let checkIcon = null;

                if (isAnswered) {
                  const isCorrectAnswer = currentQuestion.correctIndex === idx;
                  if (isCorrectAnswer) {
                    optionStyle = 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium';
                    checkIcon = <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
                  } else if (isSelected) {
                    optionStyle = 'border-rose-500/30 bg-rose-500/10 text-rose-300';
                    checkIcon = <XCircle className="w-4 h-4 text-rose-400" />;
                  } else {
                    optionStyle = 'border-slate-800/80 bg-[#0c1220] opacity-30 text-slate-500';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-indigo-500/40 bg-indigo-500/10 text-indigo-200';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border text-xs leading-relaxed transition-all flex items-center justify-between gap-3 font-sans ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {checkIcon}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reveal Explanations block */}
          {isAnswered && (
            <div className="bg-[#080c14] border border-slate-800/80 rounded-2xl p-4.5 space-y-2.5 animate-fadeIn">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                Regulations Citation & Rationale
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{currentQuestion.explanation}</p>
              {currentQuestion.ruleRef && (
                <span className="inline-block font-mono text-[10px] text-indigo-400 bg-indigo-950/40 border border-indigo-900/50 shrink-0 font-bold px-2 py-0.5 rounded-sm">
                  Annex Ref: {currentQuestion.ruleRef}
                </span>
              )}
            </div>
          )}

          {/* Footer Submit action row */}
          <div className="pt-2 flex justify-end">
            {!isAnswered ? (
              <button
                type="button"
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-3 rounded-lg text-xs font-display font-bold transition-all ${
                  selectedOption === null
                    ? 'bg-[#080c14] text-slate-650 cursor-not-allowed border border-slate-800'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-xs font-display font-bold flex items-center gap-1.5 shadow-xs transition-all"
              >
                {currentIndex < activeQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
