"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _app["default"];
  }
});
exports.storage = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC8-TuyDrskMx_AgKeqx8PteHzSdEiuulc",
  authDomain: "keeen-img-upload.firebaseapp.com",
  projectId: "keeen-img-upload",
  storageBucket: "keeen-img-upload.appspot.com",
  messagingSenderId: "766967656887",
  appId: "1:766967656887:web:2720ad0c3e222b5b5f7832",
  measurementId: "G-G062SZQQHW"
};

_app["default"].initializeApp(firebaseConfig);

var storage = _app["default"].storage();

exports.storage = storage;