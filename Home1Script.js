function myFunction1(verb,object) {
    alert('Klik disitu untuk ' + verb + object)
}

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const hamburger = document.getElementById("hamburger");
const navb = document.getElementById("navb");

hamburger.addEventListener("click", () => {
    navb.classList.toggle("active");
});
