var tbody=document.querySelector('#table tbody');




$(document).ready(function(){
    console.log("comenzo");

    var url="http://35.184.111.74/demo/roles";

    fetch(url)
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        console.log(data);

        var innerHtml=``;         

        var roles=data.rol;
        roles.forEach(rol => {
            innerHtml =innerHtml +
                `
                <tr>
                    <td>${rol.id}</td>
                    <td>${rol.rol}</td>
                </tr>
                `;
        });


        tbody.innerHTML=innerHtml;

    })
})

