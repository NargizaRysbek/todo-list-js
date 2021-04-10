let todosArray = localStorage.getItem('todos') == null ? [] :
    [...JSON.parse(localStorage.getItem('todos'))]
// console.log(localStorage.getItem('todos'))

addBtn.addEventListener('click', addTodo)

const createItem = (item, id) => {
    let items = `<li 
    key="${id}"
    class="${item.checked ? 'taskItem done' : 'taskItem'}
    " >${item.title} ${item.date ? item.date : ''}
      <img class="btn" src="./done.png" onclick="completeTodo(event)"/>
      <img class="btn" src="./delete.png" onclick="deleteTodo(event)"/></li>`

    return items
}

const renderTodoItem = () => {
    list.innerHTML = ''
    let items = []

    todosArray.length ?
        todosArray.map((item, id) => {
            items.unshift(createItem(item, id))
            list.innerHTML = items.join('')
        }) :
        list.prepend('Нету задач')
}
renderTodoItem()