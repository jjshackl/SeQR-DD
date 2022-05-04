loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", verify);
//On form submit
function verify(e) {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  var submitBlock = document.getElementById("messageBox2");


  if(user == "store") {
    if(pass == "storepass") {
      submitBlock.style.display = "block";
      document.getElementById("login-confirm").innerHTML = "Welcome, " + user + "! We have confirmed this order as ready to be delivered.";
    }
  }

  if(user == "driver") {
    if(pass == "driverpass") {
      submitBlock.style.display = "block";
      document.getElementById("login-confirm").innerHTML = "Welcome, " + user + "! You are confirmed as the driver for this order.";
    }
  }

  if(user == "customer") {
    if(pass == "customerpass") {
      submitBlock.style.display = "block";
      document.getElementById("login-confirm").innerHTML = "Welcome, " + user + "! Your order has been confirmed as delivered.";
    }
  }

  loginForm.reset();
}
