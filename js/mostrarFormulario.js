//Acceso al DOM
const aboutMe = $("#aboutMe");
const skills = $("#skills");
const education = $("#education");
const works = $("#works");
const contact = $("#contact");
const loading = $("#loading");
const boton1 = $("#form1");
const boton2 = $("#form2");
const boton3 = $("#form3");
const boton4 = $("#form4");
const boton5 = $("#form5");

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

//Elimino datos del Local Storage cargados anteriormente por el usuario para poder resetear el CV
function limpiarLocalStorage(a, b, c, d, e){
    localStorage.removeItem(a);
    localStorage.removeItem(b);
    localStorage.removeItem(c);
    localStorage.removeItem(d);
    localStorage.removeItem(e);
}

limpiarLocalStorage('persona', 'habilidades', 'educacion', 'experiencia', 'contacto');


//Enviar datos de About y pasar a Skills
function mostrarSkills(){
    //Escondo el formulario de about y muestro el siguiente
    aboutMe.css('display', 'none');
    skills.css('display', 'block');
}
function subirAbout(e) {
    //Anulo la recarga de la pagina
    e.preventDefault();
    //Recolecto los datos del formulario para crear el HTML
    let datosAbout = e.target;
    var nombre = $("#name").val();
    var profesion = $("#profession").val();
    var sobreMi = $("#description").val();
    //Guardo los datos en un objeto y luego los pusheo al array del usuario
    const persona = new Persona(nombre, profesion, sobreMi);
    usuario.push(persona);
    mostrarSkills();
    console.log(usuario);
    //guardar en LocalStorage    
    var persona1 = JSON.stringify(persona);
    localStorage.setItem('persona', persona1);
}
boton1.submit(subirAbout);

//Enviar datos de Skills y pasar a Education
function mostrarEducation(){
    skills.css('display', 'none');
    education.css('display', 'block');
}
//Mismo funcionamiento para guardar las habilidades ingresadas por el usuario
function subirSkills(e){
    e.preventDefault();
    let datosSkills = e.target;
    var skill1 = $("skill1").val();
    var skill2 = $("skill2").val();;
    var skill3 = $("skill3").val();;
    const habilidades = new Habilidades(skill1, skill2, skill3);
    usuario.push(habilidades);
    mostrarEducation();
    console.log(usuario);
    //guardar en LocalStorage    
    var guardarSkills = JSON.stringify(habilidades);
    localStorage.setItem('habilidades', guardarSkills);
}
boton2.submit(subirSkills);

//Enviar datos de Education y pasar a Works
function mostrarWorks(){
    education.css('display', 'none');
    works.css('display', 'block');
}
function subirEducation(e){
    e.preventDefault();
    const datosEducation = e.target;
    var instituto = $("#institucion").val();
    var titulo = $("#titulo").val();
    var fechaTitulo = $("#date").val();
    const educacion =  new Educacion(instituto, titulo, fechaTitulo);
    usuario.push(educacion);
    console.log(usuario);
    mostrarWorks();
    //guardar en Local Storage   
    var educacion1 = JSON.stringify(educacion);
    localStorage.setItem('educacion', educacion1);
}
boton3.submit(subirEducation);

//Enviar datos de Works y pasar a Contact
function mostrarContact(){
    works.css('display', 'none');
    contact.css('display', 'block');
}
function subirWorks(e){
    e.preventDefault();
    const datosWorks = e.target;
    var puesto = $("#puesto").val();
    var empresa = $("#empresa").val();
    var tiempo = $("#fecha").val();
    var tareas = $("#tareas").val();
    const experiencia = new Experiencia(puesto, empresa, tiempo, tareas);
    usuario.push(experiencia);
    console.log(usuario);
    mostrarContact();
    //guardar en Local Storage   
    var experiencia1 = JSON.stringify(experiencia);
    localStorage.setItem('experiencia', experiencia1);
}
boton4.submit(subirWorks);

//Enviar datos de Contact y pasar al modelo elegido
function mostrarLoading(){
    contact.css('display', 'none');
    loading.css('display', 'block');
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
    var tel = $("#tel").val();
    var email = $("#email").val();
    var ubicacion = $("#location").val();
    const contacto = new Contacto(tel, email, ubicacion);
    usuario.push(contacto);
    console.log(usuario);
    mostrarLoading();
    guardarDatos(contacto);
    //guardar en Local Storage   
    var contacto1 = JSON.stringify(contacto);
    localStorage.setItem('contacto', contacto1);
    abrirNuevoTab('https://joelvillordo.github.io/easycv/modelos/modelo1.html')
}
boton5.submit(subirContact);


