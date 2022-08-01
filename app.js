function hide(id) {
  document.getElementById(id).classList.remove('visible');
}
function show(id) {
  document.getElementById(id).classList.add('visible');
}

let activePage = 'about';

function showPage(nextPage) {
  hide(activePage);
  show(nextPage);

  document
    .querySelector(`a[data-page = ${activePage}]`)
    .classList.remove('active');
  document.querySelector(`a[data-page = ${nextPage}]`).classList.add('active');

  activePage = nextPage;
}

function initEvents() {
  document.getElementById('top-menu-bar').addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      let id = event.target.getAttribute('data-page');
      showPage(id);
    }
  });
}

showPage(activePage);
initEvents();