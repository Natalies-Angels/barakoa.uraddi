import { OPS_MODULES } from './ops.data.js';

/* ======================
   OPS STRATEGY LANDING
====================== */
export function renderOpsStrategy() {
  const m = OPS_MODULES.find(m => m.id === 'strategy');

  return `
    <div class="max-w-6xl mx-auto space-y-16 text-bone">

      <div>
        <button
          onclick="nangaNav.showDepartment('ops')"
          class="font-script uppercase tracking-widest text-xs text-ochre hover:underline mb-6"
        >
          ← Return to Ops
        </button>

        <h1 class="font-headline text-4xl mb-4 text-ember">${m.title}</h1>
        <p class="text-bone/70 max-w-2xl leading-relaxed mb-10">
          ${m.preview}
        </p>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-10">
          ${m.context.map(section => `
            <div class="border border-white/10 bg-white/5 p-8 shadow-2xl">
              <h2 class="font-headline text-xl text-ochre mb-4">
                ${section.heading}
              </h2>

              ${section.body
                ? `<p class="text-bone/80 leading-relaxed mb-4">${section.body}</p>`
                : ''}

              ${section.list
                ? `<ul class="list-disc ml-5 space-y-2 text-bone/70 font-script">
                    ${section.list.map(li => `<li>${li}</li>`).join('')}
                  </ul>`
                : ''}
            </div>
          `).join('')}
        </section>
      </div>

      <section>
        <h2 class="font-headline text-2xl text-ember mb-6">
          Implementation Frameworks
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          ${m.implementation.frameworks.map(fw => `
            <div
              class="border border-white/15 bg-baseblack/80 p-8 shadow-xl hover:shadow-2xl transition cursor-pointer"
              onclick="window.showOpsFramework('${fw.id}')"

            >
              <h3 class="font-headline text-xl text-ember mb-3">
                ${fw.title}
              </h3>
              ${fw.preview
                ? `<p class="text-bone/70 text-sm">${fw.preview}</p>`
                : ''}
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

/* ======================
   FRAMEWORK HANDLERS
====================== */
export function initOpsFrameworkHandlers() {
  window.showOpsFramework = function (frameworkId) {
    const module = OPS_MODULES.find(m => m.id === 'strategy');
    const fw = module?.implementation.frameworks.find(f => f.id === frameworkId);
    if (!fw) return;

    let html = '';

if (fw.type === 'nested-phase-table') {
  html = renderProcessMap(fw);
}

if (fw.type === 'detailed-table') {
  html = renderDetailedTableFramework(fw);
}

if (fw.type === 'narrative') {
  html = renderNarrativeFramework(fw);
}

if (fw.type === 'nested-wbs') {
  html = renderWBSMap(fw);
}



    document.getElementById('content').innerHTML = html;
  };
}

/* ======================
   NARRATIVE FRAMEWORK
====================== */
function renderNarrativeFramework(fw) {
  return `
    <div class="max-w-5xl mx-auto space-y-16 text-bone">

      <button
        onclick="nangaNav.showModule('ops','strategy')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to Strategy
      </button>

      <h1 class="font-headline text-5xl text-ember">
        ${fw.title}
      </h1>

      ${fw.pillars.map(p => `
        <div class="border border-white/10 bg-white/5 p-8 shadow-2xl">
          <h2 class="font-headline text-2xl text-ochre mb-4">
            ${p.title}
          </h2>
          <p class="text-bone/80 mb-6">
            ${p.description}
          </p>
          <ul class="list-disc ml-5 space-y-2 font-script text-bone/70">
            ${p.points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

//RENDER TABLE
function renderProcessMap(fw) {
  return `
    <div class="space-y-10">
          <button
        onclick="nangaNav.showModule('ops','strategy')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to Strategy
      </button>
      <h1 class="text-4xl font-headline text-ember">
        ${fw.title}
      </h1>

      ${fw.phases.map(group => `
        <details class="border border-white/15 rounded-xl bg-white/5">
          <summary class="cursor-pointer px-6 py-4 text-2xl font-headline text-ochre">
            ${group.group}
          </summary>

          <div class="p-6 space-y-6">

            ${group.phases
              ? group.phases.map(phase => `
                  <details class="border border-white/10 rounded-lg">
                    <summary class="cursor-pointer px-4 py-3 text-lg font-semibold text-ember">
                      ${phase.label}
                    </summary>

                    ${renderProcessTable(fw.columns, phase.rows)}
                  </details>
                `).join('')
              : renderProcessTable(fw.columns, group.rows)
            }

          </div>
        </details>
      `).join('')}

    </div>
  `;
}

function renderWBSMap(fw) {
  return `
    <div class="space-y-10">
      <button
        onclick="nangaNav.showModule('ops','strategy')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to Strategy
      </button>

      <h1 class="text-4xl font-headline text-ember">
        ${fw.title}
      </h1>

      ${fw.phases.map(group => `
        <details class="border border-white/15 rounded-xl bg-white/5">
          <summary class="cursor-pointer px-6 py-4 text-2xl font-headline text-ochre">
            ${group.group}
          </summary>

          <div class="p-6 space-y-6">

            ${group.phases
              ? group.phases.map(phase => `
                  <details class="border border-white/10 rounded-lg">
                    <summary class="cursor-pointer px-4 py-3 text-lg font-semibold text-ember">
                      ${phase.label}
                    </summary>

                    ${renderWBSTable(fw.columns, phase.rows)}
                  </details>
                `).join('')
              : renderWBSTable(fw.columns, group.rows)
            }

          </div>
        </details>
      `).join('')}
    </div>
  `;
}
function renderWBSTable(columns, rows) {
  return `
    <div class="overflow-x-auto p-4">
      <table class="w-full text-sm">
        <thead>
          <tr>
            ${columns.map(c => `
              <th class="p-3 text-left uppercase tracking-widest text-xs text-ochre">
                ${c}
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map(r => `
            <tr class="border-t border-white/10">
              <td class="p-3">${r.week}</td>
              <td class="p-3">${r.date}</td>
              <td class="p-3">${r.task}</td>
              <td class="p-3">${r.actors}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderDetailedTableFramework(fw) {
  return `
    <div class="max-w-7xl mx-auto space-y-12 text-bone">

      <button
        onclick="nangaNav.showModule('ops','strategy')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to Strategy
      </button>

      <h1 class="font-headline text-4xl text-ember">
        ${fw.title}
      </h1>

      <p class="text-bone/70 max-w-3xl">
        ${fw.preview}
      </p>

      ${renderTable({
        heading: fw.title,
        columns: fw.columns,
        rows: fw.rows.map(r => Object.values(r))
      })}
    </div>
  `;
}


function renderProcessTable(columns, rows) {
  return `
    <div class="overflow-x-auto p-4">
      <table class="w-full text-sm">
        <thead>
          <tr>
            ${columns.map(c => `
              <th class="p-3 text-left uppercase tracking-widest text-xs text-ochre">
                ${c}
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map(r => `
            <tr class="border-t border-white/10">
              <td class="p-3">${r.focus}</td>
              <td class="p-3">${r.whatsHappening}</td>
              <td class="p-3">${r.whosInvolved}</td>
              <td class="p-3">${r.outputs}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ======================
   BUDGET RENDERING
====================== */
export function renderBudget(module) {
  return `
    <div class="max-w-7xl mx-auto space-y-12 text-bone">

      <button
        onclick="nangaNav.showDepartment('ops')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to Ops
      </button>

      <h1 class="font-headline text-5xl text-ember">
        ${module.title}
      </h1>

      <p class="text-bone/70 max-w-3xl">
        ${module.preview}
      </p>

      <div class="flex flex-wrap gap-4">
        ${module.workbook.sheets.map(s => `
          <button
            onclick="nangaNav.showBudgetSheet('${s.id}')"
            class="px-5 py-3 border border-white/20 bg-white/5 hover:bg-white/10 transition text-sm"
          >
            ${s.label}
          </button>
        `).join('')}
      </div>

      <div id="budget-canvas" class="pt-6"></div>
    </div>
  `;
}

/* ======================
   GENERIC TABLE
====================== */
export function renderTable(sheet) {
  return `
    <div class="overflow-x-auto border border-white/10 bg-white/5 shadow-xl">
      <h2 class="font-headline text-2xl text-ochre p-6">
        ${sheet.heading || sheet.label}
      </h2>

      <table class="w-full text-sm">
        <thead>
          <tr>
            ${sheet.columns.map(c => `
              <th class="p-4 text-left font-script uppercase tracking-widest text-xs text-ember">
                ${c}
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${sheet.rows.map(r => `
            <tr class="border-t border-white/10">
              ${r.map(cell => `
                <td class="p-4">
                  ${cell}
                </td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}
