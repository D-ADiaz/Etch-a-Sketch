const container = document.querySelector('.container');



const div = document.createElement('div');
div.classList.add('content');



for (let i = 0; i< 16; i++)
{
    const div = document.createElement('div');
    div.classList.add('content');
    container.appendChild(div);
}

let columns = document.querySelectorAll('.content');

columns.forEach(column => createBoxes(column));

function createBoxes(column){
    for (let j = 0; j<16; j++){
    const div = document.createElement('div');
    div.classList.add('box');
    column.appendChild(div);
    }
}
/*for (let j = 0; j <16; j++){

    const div = document.createElement('div');
    div.classList.add('box');
    column.appendChild(div);
}*/