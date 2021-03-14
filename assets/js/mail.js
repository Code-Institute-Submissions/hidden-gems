
console.log("hello is this working")

/* Code from Code Institute ? Rosie Email JS Video */

function sendMail(contactForm) {
    emailjs.send("service_f5w6jod", "hidden-gems", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "location_suggestion": contactForm.locationsuggestion.value,
        "questions": contactForm.questions.value
    })
        .then(

            function (response) {
                console.log('success', response);
                $('#success-message').show("100");
            }, function (error) {
                console.log('failed', error);
                $('#error-message').show("100");
            }
        );
    document.getElementById("contactForm").reset();
    return false;
}

/* Code to show a thank you message after user sign up to newsletter */

function newsLetter(newsLetterForm) {
    emailjs.send("service_f5w6jod", "hidden-gems", {
        "from_email": newsLetterForm.newsletterEmail.value,
    })
        .then(

            function (response) {
                console.log('success', response);
                $("#newsletterThankYou").show("100");
            }, function (error) {
                console.log('failed', error);
            }
        );
    document.getElementById("newsLetterForm").reset();
    return false;
}