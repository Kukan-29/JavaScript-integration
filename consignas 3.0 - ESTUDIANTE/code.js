

/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};


const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];


const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');


profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);


/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
  
  let nombreUsuario = prompt("Cual es tu nombre?");
  datosPersona.nombre = nombreUsuario;
                                                                                          

  let añoDeNacimiento = prompt("Cual es tu año de nacimiento?");
  let edadCalculada = 2024 - añoDeNacimiento;
  datosPersona.edad = edadCalculada;

  
  let ciudadUsuario = prompt("En que ciudad residís actualmente?");
  datosPersona.ciudad = ciudadUsuario;

  
  interesPorJavaScript = confirm("Te interesa aprender más sobre JavaScript?");
  datosPersona.interesPorJs = interesPorJavaScript;

  
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */


  let getNombreHTML = document.querySelector("#nombre");
  getNombreHTML.innerHTML = datosPersona.nombre;
  console.log(datosPersona.nombre);


  let getEdadHTML = document.querySelector("#edad");
  getEdadHTML.innerHTML = datosPersona.edad;
  console.log(datosPersona.edad);


  let getCiudadHTML = document.querySelector("#ciudad");
  getCiudadHTML.innerHTML = datosPersona.ciudad;
  console.log(datosPersona.ciudad);


  let getJavaScriptHTML = document.querySelector("#javascript");
  if (interesPorJavaScript == true){
    getJavaScriptHTML.innerHTML = "sí";
  } else {
    getJavaScriptHTML.innerHTML = "no";
  }
  console.log(datosPersona.interesPorJs);


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
let fila = document.getElementById("fila");
console.log(fila)

  if (fila.classList.contains("renderizado") != true){


    for (let i = 0; i <= 2; i++){


      let divCreado = document.createElement("div");
      divCreado.classList.add("caja");


      let imgMateria = document.createElement("img");
      imgMateria.setAttribute("src", listado[i].imgUrl);
      imgMateria.setAttribute("alt", listado[i].lenguajes)
      divCreado.appendChild(imgMateria);


      let parrafoLenguaje = document.createElement("p");
      parrafoLenguaje.setAttribute("class", listado[i].lenguajes);
      let textoLenguaje = document.createTextNode(listado[i].lenguajes);
      parrafoLenguaje.appendChild(textoLenguaje);
      divCreado.appendChild(parrafoLenguaje);


      let parrafoBimestre = document.createElement("p");
      parrafoBimestre.setAttribute("class", listado[i].bimestre);
      let textoBimestre = document.createTextNode(listado[i].bimestre);
      parrafoBimestre.appendChild(textoBimestre);
      divCreado.appendChild(parrafoBimestre);


      fila.appendChild(divCreado);
    

    };


    fila.setAttribute("class", "renderizado");


  };


};


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  
  
  let getBodyHTML = document.querySelector("body");
  getBodyHTML.classList.toggle("dark");


}


/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */


let getSobreMiHTML = document.querySelector("#sobre-mi");


window.addEventListener("keypress", function(e){
  if (e.key == "f"){
    getSobreMiHTML.classList.remove("oculto")
  } else {
    null;
  }
});


