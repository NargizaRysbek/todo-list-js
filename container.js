// creating the main container
let main = document.createElement('main')
main.classList.add('container')

document.body.prepend(main)
// creating greating text
let projectName = document.createElement('h1')
projectName.innerHTML = " Let's do it Nargiza!"
main.append(projectName)

// creating block for future list
let listBlock = document.createElement('div')
listBlock.className = 'mainBlock'
main.append(listBlock)

// creating a block-parent for creating a new to do list
let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

// creating input for new to do 
let textIn = document.createElement('input')
textIn.className = 'textIn'
textIn.setAttribute('placeholder', 'Gonna do...')
firstDiv.append(textIn)

// creating input with type of date 
let setDate = document.createElement('input')
setDate.setAttribute('type', 'date')
firstDiv.append(setDate)


// creating add button
let addBtn = document.createElement('button')
addBtn.innerHTML = 'Add'
addBtn.id = 'addBtn'
firstDiv.append(addBtn)

// add to do
// addBtn.setAttribute('onclick', "addTodo()")   не рекомендуется
let list = document.createElement('ul')
listBlock.append(list)




