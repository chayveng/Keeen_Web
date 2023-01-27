import axios from 'axios';
import React, { useState } from 'react';
import configApi from "../../../../configApi.json";

const base_url =
  'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';

// export function getData(config, callback, errorcallback) {
//   axios
//     .get(base_url, config)
//     .then(res => {
//       //do something
//       if (callback != null) {
//         callback(res);
//       }
//     })
//     .catch(err => {
//       // catch error
//       if (errorcallback != null) {
//         errorcallback(err);
//       }
//     });
// }

// const host_url = "https://localhost:7029";
// const host_url = "http://13.212.143.253:1771";
const host_url = configApi.API_SERVER;
export function getEmployeeAll(data) {
  return axios.get(host_url +`/api/v1/Employee/employees?${data}`);
  // return axios.get(`https://api.keeenservice.com/api/v1/Employee/employees?${data}`);
  // return axios.get(`https://uatapi.keeenservice.com/api/v1/Employee/employees?${data}`);
}
export function getEmployeeAllData() {
  return axios.get(host_url+`/api/v1/Employee`);
  // return axios.get(`https://api.keeenservice.com/api/v1/Employee`);
  // return axios.get(`https://uatapi.keeenservice.com/api/v1/Employee`);
}
export function postEmpolyee(data) {
  return axios.post(host_url+'/api/v1/Employee', data);
  // return axios.post('https://api.keeenservice.com/api/v1/Employee', data);
  // return axios.post('https://uatapi.keeenservice.com/api/v1/Employee', data);
}

export function getEmployeeByID(data) {
  return axios.get(host_url+`/api/v1/Employee/${data}`);
  // return axios.get(`https://api.keeenservice.com/api/v1/Employee/${data}`);
  // return axios.get(`https://uatapi.keeenservice.com/api/v1/Employee/${data}`);
}


export function updateEmployee(data){
  return axios.put(host_url+'/api/v1/Employee', data);
  // return axios.put('https://api.keeenservice.com/api/v1/Employee', data);
  // return axios.put('https://uatapi.keeenservice.com/api/v1/Employee', data);
}

export function deleteEmployee(data){
  return axios.delete(host_url+`/api/v1/Employee/${data}`);
  // return axios.delete(`https://api.keeenservice.com/api/v1/Employee/${data}`);
  // return axios.delete(`https://uatapi.keeenservice.com/api/v1/Employee/${data}`);
}
