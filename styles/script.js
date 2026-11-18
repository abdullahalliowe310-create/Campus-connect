
// GETTING THE REGISTRATION BUTTONS

let registerButtons = document.querySelectorAll(".register-btn");

let eventMessage = document.getElementById("eventMessage");


// EVENT REGISTRATION

registerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let eventName = button.getAttribute("data-event");

        eventMessage.innerText =
            "You selected " + eventName + "! Registration is a demo.";

    });

});


// GETTING THE JOIN FORM ELEMENTS

let studentName = document.getElementById("studentName");

let studentEmail = document.getElementById("studentEmail");

let joinButton = document.getElementById("joinButton");

let joinMessage = document.getElementById("joinMessage");


// JOIN BUTTON FUNCTION

joinButton.addEventListener("click", function() {

    let name = studentName.value;

    let email = studentEmail.value;


    if (name === "" || email === "") {

        joinMessage.innerText =
            "Please fill in all the information.";

    }

    else if (!email.includes("@") || !email.includes(".")) {

        joinMessage.innerText =
            "Please enter a valid email address.";

    }

    else {

        joinMessage.innerText =
            "Welcome " + name + "! You have joined Campus Connect.";

        studentName.value = "";

        studentEmail.value = "";

    }

});
