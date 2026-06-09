import { StudyUnit, Flashcard, QuizQuestion } from './types';

export const STUDY_UNITS: StudyUnit[] = [
  {
    id: 'unit1',
    number: 1,
    title: 'Core Rules & Responsibilities',
    description: 'Fundamental regulations, jurisdiction, and roles of the Pilot-in-Command (PIC).',
    annex: 'Annex 2',
    topic: 'annex2',
    keyPoints: [
      {
        term: 'Territorial Application',
        definition: 'Rules of the Air apply to aircraft bearing nationality and registration marks of a Contracting State, wherever they fly, provided they do not conflict with the territorial State rules. Over the High Seas, rules apply without exception.',
        ruleRef: 'Annex 2, 2.1'
      },
      {
        term: 'Responsibility of PIC',
        definition: 'Responsible for the operation of the aircraft in accordance with the Rules of the Air. The PIC may only depart from Rules when absolutely necessary in the interests of safety.',
        ruleRef: 'Annex 2, 2.3.1'
      },
      {
        term: 'Authority of PIC',
        definition: 'The PIC has final authority as to the disposition of the aircraft while in command.',
        ruleRef: 'Annex 2, 2.4'
      },
      {
        term: 'Pre-flight Action',
        definition: 'For flights away from the vicinity of an aerodrome, and all IFR flights, PIC must carefully study current weather, fuel requirements, and alternative course plans if flight cannot be completed.',
        ruleRef: 'Annex 2, 2.3.2'
      },
      {
        term: 'Psychoactive Substances',
        definition: 'No person whose function is critical to flight safety shall work while under influence of alcohol, opioids, cannabinoids, sedatives, or other drugs. No problematic use is permitted.',
        ruleRef: 'Annex 2, 2.5'
      },
      {
        term: 'Negligent or Reckless flight',
        definition: 'An aircraft must NOT be operated in a negligent or reckless manner so as to endanger life or property of others.',
        ruleRef: 'Annex 2, 3.1.1'
      }
    ],
    detailedItems: [
      {
        title: 'Rules Jurisdiction & Dual Compliance (Rule 2.1 & 2.2)',
        text: 'The rules of the air apply to all flights conducted within controlled and uncontrolled airspaces. When in flight, aircraft must comply with either the Visual Flight Rules (VFR) or Instrument Flight Rules (IFR). A pilot can elect to switch or standardly operate under IFR if appropriate.',
        ruleRef: 'Annex 2, 2.2'
      },
      {
        title: 'Minimum Altitude Protections (Rule 3.1.2)',
        text: 'Except when necessary for take-off or landing (or by special permission), aircraft must not fly over congested areas of cities, towns, or settlements, or over an open-air assembly of persons, unless at a height that permits an emergency landing without undue hazard to persons/property on the surface.',
        ruleRef: 'Annex 2, 3.1.2'
      },
      {
        title: 'Dropping, Towing and Parachuting (Rule 3.1.4 - 3.1.6)',
        text: 'Nothing shall be dropped or sprayed from an aircraft in flight, no objects/aircraft shall be towed, and no parachute descents (other than emergency) shall be made unless prescribed by the appropriate authority and indicated by relevant ATC unit clearance.',
        ruleRef: 'Annex 2, 3.1.4'
      }
    ]
  },
  {
    id: 'unit2',
    number: 2,
    title: 'Avoidance of Collisions & Right of Way',
    description: 'Aircraft proximity, heading adjustments, and right-of-way hierarchies on flight and ground paths.',
    annex: 'Annex 2',
    topic: 'annex2',
    keyPoints: [
      {
        term: 'Vigilance & Watch',
        definition: 'Vigilance for the purpose of detecting potential collisions is required on board at all times, regardless of the class of airspace or flight rules.',
        ruleRef: 'Annex 2, 3.2'
      },
      {
        term: 'Right-of-Way general principle',
        definition: 'The aircraft that has the right-of-way MUST maintain both its heading and speed.',
        ruleRef: 'Annex 2, 3.2.2'
      },
      {
        term: 'Overtaking Angle',
        definition: 'An overtaking aircraft is defined as one approaching another from the rear on a line forming an angle of less than 70 degrees with the plane of symmetry of the latter. The aircraft being overtaken has the right-of-way.',
        ruleRef: 'Annex 2, 3.2.2.4'
      },
      {
        term: 'Converging Categories',
        definition: 'When two aircraft converge at the same level, the craft having the other on its right must give way. Power-driven heavier-than-air aircraft MUST give way to airships, gliders, and balloons.',
        ruleRef: 'Annex 2, 3.2.2.3'
      },
      {
        term: 'Head-On Approach',
        definition: 'When two aircraft approach head-on or approximately so, each aircraft must alter its heading to the right.',
        ruleRef: 'Annex 2, 3.2.2.2'
      },
      {
        term: 'Landing Priority',
        definition: 'Aircraft in flight, or operating on the ground/water, must give way to aircraft landing or in the final stages of landing. Between two approaching aircraft, the lower level has priority, but must not abuse it to cut in.',
        ruleRef: 'Annex 2, 3.2.2.5'
      }
    ],
    detailedItems: [
      {
        title: 'Right-of-Way Hierarchy (Rule 3.2.2.3)',
        text: 'To avoid conflicts, there is a strict category hierarchy where less maneuverable craft are given the right of way:',
        list: [
          'Balloons have priority over all other categories.',
          'Gliders have priority over airships and power-driven aircraft.',
          'Airships have priority over power-driven aircraft.',
          'Power-driven aircraft must give way to aircraft towing other objects.'
        ],
        ruleRef: 'Annex 2, 3.2.2.3'
      },
      {
        title: 'Toting and Ground Movements (Rule 3.2.2.6 & 3.2.2.7)',
        text: 'On the ground, an aircraft taxiing on the maneuvering area must give way to aircraft taking off or about to take off. When taxiing aircraft face collision hazards, head-on craft must stop or alter course to the right; converging craft yield to the right; and overtaken craft maintain priority while passing craft stay clear.',
        ruleRef: 'Annex 2, 3.2.2.7'
      }
    ]
  },
  {
    id: 'unit3',
    number: 3,
    title: 'VMC Minima & Airspace Classes',
    description: 'Visual Meteorological Conditions rules, visibility parameters, and cloud separation limits.',
    annex: 'Annex 2',
    topic: 'annex2',
    keyPoints: [
      {
        term: 'VFR Prohibited Areas',
        definition: 'VFR flights are strictly prohibited in Class A airspace, above FL 200 (unless authorized), or at transonic/supersonic speeds.',
        ruleRef: 'Annex 2, 4.4 & 4.8'
      },
      {
        term: 'Visibility Above 3050 m (10k ft)',
        definition: 'The minimum flight visibility is 8 km. Cloud separation must be at least 1,500 m horizontally and 300 m (1,000 ft) vertically.',
        ruleRef: 'Annex 2, Table 3-1'
      },
      {
        term: 'Visibility Below 3050 m (10k ft)',
        definition: 'Down to 900 m (3,000 ft) AMSL or 300 m above terrain: flight visibility minimum is 5 km. Cloud separation remains 1,500 m horizontal & 300 m (1,000 ft) vertical.',
        ruleRef: 'Annex 2, Table 3-1'
      },
      {
        term: 'Low Altitude Minima (Classes F & G)',
        definition: 'At and below 900 m (3,000 ft) AMSL or 300 m above terrain: in Airspace Classes F and G, minimum flight visibility is 5 km (or standard 1.5 km by ATC), clear of cloud and with the surface in sight.',
        ruleRef: 'Annex 2, Table 3-1'
      },
      {
        term: 'Airport Take-off VMC Minima',
        definition: 'Unless cleared as a Special VFR, aircraft shall not take off or land under VFR at an aerodrome in a control zone if: 1. Ceiling is less than 450 m (1,500 ft); or 2. Ground visibility is less than 5 km.',
        ruleRef: 'Annex 2, 4.2'
      }
    ],
    detailedItems: [
      {
        title: 'VMC Visibility and Cloud Minima Table',
        text: 'Table 3-1 establishes critical meteorological benchmarks that ensure eye-contact safety:',
        list: [
          'Altitude >= 3050 m AMSL (Classes B C D E F G): Vis 8 km | Cloud: 1500m horiz, 300m vert',
          'Altitude < 3050 m and > 900 m AMSL (Classes B C D E F G): Vis 5 km | Cloud: 1500m horiz, 300m vert',
          'At and below 900 m AMSL (Classes B C D E): Vis 5 km | Cloud: 1500m horiz, 300m vert',
          'At and below 900 m AMSL (Classes F G): Vis 5 km | Cloud: Clear of cloud, surface in sight'
        ],
        ruleRef: 'Annex 2, Table 3-1'
      },
      {
        title: 'Lowest VFR Settle Heights (Rule 4.6)',
        text: 'Except when necessary for landing/takeoff, VFR flights must stay at least 300 m (1,000 ft) above the highest obstacle within a 600 m radius over congested areas. Elsewhere, they must stay at least 150 m (500 ft) above ground or water.',
        ruleRef: 'Annex 2, 4.6'
      }
    ]
  },
  {
    id: 'unit4',
    number: 4,
    title: 'Flight Plans & Communications',
    description: 'Submission deadlines, time synchronization, and emergency communication failure operations.',
    annex: 'Annex 2',
    topic: 'annex2',
    keyPoints: [
      {
        term: 'Flight Plan Submission',
        definition: 'Must be submitted before departure (normally 60 minutes) for any flight to be provided with ATC or advisory service. If submitted in-flight, submit at least 10 minutes prior to estimated entry into controlled areas.',
        ruleRef: 'Annex 2, 3.3.1.4'
      },
      {
        term: 'Time Reference (UTC)',
        definition: 'Coordinated Universal Time (UTC) must be used, expressed in hours and minutes of the 24-hour day starting at midnight. Data link times must be accurate within 1 second.',
        ruleRef: 'Annex 2, 3.5'
      },
      {
        term: 'Inadvertent Speed Deviation',
        definition: 'If average true airspeed at cruising level varies or is expected to vary by ±5% of that given in the flight plan, the appropriate ATS unit must be informed.',
        ruleRef: 'Annex 2, 3.6.2.2 (b)'
      },
      {
        term: 'Inadvertent Time Deviation',
        definition: 'Any change in time estimate for the next reporting point, FIR boundary, or destination airport exceeding 2 minutes must be reported immediately.',
        ruleRef: 'Annex 2, 3.6.2.2 (c)'
      },
      {
        term: 'Comm Failure in VMC',
        definition: 'If in visual meteorological conditions, the aircraft must continue to fly in VMC, land at the nearest suitable aerodrome, and report its arrival by the quickest means.',
        ruleRef: 'Annex 2, 3.6.5.2.1'
      },
      {
        term: 'Comm Failure in IMC (IFR)',
        definition: 'If in IMC, maintain last assigned speed/level for 20 minutes (7 minutes if in radar airspace) after failure, then adjust to the filed flight plan, proceed to navigational aid, hold until expected descent time (EAT), and land within 30 mins.',
        ruleRef: 'Annex 2, 3.6.5.2.2'
      }
    ],
    detailedItems: [
      {
        title: 'Flight Plan Changes & Reporting (Rule 3.3.4 & 3.6.2)',
        text: 'Adherence to the current flight plan is mandatory. However, if inadvertent deviations exist, pilots must immediately adjust controls. When requesting intended route/cruising Level changes, updated estimates and alternative destinations must be supplied to the controller.',
        ruleRef: 'Annex 2, 3.6.2'
      },
      {
        title: 'Position Reporting Intervals (Rule 3.6.3)',
        text: 'A controlled flight shall report to the ATS unit the time and level of passing each designated compulsory reporting point, unless exempted. Voice reports on automated data-linked ADS flights are only provided when explicitly asked.',
        ruleRef: 'Annex 2, 3.6.3'
      }
    ]
  },
  {
    id: 'unit5',
    number: 5,
    title: 'Visual Airfield Signals & Marshalling',
    description: 'Tower light guns, ground signal panels, and standard marshalling gestures.',
    annex: 'Annex 2',
    topic: 'annex2',
    keyPoints: [
      {
        term: 'Light Gun: Steady Green',
        definition: 'In Flight: Cleared to land. On Ground: Cleared for take-off.',
        ruleRef: 'Appendix 1, 4.1.1'
      },
      {
        term: 'Light Gun: Steady Red',
        definition: 'In Flight: Give way to other aircraft and continue circling. On Ground: STOP.',
        ruleRef: 'Appendix 1, 4.1.1'
      },
      {
        term: 'Light Gun: Flashing Green',
        definition: 'In Flight: Return for landing (clearance will be in due course). On Ground: Cleared to taxi.',
        ruleRef: 'Appendix 1, 4.1.1'
      },
      {
        term: 'Light Gun: Flashing Red',
        definition: 'In Flight: Aerodrome unsafe, do not land. On Ground: Taxi clear of landing area in use.',
        ruleRef: 'Appendix 1, 4.1.1'
      },
      {
        term: 'Light Gun: Flashing White',
        definition: 'In Flight: Land at this aerodrome and proceed to apron. On Ground: Return to starting point on the aerodrome.',
        ruleRef: 'Appendix 1, 4.1.1'
      },
      {
        term: 'Visual: Red Square + 2 Yellow Diagonals',
        definition: 'Displayed in aerodrome signal area: Landings are prohibited and the prohibition is likely to be prolonged.',
        ruleRef: 'Appendix 1, 4.2.1'
      },
      {
        term: 'Visual: White Dumb-bell',
        definition: 'Displayed in signal area: Movement on runways and taxiways ONLY is permitted.',
        ruleRef: 'Appendix 1, 4.2.3.1'
      }
    ],
    detailedItems: [
      {
        title: 'Red Pyrotechnic Signal (Rule 4.1.1)',
        text: 'A red pyrotechnic flare fired towards an aircraft in flight means: "Notwithstanding any previous instructions, do not land for the time being."',
        ruleRef: 'Appendix 1, 4.1.1'
      },
      {
        title: 'Ground Signboard Markings',
        text: 'Other visual indicators to aid grounding pilots include:',
        list: [
          'Red square + 1 yellow diagonal: bad state of maneuvering area, special landing precautions required.',
          'White dumb-bell + black perpendicular bars across circular ends: landing and takeoff on runways only, taxi need not be confined.',
          'Large yellow or white cross (X) displayed on runway/taxiway: area unfit for movement of aircraft (closed).',
          'Horizontal landing (T): parallel to shaft towards cross arm defines landing or takeoff direction.',
          'Double white cross: Glider flights are actively in progress.'
        ],
        ruleRef: 'Appendix 1, 4.2'
      }
    ]
  },
  {
    id: 'unit6',
    number: 6,
    title: 'Pilot Licences & Age Limits',
    description: 'Aviation licence tiers (PPL, CPL, ATPL, Glider, Free Balloon), rating requirements, and age caps.',
    annex: 'Annex 1',
    topic: 'annex1',
    keyPoints: [
      {
        term: 'PPL Age Criterion',
        definition: 'An applicant for a Private Pilot Licence (aeroplane, airship, helicopter, or powered-lift) shall be not less than 17 years of age.',
        ruleRef: 'Annex 1, 2.3.1.1'
      },
      {
        term: 'CPL Age Criterion',
        definition: 'An applicant for a Commercial Pilot Licence shall be not less than 18 years of age.',
        ruleRef: 'Annex 1, 2.4.1.1'
      },
      {
        term: 'ATPL Age Criterion',
        definition: 'An applicant for an Airline Transport Pilot Licence shall be not less than 21 years of age.',
        ruleRef: 'Annex 1, 2.6.1.1'
      },
      {
        term: 'Glider & Balloon Age',
        definition: 'An applicant for either a Glider Pilot Licence or a Free Balloon Pilot Licence shall be not less than 16 years of age.',
        ruleRef: 'Annex 1, 2.9.1.1 & 2.10.1.1'
      },
      {
        term: 'Age Limit over 60 (Single)',
        definition: 'A pilot cannot act as PIC of an aircraft engaged in international commercial transport if they have passed their 60th birthday (for single-pilot crews).',
        ruleRef: 'Annex 1, 2.1.10.1'
      },
      {
        term: 'Age Limit over 65 (Multi-Crew)',
        definition: 'For commercial multi-crew flights, a pilot who has passed their 60th birthday but is under 65 may act as PIC, provided the other pilot is younger than 60 years of age. All operations are halted upon the 65th birthday.',
        ruleRef: 'Annex 1, 2.1.10.1'
      },
      {
        term: 'Instrument Flight Rules requirement',
        definition: 'A pilot shall not act as PIC or co-pilot under Instrument Flight Rules (IFR) unless they hold a valid Instrument Rating (IR) appropriate to the aircraft category.',
        ruleRef: 'Annex 1, 2.1.7'
      }
    ],
    detailedItems: [
      {
        title: 'Core Licence Requirements (Rule 2.1.1.3)',
        text: 'Before being issued any pilot licence or rating, an applicant must meet all standardized requirements for age, knowledge, experience, flight instruction, skill, and medical fitness. Licences and ratings must be endorsed appropriately.'
      },
      {
        title: 'Single-Pilot vs Multi-Pilot Age Cap Policy (Rule 2.1.10)',
        text: 'To manage sudden medical risks in commercial skies, ICAO enforces age limitations on international commercial transport routes carrying passengers, mail, or cargo:',
        list: [
          'Under 60 Years: Eligible as PIC for all commercial operations.',
          '60 to 64 Years (Single-Crew): Prohibited from acting as PIC.',
          '60 to 64 Years (Multi-Crew): May act as PIC provided the co-pilot is younger than 60 years of age.',
          '65 Years & Above: Prohibited from acting as either PIC or co-pilot in any commercial air transport flight.'
        ],
        ruleRef: 'Annex 1, 2.1.10'
      },
      {
        title: 'Private Pilot Licence Night Flying Restriction (Rule 2.3.2.2)',
        text: 'Before exercising PPL privileges at night, the licence holder must have received dual instruction in aircraft within the appropriate category in night flying, including take-off, landing, and navigation.',
        ruleRef: 'Annex 1, 2.3.2.2'
      }
    ]
  },
  {
    id: 'unit7',
    number: 7,
    title: 'Medical Assessment Classes & Validity',
    description: 'Class 1, 2, and 3 medical assessments, evaluation protocols, and age-reduced expiration cycles.',
    annex: 'Annex 1',
    topic: 'annex1',
    keyPoints: [
      {
        term: 'Class 1 Medical Assessment',
        definition: 'Applies to applicants for, and holders of, Commercial Pilot, Multi-crew Pilot, and Airline Transport Pilot licences.',
        ruleRef: 'Annex 1, 6.1.1.a'
      },
      {
        term: 'Class 2 Medical Assessment',
        definition: 'Applies to Flight Navigators, Flight Engineers, Private Pilots, Glider Pilots, and Free Balloon Pilots.',
        ruleRef: 'Annex 1, 6.1.1.b'
      },
      {
        term: 'Class 3 Medical Assessment',
        definition: 'Applies to applicants for, and holders of, Air Traffic Controller licences.',
        ruleRef: 'Annex 1, 6.1.1.c'
      },
      {
        term: 'Class 1 Validity Cycle',
        definition: 'Standard validity period of a Class 1 Medical is 12 months, reduced to 6 months for single-pilot commercial transport over age 40, or over age 60 in multi-pilot transport.',
        ruleRef: 'Annex 1, 1.2.5.2'
      },
      {
        term: 'Class 2 Validity Cycle',
        definition: 'Standard validity period is 60 months. Reduced to 24 months once the holder passes their 40th birthday, and to 12 months once they exceed their 50th birthday.',
        ruleRef: 'Annex 1, 1.2.5.2'
      },
      {
        term: 'Class 3 Validity Cycle',
        definition: 'Standard validity period of a Class 3 Medical is 48 months, with periodic age-based triggers depending on structural State regulations.',
        ruleRef: 'Annex 1, 1.2.5.2'
      },
      {
        term: 'Accredited Medical Conclusion',
        definition: 'Allows the issue or renewal of a licence to an applicant who fail to meet numeric standards if a conclusion indicates flight safety is unlikely to be jeopardized.',
        ruleRef: 'Annex 1, 1.2.4.8'
      }
    ],
    detailedItems: [
      {
        title: 'Aviation Medical Declarations & Auditing (Rule 1.2.4.5 & 1.2.4.7)',
        text: 'Applicants must sign and furnish to the medical examiner a declaration stating whether they have previously undergone a medical exam, and its outcome (including refusals, suspensions, or revocations). Contracting States use Medical Assessors to audit reports and ensure uniform diagnostic safety.'
      },
      {
        title: 'Safety Decreases & Pregnancy Guidelines (Rule 1.2.6 & 1.2.6.1.1)',
        text: 'Licence holders shall not exercise privileges when aware of any decrease in medical fitness. It is recommended that they inform the Authority in writing of any confirmed pregnancy or any illness/injury exceeding 20 days.',
        ruleRef: 'Annex 1, 1.2.6'
      },
      {
        title: 'Strict Medical Expirations Table (Rule 1.2.5.2)',
        text: 'Medical assessments must remain current. Validity countdown starts on the day of the examination and cannot exceed:',
        list: [
          'Commercial / Airline Pilots (Class 1): 12 months (6 months if single-pilot PIC is 40+, or multi-pilot PIC is 60+)',
          'Private / Glider / Balloon Pilots (Class 2): 60 months (24 months if 40+, 12 months if 50+)',
          'Air Traffic Controllers (Class 3): 48 months'
        ],
        ruleRef: 'Annex 1, 1.2.5.2'
      }
    ]
  },
  {
    id: 'unit8',
    number: 8,
    title: 'Language Proficiency & ATC Ratings',
    description: 'Language proficiency scale, evaluation intervals, and Air Traffic Controller licensing standards.',
    annex: 'Annex 1',
    topic: 'annex1',
    keyPoints: [
      {
        term: 'Operational Level (Level 4)',
        definition: 'The minimum required language proficiency standard for radiotelephony communications, covering both phraseologies and plain language.',
        ruleRef: 'Annex 1, App 1'
      },
      {
        term: 'Level 4 Evaluation Interval',
        definition: 'Speakers demonstrating Level 4 proficiency must be formally re-evaluated at least once every 3 years.',
        ruleRef: 'Annex 1, 1.2.9.7'
      },
      {
        term: 'Level 5 Evaluation Interval',
        definition: 'Speakers demonstrating Level 5 (Extended) proficiency must be formally re-evaluated at least once every 6 years.',
        ruleRef: 'Annex 1, 1.2.9.7'
      },
      {
        term: 'Level 6 Evaluation Interval',
        definition: 'Speakers demonstrating Level 6 (Expert) proficiency are exempt from formal periodic re-evaluation.',
        ruleRef: 'Annex 1, 1.2.9.7'
      },
      {
        term: 'ATCO Age Criterion',
        definition: 'An applicant for an Air Traffic Controller (ATCO) licence shall be not less than 21 years of age.',
        ruleRef: 'Annex 1, 4.4.1.1'
      },
      {
        term: 'ATCO Categories of Ratings',
        definition: 'Includes Aerodrome, Approach (procedural & surveillance), Precision Radar, and Area (procedural & surveillance) control ratings.',
        ruleRef: 'Annex 1, 4.5.1'
      },
      {
        term: 'Controller Rating Expiration',
        definition: 'An air traffic controller rating becomes invalid if the controller ceases to exercise its associated privileges for a period exceeding 6 months.',
        ruleRef: 'Annex 1, 4.5.3.4'
      }
    ],
    detailedItems: [
      {
        title: 'Radiotelephony Language Competencies (Rule 1.2.9 & Appendix 1)',
        text: 'Aeroplane, airship, helicopter, and powered-lift pilots, flight navigators, and air traffic controllers must speak and understand the language used for radiotelephony communications. The evaluation measures pronunciation, structure, vocabulary, fluency, comprehension, and interactive exchanges.'
      },
      {
        title: 'Air Traffic Controller Ratings Definitions (Rule 4.5.1)',
        text: 'A controller licence is only active in conjunction with valid ratings, which establish specific local jurisdiction:',
        list: [
          'Aerodrome Control Rating: Provide control services specifically for aerodrome traffic.',
          'Approach Control Procedural: Provide approach services without utilizing radar/surveillance systems.',
          'Approach Control Surveillance: Provide approach control utilizing surveillance systems (ADS-B, SSR, PSR).',
          'Area Control Procedural: Provide regional en-route control procedural services.',
          'Area Control Surveillance: Provide regional en-route control using surveillance tracking.'
        ],
        ruleRef: 'Annex 1, 4.5.1'
      }
    ]
  }
];

export const FLASHCARDS: Flashcard[] = [
  // Unit 1
  {
    id: 'fc1',
    unitId: 'unit1',
    front: 'Where do the ICAO Rules of the Air apply without exception?',
    back: 'Over the High Seas.',
    ruleRef: 'Annex 2, 2.1.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc2',
    unitId: 'unit1',
    front: 'Under what condition may a Pilot-in-Command (PIC) depart from the rules of the air?',
    back: 'Only in circumstances that render such departure absolutely necessary in the interests of safety.',
    ruleRef: 'Annex 2, 2.3.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc3',
    unitId: 'unit1',
    front: 'What are the two flights rules under which an aircraft may operate?',
    back: 'Visual Flight Rules (VFR) and Instrument Flight Rules (IFR).',
    ruleRef: 'Annex 2, 2.2',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc4',
    unitId: 'unit1',
    front: 'Who has final authority as to the disposition of an aircraft in flight?',
    back: 'The Pilot-in-Command (PIC).',
    ruleRef: 'Annex 2, 2.4',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  // Unit 2
  {
    id: 'fc5',
    unitId: 'unit2',
    front: 'When two aircraft are on a head-on collision course, what action should each take?',
    back: 'Each aircraft must alter its course to the right.',
    ruleRef: 'Annex 2, 3.2.2.2',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc6',
    unitId: 'unit2',
    front: 'In what sector angle relative to a leading craft is an overtaking aircraft defined?',
    back: 'Approaching from the rear on a line forming an angle of less than 70 degrees from the plane of symmetry of the leading craft.',
    ruleRef: 'Annex 2, 3.2.2.4',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc7',
    unitId: 'unit2',
    front: 'When two aircraft are converging, which craft must give way?',
    back: 'The aircraft that has the other on its right side must give way.',
    ruleRef: 'Annex 2, 3.2.2.3',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc8',
    unitId: 'unit2',
    front: 'Which category has priority: gliders or airships?',
    back: 'Gliders. In the category hierarchy, gliders have priority over both airships and power-driven aircraft.',
    ruleRef: 'Annex 2, 3.2.2.3',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc9',
    unitId: 'unit2',
    front: 'What warning signal does a series of green and red projectiles fired at 10-second intervals represent?',
    back: 'Indicates to an unauthorized aircraft that it is flying in or about to enter a restricted, prohibited or danger area, and must take immediate diagnostic action.',
    ruleRef: 'Appendix 1, 3',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  // Unit 3
  {
    id: 'fc10',
    unitId: 'unit3',
    front: 'What is the required flight visibility above 3,050 m (10,000 ft) AMSL for VFR flight?',
    back: '8 km visibility.',
    ruleRef: 'Table 3-1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc11',
    unitId: 'unit3',
    front: 'What are the cloud separation distances above 900 m (3,000 ft) AMSL under VFR?',
    back: 'At least 1,500 m horizontally and 300 m (1,000 ft) vertically away from clouds.',
    ruleRef: 'Table 3-1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc12',
    unitId: 'unit3',
    front: 'In which Airspace Class is VFR flight completely prohibited?',
    back: 'Class A airspace.',
    ruleRef: 'Annex 2, 4.8',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc13',
    unitId: 'unit3',
    front: 'What are the lowest height restrictions for a VFR flight over non-congested areas (ground or water)?',
    back: '150 m (500 ft) altitude.',
    ruleRef: 'Annex 2, 4.6 (b)',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc14',
    unitId: 'unit3',
    front: 'What is the maximum speed permitted for standard VFR flight?',
    back: 'Transonic and supersonic speeds are strictly prohibited unless authorized by the designated authority.',
    ruleRef: 'Annex 2, 4.4 (b)',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  // Unit 4
  {
    id: 'fc15',
    unitId: 'unit4',
    front: 'How long before departure must a flight plan for an ATC-provided flight be submitted?',
    back: 'At least 60 minutes before departure.',
    ruleRef: 'Annex 2, 3.3.1.4',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc16',
    unitId: 'unit4',
    front: 'If a pilot experiences a radio communication failure in visual flight conditions (VMC), what are they required to do?',
    back: 'Continue in VMC, land at the nearest suitable aerodrome, and report arrival by the quickest means.',
    ruleRef: 'Annex 2, 3.6.5.2.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc17',
    unitId: 'unit4',
    front: 'Within what speed margin is an inadvertent true airspeed deviation required to be reported?',
    back: '± 5% of the average true airspeed declared in the flight plan.',
    ruleRef: 'Annex 2, 3.6.2.2 (b)',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc18',
    unitId: 'unit4',
    front: 'What time accuracy is required of avionics utilizing data link communications under UTC guidelines?',
    back: 'Within 1 second of UTC.',
    ruleRef: 'Annex 2, 3.5.3',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  // Unit 5
  {
    id: 'fc19',
    unitId: 'unit5',
    front: 'What does a flashing green light gun signal from an aerodrome tower mean to an aircraft in flight?',
    back: '"Return for landing" (clearance to land will be given in due course).',
    ruleRef: 'Appendix 1, 4.1.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc20',
    unitId: 'unit5',
    front: 'What does a flashing white light gun signal mean to an aircraft on the ground?',
    back: '"Return to starting point on the aerodrome."',
    ruleRef: 'Appendix 1, 4.1.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc21',
    unitId: 'unit5',
    front: 'What does a red pyrotechnic signal represent to an aircraft in flight?',
    back: '"Notwithstanding any previous instructions, do not land for the time being."',
    ruleRef: 'Appendix 1, 4.1.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc22',
    unitId: 'unit5',
    front: 'A horizontal red square with yellow diagonals on the field indicates what?',
    back: 'Landings are prohibited and that the prohibition is liable to be prolonged.',
    ruleRef: 'Appendix 1, 4.2.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'fc23',
    unitId: 'unit5',
    front: 'What does a large white/yellow cross (X) laid flat on a runway represent?',
    back: 'Indicates that the runway or taxiway is closed and unfit for movement of aircraft.',
    ruleRef: 'Appendix 1, 4.2.4',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  // Unit 6 (Annex 1)
  {
    id: 'fc24',
    unitId: 'unit6',
    front: 'What is the minimum age required for a Private Pilot Licence (PPL)?',
    back: '17 years of age.',
    ruleRef: 'Annex 1, 2.3.1.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc25',
    unitId: 'unit6',
    front: 'What is the minimum age required for a Commercial Pilot Licence (CPL)?',
    back: '18 years of age.',
    ruleRef: 'Annex 1, 2.4.1.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc26',
    unitId: 'unit6',
    front: 'What is the minimum age required for an Airline Transport Pilot Licence (ATPL)?',
    back: '21 years of age.',
    ruleRef: 'Annex 1, 2.6.1.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc27',
    unitId: 'unit6',
    front: 'What are the two pilot age limits for international commercial air transport?',
    back: '60 years of age for single-pilot operations as PIC, and 65 years of age for multi-pilot crew en-routes.',
    ruleRef: 'Annex 1, 2.1.10.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc28',
    unitId: 'unit6',
    front: 'Are glider and free balloon pilot licence applicants governed by the same minimum age rule?',
    back: 'Yes, both are designated a minimum age of 16 years.',
    ruleRef: 'Annex 1, 2.9.1.1 & 2.10.1.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  // Unit 7 (Annex 1)
  {
    id: 'fc29',
    unitId: 'unit7',
    front: 'Which Medical Assessment is required for ATPL and CPL pilot licences?',
    back: 'Class 1 Medical Assessment.',
    ruleRef: 'Annex 1, 6.1.1.a',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc30',
    unitId: 'unit7',
    front: 'Which Medical Assessment is required for PPL, Glider, and Free Balloon pilots?',
    back: 'Class 2 Medical Assessment.',
    ruleRef: 'Annex 1, 6.1.1.b',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc31',
    unitId: 'unit7',
    front: 'Which Medical Assessment must air traffic controllers hold?',
    back: 'Class 3 Medical Assessment.',
    ruleRef: 'Annex 1, 4.3.2 & 6.1.1.c',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc32',
    unitId: 'unit7',
    front: 'What is the standard validity period for a Private Pilot (Class 2) Medical?',
    back: '60 months, reduced to 24 months after age 40, and 12 months after age 50.',
    ruleRef: 'Annex 1, 1.2.5.2',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc33',
    unitId: 'unit7',
    front: 'When is a Class 1 Medical validity reduced from 12 months to 6 months?',
    back: 'For single-pilot commercial operations when the pilot exceeds 40 years of age, or over age 60 for multi-pilot en-routes.',
    ruleRef: 'Annex 1, 1.2.5.2',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  // Unit 8 (Annex 1)
  {
    id: 'fc34',
    unitId: 'unit8',
    front: 'What is the minimum language standard for radiotelephony communications called?',
    back: 'Level 4 (Operational Level) proficiency on the holistic scale.',
    ruleRef: 'Annex 1, Appendix 1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc35',
    unitId: 'unit8',
    front: 'How often must a pilot with Level 4 language proficiency be formally re-evaluated?',
    back: 'At least once every 3 years.',
    ruleRef: 'Annex 1, 1.2.9.7',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc36',
    unitId: 'unit8',
    front: 'How often must a Level 5 (Extended) pilot represent language proficiency tests?',
    back: 'At least once every 6 years.',
    ruleRef: 'Annex 1, 1.2.9.7',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc37',
    unitId: 'unit8',
    front: 'What is the minimum age required to apply for an Air Traffic Controller licence?',
    back: '21 years of age.',
    ruleRef: 'Annex 1, 4.4.1.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'fc38',
    unitId: 'unit8',
    front: 'How long can an air traffic controller rating remain unused before becoming invalid?',
    back: 'Not exceeding 6 months.',
    ruleRef: 'Annex 1, 4.5.3.4',
    annex: 'Annex 1',
    topic: 'annex1'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Unit 1
  {
    id: 'q1',
    unitId: 'unit1',
    question: 'Where do the International Standards (Rules of the Air) apply without exception?',
    options: [
      'Over all land areas of contracting states only',
      'Over the High Seas only',
      'Over the High Seas, as well as over territories except where they conflict with national rules',
      'Only within major controlled terminal zones'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 2, Section 2.1. Over the high seas, standard rules apply without exception, and they also apply over contracting states unless there is an active local conflict or sovereign state exception.',
    ruleRef: 'Annex 2, 2.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q2',
    unitId: 'unit1',
    question: 'Under what condition is the Pilot-in-Command (PIC) authorized to depart from standard rules of the air?',
    options: [
      'Whenever requested by passengers',
      'In circumstances that render such departure absolutely necessary in the interests of safety',
      'Over international waters where ATC cannot be contacted',
      'To expedite takeoff during visual meteorological slots'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 2, Section 2.3.1. The PIC are solely responsible, but they can depart from these rules in emergency circumstances where safety is threatened.',
    ruleRef: 'Annex 2, 2.3.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q3',
    unitId: 'unit1',
    question: 'Which of the following does pre-flight action away from the vicinity of an aerodrome require?',
    options: [
      'A study of aircraft manufacturer stock listing',
      'Registration with local municipal authorities',
      'Careful study of current weather reports, forecasts, fuel requirements, and alternative plans',
      'Obtaining custom license approvals from each state overflown'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 2, Section 2.3.2. Pre-flight actions require careful weather parsing, fuel auditing, and alternative navigation planning should the target destination close.',
    ruleRef: 'Annex 2, 2.3.2',
    annex: 'Annex 2',
    topic: 'annex2'
  },

  // Unit 2
  {
    id: 'q4',
    unitId: 'unit2',
    question: 'An overtaking aircraft is defined as one that approaches another from the rear on a line forming an angle of less than how many degrees with the plane of symmetry of the latter?',
    options: [
      '45 degrees',
      '60 degrees',
      '70 degrees',
      '90 degrees'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 2, Section 3.2.2.4. Under the angle definitions, overtaking is strictly any rear sector path forming an angle of less than 70 degrees.',
    ruleRef: 'Annex 2, 3.2.2.4',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q5',
    unitId: 'unit2',
    question: 'If two power-driven aircraft are converging at approximately the same level, which aircraft has the right-of-way?',
    options: [
      'The lighter aircraft',
      'The aircraft that has the other on its left',
      'The aircraft that has the other on its right',
      'The aircraft flying at the faster velocity'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 2, Section 3.2.2.3. The craft that has the other on its right must give way, implying the craft that has the other on its left has the right-of-way.',
    ruleRef: 'Annex 2, 3.2.2.3',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q6',
    unitId: 'unit2',
    question: 'When two aircraft are approaching head-on or approximately so, what steering action must each pilot apply?',
    options: [
      'Climb by 500 feet to establish high vertical clear',
      'Alter heading to the right',
      'Alter heading to the left',
      'Execute a left-hand 360-degree orbit line'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 2, Section 3.2.2.2. Head-on avoidance mandates both craft must alter their heading to the right side.',
    ruleRef: 'Annex 2, 3.2.2.2',
    annex: 'Annex 2',
    topic: 'annex2'
  },

  // Unit 3
  {
    id: 'q7',
    unitId: 'unit3',
    question: 'What is the required VMC flight visibility for VFR flight operating at/above 3,050 m (10,000 ft) AMSL?',
    options: [
      '5 km flight visibility',
      '8 km flight visibility',
      '10 km flight visibility',
      '1.5 km flight visibility'
    ],
    correctIndex: 1,
    explanation: 'Ref: Table 3-1. At or above 10,000 feet, faster true speeds dictate VMC visibility minimum increases from 5 km to 8 km.',
    ruleRef: 'Table 3-1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q8',
    unitId: 'unit3',
    question: 'VFR flights over congested areas or open-air assemblies of people must maintain what minimum height?',
    options: [
      '150 m (500 ft) above ground or water',
      '300 m (1,000 ft) above the highest obstacle within a radius of 600 m from the aircraft',
      '450 m (1,500 ft) flat height',
      '600 m (2,000 ft) level above sea level'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 2, Section 4.6 (a). VFR safety limits mandate 300 m (1,000 ft) above the tallest obstacle within 600 m radius over congested urban places.',
    ruleRef: 'Annex 2, 4.6',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q9',
    unitId: 'unit3',
    question: 'VFR flights are strictly prohibited in which class of airspace?',
    options: [
      'Class A airspace only',
      'Class C and G airspace',
      'All airspaces below Transition Altitude',
      'Class E and F airspaces'
    ],
    correctIndex: 0,
    explanation: 'Ref: Annex 2, Section 4.8. Class A airspace is fully restrictive and reserved exclusively for controlled IFR flights.',
    ruleRef: 'Annex 2, 4.8',
    annex: 'Annex 2',
    topic: 'annex2'
  },

  // Unit 4
  {
    id: 'q10',
    unitId: 'unit4',
    question: 'If a pilot experiences a radio communication failure while operating in visual flight conditions (VMC), the pilot must:',
    options: [
      'Climb above FL 150 and deploy transponder code 7500',
      'Apply continuous blind voice transmissions over frequency 121.5 MHz',
      'Continue flight in VMC, land at the nearest suitable aerodrome, and report arrival to ATS',
      'Switch immediately to IFR flight procedures and route to destination'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 2, Section 3.6.5.2.1. In visual conditions, safety is preserved by continuing in visual range, executing landing at the closest suitable airport, and calling the tower upon grounding.',
    ruleRef: 'Annex 2, 3.6.5.2.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q11',
    unitId: 'unit4',
    question: 'Under what threshold is a change in the average true airspeed given in the flight plan required to be notified to ATS?',
    options: [
      'Any change exceeding ±2%',
      'Any change exceeding ±5%',
      'Any change exceeding ±10%',
      'Speed deviations are not reported if within radar contact'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 2, Section 3.6.2.2 (b). Speeds variation of ±5% or more requires alert notification to ground controllers to prevent block routing separation issues.',
    ruleRef: 'Annex 2, 3.6.2.2',
    annex: 'Annex 2',
    topic: 'annex2'
  },

  // Unit 5
  {
    id: 'q12',
    unitId: 'unit5',
    question: 'What does a steady red light gun signal from the tower indicate to an aircraft in flight?',
    options: [
      'Cleared to land but expect crosswinds',
      'Give way to other aircraft and continue circling',
      'Aerodrome unsafe, do not land at all',
      'Return to starting point on ground'
    ],
    correctIndex: 1,
    explanation: 'Ref: Appendix 1, 4.1.1. A steady red signal aimed at a flying plane means the runway is blocked or another craft has right of way; continue circling.',
    ruleRef: 'Appendix 1, 4.1.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q13',
    unitId: 'unit5',
    question: 'To an aircraft on the ground, what does a flashing green light gun signal indicate?',
    options: [
      'Cleared for take-off',
      'STOP immediately',
      'Cleared to taxi',
      'Return to beginning point of aerodrome'
    ],
    correctIndex: 2,
    explanation: 'Ref: Appendix 1, 4.1.1. On the ground, flashing green is the standard clearance signal allowing taxi movements.',
    ruleRef: 'Appendix 1, 4.1.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },
  {
    id: 'q14',
    unitId: 'unit5',
    question: 'What does a horizontal white dumb-bell (the dumb-bell visual signal) displayed in a signal area represent?',
    options: [
      'Glider operations are occurring on the runway',
      'Takeoffs and landings are prohibited',
      'Aircraft are required to land, take off and taxi on runways and taxiways ONLY',
      'Closed runway intersection alerts'
    ],
    correctIndex: 2,
    explanation: 'Ref: Appendix 1, 4.2.3.1. The white dumb-bell tells pilots that ground navigation is restricted strictly to paved runways and marked taxiways due to soft ground or grass conditions.',
    ruleRef: 'Appendix 1, 4.2.3.1',
    annex: 'Annex 2',
    topic: 'annex2'
  },

  // Unit 6 (Annex 1)
  {
    id: 'q15',
    unitId: 'unit6',
    question: 'According to ICAO Annex 1, an applicant for an Airline Transport Pilot Licence (ATPL) shall be at least what age?',
    options: [
      '17 years of age',
      '18 years of age',
      '21 years of age',
      '25 years of age'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 1, 2.6.1.1. Standard regulations state ATPL applicants must be not less than 21 years of age. PPL is 17, CPL is 18.',
    ruleRef: 'Annex 1, 2.6.1.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'q16',
    unitId: 'unit6',
    question: 'Under age restrictions, a pilot who has passed which birthday is prohibited from acting as pilot-in-command of an international commercial passenger transport single-pilot aircraft?',
    options: [
      '50th birthday',
      '55th birthday',
      '60th birthday',
      '65th birthday'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 1, 2.1.10.1. Licence holders are prohibited from acting as PIC in single-pilot commercial transport operations once they reach their 60th birthday.',
    ruleRef: 'Annex 1, 2.1.10.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'q17',
    unitId: 'unit6',
    question: 'Under multi-pilot crew conditions, what is the absolute critical age ceiling beyond which no pilot may act as PIC/co-pilot in commercial air transport?',
    options: [
      '60 years of age',
      '62 years of age',
      '65 years of age',
      '70 years of age'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 1, 2.1.10.1. A pilot is restricted from acting as PIC or co-pilot in any commercial air transport operation upon reaching their 65th birthday.',
    ruleRef: 'Annex 1, 2.1.10.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },

  // Unit 7 (Annex 1)
  {
    id: 'q18',
    unitId: 'unit7',
    question: 'Which class of Medical Assessment is specified in Annex 1 for Private Pilot Licences (PPL), Glider, and Free Balloon pilots?',
    options: [
      'Class 1 Medical Assessment',
      'Class 2 Medical Assessment',
      'Class 3 Medical Assessment',
      'Class 4 General Assessment'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 1, 6.1.1. Class 1 applies to commercial/airline pilots, Class 2 to private flying (PPL, gliders, balloons), and Class 3 to ATC controllers.',
    ruleRef: 'Annex 1, 6.1.1.b',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'q19',
    unitId: 'unit7',
    question: 'What is the standard validity period of a Class 1 Medical Assessment?',
    options: [
      '6 months flat',
      '12 months',
      '24 months',
      '60 months'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 1, 1.2.5.2. Standard Class 1 Medical is valid for 12 months. It is reduced to 6 months for single-pilot PIC operations over age 40, or over age 60.',
    ruleRef: 'Annex 1, 1.2.5.2',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'q20',
    unitId: 'unit7',
    question: 'How does the validity of a Class 2 (Private Pilot) Medical Assessment change as the holder ages?',
    options: [
      'Remains 60 months without exception',
      '60 months until age 40, then 24 months until age 50, then 12 months',
      '36 months until age 50, then 12 months thereafter',
      'Reduced to 6 months upon passing their 60th birthday'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 1, 1.2.5.2. Class 2 is valid for 60 months. This is reduced to 24 months once the holder passes their 40th birthday, and to 12 months once they pass their 50th birthday.',
    ruleRef: 'Annex 1, 1.2.5.2',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'q21',
    unitId: 'unit7',
    question: 'Under what mechanism may an applicant who fails to meet numerical medical criteria still be issued or renewed a licence?',
    options: [
      'Special personal appeal to the airline board',
      'An Accredited Medical Conclusion indicating that the exercise of privileges will not jeopardize safety',
      'Applying for a multi-crew limitation regardless of aircraft category',
      'By showing proof of 100+ hours of incident-free autopilot logging'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 1, 1.2.4.8. If an accredited medical conclusion indicates that safety is preserved despite a failure to meet numeric parameters (e.g. slight variance), the assessment can be issued with suitable limitations.',
    ruleRef: 'Annex 1, 1.2.4.8',
    annex: 'Annex 1',
    topic: 'annex1'
  },

  // Unit 8 (Annex 1)
  {
    id: 'q22',
    unitId: 'unit8',
    question: 'What language proficiency level on the ICAO holistic scale represents the minimum operational standard for radiotelephony?',
    options: [
      'Level 2 (Elementary)',
      'Level 4 (Operational Level)',
      'Level 5 (Extended Level)',
      'Level 6 (Expert Level)'
    ],
    correctIndex: 1,
    explanation: 'Ref: Annex 1, Appendix 1. The minimum regulatory benchmark is Level 4 (Operational Level). Level 1-3 are pre-operational, Level 5 is extended, and Level 6 is expert.',
    ruleRef: 'Annex 1, Appendix 1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'q23',
    unitId: 'unit8',
    question: 'How often must a pilot or controller who meets language proficiency at Level 5 (Extended) be re-evaluated?',
    options: [
      'Exempt from periodic re-evaluation',
      'At least once every 3 years',
      'At least once every 6 years',
      'At least once every 10 years'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 1, 1.2.9.7. Level 4 must be evaluated every 3 years. Level 5 must be evaluated every 6 years. Level 6 is exempt from periodic re-evaluation.',
    ruleRef: 'Annex 1, 1.2.9.7',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'q24',
    unitId: 'unit8',
    question: 'An applicant for an Air Traffic Controller (ATCO) licence must be at least what age?',
    options: [
      '18 years of age',
      '19 years of age',
      '21 years of age',
      '25 years of age'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 1, 4.4.1.1. Air traffic controller licence applicants must be at least 21 years of age.',
    ruleRef: 'Annex 1, 4.4.1.1',
    annex: 'Annex 1',
    topic: 'annex1'
  },
  {
    id: 'q25',
    unitId: 'unit8',
    question: 'An air traffic controller rating becomes invalid if the controller ceases to exercise privileges under it for a period exceeding what?',
    options: [
      '2 months',
      '3 months',
      '6 months',
      '12 months'
    ],
    correctIndex: 2,
    explanation: 'Ref: Annex 1, 4.5.3.4. Validity mandates that rating privileges expire if the controller remains inactive under them for a period exceeding 6 months.',
    ruleRef: 'Annex 1, 4.5.3.4',
    annex: 'Annex 1',
    topic: 'annex1'
  }
];
