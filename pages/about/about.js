var spinner = document.querySelector(".loading"),
    quraan = document.querySelector(".quran");

window.addEventListener("load", () => {
        quraan.play();
        document.body.style.overflow = "hidden";
        setInterval(() => {
            spinner.style.display = "none";
            document.body.style.overflow = "auto";
        }, 5000);

})

var iconToggle = document.querySelector(".toggle-icon"), closeToggle = document.querySelector(".close-toggle"),
menu = document.querySelector(".toggle-nav");

iconToggle.onclick = function() {
    this.style.display = "none";
    menu.style.display = "block";
    
}
closeToggle.onclick = function(){
    iconToggle.style.display = "block";       
    menu.style.display = "none";
    
}
// sections
var hideOne = document.querySelector(".headline-1"),hideTwo = document.querySelector(".headline-2"),
hideThree = document.querySelector(".headline-3"),hideFour = document.querySelector(".headline-4"),
hideFive = document.querySelector(".headline-5"),hideSix = document.querySelector(".headline-6"),
hideSev = document.querySelector(".headline-7"),hideEight = document.querySelector(".headline-8");

var secOne = document.querySelector(".mf-section-1"),secFive = document.querySelector(".mf-section-5"),
secTwo = document.querySelector(".mf-section-2"),secSix = document.querySelector(".mf-section-6"),
secThree = document.querySelector(".mf-section-3"),secSev = document.querySelector(".mf-section-7"),
secFour = document.querySelector(".mf-section-4"),secEight = document.querySelector(".mf-section-8");
var expand = document.querySelectorAll(".expand"), secHeading = document.querySelectorAll(".section-heading"),
mfSections = document.querySelectorAll(".text-block");

secHeading.forEach(function (elez) {
    elez.addEventListener('click', function () {
            (Array.from(elez.children))[0].classList.add("active");
    });
});  
hideOne.onclick = function () {                
    if (secOne.getAttribute("hidden") === "until-found") {
        secOne.removeAttribute("hidden");
        hideOne.classList.add("active");

    } else {
        secOne.setAttribute("hidden", "until-found");
        hideOne.classList.remove("active");
        secHeading.forEach(function (elez) {
            (Array.from(elez.children))[0].classList.remove("active");
        });
    }
}
hideTwo.onclick = function () {                
    if (secTwo.getAttribute("hidden") === "until-found") {
        secTwo.removeAttribute("hidden");
        hideTwo.classList.add("active");
    } else {
        secTwo.setAttribute("hidden", "until-found");
        hideTwo.classList.remove("active");
        secHeading.forEach(function (elez) {
            (Array.from(elez.children))[0].classList.remove("active");
        });
    }
}
hideThree.onclick = function () {                
    if (secThree.getAttribute("hidden") === "until-found") {
        secThree.removeAttribute("hidden");
        hideThree.classList.add("active");
    } else {
        secThree.setAttribute("hidden", "until-found");
        hideThree.classList.remove("active");
        secHeading.forEach(function (elez) {
            (Array.from(elez.children))[0].classList.remove("active");
        });
    }
}
hideFour.onclick = function () {                
    if (secFour.getAttribute("hidden") === "until-found") {
        secFour.removeAttribute("hidden");
        hideFour.classList.add("active");
    } else {
        secFour.setAttribute("hidden", "until-found");
        hideFour.classList.remove("active");
        secHeading.forEach(function (elez) {
            (Array.from(elez.children))[0].classList.remove("active");
        });
    }
}
hideFive.onclick = function () {                
    if (secFive.getAttribute("hidden") === "until-found") {
        secFive.removeAttribute("hidden");
        hideFive.classList.add("active");
    } else {
        secFive.setAttribute("hidden", "until-found");
        hideFive.classList.remove("active");
        secHeading.forEach(function (elez) {
            (Array.from(elez.children))[0].classList.remove("active");
        });
    }
}
hideSix.onclick = function () {                
    if (secSix.getAttribute("hidden") === "until-found") {
        secSix.removeAttribute("hidden");
        hideSix.classList.add("active");
    } else {
        secSix.setAttribute("hidden", "until-found");
        hideSix.classList.remove("active");
        secHeading.forEach(function (elez) {
            (Array.from(elez.children))[0].classList.remove("active");
        });
    }
}
hideSev.onclick = function () {                
    if (secSev.getAttribute("hidden") === "until-found") {
        secSev.removeAttribute("hidden");
        hideSev.classList.add("active");
    } else {
        secSev.setAttribute("hidden", "until-found");
        hideSev.classList.remove("active");
        secHeading.forEach(function (elez) {
            (Array.from(elez.children))[0].classList.remove("active");
        });
    }
}
hideEight.onclick = function () {                
    if (secEight.getAttribute("hidden") === "until-found") {
        secEight.removeAttribute("hidden");
        hideEight.classList.add("active");
    } else {
        secEight.setAttribute("hidden", "until-found");
        hideEight.classList.remove("active");
        secHeading.forEach(function (elez) {
            (Array.from(elez.children))[0].classList.remove("active");
        });
    }
}