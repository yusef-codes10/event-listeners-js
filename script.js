const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
console.log(grandParent);
console.log(parent);
console.log(child);
grandParent.addEventListener('click', e => console.log(e))
grandParent.addEventListener('mouseover', (e) => console.log(e.target))



