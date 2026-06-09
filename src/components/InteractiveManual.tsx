import React, { useState } from 'react';
import { STUDY_UNITS } from '../studyData';
import { StudyUnit } from '../types';
import { BookOpen, Search, ShieldAlert, CheckCircle2, ChevronRight, CornerDownRight, ArrowUpRight } from 'lucide-react';

export default function InteractiveManual() {
  const [selectedUnit, setSelectedUnit] = useState<StudyUnit>(STUDY_UNITS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<'all' | 'annex1' | 'annex2'>('all');

  const handleSelectTopic = (topic: 'all' | 'annex1' | 'annex2') => {
    setSelectedTopic(topic);
    const firstOfTopic = STUDY_UNITS.find(u => topic === 'all' || u.topic === topic);
    if (firstOfTopic) {
      setSelectedUnit(firstOfTopic);
    }
  };

  // Filtering terms or units based on search & topic selection
  const filteredUnits = STUDY_UNITS.filter(unit => {
    if (selectedTopic === 'all') return true;
    return unit.topic === selectedTopic;
  }).map(unit => {
    const matchedKeyPoints = unit.keyPoints.filter(
      point =>
        point.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        point.definition.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchedDetails = unit.detailedItems.filter(
      item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesSearch =
      unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      matchedKeyPoints.length > 0 ||
      matchedDetails.length > 0;

    return {
      ...unit,
      matchedKeyPoints,
      matchedDetails,
      matchesSearch
    };
  }).filter(unit => unit.matchesSearch);

  return (
    <div id="interactive-manual-root" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar - Unit Navigation */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-[#0e1626] rounded-2xl p-5 border border-slate-800/70 shadow-xs">
          <h3 className="font-display font-semibold text-lg text-slate-100 mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            Study Modules
          </h3>

          {/* Topic Pills Filter */}
          <div className="flex gap-1.5 mb-4 p-1 bg-[#080c14] rounded-xl border border-slate-800/80 shrink-0">
            <button
              onClick={() => handleSelectTopic('all')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-center text-[10px] font-display font-semibold transition-all ${
                selectedTopic === 'all'
                  ? 'bg-slate-800/80 text-white shadow-2xs border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-250'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => handleSelectTopic('annex2')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-center text-[10px] font-display font-semibold transition-all ${
                selectedTopic === 'annex2'
                  ? 'bg-slate-800/80 text-white shadow-2xs border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-250'
              }`}
            >
              Annex 2 (Air)
            </button>
            <button
              onClick={() => handleSelectTopic('annex1')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-center text-[10px] font-display font-semibold transition-all ${
                selectedTopic === 'annex1'
                  ? 'bg-slate-800/80 text-white shadow-2xs border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-250'
              }`}
            >
              Annex 1 (Licence)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search Rules, terms..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#080c14] border border-slate-800/80 rounded-xl focus:outline-hidden focus:border-indigo-500 focus:bg-[#0c1220] transition-all text-slate-100 placeholder-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {filteredUnits.map((unit) => {
              const isActive = selectedUnit.id === unit.id;
              return (
                <button
                  key={unit.id}
                  onClick={() => {
                    const originalUnit = STUDY_UNITS.find(u => u.id === unit.id);
                    if (originalUnit) setSelectedUnit(originalUnit);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 group ${
                    isActive
                      ? 'bg-indigo-950/40 border-indigo-500/50 text-indigo-200 shadow-xs'
                      : 'border-slate-800/50 bg-[#0c1220] hover:bg-slate-800/30 text-slate-300'
                  }`}
                >
                  <span className={`flex items-center justify-center font-mono font-bold text-xs w-6 h-6 rounded-md shrink-0 mt-0.5 ${
                    isActive 
                      ? 'bg-indigo-650/40 text-indigo-300 border border-indigo-500/40' 
                      : 'bg-slate-800/60 text-slate-400 border border-slate-700/50'
                  }`}>
                    0{unit.number}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display font-semibold text-sm leading-tight text-slate-100 flex items-center gap-1.5">
                      {unit.title}
                    </div>
                    <p className={`text-xs mt-1 truncate ${isActive ? 'text-indigo-350' : 'text-slate-500'}`}>
                      {unit.description}
                    </p>
                  </div>
                </button>
              );
            })}
            
            {filteredUnits.length === 0 && (
              <div className="text-center py-8">
                <p className="text-sm text-slate-500">No matching subjects found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Tables Reference Card (Dynamic Annex 1 vs Annex 2) */}
        {selectedUnit.topic === 'annex1' ? (
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md border border-slate-800 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
            <h4 className="font-display font-semibold text-base text-indigo-400 mb-2">Class Certification</h4>
            <p className="text-xs text-slate-350 leading-relaxed animate-fadeIn">
              "A person shall not act as a flight crew member of an aircraft unless a valid licence is held showing compliance with the specifications of this Annex and appropriate to the duties to be performed."
            </p>
            <div className="mt-4 pt-4 border-t border-slate-850 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Annex 1 Chapter 1.2.1</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-sm">MANDATORY</span>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md border border-slate-800 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
            <h4 className="font-display font-semibold text-base text-indigo-400 mb-2">ICAO Jurisdiction</h4>
            <p className="text-xs text-slate-350 leading-relaxed animate-fadeIn">
              "Over the high seas, the Rules of the Air constitute rules relating to the flight and maneuver of aircraft within the meaning of Article 12 of the Convention on International Civil Aviation."
            </p>
            <div className="mt-4 pt-4 border-t border-slate-850 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Annex 2 Chapter 2.1</span>
              <span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-sm">MANDATORY</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-[#0e1626] rounded-2xl p-6 md:p-8 border border-slate-800/70 shadow-xs">
          {/* Unit Header */}
          <div className="border-b border-slate-800/80 pb-5 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-indigo-400 tracking-wider uppercase">Unit 0{selectedUnit.number}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="text-xs text-slate-500 font-medium">{selectedUnit.annex || 'Annex 2'} Reference Manual</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100 leading-tight">
              {selectedUnit.title}
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              {selectedUnit.description}
            </p>
          </div>

          {/* Special Visual Table inside Unit 3 (VMC Limits) */}
          {selectedUnit.id === 'unit3' && (
            <div className="mb-8 overflow-hidden rounded-xl border border-slate-800 shadow-xs">
              <div className="bg-[#0b0f19] px-4 py-3 border-b border-slate-800">
                <h4 className="font-display font-semibold text-sm text-slate-200 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-indigo-400" />
                  Table 3-1: VMC Visibility & Cloud Distance Minima
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-[#080c14]/50 text-[11px] font-mono text-slate-500 font-bold tracking-wider uppercase font-semibold">
                      <th className="p-3">Altitude Band</th>
                      <th className="p-3">Airspace Classes</th>
                      <th className="p-3">Flight Visibility</th>
                      <th className="p-3">Distance From Cloud</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40 text-xs text-slate-300">
                    <tr className="hover:bg-slate-850/40 transition-colors">
                      <td className="p-3 font-medium text-slate-100">
                        At & above 3,050 m (10,000 ft) AMSL
                      </td>
                      <td className="p-3 font-mono text-indigo-400 bg-indigo-500/10 font-semibold text-center rounded border border-indigo-500/10">A* B C D E F G</td>
                      <td className="p-3 font-semibold text-slate-100">8 km</td>
                      <td className="p-3 leading-normal">
                        1,500 m horizontally<br />
                        300 m (1,000 ft) vertically
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-850/40 transition-colors">
                      <td className="p-3 font-medium text-slate-100">
                        Below 3,050 m and above 900 m AMSL
                      </td>
                      <td className="p-3 font-mono text-indigo-400 bg-indigo-500/10 font-semibold text-center rounded border border-indigo-500/10">A* B C D E F G</td>
                      <td className="p-3 font-semibold text-slate-100">5 km</td>
                      <td className="p-3 leading-normal">
                        1,500 m horizontally<br />
                        300 m (1,000 ft) vertically
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-850/40 transition-colors">
                      <td className="p-3 font-medium text-slate-100" rowSpan={2}>
                        At & below 900 m (3,000 ft) AMSL or 300 m above terrain
                      </td>
                      <td className="p-3 font-mono text-indigo-400 bg-indigo-500/10 font-semibold text-center rounded border border-indigo-500/10">A* B C D E</td>
                      <td className="p-3 font-semibold text-slate-100">5 km</td>
                      <td className="p-3 leading-normal">
                        1,500 m horizontally<br />
                        300 m (1,000 ft) vertically
                      </td>
                    </tr>
                    <tr className="bg-slate-850/10 hover:bg-slate-850/40 transition-colors">
                      <td className="p-3 font-mono text-indigo-400 bg-indigo-500/10 font-semibold text-center rounded border border-indigo-500/10">F G</td>
                      <td className="p-3 font-semibold text-slate-100">5 km*</td>
                      <td className="p-3 font-medium text-amber-350 bg-amber-500/15 rounded-md p-2 border border-amber-900/30 block text-center">
                        Clear of cloud and with surface in sight
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#0b0f19] p-3 border-t border-slate-800 text-[10px] text-slate-500 font-medium">
                * Note: The VMC minima in Class A airspace are included for guidance to pilots and do not imply acceptance of VFR flights inside Class A list.
              </div>
            </div>
          )}

          {/* Key Terms Definition Grid */}
          <div className="space-y-4 mb-8">
            <h3 className="font-display font-semibold text-base text-slate-150 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Core Terms & Standard Definitions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedUnit.keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-[#080c14]/40 rounded-xl p-4 border border-slate-800/60 hover:border-slate-700/50 hover:bg-[#080c14]/80 transition-all group duration-200"
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-display font-semibold text-sm text-slate-200 group-hover:text-indigo-300">
                      {point.term}
                    </h4>
                    {point.ruleRef && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#0d1321] border border-slate-800 font-semibold text-slate-400 uppercase tracking-tight shrink-0 shadow-2xs">
                        {point.ruleRef}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {point.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Syllabus Breakdown */}
          <div className="space-y-5">
            <h3 className="font-display font-semibold text-base text-slate-150 flex items-center gap-2">
              <CornerDownRight className="w-5 h-5 text-indigo-400" />
              Syllabus Study Deep-Dive
            </h3>
            <div className="space-y-4">
              {selectedUnit.detailedItems.map((item, index) => (
                <div key={index} className="bg-[#080c14]/35 rounded-xl p-5 border border-slate-800/60 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                    <h4 className="font-display font-semibold text-base text-slate-100 flex items-center gap-1.5">
                      <ChevronRight className="w-4 h-4 text-indigo-400" />
                      {item.title}
                    </h4>
                    {item.ruleRef && (
                      <span className="font-mono text-[10px] px-2 py-1 rounded-md bg-[#0d1321] text-slate-400 hover:bg-slate-800/80 border border-slate-800 font-semibold">
                        Section {item.ruleRef}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.text}
                  </p>

                  {item.list && (
                    <ul className="text-xs text-slate-300 bg-[#080c14]/60 rounded-xl p-4 border border-slate-800/40 space-y-2">
                      {item.list.map((li, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
