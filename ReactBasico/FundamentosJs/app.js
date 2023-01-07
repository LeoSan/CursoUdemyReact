//Variable con var
var aprendiendoVar = 'ValorA'; 

//variable con const 
const aprendiendoConst = 'ValorB'; 

// variable con let 
let aprendiendoLet = "ValorC";


console.log("valor variable" + aprendiendoVar);
console.log(`Valor A: ${aprendiendoVar}, Valor B: ${aprendiendoConst}`);

const contenedorApp = document.querySelector('#app');

let html = `
        <ul>
            <li> Valor A ${aprendiendoConst}   </li>
            <li> Valor B ${aprendiendoVar}     </li>
        </ul>
`;

contenedorApp.innerHTML = html;

// secciòn de funciones 

//funcion declaracion  = esta puede ser llamada en cualquier parte de los bloques de còdigo 

apellidoCliente("Cuenca");

function apellidoCliente(apellido){
    console.log("apellido del cliente ",apellido );
};




//funcion expression == esta pdebe ser llamada siempre al final del còdigo. 

const cliente = function(nombreCliente){
    console.log("Nombre del cliente",nombreCliente);
}

cliente('Juan');


//PARAMETROS POR DEFECTO PARA FUNCIONES 


function actividad(nombre = 'Prueba ', actividad = 'Quimica'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad} `);
}

actividad('Leo', 'comer');
actividad();

//arrow funcion 
let viajando = (destino = 'Venezuela') =>{
  return `Viajando a la ciudad de: ${destino}`;
}

let viaje = viajando('Paris');
console.log(viaje);

//objetos 

//objetos literales 

let personaA = 'Juan'; 

const persona ={
    nombre: 'leo',
    profesion:'Desarrollo',
    edad:500,
}
console.log(persona);
console.log(persona.nombre);

//objetos constructor literales 

function Tarea(nombre, urgencia){
    this.nombre=nombre;
    this.urgencia= urgencia;
}
//Prototypes 

Tarea.prototype.mostrarInformacionTarea = function (){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender', 'React');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());

// Destructuring de objetos 

const aprendiendoJs = {
    version:{
        nueva:'ES6+',
        anterior:'ES5+',
    },
    frameworks:['React', 'Vuesjs', 'AngularJs'], 
}

let version = aprendiendoJs.version.nueva;
console.log(version);

// Destructuring de objetos 
let {nueva} =  aprendiendoJs.version;
console.log(nueva);

// objet literal enhancement 
const banda = 'Metalica';
const genero = 'Heavy Metal';
const canciones = ['Master', 'Seek', 'Enter'];

//Forma nueva 
const metallica = {banda, genero, canciones}; 

console.log(metallica);

//metodos o funciones en un objeto 
const personas = {
    nombre:'Juan',
    trabajo:'Desarrollo',
    edad:32,
    musicaRock:true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}

//persona.mostrarInformacion();

//arreglos y .map 

const appContenedorB = document.querySelector('#app');

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
let html2 = '';
carrito.forEach(producto=>{
    html2 += ` <li> ${producto} <l/i>`; 
});

appContenedorB.innerHTML = html2; 

carrito.map(producto=>{
    return 'el producto es'+producto;
});

