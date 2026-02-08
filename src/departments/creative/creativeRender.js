export function renderCreativeModule(mod) {
  return `
    <div class="max-w-xl mx-auto mt-24 text-center space-y-6">
        <button
          onclick="nangaNav.showDepartment('creative')"
          class="font-script uppercase tracking-widest text-xs text-ochre hover:underline mb-6"
        >
          ← Return to Creative
        </button>
      <h1 class="text-2xl font-semibold text-ochre">
        ${mod.title}
      </h1>

      <p class="text-sm text-bone leading-relaxed">
        This area is currently being shaped.
        <br />
        We’re taking care to build this with depth,
        cultural grounding, and intention.
      </p>

      <p class="text-sm text-bone leading-relaxed">
        For now, you can explore more about
        <span class="font-medium">${mod.title.toLowerCase()}</span>
        through the external reference below.
      </p>

      <div class="pt-4">
        <a
          href="${mod.link}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center
                 w-40 h-12
                 bg-ochre text-baseblack
                 font-medium
                 rounded-lg
                 hover:bg-ember hover:text-bone
                 transition"
        >
          Learn more
        </a>
      </div>

    </div>
  `;
}
