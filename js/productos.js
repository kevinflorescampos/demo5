
$(document).on('click', function(e){
    e.preventDefault();


    console.log(e.target.className);
    
    if(e.target.classList.contains("btn-comprar")){
        console.log("Si quiere comprar")
        var parent=e.target.parentElement.parentElement;
        var parent1=parent.parentElement;

        var img=parent1.children[0].children[0].getAttribute("src");

        var precio=parent.children[2].children[0].textContent;
        var nombre = parent.children[0].textContent;
 

        location.href=`comprar.html?nombre=${nombre}&precio=${precio}&img=${img}`;

    }
})