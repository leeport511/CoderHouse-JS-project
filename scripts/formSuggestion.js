// submit Suggestion section

let form = document.querySelector(".suggestions-form");


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = e.target[0].value;
    let suggestion = e.target[1].value;

    if (name === '' || suggestion === '') {
        
        //msj de error por sweetAlert en futuro
        alert('One of the fields are empty');
        return;
    } else {

        //msj de success por sweetAlert en futuro
        alert(`Thank you for the suggestion ${name}, we'll consider it`)
    }

})