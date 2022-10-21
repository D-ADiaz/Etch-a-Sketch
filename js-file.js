const container = document.querySelector('.container');

/*Creates boxes in a column */

createColumns(container);
let columns = document.querySelectorAll('.content');
columns.forEach(column => createBoxes(column));

let boxes = document.querySelectorAll('.box');
console.log(columns);
boxes.forEach(box => hoverColor(box));


const bttn = document.querySelector('.promptbttn');
bttn.addEventListener("click", () =>prompt("enter desired grid size 16-100") );

/* Functions */

function createColumns(container)
{
    for (let i = 0; i< 100; i++)
    {
        const div = document.createElement('div');
        div.classList.add('content');
        container.appendChild(div);
    }
}

function createBoxes(column)
{
    for (let j = 0; j<100; j++)
    {
        const div = document.createElement('div');
        div.classList.add('box');
        column.appendChild(div);
        
    }
}
function hoverColor(obj){

obj.addEventListener("mouseenter",() => obj.style.backgroundColor = "purple");

};

