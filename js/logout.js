

eventListener();

function eventListener(){
    document.addEventListener('DOMContentLoaded',iniciarApp);
}

function iniciarApp(){
    localStorage.removeItem('usuarioOR');
    location.href="index.html";
}