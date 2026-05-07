/*navbar background*/
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


//sowar section 
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }

});

const contactForm = document.getElementById('sendForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        const fields = [
            { element: name, label: "Name" },
            { element: email, label: "Email" },
            { element: subject, label: "Subject" },
            { element: message, label: "Message" }
        ];

        for (let item of fields) {
            if (item.element.value.trim() === "") {
                alert(`Please fill out the ${item.label} field.`);
                item.element.focus(); 
                return; 
            }
        }

        alert('Your message has been sent successfully!');
        this.reset();
    });
}
