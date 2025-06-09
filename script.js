const shareBtn = document.querySelector(".share-btn");
const shareBar = document.querySelector(".share-bar");
const shareBarMobile = document.querySelector(".share-bar-mobile");
const breakingPoint = 1075

let active = false;

function openBar(){
    if(active == true){
        shareBtn.classList.add("btn-active");
        if (window.innerWidth > breakingPoint){
            shareBar.classList.add("active");
            shareBarMobile.classList.remove("active");
        }
        else{
            shareBarMobile.classList.add("active");
            shareBar.classList.remove("active");
        }
    }
    else{
        shareBtn.classList.remove("btn-active");
        shareBarMobile.classList.remove("active");
        shareBar.classList.remove("active");
    }
}

// when i click the button, i get the socials thingy based on screen size
shareBtn.addEventListener("click", (event) => {
    active = !active;
    console.log(active);
    openBar();
})

window.addEventListener("resize", () =>{
    openBar();
})