const container = document.querySelector('.infinite-menu--elements');
const items = gsap.utils.toArray(container.children);
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
        target.style.cursor = 'grabbing';
    },
    onRelease: ({ target }) => {
        target.style.cursor = 'grab';
    },
    onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === 'wheel' ? -deltaY : deltaY;
        const y = isDragging ? d * 5 : d * 10;

        for (let i = 0; i < items.length; i++) {
            gsap.to(items[i], {
                duration: 1,
                ease: 'expo.out',
                y: `+=${y}`,
                modifiers: {
                    y: gsap.utils.unitize(wraps[i]),
                },
            });
        }
    },
});
