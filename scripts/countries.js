import countries from "../scripts/constructor.js";



// ORDENA EL ARRAY DE ALFABETICAMENTE, POR DEFECTO SE MUESTRAN TODOS

  
  countries.sort((a, b) => {
    let countryA = a.name.toLowerCase();
    let countryB = b.name.toLowerCase();
    
    if (countryA < countryB) {
      return -1;
    }
    if (countryA > countryB) {
      return 1;
    }
    return 0;
  });


//CREO EL CONTENIDO, CADA CARD ES EL PAIS CON SU BANDERA



const flagCard = async (countriesToDisplay) => {
  let countriesToShow = countriesToDisplay || countries;
  for (const country of countriesToShow) {
    let flagContainer = document.querySelector(".flags-container");
    let flagCard = document.createElement("DIV");
    flagCard.className = "flag-card";
    flagCard.innerHTML = `<img src="${country.flag}" alt="Test Flag"></img>
    <div class="flag-card-info">
    <h4>${country.name}</h4>
    <button><img src="../assets/images/plus-icon.svg" class='btnCardFlag' alt="more..."></button>
    </div>`;
    
    flagContainer.append(flagCard);
  }
};

flagCard();

// recuperar filtro mediante localStorage

let recoverData;
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length > 0) {
    recoverData = JSON.parse(localStorage.getItem("countryfiltered"));
    if (recoverData) {
      clearFlagCards();
      flagCard(recoverData);
      openModal(recoverData);
    }
  }
});

// funcion que limpia la en dom de las flagsCards que se estan mostrando

const clearFlagCards = () => {
  // TODO: BORRAR TITULO CREADO POR FILTRO
  let flagContainer = document.querySelector(".flags-container");
  flagContainer.innerHTML = ""; // Limpia todas las tarjetas de banderas
};

// FILTERS
// FILTER BY COUNTRY

let selectCountry = document.getElementById("selectCountry");

for (let i = 0; i < countries.length; i++) {
  countries.sort((a, b) => {
    let countryA = a.name.toLowerCase();
    let countryB = b.name.toLowerCase();

    if (countryA < countryB) {
      return -1;
    }
    if (countryA > countryB) {
      return 1;
    }
    return 0;
  });
  const country = countries[i];

  selectCountry.innerHTML += `<option value="${country.name}">${country.name}</option>`;
}

const FilterByCountry = () => {
  selectCountry.addEventListener("change", (e) => {
    e.preventDefault();
    let countrySelected = e.target.value;
    let countryfiltered; 
    
    if(countrySelected ==='All') {
        countryfiltered = countries;
    } else {
        countryfiltered = countries.filter(
          (country) => country.name === countrySelected);
    }

    clearFlagCards();
    flagCard(countryfiltered);
    openModal(countryfiltered);
    localStorage.setItem("countryfiltered", JSON.stringify(countryfiltered));
    
    // TODO: Crear un TITULO PARA HACERLE SABER AL USUARIO LA SELECCION DEL FILTRO
    selectCountry.value='';
  });
};



FilterByCountry();

// FILTER BY CONTINENT

const selectContinent = document.getElementById("selectContinent");

const newContinentArray = countries.map(country => country.region)

const continentNames = [...new Set(newContinentArray)]


continentNames.sort((a, b) => {
  let continentA = a.toLowerCase();
  let continentB = b.toLowerCase();

  if (continentA < continentB) {
    return -1;
  }
  if (continentA > continentB) {
    return 1;
  }
  return 0;
});

for (let i = 0; i < continentNames.length; i++) {
  let continent = continentNames[i]

  selectContinent.innerHTML += `<option value="${continent}">${continent}</option>`;
  
}

let continentfiltered;

const filterByContinent = () => {
  
  selectContinent.addEventListener('change', (e) => {
    e.preventDefault();

    let continentSelected = e.target.value;
    
    if(continentSelected ==='All') {
      continentfiltered = countries;
    } else {
      continentfiltered = countries.filter(
          (country) => country.region === continentSelected);
    }
    

    clearFlagCards();
    flagCard(continentfiltered);
    openModal(continentfiltered);
    // TODO: Crear un TITULO PARA HACERLE SABER AL USUARIO LA SELECCION DEL FILTRO
    localStorage.setItem("countryfiltered", JSON.stringify(continentfiltered));
    selectContinent.value='';
  })
  
}

filterByContinent()

//SEARCH

const inputText = document.querySelector('#search');

const findBySearch = () => {
  inputText.addEventListener('keyup', (e) => {
    e.preventDefault();

    const userText = inputText.value.toLowerCase();
    
    const foundCountries = countries.filter(country => {
      const text = country.name.toLowerCase();
      if (text.indexOf(userText) !== -1) {
        return country;
      }
    })

    clearFlagCards();
    flagCard(foundCountries);
    openModal(foundCountries);

  })
}

findBySearch()


// MODAL CONTENT

export const modalContent = async (country) => {

  let modalContainer = document.querySelector(".modal-container");

  // Verificar si el objeto country existe y tiene la propiedad currency, como puede tener uno o mas elementos se hace la verificacion
  let currencyName;
  let currencySymbol;
  let currencyContent = "";

  if (country.currency !== undefined) {
    const currencyCode = Object.keys(country.currency);

    if (currencyCode.length >= 1) {
      currencyContent = "<ul>";

      currencyCode.forEach((currCode) => {
        const currencyInfo = country.currency[currCode];
        currencyName = currencyInfo.name;
        currencySymbol = currencyInfo.symbol;

        currencyContent += `<li> - ${currencyName} and the symbol is ${currencySymbol}</li>`;
      });
      currencyContent += "</ul>";
    } else if (currencyCode.length < 1) {
      currencyContent += `<p class="noInfo"> - No information provided</p>`;
    }
  } else {
    currencyContent += `<p class="noInfo"> - No information provided</p>`;
  }

  // Lo mismo con los idiomas que se hablan, son objetos donde cada key es diferente, por eso debe aislarlas para poder usarlas

  let languageName;
  let languageContent;

  if (country.language !== undefined) {
    const languageCode = Object.keys(country.language);
    

    if (languageCode.length >= 1) {
      languageContent = "<ul>";

      languageCode.forEach((langCode) => {
        const languageInfo = country.language[langCode];
        languageName = languageInfo;

        languageContent += `<li> - ${languageName}</li>`;
      });

      languageContent += "</ul>";
    }
  } else {
    languageContent = '<p class="noInfo"> - No information provided</p>';
  }

  // obtener banderas paises limitrofes
  let flagBorderContent;

  if (Array.isArray(country.borders)) {
  let countryInfo = await getFlagsByBorder(country.borders);
  console.log(countryInfo);
    if(countryInfo.length > 0){
      flagBorderContent = '';
      countryInfo.forEach(country => {
          let {flag, name} = country;
          flagBorderContent += `<div class='borderContainer'>
                                  <img src=${flag} alt=${name}/>
                                  <p>${name}</p>
                                </div>`
        })
    } else {
      flagBorderContent = `<p class="noBorder">This Country doesn't have any border</p>`;
    }
  }
  // *! Por algun motivo que desconozco no puedo hacer funcionar el else Cuando es undefined ^

  modalContainer.innerHTML = `  <div class="modal-header">
                                    <div class="modal-title">
                                      <img src=${country.flag} alt=${
                                        country.name
                                      }/>
                                      <h3>${country.name}</h3>
                                    </div>
                                    <div class="modal-content-borders">
                                      <h3>Borders</h3>
                                      <div>
                                      ${flagBorderContent}
                                      </div>
                                    </div>
                                  </div>
                                  <div class="modal-content">
                                  <div>
                                    <h4 class="modal-content-title">Country Information...</h4>
                                  </div>
                                  <div>
                                    <p><b>capital:</b> ${country.capital}</p>
                                    <p><b>region:</b> ${country.region}</p>
                                    <p><b>sub-region:</b> ${
                                      country.subregion
                                    }</p>
                                    <p><b>abbreviation:</b> ${
                                      country.abbreviation
                                    }</p>
                                    <p><b>language:</b></p>
                                    ${languageContent}
                                    <p><b>area:</b> ${country.area} km2</p>
                                    <p><b>population:</b> ${
                                      country.population ? country.population.toLocaleString() : "No population data"
                                    } </p>
                                    <p><b>currencies:</b></p>
                                    ${currencyContent}
                                    <p class="map"><b>map: </b></p><span><a class="link" href='${
                                      country.maps.googleMaps
                                    }' target="_blank">${
                                      country.maps.googleMaps
                                    }</a></span>
                                  </div>
                                  </div>
          
                                  <div class="modal-footer">
                                    <button id='modalBackButton'>BACK</button>
                                  </div>
                                  `;

  // CLOSE MODAL

  const modalBtnClose = document.getElementById("modalBackButton");
  modalBtnClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

// OPEN  MODAL

const modal = document.querySelector(".modal");

export const openModal = (name) => {
  const modalBtnOpen = document.getElementsByClassName("btnCardFlag");
  const modalBtnArray = [...modalBtnOpen];

  modalBtnArray.forEach((btn, i) =>
    btn.addEventListener("click", () => {
      let country;
      if (modalBtnArray.length > 100) {
        country = countries[i];
        // console.log(country);
      } else if(modalBtnArray.length > 1 && modalBtnArray.length < 100) {
        if(localStorage.length === 0) {
          country = continentfiltered[i];
        } else {
          country = name[i]
        }
      }
      else {
        country = name[0]
        // console.log(country);
      }
      modalContent(country);
      modal.style.display = "block";
    })
  );
};
openModal();


//Fetch para obtener de la api los paises limitrofes y usarlos dentro del Modal Content

const getFlagsByBorder = async (arrayBorders) => {
  const countryInfo = [];

  for(let bord of arrayBorders) {
    const res = await fetch(`https://restcountries.com/v2/alpha/${bord}`);
    const data = await res.json();

    
    if (data.borders && Array.isArray(data.borders) && data.borders.length > 0) {
      countryInfo.push({
        flag: data.flag,
        name: data.name
      });
     }
  }


  return countryInfo;
}