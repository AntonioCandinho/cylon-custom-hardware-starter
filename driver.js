'use strict';

var Cylon = require('cylon');

var LedVirtual = module.exports = function LedVirtual() {
  LedVirtual.__super__.constructor.apply(this, arguments);

  this.commands = {
    'cambia': this.cambia
  }

};

Cylon.Utils.subclass(LedVirtual, Cylon.Driver);

LedVirtual.prototype.start = function(callback) {
  this.encendido = false 
  this.connection.escribeDigital(0)
  callback();
};

LedVirtual.prototype.halt = function(callback) {
  this.encendido = false 
  this.connection.escribeDigital(0)
  callback();
};

LedVirtual.prototype.cambia = function() {
  var valor = (this.encendido) ? 0 : 1;
  this.encendido = !this.encendido;
  this.connection.escribeDigital(valor)
}
