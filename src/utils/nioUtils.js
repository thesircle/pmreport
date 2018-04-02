let timeout= (ms, promise) => { //{M.A}: ms/timeout needs improvements
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({status:504, message:"time out"});
    }, ms);
    promise.then(resolve, reject);
  });
};
export const api = (url, params, ms) => {
  return timeout(ms, fetch(url, params)).then((response) => {
    return response.json().then((body) => ({body, response}));
  }).catch((error) => {
    throw error;
  });
};

let headers = {
  "Authorization" : "Bearer ahem ahem",
};

export const get = (url, ms=20000, params={}) => {
  if (params.headers) {
    Object.assign(headers, params.headers);
  }
  let finalParams = Object.assign({}, params || {}, {
    method: "GET",
    headers: headers
  });

  return api(url, finalParams, ms);
};


export const post = (url, body, params={}) => {
  Object.assign(headers, {
    "Content-Type": "application/json"
  });
  if (params.headers) {
    Object.assign(headers, params.headers);
  }

  let finalParams = Object.assign({}, params, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });

  return api(url, finalParams);
};