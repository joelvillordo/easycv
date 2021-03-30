console.log("Javascript cargado");

//Inputs
let nombre;
let apellido;
let edad;
let contacto;
let formacion;
let experiencia;
const curriculumVitae = [];

/*Solicitud de datos, se van a hacer a traves de un form en el html pero con lo visto hasta ahora 
usamos prompt para los inputs*/
function solicitarDatos(){
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingresa tu apellido");
    edad = prompt("Ingresa tu edad");
    contacto = prompt("Ingrese su numero de contacto");
    formacion = prompt("Ingresa tu nivel de formacion academica");
    experiencia = prompt("Ingresa tu ultima experiencia laboral");
}

/*Objetos que van a construirse con los datos que ingresa el cliente y que luego
van a pushearse al array llamado curriculumVitae para utilizarlo en la construccion
del HTML con el resultado final*/
class Persona{
    constructor(nombre, apellido, edad, contacto){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.contacto = contacto;
    }
}

class Formacion{
    constructor(titulo, fecha, lugar){
        this.titulo = titulo;
        this.fecha = fecha;
        this.lugar = lugar;
    }
}

class Experiencia{
    constructor(empresa, duracion, resumen){
        this.empresa = empresa;
        this.duracion = duracion;
        this.resumen = resumen;
    }
}

//Procesos
/*La idea es generar una plantilla HTML con los datos que ingresa el cliente, visualizandolo en una nueva
pestaña y que ademas tenga la opcion de descargar un pdf en tamaño A4 para poder utilizarlo en sus 
postulaciones, por ahora solo muestro un output a traves de un alert concatenado los datos ingresados*/

solicitarDatos();

/*Creando primer objeto y agregandolo al array curriculumVitae*/
const persona1 = new Persona(nombre, apellido, edad, contacto);
curriculumVitae.push(persona1);

function datosPrincipales(nombre, apellido, edad, contacto){
    alert("CV finallizado!");
    alert("Hola mi nombre es "+nombre+" "+apellido+" tengo "+edad+" años y mi numero de contacto es "+contacto);
}

//Outputs

datosPrincipales(nombre, apellido, edad, contacto);
console.log(persona1);
console.log(curriculumVitae);

//Agregando un output con DOM

let resultado = document.getElementById("resultado");

resultado.innerHTML = `<h2>Tus datos ingresados</h2>`;
function imprimir(){
    let datos = document.createElement("li");
    datos.innerHTML = ` <p>Tu nombre es: ${persona1.nombre}</p>
                        <p>Tu apellido es: ${persona1.apellido}</p>
                        <p>Tu edad es: ${persona1.edad}</p>
                        <p>Tu contacto es: ${persona1.contacto}</p>`;
    
    resultado.appendChild(datos);
};

imprimir();