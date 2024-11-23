import { generateMenu } from "./infiniteMenuSections.js";
import { initializeScroll } from "./infiniteScroll.js";

document.addEventListener("DOMContentLoaded", () => {
    const menuSelector = ".infinite-menu--elements";

    generateMenu(menuSelector);

    initializeScroll(menuSelector);
});