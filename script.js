const input = document.querySelector('#inp')
const button = document.querySelector('#btn')
const ul = document.querySelector('ul')
const li = document.querySelector('li')


let isEdit = false
let editingId = null

function generateRandomNumber() {
    return Math.floor(Math.random() * 10000)
}



function creatTextNode(text) {

    const li = document.createElement('li')
    const paragraph = document.createElement('p')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')


    const id =  generateRandomNumber()

    li.id = id
    
    li.appendChild(paragraph)
    li.appendChild(deleteButton)
    li.appendChild(editButton)


    paragraph.innerText = text
    deleteButton.textContent = "Delete"
    editButton.textContent = "Edit"


    deleteButton.addEventListener('click', () => {
        li.remove()
    })

    editButton.addEventListener('click', () => {
        isEdit = true
        editingId = id
        input.value = paragraph.innerHTML
    })

    return li
}

function removeInputValue() {
    input.value = ""
}

function getInputValue() {
    return input.value
}

function editfunction(text) {
    const targetElement = document.getElementById(editingId)
    targetElement.querySelector('p').innerText = text

    isEdit = false
    editingId = null
}

function submitAction() {
    const text = getInputValue()

    if (isEdit) {
        editfunction(text)
    }

    else {
        const li = creatTextNode(text)
        ul.appendChild(li)
    }

    removeInputValue()
}

button.addEventListener('click', submitAction)