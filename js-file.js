const Acontainer = document.querySelector('#container');

console.log(Acontainer);
const content = document.createElement('div');
content.classList.add('test');
content.textContent = 'This is the glorious text-content!';
Acontainer.appendChild(content);
