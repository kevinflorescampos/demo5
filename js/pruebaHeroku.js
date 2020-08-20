//variables
var tbody=document.querySelector("#tbl-menu tbody");

let myHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    
});

myHeaders.append('GET', 'POST', 'OPTIONS');



//Eliminar un elemento de la tabla
$(document).on('click', '#btn-eliminar', function(e){
    e.preventDefault();

    var tr=e.target.parentElement.parentElement.parentElement;
    let id=tr.children[0].textContent;

    const proxyurl = "https://cors-proxy-solution.herokuapp.com/";
    const url = "https://gestion-ticket-service.herokuapp.com/menu/menus/"+id;

    fetch(proxyurl + url,{
        method: 'DELETE', 
        headers: myHeaders
    })
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        tr.remove();
    })


})




//Cargar los elementos de la base de datos
$(document).ready(function(){

    const proxyurl = "https://cors-proxy-solution.herokuapp.com/";
    const url = "https://gestion-ticket-service.herokuapp.com/menu/menus";
    fetch(proxyurl + url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){

        tbody.innerHTML=``;

        var menus=data.menu;

        menus.forEach(menu => {
            var tr=document.createElement("tr");

            var innerMenu=`
                <th scope="row">${menu.id}</th>
                <td>${menu.platoPrincipal}</td>
                <td>${menu.platoSecundario}</td>
                <td>${menu.bebida}</td>
                <td>${menu.postre}</td>
                <td>
                <div class="row justify-content-around">
                <button type="button" class="btn btn-outline-danger col-md-4" id="btn-eliminar">Eliminar</button>
                <button type="button" class="btn btn-outline-warning col-md-4" id="btn-modificar" data-toggle="modal" data-target="#modal-menu" >Modificar</button>
                </div>
                
                </td>
            `;

            tr.innerHTML=innerMenu;
            tbody.appendChild(tr);
            
        });
    })
})





//Modificar un elemento
$(document).on('click','#btn-modificar', function(e){
    e.preventDefault();
    var tr=e.target.parentElement.parentElement.parentElement;

    var id=tr.children[0].textContent;
    var platoPrincipal=tr.children[1].textContent;
    var platoSecundario=tr.children[2].textContent;
    var bebida=tr.children[3].textContent;
    var postre=tr.children[4].textContent;

    $('#modal-titulo').text('Modificar Menu');

    $('#id').val(id);
    $('#platoPrincipal').val(platoPrincipal);
    $('#platoSecundario').val(platoSecundario);
    $('#bebida').val(bebida);
    $('#postre').val(postre);


})


//Crear un nuevo elemento
$('#btn-nuevo').on('click', function(e){
    e.preventDefault();
    var id=null;
    $('#id').val(id);
    $('#platoPrincipal').val('')
    $('#platoSecundario').val('')
    $('#bebida').val('')
    $('#postre').val('')

    $('#modal-titulo').text('Nuevo Menu');

})


//Se hace POST a la BD
$('#frm-modal').on('submit', function(e){

    e.preventDefault();
    $('#btn-guardar').attr('disabled', 'disabled');
    $('#btn-guardar').html('<i class="fa fa-circle-o-notch fa-spin"></i> Guardando...');


    const proxyurl = "https://cors-proxy-solution.herokuapp.com/";
    const url = "https://gestion-ticket-service.herokuapp.com/menu/menus";

    /*
    var request = 
        {
        "id":$('#id').val(),
        "platoPrincipal" : $('#platoPrincipal').val(),
	    "platoSecundario" : $('#platoSecundario').val(),
	    "bebida":$('#bebida').val(),
	    "postre":$('#postre').val(),
	    "estado":"1"
        }
        ;
    */
        
    var request={};
    request.id=$('#id').val();
    request.platoPrincipal= $('#platoPrincipal').val();
    request.platoSecundario= $('#platoSecundario').val();
    request.bebida= $('#bebida').val();
    request.postre= $('#postre').val();
    request.estado='1';      
    

    fetch(proxyurl + url,{
        method: 'POST',
        body: JSON.stringify(request), 
        headers: myHeaders
    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        setTimeout(function(){
            $('#btn-guardar').removeAttr('disabled');
            $('#btn-guardar').text("Guardar");
            setTimeout(function(){
                $('#modal-menu').modal('toggle');
                
            },500)
            
        },1500)
        
        
    })


})



/**
 * Enviar metodo post
 * var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
 * 
 * 
 * 
 * 
 * para crear cabeceras
 * var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");


myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});

*/