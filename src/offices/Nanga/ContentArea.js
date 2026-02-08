// ContentArea.js
// Renders modules for each department
// Department modules come from Barakoa data in departments/*/*.data.js

import { OPS_MODULES } from '../../departments/ops/ops.data.js';
import { CULTURE_MODULES } from '../../departments/culture/culture.data.js';
import { TECH_MODULES } from '../../departments/tech/tech.data.js';
import { CREATIVE_MODULES } from '../../departments/creative/creative.data.js';

// Map department id to its data
const DEPARTMENT_MAP = {
  ops: OPS_MODULES,
  culture: CULTURE_MODULES,
  tech: TECH_MODULES,
  creative: CREATIVE_MODULES,
};

export function ContentArea(profile) {

  /* ---------------- HOME RENDERER (UNCHANGED) ---------------- */

  function renderHome(profile) {
    return `
      <main id="content" class="flex-1 p-10 bg-baseblack text-bone">

        <h1 class="font-headline text-4xl mb-2">
          Welcome, strategic thinker!
        </h1>

        <p class="text-bone/70 mb-12 mt-6 max-w-xl">
          This is the operational spine of Barakoa — budgets, partnerships,
          timelines, and system health.
        </p>

        <div
          class="border border-white/20 bg-white/5 p-6 shadow-xl hover:shadow-2xl transition max-w-4xl"
        >
          <h2 class="font-headline text-2xl text-ember mb-2">
            Barakoa Process Overview
          </h2>

          <p class="text-bone/70 text-sm max-w-2xl mb-4">
            A live snapshot of operational readiness across funding,
            production, partnerships, and delivery.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div class="border border-white/10 bg-white/5 p-4">
              <p class="uppercase tracking-widest text-xs text-ochre mb-2">
                Budget
              </p>
              <p class="text-bone/80">
                Framework established<br/>
                Detailed sheets in progress
              </p>
            </div>

            <div class="border border-white/10 bg-white/5 p-4">
              <p class="uppercase tracking-widest text-xs text-ochre mb-2">
                Outreach (to funders, partners, allies and sponsors)
              </p>
              <p class="text-bone/80">
                Outreach pitch decks in progress<br/>
              </p>
            </div>

            <div class="border border-white/10 bg-white/5 p-4">
              <p class="uppercase tracking-widest text-xs text-ochre mb-2">
                Production
              </p>
              <p class="text-bone/80">
                Workstreams defined<br/>
                Dependencies mapping
              </p>
            </div>
          </div>
        </div>

        <!-- 🔧 ONLY CHANGE: buttons are now wired -->
        <div class="mt-12 flex flex-wrap gap-6 text-sm text-bone/70">
          <button
            class="hover:underline"
            onclick="nangaNav.goToOpsFramework('process-map')"
          >
            → View the Process Map
          </button>

          <button
            class="hover:underline"
            onclick="nangaNav.goToOpsFramework('wbs')"
          >
            → View the Work Breakdown Structure (WBS)
          </button>

        </div>
      </main>
    `;
  }

  /* ---------------- NAVIGATION BRAIN ---------------- */
  function renderTechModule(mod) {
  return `
    <main class="flex-1 p-10 bg-baseblack text-bone">
        <button
          onclick="nangaNav.showDepartment('tech')"
          class="font-script uppercase tracking-widest text-xs text-ochre hover:underline mb-6"
        >
          ← Return to Tech
        </button>
      <h1 class="font-headline text-4xl text-ochre mb-6">
        ${mod.title}
      </h1>

      <p class="text-bone/70 max-w-2xl mb-12">
        ${mod.preview}
      </p>

      <div class="space-y-16">
        ${mod.sections.map(section => {

          /* ---- CARD SECTIONS ---- */
          if (section.type === 'cards') {
            return `
              <section>
                <h2 class="font-headline text-2xl text-ember mb-6">
                  ${section.heading}
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  ${section.items.map(item => `
                    <div class="border border-white/15 bg-white/5 p-6 shadow-xl">
                      <h3 class="text-lg font-semibold text-ochre mb-2">
                        ${item.title}
                      </h3>

                      <p class="text-sm text-bone/70 mb-4">
                        ${item.description}
                      </p>

                      <ul class="list-disc list-inside text-sm text-bone/80 space-y-1">
                        ${item.points.map(p => `<li>${p}</li>`).join('')}
                      </ul>
                    </div>
                  `).join('')}
                </div>
              </section>
            `;
          }

          /* ---- TABLE SECTIONS ---- */
          if (section.type === 'table') {
            return `
              <section>
                <h2 class="font-headline text-2xl text-ember mb-6">
                  ${section.heading}
                </h2>

                <div class="overflow-x-auto border border-white/15 bg-white/5 shadow-xl">
                  <table class="w-full text-sm border-collapse">
                    <thead class="bg-white/10 text-ochre uppercase tracking-widest text-xs">
                      <tr>
                        ${section.columns.map(col => `
                          <th class="px-4 py-3 text-left border-b border-white/15">
                            ${col}
                          </th>
                        `).join('')}
                      </tr>
                    </thead>

                    <tbody>
                      ${section.rows.map(row => `
                        <tr class="border-t border-white/10">
                          ${row.map(cell => `
                            <td class="px-4 py-3 text-bone/80">
                              ${cell}
                            </td>
                          `).join('')}
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </section>
            `;
          }

          return '';
        }).join('')}
      </div>
    </main>
  `;
}

  window.nangaNav = {

    showHome() {
      document.getElementById('content').innerHTML = renderHome(profile);
    },

    showDepartment(deptId) {
      const content = document.getElementById('content');
      const modules = DEPARTMENT_MAP[deptId];

      if (!modules) {
        content.innerHTML = `<p class="text-bone">Department not found</p>`;
        return;
      }

      content.innerHTML = `
        <h1 class="font-headline text-4xl text-ochre mb-10">
          ${deptId.toUpperCase()} Department
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${modules.map(m => `
        <div
          class=" border border-white/15 bg-white/5 p-6 shadow-xl transition
        ${m.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-2xl'}"
        ${m.locked ? '' : `onclick="nangaNav.showModule('${deptId}','${m.id}')"`}
        >
              <h2 class="font-headline text-xl text-ember mb-3">
                ${m.title}
              </h2>
              <p class="text-bone/70 text-sm leading-relaxed">
                ${m.preview}
              </p>
            </div>
          `).join('')}
        </div>
      `;
    },

    showModule(deptId, moduleId) {
      const content = document.getElementById('content');
      const modules = DEPARTMENT_MAP[deptId];
      const mod = modules?.find(m => m.id === moduleId);

      if (!mod) {
        content.innerHTML = `<p class="text-bone">Module not found</p>`;
        return;
      }
      if (mod.locked) {
        return;
      }


      /* ---- OPS: STRATEGY ---- */
      if (deptId === 'ops' && moduleId === 'strategy') {
        import('../../departments/ops/opsRender.js').then(
          ({ renderOpsStrategy, initOpsFrameworkHandlers }) => {
            content.innerHTML = renderOpsStrategy();
            initOpsFrameworkHandlers();
          }
        );
        return;
      }

      /* ---- OPS: BUDGET ---- */
      if (deptId === 'ops' && moduleId === 'budget') {
        import('../../departments/ops/opsRender.js').then(
          ({ renderBudget }) => {
            content.innerHTML = renderBudget(mod);
          }
        );
        return;
      }

      /* ---- CULTURE ---- */
if (deptId === 'culture') {
  import('../../departments/culture/cultureRender.js').then(
    ({ renderCulture, initCultureHandlers }) => {
      content.innerHTML = renderCulture();
      initCultureHandlers();
    }
  );
  return;
}
// CREATIVE
if (deptId === 'creative') {
  import('../../departments/creative/creativeRender.js').then(
    ({ renderCreativeModule }) => {
      content.innerHTML = renderCreativeModule(mod);
    }
  );
  return;
}
// TECH
if (deptId === 'tech') {
  content.innerHTML = renderTechModule(mod);
  return;
}



    },

    /* 🔑 Deep-link from HOME into OPS Strategy frameworks */
    goToOpsFramework(frameworkId) {
      import('../../departments/ops/opsRender.js').then(
        ({ renderOpsStrategy, initOpsFrameworkHandlers }) => {
          const content = document.getElementById('content');
          content.innerHTML = renderOpsStrategy();
          initOpsFrameworkHandlers();

          // allow DOM paint before jumping
          setTimeout(() => {
            window.showOpsFramework(frameworkId);
          }, 0);
        }
      );
    },

    showBudgetSheet(sheetId) {
      import('../../departments/ops/opsRender.js').then(
        ({ renderTable }) => {
          const module = OPS_MODULES.find(m => m.id === 'budget');
          const sheet = module?.workbook.sheets.find(s => s.id === sheetId);
          if (!sheet) return;

          document.getElementById('budget-canvas').innerHTML =
            renderTable(sheet);
        }
      );
    }
  };

  /* ---------------- INITIAL LOAD ---------------- */

  return renderHome(profile);
}
