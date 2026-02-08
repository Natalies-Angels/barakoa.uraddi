// OPS_MODULES: Raw operations data
export const OPS_MODULES = [
{
  id: 'strategy',
  title: 'Strategy & Objectives',
  preview: 'Barakoa’s purpose, this edition’s focus, and the principles that guide all decisions.',
  
  context: [
    {
      id: 'purpose',
      heading: 'Why Barakoa Exists',
      body: 'Barakoa is a cross-disciplinary festival designed to create immersive cultural experiences through performance, sound, and collective participation. It exists to support experimentation, collaboration, and meaningful audience engagement.'
    },

    {
      id: 'principles',
      heading: 'Non-negotiables',
      list: [
        'Inclusive participation for all audiences and artists',
        'Ethical and respectful cultural representation',
        'Sustainable use of resources and care for people and space'
      ]
    }
  ],

  implementation: {
    heading: 'How We Reach These Goals',
    description: 'Barakoa’s objectives are translated into action through a clear planning structure that moves from vision to execution.',
    
frameworks: [
{
  id: 'master-plan',
  title: 'Master Plan',
  preview: 'High-level overview of the event structure and key components.',
  type: 'narrative',
  pillars: [

    {
      id: 'context',
      title: 'I. Context: What Barakoa Is',
      description:
        'Barakoa is a full-day popup maskerade — a temporary cultural world that exists for one day, then dissolves. The name comes from the Swahili word for mask. Masking is not metaphorical here; it is the organising logic of the gathering.',
      points: [
        'Explores love, fear, responsibility, and silence through behavioural masks',
        'Theatre and ritual as lived inquiry',
        'Fashion as collective language',
        'Sound and silence as emotional structure',
        'Food and gathering as grounding',
        'Audience participation as presence, not performance',
        'Not a show to watch — a space to enter and leave quietly changed'
      ]
    },

    {
      id: 'conscious',
      title: 'II. Barakoa as a Conscious Gathering',
      description:
        'Barakoa is designed around how people actually feel, withdraw, engage, and protect themselves in shared spaces — not around spectacle or scale.',
      points: [
        'Emotional safety without emotional pressure',
        'Participation without performance',
        'Structure without rigidity',
        'Choice as a form of care',
        'Experiences are layered, not linear',
        'Movement between intensity and quiet is encouraged',
        'No single “right way” to participate',
        'Feedback is part of the build, not an afterthought'
      ]
    },

    {
      id: 'inquiry',
      title: 'III. Core Inquiry (2026): Love, Fear & the Quiet',
      description:
        'This edition holds inquiry rather than answers. The system is designed to allow noticing, not resolution.',
      points: [
        'What masking enables',
        'How performance shapes relationships',
        'How responsibility is avoided, shifted, or carried',
        'What happens when quiet is allowed to exist'
      ]
    },

    {
      id: 'masks',
      title: 'IV. The Masks (Central Structure)',
      description:
        'Barakoa is built around six behavioural masks. These are survival systems — not characters or roles.',
      points: [
        'The Keeper — survives through control and responsibility',
        'The Silencer — survives by reducing expression',
        'The Ghost — survives by disappearing',
        'The Justifier — survives by explaining harm away',
        'The Saviour — survives by being needed',
        'The Mirror — survives by reflecting others’ expectations',
        'Masks shape theatre, fashion, sound, interaction, and emotional flow'
      ]
    },

    {
      id: 'stakeholders',
      title: 'V. Stakeholders & Who This Is For',
      description:
        'Barakoa is designed for adults carrying emotional, social, and creative complexity — and who are tired of spaces that demand clarity or performance.',
      points: [
        'Attendees',
        'Curators (fashion, sound, theatre)',
        'Creative collaborators',
        'Strategic advisors (Nanga)',
        'Partner organisations',
        'Vendors and pop-up participants',
        'Barakoa assumes honesty, not readiness'
      ]
    },

    {
      id: 'journey',
      title: 'VI. Stakeholder Journey (Pre / During / Post)',
      description:
        'The experience is held before, during, and after the day itself.',
      points: [
        'Before: orientation, dress logic, teasers, emotional temperature checks',
        'During: freedom to observe or engage, permission to pause, layered experience',
        'After: documentation, circulation of sound and imagery, continued relationships',
        'Barakoa is designed to linger'
      ]
    },

    {
      id: 'architecture',
      title: 'VII. Experience Architecture',
      description:
        'The gathering unfolds through modular zones that respond differently to masking.',
      points: [
        'Theatre and ritual spaces',
        'Sound and performance zones',
        'Fashion and styling interventions',
        'Market and pop-up areas',
        'Quiet and decompression spaces',
        'Movement between intensity and rest is intentional'
      ]
    },

    {
      id: 'creative',
      title: 'VIII. Creative Systems (High Level)',
      description:
        'Creative disciplines act as systems, not decoration.',
      points: [
        'Sound as structure: live sets, DJs, silence, silent disco channels',
        'Fashion as material language: dress codes, costumes, wearable masks',
        'Theatre as inquiry: narrative without judgment'
      ]
    },

    {
      id: 'collaboration',
      title: 'IX. Collaboration Model',
      description:
        'Barakoa is built through clear role separation and shared authorship.',
      points: [
        'Curators shape meaning and coherence',
        'Creative leads execute form and performance',
        'Directors guide interpretation',
        'Artists embody and translate',
        'Advisory partners support strategy and scale',
        'No single discipline dominates — the system holds'
      ]
    },

    {
      id: 'metrics',
      title: 'X. Success Metrics (Non-Numerical)',
      description:
        'Impact is measured through resonance rather than scale.',
      points: [
        'Depth of engagement',
        'Quality of collaboration',
        'Emotional coherence',
        'Post-event reflection',
        'Strength of relationships formed',
        'Attendance matters — resonance matters more'
      ]
    },

    {
      id: 'continuity',
      title: 'XI. Continuity',
      description:
        'Barakoa is not a one-off event. It is a repeatable cultural system.',
      points: [
        'Each edition refines inquiry',
        'Structure evolves with context',
        'Care deepens',
        'Collaboration strengthens over time'
      ]
    }

  ]
},

{
  id: 'process-map',
  title: 'Barakoa Process Map',
  preview: 'Timeline of key activities, milestones, and dependencies across the entire process.',
  type: 'nested-phase-table',

  columns: [
    'Focus',
    'What’s Happening',
    'Who’s Involved',
    'Outputs / Signals'
  ],

  phases: [
    {
      group: 'PRE-GIG',
      label: 'PRE-GIG',
      phases: [
        {
          label: 'Phase 1: Foundations & Anchor Outreach (Nov – Feb 10)',
          rows: [
            {
              focus: 'Gig formation',
              whatsHappening: 'Barakoa is defined, scoped, and positioned',
              whosInvolved: 'Founders, Nanga',
              outputs: 'Clear edition identity'
            },
            {
              focus: 'Anchor outreach',
              whatsHappening: 'Initial conversations with strategic anchor partners',
              whosInvolved: 'Founders, Nanga',
              outputs: 'Strategic alignment, access pathways'
            },
            {
              focus: 'Creative anchoring',
              whatsHappening: 'Early engagement with sound, fashion, play leads',
              whosInvolved: 'Curators, Creative leads',
              outputs: 'Core creative commitment'
            },
            {
              focus: 'Narrative tools',
              whatsHappening: 'Experience video produced for outreach',
              whosInvolved: 'Experience curator',
              outputs: 'Pitch-ready experience asset'
            }
          ]
        },

        {
          label: 'Phase 2: Funding, Visibility & Alignment (Feb 10 – End March)',
          rows: [
            {
              focus: 'Funding outreach',
              whatsHappening: 'Conversations with funders, sponsors, allies',
              whosInvolved: 'Founders, Nanga, Strategic advisors',
              outputs: 'Funding pipeline, warm leads'
            },
            {
              focus: 'Narrative leverage',
              whatsHappening: 'Experience video refined and deployed',
              whosInvolved: 'Experience curator',
              outputs: 'Shared language for partners'
            },
            {
              focus: 'Public visibility',
              whatsHappening: '3 social carousels, stories, highlights released',
              whosInvolved: 'Comms, Creative',
              outputs: 'Awareness, early trust'
            },
            {
              focus: 'Creative alignment',
              whatsHappening: 'Syncs, rehearsals, alignment meetings',
              whosInvolved: 'Curators, Crews',
              outputs: 'Directional clarity'
            },
            {
              focus: 'Ops readiness',
              whatsHappening: 'Traffic, access, logistics planning',
              whosInvolved: 'Ops',
              outputs: 'Reduced risk, smoother flow'
            }
          ]
        },

        {
          label: 'Phase 3: Sales, Rehearsals & Materials (April – May)',
          rows: [
            {
              focus: 'Ticketing',
              whatsHappening: 'Ticket sales open for May & June gigs',
              whosInvolved: 'Ops, Comms',
              outputs: 'Sales momentum'
            },
            {
              focus: 'Marketing continuity',
              whatsHappening: 'Ongoing digital marketing',
              whosInvolved: 'Comms',
              outputs: 'Sustained visibility'
            },
            {
              focus: 'Physical rehearsals',
              whatsHappening: 'In-person rehearsals for all crews',
              whosInvolved: 'Creative crews',
              outputs: 'Performance readiness'
            },
            {
              focus: 'Attendee materials',
              whatsHappening: 'Playbook, listening book, lookbook developed',
              whosInvolved: 'Culture, Creative',
              outputs: 'Tangible attendee assets'
            }
          ]
        }
      ]
    },

    {
      group: 'PRE / PERI',
      label: 'Phase 4: Crossover Period (May – June 18)',
      rows: [
        {
          focus: 'May gig delivery',
          whatsHappening: 'Teaser gig executed',
          whosInvolved: 'All teams',
          outputs: 'System testing'
        },
        {
          focus: 'Iteration',
          whatsHappening: 'Learnings applied to June gigs',
          whosInvolved: 'Founders, Ops, Creative',
          outputs: 'Refined delivery'
        },
        {
          focus: 'Ticket closure',
          whatsHappening: 'June ticket sales close (June 11)',
          whosInvolved: 'Ops, Comms',
          outputs: 'Final attendance lock'
        }
      ]
    },

    {
      group: 'PERI-GIG',
      label: 'Delivery (May & June)',
      rows: [
        {
          focus: 'Crew care',
          whatsHappening: 'Travel, rest, accommodation for crew',
          whosInvolved: 'Ops',
          outputs: 'Grounded teams'
        },
        {
          focus: 'Technical delivery',
          whatsHappening: 'Sound checks, play runs, rehearsals',
          whosInvolved: 'Sound, Play, Ops',
          outputs: 'Live readiness'
        },
        {
          focus: 'Performance',
          whatsHappening: 'Creative crews deliver live work',
          whosInvolved: 'Creative crews',
          outputs: 'Embodied experience'
        },
        {
          focus: 'Partner presence',
          whatsHappening: 'Vendors, sponsors, allies attend',
          whosInvolved: 'Partnerships',
          outputs: 'Visibility, validation'
        },
        {
          focus: 'Strategic observation',
          whatsHappening: 'Invited critique & reporting',
          whosInvolved: 'Strategic guests',
          outputs: 'Insight & documentation'
        },
        {
          focus: 'Audience actions',
          whatsHappening: 'Attend, buy tickets, voter registration',
          whosInvolved: 'Attendees, Ops',
          outputs: 'Conversion & impact'
        }
      ]
    },

    {
      group: 'POST-GIG',
      label: 'Post-Gig',
      rows: [
        {
          focus: 'Documentation',
          whatsHappening: 'Visual, sound, written archives',
          whosInvolved: 'Documentation team',
          outputs: 'Memory & advocacy assets'
        },
        {
          focus: 'Financial close',
          whatsHappening: 'Pending payments finalized',
          whosInvolved: 'Ops, Finance',
          outputs: 'Clean close'
        },
        {
          focus: 'Continuity',
          whatsHappening: 'Relationships carried forward',
          whosInvolved: 'Founders, Nanga',
          outputs: 'Next edition readiness'
        }
      ]
    }
  ]
},

{
  id: 'wbs',
  title: 'Full Work Breakdown Structure (WBS)',
  preview: 'Detailed task-level planning across Pre, Peri, and Post Barakoa.',
  type: 'nested-wbs',

  columns: [
    'Week',
    'Date',
    'Task',
    'Primary Actor(s)'
  ],

  phases: [
    {
      group: 'PRE-GIG',
      phases: [
        {
          label: 'Phase 1: Foundations & Anchor Outreach (Before Feb 10)',
          rows: [
            {
              week: 'W1–2',
              date: '—',
              task: 'Process building & WBS definition',
              actors: 'Founders, Nanga'
            },
            {
              week: 'W1–2',
              date: '—',
              task: 'Funder & partner mapping (priority tiers)',
              actors: 'Nanga, Founders'
            },
            {
              week: 'W1–2',
              date: '—',
              task: 'Outreach to anchor partners',
              actors: 'Founders, Nanga'
            },
            {
              week: 'W1–2',
              date: '—',
              task: 'Dashboard development',
              actors: 'Ops, Tech'
            },
            {
              week: 'W1–2',
              date: '—',
              task: 'Dashboard data entry',
              actors: 'Ops'
            },
            {
              week: 'W1–2',
              date: '—',
              task: 'Meetings with anchor partners',
              actors: 'Founders'
            },
            {
              week: 'W1–2',
              date: '—',
              task: 'Design of carousel posts & experience video',
              actors: 'Creative, Comms'
            },
            {
              week: 'W1–2',
              date: '—',
              task: 'Finalize website (structure + content)',
              actors: 'Tech, Comms'
            }
          ]
        },

        {
          label: 'Phase 2: Funding, Visibility & Alignment (Feb 10 – End March)',
          rows: [
            {
              week: 'W3',
              date: 'From Feb 10',
              task: 'Dashboard testing & orientation',
              actors: 'Ops, Tech, Nanga'
            },
            {
              week: 'W3–8',
              date: 'Feb–Mar',
              task: 'Dashboard data entry (ongoing)',
              actors: 'Ops'
            },
            {
              week: 'W3–4',
              date: 'From Feb 10',
              task: 'Dashboard V1 reporting',
              actors: 'Ops, Nanga'
            },
            {
              week: 'W3–8',
              date: 'Feb–Mar',
              task: 'Outreach to funders, sponsors, partners & allies (priority 1)',
              actors: 'Founders, Nanga'
            },
            {
              week: 'W3–6',
              date: 'Feb 10–28',
              task: 'Carousel campaign (3 posts × 10 slides)',
              actors: 'Comms, Creative'
            },
            {
              week: 'W4',
              date: 'Feb 28',
              task: 'Experience video release (edited for public)',
              actors: 'Creative, Comms'
            },
            {
              week: 'W4',
              date: 'Feb 19',
              task: 'Creative alignment meeting (all crews)',
              actors: 'Curators, Creative Leads'
            },
            {
              week: 'W5',
              date: 'Mar 3',
              task: 'Sound & Theatre virtual rehearsal',
              actors: 'Sound, Play Teams'
            },
            {
              week: 'W7',
              date: 'Mar 17',
              task: 'Sound & Theatre virtual rehearsal',
              actors: 'Sound, Play Teams'
            },
            {
              week: 'W9',
              date: 'Mar 31',
              task: 'Sound & Theatre virtual rehearsal',
              actors: 'Sound, Play Teams'
            },
            {
              week: 'W4–9',
              date: 'Feb–Mar',
              task: 'Fashion team coordination (meetings + voice notes)',
              actors: 'Fashion Team'
            },
            {
              week: 'W6',
              date: 'By Feb 26',
              task: 'March digital & physical marketing, advocacy & outreach plan',
              actors: 'Comms, Founders, Nanga'
            }
          ]
        }
      ]
    },

    {
      group: 'PERI-GIG',
      rows: [
        {
          week: 'Event',
          date: 'Event Day',
          task: 'Live delivery & coordination',
          actors: 'All Teams'
        }
      ]
    },

    {
      group: 'POST-GIG',
      rows: [
        {
          week: 'Week 1–4',
          date: 'Post Event',
          task: 'Debrief, reporting & continuity',
          actors: 'Founders, Nanga'
        }
      ]
    }
  ]
}

]
    }
  },
  
{
  id: 'partnerships',
  title: 'Partnerships',
  locked: true,
  preview: 'Partnership maps are being finalised. Detailed views will be available shortly.',
  sections: [
    {
      type: 'cards',
      heading: 'Partnership Categories',
      items: [
        {
          title: 'Confirmed Partners',
          description: 'Partners fully onboarded and contracted.',
          points: [
            'Venue Partner',
            'Technical Production Partner',
            'Media Partner'
          ]
        },
        {
          title: 'Pending Partners',
          description: 'Partners in discussion or awaiting confirmation.',
          points: [
            'Food & Beverage Vendors',
            'Transport & Logistics Partner'
          ]
        },
        {
          title: 'Prospective Partners',
          description: 'Strategic targets for outreach.',
          points: [
            'Brand Sponsors',
            'Accommodation Partners'
          ]
        }
      ]
    }
  ]
},
  
{
  id: 'budget',
  title: 'Budget Overview: work in progress',
  preview: 'Consolidated and departmental budgets for this edition.',
  workbook: {
    sheets: [
      {
      id: 'summary',
      label: 'Summary',
      heading: 'Overall Budget Summary (KES)',
      columns: ['Category', 'Amount (KES)'],
      rows: [
        ['Sound & Sonic Programming', '2,200,000'],
        ['Fashion & Wearables', '1,200,000'],
        ['Play & Interactive Installations', '900,000'],
        ['Tech & Digital Infrastructure', '1,100,000'],
        ['Operations & Staffing', '1,400,000'],
        ['Marketing & Communications', '900,000'],
        ['Contingency', '700,000']
      ]
    
      },
    
      {
        id: 'sound',
        label: 'Sound',
        columns: ['Item', 'Notes', 'Amount (KES)'],
        rows: [
          ['PA System & Rigging', 'Main stage + secondary zones', '850,000'],
          ['Sonic Artists Fees', 'Local & regional performers', '750,000'],
          ['Sound Engineers', 'FOH + monitors', '350,000'],
          ['Backline & Accessories', 'Mics, stands, cables', '250,000']
        ]
      },
      {
        id: 'fashion',
        label: 'Fashion',
        columns: ['Item', 'Notes', 'Amount (KES)'],
        rows: [
          ['Designer Fees', 'Showcase + installations', '500,000'],
          ['Materials & Fabric', 'Sustainable sourcing', '350,000'],
          ['Models & Styling', 'Fittings & shows', '200,000'],
          ['Production Costs', 'Lighting, staging', '150,000']
        ]
      },
      {
        id: 'play',
        label: 'Play',
        columns: ['Item', 'Notes', 'Amount (KES)'],
        rows: [
          ['Interactive Equipment', 'Physical play structures', '400,000'],
          ['Facilitators', 'Play hosts & guides', '250,000'],
          ['Materials', 'Consumables & wearables', '150,000'],
          ['Safety & Compliance', 'Padding, supervision', '100,000']
        ]
      },
      {
        id: 'tech',
        label: 'Tech',
        columns: ['Item', 'Notes', 'Amount (KES)'],
        rows: [
          ['Networking', 'Routers, cabling, setup', '300,000'],
          ['Digital Installations', 'Screens, sensors', '400,000'],
          ['Power & Backup', 'Generators & UPS', '250,000'],
          ['Technical Support', 'On-site tech crew', '150,000']
        ]
      }
    ]
  }
},

{
  id: 'funding',
  title: 'Funding & Grants',
  locked: true,
  preview: 'Funding sources and grant applications are being finalised. Detailed views will be available shortly.',
  sections: [
    {
      type: 'cards',
      heading: 'Funding Sources',
      items: [
        {
          title: 'Secured',
          points: [
            'National Arts Council Grant',
            'County Cultural Development Fund'
          ]
        },
        {
          title: 'Applications Submitted',
          points: [
            'Regional Cultural Exchange Grant',
            'Creative Economy Support Fund'
          ]
        },
        {
          title: 'Prospective Funders',
          points: [
            'Corporate CSR Programs',
            'International Cultural Foundations'
          ]
        }
      ]
    },
    {
      type: 'table',
      heading: 'Reporting Obligations',
      columns: ['Funder Type', 'Requirement'],
      rows: [
        ['Public Grants', 'Financial & Impact Reports'],
        ['Corporate Sponsors', 'Brand Visibility Metrics'],
        ['Foundations', 'Narrative & Outcome Reports']
      ]
    }
  ]
},

// {
//   id: 'risks',
//   title: 'Risks & Dependencies (Work in Progress)',
//   preview: 'Operational risks and mitigation planning.',
//   sections: [
//     {
//       type: 'checklist',
//       heading: 'Key Risks',
//       items: [
//         { label: 'Weather disruption', checked: false },
//         { label: 'Technical failure', checked: false },
//         { label: 'Artist delays', checked: false },
//         { label: 'Supplier delays', checked: false }
//       ]
//     },
//     {
//       type: 'cards',
//       heading: 'Mitigation Strategies',
//       items: [
//         {
//           title: 'Operational',
//           points: [
//             'Backup indoor options',
//             'Redundant technical equipment'
//           ]
//         },
//         {
//           title: 'Scheduling',
//           points: [
//             'Artist buffer days',
//             'Early supplier confirmations'
//           ]
//         }
//       ]
//     }
//   ]
// }

];
