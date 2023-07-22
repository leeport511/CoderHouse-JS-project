import countries from "../scripts/constructor.js";
// import flagCard from "./countriesFilters.js";

let form = document.querySelector(".countries-filters");
let selectCountry = document.getElementById("selectCountry");

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


const flagCard = (countriesToDisplay) => {
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

// FILTERS
// FILTER BY COUNTRY

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
    let countrySelected = e.target.value;
    let countryfiltered; 
    
    if(countrySelected ==='All') {
        countryfiltered = countries;
    } else {
        countryfiltered = countries.filter(
          (country) => country.name === countrySelected);
    }
    // console.log(countryfiltered);
    clearFlagCards();
    flagCard(countryfiltered);
    openModal(countryfiltered);
    
    
  });
};

const clearFlagCards = () => {
  let flagContainer = document.querySelector(".flags-container");
  flagContainer.innerHTML = ""; // Limpia todas las tarjetas de banderas
};

FilterByCountry();








// MODAL CONTENT

export const modalContent = (country) => {
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
    // console.log(languageCode);

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

  modalContainer.innerHTML = `  <div class="modal-header">
                                    <div class="modal-title">
                                      <img src=${country.flag} alt=${
    country.name
  }/>
                                      <h3>${country.name}</h3>
                                    </div>
                                    <div class="modal-content-borders">
                                      <h4>${country.borders}</h4>
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
  // console.log(modalBtnArray);

  modalBtnArray.forEach((btn, i) =>
    btn.addEventListener("click", () => {
      let country;
      if (modalBtnArray.length > 1) {
        country = countries[i];
        console.log(country);
      } else {
        country = name[0]
        console.log(country);
      }
      modalContent(country);
      modal.style.display = "block";
    })
  );
};
openModal();





