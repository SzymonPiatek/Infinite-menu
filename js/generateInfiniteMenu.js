import infiniteMenuSectionsData from "../data/infiniteMenuSectionsData.js";

export function generateMenu(containerSelector) {
    const container = document.querySelector(containerSelector);

    if (container) {
        container.innerHTML = infiniteMenuSectionsData.map((section) => `
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
        console.error(`Kontener ${containerSelector} nie został znaleziony.`);
    }
}
