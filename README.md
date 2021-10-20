# axios-form-data

Interceptor for Axios to automatically handle file uploads.

Uses `form-data` to encode `multipart/form-data` type request bodies when a file is detected in body.

- Use: `npm i axios-form-data`
- Run example: `npm run example`

```ts
import axiosFormData from 'axios-form-data';
import axios from 'axios';

// connect axiosFormData interceptor to axios
axios.interceptors.request.use(axiosFormData);

// send request with a file in it, it automatically becomes form-data
const response = await axios.request({
  method: 'POST',
  url: 'http://httpbin.org/post',
  data: {
    nonfile: 'Non-file value',
    file: createReadStream('somefile'),
  },
});

// response should show "files" with file content, "form" with other values
// and multipart/form-data with random boundary as request header
console.log(response.data);
```