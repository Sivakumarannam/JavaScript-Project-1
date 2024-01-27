function switchoff() {
    document.getElementById("bulbImage").src = "images/bulb-go-off-img.png";
    document.getElementById("catimage").src = "images/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent = "Switched Off";
    document.getElementById("onswitch").style.backgroundColor = "#22c55e";
    document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
}

function switchon() {
    document.getElementById("bulbImage").src = "images/bulb-go-on-img.png";
    document.getElementById("catimage").src = "images/cat-img.png";
    document.getElementById("switchstatus").textContent = "Switched On";
    document.getElementById("offswitch").style.backgroundColor = "#e12d39";
    document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
}
