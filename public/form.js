const inputs = document.querySelectorAll(".input-box input");
// Get DOM elements
const contactForm = document.getElementById('contactForm');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
let valid = true;

inputs.forEach(input => {
    const label = input.nextElementSibling;
    const correctIcon = input.parentElement.querySelector(".correct-icon"); // Match CSS class
    
    // Hide icon initially
    if(correctIcon) correctIcon.style.display = "none";
    
    input.addEventListener("blur", () => {
        const value = input.value.trim();
        let isValid = false;

        // Email validation
        if (input.type === "email") {
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            isValid = emailPattern.test(value);
            if (!isValid) {
                input.style.borderColor = "red";
                label.style.color = "red";

            } else {
                input.style.borderColor = "#3498db";
                label.style.color = "#666";
            }
        } 
        // Phone validation
        else if (input.type === "tel") {
            const phonePattern = /^[0-9]{10}$/;
            isValid = phonePattern.test(value);
            if (!isValid) {
                input.style.borderColor = "red";
                label.style.color = "red";
                valid=false;
                console.log(valid)
            } else {
                input.style.borderColor = "#3498db";
                label.style.color = "#666";
                valid=true;
            }
        }
        // Text inputs (name, company, etc.)
        else {
            isValid = value !== "";
            if (!isValid) {
                input.style.borderColor = "red";
                label.style.color = "red";
            } else {
                input.style.borderColor = "#3498db";
                label.style.color = "#666";
            }
        }

        // Show/hide icon based on validation
        if(correctIcon) {
            correctIcon.style.display = isValid ? "block" : "none";
        }
    });

    
});

// Handle form submission
contactForm.addEventListener('submit', function(event) {
    if(valid === false){
        event.preventDefault();
    }else{

        const submitBtn = document.getElementById('submitBtn');
        const buttonText = submitBtn.querySelector('.button-text');

        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

    
    // Get form data
    const name = document.getElementById('inputFullName').value;
    const email = document.getElementById('inputEmail').value;
    const country = document.getElementById('selectedName').textContent;
    const phone = document.getElementById('inputPhone').value;
    const Company = document.getElementById('inputCampany').value;
    const message = document.getElementById('textarea').value;

    const formdata = {
        name,email,phone,Company,country,message
    }

    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email,phone, Company,country, message });
    
    // Show the modal
    setTimeout(()=>{
        showModal();
        submitBtn.classList.remove('loading');
        submitBtn.disabled=false;
    },1500)
    
    // Reset the form
    contactForm.reset();

    // remove icom 

    const correctIcon = document.querySelectorAll(".correct-icon"); // Match CSS class
    correctIcon.forEach((icon) =>{
        icon.style.display="none";
    })
}
});




//model container






// Function to show the modal
function showModal() {
    modalOverlay.classList.add('active');
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to hide the modal
function hideModal() {
    modalOverlay.classList.remove('active');
    // Restore scrolling when modal is closed
    document.body.style.overflow = 'auto';
}


// Close modal when close button is clicked
closeModalBtn.addEventListener('click', hideModal);

// Close modal when clicking outside the modal container
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        hideModal();
    }
});

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        hideModal();
    }
});







//service link

// const serviceLink = document.querySelectorAll('.service-link');
// const inputFullName= document.getElementById("inputFullName");

// serviceLink.forEach(link =>{
//     link.addEventListener("click", ()=>{
//         inputFullName.focus();
//     })
// })
