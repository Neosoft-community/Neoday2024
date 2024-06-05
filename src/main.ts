/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');
let currentPopup: any = undefined;
let allPopup: Array<any> = new Array()

const nomAdmin = "Louis Evrard"
let count:number =0;
// Waiting for the API to be ready
WA.onInit().then(() => {
    
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

    /*WA.room.area.onEnter('indice1').subscribe(() => {
        // const today = new Date();
        // const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("indice1Popup", "Bonjour ! Voici mon indice : Je suis le Practice leader de la Practice DEVOPS, la lettre que tu recherches est la première de mon prénom !", [{
            label: "OK !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })*/

   /* WA.room.area.onLeave('indice1').subscribe(closePopup)

    WA.room.area.onEnter('indice2').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice2Popup", "Voici un nouvel indice : J'ai ouvert le forum des communauté et je suis le PDG, la lettre que tu recherches est la première de mon prenom !", [{
            label: "Merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })*/

  /*  WA.room.area.onLeave('indice2').subscribe(closePopup)

    WA.room.area.onEnter('indice3').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice3Popup", "Un nouvel indice, ici tu trouveras : Je suis le Practice leader de la Practice INFRA / CLOUD, la lettre que tu recherches est la quatrième de mon prénom !", [{
            label: "Merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })*/

  /*  WA.room.area.onLeave('indice3').subscribe(closePopup)*/

  /*  WA.room.area.onEnter('indice4').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice4Popup", "Bonjour, voici mon indice : Je suis un des Practice leader de la Practice CYBER mais pas Sylvain, la lettre que tu recherches est la septième de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })*/

   /* WA.room.area.onLeave('indice4').subscribe(closePopup)*/

  /*  WA.room.area.onEnter('indice5').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice5Popup", "Salut ! Allez, voici un petit indice : Je suis le Practice leader de la Practice AGILITE, la lettre que tu recherches est la quatrième de mon prénom !", [{
            label: "Merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice5').subscribe(closePopup)*/

   /* WA.room.area.onEnter('indice6').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice6Popup", "Bonjour ! Voici mon indice : Je suis le Social Media Manager de Néosoft, la lettre de que tu recherches est la dernière de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice6').subscribe(closePopup)*/

   /* WA.room.area.onEnter('indice7').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice7Popup", "Hello ! Indice : Je suis la Responsable formation Néosoft Training, la lettre que tu recherches est la première de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice7').subscribe(closePopup)*/

   /* WA.room.area.onEnter('indice8').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice8Popup", "Indice : Je suis le Practice leader de la Practice Software Engineering, la lettre que tu recherches est la deuxième de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice8').subscribe(closePopup)*/

   /* WA.room.area.onEnter('indice9').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice9Popup", "Mon tout est l'anagramme d'une plante connue pour ses jolies fleurs bleues !", [{
            label: "Rendez-vous dans l'enquete de satisfaction pour répondre !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice9').subscribe(closePopup)*/


    WA.room.area.onEnter('rs').subscribe(() => {
        currentPopup = WA.ui.openPopup("rsPopup", "Tu veux nous suivre sur les réseaux sociaux ?", [{
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
        }]);

    })

    WA.room.area.onLeave('rs').subscribe(closePopup)

    WA.room.area.onEnter('fdn').subscribe(() => {
        currentPopup = WA.ui.openPopup("fdnPopup", "Viens te sensibiliser aux enjeux du numérique !", [{
            label: "Je m'inscris à une fresque",
            className: 'primary',
            callback: (popup) => {
                WA.openTab('https://landing.neosoft.fr/numerique-responsable'),
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('fdn').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


WA.room.onEnterLayer("mgZoneAdmin").subscribe(() => {
    console.log("testage du fonctionnage")

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
        callback: (popup) => {
            console.log(popup)
            addTextMg("salle 1,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle2", 'salle 2', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("salle 2,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle3", 'salle 3', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("salle 3,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle4", 'salle 4', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("salle 4,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle5", 'salle 5', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("salle 5,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle6", 'salle 6', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("salle 6,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle7", 'salle 7', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("salle 7,")

        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalle8", 'salle 8', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("salle 8,")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSalleAmphi", 'Amphi', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("amphithéâtre,")
            
        }
    }]));
    /**
     * les different popup permettant de rajouter lesretards dans le message globale
     */
    allPopup.push(WA.ui.openPopup("5min", '5 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("5 minutes de retard.  ")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("10min", '10 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("10 minutes de retard.  ")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("15min", '15 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("15 minutes de retard.  ")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("20min", '20 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("20 minutes de retard.  ")
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("vasCommencer", 'debut de conference', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            addTextMg("la conférence commenceras sous peu.  ")
            
        }
    }]));
    /**
     * les trois popup permettant de supprimer, de vérifier et d'envoyer le message globale
     */
    allPopup.push(WA.ui.openPopup("admin", 'Envoyer', [{
        label: "envoyé",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            sendMg();
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgSuppression", 'Supprimer', [{
        label: "supprimer",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            resetMg();
            
        }
    }]));
    allPopup.push(WA.ui.openPopup("mgTest", 'preview', [{
        label: "preview",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            globalMessage(WA.state.messGlob);
            
        }
    }]));
})
/**
 * en sortant de la zone admin
 * ferme tout les popeups
 */
WA.room.onLeaveLayer("mgZoneAdmin").subscribe(() => {
    allPopup.forEach((element) => element.close());
})
WA.ui.onRemotePlayerClicked.subscribe((remotePlayer) => {
    remotePlayer.addAction('Ask to tell a joke', () => {
        console.log('I am NOT telling you a joke!');
    });
})


/**
 * ferme le popup courant
 */
function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
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
    console.log("passage: ", WA.state.aAfficher);
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