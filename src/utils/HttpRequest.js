import axios from 'axios';

const headersConfig = (token = null) => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
  };
  
  export const HTTP_VERBS = {
    POST: "post",
    PUT: "put",
    DELETE: "delete",
    GET: "get"
  };

export const httpRequest= async ({
    method = HTTP_VERBS.POST,
    endpoint = "/",
    body = {},
    params = {}, //query params
    token = null

})=> {
    try {
        const url = process.env.REACT_APP_API_URL + endpoint;
        const options = {
          url,
          method,
          data: body,
          params,
          headers: headersConfig(token),
        };
        return await axios(options);
      } catch (error) {
        throw error;
      }
}