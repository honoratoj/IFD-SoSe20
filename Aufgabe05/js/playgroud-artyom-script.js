window.addEventListener("load", function () {
    var artyom = new Artyom();

  
    artyom.addCommands({
        indexes: ["Hallo Clara"],
        action: function(i){
            if(i == 0){
                artyom.say("Hallo Jessica");
            }else if(i == 1){
                artyom.say("Es gibt insgesamt 3 Krankmeldungen");
            }else if(i == 2){
                artyom.say("Herr Maier hat die Krankmeldung noch nicht abgegeben");
            }else if(i == 3){
                artyom.say("Erinnerung: Herr Maier Krankmeldung eingestellt");
            }  
        }
    });

    artyom.addCommands({
        indexes: ["Verschaffe mir einen Überblick über die Krankmeldungen","Werk 3","Besteht Handlungsbedarf","Erstelle eine Erinnerung"],
        action: function(i){
            if(i == 0){
                artyom.say("Für welches Werk");
            }else if(i == 1){
                artyom.say("Es gibt insgesamt 3 Krankmeldungen");
            }else if(i == 2){
                artyom.say("Herr Maier hat die Krankmeldung noch nicht abgegeben");
            }else if(i == 3){
                artyom.say("Erinnerung: Herr Maier Krankmeldung eingestellt");
            }  
        }
    });

    artyom.addCommands({
        indexes: ["Nenne mir die Produktionszahlen"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Produzierte Stückzahl in Werk 1. Stand heute 01.01.2020, 8:45 Uhr beträgt 50.000");
        }
    });

    artyom.addCommands({
        indexes: ["Nenne mir die angefallenen Kosten für Werk 2"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("In Werk 2 sind keine Kosten angefallen");
        }
    });
    
    artyom.addCommands({
        indexes: ["Ich Bitte um eine Analyse","Analyse 1"],
        action: function(i){
            if(i == 0){
                artyom.say("Analyse 1 Vergleich der Werke oder Analyse 2 Vergleich per Datum ");
            }else if(i == 1){
                artyom.say("Ok. Im Vergleich zu den anderen Werken, gibt es einen Produktionsüberschuss in Höhe von 3%  ");
            } 
        }
    });

    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map