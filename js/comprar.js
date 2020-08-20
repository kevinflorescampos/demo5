//VARIABLES
var precio = document.getElementById("precio");
var nombreProducto = document.getElementById("nombreProducto");
var productoImg= document.getElementById("producto-img");
var alerta=document.getElementById('alerta');
var numeroCuenta=document.getElementById("numeroCuenta")


let usuariosOR=obtenerLocalStorage();

var nombreUrl = getParameterByName('nombre');
var precioUrl = getParameterByName('precio');
var imgUrl = getParameterByName('img');

//EVENT LISTENER
eventListener();

function eventListener(){
    document.addEventListener("DOMContentLoaded",iniciarApp);
}

//FUNCIONES
function iniciarApp(e){
    e.preventDefault();
    console.log("inicio la App")

    precio.textContent=precioUrl;
    nombreProducto.textContent=nombreUrl;
    
    var img=document.createElement('img');

    img.src=imgUrl;
    img.classList.add("producto-img")

    productoImg.appendChild(img);

    dniLS=usuariosOR[0].dni;;

    const proxyurl = "https://cors-proxy-solution.herokuapp.com/";

    const url=`https://gestion-usuario-service.herokuapp.com/personas/persona/dni/${dniLS}`;

    fetch(proxyurl+url)
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        
        $('#nombre').val(data.personas[0].nombre);
        $('#dni').val(data.personas[0].dni);

        if(data.personas[0].numeroCuenta!=null){
            numeroCuenta.disabled=true;
            $('#numeroCuenta').val(data.personas[0].numeroCuenta);
        }
        else{
            numeroCuenta.disabled=false;
        }



    })


}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


$('#formComprar').on('submit', function(e){
    e.preventDefault();

    console.log("desea comprar")

    $('#btn-comprar').attr('disabled', 'disabled');
    $('#btn-comprar').html('<i class="fa  fa-spinner fa-spin"></i> Comprando...');


    var nombre=$('#nombre').val();
    var numeroCuenta=$('#numeroCuenta').val();
    var dni=$('#dni').val();
    var cvv=$('#cvv').val();

    //var montoUrl=monto.value;

    var url = `http://localhost:8081/retirarMonto/numeroCuenta/${numeroCuenta}/cvv/${cvv}/monto/${precioUrl}`;

    fetch(url)
    .then(res =>{
        return res.json();
    })
    .then(data=>{
        
        var resultado=data.resultado;

        if(resultado.codigoRespuesta==="200"){
            console.log("se retiro el monto exitosamente")
            location.href="confirmacion.html";
        }
        else{
            console.log("No cuenta con los fondos suficientes")
            $('#btn-comprar').removeAttr('disabled');
            $('#btn-comprar').text("Comprar");
            alerta.style.display="block";
            setTimeout(function(){
                alerta.style.display="none";
            },5000)
        }
        

    })


})

/*
function retirarMonto(dni , monto){

    console.log("Se inicia el retiro");
    console.log(dni);
    console.log(monto);

    let usuariosOR=obtenerLocalStorage();

    var dni = usuariosOR[0].dni;
    console.log(dni);

    var url = `http://localhost:8081/retirarMonto/dni/${dni}/monto/${monto}`;

    fetch(url)
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        console.log("Retiro procesado");

        var resultado=data.resultado;

        console.log("Codigo de Respuesta");
        console.log(resultado.codigoRespuesta);
        

        if(resultado.codigoRespuesta==="200"){
            console.log("se retiro el monto");
            location.href="confirmacion.html";
        }
        else{
            console.log("No se pudo realizar el retiro");
           
        }
        
    })
}

*/


function obtenerLocalStorage(){
    let usuariosOR;

    if(localStorage.getItem('usuarioOR')==null){
        usuariosOR=[];
    }
    else{
        usuariosOR=JSON.parse(localStorage.getItem('usuarioOR'));
    }

    return usuariosOR;
}