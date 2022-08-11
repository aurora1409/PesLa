function showCart() {
    document.getElementsByClassName("DOM")[0].style.display = "block";
    document.getElementsByClassName("cartDOM")[0].style.animation = "appear 0.6s";
    document.getElementsByClassName("opacity")[0].style.display = "block";
    // document.getElementsByClassName("opacity--click")[0].style.display = "block";
    document.getElementsByClassName("cartDOM")[0].style.display = "block";
    document.getElementById('FullPetsLa').style.pointerEvents = 'none';
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.paddingRight = "16px";
}

function disappearCart() {
    document.getElementsByClassName("DOM")[0].style.display = "none";
    document.getElementsByClassName("cartDOM")[0].style.animation = "disappear 0.6s both";
    document.getElementsByClassName("opacity")[0].style.display = "none";
    // document.getElementsByClassName("cartDOM")[0].style.display = "none";
    // document.getElementsByClassName("opacity--click")[0].style.display = "none";
    document.getElementById('FullPetsLa').style.pointerEvents = 'auto';
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    document.getElementsByTagName("body")[0].style.paddingRight = "0px";
    document.getElementById('FullPetsLa').style.opacity = "1";
}








