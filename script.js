document.querySelector(".btn").addEventListener("click",function(){

alert("Welcome to MediCare Hospital");

});


const form = document.getElementById("appointmentForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("✅ Appointment Booked Successfully!");

form.reset();

});

}


const contactForm = document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

contactForm.reset();

});

}