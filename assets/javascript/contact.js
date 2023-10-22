// CONTACT PAGE SCRIPT
// https://www.emailjs.com/docs/
var contactForm = document.querySelector("contact-form");

function sendMail(contactForm) {
    emailjs.send("service_apvhfi8", "template_17luiw7", {
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        message: contactForm.message.value,
    }).then(
        function (response) {
            console.log("Success", response);
        },
        function (error) {
            console.log("Failed", error);
        }
    );
    return false;
}