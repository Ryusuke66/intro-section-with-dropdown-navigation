let dropper = document.querySelectorAll("header .list-drop");

dropper.forEach(e => {
    e.onclick = function() {
        if(e.classList.contains("on")) {
            e.classList.remove("on");
        } else {
            e.classList.add("on");
        }
    }
});

let menuIcon = document.getElementById("menu"),
    body = document.querySelector("body"),
    nav = document.querySelector("nav");
    
menuIcon.onclick = function() {
    if (menuIcon.classList.contains("active")) {
        menuIcon.classList.add("inactive");
        menuIcon.classList.remove("active");
        nav.classList.remove("opened");
        body.style.overflowY = "auto";
    } else {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        body.style.overflowY = "hidden";
        nav.classList.add("opened");
        menuIcon.classList.add("active");
        menuIcon.classList.remove("inactive");
    }
}

let navListDrop = document.querySelectorAll("nav .list-drop");

navListDrop.forEach(e => {
    e.onclick = function() {
        if(e.classList.contains("on")) {
            e.classList.remove("on");
        } else {
            e.classList.add("on");
        }
    }
});

body.addEventListener("click", function () {
    if (menuIcon.classList.contains("active")) {
        nav.classList.remove("opened");
        menuIcon.classList.remove("active");
        menuIcon.classList.add("inactive");
        body.style.overflowY = "auto";
    };
})
menuIcon.addEventListener("click", function (ev) {
    ev.stopPropagation();
});

let wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", function (ev) {
    ev.stopPropagation();
});