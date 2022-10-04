var elList = document.querySelector(".film__list");

let scach = kinolar.splice(0, 101);
let fragment = new DocumentFragment();
let elTemplate = document.querySelector(".el-template").content;
// console.log(elTemplate);

for (film of scach) {
  let cloneTemplate = elTemplate.cloneNode(true);
  cloneTemplate.querySelector(".film__item");
  cloneTemplate.querySelector(".film__title").textContent = film.title;
  cloneTemplate.querySelector(".film__year").textContent = film.year;
  cloneTemplate.querySelector(".film__text").textContent = film.cast.splice(
    0,
    2
  );
  fragment.appendChild(cloneTemplate);
}
elList.appendChild(fragment);
