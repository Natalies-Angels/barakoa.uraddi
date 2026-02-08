import { CULTURE_MODULES, EXPERIENCE_MAPS } from './culture.data.js';


export function renderCulture() {
  const module = CULTURE_MODULES[0];

  return `
    <div class="max-w-6xl mx-auto space-y-8 text-baseblack">

      <button onclick="showDepartment('culture')" class="text-ochre hover:underline">
        &larr; Back to Culture
      </button>

      <h1 class="text-3xl font-bold text-ochre">${module.title}</h1>
      <p class="text-bone">${module.preview}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${module.cards.map(card => `
          <div
            class="bg-baseblack p-6 rounded-xl border border-ochre/20 hover:shadow cursor-pointer"
            onclick="showCultureCard('${card.id}')"
          >
            <h2 class="text-xl font-semibold mb-2 text-ochre">${card.title}</h2>
            <p class="text-bone">${card.preview}</p>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

export function initCultureHandlers() {
  window.showCultureCard = function(cardId) {
    const module = CULTURE_MODULES[0];
    const card = module.cards.find(c => c.id === cardId);
    if (!card) return;

    if (card.id === 'experience-map') {
      document.getElementById('content').innerHTML = renderExperienceMap(card);
      return;
    }

    if (card.id === 'cultural-integrity') {
      document.getElementById('content').innerHTML = renderCulturalIntegrity();
    }
  };

  window.showExperiencePhase = function(phaseId) {
    const phase = EXPERIENCE_MAPS[phaseId];
    if (!phase) {
      document.getElementById('content').innerHTML =
        `<p class="text-bone">Phase not found</p>`;
      return;
    }

    document.getElementById('content').innerHTML = renderPhase(phase);
  };
}

function renderExperienceMap(card) {
  return `
    <div class="max-w-6xl mx-auto space-y-8 text-baseblack">

      <button onclick="showCultureCard('experience-map')" class="text-ochre hover:underline">
        &larr; Back to Experience Map
      </button>

      <h1 class="text-3xl font-bold text-ochre">${card.title}</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${card.children.map(c => `
          <div
            class="bg-baseblack p-6 rounded-xl border border-ochre/20 hover:shadow cursor-pointer"
            onclick="showExperiencePhase('${c.id}')"
          >
            <h2 class="text-lg font-semibold mb-2 text-ochre">${c.title}</h2>
            <p class="text-bone">${c.preview}</p>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function renderPhase(phase) {
  return `
    <div class="max-w-6xl mx-auto space-y-8 text-baseblack">

      <button onclick="showCultureCard('experience-map')" class="text-ochre hover:underline">
        &larr; Back to Experience Map
      </button>

      <h1 class="text-3xl font-bold text-ochre">${phase.title}</h1>

      ${
        phase.collapsibles
          ? renderCollapsibles(phase.collapsibles)
          : renderSections(phase.sections)
      }

    </div>
  `;
}

function renderCollapsibles(collapsibles) {
  return `
    <div class="space-y-4">
      ${collapsibles.map(c => `
        <details class="border border-ochre/30 rounded-xl bg-sand p-4">
          <summary class="cursor-pointer text-xl font-semibold text-ochre">
            ${c.title}
          </summary>

          <div class="mt-6 space-y-4">
            ${c.sections.map(section => `
              <div class="bg-baseblack p-4 rounded-lg border border-ochre/20">
                <h3 class="text-lg font-semibold text-ochre mb-2">
                  ${section.heading}
                </h3>
                <ul class="list-disc ml-6 space-y-2 text-bone">
                  ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </details>
      `).join('')}
    </div>
  `;
}

function renderSections(sections) {
  return `
    <div class="space-y-6">
      ${sections.map(section => `
        <div class="bg-baseblack p-6 rounded-xl border border-ochre/20">
          <h2 class="text-xl font-semibold text-ochre mb-3">
            ${section.title}
          </h2>
          <ul class="list-disc ml-6 space-y-2 text-bone">
            ${section.content.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}


function renderCulturalIntegrity() {
  return `
    <div class="max-w-6xl mx-auto space-y-8 text-baseblack">

      <button onclick="showDepartment('culture')" class="text-ochre hover:underline">
        &larr; Back to Culture
      </button>

      <h1 class="text-3xl font-bold">Cultural Integrity</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${[
          {
            title: 'Respect & Attribution',
            points: [
              'Proper credit to cultural contributors',
              'Consent-based storytelling',
              'No extractive representation'
            ]
          },
          {
            title: 'Contextual Care',
            points: [
              'Cultural framing for audiences',
              'Artist-led narratives',
              'Avoiding spectacle without meaning'
            ]
          },
          {
            title: 'Community Accountability',
            points: [
              'Feedback loops with communities',
              'Post-event reflection',
              'Long-term relationships over one-offs'
            ]
          }
        ].map(card => `
          <div class="bg-baseblack p-6 rounded-xl border border-ochre/20">
            <h2 class="text-xl font-semibold mb-3">${card.title}</h2>
            <ul class="list-disc ml-5 space-y-1 text-bone">
              ${card.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}
