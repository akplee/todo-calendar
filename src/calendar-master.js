let calendar = document.querySelector('.calendar')
let todoList = document.querySelector('.todo-list')
let goBack = document.querySelector('.goBack')
let days = document.querySelectorAll('.day')
console.log('123')

days.forEach(day => {
    day.addEventListener('click', () => {
        todoList.classList.add('active')
        calendar.classList.add('active')
    })
  })

goBack.onclick = function(){
    calendar.classList.remove('active')
    todoList.classList.remove('active')
}