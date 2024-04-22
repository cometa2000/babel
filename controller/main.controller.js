"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Main = /*#__PURE__*/function () {
  function Main(nombre, apellido, edad, estatura) {
    _classCallCheck(this, Main);
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estatura = estatura;
  }
  _createClass(Main, [{
    key: "mostrarDatos",
    value: function mostrarDatos() {
      console.log("\n            NOMBRE: ".concat(this.nombre, ", \n            APELLIDO: ").concat(this.apellido, ", \n            EDAD: ").concat(this.edad, ", \n            ESTATURA: ").concat(this.estatura, "\n        "));
    }
  }, {
    key: "actualizarDatos",
    value: function actualizarDatos() {
      var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nombre;
      var apellido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.nombre;
      var edad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.edad;
      var estatura = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.estatura;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.estatura = estatura;
      this.mostrarDatos();
    }
  }, {
    key: "setNombre",
    value: function setNombre(nombre) {
      this.nombre = nombre;
    }
  }, {
    key: "setApellido",
    value: function setApellido(apellido) {
      this.apellido = apellido;
    }
  }, {
    key: "setEdad",
    value: function setEdad(edad) {
      this.edad = edad;
    }
  }, {
    key: "setEstatura",
    value: function setEstatura(estatura) {
      this.estatura = estatura;
    }
  }, {
    key: "getNombre",
    value: function getNombre() {
      return this.nombre;
    }
  }, {
    key: "getApellido",
    value: function getApellido() {
      return this.apellido;
    }
  }, {
    key: "getEdad",
    value: function getEdad() {
      return this.edad;
    }
  }, {
    key: "getEstatura",
    value: function getEstatura() {
      return this.estatura;
    }
  }]);
  return Main;
}();
var persona1 = new Main("Brayan", "Solis", 23, 170);
// persona1.mostrarDatos();
// persona1.actualizarDatos("Random","Ract");
persona1.actualizarDatos(undefined, undefined, 100, 230);
var persona2 = new Main("Random", "Ract", 23, 170);

//new es un nuevo espacio de memoria