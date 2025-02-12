let username = document.getElementById('username');
let password = document.getElementById('password');
let btnSign = document.getElementById('btnSign');

// localStorage
let account = []


btnSign.addEventListener('click', function () {
if(username.value && password.value != ''){
    account.push({username:username.value,password: password.value})
    localStorage.setItem('account', JSON.stringify(account))
   
}
 username.value = ''
    password.value = ''
})
