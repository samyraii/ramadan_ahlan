var spinner = document.querySelector(".loading"),
    allahomBl8na = document.querySelector(".bl8narmdn"),
    quran = document.querySelector(".quran");
    
    window.addEventListener("load", () => {
       
        document.body.style.overflow = "hidden";
        setInterval(() => {
            spinner.style.display = "none";
            document.body.style.overflow = "auto";
        }, 5000);

    })

const count = document.querySelector(".count");

let countdowndate = new Date("Mar 23, 2023 00:00:00").getTime();
let counter = setInterval(()  => {

    let dateNow = new Date().getTime();

    let dateDiff = countdowndate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60))
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
        // count.style.display = "none";


    }

}, 1000)



// Toggle Menu

var iconToggle = document.querySelector(".toggle-icon"), closeToggle = document.querySelector(".close-toggle"),
      menu = document.querySelector(".toggle-nav"),  imsakyaOpen = document.querySelector(".imsakya"),
      imsakyaImage = document.querySelector(".imsakyaa"), imsakyaClose = document.querySelector(".close-imsakya");

    iconToggle.onclick = function() {
        this.style.display = "none";
        menu.style.display = "block";
        
    }
    closeToggle.onclick = function(){
        iconToggle.style.display = "block";       
        menu.style.display = "none"; 
    }
    imsakyaOpen.onclick = function(){
        this.style.display = "none";
        imsakyaImage.style.display = "block";             
    }
    imsakyaClose.onclick = function(){
        imsakyaOpen.style.display = "block";       
        imsakyaImage.style.display = "none"; 
    }
