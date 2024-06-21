/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');
let allPopup: Array<any> = new Array();

const nomAdmin = "Tom Pain"
let count:number =0;
// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.ui.website.open({
        url             : "src/planning.html",
        position: {
            vertical    : "bottom",
            horizontal  : "left",
        },
        size: {
            height      : "17vh",
            width       : "15vw",
        },
        margin: {
            bottom      : "0vh",
        },
        allowApi: true
    })
    WA.player.state.foo = 0
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    affichager();
    // WA.ui.actionBar.addButton({
    //     id:"Programme",
    //     type: 'action',
    //     imageSrc: "https://cdn-icons-png.flaticon.com/512/1497/1497835.png",
    //     toolTip: "string",
    //     clickCallback: "openProgramme"
    // })
    function verifierHeure() {
        // Obtenir l'heure actuelle
        var maintenant = new Date();
      
        // Définir l'heure à laquelle tu souhaites déclencher l'action
        var heureAction1 = new Date();
        heureAction1.setHours(11); // Heure : 11 (exemple)
        heureAction1.setMinutes(5); // Minutes : 5 (exemple)
        heureAction1.setSeconds(0); // Secondes : 0 (exemple)

        var heureAction2 = new Date();
        heureAction2.setHours(12);
        heureAction2.setMinutes(45);
        heureAction2.setSeconds(0); 
      
        // Vérifier si l'heure actuelle correspond à l'heure d'action
        if (maintenant.getTime() === heureAction1.getTime()) {
          // Déclencher ton action ici
            WA.ui.banner.openBanner({
                id: "banner-test",
                text: "On va bientôt commencer, rendez-vous dans l'amphi ! :)",
                bgColor: "#0055FF",
                textColor: "#FFFFFF",
                closable: false
            });
        } else if (maintenant.getTime() === heureAction2.getTime()) {
            globalMessage("C'est bientôt la fin... Rendez-vous dans l'amphi pour la conclusion !");
        }
    }

    // Vérifier l'heure toutes les secondes
    setInterval(verifierHeure, 1000);

    //area stand conseil et agilité message
    WA.room.area.onEnter('StandConseil').subscribe(() => {
        // const today = new Date();
        // const time = today.getHours() + ":" + today.getMinutes();
        allPopup.push(WA.ui.openPopup("StandConseil", "Merci de vous rendre en salle 5 !", [{
            label: "OK !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('StandConseil').subscribe(closePopup)

    WA.room.area.onEnter('indice1').subscribe(() => {
        // const today = new Date();
        // const time = today.getHours() + ":" + today.getMinutes();
        allPopup.push(WA.ui.openPopup("indice1Popup", "Bonjour ! Voici mon indice : C'est 5 en romain !", [{
            label: "OK !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice1').subscribe(closePopup)

    WA.room.area.onEnter('indice2').subscribe(() => {
        allPopup.push (WA.ui.openPopup("indice2Popup", "Voici un nouvel indice : C'est la meilleure note possible à l'école !", [{
            label: "Merci !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice2').subscribe(closePopup)

    WA.room.area.onEnter('indice3').subscribe(() => {
        allPopup.push (WA.ui.openPopup("indice3Popup", "Un nouvel indice, ici tu trouveras : Mon 3eme est à la même place dans l'alphabet !", [{
            label: "Merci !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice3').subscribe(closePopup)

    WA.room.area.onEnter('indice4').subscribe(() => {
        allPopup.push (WA.ui.openPopup("indice4Popup", "Bonjour, voici mon indice : Je suis l'onomatopée préférée de Denis Brognard !", [{
            label: "OK, merci !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice4').subscribe(closePopup)

    WA.room.area.onEnter('indice5').subscribe(() => {
        allPopup.push (WA.ui.openPopup("indice5Popup", "Salut ! Allez, voici un petit indice : Je suis la première lettre du nom de notre entreprise !", [{
            label: "Merci !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice5').subscribe(closePopup)

    WA.room.area.onEnter('indice6').subscribe(() => {
        allPopup.push (WA.ui.openPopup("indice6Popup", "Bonjour ! Voici mon indice : Je suis l'initiale de la troisième valeur chez Néosoft !", [{
            label: "OK, merci !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice6').subscribe(closePopup)

    WA.room.area.onEnter('indice7').subscribe(() => {
        allPopup.push (WA.ui.openPopup("indice7Popup", "Hello ! Indice : Je suis imprimé sur la poitrine d'un super héros très connu !", [{
            label: "OK, merci !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice7').subscribe(closePopup)

    WA.room.area.onEnter('indice8').subscribe(() => {
        allPopup.push ( WA.ui.openPopup("indice8Popup", "Indice : Je suis la lettre la plus utilisée dans la langue française !", [{
            label: "OK, merci !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice8').subscribe(closePopup)

    WA.room.area.onEnter('indice9').subscribe(() => {
        allPopup.push (WA.ui.openPopup("indice9Popup", "Mon tout est le moment que tout le monde attend !", [{
            label: "Rendez-vous dans l'enquete de satisfaction pour répondre !",
            className: "primary",
            callback: () => {
                closePopup();
            }
        }]));
    })

    WA.room.area.onLeave('indice9').subscribe(closePopup)


    WA.room.area.onEnter('rs').subscribe(() => {
        allPopup.push(WA.ui.openPopup("rsPopup", "Tu veux nous suivre sur les réseaux sociaux ?", [{
            label: "Linkedin",
            className: "primary",
            callback: (popup) => {
                WA.openTab('https://www.linkedin.com/company/neosoft_'),
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }    
        },
        {
            label: 'Twitter',
            className: 'primary',
            callback: (popup) => {
                WA.openTab('https://twitter.com/neosoft_'),
                popup.close();
            }
        }]));

    })

    WA.room.area.onLeave('rs').subscribe(closePopup)

    WA.room.area.onEnter('fdn').subscribe(() => {
        allPopup.push(WA.ui.openPopup("fdnPopup", "Viens te sensibiliser aux enjeux du numérique !", [{
            label: "Je m'inscris à une fresque",
            className: 'primary',
            callback: (popup) => {
                WA.openTab('https://landing.neosoft.fr/numerique-responsable'),
                popup.close();
            }
        }]));
    })

    WA.room.area.onLeave('fdn').subscribe(closePopup)

    WA.room.area.onEnter('bot1').subscribe(() => {
        let test: any;
        test = WA.player.state.foo,
        WA.player.state.foo = test;
        if (test == 0)
        {
            allPopup.push( WA.ui.openPopup("bot1Popup", "Je sais qu'il y a un trésor dans le coin mais j'ai trop peur de l'eau.. Mon frère jumeau est parti bronzer au nord, tu pourrais y aller pour moi ?", [{
                label: "Bien sûr !",
                className: 'primary',
                callback: () => {

                    closePopup();               
                }
           
            }]));
        WA.player.state.foo = test+1
        console.log("test if : ", WA.player.state.foo)
        }
        else
        {
            allPopup.push( WA.ui.openPopup("bot1Popup", "Je t'ai déjà dit d'aller à la piscine au nord !", [{
                label: "D'accord..",
                className: 'primary',
                callback: () => {
                closePopup();
                }
            }]));
            console.log("test else : ", WA.player.state.foo)
        }
        })
    

    WA.room.area.onLeave('bot1').subscribe(closePopup)

    WA.room.area.onEnter('bot2').subscribe(() => {
        let test: any;
        test = WA.player.state.foo,
        WA.player.state.foo = test;
        

        if (test < 1)
            {
                allPopup.push(WA.ui.openPopup("bot2Popup", "Laisse moi bronzer, tu veux bien ?", [{
                    label: "Euuuh.. ok ?",
                    className: 'primary',
                    callback: () => {
                        closePopup();
                    }
                }]));
    
            }

        else if (test == 1)
        {
            allPopup.push(WA.ui.openPopup("bot2Popup", "Un trésor ? Je n'en sais rien, essaye d'aller parler à mon cousin.. Je crois qu'il n'ose pas rentrer dans le labyrinthe, tu le trouveras là bas !", [{
                    label: "Bien sûr !",
                    className: 'primary',
                    callback: () => {
                        closePopup();
                    }
               
                }]));
            WA.player.state.foo = test+1
    
        }


        else
        {
            allPopup.push(WA.ui.openPopup("bot2Popup", "Es-tu allé au labyrinthe ?", [{
                    label: "Pas encore",
                    className: 'primary',
                    callback: () => {
                        closePopup();
                    }
                }]));
    
        }
        })
    

    WA.room.area.onLeave('bot2').subscribe(closePopup)

    WA.room.area.onEnter('bot3').subscribe(() => {
        let test: any;
        test = WA.player.state.foo,
        WA.player.state.foo = test;
        
        if (test == 2)
            {
                allPopup.push(WA.ui.openPopup("bot3Popup", "Au Nord-Est tu iras, cette pelle tu prendras, et à la croix tu te rendras..", [{
                    label: "Alors il existe ?",
                    className: 'primary',
                    callback: () => {
                        closePopup();
                    }
               
                }]));
            WA.player.state.foo = test+1
    
            }
            

        if (test < 2)
        {
            allPopup.push(WA.ui.openPopup("bot3Popup", "Reviens plus tard...", [{
                label: "Ok",
                className: 'primary',
                callback: () => {
                    closePopup();
                }
            }]));

        }

            
        if (test > 2)
            {
                allPopup.push(WA.ui.openPopup("bot3Popup", "Bon, tu l'as récupéré ce trésor ?", [{
                    label: "Non, pas encore",
                    className: 'primary',
                    callback: () => {
                    closePopup();
                    }
                }]));
    
            }
    })

    WA.room.area.onLeave('bot3').subscribe(closePopup)

    WA.room.area.onEnter('tresor').subscribe(() => {
        let test: any;
        test = WA.player.state.foo,
        WA.player.state.foo = test;
        if (test <= 2)
        {
            allPopup.push(WA.ui.openPopup("tresorPopup1", "Je me demande ce qu'il se cache ici.. Tiens un ticket de parking ? Peut être que quelqu'un l'a égaré ? Je ferai bien d'aller voir là bas..", [{
                label: "Fermer",
                className: 'primary',
                callback: () => {
                    closePopup();
                }
           
            }]));
        }
        else
        {
            allPopup.push(WA.ui.openPopup("tresorPopup1", "Le trésor est.. le nom de ce fameux chanteur !", [{
                label: "Découvrir le trésor !",
                className: 'primary',
                callback: () => {
                    WA.openTab("https://www.youtube.com/embed/dQw4w9WgXcQ?si=UvOTyPhvzyGRv-6r" ),
                    closePopup();
                }
            }]));
        }
    })
    
    WA.room.area.onLeave('tresor').subscribe(closePopup)
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));




WA.room.onEnterLayer("mgZoneAdmin").subscribe(() => {

    /**
     * verification que le joueurs entrant dans sur le layer est un joueur ayant droit
     */
    const playerName = WA.player.name;
    if(playerName != nomAdmin){
        return;
    }

    /**
     * les different popeup permettant de rajouter les salles dans le message globale
     */
    allPopup.push(WA.ui.openPopup("mgSalle1", 'salle 1', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("salle 1,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle2", 'salle 2', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("salle 2,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle3", 'salle 3', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("salle 3,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle4", 'salle 4', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("salle 4,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle5", 'salle 5', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("salle 5,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle6", 'salle 6', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("salle 6,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle7", 'salle 7', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("salle 7,")

        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle8", 'salle 8', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("salle 8,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalleAmphi", 'Amphi', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("amphithéâtre,")
            
        }
    }]));
    /**
     * les different popup permettant de rajouter lesretards dans le message globale
     */
    allPopup.push(WA.ui.openPopup("5min", '5 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("5 minutes de retard.  ")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("10min", '10 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("10 minutes de retard.  ")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("15min", '15 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("15 minutes de retard.  ")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("20min", '20 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("20 minutes de retard.  ")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("vasCommencer", 'debut de conference', [{
        label: "ajouter",
        className: "primary",
        callback: () => {
            addTextMg("la conférence commenceras sous peu.  ")
            
        }
    }]));
    /**
     * les trois popup permettant de supprimer, de vérifier et d'envoyer le message globale
     */
    allPopup.push(WA.ui.openPopup("admin", 'Envoyer', [{
        label: "envoyé",
        className: "primary",
        callback: () => {
            sendMg();
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSuppression", 'Supprimer', [{
        label: "supprimer",
        className: "primary",
        callback: () => {
            resetMg();
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgTest", 'preview', [{
        label: "preview",
        className: "primary",
        callback: () => {
            globalMessage(WA.state.messGlob);
            
        }
    }]));
})



WA.room.area.onEnter('salle1Panneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salle1Popup", "↑ Salle1 ↑ \n→ Salle 2 à 8 → \n← Salle Amphi ←", []))
})
WA.room.area.onLeave('salle1Panneau').subscribe(closePopup)


WA.room.area.onEnter('salle2Panneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salle2Popup", "↑ Salle2 ↑ \n→ Salle 3 à 8 → \n← Salle 1 et Amphi ←", []))
})
WA.room.area.onLeave('salle2Panneau').subscribe(closePopup)


WA.room.area.onEnter('salle3Panneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salle3Popup", "↑ Salle3 ↑ \n→ Salle 4 à 5 → \n← Salle 1 à 2 et Amphi ←\n↓ Salle 6 à 8 ↓", []))
})
WA.room.area.onLeave('salle3Panneau').subscribe(closePopup)

WA.room.area.onEnter('salle4Panneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salle4Popup", "↑ Salle4 ↑ \n→ Salle 5 → \n← Salle 1,2,3,8 et Amphi ←\n↓ Salle 6 à 7 ↓", []))
})
WA.room.area.onLeave('salle4Panneau').subscribe(closePopup)

WA.room.area.onEnter('salle5Panneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salle5Popup", "↑ Salle5 ↑ \n← Salle 1,2,3,4,8 et Amphi ←\n↓ Salle 6 à 7 ↓", []))
})
WA.room.area.onLeave('salle5Panneau').subscribe(closePopup)

WA.room.area.onEnter('salle6Panneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salle6Popup", "→ Salle 6 → \n↑ Salle 4,5 ↑ \n← Salle 1,2,3,4,8 et Amphi ←\n↓ Salle 7 ↓", []))
})
WA.room.area.onLeave('salle6Panneau').subscribe(closePopup)

WA.room.area.onEnter('salle7Panneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salle7Popup", "→ Salle 7 → \n↑ Salle 4 à 6 ↑ \n← Salle 1,2,3,4,8 et Amphi ←", []))
})
WA.room.area.onLeave('salle7Panneau').subscribe(closePopup)

WA.room.area.onEnter('salle8Panneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salle8Popup", "→ Salle 3 à 7 → \n← Salle 1,2 et Amphi ←\n↓ Salle 8 ↓", []))
})
WA.room.area.onLeave('salle8Panneau').subscribe(closePopup)

WA.room.area.onEnter('salleAPanneau').subscribe(() => {
    allPopup.push(WA.ui.openPopup("salleAPopup", "↑ Amphithéâtre ↑ \n→ Salle 1 à 8 → \n", []))
})
WA.room.area.onLeave('salleAPanneau').subscribe(closePopup)





/**
 * en sortant de la zone admin
 * ferme tout les popeups
 */
WA.room.onLeaveLayer("mgZoneAdmin").subscribe(() => {
    closePopup();
})
/**
 * ferme le popup courant
 */
function closePopup(){
    allPopup.forEach((element =>{
        element.close()
    }))
    allPopup.splice(0, allPopup.length)
}
/**
 * 
 * @param message un string à afficher dans une border en haut de l'écran
 * affiche une border avec message dedans
 */
function globalMessage(message:any){
    WA.ui.banner.openBanner({
        id: "banner",
        text: message,
        bgColor: "#FAB000",
        textColor: "#FFFFFF",
        closable: true
    });
}
/**
 * fonction s'actualisant toute les 2 secondes
 * verifie si il y a un message a afficher
 * si oui l'affiche pendant 2 cycles de l'admin
 */
function affichager():void{
    if(WA.state.aAfficher){

        globalMessage(WA.state.messGlob);
        if(WA.player.name == nomAdmin && count != 1){
            count = count + 1;
        }else if(WA.player.name == nomAdmin && count == 1){
            count              = 0;
            WA.state.messGlob  = "votre attention: ";
            WA.state.aAfficher = false;
        }
    }
    setTimeout(affichager,2000);
}
/**
 * 
 * @param txt un string 
 * rajoute a la variable de map le string txt
 */
function addTextMg(txt:string):void{
    WA.state.messGlob   = WA.state.messGlob + " " + txt;  
}
/**
 * passe la variable de map aAfficher a true pour que toute les instances vois le message
 */
function sendMg():void{
    WA.state.aAfficher = true;
}
/**
 * supprime le contenue de la variable de map 
 * ne laissant que l'introduction des popups globaux
 */
function resetMg():void{
    WA.state.messGlob = "Votre attention:"
}

export {};