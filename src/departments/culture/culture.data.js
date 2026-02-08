// culture.data.js

export const CULTURE_MODULES = [
  {
    id: 'experience',
    title: 'The Barakoa Experience',
    preview: 'A cultural ritual, told in time — from pre-arrival to the echo after.',
    cards: [
      {
        id: 'experience-map',
        title: 'Experience Map',
        preview: 'Journey through Pre, Peri, and Post Barakoa in immersive cards and collapsibles.',
        children: [
          {
            id: 'pre',
            title: 'Before: The Quiet Arrival (Pre-Barakoa)',
            preview: 'Months before the gathering, the world begins listening and shaping itself.'
          },
          {
            id: 'peri',
            title: 'During: Entering the World (Peri-Barakoa)',
            preview: 'Arrival, tuning, the main ceremony, rituals, and soft release.'
          },
          {
            id: 'post',
            title: 'After: The Echo (Post-Barakoa)',
            preview: 'Reflection, memory, and continuity after the festival dissolves.'
          }
        ]
      },
      {
        id: 'cultural-integrity',
        title: 'Cultural Integrity',
        preview: 'Principles and practices that protect meaning, respect, and ethical cultural expression.'
      }
    ]
  }
];

export const EXPERIENCE_MAPS = {
  pre: {
    title: 'Before: The Quiet Arrival (Pre-Barakoa)',
    collapsibles: [
      {
        id: 'foundations',
        title: 'Foundations & Direction',
        sections: [
          {
            heading: 'Setting the Inquiry',
            items: [
              'The central inquiry is named and allowed to settle.',
              'Tone, emotional range, and pace are gently agreed upon.',
              'Barakoa’s scope, intent, and edges come into focus.'
            ]
          },
          {
            heading: 'Early Alignment',
            items: [
              'Founders and core collaborators align around intention.',
              'Roles clarify without urgency.',
              'The world begins to cohere quietly.'
            ]
          }
        ]
      },
      {
        id: 'funding-partnerships',
        title: 'Funding & Partnership Conversations',
        sections: [
          {
            heading: 'Outreach Begins',
            items: [
              'Conversations open with funders, sponsors, and aligned allies.',
              'Strategic advisors support framing, positioning, and introductions.',
              'Interest is sensed rather than pushed.'
            ]
          },
          {
            heading: 'Shared Understanding',
            items: [
              'The experience video circulates as a feeling, not a pitch.',
              'Language aligns across partners.',
              'Trust begins to form.'
            ]
          }
        ]
      },
      {
        id: 'public-orientation',
        title: 'Public Orientation & Awareness',
        sections: [
          {
            heading: 'First Signals',
            items: [
              'Social channels begin to speak.',
              'Three carousels unfold, each slowly introducing the world.',
              'The inquiry, the gathering, and the invitation become visible.'
            ]
          },
          {
            heading: 'Invitation',
            items: [
              'Clear calls to action are woven into the content.',
              'Audiences begin to recognise the tone.',
              'Barakoa feels familiar before it is fully known.'
            ]
          }
        ]
      },
      {
        id: 'operational-planning',
        title: 'Operational Planning',
        sections: [
          {
            heading: 'Invisible Structures',
            items: [
              'Traffic, access, flow, and care are designed early.',
              'Risks are named while there is still room to soften them.',
              'Systems are built to be felt, not seen.'
            ]
          }
        ]
      }
    ]
  },

  peri: {
    title: 'During: Entering the World (Peri-Barakoa)',
    collapsibles: [
      {
        id: 'may-gig',
        title: 'May: Testing the World',
        sections: [
          {
            heading: 'A Smaller Opening',
            items: [
              'A reduced-scale experience takes place.',
              'Sound, flow, and spatial rhythm are tested.',
              'The world listens to itself.'
            ]
          },
          {
            heading: 'Learning Forward',
            items: [
              'Observations are gathered without pressure.',
              'Adjustments are made in preparation for June.',
              'Guests are gently invited toward the main gathering.'
            ]
          }
        ]
      },
      {
        id: 'june-19',
        title: 'June 19: Arrival & Orientation',
        sections: [
          {
            heading: 'Landing',
            items: [
              'Creatives arrive and settle into the space.',
              'Orientation happens through flow, not instruction.',
              'Workshops, listening sessions, and quiet alignment unfold.'
            ]
          },
          {
            heading: 'Holding the Day',
            items: [
              'There is no performance pressure.',
              'The day closes calmly.',
              'The body is rested for what comes next.'
            ]
          }
        ]
      },
      {
        id: 'june-20',
        title: 'June 20: The Main Experience',
        sections: [
          {
            heading: 'Opening the Space',
            items: [
              'The world wakes gradually.',
              'Food, water, and rest are always available.',
              'Nothing demands urgency.'
            ]
          },
          {
            heading: 'Living the World',
            items: [
              'Installations, panels, performances, and rituals overlap.',
              'Music and fashion move in and out of focus.',
              'The day resolves into release.'
            ]
          }
        ]
      }
    ]
  },

  post: {
    title: 'After: The Echo (Post-Barakoa)',
    sections: [
      {
        title: 'Aftercare',
        content: [
          'Rest is prioritised.',
          'Teams and contributors check in gently.',
          'There is no rush to explain or perform closure.'
        ]
      },
      {
        title: 'Reflection & Review',
        content: [
          'Feedback is gathered across crews and audiences.',
          'Creative, operational, and strategic outcomes are reviewed.',
          'Meaning is distilled slowly.'
        ]
      },
      {
        title: 'Documentation & Continuity',
        content: [
          'A listening book and visual archive are compiled.',
          'Funder and partner relationships are carried forward.',
          'The next edition is quietly seeded.'
        ]
      }
    ]
  }
};
