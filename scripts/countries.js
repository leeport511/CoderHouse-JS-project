import countryData from "../constants/countryData.mjs";

console.log(countryData);

for (const country of countryData) {
    console.log(country.flags.png);
    
}

const flagCard = () => {

    for (const country of countryData) {
        
        let flagContainer = document.querySelector(".flags-container");
        let flagCard = document.createElement("DIV");
        flagCard.className = "flag-card";
        flagCard.innerHTML = `<img src="${country.flags.png}" alt="Test Flag"></img>
                                <div class="flag-card-info">
                                    <h4>${country.name.common}</h4>
                                    <button><img src="../assets/images/plus-icon.svg" alt="more..."></button>
                                </div>`;
    
        flagContainer.append(flagCard);
        
    }

};

flagCard();
