const filterTag = document.querySelectorAll('.publication__container');
// const publicationContainer = document.querySelector('.publication__container');
// const publicationDevider = document.querySelector('.publication__devider');

document.querySelector('.publication__tags').addEventListener('click', (e) => {
  if (e.target.tagName !== 'LI') return false;
  // console.log(e.target.tagName)

  let filterClass = e.target.dataset['s'];
  // console.log(filterClass)
  filterTag.forEach((el) => {
    el.classList.remove('hide');
    if (!el.classList.contains(filterClass)) {
      el.classList.add('hide');
      // if (el.classList.contains('hide') && el.classList.contains(filterClass)) {
      //   publicationDevider.classList.add('hide');
      //   // console.log(publicationContainer)
      // }
    }
  });
});
