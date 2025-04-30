var selectspecialite = document.getElementById("classe");
var semestres = document.querySelectorAll(".mestre")
var selectsemestre=document.getElementById("selectsemes")
var groupetds = document.querySelectorAll(".groupetd")
var classes = document.querySelectorAll(".sat-classes");
console.log(selectsemestre)

window.addEventListener("load",()=>{
    affichage();
})
selectspecialite.addEventListener("change",()=>{
    affichage();
    groupetds.forEach(groupetd => {
        groupetd.style.display = "none";
    });
    classes.forEach(classe =>{
        if(selectspecialite.value.toLowerCase() === classe.id.toLowerCase()){
            groupetds.forEach(groupetd => {
                if(classe.value === groupetd.id)
                    groupetd.style.display = "block";
                else
                    groupetd.style.display = "none";
            });
        }
    })
})

function affichage(){
        semestres.forEach(semestre => {
            if(semestre.id == selectspecialite.value)
                semestre.style.display = "block";
            else
                semestre.style.display = "none";
        }) 
}

window.addEventListener("load",()=>{
    classes.forEach(classe => {
        if(selectspecialite.value.toLowerCase() === classe.id.toLowerCase()){
            groupetds.forEach(groupetd => {
                if(classe.value === groupetd.id)
                    groupetd.style.display = "block";
                else
                    groupetd.style.display = "none";
            });
        }
    });
})
classes.forEach(classe =>{
    classe.addEventListener('change',()=>{
        groupetds.forEach(groupetd => {
            groupetd.style.display = "none";
        });
        if(selectspecialite.value.toLowerCase() === classe.id.toLowerCase()){
                groupetds.forEach(groupetd => {
                if(classe.value === groupetd.id)
                    groupetd.style.display = "block";
                else
                    groupetd.style.display = "none";
            });
        }
    });
})