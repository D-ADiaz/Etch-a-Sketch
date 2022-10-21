
makeGrid();




/* grid buton functionality */
const bttn = document.querySelector('.promptbttn');
bttn.addEventListener("click", () => makeGrid(prompt("Enter grid size, max 100")));




/* Functions */

function createColumns(container,gridSize=16)
{
    for (let i = 0; i< gridSize; i++)
    {
        const div = document.createElement('div');
        div.classList.add('content');
        container.appendChild(div);
    }
}

function createBoxes(column,gridSize =16)
{
    for (let j = 0; j<gridSize; j++)
    {
        const div = document.createElement('div');
        div.classList.add('box');
        column.appendChild(div);
        
    }
}

function changeColor(obj){
/* color after mouse over*/
obj.addEventListener("mouseenter",() => obj.style.backgroundColor = "black");

};

function makeGrid(gridSize)
{
/*clear existing grid */
removeGrid();

/*create columns*/    
const container = document.querySelector('.container');
createColumns(container,gridSize);

/*create boxes(rows)*/ 
const columns = document.querySelectorAll('.content');
columns.forEach(inColumn => createBoxes(inColumn,gridSize));

/* color changes*/
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => changeColor(box));
}

function removeGrid()
{
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.remove());

    const columns = document.querySelectorAll('.content');
    columns.forEach(column => column.remove());

}
