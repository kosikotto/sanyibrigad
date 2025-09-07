const navElement = document.querySelector(".hamburgerNavBar");
const gomb = document.querySelector("#linesLink");
const linesGomb1 = document.querySelector("#lines1");
const linesGomb2 = document.querySelector("#lines2");
const linesGomb3 = document.querySelector("#lines3");
const headerCheck = document.querySelector("#header");
const linesContainerAligner = document.querySelector(".linesContainer");
const upLogo = document.querySelector("#felLogo");

gomb.addEventListener("click", function(event) {
    event.preventDefault();
    navElement.classList.toggle("hamburgerNavBarOpen");
    navElement.classList.toggle("hamburgerNavBarWhenOpen");
    linesContainerAligner.classList.toggle("linesContainerOpenAlign");
    linesGomb1.classList.toggle("linesLinkClick");
    linesGomb2.classList.toggle("linesLinkClickMiddle");
    linesGomb3.classList.toggle("linesLinkClick2");
});

var scrollBefore = 0;

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.documentElement.scrollHeight;

    if (scrolled > 20) {
        if (scrollBefore > scrolled) {
            scrollBefore = scrolled;
            headerCheck.classList.remove("headerHide");
            navElement.classList.remove("hamburgerNavBarOpen");
            linesGomb1.classList.remove("linesLinkClick");
            linesGomb2.classList.remove("linesLinkClickMiddle");
            linesGomb3.classList.remove("linesLinkClick2");
            linesContainerAligner.classList.remove("linesContainerOpenAlign");
            navElement.classList.toggle("hamburgerNavBarWhenOpen");
            if(scrolled + windowHeight < bodyHeight) {
                upLogo.classList.remove("felLogoHide");
            }
            console.log("fel");
        } else if (scrollBefore < scrolled) {
            scrollBefore = scrolled;
            headerCheck.classList.add("headerHide");
            navElement.classList.remove("hamburgerNavBarOpen");
            linesGomb1.classList.remove("linesLinkClick");
            linesGomb2.classList.remove("linesLinkClickMiddle");
            linesGomb3.classList.remove("linesLinkClick2");
            linesContainerAligner.classList.remove("linesContainerOpenAlign");
            upLogo.classList.add("felLogoHide");
            navElement.classList.toggle("hamburgerNavBarWhenOpen");
            console.log("le");
        }
    }
});