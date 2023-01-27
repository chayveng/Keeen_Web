import axios from 'axios';
import React, { useState } from 'react';
import configApi from "../../../../configApi.json";
// import {ConstantContext} from "../../../../App";
// import {useContext} from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
// const context = useContext(ConstantContext);
// const host_url = context.api;

// const host_url = "https://localhost:7029";
// const host_url = "http://13.212.143.253:1771";
const host_url = configApi.API_SERVER;
export function getAllProduct(data)    {
    return axios.get( host_url+`/api/v1/Product/products?${data}`)
  // return axios.get( `https://api.keeenservice.com/api/v1/Product/products?${data}`)
  // return axios.get( `https://uatapi.keeenservice.com/api/v1/Product/products?${data}`)
}

export function getProductSearch(data) {
    return axios.get( host_url+`/api/v1/Product/${data}`);
  // return axios.get( `https://api.keeenservice.com/api/v1/Product/${data}`);
  // return axios.get( `https://uatapi.keeenservice.com/api/v1/Product/${data}`);
  }

  export function postProduct(data) {
  return axios.post(host_url+'/api/v1/Product', data);
    // return axios.post('https://api.keeenservice.com/api/v1/Product', data);
  // return axios.post('https://uatapi.keeenservice.com/api/v1/Product', data);
}

export function updateProduct(data) {
  return axios.put(host_url+'/api/v1/Product', data);
  // return axios.put('https://api.keeenservice.com/api/v1/Product', data);
  // return axios.put('https://uatapi.keeenservice.com/api/v1/Product', data);
}

export function deleteProductrByID(data) {
  return axios.delete( host_url+`/api/v1/Product/${data}`);
  // return axios.delete( `https://api.keeenservice.com/api/v1/Product/${data}`);
  // return axios.delete( `https://uatapi.keeenservice.com/api/v1/Product/${data}`);
}
