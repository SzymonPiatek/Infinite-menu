export function initializeScroll(containerSelector) {
    const container = document.querySelector(containerSelector);

    if (!container) {
        console.error(`Kontener ${containerSelector} nie został znaleziony.`);
        return;
    }

    const items = gsap.utils.toArray(container.children);

    gsap.fromTo(
        items,
        {
            opacity: 0,
            x: "-100%",
        },
        {
            opacity: 1,
            x: "0%",
            duration: 1,
            ease: "power2.out",
            stagger: 0.05,
        }
    );

    const wraps = [];

    function setupWraps() {
        const containerRect = container.getBoundingClientRect();

        for (let i = 0; i < items.length; i++) {
            const itemRect = items[i].getBoundingClientRect();
            const min = containerRect.top - itemRect.bottom;
            const max = containerRect.bottom - itemRect.bottom;
            const wrap = gsap.utils.wrap(min, max);

            wraps.push(wrap);
        }
    }

    setupWraps();

    Observer.create({
        preventDefault: true,
        target: container,
        onPress: ({ target }) => {
            target.style.cursor = "grabbing";
        },
        onRelease: ({ target }) => {
            target.style.cursor = "grab";
        },
        onChange: ({ deltaY, isDragging, event }) => {
            const d = event.type === "wheel" ? -deltaY : deltaY;
            const y = isDragging ? d * 5 : d * 10;

            for (let i = 0; i < items.length; i++) {
                gsap.to(items[i], {
                    duration: 1,
                    ease: "expo.out",
                    y: `+=${y}`,
                    modifiers: {
                        y: gsap.utils.unitize(wraps[i]),
                    },
                });
            }
        },
    });

    container.style.cursor = "grab";
}
