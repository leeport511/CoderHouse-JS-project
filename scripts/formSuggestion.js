// submit Suggestion section

let form = document.querySelector(".suggestions-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = e.target[0].value;
  let suggestion = e.target[1].value;

  if (name === "" || suggestion === "") {
    Swal.fire({
      icon: "error",
      iconColor: '#bbe1fa',
      title: "Error",
      text: "One of the fields are empty!",
      width: '24em',
      padding: '5px',
      buttonsStyling: false,
      customClass: {
        title: "swal2-title2",
        htmlContainer: 'swal2-paragrahp',
      }
    });
    return;
  } else {
    Swal.fire({
      icon: "success",
      iconColor: '#bbe1fa',
      title: "Well Done",
      text: `Thank you for the suggestion ${name}, we'll consider it!`,
      width: '24em',
      padding: '5px',
      buttonsStyling: false,
      customClass: {
        title: "swal2-title2",
        htmlContainer: 'swal2-paragrahp',
      },
    });
  }
});
