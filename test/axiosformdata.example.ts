import axios from 'axios';
import { createReadStream } from 'fs';
import axiosFormData from '../src/axiosformdata';

(async () => {
  // connect axiosFormData interceptor to axios
  axios.interceptors.request.use(axiosFormData);

  // send request with a file in it, it automatically becomes form-data
  const response = await axios.request({
    method: 'POST',
    url: 'http://httpbin.org/post',
    data: {
      nonfile: 'Non-file value',
      file: createReadStream('test/example.txt'),
    },
  });

  // response should show "files" with file content, "form" with other values
  // and multipart/form-data with random boundary as request header
  console.log(response.data);
})();
