//variables
var user=document.getElementById('usuario');
var password=document.getElementById('password');

//eventListener

$('#formLogin').on('submit',function (e){
    e.preventDefault();
    console.log("Solicitando ingreso");



    const proxyurl = "https://cors-proxy-solution.herokuapp.com/";

    const url=`https://gestion-usuario-service.herokuapp.com/usuarios/usuario/user/${user.value}/password/${password.value}`;


    fetch(proxyurl+url)
    .then(res =>{
        return res.json();
    })
    .then(data =>{

        console.log("Se consiguio la validacion de ingreso");

        if(data.usuarios!=null){
            var dni=data.usuarios[0].dni;

        
            if(data.resultado.codigoRespuesta==="200"){

                var usuario={
                    user : user.value,
                    dni : dni
                }
            
                agregarLocalStorage(usuario);
                location.href ="index.html";
            }
            else{
                console("mensaje de respuesta incorrecto")
            }
        }
        
        else{
            console.log("Usuario o password invalido")
        }


    })





})


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

function agregarLocalStorage(usuarioOR){
    var usuarios=obtenerLocalStorage();
    usuarios.push(usuarioOR);

    localStorage.setItem('usuarioOR',JSON.stringify(usuarios));
}





//Function