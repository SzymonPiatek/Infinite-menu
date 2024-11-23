import infiniteMenuSectionsData from "../data/infiniteMenuSectionsData.js";

export function generateMenu(containerSelector) {
    const container = document.querySelector(containerSelector);

    if (container) {
        container.innerHTML = infiniteMenuSectionsData.map((section) => `
            <div class="infinite-menu--elements--element">
                <a class="infinite-menu--elements--element--title" href="${section.titleHref}">
                    ${section.title}
                </a>
                <p class="infinite-menu--elements--element--title">/</p>
                <div class="infinite-menu--elements--element--blocks">
                    ${section.blocks.map((block) => `
                        <a class="infinite-menu--elements--element--blocks--block" href="${block.href}">
                            ${block.name}
                        </a>`).join("")}
                </div>
            </div>`).join("");

        const links = container.querySelectorAll("a");
        links.forEach((link) => {
            link.addEventListener("click", (event) => {
                const href = link.getAttribute("href");

                if (href.startsWith("#")) {
                    event.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                }
            });
        });
    } else {
        console.error(`Kontener ${containerSelector} nie został znaleziony.`);
    }
}
