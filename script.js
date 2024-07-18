let $ = document
let inputElem = $.querySelector('input')
let addBtnModal = $.querySelector('.btn')
let removeModal = $.querySelector('.remove-modal')
let statusBox = $.querySelector('.status')
let todos = $.querySelector('.work-container')
let removeTodoSpan = $.querySelector('.x')
let addTodoInList = $.querySelector('.add')
let modal = $.querySelector('.modal')
let notStartDiv = $.querySelector('.start')
let inProgressDiv = $.querySelector('.progress')
let completeDiv = $.querySelector('.complete')
let warningModal = $.querySelector('.warning-modal')

// click event on add todo box to show modal//
addTodoInList.addEventListener('click', function () {
    modal.style.display = 'block'
})

// adding a new todo //
addBtnModal.addEventListener('click', function () {
    if (inputElem.value === '') {
        warningModal.style.display = 'block'
        setTimeout(function () {
            warningModal.style.display = 'none'
        }, 2000)
    } else {
        let newTodo = inputElem.value
        let newLiTodo = document.createElement('li')
        newLiTodo.classList.add('work')
        newLiTodo.setAttribute('draggable', 'true')
        newLiTodo.setAttribute('id', 'drag')
        newLiTodo.innerHTML = newTodo
        todos.append(newLiTodo)
        newLiTodo.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('elemId', event.target.id)
            console.log(event.target.id);
        })
        let newSpan = document.createElement('span')
        newSpan.classList.add('x')
        newSpan.innerHTML = 'x'
        newLiTodo.append(newSpan)
        inputElem.value = ''
        newSpan.addEventListener('click', function () {
            newLiTodo.remove()
        })
    }
})

//remove modal//
removeModal.addEventListener('click', function () {
    modal.style.display = 'none'
})

// functions for drag and drop events//
notStartDiv.addEventListener('dragover', function (event) {
    event.preventDefault()
})

notStartDiv.addEventListener('drop', function (event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)
    event.target.append(targetElem)
})

inProgressDiv.addEventListener('dragover', function (event) {
    event.preventDefault()
})

inProgressDiv.addEventListener('drop', function (event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)
    event.target.append(targetElem)
})

completeDiv.addEventListener('dragover', function (event) {
    event.preventDefault()
})

completeDiv.addEventListener('drop', function (event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)
    event.target.append(targetElem)
})



