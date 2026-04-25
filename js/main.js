/*navbar background*/
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
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
