import countries from "../scripts/constructor.js";

console.log(countries);

countries.sort((a, b) => {
    let countryA = a.name.toLowerCase();
    let countryB = b.name.toLowerCase();

    if(countryA < countryB) {
        return -1;
    }
    if(countryA > countryB) {
        return 1;
    }
    return 0;

});

console.log(countries);


// for (const country of countries) {
//   console.log(country.name);
// }


const flagCard = () => {
  for (const country of countries) {
    let flagContainer = document.querySelector(".flags-container");
    let flagCard = document.createElement("DIV");
    flagCard.className = "flag-card";
    flagCard.innerHTML = `<img src="${country.flag}" alt="Test Flag"></img>
                                <div class="flag-card-info">
                                    <h4>${country.name}</h4>
                                    <button><img src="../assets/images/plus-icon.svg" alt="more..."></button>
                                </div>`;

    flagContainer.append(flagCard);
  }
};

flagCard();
