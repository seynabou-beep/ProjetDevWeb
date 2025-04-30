const menu_button = document.getElementById("menu-button");

const menu_img = document.getElementById("menu-img");
const main = document.getElementById("main");



document.onclick = function(e) {
    if(e.target.id !== "menu-img" ){   
        main.classList.remove("active");
        menu_img.classList.remove("active");
    }
}

menu_button.addEventListener("click",()=>{
    main.classList.add("active");
    menu_img.classList.add("active");
})

