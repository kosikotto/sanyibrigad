const loading = document.querySelector(".loading");
const loadingDone = document.querySelector(".loadingDone");
const loaded = document.querySelector(".loaded");

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        loaded.classList.add("loadedDone");
        loading.classList.add("loadingDone");
    },1000);

    loading.addEventListener("transitionend", ()=>{
        loading.remove();
    });
});