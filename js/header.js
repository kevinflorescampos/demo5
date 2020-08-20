
var header=document.querySelector(".header-content");


//eventListener
eventListener();

function eventListener(){
    document.addEventListener("DOMContentLoaded",iniciarApp);
}

//function
function iniciarApp(e){
    
    e.preventDefault();



    var headerinnerHTML=`

    <div class="col-5 col-sm-4 col-md-3 col-lg-2 pt-2 pl-5">
    <img src="img/logoOR.png" alt="" id="logoRB">
    </div>

    <nav class="col-5 col-sm-7 col-md-8  navbar navbar-expand-lg navbar-dark  ">
        <div class="col-12 col-lg-1 row  justify-content-end mx-0">
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        
        <div class="collapse navbar-collapse justify-content-end  " id="navbarNav">
            <ul class="navbar-nav  justify-content-end ">
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="index.html">Home</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="productos.html">Productos</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="promociones.html">Promociones</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="#">Favoritos</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="#">Ayuda</a>
                </li>

    `

    let usuariosOR=obtenerLocalStorage();

    console.log("LocalStorage");
    console.log(usuariosOR);

    if(usuariosOR.length>0){

        console.log("con usuario");
        headeruser=`
        
        <li class="nav-item  ">     
            <a class=" nav-link " href="#"><span class="text-white">${usuariosOR[0].user}</span></a>
        </li>

        <li class="nav-item dropdown">
            <a  class="nav-link dropdown-toggle" 
            data-toggle="dropdown" 
            href="#" role="button" 
            aria-haspopup="true" aria-expanded="false"
            ><i class=" fas fa-user-circle user"></i></a>
            <div class="dropdown-menu " id="dp">
                <a class="dropdown-item" href="perfil.html">Perfil</a>
                <a class="dropdown-item" href="#">Compras</a>
                <a class="dropdown-item" href="logout.html">Cerra Sesion</a>
            </div>
        </li>
    </ul>

    </div>

    </nav>
        
        `


        headerinnerHTML=headerinnerHTML+headeruser;

    }
    else{

        console.log("sin usuario");

        headerinnerHTML=headerinnerHTML+`
        
            <li class="nav-item  ">
                    
                <a class="text-white nav-link" href="signin.html">Iniciar Session</a>
                </li>

            
        </ul>

        </div>

        </nav>
            
            
        `
    }
    
    header.innerHTML=headerinnerHTML;
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



/*
<div class="col-5 col-sm-5 col-md-3 pt-3 pl-5">
    <img src="img/logoRB.png" alt="" id="logoRB">
    </div>

    <nav class="col-5 col-sm-7 col-md-8  navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="col-12 col-lg-1 row  justify-content-end mx-0">
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        
        <div class="collapse navbar-collapse justify-content-end  " id="navbarNav">
            <ul class="navbar-nav  justify-content-end ">
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="index.html">Home</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="#">Productos</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="buscar.html">Promociones</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="publicarGratis.html">Ayuda y Contaco</a>
                </li>
                <li class="nav-item  mx-2"    >
                    <a class="btn btn-primary" href="empresa.html">Abre tu cuenta</a>
                </li>

                <li class="nav-item  ">
                
                    <a class=" nav-link " href="#"><span class="text-white">AZAMORA</span></a>
                </li>

                <li class="nav-item dropdown">
                    <a  class="nav-link dropdown-toggle" 
                    data-toggle="dropdown" 
                    href="#" role="button" 
                    aria-haspopup="true" aria-expanded="false"
                    ><i class=" fas fa-user-circle user"></i></a>
                    <div class="dropdown-menu " id="dp">
                        <a class="dropdown-item" href="#">Perfil</a>
                        <a class="dropdown-item" href="#">Ofertas</a>
                        <a class="dropdown-item" href="#">Cerra Sesion</a>
                    </div>
                </li>
            </ul>

        </div>
        
    </nav>


*/



//sin user
/*

<div class="col-5 col-sm-5 col-md-3 pt-3 pl-5">
    <img src="img/logoRB.png" alt="" id="logoRB">
    </div>

    <nav class="col-5 col-sm-7 col-md-8  navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="col-12 col-lg-1 row  justify-content-end mx-0">
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        
        <div class="collapse navbar-collapse justify-content-end  " id="navbarNav">
            <ul class="navbar-nav  justify-content-end ">
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="index.html">Home</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="#">Productos</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="buscar.html">Promociones</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link text-white" href="publicarGratis.html">Ayuda y Contaco</a>
                </li>
                <li class="nav-item  mx-2"    >
                    <a class="btn btn-primary" href="cuenta.html">Abre tu cuenta</a>
                </li>

                <li class="nav-item  ">
                
                    <a class="btn btn-success " href="signin.html">Banca por Internet</a>
                </li>

                
            </ul>

        </div>
        
    </nav>


*/