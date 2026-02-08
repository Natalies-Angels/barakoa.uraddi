// AsideNav.js
// Sidebar navigation for Nanga (Strategic Anchors)

export function AsideNav(profile) {
  return `
    <aside class="w-64 h-full shrink-0 bg-bone border-r p-4 text-baseblack">
      <h2 class="text-xl font-bold mb-6">
        ${profile.name}
      </h2>

      <nav class="space-y-2">
        <button onclick="nangaNav.showHome()" class="block w-full text-left p-2 hover:bg-ember rounded">
          home
        </button>

        <button onclick="nangaNav.showDepartment('ops')" class="block w-full text-left p-2 hover:bg-ochre rounded">
          operations & delivery
        </button>

        <button onclick="nangaNav.showDepartment('culture')" class="block w-full text-left p-2 hover:bg-ember rounded">
          experience context
        </button>

        <button onclick="nangaNav.showDepartment('tech')" class="block w-full text-left p-2 hover:bg-ochre rounded">
          systems & infrastructure
        </button>

        <button onclick="nangaNav.showDepartment('creative')" class="block w-full text-left p-2 hover:bg-ember rounded">
          creative alignment
        </button>
      </nav>
    </aside>
  `;
}
