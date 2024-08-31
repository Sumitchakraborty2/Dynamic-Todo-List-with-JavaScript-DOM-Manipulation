let todos = [];
let count = 1;
// add todo
document.getElementById('add-btn').addEventListener('click', () => {
    let value = document.querySelector('#task-input').value.trim();
    todos.push({
        title: value
    })
    render();
})

// delete todo
function deleteTodo(index){
    todos.pop(index);
    render();
}

// edit todo
function editTodo(index){
    const content = document.getElementById(`content-${index}`);
    const edit_btn = document.getElementById(`edit_btn-${index}`);

    if(content.contentEditable === 'true'){
        content.contentEditable = 'false';
        edit_btn.textContent = 'Edit';
    } else{
        content.contentEditable = 'true';
        content.focus();
        edit_btn.textContent = 'Done';
    }
    todos[index].title = content.innerHTML;
}

function TodoComponent(todo,index){
    const main_div = document.createElement('div');
    const content = document.createElement('div');
    const edit_btn = document.createElement('button');
    const del_btn = document.createElement('button');
    
    del_btn.innerHTML = 'Delete';
    del_btn.setAttribute('onclick', `deleteTodo(${index})`);
    del_btn.setAttribute('class','bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg transition space-x-1 font-mono')

    content.innerHTML = todo.title;
    content.setAttribute('id', `content-${index}`);
    content.setAttribute('class','font-mono');

    edit_btn.innerHTML = 'Edit';
    edit_btn.setAttribute('id', `edit_btn-${index}`);
    edit_btn.setAttribute('onclick', `editTodo(${index})`);
    edit_btn.setAttribute('class','bg-green-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-lg transition space-x-1 font-mono');

    main_div.setAttribute('id', `todos-${index+1}`);
    main_div.setAttribute('class','flex items-center justify-between bg-cyan-700 p-3 rounded-lg space-x-3 font-mono');
    main_div.appendChild(content);
    main_div.appendChild(del_btn);
    main_div.appendChild(edit_btn);

    return main_div;
}


function render(){
    const list = document.getElementById('lst');
    list.innerHTML = '';

    todos.forEach((todo,index)=> {
        let div = TodoComponent(todo,index);
        list.appendChild(div);
        let inputEl = document.getElementById('task-input'); 
        inputEl.placeholder = 'Enter your todo here';      
        inputEl.value = '';                                 

    
    })
    
}