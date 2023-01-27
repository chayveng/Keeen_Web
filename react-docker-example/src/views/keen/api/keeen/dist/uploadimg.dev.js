"use strict";

const configApi = require("../../../../../configApi.json");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postImage = postImage;
exports.getImage = getImage;
exports.putImage = putImage;
exports.deleteImage = deleteImage;

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};

// const host_url = "https://localhost:7029";
// const host_url = "http://13.212.143.253:1771";
const host_url = configApi.API_SERVER;
function postImage(data) {
  return _axios["default"].post(host_url+"/api/v1/Images", data, options);
  // return _axios["default"].post("https://api.keeenservice.com/api/v1/Images", data, options);
}

function getImage(data) {
  return _axios["default"].get(host_url + "/api/v1/Images/".concat(data));
  // return _axios["default"].get("https://api.keeenservice.com/api/v1/Images/".concat(data));
}

function putImage(data) {
  return _axios["default"].put(host_url + "/api/v1/Images/", data, options);
  // return _axios["default"].put("https://api.keeenservice.com/api/v1/Images/", data, options);
}

function deleteImage(data) {
  return _axios["default"]["delete"](host_url+"/api/v1/Images/".concat(data));
  // return _axios["default"]["delete"]("https://api.keeenservice.com/api/v1/Images/".concat(data));
}
