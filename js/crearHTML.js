console.log("javascript cargado");

//Datos identificatorios
const datosPersonales = document.getElementById("datosPersonales");
var datosUsuario = localStorage.getItem('persona');
const usuario1 = JSON.parse(datosUsuario);

function datosPrincipales(){
    datosPersonales.innerHTML = `<h1>${usuario1.nombre}</h1>
                                 <h2>${usuario1.profesion}</h2>
                                 <h3>Sobre Mí</h3>
                                 <p>${usuario1.sobreMi}</p>`
}
datosPrincipales();

//Habilidades
const habilidades = document.getElementById("habilidades");
var skillsUsuario = localStorage.getItem('habilidades');
const habilidades1 = JSON.parse(skillsUsuario);

function habilidadesUsuario(){
    habilidades.innerHTML = `<h2>HABILIDADES</h2>
                                <ul>
                                    <li>${habilidades1.hab1}</li>
                                    <li>${habilidades1.hab2}</li>
                                    <li>${habilidades1.hab3}</li>
                                </ul>`
}
habilidadesUsuario();

//Educacion
const educacion = document.getElementById("educacion");
var eduUsuario = localStorage.getItem('educacion');
const educacion1 = JSON.parse(eduUsuario);

function educacionUsuario(){
    educacion.innerHTML = `<h2>EDUCACION</h2>
                            <ul>
                                <li>
                                    <h3>${educacion1.instituto}</h3>
                                    <p>${educacion1.titulo}</p>
                                    <p>${educacion1.fecha}</p>
                                </li>
                            </ul>`
}
educacionUsuario();

//Experiencia
const experiencia = document.getElementById("experiencia");
var expUsuario = localStorage.getItem('experiencia');
const experiencia1 = JSON.parse(expUsuario);

function experienciaUsuario(){
    experiencia.innerHTML = `<h2>EXPERIENCIA</h2>
                                <ul>    
                                    <li>
                                        <h3>${experiencia1.puesto}</h3>
                                        <p>${experiencia1.empresa}</p>
                                        <p class="fecha">${experiencia1.fecha}</p>
                                        <p>${experiencia1.tareas}</p>
                                    </li>
                                </ul>`
}
experienciaUsuario();

//Contacto
const contacto = document.getElementById("contacto");
var contactUsuario = localStorage.getItem('contacto');
const contacto1 = JSON.parse(contactUsuario);

function contactoUsuario(){
    contacto.innerHTML =    `<div id="tel">
                                <img src="../img/telefono.png" alt="">
                                <p>${contacto1.tel}</p>
                            </div>
                            <div id="email">
                                <img src="../img/email.png" alt="">
                                <p>${contacto1.email}</p>
                            </div>
                            <div id="ubicacion">
                                <img src="../img/ubicacion.png" alt="">
                                <p>${contacto1.ubicacion}</p>
                            </div>`
}
contactoUsuario();