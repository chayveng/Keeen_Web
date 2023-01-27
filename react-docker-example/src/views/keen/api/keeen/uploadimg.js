import axios from 'axios';
import React, { useState } from 'react';
import configApi from "../../../../configApi.json";

const options = {
  headers: { "Content-Type": "multipart/form-data" }
}

// const host_url = "https://localhost:7029";
// const host_url = "http://13.212.143.253:1771";
const host_url = configApi.API_SERVER;
export function postImage(data) {
  return axios.post(host_url+`/api/v1/Images`,data,options);
  // return axios.post(`https://api.keeenservice.com/api/v1/Images`,data,options);
}
export function getImage(data) {
    return axios.get(host_url+`/api/v1/Images/${data}`);
  // return axios.get(`https://api.keeenservice.com/api/v1/Images/${data}`);
}

  export function putImage(data) {
    return axios.put(host_url+`/api/v1/Images/`,data,options);
    // return axios.put(`https://api.keeenservice.com/api/v1/Images/`,data,options);
}
export function deleteImage(data) {
  return axios.delete( host_url+`/api/v1/Images/${data}`);
  // return axios.delete( `https://api.keeenservice.com/api/v1/Images/${data}`);
}
