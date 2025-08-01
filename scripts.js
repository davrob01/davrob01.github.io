document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");

    const offScreenMenu = document.querySelector(".off-screen-menu");

    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });
});

function refreshVideoFrame(frameID){
    var iframeElement = document.getElementById(frameID);
    if(iframeElement) {
        iframeElement.src = iframeElement.src; // causes a reload
    }
}
