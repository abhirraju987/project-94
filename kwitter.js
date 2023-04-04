function addUser(){
user_name = document.getElementById("user_name").innerHTML;
localStorage.setItem("user_name", user_name);
window.location="kwitterroom.html";
}


