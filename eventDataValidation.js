const eventForm = document.getElementById("form");
const eventTitle = document.getElementById("eventTitle");
const eventDescription = document.getElementById("eventDescription");
const eventVenue = document.getElementById("eventVenue");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  const ti = document.getElementById("ti");
  const dsc = document.getElementById("dsc");
  const ve = document.getElementById("ve");
  const date = document.getElementById("date");
  const cat = document.getElementById("cat");

  if (
    ti.className === "form-control success" &&
    dsc.className === "form-control success" &&
    ve.className === "form-control success" &&
    date.className === "form-control success" &&
    cat.className === "form-control success"
  ) {
    form.submit();
  }
});

function checkInputs() {
  const eventTitleValue = eventTitle.value.trim();
  const eventDescriptionValue = eventDescription.value.trim();
  const eventVenueValue = eventVenue.value.trim();
  const eventDateValue = eventDate.value.trim();
  const eventCategoryValue = eventCategory.value.trim();

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  let dateCalculation = yyyy + "-" + mm + "-" + dd;

  const eventTitleRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  if (eventTitleValue.length > 25) {
    setErrorFor(eventTitle, "Tytuł nie może przekraczać 25 znaków");
  } else if (eventTitleValue.match(eventTitleRegex)) {
    setSuccessFor(eventTitle);
  } else {
    setErrorFor(eventTitle, "Tytuł niepoprawny");
  }
  if (eventDescriptionValue.length > 400) {
    setErrorFor(eventDescription, "Opis nie może przekraczać 400 znaków");
  } else if (eventDescriptionValue.match(eventTitleRegex)) {
    setSuccessFor(eventDescription);
  } else {
    setErrorFor(eventDescription, "Uzupełnij opis wydarzenia");
  }
  if (eventVenueValue.match(eventTitleRegex)) {
    setSuccessFor(eventVenue);
  } else {
    setErrorFor(eventVenue, "Miejscowość niepoprawna");
  }
  // //
  if (eventDateValue == "") {
    setErrorFor(eventDate, "Wybierz date");
  } else if (eventDateValue < dateCalculation) {
    setErrorFor(eventDate, "Wybierz poprawną datę");
  } else {
    setSuccessFor(eventDate);
  }

  if (eventCategoryValue == "Wybierz kategorię wydarzenia") {
    setErrorFor(eventCategory, "Wybierz kategorię");
  } else {
    setSuccessFor(eventCategory);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
