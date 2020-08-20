

eventListener()

function eventListener(){
    document.addEventListener("DOMContentLoaded",iniciarApp);
}

function iniciarApp(e){
    e.preventDefault();

    setTimeout(function(){
        location.href="productos.html";
    },3000)

}