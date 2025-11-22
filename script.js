const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
console.log(grandParent);
console.log(parent);
console.log(child);
grandParent.addEventListener('click', () => console.log('grandparent'), {capture: true})
parent.addEventListener('click', () => console.log('parent'))
child.addEventListener('click', () => console.log('child'))
document.addEventListener('click', () => console.log('document'))

// to pervent event progration

// TODO complete throguth event propagation

