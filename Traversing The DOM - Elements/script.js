let output;

const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.firstElementChild.innerText = 'hello'
parent.lastElementChild.innerText = 'hello'




const child = document.querySelector('.child');
output = child.parentElement

child.parentElement.style.border = '1px solid #ccc'
child.parentElement.style.padding = '10px'
console.log(output);