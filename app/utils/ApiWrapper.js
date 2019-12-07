import axios from 'axios';

const BACKEND_URL = '';
const API_TOKEN = '';

export const getOverlay = (pre, post) => {
  const data = new FormData();
  data.append('preImage', pre);
  data.append('postImage', post);

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-api-key', API_TOKEN);

  return axios
    .post(`${BACKEND_URL}/overlay?key=${API_TOKEN}`, data, headers)
    .then(response => ({ type: 'OVERLAY_SUCCESS', response }))
    .catch(error => ({ type: 'OVERLAY_ERROR', error }));
};
