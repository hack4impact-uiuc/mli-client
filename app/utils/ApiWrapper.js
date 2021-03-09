import axios from 'axios';

const BACKEND_URL = '';
const API_TOKEN = '';

export const getOverlay = (preImage, postImage, noiseReduction) => {
  return axios({
    method: 'post',
    url: `${BACKEND_URL}/overlay`,
    data: { preImage, postImage, noiseReduction },
    headers: { 'Content-Type': 'application/json', 'x-api-key': API_TOKEN },
    maxBodyLength: 100000000
  })
    .then(response => {
      console.log(response);
      return {
        type: 'OVERLAY_SUCCESS',
        response
      };
    })
    .catch(error => ({ type: 'OVERLAY_ERROR', error }));
};

export const getAnnotate = () => {
  return axios({
    method: 'get',
    url: `${BACKEND_URL}/annotate`,
    headers: { 'Content-Type': 'application/json', 'x-api-key': API_TOKEN }
  })
    .then(response => {
      console.log(response);
      return {
        type: 'ANNOTATE_SUCCESS',
        response
      };
    })
    .catch(error => ({ type: 'ANNOTATE_ERROR', error }));
};
