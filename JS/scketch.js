//P5
//window.onorientationchange = function() { 
//  console.log("the orientation of the device is now " + screen.orientation.90);
//};
let imatgeOri, imatgeProcess;

function preload() {
    //imatgeOri = loadImage("js/pixelSorting/img/twinpeaks.jpg");
    imatgeOri = loadImage("../IMG/polixuia.jpg");

}


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#secciopixel");

    if (windowWidth > windowHeight) {
        imatgeOri.resize(windowWidth, 0);
    } else {
        imatgeOri.resize(0, windowHeight);
    }
    imatgeProcess = createImage(imatgeOri.width, imatgeOri.height);
    imatgeProcess.set(0, 0, imatgeOri);
}

function draw() {
    background(0, 0, 0);
    image(imatgeProcess, 0, 0);
}


function dibuixaPixels(pasos) {
    //Copiem la imatge original a imatge process cada cop
    imatgeProcess.set(0, 0, imatgeOri);

    //Carreguem els pixels de la imatge al seu array de pixels
    imatgeProcess.loadPixels();

    //Ho fem tot tantes vegades com ens diguin per paràmetre
    for (let j = 0; j < pasos; j++) {
        //El for avança en cops de 4 en 4 pq cada pixel ocupa 4 posicions a l'array (RGBA)
        for (let i = 0; i < imatgeProcess.pixels.length; i = i + 4) {
            let vermell = imatgeProcess.pixels[i];
            let verd = imatgeProcess.pixels[i + 1];
            let blau = imatgeProcess.pixels[i + 2];
            //let opacitat = imatgeProcess.pixels[i + 3]; //només per img amb transparència
            if (verd > 25 && blau > 30 && blau > 4 && vermell > 40) {
                let fila = imatgeProcess.width * 4;
                //(i+4-fila) és el pixel de l'esquerra (+4) i adalt (-fila)
                imatgeProcess.pixels[i + 4 - fila] = vermell;
                imatgeProcess.pixels[i + 5 - fila] = verd - 1;
                imatgeProcess.pixels[i + 6 - fila] = blau - 1;
            }

            //Taronjes
            if (verd > 100 && verd < 180 && blau < 15 && vermell > 200) {
                let fila = imatgeProcess.width * 4;
                //(i+4-fila) és el pixel de l'esquerra (+4) i adalt (-fila)
                imatgeProcess.pixels[i + 4 - fila] = vermell;
                imatgeProcess.pixels[i + 5 - fila] = verd;
                imatgeProcess.pixels[i + 6 - fila] = blau;
            }

            if (verd > 50 && verd < 190 && blau > 70 && blau < 140 && vermell > 15 && vermell > 100) {
                //i-4 és el pixel de la dreta
                imatgeProcess.pixels[i - 4] = vermell - 1;
                imatgeProcess.pixels[i - 3] = verd + 2;
                imatgeProcess.pixels[i - 2] = blau + 2;
            }
        }
    }
    //Actualitzem la imatge amb els pixels que hem modificat
    imatgeProcess.updatePixels();
}

//BOTO PUJAR SCROLL

function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// LOGO QUE GIRA
$(document).ready(function(){
   var bodyHeight = $("body").height()-$(window).height();
   window.onscroll = function() {

      //Determine the amount to rotate by.
      var deg = -window.scrollY*(360/bodyHeight);

      $(".carga").css({
        "transform": "rotate("+deg+"deg)",
      });

   };
});
//-------ScrollMagic--------//


let controller = new ScrollMagic.Controller();

// PANTALLA 0 flexerscroll
let animacio01 = new TimelineMax();
animacio01.fromTo("#fletxascroll", 3, {

    opacity: 1,

}, {
    opacity: 1,

}, );
animacio01.fromTo("#fletxascroll", 3, {

    opacity: 1,
}, {
    opacity: 0,

}, );



new ScrollMagic.Scene({
        triggerElement: "#seccio1",
        triggerHook: 0,
     duration: "100%",
    
    })
    .setTween(animacio01)
    //.addIndicators()
    .addTo(controller);

// PANTALLA 0 portada
let animacio1 = new TimelineMax();
animacio1.fromTo("#titol", 2, {

    top: "40%",
    blur: 10,
    opacity: 0

}, {
    top: "45%",
    blur: 0,
    opacity: 1

}, 2);
animacio1.fromTo(".destacatitol", 3, {
    top: "0%",
    opacity: 0,

}, {
    top: "8%",
    opacity: 1,
}, 2);

new ScrollMagic.Scene({
        triggerElement: "#seccio1",
        triggerHook: 0,
        duration: "200%",
    })
    .setTween(animacio1)
    .setPin("#seccio1")
    //.addIndicators()
    .addTo(controller);

// PANTALLA 3 història
//animacio parallax imatge fons !!!!!
let animaciotxt = new TimelineMax();
animaciotxt.fromTo("#subtitolhistoria", 1, {
    bottom: "50px",
    opacity: 0,
}, {

    bottom: "60px",
    opacity: 1,
}, 0);
animaciotxt.fromTo("#divdos", 1, {
    bottom: "10%",
    opacity: 0,
}, {
    bottom: "30%",
    opacity: 1,
}, 0);


new ScrollMagic.Scene({
        triggerElement: "#seccio2",
        triggerHook: 0,
        duration: "100%",
    })
    .setTween(animaciotxt)
 
    //    .addIndicators({name:"seccio2s"})
    .addTo(controller);
//coronels imatge
let animaciocoronel = new TimelineMax();
animaciocoronel.fromTo("#coronels", 6, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
});
new ScrollMagic.Scene({
        triggerElement: "#seccio2",
        triggerHook: 0.,
        duration: "400%",
    })
    .setTween(animaciocoronel)
   .setPin("#seccio2")////!!!!!!//
    //    .addIndicators({name:"CORONEL FONS"})
    .addTo(controller);
//videohistoria
let animaciohistoria = new TimelineMax();
animaciohistoria.fromTo("#subtitolhistoria", 1, {
    bottom: "50px",
    blur: 2,
    opacity: 0,

}, {

    bottom: "60px",
    blur: 0,
    opacity: 1,
}, 0);
animaciohistoria.fromTo("#divdos", 1, {
    bottom: "10%",
    opacity: 0,
}, {
    bottom: "30%",
    opacity: 1,
}, 0);


new ScrollMagic.Scene({
        triggerElement: "#videohistoria",
        triggerHook: 0,
        duration: "100%",
    })
    .setTween(animaciohistoria)
    .setPin("#videohistoria")
    //    .addIndicators({name:"seccio2s"})
    .addTo(controller);



//Fer que puji ràpid
//let animacio3b = new TimelineMax();
//animacio3b.to("#seccio2", 1, {
//    height: "0"
//});
//new ScrollMagic.Scene({
//        triggerElement: "#seccio2",
//        triggerHook: 0,
//        duration: "1%"
//    })
//    .setTween(animacio3b)
//    .addIndicators({name:"textoooo"})
//    .addTo(controller);



//new ScrollMagic.Scene({
//
//        triggerElement: "#imatge2",
//        triggerHook: 1,
//        duration: "200%",
//        ease: Power2.easeInOut
//    })
//    .setTween(animacio2)
//        .addIndicators({
//            name: "imatgeee"
//        })
//    .addTo(controller);

//dobles animacio texte
let animacio4a = new TimelineMax();
animacio4a.fromTo("#imatge2", 5, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
});
new ScrollMagic.Scene({
        triggerElement: "#divdos2",
        triggerHook: 1,
        duration: "400%",
    
    })
    .setTween(animacio4a)
    //.addIndicators({name:"divdos MOVIMENTS IMATGE"})
    .addTo(controller);

//titol historia
let animaciotetol = new TimelineMax();
animaciotetol.fromTo("#historia", 1, {
    opacity: 0,
}, {
    opacity: 1,
   
});
animaciotetol.fromTo("#historia", 2, {
    opacity: 1,
    scale:1,
}, {
    opacity: 1,
    scale:2,
});
new ScrollMagic.Scene({
        triggerElement: "#historia",
        triggerHook: 0,
        duration: "200%",
    })
    .setTween(animaciotetol)
    .setPin("#historia")
    //    .addIndicators({
    //        name: "divdos PINEJAT TEXTE"
    //    })
    .addTo(controller);
//destacat despres del videohistoria

let destacathist = new TimelineMax();
destacathist.fromTo("#destacatet", 1, {
    bottom: "50%",
    opacity: 0,
}, {
    opacity: 1,
    bottom: "45%",

});
destacathist.fromTo("#destacatet", 2, {
    opacity: 1,

}, {
    opacity: 0,
});

new ScrollMagic.Scene({
        triggerElement: "#destacathisto",
        triggerHook: 0,
        duration: "200%",
    })
    .setTween(destacathist)
    .setPin("#destacathisto")
//        .addIndicators({
//            name: "scarlett"
//        })
    .addTo(controller);
//PANTALLA 2 parlem//
let animacio4d = new TimelineMax();
animacio4d.fromTo("#imatge3", 5, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
});

let animacio4b = new TimelineMax();
animacio4b.fromTo("#divtres", 3, {
    opacity: 0,
    bottom: "50%",
}, {
    opacity: 1,
    bottom: "45%",
});
animacio4b.fromTo("#divtres", 10, {
    blur: 2,
    bottom: "45%",

}, {
    blur: 0,
    bottom: "40%",
});
new ScrollMagic.Scene({
        triggerElement: "#seccio3",
        triggerHook: 0,
        duration: "100%",
    })
    .setTween(animacio4b)
    
    // .addIndicators({name:"divdos PINEJAT TEXTE"})
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#seccio3",
        triggerHook: 0.,
        duration: "400%",
    })
    .setTween(animacio4d) 
.setPin("#seccio3")////!!!!!!//
    //    .addIndicators({name:"divdos PINEJAT TEXTE"})
    .addTo(controller);

//text video historia
let textdestacat = new TimelineMax();
textdestacat.fromTo("#destacatet", 1, {

    bottom: "50%",
    opacity: 0,

}, {
    opacity: 1,
    bottom: "45%",

});
textdestacat.fromTo("#destacatet", 5, {

    bottom: "45%",

}, {
    bottom: "55%",

});

new ScrollMagic.Scene({

        triggerElement: "#videohistoria",
        triggerHook: 0.2,
        duration: "300%",
        ease: Power2.easeInOut
    })
    .setTween(textdestacat)
    //  .addIndicators({name: "destacat"})
    .addTo(controller);

//seccio i text2 fons 50vh
let textdestacat2 = new TimelineMax();
textdestacat2.fromTo("#destacatet2", 1, {
    opacity: 0,
    bottom: "50%",
}, {
    opacity: 1,
    bottom: "40%",
});
textdestacat2.fromTo("#destacatet2", 1, {
    opacity: 1,
    bottom: "40%",
}, {
    opacity: 0,
    bottom: "35%",
});
new ScrollMagic.Scene({

        triggerElement: "#secciomitat2",
        triggerHook: 0,
        duration: "100%",
        ease: Power2.easeInOut
    })
    .setTween(textdestacat2)
    .setPin("#secciomitat2")
    //        .addIndicators({
    //            name: "destacat2"
    //        })
    .addTo(controller);

//seccio destacat3 fons 50vh
let textdestacat3 = new TimelineMax();
textdestacat3.fromTo("#destacatet3", 1, {

    bottom: "50%",
    opacity: 0,

}, {
    opacity: 1,
    bottom: "45%",

});
textdestacat3.fromTo("#destacatet3", 1, {

    bottom: "45%",
    opacity: 1,

}, {
    opacity: 1,
    bottom: "55%",

});

new ScrollMagic.Scene({

        triggerElement: "#secciomitat3",
        triggerHook: 0,
        duration: "200%",
        ease: Power2.easeInOut
    })
    .setTween(textdestacat3)
    .setPin("#secciomitat3")
    //        .addIndicators({
    //            name: "destacat3"
    //        })
    .addTo(controller);



//part del morphin//
new ScrollMagic.Scene({

        triggerElement: ".objecte",
        triggerHook: 0,
        duration: "50%",
        ease: Power2.easeInOut
    })
    .setPin("#paretexxt")
    //    .setTween(animaciotext)
    //    .addIndicators({
    //        name: "video"  })
    .addTo(controller);

//PANTALLA 3 esta situat//
//titol elbarri
let animacioelbarri = new TimelineMax();
animacioelbarri.fromTo("#elbarri", 9, {
    opacity: 0,
}, {
    opacity: 1,
});
animacioelbarri.fromTo("#elbarri", 10, {
    opacity: 1,
    scale:1,
}, {

    opacity: 0,
    scale:3,
});
new ScrollMagic.Scene({
        triggerElement: "#secciotitol2",
        triggerHook: 0.1,
        duration: "200%",
 
    })
    .setTween(animacioelbarri)
    .setPin("#secciotitol2")
    //    .addIndicators({
    //        name: "divdos PINEJAT TEXTE"
    //    })
    .addTo(controller);

let animacio78 = new TimelineMax();
animacio78.fromTo("#imatge4", 6, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
});

let animacio77 = new TimelineMax();
animacio77.fromTo("#divdos2", 1, {
    blur: 2,
    opacity: 0,
    bottom: "50%",
}, {
    blur: 0,
    opacity: 1,
    bottom: "60%",
});
new ScrollMagic.Scene({
        triggerElement: "#seccio4",
        triggerHook: 0,
        duration: "400%",
    
    })
    .setTween(animacio78)
.setPin("#seccio4")
//    .addIndicators({
//        name: "divdos PINEJAT TEXTE"
//    })
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#seccio4",
        triggerHook: 0,
        duration: "100%",
    })
    .setTween(animacio77)
    
    //     .addIndicators({name:"divdos PINEJAT TEXTE"})
    .addTo(controller);

//new ScrollMagic.Scene({
//        triggerElement: "#seccio5",
//        triggerHook: 0,
//        duration: "200%",
//    })
//    .setTween(animacio77)
//    .setPin("#seccio5")
//    // .addIndicators({name:"divdos PINEJAT TEXTE"})
//    .addTo(controller);

//----PANTALLA AMBIENT-----
let animacio45 = new TimelineMax();
animacio45.fromTo("#imatge45", 9, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
});

let animacio46 = new TimelineMax();
animacio46.fromTo("#divdos45", 1, {
    blur: 2,
    opacity: 0,
    bottom: "50%",
}, {
    blur: 0,
    opacity: 1,
    bottom: "60%",
});
new ScrollMagic.Scene({
        triggerElement: "#seccio45",
        triggerHook: 0,
        duration: "400%",
    })
    .setTween(animacio45)
   .setPin("#seccio45")
//    .addIndicators({
//        name: "divdos PINEJAT TEXTE"
//    })
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#seccio45",
        triggerHook: 0,
        duration: "100%",

    })
    .setTween(animacio46)
    //     .addIndicators({name:"divdos PINEJAT TEXTE"})
    .addTo(controller);


//---PANTALLA 5 morphin---
new ScrollMagic.Scene({
        triggerElement: "#secciomorfin",
        triggerHook: 0,
        duration: "800%",
    })
    //    .setTween(animacio77)
    .setPin("#secciomorfin")
    // .addIndicators({name:"divdos PINEJAT TEXTE"})
    .addTo(controller);

let animaciomorph = new TimelineMax();
animaciomorph.to("#lletra", 3, {
    morphSVG: {
        shape: "#strella",
    }
});
animaciomorph.to("#lletra", 3, {
    morphSVG: {
        shape: "#antifeix",
    }
}, 3);
animaciomorph.to("#lletra", 8, {
    opacity: 0
}, 12);
animaciomorph.to("#bandera2", 2, {
    opacity: 1
}, 9);
animaciomorph.to("#bandera2", 8, {
    opacity: 0
}, 12);
animaciomorph.to("#vermellnegre", 8, {
    opacity: 1
}, 12);
animaciomorph.to("#vermellnegre", 8, {
    opacity: 0
}, 20);
animaciomorph.to("#gaato", 8, {
    opacity: 1
}, 20);



new ScrollMagic.Scene({
        triggerElement: "#oblidat",
        triggerHook: 0,
        duration: "800%"
    })
    .setTween(animaciomorph)
    //seccioti    .addIndicators({
    //        name: "morfin"
    //    })
    .addTo(controller);

let textdestacatmorfin = new TimelineMax();
textdestacatmorfin.fromTo("#divdos4", 2, {

    bottom: "50%",
    opacity: 0,
}, {
    opacity: 1,
    bottom: "45%",
});
textdestacatmorfin.fromTo("#divdos4", 1, {

    bottom: "45%",
}, {
    bottom: "40%",
});

new ScrollMagic.Scene({
        triggerElement: "#secciomorfin",
        triggerHook: 0,
        duration: "100%",
    })
    .setTween(textdestacatmorfin)
    //    .addIndicators({
    //        name: "morfin text"
    //    })
    .addTo(controller);

//----PANTALLA 4 te dejo pixelaos---
//let animaciotext5 = new TimelineMax();
//animaciotext5.fromTo("#divdos3", 1, {
//    blur: 2,
//    opacity: 0,
//    bottom: "50%",
//}, {
//    blur: 0,
//    opacity: 1,
//    bottom: "60%",
//});

new ScrollMagic.Scene({
        triggerElement: "#secciopixel",
        triggerHook: 0,
        duration: "300%",
    })
    .on("progress", actualitzaProgres)
    .setPin("#secciopixel")
    //    .setTween(animaciotext5)
    //    .addIndicators({
    //        name: "scarlett"
    //    })
    .addTo(controller);

let textdestacat4 = new TimelineMax();
textdestacat4.fromTo("#destacatet4", 2, {
    bottom: "50%",
    opacity: 0,
}, {
    opacity: 1,
    bottom: "45%",

});
textdestacat4.fromTo("#destacatet4", 3, {
    bottom: "45%",
    opacity: 1,
    scale: 1,

}, {
    opacity: 0,
    bottom: "40%",
    scale: 2,
});

new ScrollMagic.Scene({
        triggerElement: "#secciomitat4",
        triggerHook: 0.2,
        duration: "200%",
    })
    .setTween(textdestacat4)
    .setPin("#secciomitat4")
    //    .addIndicators({
    //        name: "scarlett"
    //    })
    .addTo(controller);

//seccio mitat 
let textdestacat5 = new TimelineMax();
textdestacat5.fromTo("#destacatet5", 5, {
    opacity: 0,
    bottom: "50%",
}, {
    opacity: 1,
    bottom: "45%",
});
textdestacat5.fromTo("#destacatet5", 5, {
    opacity: 1,
    scale: 1,

}, {
    opacity: 0,
    scale: 2,
});
new ScrollMagic.Scene({
        triggerElement: "#secciomitat5",
        triggerHook: 0.2,
        duration: "200%",
    })
    .setTween(textdestacat5)
    .setPin("#secciomitat5")
//        .addIndicators({
//            name: "la pedra"
//        })
    .addTo(controller);
// PANTALLA nefast context
let imgcontext = new TimelineMax();
imgcontext.fromTo("#sabata", 3, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
});
let text2008 = new TimelineMax();
text2008.fromTo("#divdosactual", 5, {
    bottom: "50%",
    opacity: 0,
}, {
    opacity: 1,
    bottom: "45%",

});
text2008.fromTo("#divdosactual", 5, {
    opacity: 1,

}, {
    opacity: 1,
   
});

new ScrollMagic.Scene({

        triggerElement: "#seccionefasta",
        triggerHook: 0,
        duration: "400%",
        ease: Power2.easeInOut
    })
    .setTween(imgcontext)
    .setPin("#seccionefasta")
    // .addIndicators({name: "video"})
    .addTo(controller);
new ScrollMagic.Scene({

        triggerElement: "#seccionefasta",
        triggerHook: 0,
        duration: "100%",
        ease: Power2.easeInOut
    })
    .setTween(text2008)
    // .addIndicators({name: "video"})
    .addTo(controller);

//seccio SQUATS
let textsquats = new TimelineMax();
textsquats.fromTo("#textsquat", 5, {
    left: "0%",
    opacity: 0,
}, {
    left: "5%",
    opacity: 1,

});
textsquats.fromTo("#textsquat", 5, {

    left: "5%",
    opacity: 1,
}, {
    left: "15%",
    opacity: 1,
});
new ScrollMagic.Scene({
        triggerElement: "#secciosquat",
        triggerHook: 0,
        duration: "100%",
    })
    .setTween(textsquats)
   
//    .addIndicators({
//        name: "squats text"
//    })
    .addTo(controller);

//foto squats
let animaciosquats = new TimelineMax();
animaciosquats.fromTo("#imatge5", 3, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
});

new ScrollMagic.Scene({
        triggerElement: "#secciosquat",
        triggerHook: 0,
        duration: "400%",
    })
    .setTween(animaciosquats)
 .setPin("#secciosquat")
    .addTo(controller);
//seccio mitat2 
let textdestacat6 = new TimelineMax();
textdestacat6.fromTo("#destacatet6", 3, {
    bottom: "50%",
    opacity: 0,
}, {
    bottom: "45%",
     opacity: 0,
});
textdestacat6.fromTo("#destacatet6", 3, {

    bottom: "45%",
    opacity: 0
}, {
    bottom: "55%",
    opacity: 1,
});
textdestacat6.fromTo("#destacatet6", 3, {

    bottom: "45%",
    opacity: 1,
}, {
    bottom: "55%",
    opacity: 0,
});
new ScrollMagic.Scene({
        triggerElement: "#secciomitat6",
        triggerHook: 0,
        duration: "200%",
    })
    .setTween(textdestacat6)
    .setPin("#secciomitat6")
    //    .addIndicators({
    //        name: "scarlett"
    //    })
    .addTo(controller);
//seccio mitat 
let textdestacat7 = new TimelineMax();
textdestacat7.fromTo("#destacatet7", 2, {
    opacity: 0,
     opacity: 1,
}, {
    opacity: 1,
    scale:2,
});
textdestacat7.fromTo("#destacatet7", 3, {

    scale:1,
}, {
    opacity: 0,


});
new ScrollMagic.Scene({
        triggerElement: "#titol3",
        triggerHook: 0.2,
        duration: "200%",
    })
    .setTween(textdestacat7)
    .setPin("#titol3")
    //    .addIndicators({
    //        name: "scarlett"
    //    })
    .addTo(controller);

//PANTALLA 2008 
let desembre = new TimelineMax();
desembre.fromTo("#text2008", 2, {
    bottom: "50%",
    opacity: 0,
}, {
    opacity: 1,
    bottom: "45%",
});
desembre.fromTo("#text2008", 4, {
opacity: 1,
    bottom: "45%",
}, {
    opacity: 1,
    bottom: "55%",

});
new ScrollMagic.Scene({
        triggerElement: "#seccio2008",
        triggerHook: 0,
        duration: "100%",
    })
    .setTween(desembre)
    
    //    .addIndicators({
    //        name: "seccio2008"
    //    })
    .addTo(controller);
//imatge 2008
let img2008 = new TimelineMax();
img2008.fromTo("#foto2008", 3, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
});
new ScrollMagic.Scene({
        triggerElement: "#seccio2008",
        triggerHook: 0,
        duration: "400%",
    })

    .setTween(img2008)
.setPin("#seccio2008")
    //    .addIndicators({
    //        name: "seccio2008"
    //    })
    .addTo(controller);


//video2008

new ScrollMagic.Scene({
        triggerElement: "#videonoticies",
        triggerHook: 0,
        duration: "200%",
    })
    .setTween()
    .setPin("#videonoticies")
    //    .addIndicators({
    //        name: "noticies"
    //    })
    .addTo(controller);
new ScrollMagic.Scene({

        triggerElement: "#secciovideo",
        triggerHook: 0,
        duration: "100%",
        ease: Power2.easeInOut
    })
    .setPin("#secciovideo")
    // .addIndicators({name: "video"})
    .addTo(controller);
//seccio mitat
let destacato = new TimelineMax();
destacato.fromTo("#destacatet19", 2, {
    opacity: 0,

}, {
    opacity: 1,
});
new ScrollMagic.Scene({
        triggerElement: "#titol4",
        triggerHook: 0,
        duration: "200%",
    })
    .setTween(destacato)
    .setPin("#titol4")
    //    .addIndicators({
    //        name: "scarlett"
    //    })
    .addTo(controller);

//titol Actualitat
let animacioactuali = new TimelineMax();
animacioactuali.fromTo("#titolactualitat", 4, {
    opacity: 0,
    bottom:"40%",
}, {
    opacity: 1,
     bottom:"30%",
});
animacioactuali.fromTo("#titolactualitat", 4, {
    opacity: 1,
    scale:1,
}, {
    opacity: 1,
    scale:2,
});
new ScrollMagic.Scene({
        triggerElement: "#titolactualitat",
        triggerHook: 0.2,
        duration: "200%",
    })
    .setTween(animacioactuali)
    .setPin("#titolactualitat")
    //    .addIndicators({
    //        name: "titol actualitat"
    //    })
    .addTo(controller);
//imatgeActualitat
let animacioactual = new TimelineMax();
animacioactual.fromTo("#subtitolactual", 1, {
    bottom: "50px",
    blur: 2,
    opacity: 0,

}, {

    bottom: "60px",
    blur: 0,
    opacity: 1,
}, 0);
animacioactual.fromTo("#divdosactual", 1, {
    bottom: "10%",
    opacity: 0,
}, {
    bottom: "30%",
    opacity: 1,
}, 0);


new ScrollMagic.Scene({
        triggerElement: "#seccioactual",
        triggerHook: 0,
        duration: "800%",
    })
    .setTween(animacioactual)
    .setPin("#seccioactual")
    //    .addIndicators({name:"seccio2s"})
    .addTo(controller);
let animaciofotu = new TimelineMax();
animaciofotu.fromTo("#fotoactual", 7, {
    backgroundPosition: "left center"
}, {
    backgroundPosition: "right center"
}, 3);

new ScrollMagic.Scene({
        triggerElement: "#seccioactual",
        triggerHook: 0,
        duration: "800%",
    })
    .setTween(animaciofotu)
    //    .addIndicators({name:"seccio2s"})
    .addTo(controller);

//secciomitat final
let textfinal = new TimelineMax();
textfinal.fromTo("#destacatetfinal", 3, {
    bottom: "50%",
    opacity: 0,
}, {
    opacity: 0,
    bottom: "45%",
});
textfinal.fromTo("#destacatetfinal", 3, {
    bottom: "45%",
    opacity:0,

}, {
    bottom: "55%",
    opacity:0,
});
textfinal.fromTo("#destacatetfinal", 2, {
    opacity: 1,
      bottom: "55%",
}, {
    opacity: 1,
      bottom: "60%",

});
textfinal.fromTo("#destacatetfinal", 2, {
    opacity: 1,
      bottom: "55%",
}, {
    opacity: 1,
      bottom: "60%",

});
new ScrollMagic.Scene({
        triggerElement: "#secciomitatfinal",
        triggerHook: 0.3,
        duration: "300%",
    })
    .setTween(textfinal)
    .setPin("#secciomitatfinal")
    //    .addIndicators({
    //        name: "scarlett"
    //    })
    .addTo(controller);

//CONTRAPORTADA//
let contraporadanim = new TimelineMax();
contraporadanim.fromTo("#parrafcontra", 2, {
    bottom: "50%",
    opacity: 0,
}, {
    opacity: 1,
    bottom: "45%",

});
contraporadanim.fromTo("#parrafcontra", 3, {
    bottom: "45%",

}, {
    bottom: "55%",
});

new ScrollMagic.Scene({

        triggerElement: "#contraportada",
        triggerHook: 0,
        duration: "400%",
        ease: Power2.easeInOut
    })
    .setTween(contraporadanim)
    .setPin("#contraportada")
    // .addIndicators({name: "video"})
    .addTo(controller);



//animacio pixels
function actualitzaProgres(event) {
    console.log(event.progress);

    //Pixel sorting
    //  Li passem per paràmetre el nombre de passos a fer del processament de la imatge
    //   quant més hagi avançat l'scroll, més alt serà el valor que li passem
    dibuixaPixels(Math.floor(event.progress * 200));
}


// Plugin isInViewport
!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(require("jquery"), require("window"))
    : "function" == typeof define && define.amd
    ? define("isInViewport", ["jquery", "window"], n)
    : n(e.$, e.window);
})(this, function (e, n) {
  "use strict";
  function t(n) {
    var t = this;
    if (
      (1 === arguments.length && "function" == typeof n && (n = [n]),
      !(n instanceof Array))
    )
      throw new SyntaxError(
        "isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"
      );
    return (
      n.forEach(function (n) {
        "function" != typeof n
          ? (console.warn(
              "isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"
            ),
            console.warn(
              "isInViewport: Ignoring non-function values in array and moving on"
            ))
          : [].slice.call(t).forEach(function (t) {
              return n.call(e(t));
            });
      }),
      this
    );
  }
  function o(n) {
    var t = e("<div></div>").css({ width: "100%" });
    n.append(t);
    var o = n.width() - t.width();
    return t.remove(), o;
  }
  function r(t, i) {
    var a = t.getBoundingClientRect(),
      u = a.top,
      c = a.bottom,
      f = a.left,
      l = a.right,
      d = e.extend({ tolerance: 0, viewport: n }, i),
      s = !1,
      p = d.viewport.jquery ? d.viewport : e(d.viewport);
    p.length ||
      (console.warn(
        "isInViewport: The viewport selector you have provided matches no element on page."
      ),
      console.warn("isInViewport: Defaulting to viewport as window"),
      (p = e(n)));
    var w = p.height(),
      h = p.width(),
      v = p[0].toString();
    if (p[0] !== n && "[object Window]" !== v && "[object DOMWindow]" !== v) {
      var g = p[0].getBoundingClientRect();
      (u -= g.top),
        (c -= g.top),
        (f -= g.left),
        (l -= g.left),
        (r.scrollBarWidth = r.scrollBarWidth || o(p)),
        (h -= r.scrollBarWidth);
    }
    return (
      (d.tolerance = ~~Math.round(parseFloat(d.tolerance))),
      d.tolerance < 0 && (d.tolerance = w + d.tolerance),
      l <= 0 || f >= h
        ? s
        : (s = d.tolerance
            ? u <= d.tolerance && c >= d.tolerance
            : c > 0 && u <= w)
    );
  }
  function i(n) {
    if (n) {
      var t = n.split(",");
      return (
        1 === t.length && isNaN(t[0]) && ((t[1] = t[0]), (t[0] = void 0)),
        {
          tolerance: t[0] ? t[0].trim() : void 0,
          viewport: t[1] ? e(t[1].trim()) : void 0
        }
      );
    }
    return {};
  }
  (e = "default" in e ? e.default : e),
    (n = "default" in n ? n.default : n)
    /**
     * @author  Mudit Ameta
     * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
     */,
    e.extend(e.expr[":"], {
      "in-viewport": e.expr.createPseudo
        ? e.expr.createPseudo(function (e) {
            return function (n) {
              return r(n, i(e));
            };
          })
        : function (e, n, t) {
            return r(e, i(t[3]));
          }
    }),
    (e.fn.isInViewport = function (e) {
      return this.filter(function (n, t) {
        return r(t, e);
      });
    }),
    (e.fn.run = t);
});
//# isInViewport

// Play Video
$(function () {
  var $video1 = $(".videu1");
  var $video2 = $(".videu2");
  var $video4 = $(".videu4");
  var $video3 = $(".videu3");
  var $window = $(window);

  $window.scroll(function () {
    if ($video1.is(":in-viewport")) {
      $video1[0].play();
    } else {
      $video1[0].pause();
    }
      
    if ($video2.is(":in-viewport")) {
      $video2[0].play();
    } else {
      $video2[0].pause();
    }      
      
    if ($video4.is(":in-viewport")) {
      $video4[0].play();
    } else {
      $video4[0].pause();
    }      
      
    if ($video3.is(":in-viewport")) {
      $video3[0].play();
    } else {
      $video3[0].pause();
    }
  });
});

function reprodueix() {
document.getElementById("modal").style.display = "none";}


//RATOLÍ//
//document.addEventListener("mousemove", dibuixaBola);

//let follower = document.getElementById('follower');
//
//function dibuixaBola(event){
//    follower.style.top = event.clientY + 'px';
//    follower.style.left = event.clientX + 'px';
//}
