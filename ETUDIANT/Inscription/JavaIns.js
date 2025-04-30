var select = document.getElementById("sel");
    var sections = document.querySelectorAll(".section");
    window.addEventListener("load",()=>{
        affichage();
    })
    select.addEventListener("change",()=>{
        affichage();
    })
    function affichage(){
        sections.forEach(section => {
            if(section.id == select.value){
                section.style.display = "block";
            }
            else{
                section.style.display = "none";
            }
        });
    }

    var select1 = document.getElementById("sel1");
                var sections1 = document.querySelectorAll(".section1");
                window.addEventListener("load",()=>{
                    affichage1();
                })
                select1.addEventListener("change",()=>{
                    affichage1();
                })
                function affichage1(){
                    sections1.forEach(section1 => {
                        if(section1.id == select1.value){
                            section1.style.display = "block";
                        }
                        else{
                            section1.style.display = "none";
                        }
                    });
                }