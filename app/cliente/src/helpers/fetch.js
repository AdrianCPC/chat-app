const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSinToken = async (endpoint, data, method = "GET") => {
  const url = ${ baseUrl}/${ endpoint};
  if (method ===  'GET') {
    const resp = await fetch (url);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: { 
        'content-type': 'application/json'
      },
      body:data
    })

    return await resp.json();

  }
};
