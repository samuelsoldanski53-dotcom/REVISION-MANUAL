import React, { useState } from 'react';
import { Eye, HelpCircle, CheckCircle2, XCircle, ShieldAlert, Award, ChevronRight, BookOpen } from 'lucide-react';

interface SignalItem {
  id: string;
  category: 'light-gun' | 'ground-panel';
  name: string;
  colorHex?: string;
  isBlinking?: boolean;
  statusContext: 'flight' | 'ground' | 'all';
  svgRenderer?: () => React.JSX.Element;
  meaning: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  ruleRef: string;
}

const SIGNALS_DB: SignalItem[] = [
  // LIGHT GUN IN FLIGHT
  {
    id: 'lg1',
    category: 'light-gun',
    name: 'Steady Green',
    colorHex: '#22c55e',
    isBlinking: false,
    statusContext: 'flight',
    meaning: 'Cleared to land',
    options: ['Stop immediately', 'Cleared to land', 'Aerodrome unsafe, do not land', 'Return for landing'],
    correctIndex: 1,
    explanation: 'A steady green light gun signal directed at an aircraft in flight constitutes a clear, direct clearance to execute landing operations.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lg2',
    category: 'light-gun',
    name: 'Steady Red',
    colorHex: '#ef4444',
    isBlinking: false,
    statusContext: 'flight',
    meaning: 'Give way to other aircraft and continue circling',
    options: ['Cleared to land', 'Stop immediately', 'Give way to other aircraft and continue circling', 'Return to starting point'],
    correctIndex: 2,
    explanation: 'A steady red signal to an airborne craft indicates that another aircraft has right of way or the lane is occupied. Maintain altitude and continue holding patterns.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lg3',
    category: 'light-gun',
    name: 'Flashing Green',
    colorHex: '#22c55e',
    isBlinking: true,
    statusContext: 'flight',
    meaning: 'Return for landing (clearance will be given in due course)',
    options: ['Return for landing (clearance will be given in due course)', 'Cleared to land immediately', 'Cleared to taxi', 'Taxi clear of landing area'],
    correctIndex: 0,
    explanation: 'Flashing green tells a flying pilot to configure the arrival pattern toward the aerodrome. Landing clearances will follow via a steady light gun subsequently.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lg4',
    category: 'light-gun',
    name: 'Flashing Red',
    colorHex: '#ef4444',
    isBlinking: true,
    statusContext: 'flight',
    meaning: 'Aerodrome unsafe, do not land',
    options: ['Cleared to land', 'Give way to other aircraft', 'Aerodrome unsafe, do not land', 'No restrictions apply'],
    correctIndex: 2,
    explanation: 'Flashing red indicates the airfield surface is blocked, under hazard, or compromised. Do not descend or attempt normal landings.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lg5',
    category: 'light-gun',
    name: 'Flashing White',
    colorHex: '#f8fafc',
    isBlinking: true,
    statusContext: 'flight',
    meaning: 'Land at this aerodrome and proceed to apron (clearance follow)',
    options: ['Steady hold pattern', 'Cleared to taxi', 'Return to starting point', 'Land at this aerodrome and proceed to apron'],
    correctIndex: 3,
    explanation: 'Flashing white aimed at flight is a safety direction: execute landings at this specific site and navigate straight to parking areas.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lg6',
    category: 'light-gun',
    name: 'Red Pyrotechnic Flare',
    colorHex: '#f97316',
    isBlinking: false,
    statusContext: 'flight',
    meaning: 'Notwithstanding any previous instructions, do not land for the time being',
    options: ['Cleared to land', 'Notwithstanding any previous instructions, do not land for the time being', 'Emergency clearance accepted', 'Standard holding instructions'],
    correctIndex: 1,
    explanation: 'Red flare shells or pyrotechnics fired from Tower override all prior signals. Fully wave off landing and maintain holding immediately.',
    ruleRef: 'Appendix 1, 4.1.1'
  },

  // LIGHT GUN ON THE GROUND
  {
    id: 'lgg1',
    category: 'light-gun',
    name: 'Steady Green',
    colorHex: '#22c55e',
    isBlinking: false,
    statusContext: 'ground',
    meaning: 'Cleared for take-off',
    options: ['Cleared to taxi', 'Stop immediately', 'Cleared for take-off', 'Return to starting point'],
    correctIndex: 2,
    explanation: 'To an aircraft positioned on the runway, steady green confirms the runway is clear. Cleared for takeoff.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lgg2',
    category: 'light-gun',
    name: 'Steady Red',
    colorHex: '#ef4444',
    isBlinking: false,
    statusContext: 'ground',
    meaning: 'STOP',
    options: ['STOP', 'Taxi clear of landing area', 'Cleared to take-off', 'Cleared to taxi'],
    correctIndex: 0,
    explanation: 'Steady red on the ground is the universal instruction meaning STOP all movement immediately.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lgg3',
    category: 'light-gun',
    name: 'Flashing Green',
    colorHex: '#22c55e',
    isBlinking: true,
    statusContext: 'ground',
    meaning: 'Cleared to taxi',
    options: ['Cleared for take-off', 'Cleared to taxi', 'Stop immediately', 'Return to beginning'],
    correctIndex: 1,
    explanation: 'Flashing green authorizes the pilot to navigate taxiways toward destination holding points.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lgg4',
    category: 'light-gun',
    name: 'Flashing Red',
    colorHex: '#ef4444',
    isBlinking: true,
    statusContext: 'ground',
    meaning: 'Taxi clear of landing area in use',
    options: ['Stop immediately', 'Cleared to take-off', 'Return to checkpoint', 'Taxi clear of landing area in use'],
    correctIndex: 3,
    explanation: 'Flashing red means you are obstructing current flight paths. Turn off the active landing runway or runway intersections immediately.',
    ruleRef: 'Appendix 1, 4.1.1'
  },
  {
    id: 'lgg5',
    category: 'light-gun',
    name: 'Flashing White',
    colorHex: '#f8fafc',
    isBlinking: true,
    statusContext: 'ground',
    meaning: 'Return to starting point on the aerodrome',
    options: ['Return to starting point on the aerodrome', 'Cleared to taxi', 'Cleared to takeoff', 'STOP immediately'],
    correctIndex: 0,
    explanation: 'Flashing white is an instruction to turn back and taxi directly to your origin point on the aerodrome.',
    ruleRef: 'Appendix 1, 4.1.1'
  },

  // GROUND PANELS & BOARD SIGNALS
  {
    id: 'gp1',
    category: 'ground-panel',
    name: 'Red Square with 2 Yellow Diagonals',
    statusContext: 'all',
    svgRenderer: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full rounded-lg bg-red-600 border border-slate-300">
        {/* Yellow diagonals cross */}
        <line x1="10" y1="10" x2="90" y2="90" stroke="#facc15" strokeWidth="11" />
        <line x1="90" y1="10" x2="10" y2="90" stroke="#facc15" strokeWidth="11" />
      </svg>
    ),
    meaning: 'Landings are prohibited and that the prohibition is liable to be prolonged',
    options: [
      'Gliders only have landing clearance',
      'Special precautions must be taken during approach',
      'Landings are prohibited and that the prohibition is liable to be prolonged',
      'Normal landing pattern exists'
    ],
    correctIndex: 2,
    explanation: 'A red square with two solid yellow diagonals displayed in the signal circle informs pilots landing at this aerodrome is strictly prohibited indefinitely.',
    ruleRef: 'Appendix 1, 4.2.1'
  },
  {
    id: 'gp2',
    category: 'ground-panel',
    name: 'Red Square with 1 Yellow Diagonal',
    statusContext: 'all',
    svgRenderer: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full rounded-lg bg-red-600 border border-slate-300">
        {/* Single Yellow diagonal line */}
        <line x1="10" y1="10" x2="90" y2="90" stroke="#facc15" strokeWidth="11" />
      </svg>
    ),
    meaning: 'Owing to bad state of manoeuvring area, special precautions must be taken',
    options: [
      'Stop all operations immediately',
      'Owing to bad state of manoeuvring area, special precautions must be taken',
      'Aerodrome unfit for glider flights',
      'Proceed normally on active taxiways'
    ],
    correctIndex: 1,
    explanation: 'A single yellow diagonal warns pilots that elements of the runway or taxiway are degraded. Focus precaution during approach and landings.',
    ruleRef: 'Appendix 1, 4.2.2'
  },
  {
    id: 'gp3',
    category: 'ground-panel',
    name: 'White Dumb-bell Panel',
    statusContext: 'all',
    svgRenderer: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full rounded-lg bg-neutral-100 border border-slate-300">
        {/* Draw a horizontal dumb bell in white/black */}
        <rect x="25" y="44" width="50" height="12" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
        <circle cx="25" cy="50" r="18" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
        <circle cx="75" cy="50" r="18" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
      </svg>
    ),
    meaning: 'Required to land, take off and taxi on runways and taxiways ONLY',
    options: [
      'Landing must occur on grass runways only',
      'Takeoffs and landings are prohibited',
      'Required to land, take off and taxi on runways and taxiways ONLY',
      'Glider flights in immediate progress'
    ],
    correctIndex: 2,
    explanation: 'The dumb-bell tells pilots they are strictly forbidden from navigating on unpaved surfaces (e.g., wet grass strips). Safely restrict movement to runways and taxiways.',
    ruleRef: 'Appendix 1, 4.2.3.1'
  },
  {
    id: 'gp4',
    category: 'ground-panel',
    name: 'Dumb-bell with Black Cross Bars',
    statusContext: 'all',
    svgRenderer: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full rounded-lg bg-slate-200 border border-slate-300">
        {/* Dumb bell with black bars */}
        <rect x="25" y="44" width="50" height="12" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
        <circle cx="25" cy="50" r="18" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
        <circle cx="75" cy="50" r="18" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
        {/* perpendicular black bars */}
        <line x1="25" y1="30" x2="25" y2="70" stroke="#1e293b" strokeWidth="6" />
        <line x1="75" y1="30" x2="75" y2="70" stroke="#1e293b" strokeWidth="6" />
      </svg>
    ),
    meaning: 'Land/takeoff on runways only; other maneuvers not confined to',
    options: [
      'Aerodrome closed to fixed wing planes',
      'Required to land, take off and taxi on grass limits only',
      'Airport restricted to glider towing only',
      'Land/takeoff on runways only; other maneuvers not confined to'
    ],
    correctIndex: 3,
    explanation: 'Adding black bars perpendicular to the dumb-bell means takeoffs and landings are confined exclusively to paved runways, but general taxiing may use other grass maneuvers.',
    ruleRef: 'Appendix 1, 4.2.3.2'
  },
  {
    id: 'gp5',
    category: 'ground-panel',
    name: 'Closed Cross Symbol (X)',
    statusContext: 'all',
    svgRenderer: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full rounded-lg bg-amber-500 border border-slate-300">
        {/* Large yellow/white cross cross */}
        <line x1="20" y1="20" x2="80" y2="80" stroke="#ffffff" strokeWidth="12" />
        <line x1="80" y1="20" x2="20" y2="80" stroke="#ffffff" strokeWidth="12" />
      </svg>
    ),
    meaning: 'Runway or taxiway is closed and unfit for movement of aircraft',
    options: [
      'Stop and report your position',
      'Runway or taxiway is closed and unfit for movement of aircraft',
      'Glider flights in progress',
      'Landing T direction indicator'
    ],
    correctIndex: 1,
    explanation: 'A large yellow or white cross (X) laid flat on the runway surface means the segment is fully closed and absolutely unsafe for aircraft movements.',
    ruleRef: 'Appendix 1, 4.2.4'
  }
];

export default function SignalsTrainer() {
  const [activeCategory, setActiveCategory] = useState<'light-gun' | 'ground-panel'>('light-gun');
  const [trainerQuestions, setTrainerQuestions] = useState<SignalItem[]>([]);
  const [currentIdx, setCurrentIndex] = useState(0);
  const [selectedOpt, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const startTrainer = () => {
    // Compile and shuffle questions matching activeCategory
    const list = SIGNALS_DB.filter(item => item.category === activeCategory);
    const shuffled = [...list].sort(() => Math.random() - 0.5);

    setTrainerQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setStarted(true);
  };

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOpt === null || isAnswered) return;
    const isCorrect = selectedOpt === trainerQuestions[currentIdx].correctIndex;
    if (isCorrect) setScore(prev => prev + 1);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIdx < trainerQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const currentItem = trainerQuestions[currentIdx];

  return (
    <div id="signals-trainer-root" className="max-w-3xl mx-auto space-y-6">
      {!started ? (
        /* START LAUNCH PAGE */
        <div className="bg-[#0e1626] rounded-3xl p-6 md:p-8 border border-slate-800/80 shadow-xs text-center space-y-6">
          <div className="max-w-md mx-auto space-y-3">
            <div className="mx-auto w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center border border-indigo-500/20">
              <Eye className="w-6 h-6 animate-pulse" />
            </div>
            <h2 className="font-display font-semibold text-2xl text-slate-100 leading-tight">Visual Signals Trainer</h2>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Drill tower light gun controls and aerodrome ground signal panel codes into immediate muscle memory. Crucial regulatory checklists for VFR/IFR pilots.
            </p>
          </div>

          {/* Mode Selector cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setActiveCategory('light-gun')}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeCategory === 'light-gun'
                  ? 'bg-indigo-500/10 border-indigo-500/40 shadow-2xs'
                  : 'bg-[#080c14] border-slate-800/80 hover:bg-[#0c1220] hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="font-mono text-[10px] font-bold tracking-wider text-indigo-400 mb-1">DRILL TYPE A</div>
              <h4 className="font-display font-semibold text-sm text-slate-100">Tower Light Gun signals</h4>
              <p className="text-slate-400 text-xs mt-1 font-sans">Practice steady and flashing red, green, and white targets for pilots in flight and on the ground.</p>
            </button>

            <button
              onClick={() => setActiveCategory('ground-panel')}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeCategory === 'ground-panel'
                  ? 'bg-indigo-500/10 border-indigo-500/40 shadow-2xs'
                  : 'bg-[#080c14] border-slate-800/80 hover:bg-[#0c1220] hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="font-mono text-[10px] font-bold tracking-wider text-indigo-400 mb-1">DRILL TYPE B</div>
              <h4 className="font-display font-semibold text-sm text-slate-100">Aerodrome Signal Panel displays</h4>
              <p className="text-slate-400 text-xs mt-1 font-sans">Translate geometric dumb-bells, diagonal lines, and crosses found inside airfield sign circles.</p>
            </button>
          </div>

          <button
            onClick={startTrainer}
            className="w-full bg-[#0c1220] hover:bg-slate-800 text-slate-200 border border-slate-750 font-display font-semibold py-4 rounded-xl text-xs transition-all shadow-xs"
          >
            Launch Visual Session ({activeCategory === 'light-gun' ? SIGNALS_DB.filter(i => i.category === 'light-gun').length : SIGNALS_DB.filter(i => i.category === 'ground-panel').length} Elements)
          </button>
        </div>
      ) : isFinished ? (
        /* FINISHED SCORE CARD */
        <div className="bg-[#0e1626] rounded-3xl p-6 md:p-8 border border-slate-800/80 shadow-xs text-center space-y-6">
          <div className="max-w-md mx-auto space-y-3">
            <div className="mx-auto w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center border border-indigo-500/20">
              <Award className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="font-display font-semibold text-2xl text-slate-100 leading-tight">Session Complete!</h2>
            <p className="text-xs text-slate-400 leading-normal font-sans">
              You scored <span className="font-bold text-slate-200">{score} out of {trainerQuestions.length}</span> correct on visual signal recognition. Keep repeating to master aviation standards.
            </p>
          </div>

          <div className="inline-block bg-[#0c1220] py-3 px-6 rounded-2xl border border-slate-800 text-sm font-display font-bold text-slate-300">
            Current Accuracy: {Math.round((score / trainerQuestions.length) * 100)}%
          </div>

          <div className="pt-2 flex gap-3 max-w-sm mx-auto">
            <button
              onClick={() => setStarted(false)}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-display font-bold py-3.5 rounded-xl text-xs transition-all border border-slate-700/60"
            >
              Choose Mode
            </button>
            <button
              onClick={startTrainer}
              className="flex-grow bg-indigo-600 hover:bg-indigo-700 text-white font-display font-bold py-3.5 rounded-xl text-xs transition-all"
            >
              Retry Drill
            </button>
          </div>
        </div>
      ) : (
        /* ACTIVE SESSION CHALLENGE */
        <div className="bg-[#0e1626] rounded-3xl p-6 md:p-8 border border-slate-800/80 shadow-xs space-y-6">
          {/* Progress Header */}
          <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-500">
            <span>Identification {currentIdx + 1} of {trainerQuestions.length}</span>
            <span className="text-emerald-400 font-bold">Correct: {score}</span>
          </div>

          {/* Visual stage panel */}
          <div className="bg-slate-950 rounded-2xl h-56 p-4 flex items-center justify-center relative overflow-hidden border border-slate-800">
            {/* Grid flight lines background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />

            {currentItem.category === 'light-gun' ? (
              /* LIGHT GUN SIMULATOR VIEW */
              <div className="text-center space-y-3 z-10 w-full max-w-sm">
                <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-full border border-slate-800 bg-slate-950">
                  {/* Blinking signal bulb */}
                  <div
                    className="w-16 h-16 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: currentItem.colorHex || '#ffffff',
                      animation: currentItem.isBlinking ? 'pulse 1s infinite' : 'none',
                      boxShadow: `0 0 40px ${currentItem.colorHex || '#ffffff'}`
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">PROJECTING SIGNAL STATUS</div>
                  <div className="font-display font-bold text-xs text-slate-200 uppercase tracking-tight flex items-center justify-center gap-1.5">
                    {currentItem.name} Signal
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    Target is {currentItem.statusContext === 'flight' ? 'IN FLIGHT' : 'ON THE GROUND'}
                  </div>
                </div>
              </div>
            ) : (
              /* GROUND PANEL DISPLAY VIEW */
              <div className="text-center space-y-3.5 z-10 w-32 h-32 flex items-center justify-center">
                {currentItem.svgRenderer && currentItem.svgRenderer()}
              </div>
            )}
          </div>

          {currentItem.category === 'light-gun' && (
            <div className="bg-[#0c1220] border border-slate-800 rounded-xl p-3 text-center text-xs text-indigo-300 mt-2 font-display font-medium">
              Scenario: Aircraft targeting is <span className="font-bold underline text-indigo-200">{currentItem.statusContext === 'flight' ? 'IN FLIGHT' : 'ON THE GROUND'}</span>. What does this mean?
            </div>
          )}

          {/* Multiple Choice Selection list */}
          <div className="space-y-2">
            {currentItem.options.map((opt, idx) => {
              const selected = selectedOpt === idx;
              let choiceStyle = 'border-slate-800 bg-[#0c1220] text-slate-300 hover:bg-[#131b2e] hover:border-slate-700';
              let checkIndicator = null;

              if (isAnswered) {
                const isCorrect = currentItem.correctIndex === idx;
                if (isCorrect) {
                  choiceStyle = 'border-emerald-500/30 bg-emerald-500/10 text-emerald-305 text-emerald-300 font-medium';
                  checkIndicator = <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
                } else if (selected) {
                  choiceStyle = 'border-rose-500/30 bg-rose-500/10 text-rose-300';
                  checkIndicator = <XCircle className="w-4 h-4 text-rose-400" />;
                } else {
                  choiceStyle = 'border-[#131b2e] bg-[#0c1220] opacity-30 text-slate-500';
                }
              } else if (selected) {
                choiceStyle = 'border-indigo-500/40 bg-indigo-500/10 text-indigo-200';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border text-xs leading-relaxed transition-all flex items-center justify-between gap-3 font-sans ${choiceStyle}`}
                >
                  <span>{opt}</span>
                  {checkIndicator}
                </button>
              );
            })}
          </div>

          {/* Correct explanation accordion panel */}
          {isAnswered && (
            <div className="bg-[#080c14] border border-slate-800/80 rounded-2xl p-4.5 space-y-2.5 animate-fadeIn">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                Regulations Analysis
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{currentItem.explanation}</p>
              <span className="inline-block font-mono text-[10px] text-indigo-400 bg-indigo-950/40 border border-indigo-900/50 font-bold px-2 py-0.5 rounded-sm">
                Official ATC Citation: {currentItem.ruleRef}
              </span>
            </div>
          )}

          {/* Navigation and actions footer bar */}
          <div className="pt-2 flex justify-end">
            {!isAnswered ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOpt === null}
                className={`px-6 py-3 rounded-lg text-xs font-display font-bold transition-all ${
                  selectedOpt === null
                    ? 'bg-[#080c14] text-slate-650 cursor-not-allowed border border-slate-800'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                }`}
              >
                Validate Signal Meaning
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-xs font-display font-semibold flex items-center gap-1 shadow-xs transition-all animate-fadeIn"
              >
                {currentIdx < trainerQuestions.length - 1 ? 'Next Design' : 'Finish Drill'}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
