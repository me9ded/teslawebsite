
document.addEventListener('DOMContentLoaded', () => {const sections = document.querySelectorAll('section');
let isScrolling = false;

function setActiveSection() {
    const scrollPosition = window.scrollY;
    let activeSectionIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = index;
        }
    });

    sections.forEach((section, index) => {
        if (index === activeSectionIndex) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        setActiveSection();
        setTimeout(() => {
            isScrolling = false;
        }, 100);
    }
});

setActiveSection();
});




