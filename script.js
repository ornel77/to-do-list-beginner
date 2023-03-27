/* ------------------------------- GET ELEMENT ------------------------------ */

const form = document.querySelector('form')
const list = document.querySelector('.todo-list')
const input = document.querySelector('.todo-input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const item = document.createElement('li')
    item.classList.add('todo-item')
    item.innerHTML = input.value
    list.append(item)
    input.value = ''
})