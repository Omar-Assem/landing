let btnLogin = document.getElementById('btn-login') 
let userName = document.getElementById('username')
let password = document.getElementById('password')
let validation = document.querySelectorAll('.validation')
let available = document.querySelectorAll('.available')

let account = JSON.parse(localStorage.getItem('account')) || []
console.log(account);

btnLogin.addEventListener('click', function() {
    
 
    if (userName.value.trim() != '' || password.value.trim() != '') {
      

    
  
    let account = JSON.parse(localStorage.getItem('account')) || [];
  
    
    let user = account.find((u) => u.username === userName.value && u.password === password.value);
   
   
    
  
    if (user) {
     
      localStorage.setItem('login', JSON.stringify(user));
      
   
      window.location.href = 'index.html';
    }else if(userName.value.trim() !=account.username  || password.value.trim() != account.password){
      available.forEach((e)=> e.classList.remove('d-none'))
    }
     else {
      validation.forEach((e)=> e.classList.remove('d-none'))
    }
  }});
  
