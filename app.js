function getUsers(){
  return JSON.parse(localStorage.getItem('users')||'[]');
}

function saveUsers(users){
  localStorage.setItem('users', JSON.stringify(users));
}

function register(){
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let users = getUsers();
  users.push({name,email,password});
  saveUsers(users);

  alert("Registered Successfully");
}

function login(){
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let users = getUsers();

  let user = users.find(u => u.email===email && u.password===password);

  if(user){
    alert("Login Success");
    window.location = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}