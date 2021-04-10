const addTodo = () => {
    let newTask = textIn.value
    let date = setDate.value

    if (newTask != '') {
        todosArray.push({
            title: newTask,
            checked: false,
            date,
        })
        localStorage.setItem('todos', JSON.stringify(todosArray))

        renderTodoItem()
        textIn.value = ''
        setDate.value = ''
    }
}
const deleteTodo = (e) => {
    // удаляет только из DOM
    // e.currentTarget.parentNode.remove(e.parentNode)
    // console.log('delete')

    let index = parseInt(e.target.parentNode.getAttribute('key'))
    todosArray.splice(index, 1)
    console.log(todosArray)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    renderTodoItem()
}

const completeTodo = (e) => {
    let todosTemperory = [...todosArray]

    let index = parseInt(e.target.parentNode.getAttribute('key'))
    // console.log(typeof parseInt(e.target.parentNode.id))
    // console.log(typeof e.target.parentNode.id)
    // console.log(index)
    // console.log(todosArray[index])

    let objElement = todosTemperory[index].checked
    todosTemperory[index].checked = !objElement

    localStorage.setItem('todos', JSON.stringify(todosTemperory))
    // console.log(todosTemperory)
    let isDone = e.currentTarget.parentNode.classList.contains('done')
    isDone
        ?
        e.currentTarget.parentNode.classList.remove('done') :
        e.currentTarget.parentNode.classList.add('done')
}
const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_page=1')
        .then(response => response.json())
        .then(array => {
            console.log(array)
            localStorage.setItem('todos', JSON.stringify(array))
        })
}
getTodos()