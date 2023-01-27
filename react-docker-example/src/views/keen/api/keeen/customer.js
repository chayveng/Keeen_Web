import axios from 'axios';
import React, { useState } from 'react';
import configApi from "../../../../configApi.json";

// const host_url = "https://localhost:7029";
// const host_url = "http://13.212.143.253:1771";
const host_url = configApi.API_SERVER;
export function getAllCustomer(data)    {
    return axios.get(host_url+`/api/v1/Customer/customers?${data}`)
  // return axios.get(`https://api.keeenservice.com/api/v1/Customer/customers?${data}`)
  // return axios.get(`https://uatapi.keeenservice.com/api/v1/Customer/customers?${data}`)
}

export function getCustomerByID(data) {
    return axios.get( host_url+`/api/v1/Customer/${data}`);
  // return axios.get( `https://api.keeenservice.com/api/v1/Customer/${data}`);
  // return axios.get( `https://uatapi.keeenservice.com/api/v1/Customer/${data}`);
  }

  export function postCustomer(data) {
  return axios.post(host_url+'/api/v1/Customer', data);
    // return axios.post('https://api.keeenservice.com/api/v1/Customer', data);
  // return axios.post('https://uatapi.keeenservice.com/api/v1/Customer', data);
}

export function updateCustomer(data) {
  return axios.put(host_url+'/api/v1/Customer', data);
  // return axios.put('https://api.keeenservice.com/api/v1/Customer', data);
  // return axios.put('https://uatapi.keeenservice.com/api/v1/Customer', data);
}

export function deleteCustomerByID(data) {
  return axios.delete( host_url + `/api/v1/Customer/${data}`);
  // return axios.delete( `https://api.keeenservice.com/api/v1/Customer/${data}`);
  // return axios.delete( `https://uatapi.keeenservice.com/api/v1/Customer/${data}`);
}
