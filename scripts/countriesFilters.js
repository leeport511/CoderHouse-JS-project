// import countries from "../scripts/constructor.js";
// import {modalContent, openModal} from "../scripts/countries.js";


// let form = document.querySelector(".countries-filters");
// let selectCountry = document.getElementById("selectCountry");

// countries.sort((a, b) => {
//   let countryA = a.name.toLowerCase();
//   let countryB = b.name.toLowerCase();

//   if (countryA < countryB) {
//     return -1;
//   }
//   if (countryA > countryB) {
//     return 1;
//   }
//   return 0;
// });

// // FILTERS
// // FILTER BY COUNTRY

// for (let i = 0; i < countries.length; i++) {
//   countries.sort((a, b) => {
//     let countryA = a.name.toLowerCase();
//     let countryB = b.name.toLowerCase();

//     if (countryA < countryB) {
//       return -1;
//     }
//     if (countryA > countryB) {
//       return 1;
//     }
//     return 0;
//   });
//   const country = countries[i];

//   selectCountry.innerHTML += `<option value="${country.name}">${country.name}</option>`;
// }

// const FilterByCountry = () => {
//   selectCountry.addEventListener("change", (e) => {
//     let countrySelected = e.target.value;
//     let countryfiltered; 
    
//     if(countrySelected ==='All') {
//         countryfiltered = countries;
//     } else {
//         countryfiltered = countries.filter(
//           (country) => country.name === countrySelected);
//     }
//     // console.log(countryfiltered);
//     clearFlagCards();
//     flagCard(countryfiltered);
    
//   });
// };

// const clearFlagCards = () => {
//   let flagContainer = document.querySelector(".flags-container");
//   flagContainer.innerHTML = ""; // Limpia todas las tarjetas de banderas
// };

// FilterByCountry();

// const flagCard = (countriesToDisplay) => {
//   let countriesToShow = countriesToDisplay || countries;
//   for (const country of countriesToShow) {
//     let flagContainer = document.querySelector(".flags-container");
//     let flagCard = document.createElement("DIV");
//     flagCard.className = "flag-card";
//     flagCard.innerHTML = `<img src="${country.flag}" alt="Test Flag"></img>
//                                   <div class="flag-card-info">
//                                       <h4>${country.name}</h4>
//                                       <button><img src="../assets/images/plus-icon.svg" class='btnCardFlag' alt="more..."></button>
//                                       </div>`;

//     flagContainer.append(flagCard);
//   }
// };

// flagCard();

// export default { flagCard };
