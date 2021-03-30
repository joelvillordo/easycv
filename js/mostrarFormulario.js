//Acceso al DOM
const aboutMe = document.getElementById("aboutMe");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const works = document.getElementById("works");
const contact = document.getElementById("contact");
const loading = document.getElementById("loading");
const boton1 = document.getElementById("form1");
const boton2 = document.getElementById("form2");
const boton3 = document.getElementById("form3");
const boton4 = document.getElementById("form4");
const boton5 = document.getElementById("form5");

//Variables, Objetos, Arrays
let usuario = [];

class Persona{
    constructor(nombre, profesion, sobreMi){
        this.nombre = nombre;
        this.profesion = profesion;
        this.sobreMi = sobreMi;
    }
}
class Habilidades{
    constructor(hab1, hab2, hab3){
        this.hab1 = hab1;
        this.hab2 = hab2;
        this.hab3 = hab3;
    }
}
class Educacion{
    constructor(inst, titulo, fecha){
        this.instituto = inst;
        this.titulo = titulo;
        this.fecha = fecha;
    }
}
class Experiencia{
    constructor(puesto, empresa, fecha, tareas){
        this.puesto = puesto;
        this.empresa = empresa;
        this.fecha = fecha;
        this.tareas = tareas;
    }
}
class Contacto{
    constructor(tel, email, ubicacion){
        this.tel = tel;
        this.email = email;
        this.ubicacion = ubicacion;
    }
}

//Funcion para guardar en el Local Storage y despues recuperar en el modelo los datos
function guardarDatos(a){
    var a = JSON.stringify(a);
    localStorage.setItem('a', a);
}
//Enviar datos de About y pasar a Skills
function mostrarSkills(){
    //Escondo el formulario de about y muestro el siguiente
    aboutMe.style.setProperty('display', 'none');
    skills.style.setProperty('display', 'block');
}
function subirAbout(e) {
    //Anulo la recarga de la pagina
    e.preventDefault();
    //Recolecto los datos del formulario para crear el HTML
    let datosAbout = e.target;
    var nombre = datosAbout.children[1].value;
    var profesion = datosAbout.children[3].value;
    var sobreMi = datosAbout.children[5].value;
    //Guardo los datos en un objeto y luego los pusheo al array del usuario
    const persona = new Persona(nombre, profesion, sobreMi);
    usuario.push(persona);
    mostrarSkills();
    console.log(usuario);
    //guardar en LocalStorage    
    var persona1 = JSON.stringify(persona);
    localStorage.setItem('persona', persona1);
}
boton1.addEventListener("submit", subirAbout);

//Enviar datos de Skills y pasar a Education
function mostrarEducation(){
    skills.style.setProperty('display', 'none');
    education.style.setProperty('display', 'block');
}
//Mismo funcionamiento para guardar las habilidades ingresadas por el usuario
function subirSkills(e){
    e.preventDefault();
    let datosSkills = e.target;
    var skill1 = datosSkills.children[1].value;
    var skill2 = datosSkills.children[3].value;
    var skill3 = datosSkills.children[5].value;
    const habilidades = new Habilidades(skill1, skill2, skill3);
    usuario.push(habilidades);
    mostrarEducation();
    console.log(usuario);
    //guardar en LocalStorage    
    var guardarSkills = JSON.stringify(habilidades);
    localStorage.setItem('habilidades', guardarSkills);
}
boton2.addEventListener("submit", subirSkills);

//Enviar datos de Education y pasar a Works
function mostrarWorks(){
    education.style.setProperty('display', 'none');
    works.style.setProperty('display', 'block');
}
function subirEducation(e){
    e.preventDefault();
    const datosEducation = e.target;
    var instituto = datosEducation.children[1].value;
    var titulo = datosEducation.children[3].value;
    var fechaTitulo = datosEducation.children[5].value;
    const educacion =  new Educacion(instituto, titulo, fechaTitulo);
    usuario.push(educacion);
    console.log(usuario);
    mostrarWorks();
    //guardar en Local Storage   
    var educacion1 = JSON.stringify(educacion);
    localStorage.setItem('educacion', educacion1);
}
boton3.addEventListener("submit", subirEducation);

//Enviar datos de Works y pasar a Contact
function mostrarContact(){
    works.style.setProperty('display', 'none');
    contact.style.setProperty('display', 'block');
}
function subirWorks(e){
    e.preventDefault();
    const datosWorks = e.target;
    var puesto = datosWorks.children[1].value;
    var empresa = datosWorks.children[3].value;
    var tiempo = datosWorks.children[5].value;
    var tareas = datosWorks.children[7].value;
    const experiencia = new Experiencia(puesto, empresa, tiempo, tareas);
    usuario.push(experiencia);
    console.log(usuario);
    mostrarContact();
    //guardar en Local Storage   
    var experiencia1 = JSON.stringify(experiencia);
    localStorage.setItem('experiencia', experiencia1);
}
boton4.addEventListener("submit", subirWorks);

//Enviar datos de Contact y pasar al modelo elegido
function mostrarLoading(){
    contact.style.setProperty('display', 'none');
    loading.style.setProperty('display', 'block');
}
//funcion para abrir una nueva tab con el cv armado
function abrirNuevoTab(url) {
    // Abrir nuevo tab
    var win = window.open(url , '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
  }

function subirContact(e){
    e.preventDefault();
    const datosContact = e.target;
    var tel = datosContact.children[1].value;
    var email = datosContact.children[3].value;
    var ubicacion = datosContact.children[5].value;
    const contacto = new Contacto(tel, email, ubicacion);
    usuario.push(contacto);
    console.log(usuario);
    mostrarLoading();
    guardarDatos(contacto);
    //guardar en Local Storage   
    var contacto1 = JSON.stringify(contacto);
    localStorage.setItem('contacto', contacto1);
    abrirNuevoTab('file:///C:/Users/villo/Documents/Carrera%20de%20Desarrollo%20Full%20Stack/Javascript/PROYECTO%20FINAL/modelos/modelo1.html')
}
boton5.addEventListener("submit", subirContact);


