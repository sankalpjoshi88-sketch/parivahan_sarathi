/* Reading progress, contents highlighting and print controls for the UX/UI case study. */

const progressBar = document.querySelector('#read-progress');
const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
const sections = [...document.querySelectorAll('.cs-section[id]')];

/** Updates the thin progress bar at the top of the page. */
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
}

/** Marks the contents entry for the section currently in view. */
function updateActiveSection() {
  const marker = window.scrollY + 140;
  let current = sections[0];

  for (const section of sections) {
    if (section.offsetTop <= marker) current = section;
  }

  tocLinks.forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${current.id}`;
    link.classList.toggle('is-active', isCurrent);
    if (isCurrent) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

let queued = false;
function onScroll() {
  if (queued) return;
  queued = true;
  window.requestAnimationFrame(() => {
    updateProgress();
    updateActiveSection();
    queued = false;
  });
}

/** Triggers the browser print dialog for the print/save-as-PDF controls. */
function printCaseStudy(event) {
  event.preventDefault();
  window.print();
}

document.querySelector('#print-btn')?.addEventListener('click', printCaseStudy);
document.querySelector('#print-btn-2')?.addEventListener('click', printCaseStudy);

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
onScroll();
