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

// PREENTREGA 2

const cargaPaises = () => {
  class Pais {
    constructor(nombrePais, continente, habitantes, superficie) {
      this.nombrePais = nombrePais;
      this.continente = continente;
      this.habitantes = habitantes;
      this.superficie = superficie;
    }
  }

  const paises = [];

  let nombrePais;

  do {
    nombrePais = prompt(
      "Cargue el nombre del país y sus datos en los prompts siguientes (Escriba 'ESC' para finalizar)\n\n"
    );
    nombrePais.toLowerCase();

    if (nombrePais !== "ESC") {
      const continente = prompt(
        `¿Cuál es el continente del país ${nombrePais}?`
      );
      continente.toLowerCase();
      const habitantes = parseInt(
        prompt(
          `Cargue la cantidad de habitantes que tiene el país ${nombrePais}`
        )
      );
      const superficie = parseInt(
        prompt(`¿Cuál es la superficie de ${nombrePais}?`)
      );

      const pais = new Pais(nombrePais, continente, habitantes, superficie);
      paises.push(pais);

      console.log(pais);
    }
  } while (nombrePais !== "ESC");

  console.log(paises);



  const filtraPaisesPorContinente = (continente) => {
    let filteredPais = paises.filter((pais) => pais.continente === continente);
    let newFilter = filteredPais.map((pais) => pais.nombrePais)
    return newFilter;
  };

  const paisesFiltrados = filtraPaisesPorContinente(prompt('Si quiere saber los paises de un continente especifico, escriba a continuacion el continente, las opciones son: Asia, America, Europa, Africa y Oceania'));
  console.log(`los paises son ${paisesFiltrados.join(', ')}`);
};
