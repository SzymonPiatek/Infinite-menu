import { initializeScroll } from "./infiniteScroll.js";

document.addEventListener("DOMContentLoaded", () => {
    const menuSelector = ".infinite-menu--elements";

    initializeScroll(menuSelector);
});