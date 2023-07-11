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

import { countryData } from "../constants/countryData.mjs";
