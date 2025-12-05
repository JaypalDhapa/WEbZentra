

// backToTop Arrow 

document.getElementById('backToTop').addEventListener("click", function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    });
})

// show arrow when page scroll
window.addEventListener("scroll", function(){
    const arrow = this.document.getElementById('backToTop');
    if(window.scrollY>100){
        arrow.classList.add('show');
    }else{
        arrow.classList.remove("show");
    }
})

// cta button 

document.getElementById('cta-btn').addEventListener("click", function(){
    document.getElementById("inputFullName").focus();
})

// email 

document.getElementById("email").addEventListener("click",function(){
    window.location.href ="mailto:contact.webzentra@gmail.com";
})
// Image slides 


document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot'); // dots select karo
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
        currentSlide = index; // currentSlide update karo
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Auto slide
    setInterval(nextSlide, 5000);

    // Dot click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
});


// FAQ 


document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', (e) => {
            // Prevent scrolling behavior
            e.preventDefault();
            
            // Get current scroll position
            const currentScroll = window.pageYOffset;
            
            // Toggle current item ONLY - don't close other items
            item.classList.toggle('active');
            
            // Restore scroll position after DOM update
            setTimeout(() => {
                window.scrollTo(0, currentScroll);
            }, 10);
        });
    });
});






//navbar
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const getInTouch = document.querySelector(".getintouch");

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        // Change hamburger icon
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }


        if (navMenu.classList.contains("active")) {
            document.body.classList.add("no-scroll");
            

            // Button ko 300ms delay se show karo
            setTimeout(() => {
            }, 300); // navmenu transition time == 300ms
    
        } else {
            document.body.classList.remove("no-scroll");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");  // close menu
            document.body.classList.remove("no-scroll"); // enable scroll
        });
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});


// close nav menu when click on gettouch button 

const getintouch = document.getElementById("getintouch");

// getintouch.addEventListener("click", ()=>{
    
// })