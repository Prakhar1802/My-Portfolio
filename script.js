// scrolling of section
let sections = document.querySelectorAll("section");
let navlink = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // active navbarlink
            navlink.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id +']').classList.add("active");
            })
        }

    })
    // sticky header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    navbar.classList.remove("active")
    menuicon.classList.remove("fa-times")
    menuicon.classList.add("fa-bars")
}


// toggle mmenu-icon
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () =>{
    menuicon.classList.toggle("fa-bars")
    menuicon.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}
