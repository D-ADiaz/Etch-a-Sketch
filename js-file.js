const container = document.querySelector('.container');

/*Creates boxes in a column */

createColumns(container);
let columns = document.querySelectorAll('.content');
columns.forEach(column => createBoxes(column));

let boxes = document.querySelectorAll('.box');
console.log(columns);
boxes.forEach(box => hoverColor(box));

/* Functions */

function createColumns(container)
{
    for (let i = 0; i< 16; i++)
    {
        const div = document.createElement('div');
        div.classList.add('content');
        container.appendChild(div);
    }
}

function createBoxes(column)
{
    for (let j = 0; j<16; j++)
    {
        const div = document.createElement('div');
        div.classList.add('box');
        column.appendChild(div);
        
    }
}
function hoverColor(obj){

obj.addEventListener("mouseenter",() => obj.style.backgroundColor = "purple");

};

