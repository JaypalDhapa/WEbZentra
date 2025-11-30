// // contact box 

// const inputFullName = document.getElementById("inputFullName");
// const inputEmail=document.getElementById("inputEmail");
// const inputCompany=document.getElementById("inputCompany");
// const correctIcon = document.getElementById("correctIcon");

// const labelForFullName=document.getElementById("labelForFullName");
// const labelForEmail=document.getElementById("labelForEmail");
// const labelForCompany=document.getElementById("lableForCompany");

// inputFullName.addEventListener("blur", ()=>{
//     if(inputFullName.value !== ""){
//         correctIcon.style.display="block";
//         inputFullName.style.borderColor="#3498db";
//         labelForFullName.style.color="#666"
//     }else{
//         inputFullName.style.borderColor="red";
//         labelForFullName.style.color="red";
//         correctIcon.style.display="none";
//     }
// })




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
