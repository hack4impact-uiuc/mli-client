import axios from 'axios';

//const BACKEND_URL = '';
//const API_TOKEN = '';
const BACKEND_URL =
  'https://vilx2sy763.execute-api.us-east-1.amazonaws.com/Prod';
const API_TOKEN = 'miaomiaoVERYsecurityMIAO';

export const getOverlay = (pre, post, noiseReduction) => {
  const data = new FormData();
  data.append('preImage', pre);
  data.append('postImage', post);
  data.append('noiseReduction', noiseReduction);
  console.log(data);

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-api-key', API_TOKEN);

  return axios({
    method: 'post',
    url: `${BACKEND_URL}`,
    data: { preImage: pre, postImage: post },
    headers: { 'Content-Type': 'application/json', 'x-api-key': API_TOKEN }
  })
    .then(response => ({
      type: 'OVERLAY_SUCCESS',
      response: response
    }))
    .catch(error => ({ type: 'OVERLAY_ERROR', error }));
  // return axios
  //   .post(`${BACKEND_URL}/overlay?key=${API_TOKEN}`, data, headers)
  //   .then(response => ({ type: 'OVERLAY_SUCCESS', response }))
  //   .catch(error => ({ type: 'OVERLAY_ERROR', error }));
};
