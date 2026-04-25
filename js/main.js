/*navbar background*/
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
/*counter animation */
const counters = document.querySelectorAll(".counter");
const section = document.querySelector(".stats");

let started = false;

const startCounting = () => {
  counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !started) {
    startCounting();
    started = true;
  }
});

observer.observe(section);

 const modal = document.getElementById("lightbox-modal");
        const fullImg = document.getElementById("full-img");
        const closeBtn = document.querySelector(".close-btn");
        const links = document.querySelectorAll(".light-link");

        links.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();   
                const imagePath = this.getAttribute("href"); 
                fullImg.src = imagePath;
                modal.style.display = "flex";
            
            })
        })
closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

  window.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
