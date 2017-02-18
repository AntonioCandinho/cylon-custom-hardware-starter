"use strict";

var Cylon = require('cylon');

var Adaptador = module.exports = function Adaptador(opts) {
  Adaptador.__super__.constructor.apply(this, arguments);

  this.commands = {
    'escribe': this.escribeDigital
  }
};

Cylon.Utils.subclass(Adaptador, Cylon.Adaptor);

Adaptador.prototype.connect = function(callback) {
  callback();
};

Adaptador.prototype.disconnect = function(callback) {
  callback();
}

Adaptador.prototype.escribeDigital = function(valor) {
  console.log("Se escribe el valor " + valor);
}
