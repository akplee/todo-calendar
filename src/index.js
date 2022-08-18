let signInBtn = document.querySelector('#loginBtn')
let calendarMaster = document.querySelector('.calendar-master')
let loginForm = document.querySelector('.login-registration-001')


signInBtn.onclick = function(){
    loginForm.classList.remove('active')
    calendarMaster.classList.add('active')
}
