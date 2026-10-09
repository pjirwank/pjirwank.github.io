try{const theme=localStorage.getItem('theme');if(theme)document.documentElement.dataset.theme=theme}catch{}document.querySelector('.theme').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('theme',theme)}catch{}});document.querySelector('#copy-email')?.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('pjirwank@ucsc.edu');status.textContent='Email address copied.'}catch{status.textContent='Please copy: pjirwank@ucsc.edu'}});
const publicationSort = document.querySelector('#publication-sort');
const publicationList = document.querySelector('#publication-list');
if (publicationSort && publicationList) {
  // Retain the original articles so identifiers, anchors, and downloads stay intact.
  const publications = [...publicationList.querySelectorAll('.publication')];
  const typeNames = { C: 'Conference publications', J: 'Journal publications', U: 'Under review' };
  const typeRank = { J: 0, C: 1, U: 2 };

  function renderPublications() {
    const byType = publicationSort.value === 'type';
    const ascending = publicationSort.value === 'year-asc';
    const ordered = [...publications].sort((a, b) => {
      if (byType) {
        const typeDifference = typeRank[a.dataset.type] - typeRank[b.dataset.type];
        if (typeDifference) return typeDifference;
      }
      const yearDifference = Number(a.dataset.year) - Number(b.dataset.year);
      return (ascending ? yearDifference : -yearDifference)
        || Number(a.dataset.order) - Number(b.dataset.order);
    });
    const sections = new Map();
    for (const publication of ordered) {
      const key = byType ? publication.dataset.type : publication.dataset.year;
      if (!sections.has(key)) {
        const section = document.createElement('section');
        section.className = 'publication-section';
        if (byType) section.dataset.sectionType = key;
        else section.dataset.sectionYear = key;
        const heading = document.createElement('h2');
        heading.textContent = byType ? typeNames[key] : key;
        const group = document.createElement('div');
        group.className = 'publication-group';
        section.append(heading, group);
        sections.set(key, { section, group });
      }
      sections.get(key).group.append(publication);
    }
    publicationList.replaceChildren(...[...sections.values()].map(({ section }) => section));
  }

  publicationSort.addEventListener('change', renderPublications);
  renderPublications();
}
