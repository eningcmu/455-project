const menu = document.querySelector('.page-menu');
const narrow = window.matchMedia('(max-width: 800px)');
function setMenuLayout() { menu.open = !narrow.matches; }
setMenuLayout();
narrow.addEventListener('change', setMenuLayout);

// Preserve links to sections from the original single-page outline.
const sections = new Set(['motivation', 'fpt', 'branching', 'kernelization', 'crowns', 'theorem', 'examples', 'references']);
const currentFile = location.pathname.split('/').pop();
if ((!currentFile || currentFile === 'index.html') && sections.has(location.hash.slice(1))) {
  location.replace(location.hash.slice(1) + '.html');
}
