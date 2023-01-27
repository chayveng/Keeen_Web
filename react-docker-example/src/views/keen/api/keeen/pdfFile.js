import axios from 'axios';
import React, { useState } from 'react';
import configApi from "../../../../configApi.json";

// const host_url = "https://localhost:7029";
// const host_url = "http://13.212.143.253:1771";
const host_url = configApi.API_SERVER;
export function getPDFfile(data) {
    return axios.post( host_url+`/api/v1/PDF/pdf1/${data}`);
  // return axios.post( `https://api.keeenservice.com/api/v1/PDF/pdf1/${data}`);
}
