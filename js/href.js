document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        const getParents = (el) => {
            const parents = [];
            while (el.parentElement) {
                parents.push(el.parentElement);
                el = el.parentElement;
            }
            return parents;
        };

        const parentTags = getParents(link);
        
        const isInsideCustom = parentTags.some(el => el.tagName.includes('-'));

        if (!isInsideCustom) {
            link.href = "js/thanks.html";

            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = link.href;
            });
        }
    });
});