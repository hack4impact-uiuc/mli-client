import axios from 'axios';

const BACKEND_URL =
  'https://fih642j6q0.execute-api.us-east-1.amazonaws.com/Prod';
const API_TOKEN = 'miaomiaoVERYsecurityMIAO';

export const getOverlay = (preImage, postImage, noiseReduction) => {
  return axios({
    method: 'post',
    url: `${BACKEND_URL}/overlay`,
    data: { preImage, postImage, noiseReduction },
    headers: { 'Content-Type': 'application/json', 'x-api-key': API_TOKEN }
  })
    .then(response => ({
      type: 'OVERLAY_SUCCESS',
      response
    }))
    .catch(error => ({ type: 'OVERLAY_ERROR', error }));
};

export const getAnnotate = () => {
  return axios({
    method: 'get',
    url: `${BACKEND_URL}/annotate`,
    headers: { 'Content-Type': 'application/json', 'x-api-key': API_TOKEN }
  })
    .then(response => ({
      type: 'ANNOTATE_SUCCESS',
      response
    }))
    .catch(error => ({ type: 'ANNOTATE_ERROR', error }));
};
