const signinBtn = document.querySelector('.signinBtn')
const signupBtn = document.querySelector('.signupBtn')
const formBox = document.querySelector('.formBox')
const mainBody = document.querySelector('.login-registration-001')

signupBtn.onclick = function(){
    formBox.classList.add('active')
    mainBody.classList.add('color')
}

signinBtn.onclick = function(){
    formBox.classList.remove('active')
    mainBody.classList.remove('color')
}