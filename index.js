document.querySelector(".Submit-btn").addEventListener('click', submitForm);

function submitForm() {
  var firstName = document.querySelector(".first-name").value;
  var lastName = document.querySelector(".last-name").value;
  var email = document.getElementById("inputEmail").value;
  var pass = document.getElementById("inputPassword").value;
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  var emailLength = email.length;

// First Name Check

  if (firstName.length === 0) {
    document.getElementById("first-name").style.color = "hsl(0, 100%, 74%)";
    document.querySelector(".first-name").classList.add("onSubmitWrong");
  } else {
    document.getElementById("first-name").style.color = "#fff";
    document.querySelector(".first-name").classList.remove("onSubmitWrong");
  }

// Last Name Check

  if (lastName.length === 0) {
    document.getElementById("last-name").style.color = "hsl(0, 100%, 74%)";
    document.querySelector(".last-name").classList.add("onSubmitWrong");
  } else {
    document.getElementById("last-name").style.color = "#fff";
    document.querySelector(".last-name").classList.remove("onSubmitWrong");
  }

// Email Check

  if ((emailLength-dotPosition) === 4 && (dotPosition > atPosition) && (dotPosition-atPosition) === 6 && atPosition>=1){
    document.getElementById("email").style.color = "#fff";
    document.querySelector(".emailA").classList.remove("onSubmitWrong");
  }
  else{
    document.getElementById("email").style.color = "hsl(0, 100%, 74%)";
    document.querySelector(".emailA").classList.add("onSubmitWrong");
  }

// Password Check

  if (pass.length < 6) {
    document.getElementById("password").style.color = "hsl(0, 100%, 74%)";
    document.querySelector(".passwordA").classList.add("onSubmitWrong");
  } else {
    document.getElementById("password").style.color = "#fff";
    document.querySelector(".passwordA").classList.remove("onSubmitWrong");
  }
}
