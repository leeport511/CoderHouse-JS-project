// Open Menu List

let btnMenu = document.querySelector('.header-menu');
let menuMobile = document.querySelector('.header-nav-menu');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('active');

  if(menuMobile.classList.contains('active')){
    menuMobile.style.display = 'block';
  } else {
    menuMobile.style.display = 'none';
  }
})


// tooltip

tippy('.tt',{
  theme: 'flag',
  content:"Click Here For Further Information...",
  delay: [200,100],
  distance: 20,
  arrow: false,
  placement: 'top'
});


















// PREENTREGA 1

// let index = 0;
// let cargaPaises = prompt(
//   "Cargue todos los nombres de los paises que quiera, salga del programa escribiendo ESC \n\n"
// );
// let listadoPaises = "";

// const cargarPaises = (paises) => {
//   while (paises !== "ESC") {
//     index++;

//     if (paises === "ESC") {
//       break;
//     }

//     listadoPaises += `${index}. ${paises}\n`;
//     paises = prompt(
//       "Cargue todos los nombres de los paises que quiera, salga del programa escribiendo ESC\n\n"
//     );
//     console.log(listadoPaises);
//   }
// };

// cargarPaises(cargaPaises);

// alert(`Esta es la lista de paises que cargo:\n\n${listadoPaises}`);

//-----------------------------------------------------------------------

// PREENTREGA 2

//Funcion para carga de paises

// const cargaPaises = () => {
//   //se crea la clase Pais
//   class Pais {
//     constructor(nombrePais, continente, habitantes, superficie) {
//       this.nombrePais = nombrePais;
//       this.continente = continente;
//       this.habitantes = habitantes;
//       this.superficie = superficie;
//     }
//   }

//   const paises = []; // se crea el array donde van a ir los objetos, cada pais con sus propiedades

//   let nombrePais;

//   // bucle donde se carga los paises y sus propiedades hasta salir con 'ESC'
//   do {
//     nombrePais = prompt(
//       "Cargue el nombre del país y sus datos en los prompts siguientes (Escriba 'ESC' para finalizar)\n\n"
//     );
//     nombrePais.toLowerCase();

//     if (nombrePais !== "ESC") {
//       const continente = prompt(
//         `¿Cuál es el continente del país ${nombrePais}?`
//       );
//       continente.toLowerCase();
//       const habitantes = parseInt(
//         prompt(
//           `Cargue la cantidad de habitantes que tiene el país ${nombrePais}`
//         )
//       );
//       const superficie = parseInt(
//         prompt(`¿Cuál es la superficie de ${nombrePais}?`)
//       );

//       const pais = new Pais(nombrePais, continente, habitantes, superficie);
//       paises.push(pais);

//       console.log(pais);
//     }
//   } while (nombrePais !== "ESC");

//   console.log(paises);
// // Open / Close Menu

//   // Una vez cargados todos los paises y sus props en el array paises, se hace un filtro por continente que devuelve los paises de cierto continente
//   let filtroContinente = prompt(
//     "Si quiere saber los paises de un continente especifico, escriba a continuacion el continente, las opciones son: Asia, America, Europa, Africa y Oceania"
//   );
//   filtroContinente = filtroContinente.toLowerCase();

//   const filtraPaisesPorContinente = (continente) => {
//     const continentesValidos = [
//       "america",
//       "europa",
//       "asia",
//       "oceania",
//       "africa",
//     ];
//     if (!continentesValidos.includes(continente)) {
//       alert("el continente no existe, intente nuevamente");
//       return [];
//     }

//     let filteredPais = paises.filter((pais) => pais.continente === continente);
//     let newFilter = filteredPais.map((pais) => pais.nombrePais);
//     return newFilter;
//   };

//   let paisesFiltrados = filtraPaisesPorContinente(filtroContinente);

//   while (paisesFiltrados.length === 0) {
//     filtroContinente = prompt(
//       "El continente ingresado no existe, escriba nuevamente, las opciones son: Asia, America, Europa, Africa y Oceania"
//     );
//     filtroContinente = filtroContinente.toLowerCase();
//     paisesFiltrados = filtraPaisesPorContinente(filtroContinente);
//   }

//   console.log(`los paises son ${paisesFiltrados.join(", ")}`);
// };

// cargaPaises();
