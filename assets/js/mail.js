
console.log("hello is this working")



function sendMail(contactForm) {
    emailjs.send("service_f5w6jod", "hidden-gems", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "location_suggestion": contactForm.locationsuggestion.value
    })
        .then(

            function (response) {
                console.log('success', response);
                $('#success-message').show();
            }, function (error) {
                console.log('failed', error);
                $('#error-message').show();
            }
        );
    document.getElementById("contactForm").reset();
    return false;
}
