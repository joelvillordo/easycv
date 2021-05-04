const datosPersonales = $("#datosPersonales");
const habilidades = $("#habilidades");
const educacion = $("#educacion");
const experiencia = $("#experiencia");
const contacto = $("#contacto");


$(document).ready(function(){
    //JSON local de donde sacamos los datos
    const urlAPI = 'https://joelvillordo.github.io/clase14Ajax/data/data.json';
    //Peticion AJAX para cargar datos al html
    $.ajax({
        method: 'GET',
        url: urlAPI,
        success: function(res){
            console.log(res);
            var datos = res;
            datosPersonales.html(`<h1>${datos[0].nombre}</h1>
                                 <h2>${datos[0].profesion}</h2>
                                 <h3>Sobre Mí</h3>
                                 <p>${datos[0].sobreMi}</p>`);
            habilidades.html(`<h2>HABILIDADES</h2>
                                 <ul>
                                     <li>${datos[1].hab1}</li>
                                     <li>${datos[1].hab2}</li>
                                     <li>${datos[1].hab3}</li>
                                 </ul>`);
            educacion.html(`<h2>EDUCACION</h2>
                                 <ul>
                                     <li>
                                         <h3>${datos[2].instituto}</h3>
                                         <p>${datos[2].titulo}</p>
                                         <p>${datos[2].fecha}</p>
                                     </li>
                                 </ul>`); 
            experiencia.html(`<h2>EXPERIENCIA</h2>
                                 <ul>    
                                     <li>
                                         <h3>${datos[3].puesto}</h3>
                                         <p>${datos[3].empresa}</p>
                                         <p class="fecha">${datos[3].fecha}</p>
                                         <p>${datos[3].tareas}</p>
                                     </li>
                                 </ul>`);
            contacto.html( `<div id="tel">
                                <img src="../img/telefono.png" alt="">
                                <p>${datos[4].tel}</p>
                            </div>
                            <div id="email">
                                <img src="../img/email.png" alt="">
                                <p>${datos[4].email}</p>
                            </div>
                            <div id="ubicacion">
                                <img src="../img/ubicacion.png" alt="">
                                <p>${datos[4].ubicacion}</p>
                            </div>`);          
        }
    });
});