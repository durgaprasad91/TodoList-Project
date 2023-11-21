const todolist = [{
    name : 'Wash',
    duedate : '2023-12-03'
}];
rendertohtml();
function rendertohtml(){
    
    let todolisthtml='';

    for(let i = 0;i < todolist.length;i++){
        const todoObject = todolist[i];
        const {name ,duedate} =todoObject;
        const html =`
            <div>${name}</div>
            <div>${duedate}</div>
            <button onclick="
                todolist.splice(${i}, 1);
                rendertohtml();
            "class="button-input">Delete</button>
        `;
        todolisthtml += html;
    }
    

    document.querySelector('.js-name-todo').innerHTML = todolisthtml;
}

function add(){
    const inputElement = document.querySelector('.js-name');
    const name=inputElement.value
    const inputduedate = document.querySelector('.js-duedate');
    const duedate=inputduedate.value;
    todolist.push({
        name,
        duedate
    });
    

    inputElement.value = ''
    inputduedate.value = ''
    rendertohtml();
}