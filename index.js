document.querySelector(".green-btn").addEventListener("click", function() {

    var checkUserFirstName = document.getElementById("first-name").value;
    var checkUserLastName = document.getElementById("last-name").value;
    var checkEmail = document.getElementById("email-address").value;
    var checkPassword = document.getElementById("password").value;

//first name input checker//
    if (checkUserFirstName.length == 0) {
        document.getElementById("first-name-alert").innerHTML = "First Name cannot be empty";
        document.getElementById("first-name").classList.add("borderColorOfRed");
        document.getElementById("first-name").setAttribute("placeholder","");
        document.querySelector("#firstName > svg").classList.add("iconError2");
    } else {
        document.getElementById("first-name-alert").innerHTML = "";
        document.getElementById("first-name").classList.remove("borderColorOfRed");
        document.querySelector("#firstName > svg").classList.remove("iconError2");
    }
//last name input checker//
    if (checkUserLastName.length == 0) {
        document.getElementById("last-name-alert").innerHTML = "Last Name cannot be empty";
        document.getElementById("last-name").classList.add("borderColorOfRed");
        document.getElementById("last-name").setAttribute("placeholder","");
        document.querySelector("#lastName > svg").classList.add("iconError2");
    } else {
        document.getElementById("last-name-alert").innerHTML = "";
        document.getElementById("last-name").classList.remove("borderColorOfRed");
        document.querySelector("#lastName > svg").classList.remove("iconError2");
    }
//email checker//
    if (checkEmail.length == 0) {
        document.getElementById("email-address-alert").innerHTML = "Email Address cannot be empty";
        document.getElementById("email-address").classList.add("borderColorOfRed");
        document.getElementById("email-address").setAttribute("placeholder","");
        document.querySelector("#emailAddress > svg").classList.add("iconError2");
    } else {
        if (validateEmail(checkEmail) == false) {
            document.getElementById("email-address-alert").innerHTML = "Looks like this is not an email";
            document.getElementById("email-address").classList.add("textColorOfRed");
            document.getElementById("email-address").classList.add("borderColorOfRed");
            document.querySelector("#emailAddress > svg").classList.add("iconError2");
        } else {
        document.getElementById("email-address-alert").innerHTML = "";
        document.getElementById("email-address").classList.remove("textColorOfRed");
        document.getElementById("email-address").classList.remove("borderColorOfRed");
        document.querySelector("#emailAddress > svg").classList.remove("iconError2");
        }
    }
    
//password checker//
    if (checkPassword == 0) {
        document.getElementById("password-alert").innerHTML = "Password cannot be empty";
        document.getElementById("password").classList.add("borderColorOfRed");
        document.getElementById("password").setAttribute("placeholder","");
        document.querySelector("#userPassword > svg").classList.add("iconError2");
    } else {
        document.getElementById("password-alert").innerHTML = "";
        document.getElementById("password").classList.remove("borderColorOfRed");
        document.querySelector("#userPassword > svg").classList.remove("iconError2");
    }

}); //end of function

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

