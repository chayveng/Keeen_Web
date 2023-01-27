"use strict";
// import {ConstantContext} from "../../../../../App";
// import {useContext} from "react";


const configApi = require("../../../../../configApi.json");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCustomer = getAllCustomer;
exports.getCustomerByID = getCustomerByID;
exports.postCustomer = postCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomerByID = deleteCustomerByID;

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line react-hooks/rules-of-hooks
// const context = useContext(ConstantContext);
// const host_url = context.api;
// const host_url = "https://localhost:7029";
// const host_url = "http://13.212.143.253:1771";
const host_url = configApi.API_SERVER;

  function getAllCustomer(data) {
  return _axios["default"].get(host_url+"/api/v1/Customer/customers?".concat(data)); // return axios.get(`https://uatapi.keeenservice.com/api/v1/Customer/customers?${data}`)
  // return _axios["default"].get("https://api.keeenservice.com/api/v1/Customer/customers?".concat(data)); // return axios.get(`https://uatapi.keeenservice.com/api/v1/Customer/customers?${data}`)
}

function getCustomerByID(data) {
  return _axios["default"].get(host_url+"/api/v1/Customer/".concat(data)); // return axios.get( `https://uatapi.keeenservice.com/api/v1/Customer/${data}`);
  // return _axios["default"].get("https://api.keeenservice.com/api/v1/Customer/".concat(data)); // return axios.get( `https://uatapi.keeenservice.com/api/v1/Customer/${data}`);
}

function postCustomer(data) {
  return _axios["default"].post(host_url+'/api/v1/Customer', data); // return axios.post('https://uatapi.keeenservice.com/api/v1/Customer', data);
  // return _axios["default"].post('https://api.keeenservice.com/api/v1/Customer', data); // return axios.post('https://uatapi.keeenservice.com/api/v1/Customer', data);
}

function updateCustomer(data) {
  return _axios["default"].put(host_url+'/api/v1/Customer', data); // return axios.put('https://uatapi.keeenservice.com/api/v1/Customer', data);
  // return _axios["default"].put('https://api.keeenservice.com/api/v1/Customer', data); // return axios.put('https://uatapi.keeenservice.com/api/v1/Customer', data);
}

function deleteCustomerByID(data) {
  return _axios["default"]["delete"](host_url+"/api/v1/Customer/".concat(data)); // return axios.delete( `https://uatapi.keeenservice.com/api/v1/Customer/${data}`);
  // return _axios["default"]["delete"]("https://api.keeenservice.com/api/v1/Customer/".concat(data)); // return axios.delete( `https://uatapi.keeenservice.com/api/v1/Customer/${data}`);
}
