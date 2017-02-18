"use strict";
var Cylon = require("cylon");
Cylon.robot({
    //Declaramos nuesta conexión
    connections: {
        prueba: {
          // Ponemos el nombre del adaptador que pusimos en el index.js  
          adaptor: 'adaptador-de-prueba',
          // El nombre del nuesto módulo, para nosotros el directorio en el que
          // estemos trabjando
          module: 'tutorial-cylon' 
        }
    },
    //Declaramos nuestros dispositivos
    devices: {
        led: {
          // Ponemos el nombre del driver (debe coincidir con el del index.js)
          driver: 'prueba-led'
        }
    },

    work: function (my) {
      every((1).second(), function() {
        my.led.cambia();
      });        
    }
}).start();
