const sections = [
    {
        title: "Example 1",
        titleHref: "/",
        blocks: [
            { name: "Block 1", href: "/#1" },
            { name: "Block 2", href: "/#2" },
            { name: "Block 3", href: "/#3" },
        ],
    },
    {
        title: "Example 2",
        titleHref: "/",
        blocks: [
            { name: "Block 1", href: "/#1" },
        ],
    },
    {
        title: "Example 3",
        titleHref: "/",
        blocks: [
            { name: "Block 1", href: "/#1" },
            { name: "Block 2", href: "/#2" },
        ],
    },
    {
        title: "Example 4",
        titleHref: "/",
        blocks: [
            { name: "Block 1", href: "/#1" },
            { name: "Block 2", href: "/#2" },
            { name: "Block 3", href: "/#3" },
            { name: "Block 4", href: "/#4" },
        ],
    },
    {
        title: "Example 5",
        titleHref: "/",
        blocks: [
            { name: "Block 1", href: "/#1" },
            { name: "Block 2", href: "/#2" },
            { name: "Block 3", href: "/#3" },
            { name: "Block 4", href: "/#4" },
        ],
    },
    {
        title: "Example 6",
        titleHref: "/",
        blocks: [
            { name: "Block 1", href: "/#1" },
        ],
    },
    {
        title: "Example 7",
        titleHref: "/",
        blocks: [
            { name: "Block 1", href: "/#1" },
            { name: "Block 2", href: "/#2" },
            { name: "Block 3", href: "/#3" },
        ],
    },
];

const infiniteMenuContainer = document.querySelector(".infinite-menu--elements");

if (infiniteMenuContainer) {
    infiniteMenuContainer.innerHTML = sections.map((section) => `
        <div class="infinite-menu--elements--element">
            <a class="infinite-menu--elements--element--title" href="${section.titleHref}">
              ${section.title}
            </a>
            <div class="infinite-menu--elements--element--blocks">
                ${section.blocks.map((block) => `
                    <a class="infinite-menu--elements--element--blocks--block" href="${block.href}">
                        ${block.name}
                    </a>`).join("")}
            </div>
        </div>`).join("");
} else {
    console.error("Kontener .infinite-menu--elements nie został znaleziony.");
}