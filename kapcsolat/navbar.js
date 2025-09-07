const activeBackground = document.querySelector(".activeBackground");

const links = document.querySelector(".links");

const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");

let active = document.querySelector(".active");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

function linkRemove() {
    if (first.classList.contains("active")) {
        first.classList.remove("active");
    }

    if (second.classList.contains("active")) {
        second.classList.remove("active");
    }

    if (third.classList.contains("active")) {
        third.classList.remove("active");
    }
}

function activeBackgroundRemove() {
    activeBackground.classList.remove("activeBackground1");
    activeBackground.classList.remove("activeBackground2");
    activeBackground.classList.remove("activeBackground3");
}

function activeBackgroundClickedRemove() {
    if (activeBackground.classList.contains("activeBackgroundClicked1")) {
        activeBackground.classList.remove("activeBackgroundClicked1");
    }

    if (activeBackground.classList.contains("activeBackgroundClicked2")) {
        activeBackground.classList.remove("activeBackgroundClicked2");
    }

    if (activeBackground.classList.contains("activeBackgroundClicked3")) {
        activeBackground.classList.remove("activeBackgroundClicked3");
    }
}

link1.addEventListener("mouseover", ()=>{

    activeBackgroundRemove();

    activeBackground.classList.add("activeBackground1");

    linkRemove();

    first.classList.add("active");

    link1.addEventListener("click", ()=> {
        linkRemove();

        first.classList.add("active");
        active = document.querySelector(".first");

        activeBackgroundClickedRemove();

        activeBackground.classList.add("activeBackgroundClicked1");
    });
});

link2.addEventListener("mouseover", ()=>{

    activeBackgroundRemove();

    activeBackground.classList.add("activeBackground2");

    linkRemove();

    second.classList.add("active");

    link2.addEventListener("click", ()=> {
        linkRemove();

        second.classList.add("active");
        active = document.querySelector(".second");

        activeBackgroundClickedRemove();

        activeBackground.classList.add("activeBackgroundClicked2");
    });
});

link3.addEventListener("mouseover", ()=>{

    activeBackgroundRemove();

    activeBackground.classList.add("activeBackground3");

    linkRemove();

    third.classList.add("active");

    link3.addEventListener("click", ()=> {
        linkRemove();

        third.classList.add("active");
        active = document.querySelector(".third");

        activeBackgroundClickedRemove();

        activeBackground.classList.add("activeBackgroundClicked3");
    });
});

links.addEventListener("mouseout", () => {
    linkRemove();
    activeBackgroundRemove();

    active.classList.add("active");
});