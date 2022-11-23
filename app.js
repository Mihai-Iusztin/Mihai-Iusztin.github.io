function hide(id) {
  document.getElementById(id).classList.remove('visible');
}
function show(id) {
  document.getElementById(id).classList.add('visible');
}

let activePage = 'skills';

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

function displaySkills(skills) {
  var ul = document.querySelector('#skills ul');

  // var skills = [
  //   { name: 'html', endorcements: 10, favorite: true },
  //   { name: 'css', endorcements: 20, favorite: false },
  //   { name: 'js', endorcements: 15, favorite: true },
  // ];
  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
    // if (a.name.toLowerCase() < b.name.toLowerCase()) {
    //   return -1;
    // }
    // if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //   return 1;
    // }
    // return 0;
    // return a.name - b.name;
  });

  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcements}</li>`;
  }
}
// displaySkills();

function loadSkills() {
  //  console.time('load')
  fetch('skills.json')
    .then(function (response) {
      // console.log(response.json());
      return response.json();
    })
    .then(function (serverSkills) {
      // console.warn('am primit ceva', serverSkills);
      displaySkills(serverSkills);
      // console.timeEnd('load')
    });
}
loadSkills();
