"use strict";

var Adaptors =  {
  "adaptador-de-prueba": require("./adaptador.js")
}

var Drivers = {
  "prueba-led": require("./driver.js"),
};

module.exports = {
  adaptors: Object.keys(Adaptors),
  drivers: Object.keys(Drivers),

  adaptor: function(opts) {
    opts = opts || {};
    if (!Adaptors[opts.adaptor]) {
      return null;
    }
    return new Adaptors[opts.adaptor](opts);
  },

  driver: function(opts) {
    opts = opts || {};
    if (!Drivers[opts.driver]) {
      return null;
    }
    return new Drivers[opts.driver](opts);
  }
  
};
