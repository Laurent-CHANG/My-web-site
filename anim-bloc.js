const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer){
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio && entry.intersectionRatio < 0.9){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target);
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)

const blocksToReveal = document.querySelectorAll('[data-reveal-target]');
blocksToReveal.forEach(blockToReveal => observer.observe(blockToReveal))