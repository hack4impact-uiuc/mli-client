import axios from 'axios';

const BACKEND_URL =
  'https://vilx2sy763.execute-api.us-east-1.amazonaws.com/Prod';
const API_TOKEN = 'miaomiaoVERYsecurityMIAO';

export const getOverlay = (preImage, postImage, noiseReduction) => {
  return axios({
    method: 'post',
    url: `${BACKEND_URL}`,
    data: { preImage, postImage, noiseReduction },
    headers: { 'Content-Type': 'application/json', 'x-api-key': API_TOKEN }
  })
    .then(response => ({
      type: 'OVERLAY_SUCCESS',
      response
    }))
    .catch(error => ({ type: 'OVERLAY_ERROR', error }));
};

export const getLabeled = () => {};
