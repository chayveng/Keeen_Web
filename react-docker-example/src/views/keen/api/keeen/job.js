import axios from 'axios';
import React, { useState } from 'react';
import configApi from "../../../../configApi.json";

// const host_url = "https://localhost:7029";
// const host_url = "http://13.212.143.253:1771";
const host_url = configApi.API_SERVER;
export function getJobAll() {
  return axios.get(host_url+'/api/v1/Test');
  // return axios.get(host_url+'/api/v1/Job');
  // return axios.get('https://api.keeenservice.com/api/v1/Job');
  // return axios.get('https://uatapi.keeenservice.com/api/v1/Job');
}
export function getNextJobID() {
  return axios.get(host_url +'/api/v1/Test/jobid');
  // return axios.get(host_url +'/api/v1/job/jobid');
  // return axios.get('https://api.keeenservice.com/api/v1/job/jobid');
  // return axios.get('https://uatapi.keeenservice.com/api/v1/job/jobid');
}
export function getJobAllPageList(data) {
  return axios.get(host_url+`/api/v1/Test/jobs?${data}`);
  // return axios.get(host_url+`/api/v1/Job/jobs?${data}`);
  // return axios.get(`https://api.keeenservice.com/api/v1/Job/jobs?${data}`);
  // return axios.get(`https://uatapi.keeenservice.com/api/v1/Job/jobs?${data}`);
}
export function getJobSearch(data) {
  return axios.get(host_url+`/api/v1/Test/${data}`);
  // return axios.get(host_url+`/api/v1/job/${data}`);
  // return axios.get(`https://api.keeenservice.com/api/v1/job/${data}`);
  // return axios.get(`https://uatapi.keeenservice.com/api/v1/job/${data}`);
}

export function updateJob(data) {
  // return axios.put(host_url+`/api/v1/Test/`,data);
  return axios.put(host_url+`/api/v1/Test`, data);
  // return axios.put(host_url+`/api/v1/Job/`,data);
  // return axios.put(`https://api.keeenservice.com/api/v1/job/`,data);
  // return axios.put(`https://uatapi.keeenservice.com/api/v1/job/`,data);
}
export function postJob(data) {
  return axios.post(host_url+`/api/v1/Test`, data);
  // return axios.post(host_url+`/api/v1/Job`, data);
  // return axios.post(`https://api.keeenservice.com/api/v1/job`, data);
  // return axios.post(`https://uatapi.keeenservice.com/api/v1/job`, data);
}

export function deleteJobSearch(data) {
  return axios.delete(host_url+`/api/v1/Test/${data}`);
  // return axios.delete(host_url+`/api/v1/Job/${data}`);
  // return axios.delete(`https://api.keeenservice.com/api/v1/job/${data}`);
  // return axios.delete(`https://uatapi.keeenservice.com/api/v1/job/${data}`);
}
