console.log("***Start***");

var emailId ="";
var password="";


function login(){
    alert("i am in login function");

       emailId = document.getElementById("email").value;
       password = document.getElementById("pswd").value;

      if(emailId == "k123@gmail.com" && password == "00123"){

        document.getElementById("result").innerHTML="successfully loged in";
        document.getElementById("result").style.color="white";
        console.log("successfully Loged in ");
        window.location.href="https://moneyconnexion.com/most-expensive-cars-in-the-world.htm";
    }
   else{
       console.log("Invalid email/password please check.");
       document.getElementById("result").style.color="white";
       document.getElementById("result").innerHTML = "Invalid email/password, please check";
 
  }

  return false;
}

console.log("***Stop***");
