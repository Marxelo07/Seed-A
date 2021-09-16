var Zavala = "Titan";
var Ikora = "Mago";
var Cayde = "Cazador";
var Luz = "Guardianes"
var Oscuridad = "Villanos"

if (Zavala > Cayde){ 
    console.log("Zavala es mayor que Cayde");
    switch(Zavala){
        case 1:
            if(Zavala > Cayde){
                console.log("Zavala es menor que Cayde");
            }else{
                switch(Cayde){
                    case 11:
                        console.log("Zavala no es un Titan");
                    break;
                }
            }
        }
    }
if (Cayde < Ikora){
    console.log("Cayde es menor que Ikora");
    switch(Cayde){
        case 2:
            if(Cayde < Ikora){
                console.log("Cayde es mayor que Ikora");
            }else{
                switch(Ikora){
                    case 2.2:
                        console.log("Cayde es mejor que todos");
                    break;
                }
            }
        }
    }
if (Ikora = Zavala){
    console.log("Ikora es igual que Zavala");
    switch(Ikora){
        case 3:
            if(Ikora != Zavala){
                console.log("Ikora no es igual a Zavala");
            }else{
                switch(Ikora){
                    case 3.2:
                        console.log("Ikora no es Guardiana");
                    break;
                 }
             }
        }
    }
if(Luz = Oscuridad){
    console.log("La Luz es igual a la Oscuridad");
    switch(Luz){
        case 4:
            if(Luz <= Oscuridad){
                console.log("La luz es menor o igual que la oscuridad");
            }else{
                switch(Oscuridad){
                    case 4.2:
                        console.log("La luz es debil");
                    break;
                }
            }
        }
    }
if(Oscuridad = Luz){
    console.log("La oscuridad es igual a la luz");
    switch(Oscuridad){
        case 5:
            if(Oscuridad >= Luz){
                console.log("la oscuridad es mayor o igual a la luz");
            }else{
                switch(Luz){
                    case 5.2:
                        console.log("La oscuridad es fuerte");
                    break;
                }
            }
        }
    }