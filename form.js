
// Sab input boxes ke liye
const inputs = document.querySelectorAll(".input-box input");

inputs.forEach(input => {
    const label = input.nextElementSibling; // label
    const correctIcon = input.parentElement.querySelector(".correctIcon"); // har input ka icon

    input.addEventListener("blur", () => {
        const value = input.value.trim();

        // Email validation
        if (input.type === "email") {
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailPattern.test(value)) {
                input.style.borderColor = "red";
                label.style.color = "red";
                if(correctIcon) correctIcon.style.display = "none";
            } else {
                input.style.borderColor = "#3498db";
                label.style.color = "#666";
                if(correctIcon) correctIcon.style.display = "block";
            }
        } 
        // Text inputs (name, company, etc.)
        else {
            if (value === "") {
                input.style.borderColor = "red";
                label.style.color = "red";
                if(correctIcon) correctIcon.style.display = "none";
            } else {
                input.style.borderColor = "#3498db";
                label.style.color = "#666";
                if(correctIcon) correctIcon.style.display = "block";
            }
        }
    });
});

//model container




// Get DOM elements
const contactForm = document.getElementById('contactForm');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');

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

// Handle form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const subject = document.getElementById('subject').value;
    // const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // console.log('Form submitted:', { name, email, subject, message });
    
    // Show the modal
    setTimeout(()=>{
        showModal();
    },500)
    
    // Reset the form
    contactForm.reset();
});

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

const serviceLink = document.querySelectorAll('.service-link');
const inputFullName= document.getElementById("inputFullName");

serviceLink.forEach(link =>{
    link.addEventListener("click", ()=>{
        inputFullName.focus();
    })
})
