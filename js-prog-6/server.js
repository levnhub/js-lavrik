import axios from 'axios';

// create custom axios config
const server = axios.create({
  baseURL: '/js-frontend-api',
});

// handle request on event
server.interceptors.request.use(function (request) {
  // you can write headers here
  // console.log('interceptor request', request);
  // if(localStorage.getItem('token'))
  // request.headers.Authorization = '';
  return request;
});

server.interceptors.response.use(function (response) {
  // you can handle errors here
  // console.log('interceptor response', response);
  // if (typeof response !== 'object') {
  //   throw new Error('not JSON object');
  // }
  return response;
});

export default server;
