/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;
const nomAdmin = "Louis Evrard"
let count:number =0;
// Waiting for the API to be ready
WA.onInit().then(() => {
    
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    affichager();
    function verifierHeure() {
        // Obtenir l'heure actuelle
        var maintenant = new Date();
      
        // Définir l'heure à laquelle tu souhaites déclencher l'action
        var heureAction1 = new Date();
        heureAction1.setHours(11); // Heure : 9 (exemple)
        heureAction1.setMinutes(5); // Minutes : 0 (exemple)
        heureAction1.setSeconds(0); // Secondes : 0 (exemple)

        var heureAction2 = new Date();
        heureAction2.setHours(12); // Heure : 9 (exemple)
        heureAction2.setMinutes(45); // Minutes : 0 (exemple)
        heureAction2.setSeconds(0); // Secondes : 0 (exemple)
      
        // Vérifier si l'heure actuelle correspond à l'heure d'action
        if (maintenant.getTime() === heureAction1.getTime()) {
          // Déclencher ton action ici
          //console.log("Action déclenchée à l'heure précise !");
          //WA.chat.sendChatMessage("Action déclenchée à l'heure précise !", " Mr Robot");
            WA.ui.banner.openBanner({
                id: "banner-test",
                text: "On va bientôt commencer, rendez-vous dans l'amphi ! :)",
                bgColor: "#0055FF",
                textColor: "#FFFFFF",
                closable: false
            });
        } else if (maintenant.getTime() === heureAction2.getTime()) {
            // Déclencher ton action ici
            //console.log("Action déclenchée à l'heure précise !");
            //WA.chat.sendChatMessage("Action déclenchée à l'heure précise !", " Mr Robot");
            globalMessage("C'est bientôt la fin... Rendez-vous dans l'amphi pour la conclusion !");
        //     WA.ui.banner.openBanner({
        //       id: "banner-test",
        //       text: "C'est bientôt la fin... Rendez-vous dans l'amphi pour la conclusion !",
        //       bgColor: "#0055FF",
        //       textColor: "#FFFFFF",
        //       closable: false
        //   });
          } //else {
            // Aucune des heures n'est encore passée
            //console.log("Aucune des heures n'est encore passée.");
        //}
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

    WA.room.area.onLeave('indice9').subscribe(closePopup=*/


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

let allPopup: Array<any> = new Array()

WA.room.onEnterLayer("mgZoneAdmin").subscribe(() => {

    
    console.log("testage du fonctionnage")
    const playerName = WA.player.name;

    if(playerName != nomAdmin){
        return;
    }
    WA.controls.disablePlayerControls()
    WA.ui.openPopup("mgSalle1", 'salle 1', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("salle 1,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSalle2", 'salle 2', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("salle 2,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSalle3", 'salle 3', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("salle 3,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSalle4", 'salle 4', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("salle 4,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSalle5", 'salle 5', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("salle 5,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSalle6", 'salle 6', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("salle 6,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSalle7", 'salle 7', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("salle 7,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSalle8", 'salle 8', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("salle 8,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSalleAmphi", 'Amphi', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("amphithéâtre,")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("5min", '5 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("5 minutes de retard.  ")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("10min", '10 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("10 minutes de retard.  ")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("15min", '15 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("15 minutes de retard.  ")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("20min", '20 minutes de retard', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("20 minutes de retard.  ")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("vasCommencer", 'debut de conference', [{
        label: "ajouter",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            addTextMg("la conférence commenceras sous peu.  ")
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("admin", 'Envoyer', [{
        label: "envoyé",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            sendMg();
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgSuppression", 'Supprimer', [{
        label: "supprimer",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            resetMg();
            //popup.close();
            
        }
    }]);
    WA.ui.openPopup("mgTest", 'preview', [{
        label: "preview",
        className: "primary",
        callback: (popup) => {
            console.log(popup)
            // Close the popup when the "Close" button is pressed.
            globalMessage(WA.state.messGlob);
            //popup.close();
            
        }
    }]);
})
// Close the popup when we leave the zone.
WA.room.onLeaveLayer("mgZoneAdmin").subscribe(() => {
    for(let pop in allPopup){
        pop
    }
    //helloWorldPopup.close();
})




function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
// WA.room.area.onEnter('mgSalle1').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "salle 1, ";
//     }
// })
// WA.room.area.onEnter('mgSalle2').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "salle 2, ";
//     }
// })
// WA.room.area.onEnter('mgSalle3').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "salle 3, ";
//     }
// })
// WA.room.area.onEnter('mgSalle4').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "salle 4, ";
//     }
// })
// WA.room.area.onEnter('mgSalle5').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "salle 5, ";
//     }
// })
// WA.room.area.onEnter('mgSalle6').subscribe(() =>{
//     const playerName = WA.player.name;
    
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "salle 6, ";
//     }
// })
// WA.room.area.onEnter('mgSalle7').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "salle 7, ";
//     }
// })
// WA.room.area.onEnter('mgSalle8').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "salle 8, ";
//     }
// })
// WA.room.area.onEnter('mgSalleAmphi').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "Ampphitéâtre, ";
//     }
// })
// WA.room.area.onEnter('vasCommencer').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "l'intervention commenceras sous peu.| ";
//     }
// })
// WA.room.area.onEnter('5min').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "retard d'environ 5 minutes.| ";
//     }
// })
// WA.room.area.onEnter('10min').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "retard d'environ 10 minutes.| ";
//     }
// })
// WA.room.area.onEnter('15min').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "retard d'environ 15 minutes.| ";
//     }
// })
// WA.room.area.onEnter('20min').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = WA.state.messGlob + "retard d'environ 20 minutes.| ";
//     }
// })
// WA.room.area.onEnter('mgSuppression').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.messGlob = "Attention: ";
//     }
// })
// WA.room.area.onEnter('mgTest').subscribe(() =>{
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         globalMessage(WA.state.messGlob);
//     }
// })
// WA.room.area.onEnter('admin').subscribe(() =>{
    
//     const playerName = WA.player.name;
//     if(playerName === nomAdmin){
//         WA.state.aAfficher = true;
//         //globalMessage( WA.state.messGlob ); 
//     } 
    
// })
function globalMessage(message:any){
    WA.ui.banner.openBanner({
        id: "banner",
        text: message,
        bgColor: "#FAB000",
        textColor: "#FFFFFF",
        closable: true
    });
}
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
function addTextMg(txt:string):void{
    WA.state.messGlob   = WA.state.messGlob + " " + txt;  
}
function sendMg():void{
    WA.state.aAfficher = true;
}
function resetMg():void{
    WA.state.messGlob = "Votre attention:"
}

export {};