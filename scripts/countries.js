import countries from "../scripts/constructor.js";

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

const flagCard = () => {
  for (const country of countries) {
    let flagContainer = document.querySelector(".flags-container");
    let flagCard = document.createElement("DIV");
    flagCard.className = "flag-card";
    flagCard.innerHTML = `<img src="${country.flag}" alt="Test Flag"></img>
                                <div class="flag-card-info">
                                    <h4>${country.name}</h4>
                                    <button><img src="../assets/images/plus-icon.svg" id='' alt="more..."></button>
                                    </div>`;

    flagContainer.append(flagCard);
  }
};

flagCard();

// MODAL CONTENT

const modalContent = (country) => {
  let modalContainer = document.querySelector(".modal-container");

  let currencyName;
  let currencySymbol;
  // Verificar si el objeto country existe y tiene la propiedad currency
  if (country.currency !== undefined) {
    const currencyCode = Object.keys(country.currency);

    const currencyInfo = country.currency[currencyCode];
    currencyName = currencyInfo.name;
    currencySymbol = currencyInfo.symbol;
  }

  modalContainer.innerHTML = `  <div class="modal-header">
                                    <div class="modal-title">
                                      <img src=${country.flag} alt=${country.name} />
                                      <h3>${country.name}</h3>
                                    </div>
                                    <div class="modal-content-borders">
                                      <h4>${country.borders}</h4>
                                    </div>
                                  </div>
                                  <div class="modal-content">
                                    <h4 class="modal-content-title">Country Information...</h4>
                                    <p><b>capital:</b> ${country.capital}</p>
                                    <p><b>region:</b> ${country.region}</p>
                                    <p><b>sub-region:</b> ${country.subregion}</p>
                                    <p><b>abrebiation:</b> ${country.abbreviation}</p>
                                    <p><b>language:</b> ${country.language}</p>
                                    <p><b>area:</b> ${country.area} km2</p>
                                    <p><b>population:</b> ${country.population} persons</p>
                                    <p><b>currencies:</b> Actual currency of this country is ${currencyName} and the symbol is ${currencySymbol}</p>
                                    <p class="map"><b>map: </b></p><span><a class="link" href='${country.maps.googleMaps}' target="_blank">${country.maps.googleMaps}</a></span>
                                  </div>
          
                                  <div class="modal-footer">
                                  <button>BACK</button>
                                  </div>
                                  `;
};


// OPEN AND CLOSE MODAL

const modalBtnOpen = document.querySelectorAll(".flag-card-info button");
const modal = document.querySelector(".modal");
const modalBtnClose = document.querySelector(".modal-footer button");

modalBtnOpen.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    let country = countries[i];
    console.log(country);
    modalContent(country);
    modal.style.display = "block";
  })
);

// modalBtnClose.addEventListener("click", () => {
//   console.log("click");
//   modal.style.display = "none";
// });
