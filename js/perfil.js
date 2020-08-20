//VARIABLES
let usuariosOR=obtenerLocalStorage();
var botonCuenta=document.getElementById('botonCuenta');
var numeroCuenta=document.getElementById('numeroCuenta');
var alerta=document.getElementById('alerta');

let myHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
});


//FUNCIONES
$(document).ready(function(){
    
    var dniLS=usuariosOR[0].dni;
    console.log(dniLS);
    var url=`https://gestion-usuario-service.herokuapp.com/personas/persona/dni/${dniLS}`;

    fetch(url)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data);
        $('#nombre').val(data.personas[0].nombre);
        $('#dni').val(data.personas[0].dni);
        $('#telefono').val(data.personas[0].telefono);
        $('#correo').val(data.personas[0].correo);

        var numCuenta=data.personas[0].numeroCuenta;
        if(numCuenta!=null){
            $('#numeroCuenta').val(data.personas[0].numeroCuenta);
            numeroCuenta.disabled=true;
            botonCuenta.innerHTML=`
            <button class="col-5 btn btn-warning mx-auto" type="" id="btnEditar">Editar</button>
            `
        }
        else{
            
            botonCuenta.innerHTML=`
                <button class="col-5 btn btn-success mx-auto" type="submit" id="btnGuardar">Guardar</button>
            `
            
        }
    })
})


$('#formNumCuenta').on('submit',function(e){
    e.preventDefault();
    console.log('quiere actualizar');

    numCuentaUrl=$('#numeroCuenta').val();
    


    var url=`http://localhost:8081/validarCuenta/numeroCuenta/${numCuentaUrl}`;

    fetch(url)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data);

        var resultado=data.resultado;

        if(resultado.codigoRespuesta==="200"){
            console.log("Numero de Cuenta valido")

            actualizarCuenta();

            alerta.innerHTML=`
                <div class="alert alert-succes text-center mb-0" role="alert">
                    Operacion Exitosa!
                </div>
            `;
            setTimeout(function(){
                alerta.innerHTML=``;
            },4000)

        }
        else{
            console.log("Numero de cuenta invalido");

            alerta.innerHTML=`
            <div class="alert alert-danger text-center mb-0 " role="alert">
                Numero de cuenta invalido!
            </div>
            ` ;

            console.log("arr");

            setTimeout(function(){
                alerta.innerHTML=``;
            },5000)

        }
    })

})


function actualizarCuenta(){

    console.log('Apto para actualizar');


    var request={};
    request.nombre= $('#nombre').val();
    request.dni= $('#dni').val();
    request.correo= $('#correo').val();
    request.telefono= $('#telefono').val();
    request.numeroCuenta =$('#numeroCuenta').val();
    

    const proxyurl = "https://cors-proxy-solution.herokuapp.com/";
    var url=`https://gestion-usuario-service.herokuapp.com/personas/persona`;

    fetch(proxyurl+url,{
        method: 'POST',
        body: JSON.stringify(request), 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data);

        var resultado=data.resultado;

        if(resultado.codigoRespuesta==="200"){
            console.log("Cuenta actualizada")

            numeroCuenta.disabled=true;

            botonCuenta.innerHTML=`
            <button class="col-5 btn btn-warning mx-auto" type="" id="btnEditar">Editar</button>
            `

        }
        else{
            console.log("Error al actualizar cuenta");
        }
    })


}


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
