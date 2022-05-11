const buttonResponsive = document.querySelector(".bxs-grid");
const desplegable = document.querySelector(".nav__li-container");
buttonResponsive.addEventListener('click', function(e){
    console.log("Entro")
    if(desplegable.classList.contains("visible")){
        desplegable.classList.remove("visible");
        console.log("remove")
    }else {
        desplegable.classList.add("visible");
        console.log("Noremove")
    }
});