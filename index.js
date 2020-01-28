document.querySelector(".Submit-btn").addEventListener('click', submitForm);

function submitForm() {
  var firstName = document.querySelector(".first-name").value;
  var lastName = document.querySelector(".last-name").value;
  var email = document.getElementById("inputEmail").value;
  var pass = document.getElementById("inputPassword").value;
  if (firstName.length === 0) {
    document.getElementById("first-name").style.color="hsl(0, 100%, 74%)";
    document.querySelector(".first-name").classList.add("onSubmitWrong");
  }
  else{
    document.querySelector(".first-name").classList.add("onSubmitRight");
  }
   if (lastName.length === 0) {
    document.getElementById("last-name").style.color="hsl(0, 100%, 74%)";
    document.querySelector(".last-name").classList.add("onSubmitWrong");
  }
  else{
    document.querySelector(".last-name").classList.add("onSubmitRight");
  }
  if (email.length === 0) {
    document.getElementById("email").style.color="hsl(0, 100%, 74%)";
    document.querySelector(".emailA").classList.add("onSubmitWrong");
  }
  else{
    document.querySelector(".emailA").classList.add("onSubmitRight");
  }
  if (pass.length < 6){
    document.getElementById("password").style.color="hsl(0, 100%, 74%)";
    document.querySelector(".passwordA").classList.add("onSubmitWrong");
  }
  else{
    document.querySelector(".passwordA").classList.add("onSubmitRight");
  }
}
