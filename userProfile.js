function myFunction() {
  var firstName = document.getElementsByName("firstName");
  var lastName = document.getElementsByName("lastName");
  var datePicker = document.getElementsByName("datePicker");
  var updatedEmail = document.getElementsByName("updatedEmail");

  firstName[0].disabled = false;
  lastName[0].disabled = false;
  datePicker[0].disabled = false;
  updatedEmail[0].disabled = false;

  }


window.addEventListener("load", function () {
  document.getElementById("button").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });
});
